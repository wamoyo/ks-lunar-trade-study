# Phase 2: Search Strategies - Communications Systems

**Date:** 2025-12-08
**Category:** Communications Systems
**Researcher:** Claude Code

## Overview

Based on Phase 1 findings, this document outlines multiple comprehensive search strategies to ensure complete coverage of commercially available lunar communications systems with TRL 5+. The preliminary research identified major players and technologies, but systematic searches are required to find:

1. Additional vendors not yet discovered
2. Detailed specifications (power, mass, cost, turnaround time)
3. Emerging commercial providers
4. International vendors outside major space agencies
5. Adjacent industry pivots (satellite communications, military comms)

## Strategy 1: NASA TechPort Comprehensive Search

**Rationale:** TechPort contains 15,000+ NASA-funded projects with TRL ratings, providing authoritative source for systems with TRL 5+.

**Execution:**

### Web Interface Search Terms
- "lunar communication"
- "lunar relay"
- "lunar network"
- "delay-tolerant networking"
- "LunaNet"
- "optical communications" + "lunar" OR "deep space"
- "laser communications" + "Moon"
- "transponder" + "lunar" OR "deep space"
- "antenna" + "lunar"
- "radio" + "lunar surface"

### Technology Taxonomy Filters
- TX11: Software, Modeling, Simulation, and Information Processing
  - TX11.2: Information Systems
  - TX11.2.3: Communications Networks
- TX12: Materials, Structures, Mechanical Systems, and Manufacturing
  - TX12.5: Avionics
- TX05: Communications, Navigation, and Orbital Debris Tracking and Characterization Systems
  - TX05.1: Communication
  - TX05.1.1: RF Communications
  - TX05.1.2: Optical Communications
  - TX05.2: Navigation

### TRL Filters
- Focus on TRL 5-9
- Include TRL 4 if system is clearly advancing to TRL 5

### Data to Extract
- Project ID and title
- Lead organization (vendor name)
- TRL (start, current, end)
- Project description and objectives
- Contact information
- Technology taxonomy
- Related documents/reports
- Commercial transition status

### API Search (if needed for thoroughness)
```bash
curl "https://techport.nasa.gov/api/projects" > all_projects.json
# Filter for relevant technology areas and TRL ranges
# Extract project IDs for detailed queries
```

## Strategy 2: Direct Vendor Technical Documentation

**Rationale:** Preliminary research identified major vendors but lacked detailed specifications. Direct examination of vendor sites and technical documents will fill gaps.

### Vendors to Investigate in Detail

**Tier 1: Confirmed Active Vendors**
- Surrey Satellite Technology Ltd (SSTL)
- Intuitive Machines
- ispace-U.S.
- Crescent Space / Lockheed Martin
- Nokia Bell Labs
- General Dynamics Mission Systems
- L3Harris Technologies
- Thales Alenia Space
- Peraton
- CPI Antenna Technologies

**For Each Vendor:**
1. Navigate to products/services pages
2. Find technical datasheets and specifications
3. Look for "Lunar" or "Deep Space" product categories
4. Check press releases for contract awards and specifications
5. Review investor presentations for market data
6. Search "[vendor name] lunar communications specifications site:[vendordomain]"

**Specifications to Extract:**
- Model/variant names
- Mass (kg)
- Power requirements (kW or W)
- Dimensions
- Data rates
- Frequencies
- Operating temperature range
- Estimated cost (if available)
- Lead time / turnaround time
- TRL rating
- Flight heritage

## Strategy 3: NASA SBIR/STTR Awards Database

**Rationale:** Small businesses with NASA funding may have commercial products derived from research. Many innovative systems start as SBIR/STTR projects.

**Execution:**

### Search NASA SBIR/STTR Database
- URL: https://sbir.nasa.gov/solicit/awards
- Search terms:
  - "lunar communication"
  - "lunar relay"
  - "optical communications"
  - "delay-tolerant networking"
  - "space radio"
  - "transponder"
  - "antenna" + "space"

### Focus Areas
- Phase II and Phase III awards (more likely to have commercial products)
- Recent awards (2015-2025) for current technology
- Check company status: are they still operating?
- Do they have commercial products now?

