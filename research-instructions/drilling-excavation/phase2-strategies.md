# Phase 2: Search Strategies - Drilling and Excavation

**Date:** 2025-12-08
**Status:** Complete

## Strategy Overview

Based on Phase 1 findings, we need multiple complementary search strategies to ensure complete coverage of TRL 5+ drilling and excavation systems. The market is fragmented across government R&D, commercial startups, and defense contractors, requiring diverse search approaches.

## Search Strategy 1: NASA TechPort Comprehensive Search

**Objective:** Identify all NASA-funded drilling/excavation projects with TRL 5+

### Search Terms (to use on techport.nasa.gov)
- "lunar drill"
- "lunar drilling"
- "lunar excavation"
- "lunar excavator"
- "regolith mining"
- "regolith excavation"
- "lunar sampling"
- "lunar core sampling"
- "ISRU excavation"
- "volatile extraction drill"
- "lunar trenching"

### Filters to Apply
- **TRL:** Focus on 5-9 (may check 4 for near-term systems)
- **Technology Areas:**
  - TX04: Robotics and Autonomous Systems
  - TX07: Exploration Destination Systems
  - TX10: Entry, Descent, and Landing Systems
  - TX14: Thermal Management Systems

### Data to Extract
- Project ID and title
- Lead organization (vendor name)
- TRL (start, current, end)
- Technical description
- Contact information (PI)
- Any specifications in description or linked documents

### Expected Outcome
- Complete list of NASA-funded drilling/excavation projects
- Vendor names for follow-up research
- TRL progression information
- 10-20 projects expected based on preliminary search

---

## Search Strategy 2: Direct Vendor Search

**Objective:** Research identified vendors' commercial product lines

### Vendors to Research (from Phase 1)
1. **Honeybee Robotics** (Blue Origin)
   - Product: TRIDENT drill
   - Website: honeybeerobotics.com
   - Data needed: Cost, availability, customization, turnaround time

2. **Astrobotic Technology**
   - Products: Bucket-wheel excavator, Rocket M system
   - Website: astrobotic.com
   - Data needed: Commercial availability, specifications, pricing

3. **Lunar Outpost**
   - Products: MAPP rover, excavation systems
   - Website: lunaroutpost.com
   - Data needed: Product specifications, commercial terms

4. **Interlune** (with Vermeer)
   - Product: Lunar excavator (trencher design)
   - Website: interlune.space
   - Data needed: Timeline, specifications, commercial licensing

### Additional Vendors to Investigate
5. **Sierra Space** - Known for space systems, check for excavation tech
6. **Lockheed Martin** - Large defense contractor, lunar systems
7. **Northrop Grumman** - Space systems, potential excavation tech
8. **Caterpillar** - Heavy equipment, space adaptation projects
9. **Redwire Space** - Manufacturing/robotics, potential excavation
10. **Made In Space / Redwire** - Robotics systems

### Search Approach
- Company websites (Products/Solutions pages)
- Press releases and news sections
- Technical white papers and datasheets
- Contact forms for pricing/availability inquiries

### Data to Extract
- Model/variant names
- Technical specifications (mass, power, dimensions)
- TRL or development status
- Commercial availability
- Cost estimates or pricing structure
- Lead times/turnaround time
- Customization options

---

## Search Strategy 3: NASA SBIR/STTR Awards Database

**Objective:** Find companies with SBIR/STTR funding that have transitioned to commercial products

### Search Process
1. Visit sbir.gov and nasa.gov/sbir
2. Search for awards in these categories:
   - "lunar excavation"
   - "lunar drilling"
   - "regolith handling"
   - "lunar mining"
   - "ISRU equipment"
   - "autonomous excavation"

### Focus Areas
- Phase II awards (more likely to have commercial products)
- Phase III awards (already transitioning to commercial)
- Awards from 2015-2024 (recent enough to be relevant)

### Companies to Track
- Note company names from awards
- Research if they have commercial products now
- Check company websites for product offerings
- Look for post-SBIR commercialization

### Expected Outcome
- 15-25 companies with SBIR/STTR funding
- Subset with actual commercial products (estimate 5-10)
- Contact information for direct outreach

---

## Search Strategy 4: Space Conference Proceedings & Exhibitors

**Objective:** Identify vendors showcasing drilling/excavation systems at major conferences

