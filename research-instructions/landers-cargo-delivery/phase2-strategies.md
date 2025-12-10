# Phase 2: Search Strategies - Landers and Cargo Delivery

**Date:** 2025-12-08
**Category:** Landers and Cargo Delivery Systems

## Overview

Based on Phase 1 findings, we identified 14 NASA CLPS vendors plus international players. Key gaps include: 7 vendors with unclear status, limited cost/turnaround data, and need for international commercial systems. Phase 3 will execute 8 comprehensive strategies to ensure complete TRL 5+ coverage.

## Strategy 1: Complete CLPS Vendor Audit

**Objective:** Research all 14 CLPS vendors, determine which have TRL 5+ lunar lander products

**Known Vendors with Active Landers:**
- ✓ Firefly Aerospace - Blue Ghost (TRL 9)
- ✓ Intuitive Machines - Nova-C (TRL 9)
- ✓ Astrobotic - Peregrine, Griffin (TRL 7-8)
- ✓ Blue Origin - Blue Moon Mark 1, Mark 2 (TRL 6-7)
- ✓ SpaceX - Starship HLS (TRL 5-6)
- ✓ Draper - APEX 1.0 with ispace (TRL 7)

**Vendors Requiring Investigation:**
1. **Deep Space Systems**
   - Search: Company website, CLPS status updates, NASA contract database
   - Keywords: "Deep Space Systems lunar lander", "Deep Space Systems CLPS"

2. **Lockheed Martin Space**
   - Search: Lockheed lunar lander programs, McCandless Lunar Lander
   - Keywords: "Lockheed Martin lunar lander", "Lockheed CLPS role"

3. **Masten Space Systems**
   - Status: CONFIRMED bankrupt/acquired, exclude from final list

4. **Moon Express**
   - Search: Current status, MX-1 lander status post-2018
   - Keywords: "Moon Express 2024 2025", "MX-1 lander status"

5. **Orbit Beyond**
   - Search: Status after CLPS TO withdrawal, current operations
   - Keywords: "Orbit Beyond status", "Orbit Beyond lunar lander"

6. **Ceres Robotics**
   - Search: Company website, lander specifications
   - Keywords: "Ceres Robotics lunar", "Ceres Robotics CLPS"

7. **Sierra Nevada Corporation**
   - Search: Lunar lander programs separate from Dream Chaser
   - Keywords: "Sierra Nevada lunar lander", "SNC CLPS"

8. **Tyvak Nano-Satellite Systems**
   - Search: Lunar lander vs satellite focus
   - Keywords: "Tyvak lunar lander", "Tyvak moon"

**Execution:**
- Direct website searches for each vendor
- LinkedIn company pages for recent activity
- SpaceNews, Via Satellite archives
- NASA contract database (sam.gov) for recent awards
- Crunchbase for company status

**Success Criteria:**
- Status determined for all 14 CLPS vendors
- TRL 5+ systems identified or vendors excluded
- Specifications gathered where available

## Strategy 2: NASA TechPort Comprehensive Search

**Objective:** Identify all NASA-funded lunar lander projects TRL 5+, discover vendors outside CLPS

**Search Method 1: Web Interface**
- Navigate to https://techport.nasa.gov
- Search terms (execute each separately):
  - "lunar lander"
  - "moon lander"
  - "lunar descent"
  - "lunar cargo"
  - "lunar delivery"
  - "precision landing lunar"
  - "autonomous landing moon"
- Filter: TRL 5-9
- Filter: Technology Areas - TX01 (Launch Propulsion), TX09 (Entry/Descent/Landing), TX12 (Materials/Structures)

**Search Method 2: API Exploration**
- Use TechPort API to pull project listings
- Filter by keywords in title/description
- Extract: Project ID, title, TRL (start/current/end), lead organization, description
- Identify commercial entities with TRL 5+ lander tech

**Data to Extract:**
- Lead organization (potential new vendor)
- Technology descriptions (lander capabilities)
- TRL progression (verify 5+ status)
- Contact information (for specification requests)
- Related projects (subsystem vendors)

**Success Criteria:**
- Minimum 20 relevant TechPort projects reviewed
- All commercial entities identified
- New vendors (if any) added to research list

## Strategy 3: International Commercial Vendor Search

**Objective:** Identify non-U.S. commercial lunar lander vendors with TRL 5+ systems

**Japan:**
- **ispace** (partially covered)
  - RESILIENCE lander (Mission 2) specs needed
  - APEX 1.0 specifications
  - Mission 3+ plans
  - Commercial pricing/availability
