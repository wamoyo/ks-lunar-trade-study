# Phase 3 Research - Iteration 01

**Date:** 2025-12-08
**Duration:** ~2 hours
**Strategies Executed:** Strategy 1 (TechPort - partial), Strategy 2 (SBIR/STTR), Strategy 3 (Vendor Deep Dive - partial)

## Summary

Iteration 1 focused on gathering detailed specifications from primary vendors and exploring NASA SBIR/STTR awards. Key findings: pricing and detailed power specifications remain largely proprietary, but mass and capability data obtained for several systems.

## Search Activities Completed

### Strategy 2: NASA SBIR/STTR Awards
**Searches Performed:**
- ✅ General NASA SBIR STTR EVA spacesuit awards 2020-2024
- ✅ site:sbir.gov "spacesuit" OR "EVA" NASA Phase II
- ✅ Identified multiple Phase II projects

**Key Findings:**

**SBIR Projects Identified (Phase II, EVA-related):**

1. **EVA Space Suit Power, Avionics, and Software Systems** (SBIR.gov node/800689)
   - Focus: Flight-rated electronics for advanced avionics
   - Requirements: 8+ hour EVA sorties, 2300+ hours operational for Mars
   - URL: https://www.sbir.gov/node/800689

2. **Multifunctional, Self-Healing Hybridsil Materials** (SBIR detail/1217391)
   - Company: NanoSonic
   - Focus: Self-healing bladder composites for pressure garments
   - Status: Phase I showed instant self-repair after puncturing
   - URL: https://www.sbir.gov/sbirsearch/detail/1217391

3. **Trace Contaminant Control for Advanced Spacesuit Applications** (node/1226669)
   - Company: Precision Combustion, Inc. (PCI)
   - Focus: Vacuum-regenerable TCCS for PLSS
   - Targets: NH₃ and CH₂O removal
   - URL: https://www.sbir.gov/node/1226669

4. **Controllable, Tinting, Polycarbonate Compatible Coatings for Advanced EVA Spacesuit Visor** (detail/1418457)
   - Phase II deliverable: Full helmet bubble prototype for Z-2 spacesuit
   - URL: https://www.sbir.gov/sbirsearch/detail/1418457

5. **Conformal Space Suit Antenna Development** (conformal-space-suit-antenna-development...)
   - Company: Applied EM
   - Focus: Conformal, flexible, body-worn UHF antenna for EVA comms
   - URL: https://www.sbir.gov/content/conformal-space-suit-antenna-development-enhanced-eva-communications-and-wearable-computer-2

6. **Dust Tolerant, High Pressure Oxygen Quick Disconnect** (legacy node/1226667)
   - Focus: Advanced spacesuit and airlock applications
   - Addresses lunar dust challenges
   - URL: https://legacy.www.sbir.gov/node/1226667

7. **Technologies for Spacesuits in Extreme Surface Environments** (node/2120241)
   - Phase II deliverables: Technologically mature hardware
   - Parametric testing over expected suit conditions
   - URL: https://www.sbir.gov/node/2120241

8. **Textiles for Extreme Surface Environments** (node/2120275)
   - Focus: High oxygen atmosphere compatibility
   - URL: https://www.sbir.gov/node/2120275

9. **Electrochromic Laminates For Advanced Spacesuit Visors** (TechPort 94571)
   - Company: Giner, Inc., Newton, MA
   - NASA SBIR 2018 Phase II
   - Application: Z-2 spacesuit, instant darkening visor
   - URL: https://sbir.nasa.gov/SBIR/abstracts/18/sbir/phase2/SBIR-18-2-H4.02-6292.html

**Component Suppliers Identified from SBIR:**
- **NanoSonic** - Self-healing materials (bladder, gloves)
- **Precision Combustion, Inc.** - Life support contaminant control
- **Applied EM** - Communications antennas
- **Giner, Inc.** - Electrochromic visors

**Gap:** Could not find comprehensive list of all 2020-2024 Phase II/III EVA awards. NASA award PDFs referenced but not directly accessible via search. This would require manual download from sbir.nasa.gov.

---

### Strategy 3: Vendor Deep Dive

#### Axiom Space AxEMU