### Conferences to Research (2022-2025)
1. **Lunar Exploration Analysis Group (LEAG)** - Annual meeting
2. **Lunar and Planetary Science Conference (LPSC)** - March annually
3. **International Astronautical Congress (IAC)** - Annual
4. **Space Resources Roundtable** - Annual
5. **AIAA Space Conference** - Annual
6. **ASCEND** - Annual (new conference)

### Search Approach
- Download conference programs/proceedings
- Review exhibitor lists
- Search abstracts for drilling/excavation papers
- Note presenting organizations/companies

### Data to Extract
- Company names and products
- Technical paper abstracts with specifications
- Contact information
- Technology demonstrations or showcases

---

## Search Strategy 5: Patent Database Search

**Objective:** Find technical specifications and identify additional vendors via patent filings

### Databases to Search
- USPTO (patents.google.com)
- Espacenet (European patents)
- WIPO (international patents)

### Search Terms
- "lunar drill"
- "extraterrestrial excavation"
- "regolith mining"
- "space excavator"
- "planetary drilling"
- "low gravity excavation"

### Focus Period
- 2015-2025 (recent patents)

### Data to Extract
- Assignee/company names
- Technical specifications from patent claims
- TRL implications from patent status
- Contact information for licensing

### Expected Outcome
- 20-30 relevant patents
- Technical details more complete than marketing materials
- Additional vendors not found through other strategies

---

## Search Strategy 6: Adjacent Industry Adaptation

**Objective:** Identify terrestrial companies adapting equipment for lunar use

### Industries to Research
1. **Mining Equipment Manufacturers**
   - Joy Global / Komatsu
   - Sandvik
   - Atlas Copco
   - Epiroc

2. **Construction Equipment**
   - Caterpillar (already noted)
   - Vermeer (partnering with Interlune)
   - John Deere (autonomous systems)
   - Bobcat/Doosan

3. **Drilling/Boring Equipment**
   - Boart Longyear
   - Major Drilling
   - Schlumberger (oil/gas adaptation)

4. **Robotics Companies**
   - Boston Dynamics
   - ABB Robotics
   - FANUC
   - Clearpath Robotics

### Search Approach
- Company websites - search for "space" "lunar" "NASA" "extraterrestrial"
- Press releases mentioning space applications
- NASA partnership announcements
- SBIR/STTR participation

### Expected Outcome
- 5-10 companies with space-adapted equipment
- Potentially higher TRL systems (adapted from proven tech)
- Commercial availability more certain

---

## Search Strategy 7: TechPort API Deep Dive (Required)

**Objective:** Programmatic search of all 15,000+ TechPort projects for drilling/excavation

### API Endpoints
```
GET https://techport.nasa.gov/api/projects
GET https://techport.nasa.gov/api/projects/{projectId}
```

### Search Approach
1. Retrieve all project IDs
2. Filter by keywords in title/description:
   - drill, drilling, excavat, regolith, mining, sampling, trenching, boring
3. Filter by TRL >= 5
4. Extract full project details for matches

### Data to Extract
- All fields from TechPort API
- Focus on: title, description, leadOrganization, trl, taxonomy
- Document any technical specifications in descriptions
- Note PI contact information

### Expected Outcome
- Complete coverage of NASA-funded systems
- No gaps in NASA TechPort data
- 15-30 relevant projects

---

## Search Strategy 8: Government Contract Databases

**Objective:** Identify companies with lunar excavation contracts

### Databases to Search
1. **SAM.gov (System for Award Management)**
   - Federal procurement system
   - Search for NASA contracts

2. **USASpending.gov**
   - Federal spending database
   - Track lunar/excavation contract awards

### Search Terms
- "lunar excavation"
- "lunar drilling"
- "regolith equipment"
- Vendor names from other strategies

### Data to Extract
- Contract recipients (company names)
- Contract values (cost indicators)
- Contract descriptions (technical requirements)
- Award dates (recent = more likely available)

---

## Search Strategy 9: International Space Agencies

**Objective:** Identify international drilling/excavation systems and assess commercial availability

### Agencies to Research
1. **ESA (European Space Agency)**
   - Commercial partner lists
   - Technology development programs
   - Lunar exploration equipment

2. **JAXA (Japan Aerospace Exploration Agency)**
   - Commercial partnerships
   - Lunar exploration technology

3. **CSA (Canadian Space Agency)**
   - Robotics expertise
   - Commercial vendor lists

