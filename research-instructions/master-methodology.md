# Master Research Methodology

## Mission
Conduct comprehensive trade study of commercially available lunar surface equipment. Exclude government-only Artemis Program items. Focus on speed-to-deployment using existing technology.

## Core Principles

### Accuracy Over Completeness (Initially)
- Only record metrics from credible primary or secondary sources
- Leave fields blank if source cannot be verified
- Gaps are valuable - they show where we need to refine our process

### Citation Requirements
- Every metric MUST have a source URL
- Prefer: Vendor official sites > Technical papers > Industry publications > Wikipedia
- Include verification date
- Screenshots encouraged for verification

### Iterative Research
- Research is NOT one-and-done
- Continue iterations until completion checklist satisfied
- Example: If strategy requires checking 135 jurisdictions, do it across multiple iterations

## Research Phases

### Phase 1: Preliminary Research
- Broad exploration to understand the landscape
- Identify major vendors, technologies, standards, quirks, reliability issues, overall state of the indusry, etc
- Output: `phase1-prelim.md` with initial findings

### Phase 2: Strategy Development
- Analyze prelim research
- Develop multiple search strategies ensuring complete coverage
- **Focus on equipment with NASA TRL ratings of 5 or higher** - this narrows scope to systems in active development or better (TRL < 5 is too early stage)
- List specific sources, databases, key jurisdictions, search terms, vendor lists, etc
- Create `completion-checklist.md` with criteria for when research is done
- Output: `phase2-strategies.md` with detailed approach

**Why multiple strategies?** Example using EVA suits:

A single naive search like "lunar EVA suits for sale" only finds obvious vendors (Collins Aerospace, Axiom Space). You'll miss most of the market because:

1. **Terminology varies by vendor/region:**
   - "Extravehicular Mobility Unit" vs "Pressure suit" vs "Spacesuit"
   - "xEMU" (NASA), different international designations
   - Commercial diving industry calls similar tech "atmospheric diving suits"

