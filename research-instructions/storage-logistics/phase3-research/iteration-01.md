# Phase 3 Research - Iteration 01

**Date:** 2025-12-08
**Focus:** Initial data collection for operational cargo systems and major cryogenic storage programs
**Time:** ~2 hours

## Search Strategy Executed

This iteration focused on:
1. NASA TechPort exploration (Strategy 1 - partial)
2. ISS Commercial Cargo systems (Strategy 2 - complete)
3. Major cryogenic tank vendors (Strategy 3 - partial)
4. Gateway Program storage systems (Strategy 5 - partial)

## Systems Researched and Added to JSON

### Cargo Modules (TRL 9 - Operational)

1. **SpaceX Dragon 1** (retired 2020, but reference data)
   - Sources: Wikipedia, ESA factsheet
   - Specifications found: Mass, volume (pressurized/unpressurized), power, cargo capacity
   - TRL: 9 (flew operationally 2012-2020)
   - Added to JSON: Yes

2. **SpaceX Dragon 2 Cargo**
   - Sources: Wikipedia, ESA factsheet
   - Specifications found: Similar to Dragon 1 but with improvements
   - TRL: 9 (operational since 2020)
   - Added to JSON: Yes

3. **Northrop Grumman Cygnus** (multiple variants)
   - Sources: Wikipedia, Northrop Grumman website, Space.com
   - Variants: Standard, Enhanced, Enhanced+ (Cygnus XL)
   - Specifications found: Mass, volume, cargo capacity for each variant
   - TRL: 9 (operational since 2013)
   - Added to JSON: All three variants

4. **Sierra Space Shooting Star Cargo Module**
   - Sources: Sierra Space website, Wikipedia
   - Specifications found: Cargo capacity, power (6 kW), dimensions
   - TRL: 8 (first flight scheduled 2025)
   - Added to JSON: Yes

### Cryogenic Storage Systems

5. **Ball Aerospace Cryogenic Tanks**
   - Sources: ResearchGate (Ball Aerospace cryogen storage overview), Ball website
   - Heritage: 239 tanks built since Gemini (1960s)
   - Flight heritage: Apollo, Skylab, Space Shuttle (150+ flights)
   - Specifications: General capabilities documented, specific models need more detail
   - TRL: 9 (extensive flight heritage)
   - Added to JSON: Yes (general product line entry)

6. **Boeing Composite Cryotank (CCTD Program)**
   - Sources: NASA NTRS reports, Boeing press release
   - Tanks built: 2.4m precursor, 5.5m demonstration tank
   - Specifications: 30-39% weight savings vs aluminum, TRL 6-7
   - Status: Ground testing complete, flight demos pending
   - TRL: 6-7
   - Added to JSON: Yes (2.4m and 5.5m variants)

7. **Lockheed Martin Cislunar Transporter**
   - Sources: Payload Space, Lockheed Martin news
   - Purpose: Cryogenic H2/O2 transport and storage for Blue Moon lander
   - Features: Active cooling for long-duration storage
   - TRL: 5-6 (development phase for Artemis)
   - Added to JSON: Yes

### Gateway Program Storage

8. **Maxar PPE - Xenon Storage Tanks**
   - Sources: NASA papers (NTRS), Payload Space, Wikipedia
   - Specifications: Two 825-liter tanks, ~2,500 kg total xenon capacity
   - Mass: 5,000 kg PPE launch mass (half propellant)
   - TRL: 7-8 (in production, launch planned 2025)
   - Added to JSON: Yes

9. **Thales Alenia Space ESPRIT Module**
   - Sources: Thales press releases, ESA announcements
   - Components: Lunar View (refueling), Lunar Link (communications)
   - Updated specs (2024): 4.6m wide, 6.4m long, 10 tonnes mass
   - Features: Xenon and chemical propellant storage
   - TRL: 7-8 (in development for Gateway)
   - Added to JSON: Yes

## Data Gaps Identified

### Missing Information
- **Cost data:** Not publicly available for most hardware systems
  - Cargo services have some pricing ($/kg delivered)
  - Tank hardware costs are proprietary
- **Boil-off rates:** Need specific mission profiles
  - Boeing composite tanks: Not specified in press materials
  - Ball Aerospace: Detailed specs in technical papers (need to access)
