# Phase 2: Search Strategies - EVA Suits and Human Tooling

**Date:** 2025-12-08
**Category:** EVA Suits and Human Tooling
**Researcher:** Claude Sonnet 4.5

## Overview

Phase 1 revealed that the lunar EVA suit market is highly concentrated, government-contract driven, with limited commercial availability. The challenge is not finding hundreds of vendors (they don't exist), but rather thoroughly documenting the few systems that do meet TRL 5+ criteria and establishing clear data on their specifications, availability, and commercial viability.

**Key Insight from Phase 1:** Unlike launch vehicles with many commercial options, lunar EVA suits have essentially ONE primary vendor (Axiom Space) with TRL 6-7 systems under development, plus several component suppliers and adjacent technology vendors.

## Strategic Approach

This research will focus on **depth over breadth** - thoroughly documenting known systems rather than searching for non-existent alternatives. The strategies below are designed to:

1. Extract maximum technical data from identified vendors
2. Confirm commercial availability status
3. Map the supply chain (components, PLSS, tools)
4. Identify any overlooked niche vendors
5. Assess adjacent technologies (diving suits, hazmat)

## Search Strategy 1: NASA TechPort Comprehensive Review

**Objective:** Extract TRL ratings and specifications from all EVA-related TechPort projects

**Approach:**
- Review each project identified in Phase 1 manually (JavaScript required)
- Search TechPort for additional terms:
  - "spacesuit", "EVA", "extravehicular", "PLSS"
  - "pressure garment", "mobility unit", "life support"
  - "lunar surface", "moonwalk", "spacewalk"
- Filter results to TRL 5+ only
- For each project, extract:
  - Lead organization name
  - TRL (start, current, end)
  - Technology area
  - Project status (active/completed)
  - Any specifications in description
  - Contact information
  - Related commercial products

**TechPort Projects to Review:**
1. Project 10517 - Advanced Space Suit Project
2. Project 10728 - EVA Suitport
3. Project 113277 - Environmental Protection Garment
4. Project 117027 - Spacesuit Digital Thread
5. Project 12036 - Spacesuit Evaporator-Absorber-Radiator (SEAR)
6. Project 94571 - Electrochromic Laminates for Visors
7. Project 13611 - PLSS Component Development
8. Project 89616 - Multifunctional, Self-Healing Hybridsil Materials for EVA
9. Project 93547 - Impact Resistant Composite Structures for Space Suit
10. Project 154346 - Permanent, Transparent Anti-fog Coating for Spacesuit
11. Project 18036 - (Title TBD)

**Expected Outcome:**
- 10-20 TechPort projects documented
- Identification of component suppliers with TRL 5+ tech
- Lead organization contact list for follow-up

**Success Criteria:**
- [ ] All 11 identified projects reviewed
- [ ] Additional TechPort search completed for each term variation
- [ ] TRL ratings documented for each project
- [ ] Lead organizations identified and categorized

---

## Search Strategy 2: NASA SBIR/STTR Commercial Transition Tracking

**Objective:** Identify companies that received SBIR/STTR funding for EVA technology and have commercialized products

**Data Source:** https://www.sbir.gov

**Search Terms:**
- "spacesuit"
- "EVA suit"
- "extravehicular"
- "portable life support"
- "PLSS"
- "pressure garment"
- "space glove"
- "space helmet"
- "lunar surface"

**Filters:**
- Agency: NASA
- Phase: II and III (higher TRL)
- Year: 2015-2025 (recent enough to be relevant)

**For Each Hit:**
1. Company name and location
2. Award amount and phase
3. Technology description
4. Current company status (active/acquired/defunct)
5. Commercial products resulting from SBIR
6. Company website and contact info
7. Any TRL progression mentioned

**Expected Outcome:**
- 15-30 SBIR recipients identified
- 3-10 companies with actual commercial products
- Component suppliers list (gloves, joints, fabrics, life support)

**Success Criteria:**
- [ ] SBIR.gov searched with all 8 search terms
- [ ] Results filtered to Phase II/III only
- [ ] Each result checked for commercial product status
- [ ] Contact information captured for active vendors

---

## Search Strategy 3: Vendor Deep Dive - Technical Specifications

**Objective:** Extract detailed specifications from known vendors' technical documents

**Vendors for Deep Dive:**

### 3.1 Axiom Space (Priority 1)
**Resources to search:**
- Corporate website technical pages
- Press releases (2022-2025)
- Conference presentations (IAC, ICES, Space Symposium)
- NASA contract documents (if public)
- Patent filings
- YouTube channel (technical briefings)

**Specifications to find:**
- Mass (suit + PLSS)
- Power requirements (W, battery capacity)
- Cost (per unit, service pricing)
- Turnaround time
- EVA duration specifications
- Operating pressure
- Temperature range (quantified)
- Mobility specifications
- Sizing range
- Consumables requirements
- Maintenance intervals

### 3.2 ILC Dover (Priority 2)
**Focus:** Astro™ EVA suit, Sol™ IVA suit
**Resources:** Corporate site, press releases, LinkedIn updates

### 3.3 Final Frontier Design / Paragon (Priority 3)
**Focus:** 3G Spacesuit commercial availability
**Resources:** Corporate sites, Kickstarter campaign, press releases

### 3.4 Collins Aerospace (Priority 4)
**Focus:** ISS EMU specifications (as baseline comparison)
**Resources:** Corporate site, NASA technical reports, NTRS documents

### 3.5 Oceaneering (Priority 5)
**Focus:** EVA tools and equipment specifications
**Resources:** Corporate site, product catalogs, NASA contracts

**Success Criteria:**
- [ ] Each vendor's website fully searched
- [ ] Press releases from 2022-2025 reviewed
- [ ] Technical papers/presentations found
- [ ] Specification sheets obtained or confirmed unavailable
- [ ] Contact forms submitted for missing data (if appropriate)

---

## Search Strategy 4: International and Niche Vendors

**Objective:** Identify any overlooked vendors in international markets or niche industries

### 4.1 International Space Agencies
**ESA (European Space Agency):**
- Search ESA commercial partners list
- ESA Industry Space Days exhibitors
- Terms: "EVA", "spacesuit", "life support"

**JAXA (Japan Aerospace Exploration Agency):**
- Search JAXA commercial partnerships
- Japanese aerospace companies

**CSA (Canadian Space Agency):**
- Canadian space industry vendors
- Robotics/EVA tools focus

**Other:**
- UAE space program vendors
- Indian space commercial partners
- Note: Chinese vendors likely ITAR-restricted, document but flag as unavailable

### 4.2 Defense and Specialty Contractors
**Target companies:**
- Lockheed Martin (space systems division)
- Northrop Grumman (space systems)
- Sierra Nevada Corporation
- Boeing (space systems)
- Honeywell (life support systems)

**Search approach:**
- Corporate websites: space systems → human spaceflight
- Conference exhibitor lists
- NASA contractor databases

### 4.3 Atmospheric Diving Suit Crossover
**Known ADS manufacturers:**
- JIM Suit (Oceaneering - already covered)
- Exosuit (Nuytco Research)
- Newt Suit

**Questions to answer:**
- Are any pursuing space certification?
- What would adaptation require?
- Cost comparison to purpose-built space suits?
- Timeline to space-rating?

**Success Criteria:**
- [ ] ESA partners list searched
- [ ] JAXA partners list searched
- [ ] Major defense contractors checked
- [ ] Atmospheric diving suit vendors contacted/researched
- [ ] Export control restrictions documented

---

## Search Strategy 5: Conference and Industry Event Mining

**Objective:** Identify vendors from space industry conference exhibitor lists

**Target Conferences (2022-2025):**
1. **International Astronautical Congress (IAC)**
   - Search exhibitor lists
   - Search technical program for EVA papers
   - Authors/affiliations of EVA-related papers

2. **Space Symposium**
   - Exhibitor directory
   - Technical track speakers

3. **International Conference on Environmental Systems (ICES)**
   - Focus on life support and EVA sessions
   - Paper authors and affiliations

4. **AIAA Space Conference**
   - Human spaceflight track
   - Exhibitors

5. **Satellite Conference**
   - Less likely but check exhibitors

**For Each Conference:**
- Download exhibitor list if available
- Search for keywords: EVA, spacesuit, life support, human systems
- Note company names, booth descriptions
- Cross-reference with already-known vendors

**Success Criteria:**
- [ ] IAC 2022, 2023, 2024 exhibitor lists searched
- [ ] ICES 2022-2024 programs reviewed for authors
- [ ] Space Symposium exhibitors checked
- [ ] Any new vendors identified and researched

---

## Search Strategy 6: Component and Subsystem Suppliers

**Objective:** Map the EVA suit supply chain - who makes the parts?

**Component Categories:**

### 6.1 Life Support Systems
- CO₂ removal (sorbents, NDIR sensors)
- O₂ generation/storage
- Thermal control (cooling loops, radiators)
- Humidity control
- Contaminant filtration

**Search terms:** "space life support", "CO2 removal space", "thermal control EVA"

### 6.2 Pressure Garment Materials
- Fabric suppliers (Goretex, Kevlar, specialized textiles)
- Bearing manufacturers (joints)
- Helmet manufacturers
- Visor coatings

**Search terms:** "spacesuit fabric", "pressure garment material", "space-rated bearing"

### 6.3 Power Systems
- Battery suppliers
- Power distribution systems
- Space-rated connectors

**Search terms:** "space battery", "EVA power system"

### 6.4 Tools and Crew Aids
- Tool manufacturers
- Tether systems
- Safety equipment

**Already known:** Oceaneering (dominant)
**Search for:** Alternatives or specialty tools

**Approach:**
1. Review technical papers for component vendor mentions
2. Search supplier websites for "space" or "aerospace" applications
3. Check NASA contractor databases
4. Search LinkedIn for companies tagging #spacesuits or #EVA

**Expected Outcome:**
- 20-40 component suppliers identified
- Understanding of which components are commercially available vs. proprietary
- Potential for mix-and-match system integration

**Success Criteria:**
- [ ] Each component category searched
- [ ] At least 3 suppliers per category identified or confirmed as single-source
- [ ] Component TRL and availability assessed
- [ ] Compatibility between components investigated

---

## Search Strategy 7: Academic and Research Institutions

**Objective:** Identify university/research lab spacesuit projects that may transition to commercial

**Target Institutions:**
- MIT Man-Vehicle Lab
- University of Maryland Space Systems Lab
- MIT Media Lab Space Exploration Initiative
- North Dakota State University (advanced fabrics)
- Texas A&M University

**Search Approach:**
- University websites: search for "spacesuit" projects
- Faculty research pages
- Recent PhD dissertations
- Technology transfer offices

**Questions:**
- What TRL are academic projects at?
- Any commercial partnerships or spinoffs?
- Any patents licensed to companies?

**Success Criteria:**
- [ ] Major space engineering programs checked
- [ ] Recent publications (2020-2025) searched
- [ ] Technology transfer opportunities identified
- [ ] Any startup companies from academic research found

---

## Search Strategy 8: Patent and Publication Analysis

**Objective:** Discover vendors and technologies through patents and technical publications

### 8.1 Patent Search
**Databases:** Google Patents, USPTO, Espacenet

**Search Terms:**
- "spacesuit"
- "extravehicular suit"
- "portable life support"
- "pressure garment"
- "EVA glove"

**Filters:**
- Filed: 2018-2025
- Assignee types: Companies (not individuals or NASA)

**For Each Relevant Patent:**
- Assignee name (company)
- Technology described
- Filing date (indicates development timeline)
- Check if assignee has commercial products

### 8.2 Technical Publication Search
**Databases:**
- NASA Technical Reports Server (NTRS)
- AIAA digital library
- Google Scholar

**Search Terms:**
- "lunar EVA suit"
- "commercial spacesuit"
- "spacesuit development"
- "PLSS technology"

**Filters:**
- Date: 2020-2025
- Publication type: Conference papers, journal articles

**For Each Relevant Paper:**
- Author affiliations (company or institution)
- Technology TRL mentioned
- Commercial applications discussed
- Vendor acknowledgments or collaborations

**Success Criteria:**
- [ ] Patent search completed for each term
- [ ] 2018-2025 patents reviewed
- [ ] New vendors identified from patents
- [ ] NTRS searched for recent technical reports
- [ ] Key conference papers identified and reviewed

---

## Search Strategy 9: Direct Vendor Contact (If Needed)

**When to use:** If critical data (cost, turnaround time, specs) unavailable via public sources

**Vendors to potentially contact:**
1. Axiom Space - commercial pricing, availability timeline
2. ILC Dover - Astro™ suit status and specifications
3. Paragon/Final Frontier Design - 3G suit commercial availability
4. Component suppliers - off-the-shelf availability

**Approach:**
- Use official contact forms or sales inquiries
- Frame as "lunar surface mission planning" inquiry
- Request specification sheets, pricing, lead times
- Note: May receive "contact sales" responses requiring follow-up

**Protocol:**
- Document date of inquiry
- Save all responses
- Mark data as "vendor-provided" in sources
- Verify vendor claims against independent sources when possible

**Success Criteria:**
- [ ] Contact attempted for critical missing data
- [ ] Responses documented
- [ ] Vendor-provided data marked as such in JSON

---

## Data Extraction Priorities

For each system/vendor found, prioritize data extraction in this order:

### Tier 1 (Must Have):
1. Vendor name
2. Model/variant designation
3. TRL (NASA scale 1-9)
4. System type (full suit, IVA vs EVA, component)
5. Commercial availability status (yes/no/timeline)

### Tier 2 (High Priority):
6. Mass (kg) - suit and PLSS separately if available
7. EVA duration capability (hours)
8. Operating pressure (psi or kPa)
9. Power requirements (W, battery capacity Wh)
10. Source URLs for all above

### Tier 3 (Important):
11. Cost (USD) - development, unit, or service pricing
12. Turnaround time (order to delivery)
13. Temperature range
14. Sizing/customization options
15. Maintenance requirements

### Tier 4 (Nice to Have):
16. Mobility specifications
17. Consumables requirements
18. Communications capabilities
19. Tool compatibility
20. Export restrictions/ITAR

---

## Special Focus: PLSS as Separate Product Line

**Research Question:** Can PLSS be procured separately from pressure garments?

**Approach:**
1. Search for "PLSS" as standalone product
2. Contact Collins Aerospace (known PLSS provider)
3. Search SBIR for PLSS-specific awards
4. Check TechPort for PLSS projects
5. Identify if any vendors sell PLSS independent of suits

**Expected Finding:** PLSS likely integrated, but components may be available

**Success Criteria:**
- [ ] PLSS vendor options documented
- [ ] PLSS specifications obtained
- [ ] PLSS commercial availability confirmed or denied
- [ ] PLSS-suit compatibility matrix understood

---

## Quality Control Measures

For each data point collected:
1. **Record source URL** (primary requirement)
2. **Note date accessed** (verification date)
3. **Assess source credibility:**
   - Tier 1: Vendor official site, NASA official
   - Tier 2: Technical papers, industry publications
   - Tier 3: News articles, Wikipedia
   - Tier 4: Forums, blogs (use only if no better source)
4. **Mark verified: false initially** (Phase 4 will verify)
5. **Add notes** if data is estimated, approximate, or qualified

---

## Expected Outcomes Summary

Based on Phase 1 findings and industry knowledge, expected results:

**Full EVA Suits (Lunar-Capable, TRL 5+):**
- 1-2 vendors (Axiom AxEMU confirmed, possibly ILC Dover Astro™)

**IVA Suits (Launch/Entry, TRL 5+):**
- 3-5 vendors (SpaceX, David Clark, Final Frontier Design, others)

**PLSS Systems:**
- 1-3 vendors (Collins Aerospace, possibly others)

**EVA Tools:**
- 1-2 vendors (Oceaneering dominant, possibly others)

**Component Suppliers:**
- 20-50 companies (fabrics, bearings, life support, power, etc.)

**TechPort Projects:**
- 15-30 projects identified
- 5-10 at TRL 5+

**SBIR Recipients:**
- 20-40 companies
- 5-10 with commercial products

**Total Items in JSON:**
- Estimate 3-8 complete systems (suits + PLSS)
- Estimate 10-20 significant components/subsystems at TRL 5+

---

## Timeline Estimate

- **Strategy 1 (TechPort):** 2-3 hours
- **Strategy 2 (SBIR):** 1-2 hours
- **Strategy 3 (Vendor Deep Dive):** 2-3 hours
- **Strategy 4 (International/Niche):** 1-2 hours
- **Strategy 5 (Conferences):** 1-2 hours
- **Strategy 6 (Components):** 2-3 hours
- **Strategy 7 (Academic):** 1 hour
- **Strategy 8 (Patents/Pubs):** 1-2 hours
- **Strategy 9 (Direct Contact):** Ongoing, response-dependent

**Total Estimated Research Time:** 11-18 hours across multiple iterations

---

## Iteration Plan

**Iteration 1:** Strategies 1, 2, 3 (core vendors and TechPort)
**Iteration 2:** Strategies 4, 5 (international and conferences)
**Iteration 3:** Strategies 6, 7, 8 (components, academic, patents)
**Iteration 4+:** Gap filling, vendor contact, verification prep

Each iteration will produce:
- `phase3-research/iteration-NN.md` with notes
- Updates to `output/eva-suits-human-tooling.json`
- Updates to `completion-checklist.md` progress

---

## Risk Mitigation

**Risk 1: Limited publicly available data**
- Mitigation: Accept gaps, document as "unavailable" with notes
- Don't fabricate or estimate without clear basis

**Risk 2: TechPort access limitations (JavaScript)**
- Mitigation: Manual browser access, screenshot key pages
- Use web search for "site:techport.nasa.gov" to find projects

**Risk 3: Vendor non-response to inquiries**
- Mitigation: Document inquiry attempt, move on
- Don't block research waiting for responses

**Risk 4: ITAR/export restrictions on data**
- Mitigation: Note restrictions, include what's public
- Don't attempt to obtain controlled information

**Risk 5: Few vendors meeting TRL 5+ criteria**
- Mitigation: This is a valid finding - document thoroughly
- Include market analysis of why few options exist

---

## Alignment with Master Methodology

This strategy aligns with master methodology requirements:

✅ Multiple search strategies (9 distinct strategies)
✅ TechPort search included (Strategy 1)
✅ SBIR/STTR search included (Strategy 2)
✅ Focus on TRL 5+ systems
✅ International vendor consideration
✅ Adjacent industry exploration (diving suits)
✅ Conference/industry event mining
✅ Component supplier mapping
✅ Citation requirements built in
✅ Iterative approach planned
✅ Completion checklist created (see separate file)

**Note:** Unlike launch vehicles with 10+ vendors, EVA suits have a concentrated market. The strategy emphasizes **depth** (thorough documentation of few systems) over **breadth** (finding many alternatives that don't exist).
