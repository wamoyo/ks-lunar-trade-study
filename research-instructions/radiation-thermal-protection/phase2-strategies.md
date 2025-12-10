# Phase 2: Search Strategies - Radiation and Thermal Protection

**Date**: 2025-12-08
**Researcher**: Autonomous Research Agent

## Overview

Based on Phase 1 preliminary research, this document outlines comprehensive search strategies to ensure complete coverage of commercially available radiation and thermal protection systems with TRL 5+. The category divides into two major technology areas requiring different approaches:

1. **Radiation Protection**: Materials and systems (typically custom-integrated)
2. **Thermal Control**: Both passive (MLI, coatings) and active systems (heat pipes, radiators)

## Strategy 1: NASA TechPort Comprehensive Search

**Objective**: Identify all NASA-funded projects at TRL 5+ with commercial potential

### Search Terms for TechPort Web Interface
- "radiation shielding"
- "radiation protection"
- "thermal control"
- "thermal protection"
- "multi-layer insulation"
- "MLI"
- "heat pipe"
- "radiator"
- "thermal management"
- "lunar thermal"
- "lunar radiation"
- "space radiation"
- "thermal coating"
- "thermal storage"
- "cryocooler"

### TechPort API Strategy
```bash
# Get all project IDs
curl "https://techport.nasa.gov/api/projects"

# Then systematically query each project and filter for:
# - Keywords: radiation, thermal, shielding, insulation, heat, MLI
# - TRL: currentTrl >= 5
# - Technology Areas: TX14 (Thermal Management), TX06 (Human Health/Performance)
```

### TechPort Filtering Criteria
- **TRL Range**: 5-9 (focus on systems approaching or achieving flight-ready status)
- **Technology Areas**:
  - TX14: Thermal Management Systems
  - TX06: Human Health, Life Support and Habitation Systems
  - TX12: Materials, Structures, Mechanical Systems
- **Status**: Active, completed (if recent), or transitioning to commercial
- **Lead Organization Type**: Note if commercial company vs research institution

### Expected Output
- 20-40 relevant projects
- Vendor names with NASA experience
- TRL ratings from authoritative source
- Project descriptions for technical details

## Strategy 2: Direct Vendor Website Deep Dive

**Objective**: Extract detailed technical specifications from identified vendors

### Tier 1: Known Major Vendors (Immediate Research)

**MLI Vendors**:
1. Beyond Gravity - https://www.beyondgravity.com
2. RAL Space - https://www.ralspace.stfc.ac.uk
3. Aerospace Fabrication & Materials - https://aerospacefab.com
4. Admatis - https://admatis.com
5. Dunmore - https://www.dunmore.com
6. Saint-Gobain ACC - https://www.advanced-ceramic-composites.saint-gobain.com
7. Frako-Term - https://frakoterm.com

**Active Thermal Control**:
1. Advanced Cooling Technologies (ACT) - https://www.1-act.com
2. Paragon Space Development Corporation - https://www.paragonsdc.com
3. ThermAvant Technologies - https://www.thermavant.com
4. ARQUIMEA - https://www.arquimea.com
5. Collins Aerospace - https://www.collinsaerospace.com
6. ILC Dover - https://ilcdover.com

**Radiation Protection**:
1. StemRad - https://stemrad.com
2. NanoSonic (from TechPort) - to be researched

### Data to Extract from Each Vendor
- [ ] Product model numbers/designations
- [ ] Mass (kg) or areal density (g/cm²)
- [ ] Power requirements (for active systems)
- [ ] Temperature operating range
- [ ] Performance metrics (heat dissipation, shielding effectiveness)
- [ ] Space heritage/missions flown
- [ ] TRL claims or flight status
- [ ] Cost indicators (if available)
- [ ] Lead time/availability
- [ ] Technical datasheets (download for verification)
- [ ] Contact information for RFQ

### Search Method per Vendor
1. Main product pages
2. Case studies/mission heritage
3. Technical library/downloads
4. News/press releases for recent contracts
5. "Space" or "Aerospace" specific product lines

## Strategy 3: NASA SBIR/STTR Award Tracking

**Objective**: Identify companies with NASA funding that have commercialized products

### Search Approach
1. **NASA SBIR/STTR Database**: https://sbir.nasa.gov
   - Search topics: "radiation shielding", "thermal control", "thermal protection", "MLI"
   - Focus on Phase II and Phase III companies (closer to commercialization)
   - Note: Phase I = $150K/6mo, Phase II = $850K/24mo (higher TRL)

