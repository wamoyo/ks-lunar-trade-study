# Phase 2: Search Strategies - Life Support and ECLSS

**Date:** 2025-12-08
**Researcher:** Claude (Sonnet 4.5)

## Strategic Overview

Life Support and ECLSS research requires multiple search strategies because:
1. **Terminology Variation:** "ECLSS", "life support", "environmental control", "atmosphere revitalization" used interchangeably
2. **Fragmented Vendors:** Major primes (Collins, Honeywell) + specialized companies (Paragon, PCI) + component suppliers (Moog)
3. **Mixed Maturity:** TRL 9 ISS systems alongside TRL 5-8 lunar-optimized developments
4. **Subsystem Complexity:** Complete ECLSS comprises 6+ subsystems (O2, CO2, water, thermal, etc.), each with separate vendors possible
5. **International Sources:** US, European (ESA), Japanese (JAXA), Russian vendors and systems

This phase defines 8+ complementary search strategies to ensure comprehensive coverage.

---

## Strategy 1: NASA TechPort Database Search

**Objective:** Identify all NASA-funded ECLSS projects with TRL 5+ ratings

### Web Interface Search
**URL:** https://techport.nasa.gov

**Search Terms (execute separately):**
- "ECLSS"
- "Environmental Control and Life Support"
- "oxygen generation"
- "water recovery"
- "carbon dioxide removal"
- "CO2 removal"
- "life support system"
- "atmosphere revitalization"
- "air revitalization"
- "Sabatier"
- "water purification space"
- "urine processor"
- "humidity control space"
- "thermal control life support"

**Filters to Apply:**
- **TRL:** 5, 6, 7, 8, 9 (exclude <5)
- **Technology Areas:**
  - TX06 (Human Health, Life Support, and Habitation Systems)
  - TX14 (Thermal Management Systems - if ECLSS-related)
- **Status:** Active, Complete (both have value)

**Data to Capture:**
- Project ID and title
- Lead organization (vendor name)
- TRL (start, current, end)
- Description (mine for specifications)
- Related documents/links
- Principal investigator and contact info

**Expected Output:** 20-50 relevant projects

### API Search (if web search insufficient)
```bash
# Get all projects
curl "https://techport.nasa.gov/api/projects" > all_projects.json

# Then filter for ECLSS-related projects by keyword matching
# For each relevant project ID:
curl "https://techport.nasa.gov/api/projects/{projectId}" > project_details.json
```

**Note:** API may require parsing large dataset, use only if web search is inadequate

---

## Strategy 2: ISS Heritage Vendor Mapping

**Objective:** Trace all ISS ECLSS vendors to their current commercial product lines

### Known ISS ECLSS Contractors (from Phase 1)
1. Collins Aerospace (Hamilton Sundstrand) - OGA, WPA
2. Honeywell - THC, various components
3. NASA MSFC - UPA, PSM (potential tech transfer)
4. Russian contractors - Vozdukh (Energia, others)
5. ESA contractors - ACLS system

### Search Process for Each Vendor

**Step 1: Vendor Website Deep Dive**
- Navigate to space/ECLSS product pages
- Look for: specifications, datasheets, product catalogs, case studies
- Search for: "lunar", "moon", "exploration", "commercial space"
- Capture: Mass, power, dimensions, TRL, crew capacity, cost (if available)

**Example URLs:**
- https://www.collinsaerospace.com/what-we-do/space/life-support
- https://aerospace.honeywell.com/us/en/products-and-services/product/hardware-and-systems/space/environmental-control-and-life-support-systems
- https://www.paragonsdc.com/what-we-do/systems-integration/
- https://www.moog.com/products/environmental-control-and-life-support-systems.html

**Step 2: Search for Recent Contracts/Announcements**
- Search: "[Vendor name] ECLSS contract 2020-2025"
- Search: "[Vendor name] lunar life support"
- Search: "[Vendor name] Gateway ECLSS"
- Check: Company press releases, investor relations

**Step 3: Technical Documentation Search**
- Search: "[Vendor name] [Product name] datasheet"
- Search: "[Vendor name] [Product name] specifications"
- Search: "site:[vendor-domain] specifications" (e.g., site:collinsaerospace.com specifications)

**Expected Output:** Detailed specifications for 5-10 major systems

---

## Strategy 3: Gateway and Artemis Program Deep Dive

**Objective:** Document ECLSS systems purpose-built for lunar vicinity operations

