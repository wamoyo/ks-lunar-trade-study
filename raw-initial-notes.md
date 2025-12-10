# Raw Initial Notes - Lunar Trade Study System

## Project Overview

Kristin Savage is setting up a mission to develop operations infrastructure for the moon (lunar infrastructure). The unique aspect: go as fast as possible using already existing technology (exclusively if possible).

**Goal:** Extract a shopping list from her project documentation, then search the entire web to track down all providers, assess availability, TRL (NASA readiness metric), cost, and other metrics.

## Initial Plan

1. Extract shopping list from presentation slides
2. Create CSV to track items
3. Search for providers, TRL, costs, etc.

**BUT:** Kristin already made the shopping list! She sent a requirements email.

## Requirements from Kristin's Email

**Categories (18 total):**
- Launch vehicles
- Landers and cargo delivery
- Habitation and inflatable modules
- Radiation and thermal protection
- Life support and ECLSS
- Medical systems
- EVA suits and human tooling
- Power systems
- Communications systems
- Navigation and positioning systems
- Mobility / Rovers
- Environmental and subsurface sensing
- Robotics and robotic arms
- Drilling and excavation
- ISRU and resource processing
- Manufacturing and construction
- Dust mitigation
- Storage and logistics (cryogenic tanks, cargo and material storage modules)

**Required Metrics per Item:**
- Vendor
- Model/Variant
- TRL (NASA metric for readiness)
- Mass (kg)
- Power
- Est. Cost (USD)
- Turn around time (how quickly can we get one)
- Notes

**Critical Requirements:**
- Accuracy of each metric is priority
- Must cite sources with links for traceability
- If metric cannot be found from credible source, leave blank
- Want to see gaps to refine process
- Screenshots useful for verification
- Exclude government-only Artemis Program items

**Example Given:**
Launch Vehicles - Falcon 9 Block 5 with some fields blank because couldn't verify from credible sources.

## System Architecture Decision

### Format Choice
- Started with CSV consideration
- Switched to JSON for better citation support (can nest source URLs cleanly)
- Could also use YAML

### Agent Architecture
User mentioned "sub agents" - agents that can be created with files in Claude Code (`.claude/agents/`).