- **Other Japanese companies**
  - Search: Japanese space startups, JAXA commercial partners
  - Keywords: "Japan commercial lunar lander", "Japanese moon lander companies"

**Europe:**
- **ESA Commercial Partners**
  - OHB System AG (Germany)
  - Thales Alenia Space (France/Italy)
  - Airbus Defence and Space
  - Keywords: "ESA lunar lander commercial", "European moon lander"
- **Independent European Companies**
  - Search: European space startups 2020-2025
  - Keywords: "European commercial lunar lander"

**Other Regions:**
- **Canada:** Search CSA commercial partnerships
- **UAE:** Search UAE space agency commercial programs
- **India:** Search ISRO commercial partnerships (Chandrayaan success)
- **China:** Search for any commercial (non-government) lunar entities
  - Note: Likely exclusion due to government-only programs

**Databases to Check:**
- ESA Technology Transfer Programme listings
- Space Angels investor database
- NewSpace Index
- Bryce Tech Space Report (international section)

**Success Criteria:**
- ispace full specifications obtained
- European vendors identified (if any with TRL 5+)
- Other international players catalogued

## Strategy 4: Adjacent Technology Providers

**Objective:** Identify companies from adjacent industries entering lunar delivery market

**Orbital Tug Manufacturers:**
- **Impulse Space** - Mentioned in prelim research
  - Search: Lunar delivery plans, Mira spacecraft capabilities
  - Keyword: "Impulse Space moon delivery"
- **Momentus**
  - Search: Vigoride extended missions, lunar capability
- **D-Orbit**
  - Search: ION Satellite Carrier lunar variants
- **Spaceflight Inc**
  - Search: Sherpa tug lunar missions

**Criteria for Inclusion:**
- Must have lunar surface delivery capability (not just orbit)
- Must meet TRL 5+ threshold
- Must be commercially available

**Launch Vehicle Integrators:**
- Companies offering "launch + landing" integrated services
- Search: "rideshare to lunar surface"

**Success Criteria:**
- Orbital tug companies assessed
- Systems with surface capability identified
- Exclude orbit-only systems

## Strategy 5: Technical Specification Deep Dive

**Objective:** Fill gaps in mass, power, cost, turnaround time data

**Sources for Specifications:**

**Payload User Guides (PUGs):**
- Astrobotic PUG (found in prelim)
- Firefly Blue Ghost PUG
- Intuitive Machines PUG
- Blue Origin PUG
- Search: "[Vendor] Payload User Guide filetype:pdf"

**Technical Papers:**
- IEEE Aerospace Conference proceedings
- AIAA Space Conference papers
- International Astronautical Congress (IAC) papers
- Search: Google Scholar, NASA Technical Reports Server (NTRS)
- Keywords: "[Vendor] [Lander] specifications"

**Investor Presentations:**
- Intuitive Machines (publicly traded: LUNR)
- Search: SEC filings, investor relations presentations
- Keywords: "[Vendor] investor presentation specifications"

**Conference Proceedings:**
- Lunar Surface Science Workshop
- Space Resources Roundtable
- LEAG (Lunar Exploration Analysis Group) annual meetings
- Search: Presentation archives 2023-2025

**Contract Announcements:**
- NASA press releases with contract values
- CLPS task order announcements
- Search: NASA.gov press releases, SpaceNews archives

**Success Criteria:**
- Cost data for at least 50% of systems
- Turnaround time for at least 50% of systems
- Power specifications for at least 70% of systems
- Mass specifications for 90%+ of systems

## Strategy 6: Mission Archive Analysis

**Objective:** Extract lander specifications from completed and planned mission data

**NASA CLPS Missions:**

**Completed:**
- ✓ Astrobotic Peregrine Mission One (PM1) - Jan 2024 - Extract specs from failure report
- ✓ Intuitive Machines IM-1 - Feb 2024 - Extract specs from mission success data
- ✓ Firefly Blue Ghost Mission 1 - Mar 2025 - Extract specs from mission data

**In Progress / Planned:**
- Intuitive Machines IM-2 - Feb 2025+ - Extract specs from press kit
- Intuitive Machines IM-3 - 2026 - Search for mission details
- Intuitive Machines IM-4 - 2027+ - Search for mission details
- Astrobotic Griffin Mission - 2025 - Search for updated timeline/specs
- Blue Origin Blue Moon Pathfinder - 2025 - Search for mission details
- Draper/ispace APEX 1.0 - 2026 - Search for mission manifest
- Additional CLPS task orders - Search NASA CLPS deliveries page

