# Phase 2: Search Strategies - ISRU and Resource Processing

**Date:** 2025-12-08
**Researcher:** Claude Sonnet 4.5
**Category:** In-Situ Resource Utilization (ISRU) and Resource Processing

## Context from Phase 1

Phase 1 revealed that:
- **NO TRL 9 systems exist** - all ISRU technology is pre-commercial (TRL 4-6)
- **TRL 5+ focus required** - Multiple systems achieved TRL 5-6 in 2023-2024
- **NASA-dependent industry** - Virtually all vendors funded through SBIR/STTR/GCD
- **7 major vendors identified** with active projects
- **10+ NASA TechPort projects** at TRL 5+ documented

## Research Objectives

1. **Document all TRL 5+ ISRU systems** with available specifications
2. **Track technology maturation** from Phase I → Phase II SBIR/STTR
3. **Identify power, mass, cost data** where available (expected to be sparse)
4. **Clarify commercial readiness** and procurement timelines
5. **Build comprehensive JSON database** of available systems

## Search Strategies

### Strategy 1: NASA TechPort Comprehensive Search

**Objective:** Find ALL ISRU-related projects at TRL 5+

**Method:**
1. Search TechPort web interface with these terms:
   - "lunar ISRU"
   - "oxygen production"
   - "water extraction"
   - "regolith processing"
   - "molten regolith electrolysis"
   - "propellant production"
   - "in-situ resource utilization"
   - "volatiles extraction"
   - "lunar water"
   - "lunar resources"

2. Filter by:
   - TRL: 5, 6, 7, 8, 9 (focus on mature systems)
   - Technology Areas: TX06 (Human Health, Life Support, and Habitation Systems), TX07 (Exploration Destination Systems)
   - Status: Active, Completed (last 3 years)

3. For each project found:
   - Record project ID, title, organization
   - Extract TRL progression (start → current → end)
   - Note completion dates and status
   - Identify lead organization and partners
   - Document any specifications mentioned

**Expected Coverage:** 15-25 projects (10 already identified in Phase 1)

**Sources:**
- https://techport.nasa.gov/search
- https://techport.nasa.gov/api/projects/{projectId}

---

### Strategy 2: Vendor Website Deep Dive

**Objective:** Extract detailed specifications from vendor websites and publications

**Vendors to Research (from Phase 1):**
1. **Paragon Space Development Corporation**
   - URL: https://www.paragonsdc.com/
   - Focus: ICICLE, IHOP systems
   - Look for: Technical specs, white papers, press releases
   - Check: Products page, news/media, technical publications

2. **Lunar Resources, Inc.**
   - URL: https://lunarresourcesinc.com/ (if available)
   - Focus: MRE technology
   - Look for: Reactor specifications, production rates, power requirements
   - Check: LinkedIn, academic publications by founders

3. **Blue Origin**
   - URL: https://www.blueorigin.com/
   - Focus: Blue Alchemist MRE system
   - Look for: Tipping Point award details, technical specifications
   - Check: Press releases, investor presentations

4. **Astrobotic Technology**
   - URL: https://www.astrobotic.com/
   - Focus: RocketM (acquired from Masten)
   - Look for: Post-acquisition status, continued development
   - Check: Masten legacy documentation if available

5. **Physical Sciences, Inc.**
   - URL: https://www.psicorp.com/
   - Focus: Solar concentrator system
   - Look for: System specifications, power output, optical design
   - Check: Technical papers, NASA collaboration publications

6. **Outward Technologies (Blueshift LLC)**
   - URL: https://outward.tech/ or Blueshift website
   - Focus: MORRE vacuum metallurgy
   - Look for: Process specifications, product purity, throughput
   - Check: SBIR final reports if publicly available

7. **Pioneer Astronautics**
   - URL: https://www.pioneerastro.com/
   - Focus: MMOST steel/oxygen production
   - Look for: System design, production rates, TRL status updates
   - Check: Founder Robert Zubrin's publications

