# Phase 1: Preliminary Research - Life Support and ECLSS

**Date:** 2025-12-08
**Researcher:** Claude (Sonnet 4.5)

## Executive Summary

Life Support and Environmental Control and Life Support Systems (ECLSS) for lunar surface operations represent a mature technology domain with multiple operational systems (TRL 9) currently functioning on the ISS, and several advanced systems (TRL 5-8) in development for lunar and deep space missions. The market is dominated by established aerospace contractors with extensive ISS heritage, though emerging technologies show promise for reduced mass, power, and consumables requirements critical for lunar deployment.

## Industry Landscape Overview

### Market Maturity
- **Operational Systems (TRL 9):** ISS ECLSS represents the most advanced operational life support, achieving 98% water recovery and supporting continuous human habitation since 2000
- **Development Pipeline (TRL 5-8):** Multiple next-generation systems optimized for lunar/deep space missions in active development
- **Commercial Activity:** Growing commercial space station sector (Axiom, Orbital Reef) driving new ECLSS development and potential lunar adaptation

### Key Market Segments

1. **Atmosphere Revitalization**
   - CO2 removal (CDRA, Vozdukh, CDRILS)
   - Oxygen generation (electrolysis-based OGA)
   - Trace contaminant control
   - Humidity/temperature control

2. **Water Recovery Systems**
   - Urine processing
   - Water purification
   - Waste water recovery
   - Achieving 93-98% recovery rates on ISS

3. **Integrated ECLSS**
   - Complete habitat systems (Gateway HALO)
   - Commercial station solutions (Axiom, Orbital Reef)
   - Modular/scalable architectures

## Major Vendors and Technology Providers

### Tier 1: Operational/High-TRL Systems

