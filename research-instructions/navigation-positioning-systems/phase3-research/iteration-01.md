# Phase 3 Research - Iteration 01

**Date:** 2025-12-08
**Focus:** High-TRL systems (TRL 7-9), priority vendors, initial JSON build

## Objectives for This Iteration

1. Research priority vendors identified in Phase 1 (IMUs, star trackers)
2. Gather specifications for TRL 9 (flight-proven) systems
3. Research emerging high-TRL systems (TRN, NDL)
4. Begin building JSON file with verified systems
5. Document sources and data quality

## Search Strategies Executed

### Strategy 2: Direct Vendor Product Pages (Partial)
- Honeywell MIMU - COMPLETED
- Northrop Grumman LN-200S - COMPLETED
- Blue Canyon Technologies NST - COMPLETED
- Redwire Space star tracker - COMPLETED
- Astrobotic OPAL - COMPLETED
- Psionic PSNDL - COMPLETED

### Other Searches
- Advanced Space CAPS - COMPLETED
- Lunar Node 1 beacon - COMPLETED
- General web searches for specifications and TRL ratings

## Systems Added to JSON (8 total)

### TRL 9 (Flight-Proven) - 4 systems

1. **Honeywell MIMU**
   - Specifications found: Mass (4.6 kg), Power (25W), Dimensions
   - Missing: Cost, turnaround time
   - Source quality: Excellent (vendor website, academic sources)
   - Heritage: 300+ units, 1M+ orbit hours, Mars/lunar missions

2. **Northrop Grumman LN-200S**
   - Specifications found: Mass (0.748 kg), Power (12W)
   - Missing: Cost, turnaround time, detailed dimensions
   - Source quality: Good (vendor website, SatCatalog)
   - Heritage: 35,000+ units since 1994, Mars rovers, Clementine lunar orbiter

3. **Blue Canyon Technologies NST**
   - Specifications found: Mass (0.35 kg), Dimensions, Performance specs
   - Missing: Power (described as low but no number), Cost, turnaround
   - Source quality: Good (vendor website)
   - Heritage: 179 units on-orbit, Lunar Flashlight

4. **Redwire Space Star Tracker**
   - Specifications found: Mass (0.475 kg), Power (2.5W), Dimensions, Performance
   - Missing: Cost, turnaround time
   - Source quality: Good (vendor website, NASA documentation, SatSearch)
   - Heritage: Multiple CubeSat/NanoSat missions

### TRL 7-8 (Space-Demonstrated) - 3 systems

5. **Astrobotic OPAL (TRL 7)**
   - Specifications found: Performance characteristics, flight test results
   - Missing: Mass, power, dimensions, cost
   - Source quality: Good (vendor announcements, NASA sources)
   - Heritage: Terrestrial flight validated, Peregrine demonstration

6. **Psionic PSNDL (TRL 8)**
   - Specifications found: Performance (2 cm/s velocity, 2m range accuracy)
   - Missing: Mass, power (future version will reduce by 60%/50%), cost
   - Source quality: Good (NASA sources, vendor announcements)
   - Heritage: NASA F-18 tests, flying on CLPS landers

7. **Lunar Node 1 (TRL 7)**
   - Specifications found: Technology description (S-band beacon, COTS modular)
   - Missing: Mass, power, dimensions, all specs
   - Source quality: Fair (NASA announcements)
   - Heritage: IM-1 mission demonstration (Feb 2024)

### TRL 6 (Relevant Environment Demonstrated) - 1 system

8. **Advanced Space CAPS (TRL 6)**
   - Specifications found: Technology description (peer-to-peer navigation)
   - Missing: Mass, power (software-based system), all hardware specs
   - Source quality: Good (NASA SBIR, vendor website)
   - Heritage: CAPSTONE demonstration (2023)

## Data Quality Assessment

### Excellent Coverage:
- IMU systems (Honeywell, Northrop Grumman)
- Star trackers (Blue Canyon, Redwire)

### Good Coverage:
- TRN systems (Astrobotic OPAL)
- Navigation Doppler Lidar (Psionic)

### Limited Coverage:
- Beacon systems (LN-1)
- Software/algorithmic systems (CAPS)