8. **Honeybee Robotics** (Blue Origin subsidiary)
   - URL: https://www.honeybeerobotics.com/
   - Focus: PVEx polar volatiles extractor
   - Look for: Integration with Blue Origin's Blue Alchemist, system specs
   - Check: Legacy Honeybee publications pre-acquisition

**Data to Extract:**
- System mass (kg)
- Power requirements (kW)
- Production rates (kg O2/year, kg H2O/year, etc.)
- Operating temperatures
- Consumables requirements
- TRL status and timeline
- Cost estimates (if available)
- Turnaround time for procurement (if commercial)

---

### Strategy 3: NASA SBIR/STTR Award Tracking

**Objective:** Track projects from Phase I → Phase II → commercialization

**Method:**
1. Search NASA SBIR/STTR database:
   - URL: https://sbir.nasa.gov/solicitationsearch
   - Keywords: "ISRU", "oxygen production", "water extraction", "regolith processing"
   - Filter: Phase II completed 2020-2024, Phase I completed 2022-2024

2. For each award:
   - Identify company and project title
   - Check if Phase I → Phase II (indicates technical success)
   - Look for Phase II final reports (sometimes publicly available)
   - Note commercialization plans mentioned in abstracts

3. Cross-reference with TechPort projects (many SBIR projects appear in TechPort)

**Expected Vendors:**
- Companies in Phase 1 list
- New companies not yet identified
- Adjacent technology providers (pumps, sensors, controllers)

**Sources:**
- https://sbir.nasa.gov/
- SBIR company websites for final reports

---

### Strategy 4: NASA Technical Publications Search

**Objective:** Find detailed technical specifications in NASA papers and presentations

**Sources to Search:**
1. **NASA Technical Reports Server (NTRS)**
   - URL: https://ntrs.nasa.gov/
   - Keywords: "lunar ISRU", "oxygen production", "regolith electrolysis", "water extraction"
   - Date range: 2020-2025 (recent work)
   - Look for: Conference papers, technical memoranda, contractor reports

2. **NASA ISRU Portal**
   - URL: https://isru.nasa.gov/
   - Browse all technology pages
   - Download fact sheets and technical summaries

3. **Conference Proceedings:**
   - AIAA Space conferences (2022-2024)
   - Lunar and Planetary Science Conference (LPSC)
   - International Astronautical Congress (IAC)
   - Search for: Company names from Phase 1, project names, ISRU keywords

**Data to Extract:**
- System architectures and mass breakdowns
- Power consumption profiles
- Test results and performance data
- TRL justifications
- Cost estimates (rare but valuable)

---

### Strategy 5: Academic and Research Institution Publications

**Objective:** Find university/research lab ISRU work that may be commercializing

**Institutions to Check:**
1. **Colorado School of Mines**
   - Known ISRU research center
   - Check: Faculty publications, industry partnerships
   - Look for: Spin-off companies, technology licensing

2. **Arizona State University**
   - Partner on Lunar Resources MRE project
   - Check: School for Earth and Space Exploration publications

3. **Michigan Technological University**
   - Partner on MRE and metal extraction research
   - Check: Materials science and chemical engineering departments

4. **Universities with NASA Space Grant programs**
   - Search for lunar resource utilization research
   - Check if any technologies reached commercial stage

**Search Method:**
- Google Scholar: "lunar ISRU", "oxygen production moon", etc.
- University news pages for NASA partnerships
- LinkedIn for researchers moving to industry

---

### Strategy 6: Industry News and Space Media

**Objective:** Track recent announcements, partnerships, and commercialization updates

**Sources to Monitor:**
1. **Space News**
   - URL: https://spacenews.com/
   - Search: "ISRU", "lunar resources", "Artemis", vendor names
   - Look for: Funding rounds, contract awards, technology demos

2. **NASA News Releases**
   - URL: https://www.nasa.gov/news/
   - Filter: Artemis, Moon to Mars, ISRU topics
   - Look for: Tipping Point awards, SBIR selections, technology demonstrations