**Collins Aerospace (formerly Hamilton Sundstrand)**
- Heritage: Primary ISS ECLSS contractor
- Products: Water Processor Assembly (WPA), Oxygen Generation Assembly (OGA), Advanced OGA (AOGA)
- Technology: Water electrolysis for O2 generation, zeolite-based processes
- Status: TRL 9 (ISS operational), developing next-gen systems
- Sources: [Collins ECLSS Overview](https://www.collinsaerospace.com/what-we-do/space/life-support), [AOGA Development](https://ntrs.nasa.gov/citations/20210015054)

**Paragon Space Development Corporation**
- Heritage: Multiple NASA contracts including Gateway HALO
- Products: Complete ECLSS for Gateway HALO module
- Contract Value: $100M+ for HALO ECLSS
- Capabilities: Temperature control, CO2/odor removal, O2/humidity control
- Mission Duration: Systems designed for 15+ year operations
- Status: Gateway HALO system in active development for lunar orbit
- Sources: [Paragon HALO Partnership](https://www.paragonsdc.com/paragon-announced-as-northrop-grumman-gateway-halo-partner/), [HALO Contract](https://www.prnewswire.com/news-releases/paragon-and-northrop-grumman-finalize-halo-life-support-contract-valued-in-excess-of-100-million-301462241.html)

**Honeywell Aerospace**
- Heritage: ISS Columbus module ECLSS, joint commercial ECLSS development
- Products: Temperature/Humidity Control (THC), CDRILS (next-gen CO2 removal), Methane Pyrolysis Reactor
- Technology: Ionic liquid CO2 sorbent, methane pyrolysis (95% O2 recovery from CO2)
- Status: CDRILS targeting ISS flight demo 2028, TRL advancing
- Sources: [Honeywell ECLSS](https://aerospace.honeywell.com/us/en/about-us/blogs/honeywell-environmental-control-help-astronauts), [CDRILS Scale-Up](https://ntrs.nasa.gov/citations/20190030422)

**Moog Inc.**
- Heritage: NASA Gateway and Orion contracts
- Products: High/low pressure valves, pressure regulators, quick disconnects, tank valves
- Application: Fluid control components for ECLSS (gas and liquid thermal management)
- Status: Components in Gateway development
- Sources: [Moog ECLSS Components](https://www.moog.com/products/environmental-control-and-life-support-systems.html)

### Tier 2: Advanced/Emerging Technologies

**Precision Combustion, Inc. (PCI)**
- Products: Microlith-based Sabatier reactor for CO2 reduction
- Technology: Compact/lightweight reactor, high CO2 conversion, 100% CH4 selectivity
- Performance: Space velocities 30,000-60,000 hr⁻¹
- Status: TRL 4-6 (advancing through SBIR program)
- Applications: ISRU for lunar/Mars missions, cabin atmosphere revitalization
- Sources: [Compact Sabatier Reactor](https://ntrs.nasa.gov/citations/20120016419), [SBIR Award](https://www.sbir.gov/sbirsearch/detail/369661)

**Mitsubishi Heavy Industries (MHI)**
- Products: Gateway ECLSS components (Japanese contribution)
- Role: Providing ECLSS for Lunar I-Hab module
- Includes: Environmental control, thermal control, cameras
- Sources: [Gateway ECLSS](https://www.mhi.com/products/space/gateway_eclss.html)

### Commercial Space Station Developers

**Axiom Space**
- Product: Axiom Station ECLSS (Hab-2 module)
- Capacity: Complete ECLSS for 8 crew members
- Status: In development, leveraging ISS heritage
- Application: Potential lunar adaptation
- Sources: [Axiom Station](https://en.wikipedia.org/wiki/Axiom_Station)

**Sierra Space / Blue Origin (Orbital Reef)**
- Product: ECLSS for Core and LIFE modules
- Capacity: 10 crew members per module
- Technology: Water recycling from urine, contaminant identification
- Development: Testing via Dream Chaser flights
- Status: Demonstrations completed (water recovery, contaminant detection)
- Sources: [Orbital Reef](https://www.sierraspace.com/commercial-space-stations/orbital-reef-space-station/), [ECLSS Development](https://aerospaceamerica.aiaa.org/features/staying-alive/)

## Technical Specifications - Current ISS Systems (Baseline Reference)

### Oxygen Generation System (OGA)
- **Capacity:** 5-20 lbs O2/day (selectable), nominal 12 lbs/day (5.4 kg/day)
- **Technology:** Water electrolysis (cell stack)
- **Operation:** Continuous or cyclic modes
- **Vendor:** Collins Aerospace (Hamilton Sundstrand heritage)
- **Status:** TRL 9 (ISS operational since 2006)
- **Sources:** [ISS ECLSS](https://en.wikipedia.org/wiki/ISS_ECLSS), [NASA ECLSS Overview](https://www.nasa.gov/reference/environmental-control-and-life-support-systems-eclss/)

### Water Recovery System (WRS)
- **Recovery Rate:** 93% (demonstrated 98% milestone in 2023)
- **Capacity:** Designed for 9 kg/day urine load (6-person crew)
- **Current Recovery:** 70% from urine (reduced from 85% design due to calcium sulfate precipitation)
- **Water Storage:** Minimum 818 L (1803 lbs) potable water reserve on ISS
- **Consumables:** Filters and chemicals required (10x less mass than water delivered)
- **Power:** Estimates 70-160 W·hr/kg for distillation systems
- **Vendor:** Collins Aerospace (WPA), NASA MSFC (UPA)
- **Status:** TRL 9 (ISS operational)
- **Sources:** [Water Recovery Milestone](https://www.nasa.gov/missions/station/iss-research/nasa-achieves-water-recovery-milestone-on-international-space-station/), [ISS Water Management](https://ntrs.nasa.gov/api/citations/20230006217/downloads/ICES%202023-097%20Status%20of%20ISS%20Water%20Management%20and%20Recovery.pdf)

### Carbon Dioxide Removal Assembly (CDRA)
- **Vendors:** Honeywell International, Collins Aerospace (Hamilton Sundstrand)
- **Technology:** Zeolite adsorbent beds (regenerable)
- **Launched:** February 2001 (UF-2), located in US Destiny Lab
- **Status:** TRL 9 (ISS operational)
- **Companion System:** Vozdukh (Russian segment)
- **Sources:** [CDRA Concepts](https://ntrs.nasa.gov/citations/20050210002)

### Vozdukh System (Russian)
- **Configuration:** 2 desiccant beds, 3 adsorbent beds
- **Flow Rate:** Maximum 27 m³/hour
- **Capacity:** ~5 crew members
- **Technology:** CO2 adsorption/desorption to space vacuum, zeolites
- **Performance:** Maintains CO2 <6 mmHg at 100% capacity
- **Status:** TRL 9 (ISS operational, primary Russian segment CO2 removal)
- **Sources:** [Vozdukh Overview](https://ntrs.nasa.gov/api/citations/20090029352/downloads/20090029352.pdf), [Wikipedia](https://en.wikipedia.org/wiki/Vozdukh)

### Carbon Dioxide Reduction Assembly (Sabatier Reactor)
- **Vendor:** NASA MSFC, Precision Combustion Inc. (advanced versions)
- **Technology:** Sabatier reaction (CO2 + H2 → CH4 + H2O)
- **Operating Conditions:** 250°C, 1 atm
- **H2/CO2 Ratio:** ~3.5:1 (CO2-rich for space applications)
- **Performance:** High CO2 conversion, near 100% CH4 selectivity
- **Space Velocity:** 30,000-60,000 hr⁻¹ (advanced PCI reactor)
- **Oxygen Recovery:** 378 lbs/crew/year O2 resupply requirement (methane venting loss)
- **Status:** TRL 9 (ISS operational since April 2010)
- **Sources:** [Compact Sabatier Reactor](https://ntrs.nasa.gov/api/citations/20120016419/downloads/20120016419.pdf)

## Emerging Technologies (TRL 5-8)

### Carbon Dioxide Removal by Ionic Liquid Sorbent (CDRILS)
- **Vendor:** Honeywell Aerospace
- **Technology:** Ionic liquid sorbent, hollow fiber membrane contactors
- **Advantages:** Reduced volume, mass, power vs. ISS CDRA
- **CO2 Product:** Clean carbon (non-sooty), potential lunar/Mars building material
- **Contamination Tolerance:** No decrease in removal rate from trace contaminants
- **Applications:** Cabin air (baseline), EVA suit PLSS (CDRILS-M for mxEMU)
- **Status:** TRL advancing, ISS flight demo targeted 2028
- **Sources:** [CDRILS Scale-Up](https://ntrs.nasa.gov/citations/20190030422), [CDRILS-M for mxEMU](https://ntrs.nasa.gov/citations/20250001226), [Honeywell Mars Mission](https://www.honeywell.com/us/en/news/2023/08/mission-to-mars-how-innovation-will-take-us-there)

### Honeywell Methane Pyrolysis Reactor
- **Technology:** Extreme high temperature pyrolysis of methane from Sabatier reactor
- **Performance:** 95% oxygen recovery from CO2 (vs. 75% NASA target, 50% current ISS)
- **Benefit:** Significantly reduces oxygen resupply requirements
- **Status:** In development for future exploration missions
- **Sources:** [Honeywell ECLSS Blog](https://aerospace.honeywell.com/us/en/about-us/blogs/honeywell-environmental-control-help-astronauts)

### Advanced Oxygen Generation Assembly (AOGA)
- **Vendor:** Collins Aerospace
- **Basis:** ISS OGA with improvements from operational lessons learned
- **Application:** Future exploration missions (Gateway, Mars Transit)
- **Status:** In development
- **Sources:** [AOGA Status](https://ntrs.nasa.gov/citations/20210015054)

## Key Technology Trends and Challenges

### Lunar-Specific Considerations

**Power Constraints**
- Lunar night (14 Earth days) requires energy storage or nuclear power
- Current ISS systems power consumption varies widely (70-160 W·hr/kg for water recovery)
- Need for detailed power specifications critical for lunar system sizing

**Mass Constraints**
- Launch costs drive need for lightweight systems
- Water recovery critical (reduces resupply mass by 10x+)
- Emerging technologies (CDRILS, compact Sabatier) focus on mass reduction

**Closed-Loop Requirements**
- Lunar missions require higher closure than ISS (limited resupply)
- 98% water recovery demonstrated (ISS milestone 2023)
- Advanced O2 recovery (methane pyrolysis) reduces resupply 90%+

**Reliability and Maintenance**
- Gateway HALO designed for 15+ year operations
- ISS experience shows consumables (filters, chemicals) are key maintenance items
- Lunar base may require on-site spare production or ISRU integration

### Technology Readiness Distribution

**TRL 9 (Operational):**
- ISS ECLSS suite (OGA, WPA, UPA, CDRA, Vozdukh, Sabatier CRA)
- Proven for 20+ years continuous operation
- Direct lunar applicability with adaptation for environment

**TRL 5-8 (Development/Testing):**
- CDRILS (targeting ISS demo 2028)
- Methane pyrolysis (advanced O2 recovery)
- AOGA (improved OGA)
- Gateway HALO ECLSS (lunar orbit application)
- Commercial station ECLSS (Axiom, Orbital Reef)

**TRL <5 (Early Development - EXCLUDED per methodology):**
- Bioregenerative life support (MELiSSA, Lunar Palace)
- Fully closed-loop systems
- Most ISRU-integrated concepts

## Information Sources and Search Patterns

### Primary Sources Used
1. **NASA Technical Reports (NTRS):** Rich source of specifications, TRL assessments, technical papers
2. **Vendor Websites:** Collins, Paragon, Honeywell, Moog - varying detail levels
3. **Conference Proceedings:** ICES (International Conference on Environmental Systems), SAE papers
4. **Wikipedia/Trade Publications:** Good for overview, requires verification for specifications
5. **NASA Official Sites:** Gateway, ISS programs

### Information Availability Assessment

**Readily Available:**
- System descriptions and capabilities
- Heritage and operational history
- General specifications (capacity, crew size)
- Vendor identification
- TRL levels (for NASA-funded projects)

**Difficult to Find:**
- Detailed mass specifications for individual components
- Precise power consumption figures
- Commercial pricing (rarely public)
- Turnaround time for procurement
- Maintenance intervals and consumables requirements
- Export control / ITAR restrictions

**Not Yet Searched:**
- NASA TechPort database (comprehensive TRL-rated project database)
- SBIR/STTR award database (detailed company and TRL info)
- International vendors (ESA partners, Japanese companies beyond MHI)
- Recent conference proceedings (ICES 2024-2025)
- Patent databases (for emerging technologies)

## Preliminary Vendor List (Not Exhaustive)

### Confirmed ECLSS Vendors (TRL 5+)
1. Collins Aerospace (Hamilton Sundstrand) - OGA, WPA, AOGA
2. Paragon Space Development Corporation - Gateway HALO complete ECLSS
3. Honeywell Aerospace - THC, CDRILS, Methane Pyrolysis
4. Moog Inc. - Fluid control components
5. Precision Combustion Inc. - Sabatier reactors
6. Mitsubishi Heavy Industries - Gateway I-Hab ECLSS
7. Axiom Space - Axiom Station ECLSS
8. Sierra Space / Blue Origin - Orbital Reef ECLSS

### Component/Subsystem Vendors (Potential)
- Air Liquide (cryogenic systems, regenerative fuel cells - needs verification for ECLSS role)
- ESA contractors for ACLS system
- Russian space industry (Vozdukh system)
- NASA JSC, MSFC (technology transfer opportunities)

## Critical Data Gaps for Phase 2

1. **Mass Specifications:** Need systematic search for component and system masses
2. **Power Requirements:** Detailed power profiles for lunar day/night operations
3. **Cost Data:** Commercial pricing rarely published, may need to note as "unavailable"
4. **TechPort Search:** Comprehensive database not yet searched - critical for TRL 5+ identification
5. **SBIR/STTR Awards:** Identify companies with NASA funding and commercial products
6. **International Vendors:** European, Japanese, other international suppliers
7. **Consumables:** Detailed consumables requirements and resupply schedules
8. **Environmental Adaptation:** Lunar gravity (1/6 g), dust, thermal environment impacts on systems

## Initial Observations and Quirks

### Industry State
- **ISS Heritage Dominance:** Nearly all advanced ECLSS vendors have ISS heritage - this is both strength (proven) and limitation (ISS-optimized, not lunar-optimized)
- **Commercial Station Boom:** Axiom, Orbital Reef, others driving new ECLSS development that may be more modular/adaptable to lunar
- **Gateway as Lunar Testbed:** HALO ECLSS represents first purpose-designed lunar-vicinity system (though orbit, not surface)

### Technology Maturation
- **Water Recovery:** Most mature, 98% recovery achieved
- **Oxygen Generation:** Mature electrolysis, advanced recovery (pyrolysis) emerging
- **CO2 Removal:** Mature (zeolites), next-gen (ionic liquids) advancing to flight demo
- **Closed-Loop:** Still require some consumables (filters, chemicals), fully closed not yet achieved

### Reliability Issues from ISS
- **Calcium Sulfate Precipitation:** Reduced UPA recovery from 85% to 70% design
- **CDRA:** "Most advanced CO2 removal system flown" but still required ongoing maintenance
- **Consumables:** Despite "regenerable" systems, filters and chemicals still needed

### Lunar Adaptation Challenges
- **No Space Vacuum:** Vozdukh uses vacuum desorption - not available on lunar surface
- **Power Source:** ISS uses solar continuously; lunar needs storage or nuclear
- **Gravity:** 1/6 g affects fluid management, may require system redesigns
- **Dust:** Lunar regolith infiltration risk to ECLSS components
- **Thermal:** Extreme temperature swings (lunar day/night) affect system performance

## Recommended Phase 2 Strategies Preview

Based on preliminary research, Phase 2 should include:

1. **TechPort API/Web Search:** Systematic search for "ECLSS", "life support", "oxygen generation", "water recovery", "CO2 removal" with TRL 5+ filter
2. **ISS Heritage Mapping:** Identify all ISS ECLSS contractors and trace their commercial product lines
3. **Gateway Program Deep Dive:** HALO and I-Hab ECLSS specifications and vendors
4. **Commercial Station Programs:** Axiom, Orbital Reef, VAST Haven-1 ECLSS vendors and specs
5. **SBIR/STTR Database:** Search for life support awards 2015-2025, identify commercial products
6. **Component-Level Search:** Since complete systems are large/complex, also search for subsystem vendors
7. **International Vendors:** ESA, JAXA, CSA partner companies
8. **Adjacent Industries:** Submarine life support (Collins has submarine systems), diving, hazmat - space-qualified versions

## Sources Summary

This preliminary research drew from the following source categories:
- NASA official sites and technical reports (NTRS)
- Vendor official websites (Collins, Paragon, Honeywell, Moog, etc.)
- Industry publications and news releases
- Academic/conference papers (ICES, SAE)
- Wikipedia for overviews (to be verified against primary sources)
- Trade publications (SpaceNews, Aerospace America, etc.)

All sources documented in inline citations above. Phase 3 will systematically verify and expand specifications with direct source URLs.

---

**Phase 1 Status:** COMPLETE
**Next Step:** Phase 2 - Develop comprehensive search strategies and completion checklist