2. **Vendors are scattered across industries:**
   - Prime contractors with obvious web presence
   - International companies (Chinese, European, Japanese space agencies' commercial partners)
   - Defense contractors that don't publicly advertise
   - Companies with successful NASA SBIR/STTR contracts now selling commercially
   - Adjacent industries pivoting to space (commercial diving, hazmat, military life support)

3. **Information sources are fragmented:**
   - Company websites (obvious but incomplete)
   - NASA SBIR/STTR awards → track which companies have commercial products now
   - Government contract databases (sam.gov, etc.)
   - Space conference proceedings and exhibitor lists
   - Trade publications (SpaceNews, Via Satellite, etc.)
   - International space agency vendor/partner lists (ESA, JAXA, CSA)
   - LinkedIn/Crunchbase for newer commercial players

**Multiple strategies might include:**
- Strategy 1: Direct vendor search using all terminology variations
- Strategy 2: NASA SBIR/STTR database → identify companies with commercial products now
- Strategy 3: Reverse engineering from known missions ("who supplies ISS EVA equipment?")
- Strategy 4: International space agency commercial partner lists
- Strategy 5: Adjacent industry vendors (diving, military, hazmat) with space-rated products
- Strategy 6: Space conference exhibitor lists from past 3 years
- Strategy 7 **required**: techport.nasa.gov search and api search (detailed below)

### Phase 3: Deep Research (Iterative)
- Execute strategies from Phase 2
- **Add items to `output/{category}.json` as you find them**
  - Include all data fields you can find with source URLs
  - Set `verified: false` for all fields initially
  - Better to include incomplete items than miss them
- Write iteration notes: `phase3-research/iteration-NN.md` documenting what you searched
- Continue iterations until `completion-checklist.md` satisfied
- **By end of Phase 3:** JSON file exists with all found items (unverified)

### Phase 4: Verification
- Go through EVERY item in the JSON file systematically
- For each item: Find the most authoritative source (vendor official site, NASA official, government contracts)
- For each field: Read the source and verify the claim matches exactly
  - If matches: Mark with appropriate `verified_tier` (authoritative/credible/reference/caution/unverified)
  - If wrong: **Correct the value** to match the source
  - If not found: Mark `verified_tier: "unverified"` with explanation
  - Add `verification_date: "2025-12-09"`
  - Add `verification_notes` explaining verification
- **Critical:** NO ERRORS allowed - numbers/claims must match sources exactly
- Output: `phase4-verification.md` with errors corrected, what couldn't be verified, statistics
- **By end of Phase 4:** All fields verified with tiers, errors corrected to match reality

## Required Metrics

For each equipment/system:
- **Vendor**: Company name
- **Model/Variant**: Specific model designation
- **TRL**: Technology Readiness Level (NASA 1-9 scale)
- **Mass (kg)**: Total mass
- **Power**: Power requirements (kW preferred)
- **Est. Cost (USD)**: Estimated acquisition cost
- **Procurement Lead Time**: Time from purchase order to delivery/receipt (e.g., "18 months from order", "24 month lead time")
- **Notes**: Any important context or limitations

## JSON Output Format

```json
{
  "category": "Launch Vehicles",
  "last_updated": "2025-12-09",
  "items": [
    {
      "vendor": "SpaceX",
      "model": "Falcon 9 Block 5",
      "trl": {
        "value": 9,
        "source_url": "https://spacex.com/vehicles/falcon-9",
        "verified_tier": "authoritative",
        "verification_date": "2025-12-09",
        "verification_notes": "Confirmed operational since 2018 from vendor site"
      },
      "mass_kg": {
        "value": 549054,
        "source_url": "https://spacex.com/vehicles/falcon-9",
        "verified_tier": "authoritative",
        "verification_date": "2025-12-09",
        "verification_notes": "Corrected from 549000 to 549054 per vendor specifications"
      },
      "cost_usd": {
        "value": 67000000,
        "source_url": "https://spacenews.com/spacex-announces-pricing",
        "verified_tier": "credible",
        "verification_date": "2025-12-09",
        "verification_notes": "Confirmed from SpaceNews citing official SpaceX announcement"
      },
      "payload_leo_kg": {
        "value": 22800,
        "source_url": "https://spacex.com/vehicles/falcon-9",
        "verified_tier": "authoritative",
        "verification_date": "2025-12-09",
        "verification_notes": "Verified from vendor official specifications"
      },
      "notes": "Most frequently launched rocket globally. Reusable first stage."
    }
  ]
}
```

## NASA TechPort Search Strategy

**TechPort is REQUIRED for each category** - it contains 15,000+ NASA-funded projects with TRL ratings.

### Why TechPort Matters
- All projects have NASA TRL ratings (our filter)
- Shows which companies have NASA contracts/funding (credibility indicator)
- Reveals technologies transitioning from R&D to commercial availability
- Provides lead organization contact info

### How to Search TechPort

**Option 1: Web Interface (Recommended for initial search)**
1. Go to https://techport.nasa.gov
2. Search using category keywords (e.g., "lunar rover", "habitat", "EVA suit")
3. Filter by TRL (focus on 5-9 to capture systems in development or better)
4. Filter by Technology Areas (TX01-TX17) relevant to your category
5. Note project IDs of relevant items

**Option 2: API (For comprehensive coverage)**
```bash
# Get all project IDs
curl "https://techport.nasa.gov/api/projects"

# Get specific project details
curl "https://techport.nasa.gov/api/projects/{projectId}"
```

### What TechPort Provides
- **Direct from API:**
  - Project title and description
  - TRL (start, current, end)
  - Lead organization (vendor name, type, location)
  - Technology taxonomy classification
  - Project status and dates
  - Principal Investigator contact info

- **May be in description/files:**
  - Technical specifications
  - Performance metrics
  - Sometimes cost/mass data

### Important Notes
- TechPort shows NASA-funded projects, not all commercial vendors
- A vendor in TechPort = credible, has NASA experience
- **Missing from TechPort ≠ not available** - still search other sources
- Use TechPort to identify vendors, then find their commercial products
- Check if SBIR/STTR projects have transitioned to commercial products

## Quality Checks

Before considering research complete:
- [ ] TechPort searched thoroughly for this category
- [ ] All major vendors in this category researched
- [ ] Multiple search strategies executed
- [ ] Cross-referenced findings across sources
- [ ] Verified each data point has credible source or marked as unavailable
- [ ] Screenshots captured for key specifications
- [ ] Completion checklist in phase3-research folder satisfied