### Gateway ECLSS Components

**HALO Module (Paragon SDC)**
- Search: "Gateway HALO ECLSS specifications"
- Search: "Paragon HALO life support specifications"
- Search NASA Gateway program documentation
- Check: https://www.nasa.gov/reference/gateway-about/
- Look for: Mass, power, crew capacity, operational lifetime, consumables

**I-Hab Module (ESA/JAXA - MHI)**
- Search: "Gateway I-Hab ECLSS"
- Search: "Mitsubishi Heavy Industries Gateway ECLSS specifications"
- Search: ESA Gateway contributions documentation
- Check: https://www.mhi.com/products/space/gateway_eclss.html

**PPE/HALO Integration**
- Search: "Gateway integrated ECLSS"
- Search NASA NTRS for: "Gateway ECLSS overview"
- Check: https://ntrs.nasa.gov/citations/20230015263 (from Phase 1)

### Artemis Surface Systems
- Search: "Artemis surface habitat ECLSS"
- Search: "Artemis base camp life support"
- Search: "Artemis ECLSS commercial partners"
- Focus on TRL 5+ systems in development

**Expected Output:** 2-5 Gateway/Artemis ECLSS systems with specifications

---

## Strategy 4: Commercial Space Station ECLSS Programs

**Objective:** Document ECLSS for commercial stations (may adapt to lunar applications)

### Axiom Station
- Search: "Axiom Station ECLSS specifications"
- Search: "Axiom Hab-2 life support"
- Check: Axiom Space website, press releases
- Look for: Crew capacity (8), vendor partnerships, specifications

### Orbital Reef (Blue Origin/Sierra Space)
- Search: "Orbital Reef ECLSS specifications"
- Search: "Sierra Space life support system"
- Search: "Blue Origin ECLSS"
- Check: https://www.sierraspace.com/commercial-space-stations/orbital-reef-space-station/
- Already know: 10 crew capacity, water recycling demonstrated

### VAST Haven-1
- Search: "VAST Haven-1 ECLSS"
- Search: "VAST space station life support"
- Check: VAST Space website

### Airbus/ESA Commercial Initiatives
- Search: "Airbus ECLSS commercial space"
- From Phase 1: Airbus developing compact systems for space hotels

**Expected Output:** 3-5 commercial station ECLSS systems

---

## Strategy 5: SBIR/STTR Award Database Search

**Objective:** Identify companies with NASA funding transitioning to commercial ECLSS products

### Search Process

**Step 1: NASA SBIR/STTR Topic Search**
- URL: https://sbir.gsfc.nasa.gov
- Search topics: "Environmental Control and Life Support", "ECLSS", "water recovery", "oxygen generation", "CO2 removal"
- Time range: 2015-2025 (capture transition from R&D to commercial)

**Step 2: SBIR.gov Awards Database**
- URL: https://www.sbir.gov/awards
- Agency: NASA
- Keywords: "life support", "ECLSS", "oxygen", "water recovery", "CO2", "Sabatier", "air revitalization"
- Filter: Phase II and Phase III (more mature)

**Step 3: Company Follow-Up**
- For each SBIR/STTR awardee, search:
  - "[Company name] commercial products"
  - "[Company name] TRL"
  - "[Company name] space life support"
- Check if technology transitioned to commercial availability

**Known SBIR Example from Phase 1:**
- Precision Combustion Inc. - Sabatier reactor (TRL 4-6)

**Expected Output:** 10-20 companies, subset with commercial products (TRL 5+)

---

## Strategy 6: Subsystem-Specific Component Vendors

**Objective:** Since complete ECLSS is large/complex, search for subsystem vendors separately

### Oxygen Generation Subsystem
**Search Terms:**
- "space oxygen generation system commercial"
- "water electrolysis oxygen space"
- "OGA space specifications"
- "oxygen generation assembly vendor"

**Known Vendors:** Collins, ESA ACLS contractors

### CO2 Removal Subsystem
**Search Terms:**
- "carbon dioxide removal space commercial"
- "CDRA vendor specifications"
- "CO2 scrubber space lunar"
- "amine scrubber space"
- "ionic liquid CO2 removal"

**Known Vendors:** Collins, Honeywell (CDRILS), Russian (Vozdukh)

### Water Recovery Subsystem
**Search Terms:**
- "water recovery system space commercial"
- "urine processor assembly vendor"
- "water purification space specifications"
- "WPA space system"

