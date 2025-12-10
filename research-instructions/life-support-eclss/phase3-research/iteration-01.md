# Phase 3 Iteration 01 - Life Support and ECLSS Research

**Date:** 2025-12-08
**Strategies Executed:** Strategy 1 (TechPort - partial), Strategy 2 (ISS Heritage Vendors - partial)
**Items Added to JSON:** 15 systems/components

## Objectives for This Iteration

1. Execute Strategy 1: NASA TechPort database search (initial attempt)
2. Execute Strategy 2: ISS Heritage vendor mapping (Collins, Honeywell, Paragon, Moog)
3. Begin building JSON file with operational (TRL 9) and advanced (TRL 5-8) systems
4. Document ISS baseline ECLSS as reference systems

## Sources Searched

### NASA TechPort
- **Attempts:** Web search using site:techport.nasa.gov
- **Challenge:** TechPort requires JavaScript, WebFetch unable to extract data
- **Results Found:**
  - Project 157887: Advanced Oxygen Generation Assembly (AOGA)
  - Project 94183: NextSTEP Phase 2 ECLSS
  - Multiple oxygen generation, water recovery, CO2 removal projects identified
- **Status:** Partial success - project IDs identified but detailed specifications not extracted
- **Follow-up Needed:** Direct NASA NTRS document searches for specifications

### ISS Heritage Vendors

**Collins Aerospace (Hamilton Sundstrand)**
- Searched: Company website, NASA technical reports
- Systems Documented:
  1. ISS Oxygen Generation Assembly (OGA) - TRL 9
  2. Advanced OGA (AOGA) - TRL 6
  3. ISS Water Processor Assembly (WPA) - TRL 9
  4. ISS Carbon Dioxide Removal Assembly (CDRA) - TRL 9 (co-developed with Honeywell)
- **Findings:** Extensive ISS heritage, AOGA in development with improvements
- **Data Gaps:** Mass and power specifications not publicly available on company site
- **Sources:**
  - https://www.collinsaerospace.com/what-we-do/space/life-support
  - https://ntrs.nasa.gov/citations/20210015054 (AOGA status)
  - https://ntrs.nasa.gov/citations/20230008013 (AOGA status)

**NASA Marshall Space Flight Center**
- System Documented:
  1. ISS Urine Processor Assembly (UPA) - TRL 9
- **Findings:** NASA-developed system, potential technology transfer opportunity
- **Data Gaps:** Mass, power, commercial availability uncertain
- **Sources:**
  - https://ntrs.nasa.gov/api/citations/20230006217/downloads/ICES%202023-097%20Status%20of%20ISS%20Water%20Management%20and%20Recovery.pdf

**Russian (Roscosmos)**
- System Documented:
  1. Vozdukh CO2 Removal System - TRL 9
- **Findings:** Operational ISS system, uses space vacuum for regeneration
- **Concerns:** Export control considerations, NOT suitable for lunar surface (requires vacuum)
- **Data Gaps:** Mass, power, commercial availability highly uncertain
- **Sources:**
  - https://ntrs.nasa.gov/api/citations/20090029352/downloads/20090029352.pdf
  - https://en.wikipedia.org/wiki/Vozdukh

**Precision Combustion Inc.**
- Systems Documented:
  1. ISS Sabatier CRA - TRL 9 (NASA MSFC/PCI collaboration)
  2. Compact Microlith Sabatier Reactor - TRL 5-6
- **Findings:** SBIR-funded development of compact/lightweight Sabatier reactors
- **Data Gaps:** Mass and power for flight unit, commercial pricing
- **Sources:**
  - https://ntrs.nasa.gov/citations/20100033195 (ISS CRA)
  - https://ntrs.nasa.gov/api/citations/20120016419/downloads/20120016419.pdf (Compact reactor)
  - https://www.sbir.gov/sbirsearch/detail/369661 (SBIR award)

**Honeywell Aerospace**
- Systems Documented:
  1. CDRA - TRL 9 (ISS operational, co-developed with Collins)
  2. CDRILS (Carbon Dioxide Removal by Ionic Liquid Sorbent) - TRL 6
  3. Methane Pyrolysis Reactor - TRL unknown (in development)
- **Findings:** Next-generation CO2 removal and oxygen recovery technologies
- **Key Advantage:** CDRILS offers 65% reduction in mass/power/volume vs solid scrubbers
- **Data Gaps:** Specific mass/power values, TRL for Methane Pyrolysis
- **Sources:**
  - https://ntrs.nasa.gov/citations/20190030422 (CDRILS scale-up)
  - https://ttu-ir.tdl.org/server/api/core/bitstreams/4da153ec-f412-454e-8e4a-e57f56859cca/content (CDRILS testing)
  - https://aerospace.honeywell.com/us/en/about-us/blogs/honeywell-environmental-control-help-astronauts
  - https://www.honeywell.com/us/en/news/2023/08/mission-to-mars-how-innovation-will-take-us-there