**International Missions:**
- ispace Mission 2 (RESILIENCE) - Jan 2025 - Extract lander specs
- ispace Mission 3 - 2026+ - Gather any available data
- Japan government missions - Exclude (SLIM already documented)
- China/Russia/India missions - Exclude (government only)

**Data Sources:**
- NASA press kits (search nasa.gov/press-release)
- Vendor mission pages
- Gunter's Space Page (space.skyrocket.de)
- NSSDC (NASA Space Science Data Coordinated Archive)

**Success Criteria:**
- All CLPS missions (past, present, planned) documented
- Lander specs extracted from mission data
- Launch dates and status confirmed

## Strategy 7: Subsystem Vendor Research

**Objective:** Identify component suppliers who might offer integrated lander systems

**Key Subsystem Areas:**

**Landing Engines:**
- Nammo UK (LEROS engines for Blue Ghost)
- Aerojet Rocketdyne (RL10, AMBR engines)
- Ursa Major (Hadley, Ripley engines)
- Search: Companies with lunar-grade engines, check for integrated lander offerings

**Guidance, Navigation & Control (GN&C):**
- Draper (TRN systems, inertial navigation)
- Honeybee Robotics (landing sensors)
- Search: GN&C providers offering complete landing systems

**Power Systems:**
- Multi-junction solar cell manufacturers
- Nuclear power providers (potentially for cargo landers)
- Search: Vendors offering power + lander integration

**Structures:**
- Composite structure manufacturers
- Landing gear specialists
- Search: Companies offering complete airframe solutions

**Criteria for Inclusion:**
- Must offer complete lander system (not just components)
- Must meet TRL 5+ for integrated system
- Must be commercially available

**Success Criteria:**
- Subsystem vendor landscape mapped
- Any integrated system providers identified
- Component-only vendors excluded

## Strategy 8: Industry News & Announcement Monitoring

**Objective:** Capture recent developments, new entrants, updated specifications

**News Sources to Search (2023-2025):**
- **SpaceNews.com**
  - Search: "lunar lander", "moon cargo", "CLPS"
  - Filter: 2023-2025
- **NASASpaceFlight.com**
  - Search: Lunar mission roundups
- **Space.com**
  - Search: Commercial moon lander news
- **Via Satellite**
  - Search: Lunar communications & delivery
- **PayloadSpace**
  - Search: Lunar lander developments
- **The Space Review**
  - Long-form analysis articles

**Press Release Aggregators:**
- SpaceRef.com (NASA contracts section)
- SatNews.com
- Company press release pages (via Google)

**Trade Show/Conference Archives:**
- Satellite 2024, 2025
- Space Symposium 2024, 2025
- SmallSat Conference 2024
- IAC 2024 (Milan)
- Search exhibitor lists and presentation archives

**Social Media / Forums:**
- r/SpaceXLounge (Starship HLS updates)
- NSF Forums (detailed technical discussions)
- Twitter/X: Follow @NASA, @NASA_LSP, major vendors
- Note: Verify all social media claims with primary sources

**Success Criteria:**
- 2023-2025 news archives searched
- New vendor announcements captured
- Specification updates documented
- Recent TRL advancements noted

## Search Term Master List

**Core Terms:**
- lunar lander
- moon lander
- lunar descent vehicle
- lunar cargo delivery
- lunar surface delivery
- commercial lunar payload services
- CLPS provider
- moon cargo lander

**Technical Terms:**
- precision landing system
- autonomous lunar landing
- lunar terrain relative navigation
- powered descent system
- lunar soft landing

**Program-Specific:**
- CLPS task order
- Artemis cargo lander
- human landing system cargo
- HDL (Human-class Delivery Landers)
- lunar payload delivery service

**Vendor-Specific:**
- [Each vendor name] + "lunar lander"
- [Each vendor name] + "CLPS"
- [Each vendor name] + "specifications"

**Regional:**
- "Japan commercial lunar lander"
- "European lunar lander commercial"
- "international lunar cargo"

## Research Tools & Databases

**Primary Databases:**
- NASA TechPort (techport.nasa.gov)
- NASA SBIR/STTR (sbir.nasa.gov)
- SAM.gov (federal contracts)
- Gunter's Space Page (space.skyrocket.de)
- NSSDC (nssdc.gsfc.nasa.gov)

**Technical Literature:**
- NASA Technical Reports Server (NTRS)
- Google Scholar
- IEEE Xplore
- AIAA Arc

