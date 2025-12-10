# Phase 2: Search Strategies - Habitation and Inflatable Modules

**Date:** 2025-12-08
**Category:** Habitation and Inflatable Modules
**Status:** Strategy Development Complete

## Research Scope

**Objective:** Identify all commercially available or near-commercial (TRL 5+) lunar habitat systems including inflatable modules, rigid pressurized structures, and in-situ construction technologies.

**TRL Filter:** Only include systems with NASA Technology Readiness Level of 5 or higher:
- TRL 5: Component/subsystem validated in relevant environment
- TRL 6: System/subsystem model demonstrated in relevant environment
- TRL 7: System prototype demonstrated in operational environment
- TRL 8: Actual system completed and qualified through test and demonstration
- TRL 9: Actual system proven through successful mission operations

**Exclusions:**
- Government-only Artemis Program items (unless commercially available)
- Purely conceptual designs (TRL < 5)
- Terrestrial habitats without space rating
- Historical programs no longer in development

## Multiple Search Strategy Rationale

Habitat vendors are scattered across:
1. **Prime aerospace contractors** - obvious web presence but limited spec disclosure
2. **International space agencies' commercial partners** - ESA, JAXA, CSA, ASI, Roscosmos
3. **NASA SBIR/STTR recipients** - small companies that may now have commercial products
4. **Adjacent industries** - pressure vessels, submersibles, military shelters, mining equipment
5. **Emerging space startups** - may not have traditional aerospace pedigree
6. **Materials and components suppliers** - ILC Dover, fabric manufacturers, composite structures

**Terminology varies widely:**
- "Lunar habitat" vs "Surface habitat" vs "Planetary shelter"
- "Inflatable" vs "Expandable" vs "Deployable" vs "Soft goods"
- "Pressurized module" vs "Pressure vessel" vs "Habitat element"
- "In-situ resource utilization" vs "ISRU" vs "3D printed construction"

## Strategy 1: NASA TechPort Comprehensive Search

**Objective:** Find all NASA-funded habitat projects at TRL 5+

### Approach:
1. **Web Interface Search** - https://techport.nasa.gov
   - Search terms: "lunar habitat", "surface habitat", "inflatable module", "expandable structure", "pressurized shelter", "ISRU construction", "3D printed habitat"
   - Filter: TRL 5-9
   - Filter: Technology Areas TX06 (Human Health, Life Support and Habitation Systems), TX04 (Robotics and Autonomous Systems - for ISRU)
   - Status: Active, Completed (within last 5 years)

2. **API Search** (for comprehensive coverage)
   ```
   GET https://techport.nasa.gov/api/projects
   Filter projects by:
   - Technology taxonomy containing "habitat" or "pressurized" or "life support"
   - TRL current/end >= 5
   - Keywords: lunar, surface, Moon, Artemis
   ```

3. **Lead Organization Tracking**
   - For each relevant project, note lead organization
   - Check if organization has commercial products now
   - Track SBIR Phase III (commercial partnership) projects

### Expected Outputs:
- List of 20-40 relevant TechPort projects
- Vendor names with NASA validation
- TRL ratings from authoritative source
- Project descriptions and technical approaches

### Completion Criteria:
- [ ] Searched all 8 habitat-related keyword combinations
- [ ] Filtered results to TRL 5+ only
- [ ] Documented all lead organizations
- [ ] Checked commercial status of SBIR/STTR projects

---

## Strategy 2: Direct Vendor Search

**Objective:** Research known vendors comprehensively for specifications

### Primary Vendors (from Phase 1):
1. **Sierra Space** - LIFE habitat
2. **Lockheed Martin** - Inflatable lunar habitat
3. **Max Space** - Expandable modules
4. **ILC Dover** - Inflatable structures supplier
5. **Northrop Grumman** - HALO rigid module
6. **Thales Alenia Space** - MPH and I-Hab
7. **ICON** - 3D printed construction
8. **AI SpaceFactory** - MARSHA/LINA
9. **Collins Aerospace** - ECLSS systems
10. **Blue Origin** - Habitat delivery (check if also building)

