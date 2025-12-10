# Phase 3 Research - Iteration 02

**Date:** 2025-12-08
**Focus:** Additional star trackers, TRN systems, TechPort search initiation

## Objectives for This Iteration

1. Research additional star tracker vendors identified in Phase 1
2. Research additional TRN system vendors
3. Search TechPort for navigation projects
4. Update JSON with newly found systems
5. Assess progress toward completion checklist

## Search Strategies Executed

### Strategy 2: Direct Vendor Product Pages (Continued)
- Leonardo SpA AA-STR MKII - COMPLETED
- Terma T3 Star Tracker - COMPLETED
- arcsec Sagitta Star Tracker - COMPLETED
- arcsec Twinkle Star Tracker - COMPLETED
- Berlin Space Technologies ST200 - COMPLETED
- Berlin Space Technologies ST400 - COMPLETED
- Blue Origin TRN - COMPLETED
- Draper Laboratory SPLICE TRN - COMPLETED
- Masten Space Systems SkyMage - COMPLETED

### Strategy 1: TechPort Search (Partial)
- Site-specific searches for TRN, lunar navigation, star tracker, IMU projects
- Identified several project IDs for future detailed investigation
- Found: TRN projects (94147, 106585), LAPS (146167), IMU projects (93818, 102060, 6960)
- Note: Full comprehensive TechPort search still needed in next iteration

## Systems Added to JSON (10 total)

### TRL 9 (Flight-Proven) - 6 systems

1. **Leonardo SpA AA-STR MKII**
   - Specifications found: Performance (10° FOV, 1024x1024 sensor, 50.7mm focal length)
   - Missing: Mass, power, dimensions, cost
   - Source quality: Good (vendor website, academic paper)
   - Heritage: Suitable for GEO, Earth observation, science, deep space

2. **Terma T3 Star Tracker**
   - Specifications found: Mass (0.35 kg), Power (2W), Dimensions (60x60x100mm)
   - Missing: Cost, turnaround time
   - Source quality: Excellent (vendor datasheet, SatSearch, SatCatalog)
   - Heritage: Microsatellites with >5 year lifetimes

3. **arcsec Sagitta Star Tracker**
   - Specifications found: Performance (2 arcsec accuracy)
   - Missing: Mass, power, dimensions, cost (available on request)
   - Source quality: Good (vendor website)
   - Heritage: CubeSat missions

4. **arcsec Twinkle Star Tracker**
   - Specifications found: Performance (8 arcsec accuracy), size description
   - Missing: Mass, power, dimensions, cost (available on request)
   - Source quality: Good (vendor website)
   - Heritage: CubeSat missions

5. **Berlin Space Technologies ST200**
   - Specifications found: Mass (42g w/o baffle), Power (0.65W), Dimensions, full performance specs
   - Missing: Cost, turnaround time
   - Source quality: Excellent (vendor datasheet, AAC Clyde Space website)
   - Heritage: CubeSat/nanosatellite missions, world's smallest autonomous star tracker

6. **Berlin Space Technologies ST400**
   - Specifications found: Mass (0.28 kg), Power (<0.7W), Performance specs
   - Missing: Dimensions, cost, turnaround time
   - Source quality: Good (SatCatalog, AAC Clyde Space)
   - Heritage: Man-rated missions since 2013, flight heritage since 2016

### TRL 7 (Space-Demonstrated) - 1 system

7. **Blue Origin Blue Moon TRN System**
   - Specifications found: Performance (23m landing precision, target single-digit meters)
   - Missing: Mass, power, dimensions, cost
   - Source quality: Good (NASA sources, academic paper)
   - Heritage: New Shepard suborbital flights (2020, 2021)

### TRL 6 (Relevant Environment Demonstrated) - 1 system