- **Detailed masses:** Many systems lack dry mass specifications
- **Power requirements:** Active cooling systems need more data

### Systems Not Yet Researched
- JAXA HTV (reference system)
- ESA ATV (reference system)
- Additional satellite propellant tank manufacturers
- Cryocooler vendors (Creare, Northrop Grumman, etc.)
- Fluid management subsystems (Moog, Parker Hannifin, etc.)
- NASA TechPort comprehensive search (only preliminary done)
- SBIR/STTR commercial transitions

## Issues Encountered

1. **NASA TechPort access limitation:**
   - Web interface requires JavaScript
   - WebFetch tool cannot access dynamic content
   - Solution: Use web search for specific project IDs, then access project pages

2. **Conflicting specifications:**
   - Dragon 1 vs Dragon 2 specs sometimes conflated in sources
   - Cygnus variants not always clearly labeled (Standard vs Enhanced vs XL)
   - Solution: Document all variants separately with source-specific data

3. **TRL assessment challenges:**
   - Boeing CCTD: Sources say "TRL 5-6" and "TRL 6-7" - using range
   - Lockheed Cislunar: TRL not explicitly stated, inferred from development status

## Next Steps for Iteration 02

1. Search for additional cryogenic tank vendors from satellite industry
2. Research cryocooler manufacturers (for ZBO systems)
3. Deep dive into NASA SBIR/STTR awards for storage tech
4. Find JAXA HTV and ESA ATV reference specifications
5. Search for fluid management subsystem vendors
6. Look for emerging ISRU water storage companies (TRL 5+ only)
7. Cross-reference all vendor data against multiple sources

## Statistics

- **Systems added to JSON:** 9 (with some variants counted separately = 12 entries)
- **Sources consulted:** ~25 unique URLs
- **TRL distribution:**
  - TRL 9: 6 systems (operational cargo + Ball heritage)
  - TRL 8: 2 systems (Shooting Star, ESPRIT)
  - TRL 7-8: 1 system (Maxar PPE)
  - TRL 6-7: 1 system (Boeing CCTD)
  - TRL 5-6: 1 system (Lockheed Cislunar Transporter)

## Sources Used This Iteration

### Cargo Systems
- https://en.wikipedia.org/wiki/SpaceX_Dragon
- https://en.wikipedia.org/wiki/SpaceX_Dragon_2
- https://wsn.spaceflight.esa.int/docs/Factsheets/28%20SpaceXDragon%20LR.pdf
- https://en.wikipedia.org/wiki/Cygnus_(spacecraft)
- https://www.northropgrumman.com/space/cygnus-spacecraft
- https://www.space.com/cygnus-spacecraft.html
- https://www.sierraspace.com/dream-chaser-spaceplane/shooting-star-cargo-module/
- https://en.wikipedia.org/wiki/Dream_Chaser

### Cryogenic Storage
- https://www.researchgate.net/publication/287506995_An_overview_of_Ball_Aerospace_cryogen_storage_and_delivery_systems
- https://www.ball.com/aerospace/capabilities/technologies-components/cryogenics
- https://boeing.mediaroom.com/news-releases-statements?item=130996
- https://www.nasa.gov/directorates/stmd/composite-cryotank-technologies-and-demonstration-cctd/
- https://ntrs.nasa.gov/citations/20170012407
- https://payloadspace.com/sustainable-space-exploration-lockheed-martins-vision-for-a-water-based-lunar-architecture/

### Gateway Program
- https://payloadspace.com/an-electric-solar-powered-future-maxar-space-systems-ppe-to-propel-nasas-artemis-gateway/
- https://en.wikipedia.org/wiki/Power_and_Propulsion_Element
- https://www.nasa.gov/missions/artemis/gateway/a-powerhouse-in-deep-space-gateways-power-and-propulsion-element/
- https://www.thalesaleniaspace.com/en/press-releases/esprit-module-lunar-gateway-orbital-outpost-set-significant-upgrade

### NASA Resources
- https://www.nasa.gov/wp-content/uploads/2024/11/lameen-cfmpp-tagged.pdf
- https://ntrs.nasa.gov/citations/20230010497
- https://techport.nasa.gov/projects/94977 (attempted access)

---

**Iteration 01 Complete**
**Next:** Iteration 02 - Cryocoolers, additional tank vendors, SBIR/STTR search