4. **CNSA (China National Space Administration)**
   - Chang'e mission technology
   - Commercial availability assessment (likely none)

5. **ISRO (Indian Space Research Organisation)**
   - Chandrayaan mission technology
   - Commercial partnerships

### Search Approach
- Agency websites - commercial partnerships/vendors
- Technology development program pages
- Press releases and mission descriptions
- Academic papers from agency researchers

### Expected Outcome
- 5-15 international vendors
- Assessment of commercial availability (many may be government-only)
- Cross-reference with TRL requirements

---

## Search Strategy 10: Academic Research & Literature

**Objective:** Identify systems in development and their specifications

### Sources to Search
1. **NASA Technical Reports Server (NTRS)**
2. **Google Scholar**
3. **ResearchGate**
4. **ScienceDirect**
5. **AIAA / IEEE Digital Libraries**

### Search Terms
- "lunar excavation system"
- "lunar drilling technology"
- "regolith excavator design"
- "TRL 5" OR "TRL 6" OR "TRL 7" + lunar + (drill OR excavat*)

### Data to Extract
- System names and organizations
- Technical specifications from papers
- TRL assessments
- Test results and performance data
- Commercialization mentions

---

## Completion Checklist

Research will be considered complete when:

### Coverage Criteria
- [ ] All 10 search strategies executed
- [ ] TechPort API search completed (all projects reviewed)
- [ ] All vendors from Phase 1 researched in detail
- [ ] SBIR/STTR database searched comprehensively
- [ ] At least 3 space conference proceedings reviewed
- [ ] Patent search completed for 2015-2025
- [ ] All major adjacent industry vendors contacted or researched
- [ ] International agency commercial partners identified

### Documentation Criteria
- [ ] Every system has vendor name documented
- [ ] Every system has model/variant documented
- [ ] TRL documented from credible source (or marked unknown)
- [ ] Mass documented or marked as unavailable
- [ ] Power documented or marked as unavailable
- [ ] Cost estimate obtained or marked as "not publicly available"
- [ ] Turnaround time obtained or marked as "unknown"
- [ ] Every data point has source URL

### Quality Criteria
- [ ] Drilling systems separated from excavation systems
- [ ] Only TRL 5+ systems included
- [ ] No government-only/Artemis-exclusive items included
- [ ] Commercial availability clearly indicated
- [ ] All sources are primary (vendor) or credible secondary sources

### Specific System Criteria (Minimum Coverage)
- [ ] Honeybee TRIDENT fully documented
- [ ] NASA RASSOR documented (note: TRL 3, may exclude)
- [ ] NASA PVEx documented
- [ ] Interlune/Vermeer excavator documented
- [ ] Astrobotic systems documented
- [ ] Lunar Outpost systems documented
- [ ] At least 5 drilling systems with TRL 5+ identified
- [ ] At least 5 excavation systems with TRL 5+ identified

### Cross-Reference Checks
- [ ] No duplicate entries across drilling/excavation categories
- [ ] All TechPort systems cross-referenced with vendor websites
- [ ] All SBIR/STTR companies verified for commercial products
- [ ] International systems verified for commercial availability

---

## Expected Timeline

- **Strategy 1-3:** 2-3 hours (vendor research, TechPort web search, SBIR)
- **Strategy 4-6:** 2-3 hours (conferences, patents, adjacent industries)
- **Strategy 7:** 1-2 hours (TechPort API)
- **Strategy 8-10:** 2-3 hours (contracts, international, academic)
- **Total estimated time:** 8-12 hours across multiple iterations

---

## Risk Mitigation

### Known Challenges
1. **Cost data unavailable:** Most vendors don't publish pricing
   - Mitigation: Mark as "not publicly available", attempt direct contact

2. **TRL data inconsistent:** Different rating methodologies
   - Mitigation: Use NASA TRL scale, note source methodology

3. **Specs incomplete:** Marketing materials lack technical detail
   - Mitigation: Use patents, academic papers, NASA reports for details

4. **Commercial availability unclear:** Development vs. production
   - Mitigation: Mark status clearly (development, available, TBD)

### Quality Assurance
- Every iteration documents what was searched
- Sources captured immediately when found
- Gaps documented clearly (not silently skipped)
- Regular cross-checking against completion checklist

---

**Phase 2 Complete:** Comprehensive search strategies defined with clear completion criteria.