**Known Vendors:** Collins (WPA), NASA MSFC (UPA)

### Sabatier/CO2 Reduction
**Search Terms:**
- "Sabatier reactor space commercial"
- "CO2 reduction assembly vendor"
- "methanation reactor space"

**Known Vendors:** Precision Combustion, NASA MSFC, ESA contractors

### Thermal/Humidity Control
**Search Terms:**
- "thermal control life support space"
- "humidity control ECLSS"
- "temperature control cabin space"

**Known Vendors:** Honeywell, Moog (fluid control)

### Trace Contaminant Control
**Search Terms:**
- "trace contaminant control space"
- "air quality monitoring space"
- "catalytic oxidizer space"

**Expected Output:** 5-10 vendors per subsystem, 30-50 total components

---

## Strategy 7: International Vendor Search

**Objective:** Identify European, Japanese, and other international ECLSS vendors

### European Space Agency (ESA) Partners
**Search Terms:**
- "ESA ECLSS commercial partners"
- "ESA life support contractors"
- "Advanced Closed Loop System ACLS vendor"
- "MELiSSA program companies"

**Check:**
- ESA technology transfer opportunities
- ESA contractor databases
- European commercial space companies

**Known:** Airbus (mentioned in Phase 1)

### Japan Aerospace Exploration Agency (JAXA)
**Search Terms:**
- "JAXA ECLSS commercial"
- "JAXA water recovery system"
- "JEM water recovery JWRS"

**Known:** Mitsubishi Heavy Industries (Gateway I-Hab)

### Canadian Space Agency (CSA)
**Search Terms:**
- "CSA life support technology"
- "Canadian space life support commercial"

### Russian Space Industry
**Search Terms:**
- "Roscosmos ECLSS commercial"
- "Vozdukh system vendor"
- "Russian space life support export"

**Note:** May have export control/ITAR limitations for commercial availability

**Expected Output:** 5-10 international vendors with commercial products

---

## Strategy 8: Adjacent Industry Cross-Over

**Objective:** Identify vendors from submarine, diving, and hazmat industries with space-qualified products

### Submarine Life Support
**Rationale:** Similar closed-environment requirements (O2 generation, CO2 removal)

**Search Terms:**
- "submarine life support space qualified"
- "Collins submarine ECLSS" (known to have both submarine and space products)
- "oxygen generation submarine space"

**Known:** Collins has submarine atmospheric monitoring technology

### Commercial Diving Industry
**Search Terms:**
- "atmospheric diving suit life support space"
- "diving life support space qualified"
- "rebreather technology space"

**Rationale:** Closed-loop breathing systems with similarities to space ECLSS

### Hazmat/CBRN Systems
**Search Terms:**
- "CBRN life support space qualified"
- "hazmat breathing system space"
- "air purification hazmat space"

**Expected Output:** 2-5 cross-over vendors (likely low volume)

---

## Strategy 9: Conference Proceedings and Industry Events

**Objective:** Find latest ECLSS developments and vendors from recent conferences

### International Conference on Environmental Systems (ICES)
**Years to Search:** 2022-2025

**Search Terms:**
- "ICES 2025 ECLSS"
- "ICES 2024 life support"
- "International Conference Environmental Systems proceedings"

**Check:**
- AIAA ICES proceedings
- Conference exhibitor lists
- Paper authors and affiliations (identify vendors)

### Space Symposium and Other Major Events
**Search Terms:**
- "Space Symposium 2024 ECLSS exhibitors"
- "IAC 2024 life support"
- "Satellite 2024 ECLSS"

**Expected Output:** 5-10 recent developments/vendors

---

## Strategy 10: Patent and Technology Transfer Search

**Objective:** Identify emerging technologies and vendors through patents and NASA tech transfer

### NASA Technology Transfer Portal
**URL:** https://technology.nasa.gov

**Search Terms:**
- "life support"
- "ECLSS"
- "oxygen generation"
- "water recovery"
- "CO2 removal"

**Filter:** Available for licensing (indicates commercial potential)

### Patent Databases (Supplementary)
**Google Patents, USPTO**

**Search:** Recent patents (2018-2025) for ECLSS technologies

**Note:** Use sparingly, patents may be early-stage (TRL <5)

**Expected Output:** 5-10 technology transfer opportunities

---

## Search Execution Plan

### Phase 3 Iteration Breakdown

