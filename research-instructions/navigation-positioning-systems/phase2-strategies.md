# Phase 2: Search Strategies - Navigation and Positioning Systems

**Category:** Navigation and Positioning Systems
**Date:** 2025-12-08
**Focus:** TRL 5+ systems only

## Strategy Overview

Based on Phase 1 findings, lunar navigation and positioning systems fall into distinct technology categories with varying commercial maturity. This phase outlines multiple complementary search strategies to ensure comprehensive coverage of all TRL 5+ systems.

## Search Strategy 1: NASA TechPort Comprehensive Search

**Objective:** Identify all NASA-funded navigation projects with TRL 5+

**Method:**
1. **TechPort Web Interface Search** with keywords:
   - "lunar navigation"
   - "lunar positioning"
   - "cislunar navigation"
   - "terrain relative navigation"
   - "lunar beacon"
   - "lunar IMU"
   - "lunar star tracker"
   - "navigation doppler lidar"
   - "lunar GPS"
   - "LunaNet"
   - "LCRNS"

2. **Filter criteria:**
   - TRL: 5, 6, 7, 8, 9 (search separately for each)
   - Technology Areas:
     - TX04: Robotic Systems (includes navigation sensors)
     - TX05: Communication and Navigation
     - TX06: Human Health, Life Support, and Habitation Systems (spacesuit navigation)
   - Keywords in description: "lunar", "moon", "cislunar"

3. **API Search** (if web interface limits results):
   ```
   GET https://techport.nasa.gov/api/projects
   Filter results programmatically by:
   - TRL >= 5
   - Description contains lunar/moon/cislunar
   - Technology taxonomy includes navigation/positioning
   ```

4. **Data to extract:**
   - Project ID and title
   - Lead organization (vendor name)
   - TRL (start, current, end)
   - Technology description
   - Status (active, completed, cancelled)
   - Principal Investigator contact
   - Related documents/links

**Expected output:** 20-50 relevant projects

## Search Strategy 2: Direct Vendor Product Pages

**Objective:** Get detailed specifications from identified vendors

**Vendor List (from Phase 1):**

### IMU Vendors
- Honeywell Aerospace
  - URL: https://aerospace.honeywell.com
  - Product: Miniature Inertial Measurement Unit (MIMU)
  - Search: Product specifications, datasheets, space heritage

- Northrop Grumman
  - URL: https://www.northropgrumman.com
  - Product: LN-200, LN-200S, LN-200S HP
  - Search: Product specs, mission heritage, commercial availability

### Star Tracker Vendors
- Blue Canyon Technologies
  - Product: Nano Star Tracker (NST) variants
  - Search: Full specifications, pricing (if available), lead times

- Redwire Space
  - Search: Star tracker products, specifications

- Leonardo SpA
  - Product: AA-STR MKII

- Terma
  - Product: T3 Star Tracker

- arcsec
  - Product: Sagitta, Twinkle

- Berlin Space Technologies
  - Product: ST200, ST400

### TRN/Landing Navigation Vendors
- Astrobotic Technology
  - Product: OPAL (Optical Precision Autonomous Landing)
  - Search: Specifications, TRL, commercial availability

- Blue Origin
  - Search: TRN system details, specifications

- Draper Laboratory
  - Search: SPLICE TRN system, commercial licensing

- OrbitBeyond
  - Search: TRN/HDA system specifications

### LiDAR Vendors
- Psionic
  - Product: Psionic Space Navigation Doppler Lidar (PSNDL)
  - Search: Specifications, commercial terms

- Ommatidia LiDAR
  - Product: Parallel Laser RADAR
  - Search: Space product specifications

### Beacon/Constellation Developers
- Intuitive Machines
  - Search: Lunar Node 1, navigation services

- Masten Space Systems
  - Search: Beacon network development status

- Advanced Space
  - Product: CAPS (Cislunar Autonomous Positioning System)
  - Search: Commercial availability, specifications

**Data to collect:**
- Mass (kg)
- Power (W or kW)
- Dimensions
- Performance specs (accuracy, range, update rate)
- Cost (if available)
- Lead time/turnaround time
- Environmental ratings (radiation, temperature)
- Heritage/missions flown

## Search Strategy 3: Space Industry Databases

**Objective:** Find additional vendors and verify specifications

**Databases to search:**

