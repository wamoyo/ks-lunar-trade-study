# Phase 3 Research - Iteration 02

**Date:** 2025-12-08
**Researcher:** Claude Sonnet 4.5
**Focus:** SBIR/STTR tracking, NASA technical publications, Tipping Point awards, academic research

---

## Objectives for This Iteration

1. Execute Strategy 3: NASA SBIR/STTR tracking for Phase II awards
2. Execute Strategy 4: NASA technical publications search
3. Execute Strategy 6: Industry news (Tipping Point awards)
4. Execute Strategy 5 (partial): Academic institutions (Colorado School of Mines)
5. Fill gaps in JSON file with additional systems and specifications
6. Update existing entries with new information

---

## Search Queries Executed

### SBIR/STTR Database Searches

1. **"SBIR Phase II lunar ISRU 2024 oxygen production water extraction NASA award"**
   - Result: Found SBIR/STTR solicitation pages for ISRU topics
   - Key finding: 2024 Phase II selections announced (108 awards, up to $850K each)
   - Target production: 1,000 kg O2/year pilot plant, 10,000 kg/year full-scale

### NASA Technical Reports Searches

2. **"site:ntrs.nasa.gov lunar ISRU power requirements mass specifications 2023 2024"**
   - Result: Multiple NTRS documents identified
   - Key documents:
     - ICES 2024 conference paper on ISRU M/V/P analysis
     - Progress Review of NASA Lunar ISRU Development
   - **Critical findings:**
     - Baseline ISRU O2 production: **1.63 kg/h, 25.83 kW**
     - Polar water ISRU system: **5 mT mass, 68 kW power**, produces 10 mT O2+H2 in 225 days
     - Carbothermal reactor: **2.7 mT, 11.8 kW**
     - Water extraction target: **1.78 kg/hr**

3. **Attempted PDF extraction:**
   - Tried WebFetch on NTRS PDFs but binary format not extractable
   - Specs identified from search results summaries instead

### Academic Institution Searches

4. **"Colorado School of Mines lunar ISRU research publications 2024"**
   - Result: Found Space Resources Program updates
   - 2024 publications:
     - "Technologies for Prospecting, Extraction, and Utilization of Space Resources" (Oct 2024)
     - "The Moon Needs an International Lunar Resource Prospecting Campaign" (2024)
   - Space Resources Investing Summit held Nov 2024
   - Ongoing partnerships: Pioneer MMOST, OxEon Ice-TP, PSR research

### NASA Tipping Point Awards

5. **"NASA Tipping Point lunar ISRU 2024 contracts awards"**
   - Result: Found 2023 Tipping Point selections (July 2023, $150M total)
   - **ISRU-Related Awards:**
     - **Blue Origin: $34.7M** - Blue Alchemist ISRU system (O2, Fe, Si, Al extraction + solar cells)
     - **Redwire: $12.9M** - Mason regolith infrastructure system
     - **Astrobotic: $34.6M** - Lunar surface power distribution (supports ISRU)
   - No new 2024 ISRU-specific Tipping Point announcements found

### Peripheral Technologies

6. **"Infinity Fuel NASA Tipping Point lunar propellant ISRU 2024"**
   - Result: Infinity Fuel ($4M) awarded for regenerative fuel cell
   - 500-hour lunar fuel cell test milestone achieved Oct 2024
   - Application: Energy storage for lunar rovers/habitats (enables ISRU operations)
   - Note: Not primary ISRU system, but supports ISRU operations

7. **"Zeno Power lunar night radioisotope power ISRU applications"**
   - Result: Zeno Power ($15M) awarded for americium-241 radioisotope Stirling generator
   - Enables lunar night survival (2-week → multi-year mission durations)
   - Application: Continuous power for ISRU during lunar night
   - Note: Power source for ISRU, not ISRU processing itself

---

## Systems Added to JSON File

### New System Added

1. **Redwire - Mason Regolith Infrastructure Construction System**
   - TRL: Not specified (CDR completed 2025, prototype in fabrication)
   - Award: $12.9M NASA Tipping Point (Jul 2023)
   - Function: Microwave sintering of regolith for landing pads, roads, berms, foundations
   - Tool suite: Grader, compactor, microwave emitter
   - Partners: Lambda Technologies, NASA KSC, Colorado School of Mines, UCF
   - Note: Processes regolith but doesn't extract resources; included as regolith utilization technology

