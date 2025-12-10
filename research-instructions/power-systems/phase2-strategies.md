# Phase 2: Search Strategies - Power Systems

**Date:** 2025-12-08
**Category:** Power Systems for Lunar Surface Operations
**Researcher:** Claude Sonnet 4.5

## Overview

This document outlines comprehensive search strategies to ensure complete coverage of commercially available and near-commercial (TRL 5+) lunar power systems. Based on Phase 1 findings, we identified five major technology categories and multiple vendor types requiring different search approaches.

## Search Strategy Matrix

### Strategy 1: Direct Vendor Search (Known Major Players)

**Objective:** Obtain detailed specifications from identified vendors

**Method:**
- Visit official vendor websites for each company identified in Phase 1
- Search product catalogs, technical datasheets, press releases
- Look for "lunar", "space", "power systems" product pages
- Download available technical specifications, white papers

**Vendor List to Search:**
1. **Solar Arrays:**
   - Astrobotic (VSAT, VSAT-XL, LunaGrid)
   - Lockheed Martin (LVSAT)
   - Honeybee Robotics / Blue Origin (LAMPS)
   - Sierra Space (SMT solar panels)
   - Redwire / Deployable Space Systems (iROSA, ROSA)
   - MMA Design LLC (solar arrays)
   - SpaceTech-i (solar arrays)
   - Source Space (large deployable arrays)

2. **Batteries:**
   - EaglePicher Technologies
   - EnerSys ABSL
   - GS Yuasa Lithium Power
   - Mitsubishi Electric (MELCO)
   - Saft (now part of TotalEnergies)

3. **Fuel Cells:**
   - Honda (regenerative fuel cells)
   - mPower Technology (DragonSCALES solar + LAMPS partnership)
   - Investigate ESA commercial partners for PEFC technology

4. **Nuclear Systems:**
   - Zeno Power (commercial RTG)
   - Aerojet Rocketdyne (RPS heritage, check current offerings)
   - Lockheed Martin (40kW FSP involvement)
   - Check NASA Glenn Research Center for Kilopower commercial transition plans

5. **Power Management:**
   - Astrobotic (LunaGrid)
   - Check NASA tech transfer for BCM, Universal Power Converter

**Data to Extract:**
- Specific model numbers and variants
- Power output (kW or W)
- Mass (kg)
- Dimensions (stowed and deployed)
- Operating temperature range
- Efficiency ratings
- Cost estimates or pricing (if available)
- Lead times / turnaround time
- TRL rating
- Heritage missions / flight history

