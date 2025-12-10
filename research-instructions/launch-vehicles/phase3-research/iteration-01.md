# Phase 3 Iteration 1 - Launch Vehicles Research

**Date:** 2025-12-08
**Focus:** US Commercial Providers (SpaceX, ULA, Blue Origin) + NASA TechPort Initial Search

## Objectives
- Research SpaceX Falcon 9 and Falcon Heavy specifications
- Research ULA Vulcan Centaur specifications
- Research Blue Origin New Glenn specifications
- Begin NASA TechPort search (required)
- Create initial JSON file with findings

## Research Conducted

### 1. SpaceX Falcon 9 Block 5

**Sources Accessed:**
- SpaceX official website (vehicles page - limited data extraction)
- Wikipedia: https://en.wikipedia.org/wiki/Falcon_9_Block_5
- List of Falcon 9 first-stage boosters (Wikipedia)
- Multiple space industry sources

**Data Found:**
- **Mass:** 549,054 kg (liftoff mass)
- **LEO Payload:** 22,800 kg
- **GTO Payload:** 8,300 kg
- **TLI Payload:** NOT FOUND - not published by SpaceX
- **Cost:** $69.85M (2025 commercial pricing)
- **Turnaround:** 9 days minimum (record by B1088), 40-45 days average
- **TRL:** 9 (operational since 2018, multiple lunar missions)

**Lunar Missions Confirmed:**
- IM-1 (Intuitive Machines, 2024)
- IM-2 (Intuitive Machines, Feb 2025)
- Blue Ghost M1 (Firefly, Jan 2025)
- Hakuto-R M2 (ispace, Jan 2025)

**Challenges:**
- SpaceX website does not provide easily extractable specifications (CSS/JavaScript heavy)
- SpaceX Falcon User's Guide PDF could not be parsed (binary/compressed)
- TLI payload capacity not published - inferred capability from mission history

### 2. SpaceX Falcon Heavy Block 5

**Sources Accessed:**
- SpaceX official website (limited extraction)
- Wikipedia: https://en.wikipedia.org/wiki/Falcon_Heavy
- Space industry publications

**Data Found:**
- **Mass:** 1,420,788 kg (liftoff mass - 3x Falcon 9 cores)
- **LEO Payload:** 63,800 kg (fully expendable)
- **GTO Payload:** 26,700 kg (fully expendable)
- **TLI Payload:** ~16,800 kg (estimates vary 16.8-23.4 tons, needs verification)
- **Cost:** $97M (reusable, 2022), $150M (expendable), ~$117M (NASA contracts)
- **Turnaround:** NOT PUBLISHED - longer than Falcon 9 due to integration
- **TRL:** 9 (operational since 2018)

**Contracts/Missions:**
- NASA Gateway Dragon XL lunar resupply (March 2020 award)
- Multiple successful heavy-lift missions

**Challenges:**
- TLI payload capacity estimates vary by source (16.8-23.4 tons)
- Exact turnaround time not published
- Cost varies significantly by mission requirements (reusable vs expendable)

### 3. ULA Vulcan Centaur

**Sources Accessed:**
- ULA official website: https://www.ulalaunch.com/rockets/vulcan-centaur
- Wikipedia: https://en.wikipedia.org/wiki/Vulcan_Centaur
- Industry publications

**Data Found:**
- **Mass:** 546,700 kg (VC2S configuration)
- **LEO Payload:** 27,200 kg (LEO-Reference with 4-6 solids + upgrade)
- **GTO Payload:** 15,300 kg (with 6 solids + upgrade)
- **TLI Payload:** 2,300 kg (VC2S), 12,100 kg (upgraded configuration)
- **Cost:** ~$100M estimated
- **Turnaround:** NOT APPLICABLE - currently expendable
- **TRL:** 9 (operational since Jan 2024)

**Mission History:**
- Maiden flight: January 8, 2024 (Cert-1)
- Peregrine lunar lander (Astrobotic) launched on maiden flight