**Total Systems: Now 17 in JSON file**

---

## Data Updates and Enhancements

### Power/Mass Specifications from NTRS

From NASA case studies, identified **reference architectures**:

1. **Baseline O2 Production System:**
   - Output: 1.63 kg/hr oxygen
   - Power: 25.83 kW
   - Note: This is a reference point, not a specific vendor system

2. **Polar Water ISRU System (Full-Scale):**
   - Mass: 5 mT (5,000 kg)
   - Power: 68 kW
   - Output: 10 mT oxygen + hydrogen in 225 days
   - Note: System-level architecture study, not single vendor

3. **Carbothermal Reduction Reactor:**
   - Mass: ~2.7 mT
   - Power: 11.8 kW
   - Note: For oxygen extraction from regolith minerals

**Action:** These are NASA reference designs, not specific vendor products. Did not add as separate entries but noted for context in understanding typical system scales.

### Blue Alchemist Tipping Point Confirmation

- Confirmed **$34.7M NASA Tipping Point award (Jul 2023)**
- Updated notes with more specific award amount
- CDR completed 2024 (already noted in Iteration 1)

---

## Key Findings

### SBIR/STTR Program Insights

1. **2024 Phase II Selections:**
   - 108 total awards, $850K max each
   - Multiple ISRU-related topics in solicitation
   - Focus areas: Oxygen extraction, water processing, propellant production, regolith beneficiation

2. **NASA Production Targets:**
   - Pilot plant: 1,000 kg O2/year
   - Full-scale: 10,000 kg O2/year
   - These targets drive vendor system designs

3. **Relaxed Specifications:**
   - NASA soliciting "relaxed propellant specifications" allowing higher water contaminants from ISRU
   - Reduces purification requirements, lowers system complexity

### Power and Mass Benchmarks

**From NTRS case studies, typical scales:**

| System Type | Mass (mT) | Power (kW) | Output |
|-------------|-----------|------------|--------|
| Baseline O2 production | ~2-3 (est) | 25.83 | 1.63 kg/hr O2 |
| Full polar water ISRU | 5 | 68 | 10 mT O2+H2/225 days |
| Carbothermal reactor | 2.7 | 11.8 | Oxygen from regolith |

**Observation:** These are **integrated system studies**, not individual vendor hardware masses. Vendor breadboards/prototypes are smaller scale.

### Tipping Point Awards 2023 Focus

**ISRU/Resource Utilization:** $47.6M total
- Blue Origin (Blue Alchemist): $34.7M
- Redwire (Mason): $12.9M

**Supporting Technologies:** $53.6M
- Astrobotic (power distribution): $34.6M
- Zeno Power (radioisotope power): $15M
- Infinity Fuel (fuel cells): $4M (part of separate award)

**Total lunar surface/ISRU-related:** ~$101M in 2023 Tipping Point round

### Technology Maturation Timeline

**2020-2021 cohort (TRL 4→5):**
- Lunar Resources MRE Phase I (2020-2021) → TRL 6
- OxEon Ice-TP (2020-2021) → TRL 5
- Skyre LP3 (2020-2021) → TRL 5

**2023-2024 cohort (TRL 3→5):**
- Lunar Resources MRE maturation (2023-2025) → TRL 5
- Paragon ICICLE (2021-2024) → TRL 5
- Paragon IHOP (2019-2024) → TRL 5/4

**2023 Tipping Point cohort (targeting TRL 6+):**
- Blue Origin Blue Alchemist (2023-2026) → TRL 6 target
- Redwire Mason (2023-2025+) → TRL unknown, prototype phase

**Observation:** Clear **2-3 year cycles** from Phase II start to TRL 5 achievement. Tipping Point awards target higher TRLs (6-7).

---

## Data Completeness Analysis (After Iteration 2)

### Fields with Good Coverage

**Vendor (17/17 = 100%)**
- All systems identified

**Model (17/17 = 100%)**
- All named

**TRL (16/17 = 94%)**
- 16 have TRL values
- 1 (Redwire Mason) TRL not specified but in development