3. **Company Press Releases**
   - Check each vendor's news/media page
   - Set up Google Alerts for vendor names + "ISRU" or "lunar"

4. **LinkedIn Company Pages**
   - Follow all vendors from Phase 1
   - Look for: Job postings (indicate active programs), project updates

**Expected Findings:**
- Commercialization timelines
- New partnerships
- Technology demonstration results
- Market positioning

---

### Strategy 7: International Space Agency Programs

**Objective:** Identify non-NASA ISRU systems or international commercial vendors

**Agencies to Check:**
1. **European Space Agency (ESA)**
   - Search: ESA ISRU initiatives, lunar resource programs
   - Look for: European commercial partners

2. **Japan Aerospace Exploration Agency (JAXA)**
   - Search: JAXA lunar exploration, ISRU technology
   - Look for: Japanese commercial space companies

3. **Canadian Space Agency (CSA)**
   - Search: Lunar Gateway contributions, ISRU involvement
   - Look for: Canadian robotics/processing companies

4. **China National Space Administration (CNSA)**
   - Note: Chang'e missions demonstrate lunar resource sampling
   - Look for: Publicly available commercial ISRU technology (unlikely but check)

**Expected Coverage:**
- European ISRU vendors (if any at TRL 5+)
- International collaborations on Artemis
- Technology transfer opportunities

---

### Strategy 8: Adjacent Industry Technology Transfer

**Objective:** Find terrestrial technologies adaptable to lunar ISRU

**Industries to Explore:**
1. **Mining Equipment Manufacturers**
   - Electrolysis technology for metal refining
   - Vacuum metallurgy systems
   - Check: Major mining equipment vendors (Caterpillar, Sandvik, etc.)

2. **Industrial Gas Companies**
   - Oxygen production systems (cryogenic, PSA, electrolysis)
   - Check: Air Liquide, Linde, Air Products
   - Look for: Space-adapted versions

3. **Chemical Processing Equipment**
   - Water purification systems
   - Electrolyzers (alkaline, PEM, solid oxide)
   - Check: Industrial equipment vendors with space divisions

4. **Semiconductor Manufacturing**
   - High-purity silicon production
   - Vacuum processing technology
   - Check: Equipment manufacturers (Applied Materials, Lam Research, etc.)

**Expected Findings:**
- Limited direct applicability (lunar environment too unique)
- Potential subcomponent suppliers
- Technology readiness baselines (terrestrial TRL 9 → lunar TRL 3-5)

---

### Strategy 9: Patent and Intellectual Property Search

**Objective:** Identify ISRU technologies and their owners

**Method:**
1. **USPTO Patent Search**
   - URL: https://www.uspto.gov/
   - Keywords: "lunar", "ISRU", "regolith", "oxygen production", "molten electrolysis"
   - Assignees: Vendor names from Phase 1
   - Date range: 2015-2025

2. **Google Patents**
   - Easier interface for broad searching
   - Can see citation networks (who builds on whose work)

**Expected Findings:**
- Technology ownership clarity
- Design details not in public literature
- New vendors not yet on NASA contracts

---

### Strategy 10: Direct Vendor Outreach (If Needed)

**Objective:** Fill gaps in public information with direct inquiries

**Method:**
1. Prepare standardized inquiry email:
   - Purpose: Academic/trade study research
   - Questions: System specs, TRL status, commercialization timeline, ballpark cost
   - Request: Public information only, white papers, spec sheets

2. Contact vendors with limited public info:
   - Lunar Resources, Inc.
   - Outward Technologies
   - Any new vendors discovered in research

**Note:** Only use if public sources exhausted. Prefer public data for verification.

---

## Completion Criteria

Research is complete when:

### Coverage Criteria
- [ ] All NASA TechPort ISRU projects at TRL 5+ reviewed (estimate: 20+ projects)
- [ ] All vendors from Phase 1 (7 companies) researched in depth
- [ ] All vendor websites checked for specifications and publications
- [ ] NASA SBIR/STTR awards for ISRU searched (2020-2025)
- [ ] NTRS searched for technical papers (2020-2025)
- [ ] ESA, JAXA, CSA ISRU programs checked
- [ ] At least 3 industry news sources searched for recent announcements

### Data Criteria
- [ ] Every TRL 5+ system has entry in JSON file
- [ ] Each system has at minimum: vendor, model, TRL (with source)
- [ ] Mass, power, cost documented where available (or marked as "not available")
- [ ] Production rates/throughput documented for all processing systems
- [ ] Operating parameters (temp, pressure, consumables) documented
- [ ] Commercialization status clarified (available now, timeline, R&D only)

### Quality Criteria
- [ ] Every data point has source URL
- [ ] TRL values verified against NASA TechPort or credible publications
- [ ] No duplicate systems in JSON file
- [ ] All vendors cross-referenced (e.g., Honeybee → Blue Origin acquisition noted)
- [ ] Recent updates (2024-2025) captured

### Documentation Criteria
- [ ] At least 3 research iterations documented in phase3-research/
- [ ] Each iteration shows search queries, sources checked, findings
- [ ] Gaps and challenges documented
- [ ] Verification notes prepared for Phase 4

---

## Expected Challenges

1. **Sparse Public Data:** Most systems are pre-commercial, specs not public
2. **Cost Information:** Likely unavailable for all systems (development hardware, not products)
3. **Mass Data:** System-level mass often not reported in early TRL projects
4. **Power Requirements:** Highly variable by operating mode, not standardized
5. **Commercial Availability:** Turnaround time not applicable (nothing for sale yet)
6. **TRL Ambiguity:** Vendor claims vs. NASA assessments may differ

**Mitigation:**
- Mark fields as "not available" rather than guessing
- Use "estimated" or "typical range" where appropriate with clear sourcing
- Document assumptions in notes field
- Prioritize verified data over completeness

---

## Iteration Plan

**Iteration 1:**
- Execute Strategy 1 (TechPort comprehensive search)
- Execute Strategy 2 (Vendor websites for 7 known vendors)
- Build initial JSON file with all systems found
- Document in phase3-research/iteration-01.md

**Iteration 2:**
- Execute Strategy 3 (SBIR/STTR tracking)
- Execute Strategy 4 (NASA technical publications)
- Add new systems to JSON, fill gaps in existing entries
- Document in phase3-research/iteration-02.md

**Iteration 3:**
- Execute Strategy 5 (Academic institutions)
- Execute Strategy 6 (Industry news)
- Execute Strategy 7 (International agencies)
- Final gap-filling in JSON
- Document in phase3-research/iteration-03.md

**Iteration 4+ (if needed):**
- Execute Strategy 9 (Patent search) if major gaps remain
- Execute Strategy 10 (Direct outreach) as last resort
- Final verification preparation

---

## Success Metrics

By end of Phase 3:
- **Systems documented:** 15-25 ISRU systems at TRL 5+ in JSON
- **Data completeness:** 80%+ have vendor, model, TRL with sources
- **Data richness:** 40%+ have mass, power, or production rate data
- **Source quality:** 100% have at least one credible source per system
- **Commercial clarity:** 100% have commercialization status noted

---

## Timeline Estimate

- **Phase 2 (this document):** 0.5 hours (COMPLETE)
- **Phase 3 Iteration 1:** 2-3 hours (TechPort + vendor sites)
- **Phase 3 Iteration 2:** 2-3 hours (SBIR/publications)
- **Phase 3 Iteration 3:** 1-2 hours (Academic/news/international)
- **Phase 4 Verification:** 2-3 hours (verify all data points)

**Total estimated time:** 8-12 hours for complete research

---

## Next Steps

1. Create completion checklist (separate file)
2. Create phase3-research/ folder
3. Begin Iteration 1: TechPort comprehensive search + vendor websites
4. Build JSON file incrementally as systems are found