**Paragon Space Development Corporation**
- System Documented:
  1. Gateway HALO ECLSS - TRL 7
- **Findings:** $100M+ contract for Gateway HALO life support, purpose-built for lunar vicinity
- **Specifications Found:** 4 crew for 30 days, 15+ year operational lifetime
- **Data Gaps:** Mass, power, detailed subsystem specifications
- **Sources:**
  - https://www.paragonsdc.com/paragon-announced-as-northrop-grumman-gateway-halo-partner/
  - https://www.prnewswire.com/news-releases/paragon-and-northrop-grumman-finalize-halo-life-support-contract-valued-in-excess-of-100-million-301462241.html
  - https://potomacofficersclub.com/news/paragon-to-build-environment-control-and-life-support-system-for-halo-module/

**Mitsubishi Heavy Industries (MHI)**
- System Documented:
  1. Gateway I-Hab ECLSS - TRL 7
- **Findings:** Japanese contribution to Gateway I-Hab module
- **Data Gaps:** Nearly all specifications unavailable
- **Sources:**
  - https://www.mhi.com/products/space/gateway_eclss.html

**Moog Inc.**
- Components Documented:
  1. ECLSS Fluid Control Components - TRL 8
- **Findings:** Valves, regulators, quick disconnects for Gateway and Orion
- **Data Gaps:** Component-level specifications, pricing
- **Sources:**
  - https://www.moog.com/products/environmental-control-and-life-support-systems/high-pressure-flow-control-and-isolation-valves.html

### Commercial Space Stations

**Axiom Space**
- System Documented:
  1. Axiom Station Hab-2 ECLSS - TRL 7
- **Findings:** 8-crew capacity, complete ECLSS for commercial station
- **Data Gaps:** All technical specifications unavailable
- **Sources:**
  - https://en.wikipedia.org/wiki/Axiom_Station

**Sierra Space / Blue Origin**
- System Documented:
  1. Orbital Reef Core Module ECLSS - TRL 6
- **Findings:** 10-crew capacity, demonstrations of water recycling completed
- **Data Gaps:** Technical specifications not public
- **Sources:**
  - https://www.sierraspace.com/commercial-space-stations/orbital-reef-space-station/
  - https://www.nature.com/articles/s41526-024-00363-x
  - https://aerospaceamerica.aiaa.org/features/staying-alive/

## Key Findings

### ISS Baseline Systems (TRL 9)
Successfully documented all major ISS ECLSS subsystems as operational reference:
1. OGA - Oxygen generation (5-20 lbs/day, nominal 12 lbs)
2. WPA - Water processing (98% recovery achieved)
3. UPA - Urine processing (70% recovery, down from 85% design)
4. CDRA - CO2 removal (zeolite beds)
5. Vozdukh - CO2 removal (Russian, requires vacuum)
6. Sabatier CRA - CO2 reduction to water and methane

### Next-Generation Technologies (TRL 5-8)
Identified key emerging systems:
1. **AOGA** (TRL 6): Improved OGA for exploration
2. **CDRILS** (TRL 6): 65% mass/power/volume reduction vs CDRA
3. **Methane Pyrolysis** (TRL unknown): 95% O2 recovery vs 50% current
4. **Compact Sabatier** (TRL 5-6): Lightweight reactor for lunar/Mars
5. **Gateway HALO ECLSS** (TRL 7): First lunar-vicinity integrated system
6. **Commercial Station ECLSS** (TRL 6-7): Axiom, Orbital Reef developments

### Lunar-Specific Insights

**Directly Applicable (Minimal Adaptation):**
- ISS OGA (water electrolysis) - requires water supply
- ISS WPA (water recovery) - requires consumables resupply
- ISS CDRA (CO2 removal) - thermal regeneration suitable for lunar
- Sabatier CRA (CO2 reduction) - critical for closed-loop

**Requires Modification:**
- Vozdukh - uses space vacuum, NOT suitable for lunar surface

**Optimized for Lunar:**
- Gateway HALO ECLSS - designed for lunar vicinity (orbit)
- CDRILS - reduced mass/power critical for lunar deployment
- Methane Pyrolysis - reduces resupply requirements

**Key Challenge Identified:**
- Lunar night (14 days) power requirements not addressed in available specifications
- Most systems designed for continuous solar power (ISS) or minimal power storage (Gateway orbit)

## Data Quality Assessment

### Well-Documented:
- System descriptions and functions
- TRL levels (for NASA-funded projects)
- Operational heritage (ISS systems)
- Crew capacity and throughput rates (oxygen, water production)
- Recovery rates (water: 93-98%, urine: 70%)