**Iteration 01:** Strategies 1-2 (TechPort + ISS Heritage)
- TechPort comprehensive search
- Collins, Honeywell, Paragon deep dives
- Initial JSON file creation

**Iteration 02:** Strategy 3 (Gateway/Artemis)
- Gateway HALO and I-Hab specifications
- Artemis surface systems search

**Iteration 03:** Strategy 4-5 (Commercial Stations + SBIR)
- Axiom, Orbital Reef, VAST research
- SBIR/STTR database search

**Iteration 04:** Strategy 6 (Subsystems)
- Component-level vendor search (O2, CO2, water, etc.)

**Iteration 05:** Strategies 7-8 (International + Adjacent)
- ESA, JAXA vendors
- Submarine/diving cross-over

**Iteration 06:** Strategies 9-10 (Conferences + Patents)
- ICES proceedings review
- NASA tech transfer search

**Iteration 07+:** Gap filling and specification completion
- Return to vendors with missing data
- Cross-reference and verify findings

---

## Data Fields to Capture (Per Item)

Based on master-methodology.md requirements:

### Required Fields
- **Vendor:** Company name
- **Model/Variant:** Specific product designation
- **TRL:** NASA 1-9 scale (with source)
- **Mass (kg):** Total system mass
- **Power (kW):** Power requirements
- **Est. Cost (USD):** Acquisition cost estimate
- **Turnaround Time:** Procurement timeline
- **Notes:** Context, limitations, lunar applicability

### ECLSS-Specific Additional Fields
- **Crew Capacity:** Number of crew members supported
- **Subsystem Type:** O2 generation, CO2 removal, water recovery, etc.
- **Consumables:** Required resupply items (filters, chemicals, etc.)
- **Recovery Rate:** For water systems (percentage)
- **Flow Rates:** For gas/liquid processing systems
- **Operating Conditions:** Temperature, pressure ranges
- **Maintenance Interval:** MTBF, scheduled maintenance
- **Operational Lifetime:** Design life in years/hours
- **Heritage:** ISS, previous missions, flight hours
- **Lunar Applicability:** Direct use, adaptation required, not suitable

### Source Documentation
- **Source URL:** For each data field
- **Verified:** true/false flag
- **Verification Date:** Date of last verification
- **Notes:** If data unavailable or questionable

---

## Quality Control Measures

### Cross-Referencing
- Verify specifications from multiple sources where possible
- Flag single-source data for Phase 4 verification
- Note discrepancies between sources

### TRL Validation
- Prioritize NASA TechPort TRL ratings (official)
- For non-NASA projects, look for credible TRL assessments
- If TRL unavailable, assess based on development status:
  - Operational on ISS = TRL 9
  - Flight-qualified, not yet flown = TRL 7-8
  - Prototype testing = TRL 5-6
  - Lab testing only = TRL 4 or below (exclude)

### Commercial Availability Filter
- Include if: Vendor offers product commercially OR has public contract for delivery
- Exclude if: Purely research/concept OR government-only (Artemis-specific) OR TRL <5
- Grey area: Note as "in development" with expected availability date

---

## Expected Coverage

Based on preliminary research, expect to identify:

**Complete ECLSS Systems:** 5-10
- Gateway HALO and I-Hab
- Axiom, Orbital Reef station systems
- ISS heritage systems (as baseline reference)

**Oxygen Generation Systems:** 5-8
- ISS OGA (TRL 9)
- Advanced OGA
- ESA ACLS oxygen module
- Commercial variants

**CO2 Removal Systems:** 5-8
- ISS CDRA (TRL 9)
- Vozdukh (TRL 9)
- Honeywell CDRILS (TRL 5-7)
- Other emerging systems

**Water Recovery Systems:** 3-5
- ISS WPA/UPA (TRL 9)
- Commercial station water recovery
- Advanced/compact systems

**Sabatier/CO2 Reduction:** 3-5
- ISS CRA (TRL 9)
- Precision Combustion advanced reactor
- Other methanation systems

**Component/Subsystem Vendors:** 20-40
- Valves, regulators, sensors, etc. (Moog, others)

**Total Items in JSON:** 40-80 systems/components

---

## Success Criteria Reference

Research complete when completion-checklist.md criteria satisfied (see separate file)

---

**Phase 2 Status:** COMPLETE
**Next Step:** Phase 3 Iteration 01 - Execute Strategies 1-2, begin building JSON file
