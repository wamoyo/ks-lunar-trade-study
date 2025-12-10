# Phase 1: Preliminary Research - EVA Suits and Human Tooling

**Date:** 2025-12-08
**Category:** EVA Suits and Human Tooling
**Researcher:** Claude Sonnet 4.5

## Executive Summary

The lunar EVA suit landscape is dominated by NASA's commercial partnership approach, with limited truly commercial "off-the-shelf" options currently available. The market is characterized by:

- **2 primary commercial vendors** developing lunar suits under NASA's xEVAS contract (Axiom Space, Collins Aerospace)
- **TRL 5-9 systems** in active development or operational for ISS
- **Government-funded development** transitioning to commercial service model
- **Limited pricing transparency** - suits are custom and contract-based
- **Integration challenges** - suits require PLSS, tools, and support systems from multiple vendors

## Industry Landscape

### Market Structure

The EVA suit market operates under NASA's **Exploration Extravehicular Activity Services (xEVAS)** contract framework, awarded in June 2022 worth up to $3.5 billion over 12 years. This represents a shift from government-owned to commercially-provided suits-as-a-service.

**Key insight:** Unlike launch vehicles where multiple commercial providers compete openly, EVA suits remain tightly coupled to government contracts. True commercial availability is minimal.

### Major Vendors Identified