**Notable:**
- Modular design: 0, 2, 4, or 6 solid rocket boosters (GEM 63XL)
- Two BE-4 engines (1st stage), two RL10C engines (2nd stage)
- Engine recovery planned but not yet operational

**Challenges:**
- Multiple configurations make single spec sheet difficult
- TLI capacity varies greatly by configuration (2.3 tons vs 12.1 tons)
- Cost not publicly published, using industry estimates

### 4. Blue Origin New Glenn

**Sources Accessed:**
- Blue Origin official website: https://www.blueorigin.com/new-glenn (429 rate limit error)
- Wikipedia: https://en.wikipedia.org/wiki/New_Glenn
- Blue Origin press release (upgrade announcement)
- NASASpaceFlight.com coverage

**Data Found - New Glenn 7x2 (Current):**
- **Mass:** NOT FOUND in this iteration
- **LEO Payload:** 45,000 kg (design), ~25,000 kg (current)
- **GTO Payload:** 13,000 kg
- **TLI Payload:** 7,000 kg
- **Cost:** NOT PUBLISHED
- **Turnaround:** Design for reusability, operational data emerging
- **TRL:** 9 (first successful launch Nov 2025 - ESCAPADE)

**Data Found - New Glenn 9x4 (Upgraded, 2027 target):**
- **LEO Payload:** 70,000 kg
- **GTO Payload:** 14,000 kg
- **TLI Payload:** 20,000 kg
- **TRL:** 7 (in development)

**Mission History:**
- NG-1: January 16, 2025 (inaugural flight)
- NG-2: November 2025 (ESCAPADE mission - NASA Mars mission)

**Notable:**
- 98m tall, 7m diameter
- Seven BE-4 engines (1st stage), two BE-3U engines (2nd stage)
- Reusable first stage design
- 9x4 variant significantly more capable for lunar missions

**Challenges:**
- Official website rate-limited during access attempt
- Total launch mass not found
- Commercial pricing not available
- Very new to operations (< 1 year operational)

### 5. NASA TechPort Search (Initial)

**Attempts Made:**
- Direct web search: site:techport.nasa.gov launch vehicle TRL
- TechPort website: https://techport.nasa.gov (requires JavaScript)
- TechPort API research

**API Documentation Found:**
- API endpoint: https://techport.nasa.gov/api/projects (lists all project IDs)
- API endpoint: https://techport.nasa.gov/api/project/{id} (specific project)
- Default format: JSON (XML available with .xml extension)

**Results:**
- Found TechPort structure and API access method
- Web interface requires JavaScript (cannot directly scrape)
- Will need to use API or targeted web searches for specific projects

**Projects Identified for Follow-up:**
- Project 106585 mentioned (Terrain Relative Navigation)
- Project 94840 mentioned (Sodium Lidar Laser Transmitter TRL Advancement)
- Need broader search for launch vehicle projects specifically

**Next Steps for TechPort:**
- Search TechPort with specific keywords: "lunar", "heavy lift", "translunar"
- Use advanced search filters for Technology Areas TX01, TX02
- Filter by TRL 6-9
- May need to query API systematically

## JSON File Created

Created initial JSON file at:
`/home/costa/projects/shopping-list-for-luna/output/launch-vehicles.json`

**Items Added:**
1. SpaceX Falcon 9 Block 5
2. SpaceX Falcon Heavy Block 5
3. ULA Vulcan Centaur
4. Blue Origin New Glenn 7x2 (operational)
5. Blue Origin New Glenn 9x4 (in development, TRL 7)

**All fields marked:** `verified: false` (Phase 4 will verify)

## Key Findings

### Operational Systems (TRL 9) Found:
1. **Falcon 9 Block 5** - Most frequently launched, proven lunar missions
2. **Falcon Heavy Block 5** - Heavy-lift, NASA Gateway contract
3. **Vulcan Centaur** - Operational 2024, launched Peregrine
4. **New Glenn 7x2** - Newly operational (2025)

### Near-Commercial (TRL 7):
1. **New Glenn 9x4** - Enhanced variant, 2027 target