### Search Approach for Each Vendor:
- **Official website:** Product pages, technical specs, press releases
- **Investor relations:** Financial filings may contain contract values, mass specs
- **Technical papers:** Search vendor name + "habitat specifications" + "technical paper" + "PDF"
- **Conference presentations:** IAC, Space Symposium, AIAA conferences
- **Patent databases:** Google Patents, USPTO for technical details
- **LinkedIn:** Employee profiles may reveal projects not publicly announced

### Specifications Priority:
1. **TRL** (authoritative source required)
2. **Mass** (kg) - dry, wet, deployed
3. **Volume** (m³) - stowed vs. deployed
4. **Crew Capacity** - number and duration
5. **Power** (kW) - habitat + ECLSS
6. **Cost** (USD) - even rough estimates
7. **Turnaround Time** - order to delivery
8. **Environmental Ratings** - radiation dose, thermal range, micrometeorite protection

### Completion Criteria:
- [ ] Each vendor researched using all 6 source types above
- [ ] All available specifications documented with source URLs
- [ ] TRL verified from NASA or credible third party
- [ ] Missing data explicitly noted (not omitted silently)

---

## Strategy 3: International Space Agency Commercial Partners

**Objective:** Find non-US vendors through international space programs

### Agencies to Research:

#### **ESA (European Space Agency)**
- **Portal:** https://business.esa.int
- **Programs:** Lunar Economy Applications, Commercial Lunar Services
- **Partners Database:** ESA Industry Space Gateway
- **Keywords:** habitat, pressurized module, life support
- **Known Entities:** Thales Alenia Space, Airbus Defence and Space

#### **JAXA (Japan Aerospace Exploration Agency)**
- **Portal:** https://global.jaxa.jp
- **Programs:** Lunar surface exploration, Gateway contribution
- **Focus:** Pressurized rover, life support systems
- **Commercial Partners:** Toyota (pressurized rover), Mitsubishi, Kawasaki

#### **CSA (Canadian Space Agency)**
- **Portal:** https://www.asc-csa.gc.ca
- **Programs:** Lunar Gateway contributions, Artemis participation
- **Focus:** Robotics, life support (historical ISS heritage)
- **Commercial Partners:** MDA, Canadian industrial base

#### **ASI (Italian Space Agency)**
- **Portal:** https://www.asi.it
- **Programs:** Artemis Accords bilateral with NASA
- **Focus:** MPH lunar surface habitat via Thales Alenia Space
- **Contract Value:** Check ASI announcements for funding amounts

#### **Roscosmos (Russia)** - Limited due to geopolitical situation
- **Historical:** Extensive space station experience
- **Current:** Unclear commercial availability for Western partnerships
- **Approach:** Review technical papers, not active commercial pursuit

#### **CNSA (China National Space Administration)**
- **Challenge:** Limited English-language technical documentation
- **Approach:** Academic papers, CNSA official announcements
- **Commercial Status:** Unclear which technologies available for international purchase
- **Search:** "China lunar habitat" + "CNSA" + specifications

#### **ISRO (Indian Space Research Organisation)**
- **Programs:** Gaganyaan (human spaceflight), lunar exploration
- **Commercial:** Antrix Corporation (commercial arm)
- **Focus:** Check for habitat technology development status
- **Partnerships:** International collaborations on lunar missions

### Search Process:
1. Agency website → Commercial Programs section
2. Industry partner lists and vendor registries
3. Contract award announcements (habitat-related)
4. Technical symposium proceedings
5. Cross-reference with TechPort for NASA collaborations

### Completion Criteria:
- [ ] All 7 major space agencies researched
- [ ] Commercial partner lists documented
- [ ] Habitat-related contracts identified
- [ ] International vendors added to master list

---

## Strategy 4: SBIR/STTR Award Mining

**Objective:** Find small companies with habitat technology transitioning to commercial