### Missing Data Across All Systems:
- **Cost:** No commercial pricing publicly available for any system
- **Turnaround time:** Not published for any system
- **Power:** Missing for 4/8 systems
- **Mass:** Missing for 4/8 systems

## Key Findings

### Market Maturity by Category

**Very Mature (TRL 9, Commercial Off-the-Shelf):**
- Inertial Measurement Units
- Star Trackers
- Both categories have multiple vendors, extensive flight heritage, publicly available specs

**Maturing (TRL 7-8, Near Commercial):**
- Terrain-Relative Navigation (via CLPS program)
- Navigation Doppler Lidar (transitioning from NASA to commercial)
- Surface beacons (demonstrations completed)

**Early Deployment (TRL 6):**
- Peer-to-peer navigation (CAPS)

### Technology Gaps Identified

1. **Comprehensive lunar PNT infrastructure:** Not yet operational
   - Orbital constellations in planning (NASA LCRNS, ESA Moonlight, JAXA LNSS)
   - Surface beacon networks in early demonstration

2. **Detailed specifications:** Many emerging systems lack published specs
   - Likely available under NDA or for customers
   - Public information focuses on performance rather than engineering details

3. **Commercial pricing:** None available publicly
   - Likely requires direct vendor contact
   - May vary significantly based on order quantity and customization

## Challenges Encountered

### TechPort Access Issue
- TechPort web interface requires JavaScript
- Cannot fetch detailed project data via WebFetch
- Will need to search TechPort via web interface manually or use API
- **Action:** Need to execute comprehensive TechPort search in next iteration

### Missing Vendor Specifications
- Many vendors show products but don't publish detailed specifications
- Power consumption particularly sparse for newer systems
- May need to attempt direct vendor contact or find academic papers

### TRL Determination
- Most vendors don't publish NASA TRL ratings
- TRL inferred from:
  - Flight heritage (TRL 9)
  - Space demonstration (TRL 7-8)
  - NASA SBIR phase completion (TRL 4→6)
- Some uncertainty in exact TRL values

## Sources Used

### Primary Sources (Vendor Websites):
- Honeywell Aerospace
- Northrop Grumman
- Blue Canyon Technologies
- Redwire Space
- Astrobotic Technology
- Psionic
- Advanced Space

### Secondary Sources:
- NASA announcements and impact stories
- SatSearch, SatCatalog, SatNow (space component databases)
- NASA SBIR/STTR abstracts
- Wikipedia (for heritage verification)
- NASA technical documents

### Tertiary Sources:
- Academic papers (ResearchGate, IEEE)
- Industry news (SpaceNews, TechCrunch)

## Next Steps for Iteration 2

### Priority Tasks:

1. **Execute TechPort comprehensive search:**
   - Search all keywords from Strategy 1
   - Filter by TRL 5-9
   - Document all relevant projects
   - Extract vendor names and project details

2. **Research additional star tracker vendors:**
   - Leonardo SpA (AA-STR MKII)
   - Terma (T3)
   - arcsec (Sagitta, Twinkle)
   - Berlin Space Technologies (ST200, ST400)

3. **Research additional TRN vendors:**
   - Blue Origin TRN system
   - Draper Laboratory SPLICE TRN
   - OrbitBeyond TRN/HDA

4. **Research additional vendors from databases:**
   - SatSearch comprehensive search
   - SatCatalog IMU/star tracker categories
   - SatNow navigation products

5. **Fill specification gaps:**
   - Search for academic papers with detailed specs
   - Look for NASA technical reports
   - Check conference proceedings

### Expected Additions in Iteration 2:
- 4-6 additional star tracker systems
- 2-3 additional TRN systems
- 10-20 systems from TechPort search
- Estimated total: 25-35 systems by end of Iteration 2

## Progress Tracking

**Systems in JSON:** 8
**Completion Checklist Progress:**
- TechPort search: 0% (not yet executed)
- Vendor coverage: 40% (priority vendors done, more to research)
- CLPS missions: 20% (partial coverage)
- Data quality: 60% for covered systems (missing cost/turnaround universally)

**Estimated Completion:** 20%

## Notes

- Focus on TRL 5+ filter successfully maintained
- All systems have credible sources
- Data quality varies by system maturity (TRL 9 systems have better specs)
- Need to execute TechPort strategy to ensure comprehensive coverage
- International vendors not yet researched (ESA, JAXA contractors)