**Searches Performed:**
- ✅ Mass, power, cost specifications
- ✅ Commercial availability, pricing, turnaround time

**Specifications Found:**

| Parameter | Value | Source | Notes |
|-----------|-------|--------|-------|
| **Mass** | ~40 kg estimated | [Austrian Space Forum](https://oewf.org/en/2023/03/new-spacesuits-for-the-moon-beyond/) | "About half of Apollo's 80kg" |
| **EVA Duration** | Up to 8 hours | [ASME Article](https://www.asme.org/topics-resources/content/axiom-space-designs-the-most-advanced-spacesuit-for-artemis-iii) | Maximum EVA time |
| **Temperature Range** | Lunar south pole extremes, 2+ hours in permanently shadowed regions | [Space.com AxEMU](https://www.space.com/space-exploration/artemis/a-21st-century-moon-suit-axiom-spaces-lunar-spacesuit-sports-4g-comms-prada-looks-and-oakley-visors-for-artemis-astronauts) | Coldest conditions |
| **Sizing** | 1st-99th percentile | [Axiom Release](https://www.axiomspace.com/release/axemu) | Accommodates wide range |
| **Pressure** | Likely 4.3 psi (not confirmed) | Inferred from NASA standard | Not explicitly stated |
| **Entry Type** | Rear-entry | [Axiom-Prada Unveil](https://www.axiomspace.com/release/axiom-space-prada-unveil-spacesuit-design-for-moon-return) | Faster donning |
| **Comms** | 4G LTE | [Space.com AxEMU](https://www.space.com/space-exploration/artemis/a-21st-century-moon-suit-axiom-spaces-lunar-spacesuit-sports-4g-comms-prada-looks-and-oakley-visors-for-artemis-astronauts) | Modern communications |
| **Helmet** | HD camera, LED lights, advanced coatings | [Axiom Release](https://www.axiomspace.com/release/axemu) | Enhanced visibility |
| **Power** | Not disclosed | N/A | PLSS must be more powerful than ISS EMU |
| **Cost** | Not disclosed | [Quora Discussion](https://www.quora.com/How-much-does-the-NASA-AxEMU-spacesuit-cost-per-unit) | Only prototype exists, ~300 employees |
| **Turnaround Time** | Not disclosed | N/A | No commercial ordering process public |
| **Commercial Availability** | Artemis III (2026+), Axiom Station | [New Space Economy](https://newspaceeconomy.ca/2025/11/17/the-axiom-axemu-spacesuit/) | Not limited to NASA |
| **TRL** | Estimated 6-7 | Inferred from testing phase | Undergoing testing 2024-2025 |

**Key Insight:** Axiom AxEMU will serve both NASA Artemis and Axiom Station commercial customers. Suit services can be licensed to other operators, but no public pricing/ordering process disclosed.

**Contract:** $228M task order under $1.26B xEVAS contract (10-year IDIQ)
- Source: [Axiom Task Award](https://www.axiomspace.com/release/xemu-task-award)

**Gap:** Power requirements, exact per-unit cost, manufacturing lead time remain proprietary.

---

#### ILC Dover Astro™ Suit

**Searches Performed:**
- ✅ Astro suit specifications, TRL, commercial availability

**Specifications Found:**

| Parameter | Value | Source | Notes |
|-----------|-------|--------|-------|
| **Type** | EVA/Planetary Exploration | [Discover Magazine](https://www.discovermagazine.com/the-sciences/these-might-be-the-spacesuits-astronauts-wear-on-mars) | Spacewalks + surface |
| **Announced** | August 28, 2019 | [Discover Magazine](https://www.discovermagazine.com/the-sciences/these-might-be-the-spacesuits-astronauts-wear-on-mars) | Date of announcement |
| **Key Feature** | Resizeable without tools | [Discover Magazine](https://www.discovermagazine.com/the-sciences/these-might-be-the-spacesuits-astronauts-wear-on-mars) | Adaptability focus |
| **PLSS Options** | Tethered hose OR backpack | [Discover Magazine](https://www.discovermagazine.com/the-sciences/these-might-be-the-spacesuits-astronaats-wear-on-mars) | Flexible configuration |
| **Environment** | Free-floating or walking (Moon/Mars) | [Discover Magazine](https://www.discovermagazine.com/the-sciences/these-might-be-the-spacesuits-astronauts-wear-on-mars) | Multi-environment |
| **Commercial Status** | "Well on their way to market" as of 2019 | [Discover Magazine](https://www.discovermagazine.com/the-sciences/these-might-be-the-spacesuits-astronauts-wear-on-mars) | Waiting for customer specs |
| **Availability** | "Ready within several months" (2019 statement) | [Discover Magazine](https://www.discovermagazine.com/the-sciences/these-might-be-the-spacesuits-astronauts-wear-on-mars) | Unclear current status |
| **TRL** | Unknown (likely 5-6 in 2019) | Estimated | No recent updates found |

**Gap:** No recent updates since 2019 announcement. Current development status, specifications, TRL, and commercial availability unclear. Need to search for 2020-2025 updates on ILC Dover Astro suit.

**Note:** ILC Dover is subcontractor to Collins Aerospace for xEVAS, providing pressure garments. Unclear if Astro™ is separate commercial product or integrated into xEVAS.

---

#### Collins Aerospace ISS EMU (Baseline Comparison)

**Searches Performed:**
- ✅ ISS EMU specifications, mass, PLSS, power

**Specifications Found:**

| Parameter | Value | Source | Notes |
|-----------|-------|--------|-------|
| **Mass** | 275 lbs (125 kg) total | [EMU Wikipedia](https://en.wikipedia.org/wiki/Extravehicular_Mobility_Unit) | Complete system |
| **Mass (Microgravity)** | 145 kg with 73 kg astronaut | [EMU Wikipedia](https://en.wikipedia.org/wiki/Extravehicular_Mobility_Unit) | ISS measurement |
| **EVA Duration** | 7-8 hours typical | [EMU Wikipedia](https://en.wikipedia.org/wiki/Extravehicular_Mobility_Unit) | Standard mission |
| **Pressure** | 4.3 psi (29.6 kPa) | [EMU Wikipedia](https://en.wikipedia.org/wiki/Extravehicular_Mobility_Unit) | Operating pressure |
| **Temperature Range** | -250°F to 250°F (-156°C to 121°C) | [EMU Wikipedia](https://en.wikipedia.org/wiki/Extravehicular_Mobility_Unit) | Protection range |
| **Battery (Original)** | 26.5 Ah × 16-20V = 424-530 Wh | [HowStuffWorks EMU](https://science.howstuffworks.com/space-suit.htm) | Earlier design |
| **Battery (Long Life)** | 20.5V × 40 Ah = 820 Wh | [Quora Spacesuit Batteries](https://www.quora.com/What-type-of-batteries-do-spacesuits-utilise-for-an-EVA) | LLB version |
| **Battery (Apollo comparison)** | 390 Wh (Apollo 15-17) | [PLSS Wikipedia](https://en.wikipedia.org/wiki/Primary_life_support_system) | Historical reference |
| **PLSS Function** | CO₂ removal, thermal control, O₂, power | [EMU Wikipedia](https://en.wikipedia.org/wiki/Extravehicular_Mobility_Unit) | Integrated backpack |
| **CO₂ Removal** | Silver oxide particles, 8 hours | [New Space Economy AxEMU](https://newspaceeconomy.ca/2025/11/17/the-axiom-axemu-spacesuit/) | Chemical sorbent |
| **Thermal Control** | Water cooling loops + sublimator | [New Space Economy AxEMU](https://newspaceeconomy.ca/2025/11/17/the-axiom-axemu-spacesuit/) | Cooling system |
| **Manufacturer** | Hamilton Sundstrand / Collins Aerospace | [EMU Wikipedia](https://en.wikipedia.org/wiki/Extravehicular_Mobility_Unit) | PLSS + hardware |
| **TRL** | TRL 9 | Historical | Operational since 1981 |
| **Commercial Availability** | NO - NASA only | [Collins Spacesuits](https://www.collinsaerospace.com/what-we-do/industries/space/space-suits) | Government contract |

**Key Insight:** ISS EMU provides baseline for comparison. Much heavier than Axiom AxEMU (125 kg vs ~40 kg estimated), but proven system. Battery provides 424-820 Wh depending on version.

**Collins xEVAS Status:** Collins withdrew from xEVAS lunar development (June 2024), continues ISS EMU sustainment only.
- Source: [SpaceNews Collins Exits](https://spacenews.com/collins-aerospace-pulls-back-from-nasa-spacesuit-contract/)

---

#### Apollo PLSS (Historical Baseline)

**Searches Performed:**
- ✅ Lunar PLSS specifications, mass, power, oxygen

**Specifications Found:**

| Parameter | Apollo 11-14 | Apollo 15-17 | Source |
|-----------|-------------|-------------|--------|
| **Mass (Earth)** | 84 lbs (38 kg) | 84 lbs (38 kg) | [PLSS Wikipedia](https://en.wikipedia.org/wiki/Primary_life_support_system) |
| **Mass (Moon)** | 14 lbs equiv (6.4 kg) | 14 lbs equiv (6.4 kg) | [PLSS Wikipedia](https://en.wikipedia.org/wiki/Primary_life_support_system) |
| **Total Back Mass** | 57 kg (with OPS) | 57 kg (with OPS) | [PLSS Wikipedia](https://en.wikipedia.org/wiki/Primary_life_support_system) |
| **Battery Power** | 279 Wh | 390 Wh | [PLSS Wikipedia](https://en.wikipedia.org/wiki/Primary_life_support_system) |
| **Oxygen Pressure** | 1,020 psi (7.0 MPa) | 1,430 psi (9.9 MPa) | [PLSS Wikipedia](https://en.wikipedia.org/wiki/Primary_life_support_system) |
| **EVA Duration** | 4 hours | 8 hours | [PLSS Wikipedia](https://en.wikipedia.org/wiki/Primary_life_support_system) |
| **LiOH (CO₂)** | 3.0 lbs (1.4 kg) | 3.12 lbs (1.42 kg) | [PLSS Wikipedia](https://en.wikipedia.org/wiki/Primary_life_support_system) |
| **Cooling Water** | 8.5 lbs (3.9 L) | 11.5 lbs (5.2 L) | [PLSS Wikipedia](https://en.wikipedia.org/wiki/Primary_life_support_system) |
| **Dimensions** | 26"H × 18"W × 10"D | 26"H × 18"W × 10"D | [PLSS Wikipedia](https://en.wikipedia.org/wiki/Primary_life_support_system) |

**Key Insight:** Apollo PLSS is historical baseline for lunar surface operations. Modern systems (AxEMU PLSS) must match or exceed 8-hour duration while being more efficient and adaptable to extreme lunar south pole temperatures.

---

## Items Added to JSON (Draft)

Will add the following systems to `output/eva-suits-human-tooling.json`:

1. **Axiom Space AxEMU** - Lunar EVA suit (TRL 6-7)
2. **Collins Aerospace ISS EMU** - LEO EVA suit (TRL 9, baseline comparison)
3. **SpaceX EVA Suit** - LEO EVA suit, umbilical (TRL 9, NOT lunar)
4. **David Clark S1100 Salus** - IVA suit (TRL 9, NOT EVA)
5. **ILC Dover Astro™** - EVA/Planetary suit (TRL unclear, status unclear)
6. **Final Frontier Design 3G** - IVA suit (TRL 5-6, NOT EVA)

**Components (from SBIR):**
- NanoSonic self-healing materials
- Precision Combustion TCCS
- Giner electrochromic visors
- Applied EM conformal antennas

---

## Gaps Identified

### Critical Missing Data:
1. **AxEMU Power Requirements** - PLSS power consumption not disclosed
2. **AxEMU Exact Cost** - Development contract known ($228M), per-unit cost proprietary
3. **AxEMU Turnaround Time** - Manufacturing lead time not public
4. **ILC Dover Astro™ Current Status** - No updates since 2019 announcement
5. **PLSS Standalone Availability** - Can PLSS be purchased separately? Unknown
6. **TechPort Project Details** - Require manual JavaScript-enabled browser access

### Additional Searches Needed:
1. ILC Dover recent updates (2020-2025) on Astro suit
2. TechPort manual project reviews (11 projects identified)
3. More SBIR Phase II companies and their commercial products
4. Component supplier details (fabrics, bearings, life support subsystems)
5. International vendors (ESA, JAXA, CSA partners)
6. Conference exhibitor lists (IAC, ICES, Space Symposium)

---

## Next Iteration Plan

**Iteration 2 will focus on:**
- Strategy 1: Manual TechPort project reviews (requires browser access)
- Strategy 4: International and niche vendors
- Strategy 5: Conference exhibitor mining
- Additional searches for ILC Dover Astro suit updates
- SpaceX EVA suit detailed specifications
- David Clark Company IVA suit details

**Expected additions to JSON:**
- Refined specifications for existing items
- Possibly 2-5 additional component suppliers
- International vendors (if any at TRL 5+)
- Tool manufacturers (Oceaneering details)

---

## Sources Used This Iteration

### Axiom Space:
- https://www.axiomspace.com/axiom-suit
- https://www.axiomspace.com/release/axemu
- https://www.axiomspace.com/release/xemu-task-award
- https://www.axiomspace.com/release/axiom-space-prada-unveil-spacesuit-design-for-moon-return
- https://www.axiomspace.com/news/axemu-spacesuit-testing
- https://www.asme.org/topics-resources/content/axiom-space-designs-the-most-advanced-spacesuit-for-artemis-iii
- https://www.space.com/space-exploration/artemis/a-21st-century-moon-suit-axiom-spaces-lunar-spacesuit-sports-4g-comms-prada-looks-and-oakley-visors-for-artemis-astronauts
- https://oewf.org/en/2023/03/new-spacesuits-for-the-moon-beyond/
- https://newspaceeconomy.ca/2025/11/17/the-axiom-axemu-spacesuit/
- https://www.quora.com/How-much-does-the-NASA-AxEMU-spacesuit-cost-per-unit

### ILC Dover:
- https://www.discovermagazine.com/the-sciences/these-might-be-the-spacesuits-astronauts-wear-on-mars

### Collins Aerospace / ISS EMU:
- https://en.wikipedia.org/wiki/Extravehicular_Mobility_Unit
- https://science.howstuffworks.com/space-suit.htm
- https://www.collinsaerospace.com/what-we-do/industries/space/space-suits
- https://spacenews.com/collins-aerospace-pulls-back-from-nasa-spacesuit-contract/

### Apollo PLSS:
- https://en.wikipedia.org/wiki/Primary_life_support_system
- https://airandspace.si.edu/collection-objects/portable-life-support-system-apollo/nasm_A19830164000

### NASA SBIR/STTR:
- https://www.sbir.gov/node/800689
- https://www.sbir.gov/sbirsearch/detail/1217391
- https://www.sbir.gov/node/1226669
- https://www.sbir.gov/sbirsearch/detail/1418457
- https://www.sbir.gov/content/conformal-space-suit-antenna-development-enhanced-eva-communications-and-wearable-computer-2
- https://legacy.www.sbir.gov/node/1226667
- https://www.sbir.gov/node/2120241
- https://www.sbir.gov/node/2120275
- https://sbir.nasa.gov/SBIR/abstracts/18/sbir/phase2/SBIR-18-2-H4.02-6292.html

### Battery/Power:
- https://www.quora.com/What-type-of-batteries-do-spacesuits-utilise-for-an-EVA

---

## Time Spent

- SBIR/STTR searches: 45 minutes
- Axiom AxEMU deep dive: 30 minutes
- ILC Dover search: 15 minutes
- Collins/ISS EMU baseline: 20 minutes
- Apollo PLSS historical: 15 minutes
- Documentation: 25 minutes

**Total: ~2.5 hours**

---

## Researcher Notes

The market is even more concentrated than initially expected. Axiom AxEMU is essentially the ONLY lunar-capable EVA suit in development at TRL 5+. ILC Dover Astro suit shows promise but has unclear current status (no updates since 2019).

Pricing remains a significant challenge - no vendor discloses commercial pricing, likely because these are government contract systems transitioning to commercial services model rather than "products for sale."

Power specifications are similarly proprietary, with only historical Apollo and ISS EMU data available.

The SBIR/STTR ecosystem is robust with many component suppliers, but finding complete systems is difficult.

Next iteration should attempt to contact ILC Dover for Astro suit status update and search more thoroughly for any overlooked international or niche vendors.