**Production Rate (7/17 = 41%)**
- No change from Iteration 1 (same systems with data)

### Fields with Poor Coverage (No Change)

**Mass (0/17 = 0%)**
- Still no vendor-specific mass data
- NASA studies provide system-level estimates but not vendor hardware

**Power (1/17 = 6%)**
- Only Teledyne AAE has specific power rating (5.6 kW per kg O2/hr)
- NASA studies provide reference architectures but not vendor-specific

**Cost (0/17 = 0%)**
- Still completely unavailable (pre-commercial)

**Turnaround Time (0/17 = 0%)**
- Not applicable (not for sale)

---

## Gaps Still Remaining

### Information Not Found

1. **Vendor-Specific Mass/Power:**
   - NASA case studies provide system-level estimates
   - Individual vendor breadboards/prototypes at smaller scales
   - Flight hardware designs not yet published

2. **2024 SBIR Phase II Awardees:**
   - 2024 selections announced, but specific company list not detailed in search results
   - Would need to check NASA SBIR database directly for individual awards

3. **PDF Technical Details:**
   - NTRS PDFs not extractable via WebFetch (binary format)
   - Manual review would be needed for detailed specs

4. **Cost Estimates:**
   - SBIR contract values available ($125K Phase I, $850K Phase II)
   - But flight hardware acquisition costs completely unknown

### Why Mass/Power Data Remains Elusive

1. **Early Development Stage:** Most systems at TRL 4-6 (breadboard to prototype)
2. **Scale Differences:** Lab prototypes << pilot plant << full-scale plant
3. **Proprietary Information:** Vendors may not publish detailed designs
4. **Mission-Specific:** Final mass/power depends on mission architecture (descent stage vs. lander vs. standalone)
5. **Subsystem vs. System:** TechPort projects often focus on subsystems (reactor, electrolyzer) not complete integrated systems

---

## Coverage Assessment Against Completion Checklist

### TechPort Searches
- [x] Searched "lunar ISRU"
- [x] Searched "oxygen production"
- [x] Searched "water extraction"
- [x] Searched "regolith processing"
- [x] Searched "molten regolith electrolysis"
- [x] Searched "propellant production"
- [x] All TRL 5+ TechPort projects documented (12 projects from Iteration 1)

### Vendor Websites
- [x] All 7 vendors from Phase 1 researched (Iteration 1)
- [x] Redwire added (Iteration 2)

### NASA Programs
- [x] SBIR/STTR 2024 Phase II solicitation reviewed
- [x] NTRS searched for 2023-2024 technical papers
- [x] NASA Tipping Point 2023 awards documented
- [ ] Individual 2024 SBIR Phase II awards not detailed (search results incomplete)

### Academic Institutions
- [x] Colorado School of Mines checked (2024 publications, partnerships)
- [ ] Arizona State University (mentioned as partner but not independently researched)
- [ ] Michigan Technological University (mentioned as partner but not independently researched)

### Industry News
- [x] Tipping Point awards 2023 reviewed
- [x] Recent 2024 milestones captured (Infinity 500-hr test, Redwire CDR)
- [ ] SpaceNews systematic search not yet done
- [ ] Individual vendor press releases (2024) not systematically checked

### International Agencies
- [ ] ESA ISRU programs not yet checked
- [ ] JAXA lunar ISRU not yet checked
- [ ] CSA contributions not yet checked

---

## Next Steps for Iteration 3

### Remaining High-Priority Tasks

1. **Industry News Deep Dive:**
   - SpaceNews search for 2024-2025 ISRU announcements
   - Vendor press releases (check all 8 vendors for 2024 updates)
   - Look for: New contracts, technology demonstrations, TRL advancements

2. **International Space Agencies:**
   - ESA lunar ISRU initiatives
   - JAXA resource utilization plans
   - Canadian contributions (if any)

3. **Verify Recent Completions:**
   - Blue Origin Blue Alchemist - any 2024-2025 progress post-CDR?
   - Pioneer MMOST - JSC vacuum chamber demo status?
   - Redwire Mason - prototype fabrication status?

### Lower-Priority Tasks (If Time Permits)