### Poorly Documented:
- **Mass specifications** - Critical gap, nearly zero systems have public mass data
- **Power consumption** - Major gap, only estimates available (e.g., "65% less" without baseline)
- **Cost** - Expected gap, almost no commercial pricing available
- **Turnaround time** - Not applicable for most (ISS operational or in-development)
- **Maintenance intervals** - Operational data exists but not easily found

### Completely Unavailable:
- Export control status (especially Russian systems)
- Detailed subsystem breakdowns for integrated ECLSS
- Consumables costs and resupply schedules
- Lunar surface adaptation requirements (gravity, thermal, dust effects)

## Challenges Encountered

1. **TechPort Access:** JavaScript requirement prevented direct data extraction, need alternative approach
2. **Specification Availability:** Mass and power data rarely published on vendor websites or press releases
3. **Commercial Systems:** Axiom, Orbital Reef specifications closely held, minimal public data
4. **NASA NTRS Documents:** PDFs found but detailed specs often in tables/figures not captured in abstracts
5. **Russian Systems:** Vozdukh operational data limited, export/commercial availability unclear

## Items Added to JSON

**Total: 15 systems/components**

**TRL 9 (Operational):** 7 systems
- Collins OGA, WPA, CDRA (partial)
- NASA MSFC UPA
- Russian Vozdukh
- NASA/PCI Sabatier CRA

**TRL 7-8 (Development/Testing):** 5 systems
- Gateway HALO ECLSS (Paragon)
- Gateway I-Hab ECLSS (MHI)
- Axiom Hab-2 ECLSS
- Moog ECLSS components

**TRL 5-6 (Advanced Development):** 3 systems
- Collins AOGA
- Honeywell CDRILS
- Sierra Space/Blue Origin Orbital Reef ECLSS

**TRL Unknown (Insufficient Data):** 1 system
- Honeywell Methane Pyrolysis (in development, likely TRL 4-6)

Note: Methane Pyrolysis TRL needs clarification in next iteration - may be TRL <5 and should be excluded if so.

## Next Steps for Iteration 02

### Priority Actions:
1. **Strategy 3: Gateway/Artemis Deep Dive**
   - Search NASA Gateway program documentation for HALO/I-Hab specifications
   - Find Gateway Integrated ECLSS architecture documents
   - Artemis surface habitat ECLSS requirements

2. **Continue Strategy 1: TechPort**
   - Search NASA NTRS directly for TechPort project documents
   - Alternative: Manual TechPort web browse with JavaScript enabled
   - Focus on projects 157887 (AOGA), 94183 (NextSTEP ECLSS), others identified

3. **Fill Specification Gaps:**
   - Target NASA technical papers for ISS rack-level specs (mass, power)
   - Search conference proceedings (ICES) for detailed specifications
   - Look for NASA fact sheets and educational materials (sometimes have specs)

4. **Verify TRL Ratings:**
   - Confirm Honeywell Methane Pyrolysis TRL (exclude if <5)
   - Cross-check commercial station ECLSS TRL assessments

### Sources to Search:
- https://www.nasa.gov/reference/gateway-about/ (Gateway documentation)
- NASA NTRS for: "ISS ECLSS rack specifications"
- NASA NTRS for: "Gateway ECLSS requirements"
- NASA NTRS for: "AOGA specifications mass power"
- ICES 2023-2024 proceedings for recent ECLSS papers

## Completion Checklist Status

**Strategies:**
- [X] Strategy 1: TechPort - PARTIAL (projects identified, specs needed)
- [X] Strategy 2: ISS Heritage - PARTIAL (major vendors documented, specs incomplete)
- [ ] Strategy 3: Gateway/Artemis
- [ ] Strategy 4: Commercial Stations - PARTIAL (identified, minimal specs)
- [ ] Strategy 5: SBIR/STTR
- [ ] Strategy 6: Subsystem Components
- [ ] Strategy 7: International Vendors - PARTIAL (MHI found, ESA/JAXA need more)
- [ ] Strategy 8: Adjacent Industries
- [ ] Strategy 9: Conferences
- [ ] Strategy 10: Patents/Tech Transfer

**Coverage:**
- [X] Complete ECLSS Systems: 5 (HALO, I-Hab, Axiom, Orbital Reef, ISS baseline)
- [X] Oxygen Generation: 2 (OGA, AOGA) - need 3 more
- [X] CO2 Removal: 3 (CDRA, Vozdukh, CDRILS) - need 2 more
- [ ] Water Recovery: 2 (WPA, UPA) - need 1 more
- [X] Sabatier/CO2 Reduction: 2 (ISS CRA, Compact PCI) - need 1 more
- [ ] Components: 1 (Moog) - need 14 more

**Items in JSON: 15 / 40+ target**

---

**Iteration 01 Status:** COMPLETE
**Next Iteration:** 02 - Gateway deep dive, TechPort document search, specification gap filling