**Expected Completeness:** 40-50% (many specs won't be publicly listed)

---

### Strategy 2: NASA TechPort Comprehensive Search (REQUIRED)

**Objective:** Identify ALL NASA-funded power systems projects at TRL 5+

**Method A: Web Interface Search**
1. Go to https://techport.nasa.gov
2. Perform multiple keyword searches:
   - "lunar power"
   - "solar array" + filter by lunar/moon projects
   - "battery system"
   - "fuel cell"
   - "nuclear power" OR "fission" OR "radioisotope"
   - "Kilopower"
   - "energy storage"
   - "power management"
   - "power distribution"
   - "PMAD"
   - "regenerative fuel cell"
   - "vertical solar array"
3. Apply filters:
   - **TRL:** Focus on 5, 6, 7, 8, 9 (exclude 1-4)
   - **Technology Areas:**
     - TX03 (Space Power and Energy Storage)
     - TX01 (Propulsion Systems) - may include power for electric propulsion
     - TX12 (Materials, Structures, Mechanical Systems, and Manufacturing)
   - **Program:** Artemis, STMD, Game Changing Development
4. For each relevant project:
   - Record Project ID
   - Extract lead organization (vendor name)
   - Note TRL (start, current, end)
   - Capture any technical specs in description
   - Check for related documents/links

**Method B: API Approach (if web results insufficient)**
```bash
# Get all project IDs
curl "https://techport.nasa.gov/api/projects" > all_projects.json

# Write script to filter for power-related keywords in titles/descriptions
# Extract projects with TRL >= 5
# Query each relevant project for full details:
curl "https://techport.nasa.gov/api/projects/{projectId}"
```

**Technology Areas to Focus On:**
- TX03: Space Power and Energy Storage (primary)
- TX03.1: Power Generation
- TX03.2: Energy Storage
- TX03.3: Power Management and Distribution

**Expected Output:**
- 20-40 relevant TechPort projects identified
- Vendor names for companies with NASA contracts
- TRL ratings directly from NASA
- Project status and timeline information

**Expected Completeness:** Essential for TRL verification and vendor discovery

---

### Strategy 3: NASA SBIR/STTR Awards Database

**Objective:** Find small businesses commercializing power systems technology

**Method:**
1. Visit https://sbir.nasa.gov
2. Search awards database with keywords:
   - "power system" + "lunar" OR "moon"
   - "solar array"
   - "battery"
   - "fuel cell"
   - "energy storage"
   - "nuclear" OR "fission" OR "radioisotope"
3. Filter by:
   - Phase II and Phase III (more likely to be commercial)
   - Years: 2020-2025 (recent awards)
   - Topic areas related to power/energy
4. For each award:
   - Company name
   - Technology description
   - Award amount and phase
   - Check if company website shows commercial product

**Alternative Source:**
- sbir.gov general database (search NASA awards)
- Filter for power/energy topics

**Expected Output:**
- 15-25 small business vendors with NASA-funded power tech
- Identify which have transitioned to commercial products

**Expected Completeness:** Good for finding smaller vendors not in mainstream press

---

### Strategy 4: Space Industry Publications & Conference Proceedings

**Objective:** Identify vendors through industry events and publications

**Sources to Search:**

**A. Publications:**
- SpaceNews.com - search "lunar power", "space solar", "space batteries"
- Via Satellite
- Space.com
- SatNews
- IEEE Aerospace and Electronic Systems Magazine
- AIAA papers and proceedings

**B. Conference Exhibitor Lists (Past 3 Years: 2022-2025):**
- Space Symposium exhibitor list
- Satellite conference exhibitors
- IAC (International Astronautical Congress) exhibitors
- AIAA SciTech Forum exhibitors
- IEEE Aerospace Conference attendees
- Small Satellite Conference vendors

**Method:**
1. Search publication archives for power systems announcements
2. Search for "lunar power systems" news 2023-2025
3. Obtain exhibitor/sponsor lists from major conferences
4. Cross-reference companies against "power systems" or "energy storage" categories

**Expected Output:**
- 5-10 additional vendors not found through other methods
- Announcement of new products/partnerships
- TRL advancement announcements

**Expected Completeness:** Moderate - good for discovering new market entrants

---

### Strategy 5: International Space Agency Partner/Vendor Lists

**Objective:** Find international vendors and non-US commercial options

**Agencies to Search:**

**A. European Space Agency (ESA)**
- Industry partnerships page
- Search ESA Technology Transfer Program for power systems
- Check ESA Business Incubation Centers for power tech startups
- Review ESA procurement opportunities (vendors bidding)

**B. JAXA (Japan Aerospace Exploration Agency)**
- Commercial partners list
- JAXA startup/technology transfer programs
- Known battery vendors: Mitsubishi Electric, GS Yuasa

**C. Canadian Space Agency (CSA)**
- Canadian space industry directory
- Lunar Exploration Accelerator Program (LEAP) participants

**D. Other National Agencies:**
- UK Space Agency commercial partners
- DLR (German Aerospace Center) industry partnerships
- CNES (French space agency) commercial programs

**Method:**
1. Navigate to each agency's industry/commercial pages
2. Search for power systems, energy storage, solar array vendors
3. Check technology transfer offices
4. Review procurement/contract award announcements

**Expected Output:**
- 5-10 international vendors
- Particularly strong in battery technology (Asia)
- Fuel cell technology (Europe)

**Expected Completeness:** Good for international market coverage

---

### Strategy 6: Adjacent Industry Crossover Vendors

**Objective:** Find vendors from related industries adapting technology for lunar use

**Industries to Investigate:**

**A. Satellite Power Systems**
- Companies making satellite solar arrays and batteries
- Search for "lunar qualified" or "deep space" variants
- Keywords: "satellite power systems", "spacecraft batteries"

**B. Deep Space Mission Vendors**
- Companies with Mars rover, outer planet probe heritage
- RTG and battery systems for deep space
- Search NASA JPL vendor lists

**C. Terrestrial Renewable Energy + Space**
- Solar companies with space divisions
- Energy storage companies entering space market
- Search for companies with both "solar" and "space" in descriptions

**D. Nuclear Power Industry**
- Small modular reactor (SMR) companies with space interest
- Radioisotope thermoelectric generator manufacturers
- Keywords: "space nuclear power", "SMR space applications"

**E. Automotive-to-Space Crossover**
- Honda (fuel cells)
- GM (Ultium batteries for Lockheed LMV)
- Other automotive battery manufacturers entering space

**Method:**
1. Search LinkedIn for companies with both industry tags (e.g., "renewable energy" + "aerospace")
2. Check Crunchbase for "space power" or "space energy" startups
3. Review venture capital space sector investments (2020-2025)
4. Search for "terrestrial to space technology" case studies

**Expected Output:**
- 3-8 crossover vendors
- Potentially lower costs from economies of scale
- Newer market entrants

**Expected Completeness:** Moderate - helps find innovative/cost-competitive options

---

### Strategy 7: NASA Technology Transfer & Patent Search

**Objective:** Identify licensable NASA technologies and companies licensing them

**Sources:**

**A. NASA Technology Transfer Portal**
- https://technology.nasa.gov
- Search for:
  - "Power systems"
  - "Battery"
  - "Solar array"
  - "Power management"
  - "Energy storage"
- Filter by: Available for licensing
- Note: Patent numbers, lead NASA center, potential licensees

**B. NASA Spinoff Publications**
- Review annual NASA Spinoff reports (2020-2025)
- Look for power/energy technologies commercialized
- Identify companies that licensed NASA tech

**C. Specific Technologies Noted in Phase 1:**
- Battery Controller Module (BCM) - TRL 4, available for licensing
- Universal Power Converter for Lunar Power Grid - tech transfer available
- Search patent database for these and related tech

**Method:**
1. Search NASA Technology Transfer Portal
2. For each relevant technology:
   - Note TRL rating
   - Identify NASA center (Glenn for power systems typically)
   - Check if any companies have licensed it
   - Extract technical specifications
3. Search USPTO database for NASA-assigned patents on power systems
4. Cross-reference with company websites to see who's commercializing

**Expected Output:**
- 10-15 available technologies
- 3-5 companies actively licensing NASA power tech
- Baseline technical specs from patent documents

**Expected Completeness:** Good for finding bleeding-edge tech transitioning to commercial

---

### Strategy 8: Terminology Variant Search

**Objective:** Ensure no vendors missed due to terminology differences

**Search Term Matrix:**

| Concept | Primary Term | Variants to Search |
|---------|-------------|-------------------|
| Power Systems | "power system" | "power generation", "electrical power", "EPS" (electrical power system), "power subsystem" |
| Solar Arrays | "solar array" | "photovoltaic array", "PV system", "solar panel", "solar blanket", "solar concentrator" |
| Batteries | "battery" | "energy storage", "electrochemical storage", "rechargeable battery", "secondary battery", "accumulator" |
| Fuel Cells | "fuel cell" | "RFC" (regenerative fuel cell), "PEM fuel cell", "electrolyzer", "hydrogen-oxygen fuel cell" |
| Nuclear - RPS | "radioisotope power" | "RTG", "RPS", "radioisotope thermoelectric generator", "MMRTG", "nuclear battery" |
| Nuclear - Fission | "fission reactor" | "Kilopower", "nuclear reactor", "space reactor", "fission surface power", "FSP" |
| Power Management | "power management" | "PMAD", "power distribution", "power control", "battery controller", "charge controller" |
| Deployment | "deployable" | "retractable", "vertical array", "VSAT", "roll-out array", "ROSA", "flexible array" |
| Lunar-Specific | "lunar" | "Moon", "Artemis", "cislunar", "lunar surface", "south pole" |

**Method:**
1. For each vendor search, use multiple term variants
2. Combine terms: [power technology] + [lunar variant]
3. Search scientific databases (Google Scholar, IEEE Xplore) with variants
4. Check if any vendor uses proprietary naming that was missed

**Expected Completeness:** Essential to catch 100% of relevant vendors

---

### Strategy 9: Reverse Engineering from Known Missions

**Objective:** Identify vendors by working backward from known lunar missions and programs

**Missions/Programs to Investigate:**

**A. Artemis Program Components:**
- Gateway (lunar space station) - who supplies power systems?
- Artemis landers - power system vendors
- Lunar Terrain Vehicle - power system supplier
- Human Landing System (HLS) - power subsystems

**B. Recent/Planned Lunar Missions:**
- VIPER rover (though canceled, who was selected for power?)
- Commercial Lunar Payload Services (CLPS) landers
  - Astrobotic Peregrine - power system vendor?
  - Intuitive Machines Nova-C - battery supplier?
  - Firefly Blue Ghost - power systems?
- International missions:
  - HAKUTO-R (ispace) - Sierra Space SMT confirmed
  - ESA lunar missions
  - JAXA lunar missions

**Method:**
1. For each mission, search for:
   - "Mission name + power system + vendor"
   - "Mission name + solar array + supplier"
   - "Mission name + battery + manufacturer"
2. Check mission press releases for subsystem suppliers
3. Review technical papers about the missions (often cite vendors)
4. Check mission websites for "partners" or "suppliers" pages

**Expected Output:**
- 10-15 vendors identified through mission heritage
- Confirmed flight-proven systems
- TRL 9 ratings for systems already flown

**Expected Completeness:** High for mature/flight-proven systems

---

### Strategy 10: LinkedIn, Crunchbase, and Business Database Search

**Objective:** Find new commercial entrants and startups in space power

**Databases to Search:**

**A. Crunchbase**
- Search: "space power", "lunar power", "space energy"
- Filter by: Founded 2015-2025, Active companies
- Check funding rounds and investors
- Note: Companies with significant funding more likely to have commercial products

**B. LinkedIn Company Search**
- Search: Companies with "space" + "power" OR "energy"
- Filter by: Industry = Aerospace, Aviation & Defense
- Check company pages for product offerings
- Look for recent job postings (indicates active development)

**C. PitchBook / CB Insights**
- Space sector investment data
- Filter for power/energy subsector
- Identify well-funded startups

**D. Trade Organization Member Lists**
- Space Foundation members
- Satellite Industry Association members
- Commercial Spaceflight Federation members
- Filter member lists for "power" or "energy" companies

**Method:**
1. Search each database with power/energy + space keywords
2. Review company descriptions and products
3. Check for "lunar", "moon", or "Artemis" mentions
4. Verify TRL level (often need to visit company website)
5. Note: Funding level, employee count (indicators of commercial readiness)

**Expected Output:**
- 5-10 new companies not found through other methods
- Startups with novel approaches
- Identify which are vapor ware vs. real products

**Expected Completeness:** Good for finding new market entrants

---

### Strategy 11: Government Contract Database Search

**Objective:** Identify vendors through government procurement records

**Databases to Search:**

**A. SAM.gov (System for Award Management)**
- Search NASA contract awards
- Keywords: "power system", "battery", "solar array", "lunar"
- Filter by: Contract value, date range (2020-2025)
- Note: NAICS codes for relevant industries

**B. USASpending.gov**
- NASA awards to contractors
- Filter by: Lunar, Artemis, power systems
- Track which companies receiving funding for power tech

**C. NASA Procurement**
- Check NASA procurement forecasts
- Review RFPs for lunar power systems
- Note: Companies that bid (even if not selected)

**D. DOE Contract Awards**
- Department of Energy awards for space nuclear power
- Kilopower and FSP contractor lists
- RPS development contracts

**Method:**
1. Search contract databases with keywords
2. Extract: Company name, contract value, description, date
3. Visit company website to see if contracted tech became commercial product
4. Cross-reference with other searches to fill data gaps

**Expected Output:**
- Confirm government funding for companies found in other searches
- Find additional contractors not yet publicizing commercial products
- Contract values can inform cost estimates

**Expected Completeness:** Good for vendor discovery, moderate for technical specs

---

### Strategy 12: Academic and Technical Paper Search

**Objective:** Find cutting-edge systems and vendor partnerships from research

**Sources:**

**A. Google Scholar**
- Search: "lunar power systems", "lunar surface power", "space energy storage"
- Filter: 2020-2025
- Look for: Author affiliations (companies vs. universities)

**B. IEEE Xplore**
- Search power systems topics
- Filter: Aerospace, power systems conferences
- Check: Authors from industry (vendor names)

**C. AIAA (American Institute of Aeronautics and Astronautics)**
- Conference proceedings: Space, SciTech
- Search: Power systems, lunar surface, energy storage
- Note: Vendor co-authors on papers

**D. ResearchGate**
- Search lunar power systems
- Check: Industry author profiles
- Sometimes includes white papers not on company websites

**Method:**
1. Search each database with lunar + power keywords
2. Review papers from 2020-2025 (recent developments)
3. Note: Industry co-authors (indicates vendor involvement)
4. Check if papers cite specific products or prototypes
5. Extract: Technical specs, test results, TRL mentions from papers

**Expected Output:**
- Technical specifications not on vendor websites
- Test results and performance data
- Partnership announcements (vendor + university)
- State-of-the-art TRL levels from recent papers

**Expected Completeness:** Excellent for technical specifications, moderate for vendor discovery

---

## Search Execution Plan

### Iteration 1 (First Deep Dive)
1. Strategy 2: NASA TechPort search (REQUIRED)
2. Strategy 1: Direct vendor search for all Phase 1 identified vendors
3. Strategy 9: Reverse engineering from Artemis missions

**Goal:** Establish core vendor list with TRL ratings, identify 15-20 power systems

### Iteration 2 (Expand Vendor List)
4. Strategy 3: NASA SBIR/STTR database
5. Strategy 5: International space agency partners
6. Strategy 10: LinkedIn/Crunchbase startup search

**Goal:** Expand vendor list, find international and startup vendors, target 25-30 systems

### Iteration 3 (Fill Specification Gaps)
7. Strategy 12: Academic/technical papers for detailed specs
8. Strategy 7: NASA technology transfer for specs on available tech
9. Strategy 4: Industry publications for recent announcements

**Goal:** Fill missing technical data (mass, cost, lead time), get latest announcements

### Iteration 4 (Complete Coverage)
10. Strategy 8: Terminology variant re-search to catch missed vendors
11. Strategy 6: Adjacent industry crossover vendors
12. Strategy 11: Government contract database (if large gaps remain)

**Goal:** Ensure comprehensive coverage, final gap filling

### Iteration 5 (Verification Prep)
- Re-check all sources for updated information
- Compile list of vendors to contact directly for missing specs
- Prepare for Phase 4 verification

---

## Data Collection Template

For each power system found, collect:

```
{
  "vendor": "",
  "model": "",
  "category": "", // Solar, Battery, Fuel Cell, RPS, Fission, PMAD
  "trl": {
    "value": null,
    "source_url": "",
    "verified": false
  },
  "power_output_kw": {
    "value": null,
    "source_url": "",
    "verified": false
  },
  "mass_kg": {
    "value": null,
    "source_url": "",
    "verified": false
  },
  "cost_usd": {
    "value": null,
    "source_url": "",
    "verified": false
  },
  "procurement_lead_time": {
    "value": "",
    "source_url": "",
    "verified": false
  },
  "operating_temp_range": {
    "min_c": null,
    "max_c": null,
    "source_url": "",
    "verified": false
  },
  "efficiency": {
    "value": null,
    "source_url": "",
    "verified": false
  },
  "heritage": {
    "missions": [],
    "source_url": "",
    "verified": false
  },
  "notes": ""
}
```

---

## Expected Challenges & Mitigation

### Challenge 1: Pricing Information Rarely Public
**Mitigation:**
- Check government contract databases for contract values
- Look for "starting at $X" in press releases
- Note comparable system costs and estimate
- Mark as "not publicly available" if cannot find

### Challenge 2: Mass Specifications Often Missing
**Mitigation:**
- Academic papers sometimes include mass budgets
- NASA mission documents may list subsystem masses
- Contact vendors directly in later iteration
- Use analogous system masses for estimates (mark as estimated)

### Challenge 3: TRL Ratings May Be Outdated
**Mitigation:**
- Prioritize TechPort for official NASA TRL ratings
- Check publication date of TRL claims
- Look for recent test results indicating TRL advancement
- Use most recent credible source

### Challenge 4: Commercial Availability vs. Development Status Unclear
**Mitigation:**
- Look for "available for order" or "accepting orders" language
- Check for lead time specifications (indicates commercial availability)
- Distinguish between "demonstration completed" and "product available"
- Contact vendor for clarification if ambiguous

### Challenge 5: Vendor Acquisitions and Name Changes
**Mitigation:**
- Track company acquisitions (Redwire bought DSS, Blue Origin bought Honeybee)
- Search both old and new company names
- Check company "About" pages for acquisition history
- Update vendor name to current entity

---

## Quality Assurance Checklist

Before moving to Phase 4, ensure:

- [ ] All 12 search strategies executed
- [ ] TechPort searched with minimum 10 keyword combinations
- [ ] Every vendor from Phase 1 researched in depth
- [ ] Minimum 30 distinct power systems documented (target: 40-50)
- [ ] Each system has at least 3 data fields with sources
- [ ] TRL source verified for each system
- [ ] International vendors included (ESA, JAXA partners)
- [ ] Both mature (TRL 7-9) and development (TRL 5-6) systems included
- [ ] All five technology categories represented:
  - [ ] Solar arrays (minimum 10 systems)
  - [ ] Batteries (minimum 8 systems)
  - [ ] Fuel cells (minimum 3 systems)
  - [ ] RPS (minimum 2 systems)
  - [ ] Fission reactors (minimum 2 systems)
  - [ ] PMAD (minimum 2 systems)

---

**Next Step:** Proceed to Phase 3, executing search strategies iteratively and building `output/power-systems.json` incrementally.