### Databases:
1. **SBIR.gov** - https://www.sbir.gov/sbirsearch/
2. **NASA SBIR/STTR** - https://sbir.nasa.gov/
3. **SAM.gov** - Contract awards database

### Search Parameters:
- **Keywords:** habitat, inflatable, pressurized, lunar shelter, life support, ECLSS, ISRU construction
- **Phase:** Phase II (completed) and Phase III (commercial partnerships)
- **Agencies:** NASA, DOD (some dual-use technology)
- **Date Range:** 2015-2025 (10 years)

### What to Track:
1. Company name and contact
2. Award title and abstract
3. Phase reached (I, II, III)
4. Award amounts (indicate seriousness)
5. Current commercialization status
6. Follow-on contracts or partnerships

### Validation:
- Visit company website for current products
- Check if technology matured beyond SBIR phase
- Verify TRL progression since award
- Look for NASA or commercial customers

### Completion Criteria:
- [ ] SBIR.gov searched for all keyword combinations
- [ ] NASA SBIR/STTR Phase II and III awards documented
- [ ] Each awardee company checked for current product status
- [ ] TRL 5+ systems added to master list

---

## Strategy 5: Space Industry Conferences and Trade Shows

**Objective:** Find vendors actively marketing habitat systems

### Conferences to Research (Past 3 Years: 2022-2025):

#### **International Astronautical Congress (IAC)**
- **Search:** IAC exhibitor lists, technical paper proceedings
- **Years:** 2022 (Paris), 2023 (Baku), 2024 (Milan), 2025 (Sydney)
- **Keywords:** Habitat, lunar infrastructure, life support
- **Source:** iafastro.org

#### **Space Symposium**
- **Organizer:** Space Foundation
- **Search:** Exhibitor directories, speaker lists
- **Years:** 2022, 2023, 2024, 2025
- **Focus:** Commercial space, lunar economy
- **Source:** spacesymposium.org

#### **AIAA SPACE Conference**
- **Search:** Technical papers, presentation abstracts
- **Keywords:** Lunar habitat design, structures, ISRU
- **Source:** aiaa.org

#### **Satellite Conference & Exhibition**
- **Focus:** Infrastructure (some habitat systems)
- **Search:** Exhibitor lists
- **Source:** via satellite events

#### **ISS Research & Development Conference**
- **Relevance:** Companies with ISS modules may offer lunar variants
- **Search:** Participant lists, commercial partners
- **Source:** issnationallab.org

### Search Process:
1. Conference website → Past Events → Exhibitor Directory
2. Technical paper archives (search "habitat" in proceedings)
3. Speaker biographies and affiliations
4. Sponsor lists (often include major vendors)

### Completion Criteria:
- [ ] IAC 2022-2025 exhibitors checked
- [ ] Space Symposium 2022-2025 participants reviewed
- [ ] AIAA SPACE habitat-related papers documented
- [ ] Any new vendors added to research list

---

## Strategy 6: Adjacent Industry Crossover

**Objective:** Find companies from related industries entering lunar habitat market

### Target Industries:

#### **Undersea/Submersible Pressure Vessels**
- Similar requirements: pressure differential, life support, confined spaces
- **Companies to check:** Oceaneering, Triton Submarines, subsea habitat manufacturers
- **Keywords:** "pressure vessel space" "submersible technology lunar"

#### **Mining Equipment (Extreme Environments)**
- Harsh conditions, dust management, remote operations
- **Companies:** Caterpillar, Joy Global, Sandvik (check for space divisions)
- **Keywords:** "mining equipment space applications"

#### **Military/Defense Shelters**
- Rapidly deployable, CBRN protection, life support
- **Companies:** HDT Global, Alaska Structures, Weatherhaven
- **Keywords:** "deployable shelter space rated" "military habitat moon"

#### **Pressure Vessel Manufacturers**
- Industrial expertise in large pressure structures
- **Companies:** Chart Industries, Taylor-Wharton, Manchester Tank
- **Keywords:** "[company name] space applications"