**Industry Intelligence:**
- Bryce Tech Space Report
- Euroconsult market reports
- Space Angels quarterly reports
- NewSpace Index

**News Aggregators:**
- SpaceNews.com
- NASASpaceFlight.com
- Space.com
- PayloadSpace.com

## Expected Outcomes by Strategy

| Strategy | Expected # of Items | Data Completeness |
|----------|-------------------|-------------------|
| 1. CLPS Vendor Audit | 14 vendors assessed, ~6-8 with TRL 5+ systems | 80% specs |
| 2. TechPort Search | 3-5 new vendors or subsystem providers | 60% specs |
| 3. International Vendors | 2-4 vendors (ispace + potential European) | 70% specs |
| 4. Adjacent Tech | 0-2 vendors (orbital tugs rare to have surface capability) | 50% specs |
| 5. Spec Deep Dive | All identified systems | 80% cost/turnaround |
| 6. Mission Archive | 10+ missions analyzed | 90% operational data |
| 7. Subsystem Vendors | 0-1 integrated system providers | N/A likely |
| 8. Industry News | Capture updates for all known systems | Spec updates |

**Total Expected TRL 5+ Systems:** 10-15 distinct lander models from 8-12 vendors

## Data Quality Standards

**For Each System Found:**
1. **Vendor Verification**
   - Company website confirms lunar lander product
   - Recent activity (2023-2025) confirmed
   - Commercial availability stated or inferred

2. **TRL Verification**
   - NASA source for TRL rating (preferred), OR
   - Mission status indicating TRL (e.g., "flight-proven" = TRL 9), OR
   - Technical description supporting TRL estimate
   - Document source and estimation method

3. **Specification Sourcing**
   - Each metric must have source URL
   - Prefer: Official specs > Technical papers > Trade press > Wikipedia
   - Note gaps clearly in JSON

4. **Cost Data Standards**
   - Direct quotes (with date/source)
   - Contract values (note if bundled with services)
   - Market estimates (clearly labeled as estimates)
   - Exclude unsourced speculation

## Risk Mitigation

**Potential Issues & Solutions:**

**Issue:** Some CLPS vendors may have ceased operations
- **Solution:** Check company status via Crunchbase, LinkedIn, recent news

**Issue:** International vendors may have limited English documentation
- **Solution:** Use Google Translate for key pages, cite original + translated

**Issue:** Cost data highly proprietary
- **Solution:** Use contract announcements, investor presentations, accept gaps

**Issue:** TRL ratings not always published
- **Solution:** Estimate based on mission status, document estimation method

**Issue:** Specifications may vary by mission/configuration
- **Solution:** Record ranges or multiple variants, note context

## Phase 3 Iteration Planning

**Iteration 1: CLPS Foundation**
- Execute Strategy 1 (CLPS Vendor Audit)
- Execute Strategy 2 (TechPort Search)
- Goal: Complete primary vendor list

**Iteration 2: International Expansion**
- Execute Strategy 3 (International Vendors)
- Execute Strategy 6 (Mission Archive - international)
- Goal: Add non-U.S. commercial systems

**Iteration 3: Specification Gathering**
- Execute Strategy 5 (Spec Deep Dive)
- Execute Strategy 6 (Mission Archive - CLPS)
- Goal: Fill specification gaps

**Iteration 4: Market Completion**
- Execute Strategy 4 (Adjacent Tech)
- Execute Strategy 7 (Subsystem Vendors)
- Execute Strategy 8 (Industry News)
- Goal: Ensure no systems missed

**Iteration 5: Gap Filling**
- Review completion checklist
- Target remaining gaps
- Finalize all entries
- Goal: Satisfy completion criteria

## Success Metrics

**Quantitative:**
- ≥10 distinct lander systems documented (TRL 5+)
- ≥8 vendors represented
- ≥80% specification completeness (mass, payload, TRL)
- ≥50% cost/turnaround data captured
- 100% vendor status verified

**Qualitative:**
- All CLPS vendors assessed
- International market coverage adequate
- Adjacent industries checked
- Recent developments (2024-2025) captured
- No obvious vendors missing

## Timeline Estimate

- **Iteration 1:** 2-3 hours (CLPS + TechPort)
- **Iteration 2:** 1-2 hours (International)
- **Iteration 3:** 2-3 hours (Specifications)
- **Iteration 4:** 1-2 hours (Market sweep)
- **Iteration 5:** 1 hour (Gap filling)

**Total Phase 3 Estimate:** 7-11 hours of research

---

**Next:** Create completion-checklist.md, then begin Phase 3 Iteration 1