4. **Adjacent Technologies:**
   - Mining equipment vendors (unlikely to yield much)
   - Industrial electrolysis companies (terrestrial, not lunar-specific)

5. **Patent Search:**
   - USPTO lunar ISRU patents (Strategy 9)
   - May reveal design details not in public literature

6. **Direct Vendor Outreach:**
   - Only if major gaps remain (Strategy 10, last resort)
   - Prefer public sources for verification

---

## Summary Statistics (After Iteration 2)

**Systems Documented:** 17 (was 16)
- **TRL 6:** 2 systems (Lunar Resources MRE capture, PSI solar concentrator)
- **TRL 5:** 7 systems (no change)
- **TRL 4:** 4 systems (no change)
- **TRL 3:** 1 system (Special Power PCEC)
- **TRL 2:** 1 system (NASA KSC starter)
- **TRL unknown:** 2 systems (Blue Alchemist targeting 6, Redwire Mason in dev)

**New Additions:** 1 system (Redwire Mason)

**Data Completeness:**
- Vendor/Model: 100%
- TRL: 94%
- Production rates: 41%
- Power: 6%
- Mass: 0%
- Cost: 0%

**Research Progress:**
- Iteration 1: TechPort + vendor websites → 16 systems
- Iteration 2: SBIR/STTR + NASA pubs + Tipping Point → +1 system, context on power/mass
- Iteration 3 plan: Industry news + international agencies + verification

---

## Key Takeaways

1. **Mass and power data remains unavailable** at vendor-specific level
   - NASA provides reference architectures (5 mT, 68 kW for full system)
   - But individual vendor hardware specs not published

2. **Major funding in 2023:** $150M Tipping Point round heavily focused on lunar surface tech
   - Blue Origin Blue Alchemist: $34.7M (largest ISRU award)
   - Indicates NASA prioritization of MRE + solar cell production

3. **Production targets standardized:** NASA solicitations specify 1,000 kg O2/year (pilot) and 10,000 kg/year (full-scale)
   - Vendors designing to these benchmarks

4. **17 systems now documented** spanning all ISRU categories:
   - Water extraction: 3 systems
   - Oxygen production (MRE): 5 systems
   - Water purification: 2 systems
   - Propellant production: 5 systems
   - Metals extraction: 3 systems
   - Regolith processing: 2 systems (Blue Alchemist, Redwire Mason)

5. **Recent activity confirms pre-commercial status:**
   - CDRs completing in 2024-2025 (Blue Alchemist, Redwire)
   - Phase II contracts finishing in 2024 (ICICLE, IHOP, MORRE)
   - Nothing available for purchase in 2025

---

## Sources Used (Iteration 2)

### SBIR/STTR Program
- https://sbir.gsfc.nasa.gov/content/extraction-oxygen-and-water-lunar-regolith
- https://sbir.gsfc.nasa.gov/content/lunar-isru-development-and-precursor-activities
- https://www.nasa.gov/sbir_sttr/phase-ii/

### NASA Technical Reports
- https://ntrs.nasa.gov/api/citations/20240005576/ (ICES 2024 ISRU paper)
- https://ntrs.nasa.gov/api/citations/20250003730/ (Progress Review)
- https://ntrs.nasa.gov/citations/20205007966 (Polar water case study)

### NASA Tipping Point Awards
- https://www.nasa.gov/news-release/nasa-announces-new-tipping-point-partnerships-for-moon-and-mars-technologies/
- https://www.nasa.gov/general/2023-nasa-tipping-point-selections/

### Vendor News
- https://redwirespace.com/newsroom/pads-roads-and-other-forms-of-infrastructure-on-the-moon/
- https://infinityfuel.com/news/infinity-awarded-nasa-tipping-point-contract/
- https://www.zenopower.com/news/nasa-selects-zeno-to-lead-team-to-develop-radioisotope-power-system-for-lunar-applications

### Academic Institutions
- https://space.mines.edu/publications/ (Colorado School of Mines Space Resources Program)
- https://www.minesnewsroom.com/news/mines-teams-pioneer-astronautics-advance-sustainable-lunar-exploration

---

**Iteration 2 Complete: 2025-12-08**
**Next: Iteration 3 - Industry news, international agencies, final verification**