#### **Commercial Diving Equipment**
- Atmospheric diving suits, saturation diving systems
- **Companies:** JIM suit manufacturers, diving bell systems
- **Keywords:** "atmospheric diving suit space" "saturation diving habitat"

#### **Industrial HVAC and Life Support**
- Environmental control systems for extreme conditions
- **Companies:** Honeywell, Paragon Space Development (already in space)
- **Keywords:** Check Paragon specifically, already space-focused

### Search Process:
1. Company website → Markets Served or Applications
2. Press releases for "space" or "NASA"
3. Patent search for company + "space" or "lunar"
4. LinkedIn company page → employees with "space" in title

### Completion Criteria:
- [ ] 5+ companies checked in each adjacent industry
- [ ] Any space-rated products documented
- [ ] Crossover technology partnerships identified
- [ ] New vendors added if TRL 5+ lunar products exist

---

## Strategy 7: Academic and Research Institution Partnerships

**Objective:** Find universities developing habitat tech transitioning to commercial

### Approach:

#### **NASA Space Grant Consortium**
- 52 university consortia nationwide
- Check research projects related to habitats
- Look for industry partnerships and spinoffs

#### **Key University Programs to Research:**
- **MIT Media Lab / AeroAstro** - Space habitat research
- **University of Colorado Boulder** - BioServe Space Technologies
- **Purdue University** - School of Aeronautics and Astronautics
- **Georgia Tech** - Aerospace Engineering
- **Stanford University** - Space exploration research
- **Embry-Riddle Aeronautical University** - Partner on TechPort Project 89814
- **Texas A&M** - Aerospace Engineering
- **University of Maryland** - Space Systems Lab

#### **Search Process:**
1. University website → Research Centers → Space/Aerospace
2. Faculty publications (Google Scholar) → "lunar habitat"
3. Industry partnership announcements
4. Licensing office technology transfer opportunities

### Completion Criteria:
- [ ] 10 major aerospace university programs checked
- [ ] Academic papers on habitat tech (2020-2025) reviewed
- [ ] Commercial licensing or spinoff companies identified
- [ ] TRL 5+ technologies documented

---

## Strategy 8: Materials and Components Suppliers

**Objective:** Identify companies supplying critical habitat components

### Categories:

#### **Advanced Fabrics and Soft Goods**
- **ILC Dover** - Already documented, exclusive Sierra Space partner
- **Kuraray** - Vectran manufacturer (Japanese)
- **DuPont** - Advanced materials for space
- **Keywords:** "Vectran space application" "inflatable structure fabric"

#### **Composite Structures**
- **Cornerstone Research Group** - Veritex materials (TechPort 8117)
- **Composite Technology Development** - Space-rated composites
- **Keywords:** "composite habitat structure" "self-deploying composite"

#### **Seals and Gaskets (Critical for Pressurization)**
- **Parker Aerospace** - Space-rated seals
- **Saint-Gobain** - High-performance seals
- **Keywords:** "space rated seals" "vacuum seals lunar"

#### **Radiation Shielding Materials**
- **Radiation Shield Technologies** - Polyethylene-based shielding
- **Keywords:** "radiation shielding lunar habitat" "GCR protection"

#### **Structural Health Monitoring**
- **Luna Innovations** - Fiber optic sensors (TechPort 89814)
- **Keywords:** "structural health monitoring inflatable habitat"

### Search Process:
1. Supplier website → Space/Aerospace market segment
2. Product catalogs for space-rated specifications
3. NASA supplier databases
4. Check if supplier offers complete habitat systems (not just components)

### Completion Criteria:
- [ ] Key material suppliers documented
- [ ] Determine if any offer turnkey habitat systems
- [ ] Component specs may inform habitat system specs
- [ ] Supply chain dependencies mapped

---

## Strategy 9: Patent Database Search

**Objective:** Find companies with habitat IP, identify technical specifications