1. **SatSearch (https://satsearch.co)**
   - Search terms: "star tracker", "IMU", "navigation", "positioning"
   - Filter: Space-qualified components
   - Extract: Vendor names, specifications, datasheets

2. **SatCatalog (https://www.satcatalog.com)**
   - Categories: IMU/IRU, Star Trackers, Navigation Systems
   - Extract: Component specifications, vendor information

3. **SatNow (https://www.satnow.com)**
   - Search: Navigation and positioning products
   - Extract: Specifications, vendor contacts

**Expected output:** 10-20 additional vendors/products

## Search Strategy 4: NASA SBIR/STTR Database

**Objective:** Track NASA-funded technologies transitioning to commercial products

**Method:**
1. **Search NASA SBIR/STTR database** (https://sbir.nasa.gov)
   - Keywords: "lunar navigation", "positioning", "IMU", "star tracker", "terrain relative", "beacon"
   - Filter: Phase 2 and Phase 3 awards (higher maturity)
   - Recent awards: 2020-2025

2. **Identify companies with:**
   - Phase 2 completion (TRL 5-6 achieved)
   - Phase 3 awards (commercialization funding)
   - Multiple related awards (serious capability development)

3. **Company follow-up:**
   - Visit company websites for commercial products
   - Check if SBIR technology transitioned to product line
   - Look for press releases about commercialization

**Expected output:** 15-30 companies to investigate

## Search Strategy 5: CLPS Mission Manifests

**Objective:** Identify navigation systems actually flying on commercial lunar missions

**Method:**
1. **NASA CLPS vendors** (https://www.nasa.gov/clps):
   - Astrobotic Technology
   - Intuitive Machines
   - Firefly Aerospace
   - Draper
   - Masten Space Systems
   - Blue Origin
   - Sierra Space
   - Tyvak Nano-Satellite Systems
   - Lockheed Martin
   - SpaceX (via Starship)

2. **For each vendor:**
   - Search mission manifests/payload lists
   - Identify navigation technology demonstrations
   - Extract: System name, vendor, TRL, mission date
   - Look for "technology demonstration" payloads

3. **Specific missions to research:**
   - Astrobotic Peregrine (flew 2024)
   - Intuitive Machines IM-1 (flew 2024)
   - Astrobotic Griffin (planned)
   - Intuitive Machines IM-2, IM-3 (planned)
   - Firefly Blue Ghost missions

**Expected output:** 10-15 navigation systems with flight heritage or manifested

## Search Strategy 6: Conference Proceedings and Exhibitors

**Objective:** Find emerging vendors and recent technical specifications

**Conferences to research:**

1. **SmallSat Conference** (https://digitalcommons.usu.edu/smallsat/)
   - Search proceedings: 2020-2025
   - Keywords: "lunar navigation", "IMU", "star tracker", "TRN"
   - Look for: Vendor presentations, university spin-offs

2. **International Astronautical Congress (IAC)**
   - Search recent conference papers
   - Focus on lunar exploration sessions
   - Identify: New vendors, technology updates

3. **Space Symposium**
   - Exhibitor lists from recent years
   - Navigation/positioning vendors
   - Product announcements

4. **AIAA SciTech Forum**
   - Guidance, Navigation, and Control sessions
   - Lunar-specific papers

**Expected output:** 5-10 emerging vendors, updated specifications

## Search Strategy 7: International Space Agency Vendor Lists

**Objective:** Identify international vendors not captured in U.S.-focused searches

**Agencies to research:**

1. **ESA (European Space Agency)**
   - ESA Moonlight program partners
   - Technology contractor lists
   - Search: Navigation technology providers for Moonlight LCNS

2. **JAXA (Japan Aerospace Exploration Agency)**
   - LNSS (Lunar Navigation Satellite System) contractors
   - Japanese navigation technology vendors

3. **CSA (Canadian Space Agency)**
   - Lunar technology contractors
   - Navigation system providers

4. **Commercial space agencies:**
   - UK Space Agency
   - German Space Agency (DLR)
   - Italian Space Agency (ASI)

**Expected output:** 5-15 international vendors

## Search Strategy 8: Patent and Technology Transfer Databases

**Objective:** Find NASA technologies available for licensing

**Method:**

1. **NASA Technology Transfer Portal** (https://technology.nasa.gov)
   - Search categories: Navigation, Sensors, Positioning
   - Keywords: "lunar", "navigation", "star tracker", "IMU", "lidar"
   - Filter: Available for licensing
   - Extract: Technology description, TRL, contact for licensing

2. **Patent databases:**
   - Search assignees: NASA, JPL, major aerospace companies
   - Keywords: Lunar navigation technologies
   - Recent patents: 2015-2025
   - Look for: Technologies transitioning to commercial use

**Expected output:** 10-20 technologies, some may be available for licensing

## Search Strategy 9: Academic Papers with Industry Collaboration

**Objective:** Find vendor-university partnerships and technology validation data

**Method:**

1. **Search databases:**
   - NASA Technical Reports Server (NTRS)
   - IEEE Xplore
   - ResearchGate
   - Google Scholar

2. **Keywords:**
   - "lunar navigation" + "TRL"
   - "terrain relative navigation" + "flight test"
   - "lunar positioning system" + "demonstration"
   - Specific vendor names + "lunar"

3. **Focus on:**
   - Papers with industry co-authors (indicates commercial relevance)
   - Flight test results (indicates high TRL)
   - Performance validation data (for specifications)

**Expected output:** 20-30 papers with vendor specifications and TRL data

## Search Strategy 10: Direct Industry Contacts

**Objective:** Fill gaps in publicly available information

**Method:**

1. **Contact approach:**
   - For vendors with limited public specifications
   - Request product datasheets for lunar applications
   - Ask about TRL ratings, commercial availability, lead times
   - Inquire about cost (may not be disclosed)

2. **Priority vendors for contact:**
   - Vendors with products identified but missing specifications
   - Companies with SBIR awards but unclear commercial status
   - International vendors with limited English-language information

3. **Information to request:**
   - Product datasheets/specification sheets
   - TRL rating for lunar applications
   - Heritage/mission list
   - Commercial availability and lead time
   - Ballpark cost ranges (if willing to share)

**Note:** This strategy may be used in later iterations if public sources are insufficient.

## Data Quality Criteria

For each system identified, we aim to document:

**Required (must have to include in JSON):**
- [ ] Vendor name
- [ ] Product/model designation
- [ ] TRL rating (NASA scale, or estimated if vendor provides data)
- [ ] At least one source URL

**High priority (gather if available):**
- [ ] Mass (kg)
- [ ] Power (W or kW)
- [ ] Key performance specifications
- [ ] Commercial availability status
- [ ] Mission heritage

**Lower priority (nice to have):**
- [ ] Cost estimate
- [ ] Lead time/turnaround time
- [ ] Detailed environmental specifications
- [ ] Vendor contact information

## Search Execution Plan

### Iteration 1 (First Deep Dive)
- Execute Strategy 1: TechPort comprehensive search
- Execute Strategy 2: Priority vendor websites (IMU, star tracker)
- Execute Strategy 5: CLPS mission manifests
- **Goal:** Capture all TRL 9 systems and CLPS-manifested systems

### Iteration 2
- Execute Strategy 2: Remaining vendors (TRN, LiDAR, beacons)
- Execute Strategy 3: Space industry databases
- Execute Strategy 4: NASA SBIR/STTR database
- **Goal:** Complete vendor coverage, find emerging systems

### Iteration 3
- Execute Strategy 6: Conference proceedings
- Execute Strategy 7: International space agencies
- Execute Strategy 8: Patent/technology transfer
- **Goal:** Capture international vendors, emerging technologies

### Iteration 4 (Refinement)
- Execute Strategy 9: Academic papers for specifications
- Execute Strategy 10: Direct contacts if needed
- **Goal:** Fill data gaps, verify TRL ratings

### Iteration 5+ (As needed)
- Continue until completion checklist satisfied
- Focus on verification and gap-filling

## Success Metrics

Research will be considered thorough when:
- All strategies executed at least once
- TechPort fully searched for relevant projects
- All Phase 1 identified vendors researched in detail
- Space industry databases checked for additional vendors
- CLPS missions researched for navigation payloads
- Completion checklist criteria met

## Next Steps

1. Create completion checklist (separate file)
2. Begin Phase 3: Deep Research Iteration 1
3. Start building JSON file incrementally as systems are found
4. Document search process in iteration notes

## Notes

- **TRL 5+ filter is critical:** Do not spend time on early-stage concepts (TRL < 5)
- **Verified = false initially:** All data starts unverified, Phase 4 will verify
- **Incomplete data is OK:** Better to include system with partial data than miss it
- **Commercial focus:** Prioritize systems available or soon available commercially
- **NASA heritage is valuable:** Even if not purely commercial, NASA-funded systems show credibility