### Data to Extract
- Company name and location
- Award title and abstract
- Phase (I, II, III)
- Award year
- NASA center sponsor
- Company website (if still active)
- Commercial product availability

### Follow-up
- Visit each company website
- Search for commercial product offerings
- Check if technology transitioned to market
- Note TRL progression from research to commercial

## Strategy 4: International Space Agency Commercial Partners

**Rationale:** ESA, JAXA, CSA, and other agencies have commercial partners that may offer systems to non-government customers.

**Execution:**

### ESA Commercial Partners
- Search ESA Technology Transfer Programme
- Check ESA Business Incubation Centres alumni
- Review Moonlight initiative partners and subcontractors
- Search ESA Telecommunications and Integrated Applications website

### JAXA Partners
- Review Japanese commercial space companies
- Check JAXA innovation hub partners
- Search for J-SPARC collaborative partners

### CSA Partners
- Canadian space communications companies
- Search Telesat, MDA Corporation offerings

### Other International
- Australian Space Agency partners (CSIRO commercial arm)
- Indian Space Research Organisation (ISRO) commercial division
- China National Space Administration (limited commercial availability but document what exists)

### Search Terms for Each Agency
- "[Agency name] commercial partners communications"
- "[Agency name] lunar communications vendors"
- "[Agency name] technology transfer communications"

## Strategy 5: Adjacent Industry Vendors

**Rationale:** Companies in related industries may offer space-qualified versions of their products.

**Industries and Vendors to Search:**

### Satellite Communications (SATCOM)
- Viasat
- Hughes Network Systems
- Inmarsat / Viasat Global
- Iridium Communications
- SES
- Intelsat
- Gilat Satellite Networks

**Search:** "[Company name] deep space" OR "lunar" OR "cislunar" OR "beyond LEO"

### Military/Defense Communications
- Raytheon Technologies
- Northrop Grumman
- BAE Systems
- Cobham Advanced Electronic Solutions
- Harris (now L3Harris) - already covered
- Rockwell Collins (now Collins Aerospace)

**Search:** "[Company name] space communications systems"

### Ground Station and Antenna Providers
- Kongsberg Satellite Services (KSAT)
- ATLAS Space Operations
- AWS Ground Station
- Azure Space
- Leaf Space

**Search:** "[Company name] lunar" OR "deep space" OR "Moon communications"

### RF/Microwave Component Manufacturers
- Analog Devices
- Qorvo
- NXP Semiconductors
- Microchip Technology

**Search:** "[Company name] space-qualified" + "communications"

## Strategy 6: Space Industry Conferences and Trade Shows

**Rationale:** Exhibitor lists reveal vendors active in space communications market.

**Conferences to Review (2023-2025):**

### Major Space Conferences
- International Astronautical Congress (IAC) - exhibitor lists
- SmallSat Conference - proceedings and exhibitors
- Satellite Innovation - attendees and presenters
- Space Symposium - exhibitors
- AIAA SciTech Forum - papers on communications
- IEEE Aerospace Conference - communications sessions

**For Each Conference:**
1. Download exhibitor list (if publicly available)
2. Filter for communications-related companies
3. Search proceedings for lunar communications papers
4. Note authors and their affiliations (company names)
5. Cross-reference with vendor lists

**Search Strategy:**
- "[Conference name] 2025 exhibitors communications"
- "[Conference name] proceedings lunar communications"
- Google Scholar: "lunar communications" conference:[name] year:2023-2025

## Strategy 7: Government Contract Databases

**Rationale:** Contract awards reveal which vendors are supplying lunar communications systems to government customers, indicating commercial availability.

**Databases to Search:**

### US Government
- **SAM.gov (System for Award Management)**
  - Search awards for "lunar communications"
  - Filter by NAICS codes: 334220 (Radio and TV Broadcasting and Wireless Communications Equipment)
  - Date range: 2020-2025

- **USA Spending**
  - Agency: NASA
  - Keywords: "lunar communications", "deep space communications", "relay satellite"

- **NASA NSNS (Near Space Network Services) Awards**
  - Direct search for NSNS contract awardees
  - Check NASA press releases for announcements

### International
- **ESA procurement database**
  - Search for Moonlight contracts
  - ESPRIT module subcontractors