### Databases:
- **Google Patents** - patents.google.com (easiest interface)
- **USPTO** - uspto.gov (official US database)
- **Espacenet** - worldwide.espacenet.com (European + international)
- **WIPO** - patentscope.wipo.int (international PCT applications)

### Search Terms:
- "lunar habitat"
- "inflatable space structure"
- "expandable habitat"
- "in-situ construction regolith"
- "3D printed lunar"
- "space habitat life support"
- "pressurized lunar shelter"

### What to Extract:
1. **Assignee** - Company holding patent (potential vendor)
2. **Claims** - Technical specifications often detailed
3. **Drawings** - Physical dimensions, configurations
4. **Commercialization Status** - Some patents become products, others dormant

### Validation:
- Patent alone doesn't mean commercial product
- Check assignee company for actual product offering
- Patents filed 2015-2025 most relevant (earlier may be obsolete)

### Completion Criteria:
- [ ] All 7 keyword searches completed across USPTO and Google Patents
- [ ] Patent assignees documented
- [ ] Active products vs. dormant patents identified
- [ ] Technical specs extracted from patent documents

---

## Strategy 10: Government Contract Databases

**Objective:** Find companies winning lunar habitat contracts

### Databases:

#### **SAM.gov (System for Award Management)**
- **Search:** Contract awards containing "lunar", "habitat", "inflatable", "life support"
- **Agencies:** NASA, DOD (DARPA), potentially DOE
- **Date Range:** 2020-2025 (recent awards)
- **Filter:** Contract value >$1M (eliminates minor subcontracts)

#### **USASpending.gov**
- Federal spending transparency
- Search by recipient + "NASA" + keywords
- Can reveal total contract values across multiple awards

#### **NASA Procurement**
- https://prod.nais.nasa.gov/pub/pub_library/srba.html
- Synopsis of NASA procurement opportunities
- Check for habitat-related RFPs and awards

### What to Track:
1. Prime contractor name
2. Contract title and description
3. Award amount (indicates program scale)
4. Period of performance (shows timeline)
5. NAICS code (industry classification)

### Completion Criteria:
- [ ] SAM.gov searched for all habitat-related keywords
- [ ] NASA contracts >$1M documented
- [ ] Prime contractors added to vendor list
- [ ] Contract amounts noted (cost estimation proxy)

---

## Data Quality and Verification Standards

### Source Credibility Hierarchy:
1. **Tier 1 (Authoritative):** NASA official sites, vendor official specs, government contracts
2. **Tier 2 (Credible):** Peer-reviewed papers, industry publications (SpaceNews, Aviation Week)
3. **Tier 3 (Reference):** Conference proceedings, trade publications
4. **Tier 4 (Use with caution):** Wikipedia, general news media (verify independently)
5. **Tier 5 (Avoid):** Blogs, forums, unverified claims

### TRL Verification:
- **Only accept TRL from:** NASA TechPort, NASA contracts, peer-reviewed papers citing NASA scale
- **Red flag:** Company claims TRL without NASA validation
- **Conservative approach:** If TRL uncertain, document as "TRL claimed X, not independently verified"

### Specification Verification:
- **Best:** Primary source (vendor datasheet, NASA technical document)
- **Acceptable:** Secondary source citing primary (news article quoting vendor spec)
- **Document carefully:** Tertiary sources, note "per [source], not verified"
- **Leave blank:** Rather than guessing or using uncredible sources

### Missing Data Protocol:
- **Do not estimate** - leave field null if no source
- **Do not extrapolate** - don't calculate one spec from another without explicit source
- **Note why missing** - "Vendor does not publish mass specifications" or "Data not available publicly"

---

## Completion Checklist

Research for this category is complete when:

### Vendor Coverage:
- [ ] All 10 primary vendors from Phase 1 fully researched (specs, TRL, sources)
- [ ] NASA TechPort searched comprehensively (all keyword combinations, TRL 5+ filter)
- [ ] SBIR/STTR Phase II and III habitat awards reviewed (2015-2025)
- [ ] International space agencies (ESA, JAXA, CSA, ASI) commercial partners documented
- [ ] At least 5 adjacent industry companies checked for space-rated products
- [ ] Conference exhibitors from IAC and Space Symposium (2022-2025) reviewed