#### 1. **Axiom Space** (Primary Lunar Vendor)
- **Contract:** $228M for Artemis III lunar suits (2022)
- **Product:** AxEMU (Axiom Extravehicular Mobility Unit)
- **Status:** Active development, testing underway
- **TRL:** Estimated 6-7 (system testing phase)
- **Target:** Artemis III mission (2026+)
- **Partners:** Prada (materials), Oakley (helmet/visor)
- **Sources:**
  - [Axiom Suit Overview](https://www.axiomspace.com/axiom-suit)
  - [NASA Spacesuit Debut](https://www.nasa.gov/humans-in-space/spacesuit-for-nasas-artemis-iii-moon-surface-mission-debuts/)
  - [Axiom-Prada Reveal](https://www.collectspace.com/news/news-101624a-axemu-lunar-spacesuit-axiom-space-prada-reveal.html)

#### 2. **Collins Aerospace** (ISS + Lunar Development)
- **Status:** Withdrew from xEVAS lunar development (June 2024)
- **Current Role:** ISS EMU sustainment only
- **Historical:** Primary NASA spacesuit provider since Apollo
- **TRL:** TRL 9 for current ISS EMU; withdrawn from next-gen development
- **Commercial Availability:** Not available commercially
- **Sources:**
  - [Collins Spacesuits](https://www.collinsaerospace.com/what-we-do/industries/space/space-suits)
  - [Collins Exits xEVAS](https://spacenews.com/collins-aerospace-pulls-back-from-nasa-spacesuit-contract/)

#### 3. **ILC Dover** (Suit Softgoods Specialist)
- **Role:** Subcontractor for pressure garment assemblies
- **Heritage:** Apollo suit manufacturer
- **Products:** Sol™ (IVA), Astro™ (EVA/Planetary)
- **Status:** Active development of commercial LEO suits
- **TRL:** Estimated 5-7 depending on component
- **Commercial:** Developing commercial suits for LEO market
- **Sources:**
  - [ILC Dover xEVAS Selection](https://spacenews.com/ilc-dover-among-industry-team-selected-to-provide-the-next-generation-of-spacesuits-for-nasa/)
  - [ILC Dover LEO Development](https://www.ilcdover.com/2022/12/08/ilc-dover-further-advancing-next-generation-spacesuit-development-for-low-earth-orbit-economy/)

#### 4. **SpaceX** (IVA/LEO EVA)
- **Product:** SpaceX EVA Suit
- **Status:** Flown on Polaris Dawn (2024)
- **TRL:** TRL 8-9 for LEO operations
- **Limitation:** Umbilical-based, NOT suitable for lunar surface (requires spacecraft connection)
- **Pressure:** 5.1 psi
- **Features:** Heads-up display, 4G comms, HD camera
- **Commercial Availability:** SpaceX missions only
- **Sources:**
  - [SpaceX EVA Suit Overview](https://newspaceeconomy.ca/2025/11/27/the-spacex-eva-suit/)
  - [Polaris Program EVA Suit](https://polarisprogram.com/eva-suit-unveil/)

#### 5. **Final Frontier Design** (SBIR/Commercial Developer)
- **Status:** Acquired by Paragon Space Development (January 2022)
- **Product:** 3G Spacesuit
- **Type:** IVA suit for commercial spaceflight
- **Mass:** ~6.8 kg (15 lbs) - half of NASA suits
- **Cost Target:** ~$50,000 (vs $250,000 for NASA IVA)
- **TRL:** Estimated 5-6 (no flight heritage yet)
- **NASA Work:** Awarded xEMU component contracts (boots, hip/waist joints)
- **Commercial Availability:** In development
- **Sources:**
  - [Final Frontier Design Wikipedia](https://en.wikipedia.org/wiki/Final_Frontier_Design)
  - [FFD xEMU Contracts](http://www.parabolicarc.com/2020/06/17/final-frontier-design-awarded-multiple-nasa-lunar-xemu-space-suit-development-contracts/)

#### 6. **David Clark Company** (IVA Suits)
- **Products:**
  - S1100 Salus (Boeing Starliner)
  - CHAPS (Contingency Hypobaric Astronaut Protective Suit)
- **Type:** Launch/entry/abort suits, NOT lunar surface EVA
- **TRL:** TRL 9 (flown on Starliner, June 2024)
- **Specialty:** Commercial crew transport suits
- **Limitation:** Pressure suits, not full EVA capability
- **Commercial Availability:** Vehicle-specific contracts
- **Sources:**
  - [David Clark CHAPS](https://www.davidclarkcompany.com/aerospace/chaps)
  - [David Clark NASA History](https://www.davidclarkcompany.com/aerospace/nasa)

#### 7. **Oceaneering International** (Tools & Subsystems)
- **Role:** EVA tools, crew aids provider (40+ years with NASA)
- **Specialty:** Tools, not complete suits
- **Historical:** Awarded $745M Constellation suit contract (2008, later cancelled)
- **Current:** Subcontractor to Collins Aerospace for xEVAS tools
- **TRL:** TRL 9 for operational ISS tools
- **Commercial Availability:** Government contracts only
- **Sources:**
  - [Oceaneering HSF Systems](https://www.oceaneering.com/space-systems/human-space-flight-systems/)
  - [Oceaneering xEVAS Team](https://www.businesswire.com/news/home/20220609005318/en/Oceaneering-to-Team-with-Collins-Aerospace-ILC-Dover-on-NASAs-Next-Generation-Spacesuit-Program)

### Adjacent Industry Vendors

**Atmospheric Diving Suit Manufacturers:**
- Potential crossover technology identified but no confirmed lunar-rated products
- Oceaneering's diving suit heritage informed their NASA suit work
- Pressure-resistant anthropomorphic housing shares design principles with spacesuits

**Note:** Further research needed to identify specific atmospheric diving suit vendors pursuing space certification.

## Technical Specifications (Preliminary)

### AxEMU (Axiom Space) - Most Advanced Lunar System

| Specification | Value | Source |
|--------------|-------|--------|
| **Mass** | ~40 kg (estimated, about half of Apollo's 80kg) | [Axiom AxEMU Testing](https://www.axiomspace.com/news/axemu-spacesuit-testing) |
| **EVA Duration** | Up to 8 hours | [Axiom Space ASME Article](https://www.asme.org/topics-resources/content/axiom-space-designs-the-most-advanced-spacesuit-for-artemis-iii) |
| **Temperature Range** | Lunar south pole extremes, 2+ hours in permanently shadowed regions | [Space.com AxEMU Article](https://www.space.com/space-exploration/artemis/a-21st-century-moon-suit-axiom-spaces-lunar-spacesuit-sports-4g-comms-prada-looks-and-oakley-visors-for-artemis-astronauts) |
| **Sizing** | 1st-99th percentile (male/female) | [Axiom Space Reveal](https://www.axiomspace.com/release/axemu) |
| **Pressure** | TBD (lunar suits typically 4.3 psi / 29.6 kPa) | [Marspedia EVA Suit](https://marspedia.org/EVA_Suit) |
| **Entry Type** | Rear-entry (faster donning) | [Axiom-Prada Unveil](https://www.axiomspace.com/release/axiom-space-prada-unveil-spacesuit-design-for-moon-return) |
| **Mobility** | Enhanced kneeling/surface work vs Apollo | [Space.com AxEMU Article](https://www.space.com/space-exploration/artemis/a-21st-century-moon-suit-axiom-spaces-lunar-spacesuit-sports-4g-comms-prada-looks-and-oakley-visors-for-artemis-astronauts) |
| **Comms** | 4G LTE communications | [Space.com AxEMU Article](https://www.space.com/space-exploration/artemis/a-21st-century-moon-suit-axiom-spaces-lunar-spacesuit-sports-4g-comms-prada-looks-and-oakley-visors-for-artemis-astronauts) |
| **Helmet** | HD camera, LED lights, advanced coatings | [Axiom Space Reveal](https://www.axiomspace.com/release/axemu) |
| **TRL** | Estimated 6-7 | Inferred from testing phase |
| **Cost** | Not publicly disclosed | N/A |
| **Availability** | Artemis III (2026+) | [NASA Artemis III Spacesuit](https://www.nasa.gov/humans-in-space/spacesuit-for-nasas-artemis-iii-moon-surface-mission-debuts/) |

### Apollo A7L (Historical Baseline)

| Specification | Value | Source |
|--------------|-------|--------|
| **Total Mass** | 81.6 kg (180 lbs) including PLSS | [Apollo Spacesuit Wikipedia](https://en.wikipedia.org/wiki/Apollo/Skylab_spacesuit) |
| **Suit Mass** | 48 kg (105 lbs) | [Astronautix A7L](http://www.astronautix.com/a/a7l.html) |
| **Lunar Weight** | 13.6 kg (30 lbs) equivalent | [Apollo Spacesuit Wikipedia](https://en.wikipedia.org/wiki/Apollo/Skylab_spacesuit) |
| **Pressure** | 3.75 psi | [Apollo Spacesuit Wikipedia](https://en.wikipedia.org/wiki/Apollo/Skylab_spacesuit) |
| **TRL** | TRL 9 (flight-proven, retired) | Historical |

### ISS EMU (Current Operational)

| Specification | Value | Source |
|--------------|-------|--------|
| **Mass** | ~180 kg (400+ lbs) | [AxEMU Specifications](https://www.axiomspace.com/news/axemu-spacesuit-testing) |
| **EVA Duration** | 7-8 hours typical | [EMU Wikipedia](https://en.wikipedia.org/wiki/Extravehicular_Mobility_Unit) |
| **Pressure** | 4.3 psi (29.6 kPa) | [EMU Wikipedia](https://en.wikipedia.org/wiki/Extravehicular_Mobility_Unit) |
| **TRL** | TRL 9 (operational since 1981) | Historical |
| **Vendor** | Collins Aerospace | [Collins Spacesuits](https://www.collinsaerospace.com/what-we-do/industries/space/space-suits) |
| **Commercial Availability** | No - NASA only | [Collins Spacesuits](https://www.collinsaerospace.com/what-we-do/industries/space/space-suits) |

### SpaceX EVA Suit

| Specification | Value | Source |
|--------------|-------|--------|
| **Pressure** | 5.1 psi | [New Space Economy SpaceX EVA](https://newspaceeconomy.ca/2025/11/27/the-spacex-eva-suit/) |
| **Architecture** | Umbilical (spacecraft-dependent) | [New Space Economy SpaceX EVA](https://newspaceeconomy.ca/2025/11/27/the-spacex-eva-suit/) |
| **TRL** | TRL 9 (flown Polaris Dawn 2024) | [Polaris Program](https://polarisprogram.com/dawn/) |
| **Lunar Suitability** | **NO** - requires umbilical connection | [New Space Economy SpaceX EVA](https://newspaceeconomy.ca/2025/11/27/the-spacex-eva-suit/) |
| **Use Case** | LEO EVA only | [Polaris Program](https://polarisprogram.com/dawn/) |

## Portable Life Support Systems (PLSS)

### Key Finding
PLSS is typically **separate contract/vendor** from pressure garment:
- **Collins Aerospace** provides PLSS for most NASA systems
- **ILC Dover** provides pressure garments
- **Oceaneering** provides tools

### PLSS Technology Areas (from TechPort search)
- CO₂ removal systems (NDIR sensors at high TRL)
- Humidity control (dual-function components)
- Oxygen supply
- Thermal control (evaporative cooling)
- Power/battery systems
- Communications

**TechPort Project:** [NASA TechPort 13611](https://techport.nasa.gov/view/13611) - Dual function PLSS component for CO₂/humidity removal

## NASA TechPort Initial Findings

### Projects Identified (TRL 5+ focus)

1. **Advanced Space Suit Project (10517)**
   - https://techport.nasa.gov/projects/10517
   - Note: Full details require JavaScript access

2. **EVA Suitport (10728)**
   - https://techport.nasa.gov/projects/10728
   - Entry/egress system technology

3. **Environmental Protection Garment (113277)**
   - https://techport.nasa.gov/view/113277
   - Cut/puncture resistance, dust mitigation for lunar EMU

4. **Spacesuit Digital Thread (117027)**
   - https://techport.nasa.gov/view/117027
   - Digital design tools for Mars exploration suits

5. **Spacesuit Evaporator-Absorber-Radiator (12036)**
   - https://techport.nasa.gov/view/12036
   - SEAR thermal control for EVA

6. **Electrochromic Laminates for Visors (94571)**
   - https://techport.nasa.gov/projects/94571
   - Advanced helmet technology

7. **PLSS Component Development (13611)**
   - https://techport.nasa.gov/view/13611
   - CO₂ and humidity removal technology

**Challenge:** TechPort requires JavaScript, limiting automated API access. Manual project review needed in Phase 3.

## Standards and Terminology

### Terminology Variations Found
- EVA suit / Spacesuit / Pressure suit
- Extravehicular Mobility Unit (EMU)
- xEMU (NASA's Exploration EMU)
- AxEMU (Axiom's version)
- Surface suit / Moonsuit
- PLSS (Portable Life Support System)
- PGA (Pressure Garment Assembly)
- IVA suit (Intravehicular Activity - launch/entry only)

### Key Technical Standards
- **TRL Scale:** NASA 1-9 scale, focusing on TRL 5+ per methodology
- **Pressure:** Typically 4.3 psi (29.6 kPa) for lunar EVA
- **EVA Duration:** 6-9 hours target for modern systems
- **Sizing:** Moving toward 1st-99th percentile accommodation

## Reliability and Quirks

### Known Issues and Challenges

**1. Glove Durability**
- Historically a failure point (Apollo fingernail damage, abrasion)
- Major focus area for AxEMU development
- ILC Dover custom gloves with "several advancements"

**2. Dust Mitigation**
- Lunar regolith is abrasive and pervasive
- Challenged Apollo suits, zippers, bearings
- Environmental Protection Garment project (TechPort 113277) addressing this

**3. Mobility vs. Pressure Trade-off**
- Higher pressure = better life support margin, worse mobility
- Lower pressure = better mobility, higher pre-breathe time needed
- Modern suits targeting 4.3 psi as compromise

**4. Thermal Extremes**
- Lunar south pole: -250°F to +250°F swings
- Permanently shadowed regions require extended cold tolerance
- AxEMU claims 2+ hours in coldest conditions

**5. Custom Fitting**
- Suits historically custom or limited sizes
- AxEMU first to claim 1st-99th percentile accommodation
- Impacts turnaround time and cost

**6. PLSS Battery Life**
- Current systems: 6-8 hour missions
- Battery recharge/replacement logistics critical
- Power requirements not publicly detailed

**7. Commercial Availability Gap**
- No true "commercial off-the-shelf" lunar EVA suits exist
- All current development tied to NASA contracts
- SpaceX suit unsuitable for surface operations
- IVA suits (David Clark, Final Frontier Design) not EVA-capable

## State of the Industry

### Maturity Assessment

**Flight-Proven (TRL 9):**
- ISS EMU (Collins Aerospace) - LEO only, not commercially available
- Apollo A7L (retired) - lunar heritage but obsolete
- SpaceX EVA Suit - LEO only, umbilical-dependent
- David Clark S1100 - IVA only, not surface EVA

**Advanced Development (TRL 6-8):**
- Axiom AxEMU - primary lunar candidate, testing phase
- ILC Dover Astro™ - commercial LEO development

**Development (TRL 5-6):**
- Final Frontier Design 3G - commercial IVA focus
- Various SBIR/STTR projects (components)

**Early Stage (TRL <5):**
- SmartSuit hybrid concept (TRL 2)
- Digital twin design tools (TRL 3-4)
- Various material/component research

### Market Dynamics

**Current Reality:**
- **NO commercially available lunar EVA suits** ready for purchase today
- Market dominated by NASA xEVAS contract framework
- Axiom Space has exclusive Artemis III lunar suit contract
- Collins Aerospace withdrew from next-gen development
- SpaceX focused on LEO/IVA, not lunar surface

**Barriers to Commercial Market:**
- High development costs ($228M+ for AxEMU)
- Limited customer base (only lunar missions need these)
- Safety certification requirements
- Custom fitting and support infrastructure
- ITAR/export control restrictions likely

**Positive Trends:**
- NASA shifting to commercial service model (suits-as-a-service)
- Multiple vendors developing components (gloves, joints, PLSS)
- ILC Dover pursuing commercial LEO market
- Final Frontier Design targeting lower-cost IVA suits

## Key Research Gaps

### Critical Information Missing

1. **Pricing:**
   - AxEMU per-unit cost unknown (only $228M development contract disclosed)
   - ISS EMU sustainment costs not public
   - Final Frontier Design targets $50K for IVA (not EVA)
   - No commercial lunar suit pricing available

2. **Power Requirements:**
   - PLSS power consumption not detailed in public sources
   - Battery specifications proprietary
   - Charging infrastructure requirements unclear

3. **Turnaround Time:**
   - Manufacturing lead time not disclosed
   - Custom fitting time unknown
   - Maintenance/refurbishment schedules unclear

4. **TRL Ratings:**
   - Few vendors disclose official TRL assessments
   - Component vs. system TRL unclear
   - Estimated TRLs used where not stated

5. **Commercial Availability Timeline:**
   - When/if AxEMU available beyond Artemis III
   - ILC Dover commercial suit availability date
   - Minimum order quantities, contract terms

6. **PLSS as Separate Product:**
   - Can PLSS be purchased separately?
   - PLSS vendors beyond Collins Aerospace?
   - PLSS specifications (mass, power, duration, consumables)

7. **Tool Ecosystems:**
   - EVA tool specifications (mass, power)
   - Tool vendor options beyond Oceaneering
   - Tool compatibility across suit systems

8. **Atmospheric Diving Suit Crossover:**
   - Which diving suit vendors pursuing space rating?
   - Technical feasibility and timeline?
   - Cost comparison to purpose-built space suits?

## Next Steps for Phase 2

### Recommended Search Strategies

1. **TechPort Deep Dive**
   - Manual review of all identified projects
   - Extract TRL, specifications, vendor contacts
   - Identify component suppliers transitioning to commercial

2. **SBIR/STTR Database Search**
   - Search "EVA", "spacesuit", "PLSS", "lunar surface"
   - Filter by Phase II/III (higher TRL)
   - Track which companies commercialized SBIR tech

3. **International Space Agency Partners**
   - ESA commercial crew vendors
   - JAXA partner companies
   - CSA (Canadian) space industry vendors
   - Chinese commercial space suit development (if export-compliant)

4. **Space Conference Exhibitors**
   - IAC (International Astronautical Congress) exhibitors
   - Space Symposium exhibitors
   - Satellite conference EVA/HSF tracks
   - Past 3 years (2022-2024)

5. **Industry Adjacent Search**
   - Atmospheric diving suit manufacturers (Exosuit, Newt Suit)
   - Military life support system vendors
   - Hazmat suit manufacturers with pressure suit capability
   - High-altitude pressure suit vendors

6. **Component Supplier Mapping**
   - Pressure garment fabric suppliers
   - Bearing and joint mechanism suppliers
   - Life support component vendors
   - Battery/power system suppliers

7. **Academic and Research Institution Survey**
   - University spacesuit research programs
   - NASA partnership institutions
   - Commercial spacesuit design competitions

8. **Patent and Publication Search**
   - Recent spacesuit patents (2020-2025)
   - Conference papers on EVA technology
   - Journal articles on lunar surface operations

### Completion Criteria

Research will be complete when:
- [ ] All TechPort EVA projects reviewed for TRL 5+ systems
- [ ] SBIR/STTR database searched for commercial transitions
- [ ] International vendors identified and assessed
- [ ] Atmospheric diving suit crossover potential evaluated
- [ ] Component supplier ecosystem mapped
- [ ] Pricing data obtained or confirmed unavailable
- [ ] Power/mass specifications documented for all systems
- [ ] Commercial availability timeline established
- [ ] Turnaround times and lead times documented
- [ ] PLSS separate availability confirmed/denied

## Sources Summary

All sources cited inline above. Key source categories:
- Vendor official sites (Axiom Space, Collins Aerospace, ILC Dover, etc.)
- NASA official communications and press releases
- Space news publications (SpaceNews, Space.com, collectSPACE)
- Technical documents (NASA NTRS, TechPort)
- Wikipedia for historical context (cross-referenced with primary sources)