**Research showed:**
- Custom agents in `.claude/agents/` have detection bugs (don't show up in `/agents` command, need restart)
- Task agents have 2-minute timeout (but this is configurable via `~/.claude/settings.json`)
- Decision: Use Task agents with instruction files instead

**Why Task agents + instruction files:**
```
research-instructions/
  master-methodology.md          (shared research process)
  {category}/
    instructions.md              (category-specific guidance)
    prelim-research.md          (step 1 output)
    search-strategies.md        (step 2 output)
```

### Research Process Design

**Parallel vs Sequential:**
- Need parallelization - 18 categories is too much for one agent
- Each category needs deep, thorough research (not superficial)
- Trade study requires extensive searching

**Multi-Phase Approach:**
User suggested breaking research into steps:
1. **Preliminary research** - Extensive search to see what we find
2. **Develop strategies** - Write down multiple search strategies for full coverage (making sure not to miss a single vendor or model!)
3. **Execute strategies** - Do the actual research following those strategies
4. **Verification** - Go back and validate everything

**Incremental JSON Building:**
- Phase 3: Build JSON incrementally as you find items
- All fields start with `verified: false`
- Phase 4: Systematically verify each field, update verified status

### Key Insights on Search Strategies

**Example - EVA Suits:**

A single naive search like "lunar EVA suits for sale" only finds obvious vendors (Collins Aerospace, Axiom Space). You'll miss most of the market because:

1. **Terminology varies:**
   - "Extravehicular Mobility Unit"
   - "Pressure suit"
   - "Spacesuit"
   - "xEMU" (NASA designation)
   - Commercial diving industry: "atmospheric diving suits"

2. **Vendors scattered across industries:**
   - Prime contractors with obvious web presence
   - International companies (Chinese, European, Japanese)
   - Defense contractors that don't advertise
   - Companies with successful NASA SBIR/STTR now selling commercially
   - Adjacent industries (diving, military, hazmat)

3. **Information sources fragmented:**
   - Company websites
   - NASA SBIR/STTR awards database
   - Government contract databases
   - Space conference proceedings
   - Trade publications
   - International space agency partner lists

**Multiple strategies needed:**
- Strategy 1: Direct vendor search (all terminology variations)
- Strategy 2: NASA SBIR/STTR database → companies with commercial products now
- Strategy 3: Reverse engineering from known missions
- Strategy 4: International space agency commercial partner lists
- Strategy 5: Adjacent industry vendors with space-rated products
- Strategy 6: Space conference exhibitor lists
- Strategy 7: **REQUIRED** - techport.nasa.gov search

### NASA TechPort Requirement

**Why TechPort matters:**
- 15,000+ NASA-funded projects
- All have NASA TRL ratings
- Shows which companies have NASA contracts/funding (credibility)
- Reveals technologies transitioning from R&D to commercial

**TechPort Search Strategy:**
- Web interface: https://techport.nasa.gov
- Filter by TRL (focus 6-9 for near-commercial)
- Filter by Technology Areas (TX01-TX17)
- API available: `curl "https://techport.nasa.gov/api/projects"`

**What TechPort provides:**
- Project title/description
- TRL (start, current, end)
- Lead organization (vendor name, type, location)
- Technology taxonomy
- Status and dates
- PI contact info

**Important:** TechPort shows NASA-funded projects, not all commercial vendors. Missing from TechPort ≠ not available.

### Priority: Available NOW

User emphasized: Priority is stuff that's good to go NOW (operational systems, TRL 9).
- Secondary: Near-commercial (TRL 7-8) if clearly approaching availability
- Exclude: Early development (TRL < 7) unless exceptionally relevant

## Directory Structure Created

```
shopping-list-for-luna/
  research-instructions/
    master-methodology.md
    launch-vehicles/
      instructions.md
      phase1-prelim.md
      phase2-strategies.md
      phase3-research/
        iteration-01.md
        iteration-02.md
        ...
      phase4-verification.md
      completion-checklist.md
    landers-cargo-delivery/
      (same structure)
    ... (18 categories total)

  output/
    launch-vehicles.json
    launch-vehicles-sources/
      screenshot-001.png
      ...
    landers-cargo-delivery.json
    ... (18 categories)
```

## Master Methodology File

**4 Phases:**

### Phase 1: Preliminary Research
- Broad exploration of landscape
- Identify major vendors, technologies, standards, quirks, reliability issues, overall state of industry
- Output: `phase1-prelim.md`

### Phase 2: Strategy Development
- Analyze prelim research
- Develop multiple search strategies ensuring complete coverage
- Focus on equipment with NASA TRL ratings
- List specific sources, databases, key jurisdictions, search terms, vendor lists
- Create `completion-checklist.md` with criteria for when research is done
- Output: `phase2-strategies.md`

**Why multiple strategies?** (EVA suits example documented in methodology)

### Phase 3: Deep Research (Iterative)
- Execute strategies from Phase 2
- **Add items to `output/{category}.json` as you find them**
- Include all data fields you can find with source URLs
- Set `verified: false` for all fields initially
- Better to include incomplete items than miss them
- Write iteration notes: `phase3-research/iteration-NN.md`
- Continue iterations until `completion-checklist.md` satisfied
- **By end:** JSON file exists with all found items (unverified)

### Phase 4: Verification
- Go through EVERY item systematically
- For each data field:
  - Re-check source URL is valid
  - Update `verified: true` if credible, `verified: false` if not
  - Capture screenshot if helpful
  - Add `verification_date: "2025-12-08"`
- Create `output/{category}-sources/` for screenshots
- Output: `phase4-verification.md`
- **By end:** All fields marked verified true/false with current URLs

## JSON Format

```json
{
  "category": "Launch Vehicles",
  "last_updated": "2025-12-08",
  "items": [
    {
      "vendor": "SpaceX",
      "model": "Falcon 9 Block 5",
      "trl": {
        "value": 9,
        "source_url": "https://...",
        "verified": true,
        "verification_date": "2025-12-08"
      },
      "mass_kg": {
        "value": 549000,
        "source_url": "https://...",
        "verified": true,
        "verification_date": "2025-12-08"
      },
      "power_kw": {
        "value": null,
        "source_url": null,
        "verified": false,
        "notes": "Not applicable for launch vehicles"
      },
      "cost_usd": {
        "value": null,
        "source_url": null,
        "verified": false,
        "notes": "Could not find credible source"
      },
      "procurement_lead_time": {
        "value": "6-8 weeks",
        "source_url": "https://...",
        "verified": true,
        "verification_date": "2025-12-08"
      },
      "notes": "Lunar not directly stated; LEO figures available but not surface-specific."
    }
  ]
}
```

## Real-Time Monitoring Dashboard

User wanted a UI to watch research progress in real-time.

**Tech Stack:**
- Deno server with SSE (Server-Sent Events)
- Port 8009
- `Deno.watchFs()` monitors file changes
- Pushes updates to browser instantly

**Dashboard Features:**
- Grid view of all 18 categories
- Shows: current phase, item counts, last updated, iteration count
- Click category → modal with full JSON data
- Verification status badges (green/red)
- Clickable source URLs
- Screenshot indicators (hover tooltips)
- Click iteration names to expand/collapse markdown content

**Space Theme Applied:**
- Twinkling starfield background
- Deep space gradient
- Moon SVG icon (replaced emoji that wasn't rendering)
- Glowing card effects
- System font (Ubuntu preferred, with fallback)
- No Google Fonts (emoji rendering issues)
- Removed float animation (too 1990s)

## Dashboard Technical Issues Encountered & Fixed

### Issue 1: Files Not Updating
**Problem:** Claude Code writes to `.tmp` files then renames them. Watcher was missing these.

**Solution:**
- Watch ALL event types (create, modify, rename, delete)
- Filter out `.tmp` files
- Added 10-second polling as fallback
- Logs event types for debugging

### Issue 2: Phase Detection
**Problem:** UI stuck on "not started" even after research began.

**Solution:**
- Sequential phase checking (1→2→3→4)
- Phase 4 properly overrides Phase 3
- Shows "phase4-verification" when complete

### Issue 3: Emoji/Unicode Issues
**Problem:** Moon emoji showing as `ðŸŒ™`, arrows not rendering.

**Solution:**
- Added `<meta charset="UTF-8">`
- Removed Google Fonts (potential encoding issue)
- Replaced unicode arrows (▶) with ASCII `[+]` / `[-]`
- Used SVG moon icon instead of emoji

### Issue 4: Iteration Toggle UX
**Problem:** When expanding multiple iterations, they all appeared below in one big pile. Not clear which was which.

**Solution:**
- Each iteration in its own wrapper section
- Content appears directly below its link
- Header added showing iteration name
- 20px left indent to show relationship
- 15px gap between iteration sections
- Clear visual hierarchy with borders

## Permission Settings

Created `.claude/settings.local.json`:
```json
{
  "permissions": {
    "allow": [
      "WebSearch",
      "WebFetch"
    ],
    "deny": [],
    "ask": []
  }
}
```

This allows agents to freely use web search and fetch without prompting.

## Test Run: Launch Vehicles

Successfully completed full 4-phase research:

**Results:**
- 10 launch vehicles documented
- Vendors: SpaceX, ULA, Blue Origin, ArianeGroup, JAXA/MHI, ISRO/NSIL, Rocket Lab
- 200+ specifications collected with source citations
- Phase 1: Identified landscape
- Phase 2: Developed 12 search strategies + completion checklist
- Phase 3: 2 iterations (US commercial + international)
- Phase 4: Verified all data, documented confidence levels

**Vehicles Documented:**
1. SpaceX Falcon 9 Block 5 (TRL 9)
2. SpaceX Falcon Heavy Block 5 (TRL 9)
3. ULA Vulcan Centaur (TRL 9)
4. Blue Origin New Glenn 7x2 (TRL 9, newly operational Nov 2025)
5. Blue Origin New Glenn 9x4 (TRL 7, future 2027)
6. ArianeGroup Ariane 6-62 (TRL 9)
7. ArianeGroup Ariane 6-64 (TRL 9)
8. JAXA/MHI H3-24 (TRL 9)
9. ISRO LVM3 (TRL 9)
10. Rocket Lab Neutron (TRL 6, first launch Q1 2026)

**Key Findings:**
- TLI (translunar injection) payload capacity rarely published
- Pricing often proprietary/commercial sensitive
- Best TLI capabilities: New Glenn 9x4 (20,000 kg), Falcon Heavy (~16,800 kg), Vulcan (12,100 kg)
- Most cost-effective: H3-24 ($37M), Falcon 9 ($69.85M)
- TechPort search conducted (limited launch vehicle content as expected)

## Category-Specific Instructions

Each of 18 categories has customized `instructions.md` with:
- Category overview and scope
- What to include (priority TRL 9, secondary TRL 7-8)
- What to exclude (TRL < 7, government-only)
- Key terminology variations
- Known major vendors (not exhaustive)
- Key search terms
- Specific sources to check
- Expected challenges
- Success criteria checklist

## Server Configuration

`deno.json`:
```json
{
  "tasks": {
    "serve": "deno run --allow-net --allow-read --watch server.js"
  }
}
```

Run with: `deno task serve`

## Next Steps

1. Could kick off remaining 17 categories in parallel
2. Each category will run through same 4-phase process
3. Dashboard will show real-time progress for all categories
4. Can review and refine as they complete
5. Eventually: Build UI for the actual trade study comparisons

## Key Principles Established

1. **Accuracy over completeness** (initially) - leave gaps visible
2. **Iterative research** - not one-and-done
3. **Multiple search strategies** - ensure no vendor missed
4. **Incremental building** - add items as found, verify later
5. **Source everything** - every metric needs URL or explanation
6. **Focus on available NOW** - TRL 9 priority, TRL 7-8 secondary
7. **International coverage** - not just US providers
8. **Exclude Artemis-only** - must be commercially available