### Technology Coverage:
- [ ] Inflatable/expandable systems: At least 5 distinct vendor offerings documented
- [ ] Rigid pressurized modules: At least 3 distinct vendor offerings documented
- [ ] 3D printed in-situ: At least 2 vendors with TRL 5+ documented
- [ ] Life support integration: At least 1 dedicated ECLSS vendor documented

### Specification Coverage (for each item in JSON):
- [ ] TRL: Verified from authoritative source or marked as unverified
- [ ] Mass: Documented if available, or noted as unavailable
- [ ] Volume: Stowed and deployed volumes documented where applicable
- [ ] Crew Capacity: Number of crew and duration documented
- [ ] Power: kW requirements documented or noted as unavailable
- [ ] Cost: Estimates documented or noted as unavailable
- [ ] Turnaround Time: Documented or noted as unavailable
- [ ] Source URLs: Every data point has source URL or marked as missing

### Quality Assurance:
- [ ] No data point without source URL (or explicit "unavailable" note)
- [ ] All TRL 5+ systems included, TRL <5 excluded
- [ ] International vendors represented (not just US)
- [ ] Both orbital and surface habitat systems included
- [ ] Emerging technologies (3D printing) included even if early TRL 5-6

### Documentation:
- [ ] Each Phase 3 iteration documents which strategies executed
- [ ] Sources captured with full URL and date accessed
- [ ] Gaps explicitly noted (not silently omitted)
- [ ] Conflicting information flagged for verification in Phase 4

---

## Expected Challenges and Mitigation

### Challenge 1: Proprietary Specifications
- **Issue:** Vendors don't publish mass, power, cost
- **Mitigation:** Patent documents, academic papers, conference presentations may contain data

### Challenge 2: TRL Claims Without Validation
- **Issue:** Companies claim high TRL without NASA verification
- **Mitigation:** Only accept TRL from NASA TechPort, NASA contracts, or peer-reviewed papers; otherwise mark "unverified"

### Challenge 3: International Language Barriers
- **Issue:** Chinese, Russian, Japanese documentation in native languages
- **Mitigation:** Focus on English abstracts, international conference papers, NASA collaborations

### Challenge 4: Rapidly Changing Technology
- **Issue:** Habitat field developing quickly, specs may become outdated
- **Mitigation:** Date all sources, note "as of [date]" for time-sensitive data

### Challenge 5: Conflating Orbital vs. Surface Systems
- **Issue:** Many habitats designed for Gateway (orbit) not lunar surface
- **Mitigation:** Explicitly note "orbital" vs. "surface" vs. "dual-use" in JSON entries

---

## Iteration Plan

### Iteration 1 (Immediate):
- Execute Strategy 1 (TechPort comprehensive)
- Execute Strategy 2 (Direct vendors - specifications deep dive)
- Begin JSON file with 10 primary vendors

### Iteration 2:
- Execute Strategy 3 (International agencies)
- Execute Strategy 4 (SBIR/STTR mining)
- Add international and small company vendors to JSON

### Iteration 3:
- Execute Strategy 5 (Conferences)
- Execute Strategy 6 (Adjacent industries)
- Fill specification gaps from Iterations 1-2

### Iteration 4:
- Execute Strategy 7 (Academic partnerships)
- Execute Strategy 8 (Materials suppliers - check for turnkey systems)
- Execute Strategy 9 (Patent search for specs and new vendors)

### Iteration 5:
- Execute Strategy 10 (Government contracts)
- Final gap-filling for high-priority specs (mass, TRL, cost)
- Prepare for Phase 4 verification

Each iteration will produce `phase3-research/iteration-NN.md` documenting:
- Which strategies executed
- What was found
- What was added to JSON
- Remaining gaps identified