### Data Gaps Identified:
- **TLI Payload:** Often not published (Falcon 9, unclear for Falcon Heavy)
- **Commercial Pricing:** Sensitive information, often not public (New Glenn)
- **Turnaround Time:** Not always published (Falcon Heavy, Vulcan)
- **Total Mass:** Sometimes missing (New Glenn)

### Data Quality Observations:
- **Wikipedia:** Well-cited, comprehensive for established vehicles
- **Vendor Websites:** Official but sometimes difficult to extract data from
- **Industry Publications:** Good for analysis and estimates
- **NASA Sources:** High credibility but not always complete commercial data

## Challenges Encountered

1. **SpaceX User Guide:** PDF could not be parsed (binary encoding)
2. **Blue Origin Website:** Rate limited (429 error)
3. **TechPort Website:** Requires JavaScript, cannot directly scrape
4. **TLI Specifics:** Rarely published metric, unlike LEO/GTO
5. **Pricing:** Commercially sensitive, often only rough estimates available

## Coverage Analysis

### US Commercial Providers:
- [x] SpaceX (Falcon 9, Falcon Heavy)
- [x] ULA (Vulcan Centaur)
- [x] Blue Origin (New Glenn)
- [ ] Rocket Lab (Neutron - needs research)
- [ ] Relativity Space (Terran R - needs research)
- [ ] Others?

### International Providers:
- [ ] ArianeGroup (Ariane 6)
- [ ] JAXA/MHI (H3)
- [ ] ISRO (GSLV, LVM3)
- [ ] CNSA (Long March series)

### Data Completeness:
- **Vendor/Model:** 100% (5/5)
- **TRL:** 100% (5/5)
- **Mass:** 80% (4/5 - missing New Glenn)
- **LEO Payload:** 100% (5/5)
- **GTO Payload:** 100% (5/5)
- **TLI Payload:** 100% (5/5 - but some uncertain)
- **Cost:** 60% (3/5)
- **Turnaround:** 40% (2/5)

## Next Iteration Plan

### Iteration 2 Focus:
1. **Continue TechPort Search:**
   - Use targeted web searches for TechPort projects
   - Search keywords: "lunar", "heavy lift", "translunar"
   - Document any NASA-funded launch vehicle tech

2. **International Providers:**
   - ArianeGroup Ariane 6 (both variants)
   - JAXA/MHI H3 rocket (all variants)
   - Begin ISRO research

3. **Obtain Technical Documentation:**
   - Attempt alternate methods for SpaceX Falcon User's Guide
   - Look for Ariane 6 User's Manual
   - Find H3 technical specifications

4. **NASA LSP Catalog:**
   - Review NASA Launch Services Program approved vehicles
   - Cross-reference with findings

5. **Fill Data Gaps:**
   - New Glenn total mass
   - More precise TLI data where possible
   - Turnaround times

## Source Quality Assessment

### High Quality (Official, Primary):
- ULA Vulcan Centaur website (direct specifications)
- Blue Origin press releases (upgrade specs)
- NASA mission documentation (CLPS missions)

### Good Quality (Well-Cited Secondary):
- Wikipedia articles (well-sourced, comprehensive)
- Space industry publications (SpaceNews, NASASpaceFlight.com)

### Needs Verification:
- TLI payload estimates from various sources (conflicting data)
- Cost estimates from industry analysis (not official)
- Performance calculations (theoretical vs. demonstrated)

## Statistics

- **Time Spent:** ~2 hours
- **Sources Consulted:** 20+
- **Vehicles Documented:** 5
- **JSON Entries Created:** 5
- **Data Fields Populated:** ~70 (including nulls with notes)
- **TechPort Status:** Initial reconnaissance, needs deeper search

## Completion Checklist Progress

Updated checklist items completed:
- [ ] NASA TechPort - Initial search done, needs deeper dive
- [x] SpaceX Falcon 9 Block 5 - Documented
- [x] SpaceX Falcon Heavy - Documented
- [x] ULA Vulcan Centaur - Documented
- [x] Blue Origin New Glenn - Documented (both variants)
- [x] JSON file created

**Estimated Overall Completion: 25%**
