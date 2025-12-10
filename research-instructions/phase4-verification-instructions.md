# Phase 4: Verification Instructions

**Goal:** Make the trade study accurate and complete by finding authoritative sources and correcting all claims to match reality.

---

## Source Tiers

1. **Authoritative** - Vendor official sites, NASA official, government contracts
2. **Credible** - Peer-reviewed papers, SpaceNews, Aviation Week
3. **Reference** - Conference proceedings, trade publications
4. **Caution** - Wikipedia, general news
5. **Unverified** - No source found

---

## TRL Definitions (NASA)

- **TRL 5**: Component/breadboard validated in relevant environment
- **TRL 6**: Fully functional prototype or representational model
- **TRL 7**: Working prototype demonstrated in operational (space) environment
- **TRL 8**: System tested and flight qualified, ready for implementation
- **TRL 9**: System flight proven through successful mission operations

---

## Process

**CRITICAL: Work on ONE item at a time.**

### Step 1: Create Task List

Use TodoWrite to create a task list with one task per item in the JSON (e.g., "Verify [Vendor] [Model]"). Mark all tasks as `pending`.

### Step 2: Process Each Item Sequentially

For each item:

1. **Mark task `in_progress`** in TodoWrite

2. **MANDATORY FIRST STEP: Try vendor official site**

   Follow this exact sequence:

   a. **WebSearch** with site: operator: `"[model name] site:[vendor.com]"`

   b. **WebFetch** the vendor official page

   c. **If WebFetch fails or returns no specifications:**
      - Use **Puppeteer** to render the page and extract specs
      - Launch browser, navigate to vendor page, use evaluate to get `document.body.innerText`

   d. **If vendor site doesn't have the data you need:**
      - THEN search other authoritative sources (NASA official sites, government contracts, industry publications)

   **DO NOT skip trying the vendor official site first. DO NOT use Wikipedia until you've exhausted authoritative sources.**

3. **READ the source carefully**

4. **For EACH field** (TRL, mass_kg, payload_leo_kg, cost_usd, procurement_lead_time, etc.):

   **What does the source actually say?**

   - **Matches the JSON** → Verify it:
     ```json
     "field": {
       "value": <value>,
       "source_url": "https://authoritative-source.com",
       "verified_tier": "authoritative",
       "verification_date": "2025-12-09",
       "verification_notes": "Confirmed from [source]"
     }
     ```

   - **Different from JSON** → Correct it to match the source exactly:
     ```json
     "field": {
       "value": <corrected_value>,
       "source_url": "https://authoritative-source.com",
       "verified_tier": "authoritative",
       "verification_date": "2025-12-09",
       "verification_notes": "Corrected from [old] to [new] per [source]"
     }
     ```

   - **Source doesn't have this info** → Search for additional sources OR mark unverified:
     ```json
     "field": {
       "value": null,
       "source_url": null,
       "verified_tier": "unverified",
       "verification_date": "2025-12-09",
       "verification_notes": "Not published. Checked [sources tried]"
     }
     ```

   You may have to do additional WebSearch calls for each field or WebFetch (or curl) calls or reread for each field. It is imperitive that there are NO ERRORS in our trade study. **If there's a number (or other claim) in our trade study that's marked Authoritative, it better be the exact info found at the source URL!**

5. **Assign tier** based on which source type you used

6. **Update JSON** with verified data for this item

7. **Mark task `completed`** in TodoWrite

8. **Move to next item** - Repeat steps 1-7

   Be exhaustive. Go one item and then one field at a time. Find the most authoritative sources you can and correct/verify as many fields as possible.

---

## Critical Rules

- **Find truth** - You're correcting the trade study to reflect real hardware
- **Read carefully** - Numbers and claims must match exactly what the source says or be marked UNVERIFIED
- **Most authoritative first** - Always try vendor model landing page before settling for Wikipedia or news sites
- **Fix errors immediately** - If you find mistakes in numbers or claims, fix them to match the source exactly
- **Mark unverified if not found** - Don't guess. If you can't find it, mark unverified
- **TRL must match definition** - "Operational since 2024" = TRL 9, "Testing" = TRL 6-7, etc
- **No batch processing** - Complete one item fully before moving to the next

---

## Output

**Update JSON:**
- All fields with `verified_tier`, `verification_date`, `verification_notes`
- All errors corrected to match authoritative sources
- All unfindable info marked `verified_tier: "unverified"`

**Create phase4-verification.md (REQUIRED):**
- Path: `/home/costa/projects/shopping-list-for-luna/research-instructions/[category]/phase4-verification.md`
- Include: Errors found and corrected, what couldn't be verified and why, statistics