- **UK Space Agency contracts**
  - Lunar Pathfinder related awards

### Data to Extract
- Contractor name
- Contract value (gives cost indication)
- Delivery date (gives lead time indication)
- Equipment description
- Performance requirements

## Strategy 8: Trade Publications and Industry News

**Rationale:** Industry news reveals product announcements, contract awards, and market intelligence not found in technical databases.

**Publications to Search (2023-2025):**

### Space-Specific Publications
- SpaceNews
- Via Satellite
- Satellite Today
- Space Daily
- NASA Spaceflight
- Space.com

**Search Terms:**
- "lunar communications" + "contract" OR "announcement" OR "launch"
- "lunar relay" + "commercial"
- "Moon communications" + "service"
- "[Vendor name]" + "lunar"

### Technology and Industry Publications
- Aviation Week
- Defense News
- IEEE Spectrum
- MIT Technology Review

**Search Focus:**
- New product announcements
- Contract awards
- Company expansions into lunar market
- Technology demonstrations
- Partnership announcements

### Method
- Google search: site:[publication].com "lunar communications" 2024..2025
- Industry news aggregators: Space News Hub, satellite industry newsletters

## Strategy 9: Academic and Technical Literature

**Rationale:** Research papers often cite commercial systems and provide independent technical assessments.

**Databases to Search:**

### Technical Papers
- **IEEE Xplore**: "lunar communications" OR "lunar relay" (filter: 2020-2025)
- **Google Scholar**: "lunar communications systems" commercial available
- **NASA Technical Reports Server (NTRS)**: "lunar communications" (filter: recent)
- **arXiv.org**: search physics and engineering for lunar communications

### Focus
- Papers describing commercial system implementations
- Comparison studies of available systems
- Mission planning papers that specify equipment used
- Standards and architecture papers (cite vendors)

### Data to Extract
- System names and vendors mentioned
- Performance comparisons (reveals competitive landscape)
- Technical specifications cited
- References to vendor documentation

## Strategy 10: LinkedIn and Professional Networks

**Rationale:** Company pages and employee profiles reveal organizational structure and product offerings not always visible on corporate websites.

**Execution:**

### For Known Vendors
- Search LinkedIn company pages
- Review "Products" or "Services" sections
- Check recent posts for announcements
- Identify key personnel (sales, product management) for public contact info

### For Unknown Vendors
- Search LinkedIn: "lunar communications" in job titles or company descriptions
- Filter by "Space" or "Aerospace" industry
- Identify smaller companies working in this space

### Startup Discovery
- Crunchbase: search "lunar" + "communications"
- PitchBook: space communications startups
- Space investment databases (Space Capital, Space Angels)

**Note:** Use only publicly available information. Do not extract email addresses or private contact details.

## Strategy 11: Regulatory and Standards Bodies

**Rationale:** Companies participating in standards development are active in the market.

**Organizations to Check:**

### Standards Bodies
- **Consultative Committee for Space Data Systems (CCSDS)**
  - DTN and Bundle Protocol working groups
  - Member organizations list
  - Standards adoption by vendors

- **Internet Engineering Task Force (IETF)**
  - DTN Research Group members
  - Space networking working groups

- **3GPP (3rd Generation Partnership Project)**
  - Non-terrestrial networks (NTN) working groups
  - Members working on lunar 4G/5G standards

### Regulatory
- **FCC Space Bureau filings**
  - License applications for lunar communications
  - Frequency coordination requests

- **ITU (International Telecommunication Union)**
  - Radio Regulations Database
  - Space services filings

**Data to Extract:**
- Company names participating in standards
- Systems filed for regulatory approval
- Frequency allocations (indicates operational plans)

## Completion Checklist

Research is considered complete when ALL of the following criteria are met:

### Coverage Criteria
- [ ] NASA TechPort searched comprehensively (all relevant keywords and technology areas)
- [ ] All Tier 1 vendors (10 identified in Phase 1) have detailed specifications documented
- [ ] NASA SBIR/STTR database searched for communications-related awards (2015-2025)
- [ ] ESA, JAXA, CSA commercial partner lists reviewed
- [ ] At least 5 adjacent industry vendors investigated (SATCOM, defense, ground stations)
- [ ] Exhibitor/proceedings from at least 3 major space conferences (2023-2025) reviewed
- [ ] SAM.gov and USA Spending searched for NASA communications contracts (2020-2025)
- [ ] At least 5 trade publications searched for announcements (2023-2025)
- [ ] IEEE Xplore and Google Scholar searched for technical papers (2020-2025)
- [ ] CCSDS and 3GPP member lists checked for vendor participation

### Specification Completeness
- [ ] Every item in JSON has TRL rating with source
- [ ] At least 75% of items have mass (kg) or note why unavailable
- [ ] At least 75% of items have power requirements or note why unavailable
- [ ] All items have vendor and model/variant identified
- [ ] Cost estimates found for at least 50% of items (or documented as proprietary)
- [ ] Turnaround time found for at least 50% of items (or documented as variable)
- [ ] Data rates documented for all communications systems
- [ ] Frequency bands documented for all RF systems

### Quality Criteria
- [ ] Every specification has a source URL
- [ ] All sources verified as credible (vendor official sites, NASA, technical papers, trade press)
- [ ] No Wikipedia as sole source (acceptable as supplementary)
- [ ] Screenshots captured for key specifications
- [ ] At least 15 distinct vendors/systems documented (includes relay satellites, surface networks, ground systems, transponders, optical systems)

### Cross-Verification
- [ ] Multiple sources found for at least 50% of systems (confirms data accuracy)
- [ ] Conflicting specifications noted and researched
- [ ] All Phase 1 vendors have complete profiles in JSON

### TRL Filter Applied
- [ ] All items are TRL 5+ (confirmed via source)
- [ ] Any TRL < 5 items removed from JSON
- [ ] TRL source is authoritative (NASA TechPort, vendor official statement, or credible technical paper)

## Expected Outcomes

By completing these strategies, we expect to:

### Minimum System Count
- **Lunar relay satellites**: 5-8 distinct systems (commercial and government partnership)
- **Surface networks**: 2-4 systems (4G/LTE, proprietary RF)
- **Transponders/radios**: 8-12 variants (S-band, X-band, UHF, Ka-band)
- **Optical systems**: 3-5 systems (demonstrated and in development)
- **Ground network equipment**: 5-8 antenna systems and ground stations
- **DTN implementations**: 2-4 commercial offerings

**Total: 25-40 distinct communications systems documented**

### Specification Completeness Target
- 100% have: Vendor, model, TRL, source URLs
- 75%+ have: Mass, power
- 50%+ have: Cost estimates, turnaround time
- 100% have: Technical performance (data rates, frequencies, ranges)

## Time Allocation

This is iterative research conducted across multiple Phase 3 iterations:

- **Strategy 1 (TechPort)**: 1-2 iterations (comprehensive search)
- **Strategy 2 (Vendor docs)**: 2-3 iterations (detailed spec extraction for 10+ vendors)
- **Strategy 3 (SBIR/STTR)**: 1 iteration (targeted search)
- **Strategy 4 (International)**: 1 iteration (agency partner lists)
- **Strategy 5 (Adjacent industries)**: 1 iteration (quick survey)
- **Strategy 6 (Conferences)**: 1 iteration (exhibitor lists)
- **Strategy 7 (Contracts)**: 1 iteration (database searches)
- **Strategy 8 (Trade press)**: 1 iteration (news search)
- **Strategy 9 (Academic)**: 1 iteration (literature review)
- **Strategy 10 (LinkedIn/startups)**: 1 iteration (startup discovery)
- **Strategy 11 (Standards)**: 1 iteration (member lists)

**Estimated total: 10-15 Phase 3 iterations**

Each iteration focuses on executing 1-2 strategies thoroughly, documenting findings immediately in the JSON file and iteration notes.

## Next Actions

1. Create `completion-checklist.md` with checkboxes for tracking
2. Begin Phase 3: Execute Strategy 1 (TechPort) in first iteration
3. Document findings in `phase3-research/iteration-01.md`
4. Add discovered systems to `output/communications-systems.json`
5. Update completion checklist after each iteration
6. Continue iterations until checklist complete