2. **Specific Topics to Search**:
   - Advanced Radiation Shielding Materials
   - Radiation Shielding Systems
   - Thermal Control Systems
   - Spacecraft Thermal Management
   - Multi-Layer Insulation
   - Heat Pipes and Loop Heat Pipes

3. **Cross-Reference with Company Websites**:
   - Find Phase II/III awardees
   - Visit company websites to see if technology is now commercial product
   - Document TRL progression from award to present

### Expected Vendors to Investigate
- Phase II/III awardees from 2020-2025 (recent enough for commercial transition)
- Companies with multiple awards (indicates sustained development)
- Small businesses that pivoted to commercial market

## Strategy 4: International Space Agency Partners

**Objective**: Identify non-US vendors through ESA, JAXA, CSA partnerships

### ESA Commercial Partners
1. **ESA Industry Portal**: Search for thermal control and radiation protection contractors
2. **ESA Mission Prime Contractors**: Companies building ESA spacecraft (likely use European vendors)
3. **Specific Leads from Phase 1**:
   - European MLI vendors already identified
   - ESA JUICE spacecraft thermal system vendors
   - Galileo satellite thermal contractors

### JAXA Commercial Partners
1. **JAXA Partnership Announcements**: Search for I-Hab ECLSS/thermal contributions
2. **Japanese Aerospace Companies**:
   - Mitsubishi Heavy Industries
   - IHI Aerospace
   - Kawasaki Heavy Industries

### Canadian Space Agency
1. **CSA Contractors**: Robotics companies may also supply thermal systems
2. **MDA (Maxar)**: Gateway PPE includes thermal systems

### Search Terms
- "ESA thermal control contractor"
- "JAXA life support thermal"
- "European space thermal systems"
- "Japanese space radiation protection"

## Strategy 5: Satellite Industry Adjacency

**Objective**: Identify commercial satellite vendors whose products adapt to lunar applications

### Rationale
- Commercial satellite thermal control is TRL 9, mature market
- Many lunar systems use satellite heritage hardware
- Satellite vendors often list detailed specifications

### Target Databases
1. **Satsearch.co**: Comprehensive satellite component database
   - Filter by: Thermal Control, Radiation Shielding
   - Export vendor lists with specifications
   - Check space heritage

2. **SpaceNews Market Intelligence**
3. **Satellite Industry Directories**

### Vendor Categories from Satellite Industry
- MLI blanket manufacturers
- Heat pipe suppliers
- Radiator panel manufacturers
- Thermal coating suppliers
- Louver systems (may not be lunar-applicable but worth checking)

## Strategy 6: Academic Research to Commercial Translation

**Objective**: Identify technologies transitioning from research to products

### Approach
1. **Search Recent Papers** (2020-2025):
   - Google Scholar: "lunar radiation shielding commercial"
   - IEEE Xplore: "thermal control lunar surface"
   - Focus on papers with industry co-authors

2. **University Licensing Offices**:
   - MIT, Stanford, Caltech, Georgia Tech licensing portals
   - Search: "space radiation", "thermal control"

3. **Technology Transfer Portals**:
   - NASA T2 Portal: https://technology.nasa.gov
   - Search tags: shielding, thermal, radiation
   - Note patent/licensing availability

### Cross-Reference
- If research mentions "commercial potential" or "industry partner"
- Check if spin-off company created
- Document current TRL from papers

## Strategy 7: Space Conference and Trade Show Intelligence

**Objective**: Identify vendors actively marketing to space industry

### Target Conferences (Review Exhibitor/Sponsor Lists)
1. **Lunar Surface Innovation Consortium (LSIC)** meetings
2. **Space Symposium** (annual, Colorado Springs)
3. **IAC (International Astronautical Congress)**
4. **Satellite Innovation** conference
5. **AIAA conferences** (thermal/structures focus)
6. **ICES (International Conference on Environmental Systems)**

### Search Method
1. Find exhibitor lists from 2023-2025 events
2. Search conference proceedings for thermal/radiation papers
3. Note vendor booths focused on lunar applications
4. Cross-reference with company websites

### Expected Finds
- Emerging vendors not yet in major databases
- Companies with new products announced at shows
- Integration of multiple technologies by system integrators

## Strategy 8: Defense and Aerospace Adjacent Markets

**Objective**: Identify dual-use technologies from military/defense sectors

### Target Areas
1. **Military Thermal Management**:
   - Advanced cooling for electronics
   - High-temperature materials
   - Radiation-hardened systems