8. **Draper Laboratory SPLICE TRN System**
   - Specifications found: Mass (~4kg for test apparatus), component list, performance (300ft altitude)
   - Missing: Power, dimensions, cost
   - Source quality: Good (Draper announcements, NASA Flight Opportunities)
   - Heritage: Xodiac lander demonstration (Sept 2019)

### TRL 5 (Component Validation) - 1 system

9. **Masten Space Systems SkyMage Beacon Network**
   - Specifications found: Technology description (GPS-like network, layered architecture)
   - Missing: Mass, power, dimensions, all hardware specs
   - Source quality: Good (company announcements, industry news)
   - Heritage: Phase II SBIR, testing planned on Xodiac

## Key Findings

### Star Tracker Market Maturity

**Very Mature (TRL 9, Multiple Vendors):**
- Now documented: 10 different star tracker products from 7 vendors
- Range: From ultra-small CubeSat (ST200: 42g) to larger microsatellite systems
- Accuracy range: 1-30 arcseconds (cross-boresight)
- Power range: 0.65W (ST200) to 2.5W (Redwire)
- Mass range: 42g (ST200) to 475g (Redwire)

**Market Observations:**
- CubeSat market well-served (arcsec, Berlin Space Tech, Blue Canyon, Redwire)
- Microsatellite market well-served (Terma, Leonardo, Berlin Space ST400)
- All vendors offer COTS products
- Most have extensive flight heritage
- Pricing generally not public (request-based)

### TRN System Market Maturity

**TRL 7-8 (Near Commercial):**
- 3 systems now documented: Astrobotic OPAL, Blue Origin, Psionic NDL
- All demonstrated in relevant environments (terrestrial flight tests or suborbital)
- All transitioning to commercial lunar missions via CLPS or Blue Moon

**TRL 6 (Development/Demonstration):**
- Draper SPLICE: Demonstrated but not yet on commercial path
- SPLICE appears more focused on NASA technology development than commercial product

**Key Observation:**
- TRN market consolidating around CLPS vendors (Astrobotic, Blue Origin)
- NDL (Psionic) appears to be primary lidar option for multiple vendors
- Integration pattern: Lander primes integrate TRN, subcontract sensors

### Beacon/Surface Navigation Market

**Limited Development:**
- Only 2 systems documented: Lunar Node 1 (TRL 7), SkyMage (TRL 5)
- Both early stage, not yet commercially available
- Market appears to be waiting for infrastructure investment
- No immediate commercial drivers (unlike TRN for landers)

**Observation:**
- Beacon networks require infrastructure deployment
- Likely government-led (NASA LunaNet, Masten AFWERX contract)
- Commercial viability unclear without anchor tenant

## TechPort Findings (Preliminary)

### Projects Identified for Future Investigation:

**TRN Projects:**
- Project 94147: Terrain Relative Navigation (TRN)
- Project 106585: Terrain Relative Navigation (TRN) System for Landing Applications

**Positioning Systems:**
- Project 146167: LAPS (Lunar Autonomous Positioning System)

**IMU Projects:**
- Project 93818: Ultra Low Noise Compact High Performance IMU
- Project 102060: Low Noise Miniature IMU for Harsh Space Environment
- Project 6960: Stable Tactical-Grade MEMS IMU for Spin-Stabilized applications

**Star Trackers:**
- Project 18466: Interferometric Star Tracker
- Project 33380: Interferometric Star Tracker - Phase II

**Action for Next Iteration:**
- Access project details for TRL, lead organization, status
- May require manual TechPort web interface navigation (JavaScript requirement)
- Estimated 5-10 additional systems from these projects

## Data Quality Assessment

### Excellent Coverage (Full Specs):
- Honeywell MIMU
- Northrop Grumman LN-200S
- Terma T3
- Berlin Space ST200/ST400
- Redwire Star Tracker

### Good Coverage (Most Specs):
- Blue Canyon NST
- Astrobotic OPAL
- Psionic PSNDL
- Blue Origin TRN
- Draper SPLICE TRN