2. **Nuclear Industry**:
   - Radiation shielding materials
   - High-temperature thermal systems
   - Cryogenic thermal management

3. **Hypersonic Vehicles**:
   - Thermal protection systems (TPS)
   - May adapt to lunar reentry/ascent

### Search Terms
- "radiation shielding materials commercial COTS"
- "aerospace thermal management systems"
- "defense thermal control"

### Vendor Identification
- Aerospace Tier 2/3 suppliers often have space-qualified products
- Cross-reference with AS9100 certified manufacturers

## Strategy 9: Composite Materials and Advanced Materials Suppliers

**Objective**: Find radiation shielding material vendors

### Target Material Categories
1. **Carbon Fiber/PEEK Composites**:
   - Space-qualified composite suppliers
   - Document radiation attenuation vs aluminum

2. **Polyethylene-based Materials**:
   - High-density polyethylene (HDPE) suppliers
   - Space-rated polymer manufacturers

3. **Multi-layer Composite Designs**:
   - Graded-Z materials
   - Sandwich structures with hydrogen-rich cores

### Vendor Research
- Materials suppliers with aerospace certification
- Companies with space heritage
- Document areal density (g/cm²) and effectiveness data

## Strategy 10: ISS Heritage Systems

**Objective**: Identify systems proven on ISS that could adapt to lunar use

### Approach
1. **ISS Thermal Control Documentation**:
   - EATCS (External Active Thermal Control System) vendors
   - ISS MLI suppliers (already identified AFM)
   - Radiator suppliers

2. **ISS Upgrade/Replacement Parts**:
   - Recent contracts for ISS thermal systems
   - Companies supplying current ISS operations

3. **Research Questions**:
   - Which ISS thermal systems could work in lunar environment?
   - What modifications needed for lunar surface?
   - Are vendors selling lunar-adapted versions?

## Phase 3 Iteration Plan

### Iteration 1: TechPort and Tier 1 Vendors
- Execute Strategy 1 (TechPort comprehensive)
- Execute Strategy 2 (known major vendors)
- Build initial JSON with 20-30 items

### Iteration 2: SBIR/STTR and International
- Execute Strategy 3 (NASA SBIR/STTR)
- Execute Strategy 4 (ESA/JAXA/CSA partners)
- Add 10-20 items to JSON

### Iteration 3: Adjacent Markets
- Execute Strategy 5 (Satellite industry)
- Execute Strategy 6 (Academic research)
- Execute Strategy 8 (Defense/aerospace adjacent)
- Add 10-15 items to JSON

### Iteration 4: Gap Filling
- Execute Strategy 7 (Conference intelligence)
- Execute Strategy 9 (Composite materials)
- Execute Strategy 10 (ISS heritage)
- Add remaining items and fill gaps

### Iteration 5: Verification Prep
- Review JSON for completeness against checklist
- Identify missing data fields
- Prepare for Phase 4 systematic verification

## Data Collection Standards

### For Each Item Found

**Minimum Required Data** (mark null if not found):
- Vendor name
- Product model/designation
- Category (MLI, heat pipe, radiator, shielding material, etc.)
- TRL (source required)
- Source URL
- verified: false (always start false)

**Desired Data** (collect if available):
- Mass (kg) or areal density (g/cm²)
- Power (kW) for active systems
- Temperature range (K or °C)
- Performance metrics (W heat dissipation, dose reduction %, etc.)
- Space heritage missions
- Estimated cost (USD)
- Lead time/availability
- Notes on lunar applicability

### Citation Standards
- Primary source: Vendor official website/datasheet
- Secondary source: NASA mission documentation, technical papers
- Tertiary source: Industry publications, press releases
- Note date of information (for verification phase)

## Expected Outcomes

By end of Phase 2, we have:
- [x] 10 distinct search strategies documented
- [x] 50+ vendor names identified for research
- [x] Clear data collection standards
- [x] Iteration plan for Phase 3
- [ ] Completion checklist created (next step)

## Risk Mitigation

### Known Challenges
1. **TRL ratings not public**: Use proxy indicators (flight heritage, NASA contracts)
2. **Cost data unavailable**: Mark as null, note "requires RFQ"
3. **Custom vs COTS**: Note if product requires customization
4. **Lunar-specific data sparse**: Note space heritage and lunar applicability assessment

### Quality Assurance
- Cross-reference findings across multiple strategies
- Verify vendor claims with independent sources
- Document assumptions and gaps clearly
- Flag items needing clarification in verification phase

## Next Step

Create `completion-checklist.md` with specific criteria for when research is considered complete.