### Limited Coverage (Technology Description Only):
- Leonardo AA-STR MKII
- arcsec Sagitta/Twinkle
- Advanced Space CAPS
- Lunar Node 1
- Masten SkyMage

### Missing Data Patterns:
- **Cost:** Still zero public pricing (0/18 systems)
- **Turnaround time:** Still zero (0/18 systems)
- **Power:** Missing for 9/18 systems (50%)
- **Mass:** Missing for 9/18 systems (50%)

## Challenges Encountered

### Limited Public Specifications
- Many vendors (especially European: Leonardo, arcsec) provide marketing info but not detailed specs
- CubeSat vendors sometimes more transparent (available through CubeSatShop with request-based pricing)
- May need to directly contact vendors or find academic papers

### TechPort Access Continues to Be Limited
- Web scraping requires JavaScript
- Can identify project IDs but not detailed info
- May need manual web interface use or API access
- Alternative: Search for project numbers in academic databases

### TRL Estimation
- Most vendors don't state NASA TRL explicitly
- Flight heritage = TRL 9 (clear)
- Flight demonstration = TRL 7-8 (clear)
- For systems without flight data, TRL harder to estimate
- Masten SkyMage: TRL 5 based on "Phase II development" status

## Progress Tracking

**Systems in JSON:** 18 (10 added this iteration)
**By Category:**
- IMU: 2 systems
- Star Trackers: 10 systems (excellent coverage)
- TRN: 4 systems
- NDL/Lidar: 1 system
- Peer-to-peer navigation: 1 system
- Beacons: 2 systems

**Completion Checklist Progress:**
- TechPort search: 20% (site searches done, detailed investigation needed)
- Vendor coverage: 70% (major vendors covered, some gaps remain)
- Star tracker minimum (8): EXCEEDED (10 systems)
- IMU minimum (5): 2/5 (need more)
- TRN minimum (4): MET (4 systems)
- LiDAR minimum (3): 1/3 (need more)
- Beacon minimum (3): 2/3 (nearly met)
- Total minimum (25): 18/25 (72%)

**Estimated Overall Completion:** 50%

## Next Steps for Iteration 3 (if needed)

### High Priority:

1. **Find additional IMU vendors:**
   - Search NASA TechPort IMU projects (93818, 102060, 6960)
   - Search SatSearch/SatCatalog for space IMUs
   - Look for MEMS IMU vendors (Sensonor, KVH, etc.)

2. **Find additional LiDAR/altimeter vendors:**
   - Search NASA Goddard technologies
   - Check Ommatidia specifications
   - Look for additional NDL-capable vendors

3. **Investigate TechPort projects in detail:**
   - LAPS (146167) - may be architecture not product
   - Interferometric Star Tracker projects
   - IMU development projects

4. **Fill specification gaps:**
   - Academic papers for Leonardo, arcsec specs
   - Contact vendors if needed for key missing data

### Medium Priority:

5. **International vendors:**
   - ESA Moonlight program contractors
   - JAXA LNSS contractors
   - Check ESA/JAXA vendor lists

6. **Additional CLPS vendor navigation systems:**
   - Firefly Aerospace navigation plans
   - Sierra Space navigation technology
   - Lockheed Martin lunar lander navigation

### Expected Outcome Iteration 3:
- Add 3-4 IMU systems to reach minimum
- Add 2-3 LiDAR/altimeter systems to reach minimum
- Add 1-2 additional beacon/positioning systems
- Target: 25-30 total systems

## Notes

- Star tracker category is very well documented (10 systems, exceeds minimum)
- IMU category needs more work (only 2 systems, need 5 minimum)
- TRN category is well covered (4 systems, meets minimum)
- LiDAR/navigation sensors need more research
- Beacon systems limited by market maturity (only 2 exist at TRL 5+)
- Cost/turnaround data likely requires direct vendor contact (may not be feasible for this research)
- TRL 5+ filter successfully maintained across all additions
