# Phase 1: Preliminary Research - Navigation and Positioning Systems

**Category:** Navigation and Positioning Systems
**Date:** 2025-12-08
**Researcher:** AI Assistant

## Executive Summary

Lunar navigation and positioning systems represent a critical infrastructure gap for sustainable lunar operations. Unlike Earth's mature GPS infrastructure, the Moon currently lacks a comprehensive positioning, navigation, and timing (PNT) network. This preliminary research identifies multiple technology categories at varying TRL levels (5-9), ranging from operational space-proven IMUs to emerging lunar navigation constellations in development.

## Major Technology Categories Identified

### 1. Satellite-Based Navigation Systems

**LunaNet Architecture (NASA)**
- Interoperable framework for lunar communications and navigation
- Provides positioning, navigation, timing (PNT) services
- Uses Delay/Disruption Tolerant Networking (DTN)
- NASA's implementation: Lunar Communication Relay and Navigation System (LCRNS)
- Includes LunaSAR (search and rescue capability)
- Status: Architecture defined, deployment planned for Artemis missions
- **Key insight:** This is a framework/standard, not a single commercial product

**International Lunar Navigation Constellations**
- ESA Moonlight LCNS constellation (target: 2028)
- Japan's Lunar Navigation Satellite System (LNSS) (target: 2028)
- NASA LCRNS (target: 2026+)
- **Key insight:** Multiple competing/complementary approaches emerging

### 2. Surface Beacon Systems

**Lunar Node 1 (LN-1)**
- Developed by NASA Marshall Space Flight Center
- S-band navigation beacon
- Modular design using COTS components
- Successfully tested on Intuitive Machines IM-1 mission (2024)
- **Commercial vendor:** Intuitive Machines (CLPS partner)

**Commercial Beacon Development**
- **Masten Space Systems:** Developing PNT beacon network (GPS-like for Moon)
  - Contract: U.S. Air Force
  - Partner: Leidos (shock-proof beacon enclosures)
  - Status: Development phase

**Advanced Space - CAPS**
- Cislunar Autonomous Positioning System
- Peer-to-peer navigation technology
- TRL progression: 4 → 6 (NASA SBIR Phase 2)
- Successfully demonstrated on CAPSTONE mission (2023)
- Uses relative tracking between vehicles
- **Key advantage:** Reduces ground-based tracking dependence

### 3. Inertial Measurement Units (IMUs)

**Honeywell MIMU (Miniature Inertial Measurement Unit)**
- Ring laser gyroscope (RLG) technology
- 300+ units launched, 1M+ hours on-orbit operation
- Space heritage: GEO, LEO, planetary, deep space
- Radiation hardened for 15-year missions
- Used on Artemis missions III-V
- **TRL:** 9 (flight-proven)
- **Status:** Commercially available

**Northrop Grumman LN-200/LN-200S**
- World's first fiber-optic-gyro-based IMU (1994)
- 35,000+ units delivered to 100+ customers
- Lunar heritage: Clementine mission (1994)
- Mars rovers: Spirit, Opportunity, Curiosity (10+ years operation)
- Hermetically sealed for planetary missions
- **TRL:** 9 (flight-proven)
- **Status:** Commercially available

### 4. Terrain-Relative Navigation (TRN)

**Astrobotic OPAL (Optical Precision Autonomous Landing)**
- Integrates JPL Mars 2020 Lander Vision System technology
- Validated in terrestrial flight tests (Mojave Desert)
- Bolt-on solution with hardware, software, and mapping tools
- Flying on Peregrine and Griffin landers (NASA CLPS)
- **TRL:** Estimated 6-7 (demonstrated in relevant environment)
- **Status:** Commercial product for lunar landers

**Blue Origin TRN**
- Partnership with JPL and NASA JSC
- NASA STMD Tipping Point award
- Flight demonstrated on New Shepard suborbital vehicle
- **TRL:** Estimated 7 (space environment demonstrated)

**Draper Laboratory TRN**
- Part of NASA SPLICE (Safe and Precise Landing Integrated Capabilities Evolution)
- Demonstrated on Xodiac lander vehicle (September 2019)
- **TRL:** Estimated 6 (relevant environment demonstrated)

**OrbitBeyond**
- TRN and Hazard Detection/Avoidance (HDA)
- Described as "most robust systems for planetary landing"
- Status: Under development for lunar missions

### 5. Star Trackers

**Blue Canyon Technologies Nano Star Tracker (NST)**
- 179 units flown on-orbit
- Accuracy: 1 arcsec cross-boresight, 4 arcsec bore-sight
- Update rate: 5 Hz
- Mass: 0.35 kg, Volume: 10 × 6.73 × 5 cm
- Power: Low (specific not stated)
- Lost-in-space solution: 2 seconds
- **TRL:** 9 (flight-proven, extensive heritage)
- **Status:** Commercially available

**Other Commercial Vendors:**
- Redwire Space (compact COTS star tracker: 475g, <2.0W)
- Leonardo SpA (AA-STR MKII)
- Terma (T3 Star Tracker for microsatellites)
- arcsec (Sagitta, Twinkle for CubeSats)
- Berlin Space Technologies (ST200: 42g, 600mW; ST400: 280g, <700mW)

**Key insight:** Star trackers primarily used for attitude determination, not surface positioning

### 6. LiDAR/Laser Navigation

**Navigation Doppler Lidar (NDL)**
- Measures range and velocity simultaneously
- Velocity accuracy: ~2 cm/s
- Distance accuracy: ~2 m
- Activated at several kilometers altitude
- **Commercial vendor:** Psionic (PSNDL - Psionic Space Navigation Doppler Lidar)
- Flying on Astrobotic Peregrine and Intuitive Machines landers
- **TRL:** 7-8 (demonstrated on commercial lunar missions)

**Ommatidia LiDAR**
- Parallel Laser RADAR system
- 128 parallel laser channels
- Long-range 3D vibrometry and metrology
- **Status:** Available for space applications

**NASA Goddard Ocellus 3D Lidar**
- Altimeter mode at ~2 km
- High-resolution (cm-scale) below 200m for landing site assessment
- **Status:** Available for patent licensing

## Industry Landscape Analysis

### Major Vendors by Category

**Inertial Navigation (High TRL, Commercial):**
- Honeywell (MIMU)
- Northrop Grumman (LN-200 series)

**Terrain-Relative Navigation (TRL 6-8):**
- Astrobotic Technology (OPAL)
- Blue Origin (in development)
- Draper Laboratory (SPLICE)
- OrbitBeyond

**Star Trackers (High TRL, Commercial):**
- Blue Canyon Technologies
- Redwire Space
- Leonardo SpA
- Terma
- arcsec
- Berlin Space Technologies

**LiDAR/Laser Navigation (TRL 7-8):**
- Psionic
- Ommatidia
- NASA Goddard (license available)

**Surface Beacons (TRL 5-7):**
- Intuitive Machines (LN-1 carrier)
- Masten Space Systems (in development)
- Advanced Space (CAPS)

**Constellation Developers (TRL 4-6):**
- NASA (LCRNS/LunaNet)
- ESA (Moonlight)
- JAXA (LNSS)

### Technology Maturity Observations

**TRL 9 (Flight-Proven, Commercially Available NOW):**
- Honeywell MIMU
- Northrop Grumman LN-200S
- Blue Canyon Technologies NST
- Multiple other star trackers

**TRL 7-8 (Space-Demonstrated, Near Commercial):**
- Navigation Doppler Lidar (Psionic, on CLPS missions)
- Blue Origin TRN (New Shepard demonstrated)
- Lunar Node 1 beacon (IM-1 demonstrated)

**TRL 6-7 (Relevant Environment Demonstrated):**
- Astrobotic OPAL (terrestrial flight tests)
- Draper TRN (Xodiac demonstration)
- Advanced Space CAPS (CAPSTONE demonstration)

**TRL 5-6 (Development, Approaching Demonstration):**
- Masten beacon network
- Lunar navigation constellations (various)

### Standards and Interoperability

**LunaNet Standards:**
- Not a product but an interoperability framework
- Defines four service types:
  1. Networking (DTN)
  2. Navigation (PNT)
  3. Detection and information (LunaSAR)
  4. Radio/optical science services
- Enables different vendors' systems to work together
- Critical for multi-agency lunar operations

**Augmented Forward Signal (AFS):**
- Standardized communication and navigation signal
- Part of LunaNet framework

## Key Challenges and Industry Quirks

### Infrastructure Gap
- **No existing lunar GPS:** All systems are new development or Earth technology adaptation
- **Constellation deployment required:** Most comprehensive solutions require multiple satellites
- **Ground infrastructure:** Requires Earth-based tracking stations for many architectures

### Technology Convergence
- Multiple complementary approaches needed:
  - Orbital constellations for broad coverage
  - Surface beacons for local precision
  - Onboard sensors (IMU, star tracker) for autonomy
  - TRN for landing precision

### Competitive vs. Cooperative Landscape
- International programs (NASA, ESA, JAXA) pursuing separate constellations
- Some cooperation through LunaNet standards
- Commercial vendors often partnering with multiple agencies

### Commercial Availability Spectrum
- **Available now:** IMUs, star trackers (space-proven COTS)
- **Available for near-term missions:** TRN systems, NDL (via commercial lunar payload programs)
- **Under development:** Beacon networks, orbital constellations (2026-2028 timeframes)

### TRL Complexity
- Same technology may have different TRL for different applications
- Example: TRN demonstrated for Mars (TRL 8-9) but lower TRL for lunar (TRL 6-7)
- Space heritage ≠ lunar heritage (different environment)

## Reliability and State of Industry

### Proven Technologies
- **IMUs:** Extremely reliable (10+ year Mars operations, 1M+ orbit hours)
- **Star trackers:** Mature technology, extensive flight heritage
- Both are "boring" in the best way - proven, reliable, commercially available

### Emerging Technologies
- **TRN:** Rapidly maturing through CLPS program demonstrations
- **Navigation Doppler Lidar:** Moving from NASA technology to commercial products
- **Surface beacons:** Early demonstrations successful (LN-1), more development needed

### Development Stage
- **Lunar navigation constellations:** Multiple programs announced, none operational
- **Timeline risk:** 2026-2028 targets may slip
- **Coordination challenge:** Multiple incompatible systems possible without standards adoption

### Market Dynamics
- **Government-funded development:** Most systems developed via NASA SBIR/STTR, tipping points
- **Commercial transition:** Several technologies transitioning to commercial products
- **CLPS program catalyst:** Accelerating TRN, NDL, beacon development through flight opportunities

## Research Gaps Identified

### Missing Information
1. **Specific TRL ratings:** Most vendors don't publish NASA TRL ratings
2. **Cost data:** Almost no pricing information publicly available
3. **Power requirements:** Limited data for many systems
4. **Mass specifications:** Partial data available
5. **Constellation details:** Architecture defined but satellite specs not detailed

### Need for Deep Dive
1. **TechPort API search:** Required to find TRL ratings and NASA-funded projects
2. **Vendor direct contact:** May be needed for specifications
3. **Conference proceedings:** May contain detailed specifications
4. **NASA SBIR/STTR database:** Track commercial transitions
5. **CLPS mission manifests:** Identify what's actually flying

### Sources to Investigate
- NASA TechPort (comprehensive search required)
- Individual vendor product pages
- NASA SBIR/STTR awards database
- Space conference exhibitor/proceedings (IAC, SmallSat, etc.)
- Academic papers with vendor collaboration
- Patent databases (NASA T2 Portal already identified)

## Key Terminology Variations Found

- **Navigation systems:** PNT, positioning/navigation/timing, lunar GPS, GNSS
- **Inertial navigation:** IMU, IRU (Inertial Reference Unit), MIMU, fiber optic gyro, ring laser gyro
- **Terrain navigation:** TRN, terrain-relative navigation, lander vision system, precision landing
- **Optical navigation:** Star tracker, celestial navigation, attitude determination
- **Laser ranging:** LiDAR, LIDAR, NDL (Navigation Doppler Lidar), laser altimeter
- **Beacons:** PNT beacons, surface navigation aids, lunar nodes
- **Architectures:** LunaNet, Moonlight, LCRNS, LCNS, LNSS

## Preliminary Conclusions

### Market Readiness
- **Ready now:** IMUs and star trackers (TRL 9, commercially available)
- **Ready for near-term missions (2024-2026):** TRN, NDL (via commercial lunar programs)
- **Future infrastructure (2026-2028):** Orbital constellations, beacon networks

### Technology Gaps
- No comprehensive lunar PNT infrastructure exists today
- Current missions rely on Earth-based tracking + onboard sensors
- Multiple complementary systems needed for complete solution

### Commercial Opportunities
- Mature COTS components available (IMU, star tracker)
- Emerging market for integrated navigation solutions
- Infrastructure-as-a-service opportunity (future constellations)

### Priority Technologies for Deep Research
1. **High priority (TRL 5+, available/near-term):**
   - Honeywell MIMU
   - Northrop Grumman LN-200S
   - Blue Canyon Technologies NST
   - Astrobotic OPAL
   - Psionic PSNDL
   - Advanced Space CAPS

2. **Medium priority (TRL 5+, development stage):**
   - Masten beacon network
   - Blue Origin TRN
   - Draper TRN
   - Other star tracker vendors

3. **Lower priority (architecture/framework):**
   - LunaNet (standards, not product)
   - National constellation programs (government-led)

## Next Steps for Phase 2

1. **Develop comprehensive search strategies** covering:
   - TechPort API/web search for all lunar navigation projects
   - Individual vendor product specification pages
   - NASA SBIR/STTR commercial transition tracking
   - Space industry databases (satsearch, satcatalog, etc.)
   - Technical papers and conference proceedings

2. **Create completion checklist** defining when research is thorough:
   - All major vendors contacted or researched
   - TechPort comprehensively searched
   - Specifications documented for TRL 5+ systems
   - Sources verified for all data points

3. **Identify data collection priorities:**
   - TRL ratings (primary filter)
   - Mass, power, performance specifications
   - Cost and availability (if obtainable)
   - Heritage and reliability data

## Sources

- [LunaNet: Crafting the Navigation and Connectivity Framework](https://aerospace.org/article/lunanet-crafting-navigation-and-connectivity-framework-lunar-explorations-next-era)
- [LunaNet: Empowering Artemis with Communications and Navigation Interoperability - NASA](https://www.nasa.gov/humans-in-space/lunanet-empowering-artemis-with-communications-and-navigation-interoperability/)
- [Lunar Communications Relay and Navigation Systems](https://tempo.gsfc.nasa.gov/projects/LCRNS/)
- [LunaNet - Wikipedia](https://en.wikipedia.org/wiki/LunaNet)
- [Honeywell Miniature Inertial Measurement Unit](https://aerospace.honeywell.com/us/en/products-and-services/product/hardware-and-systems/space/miniature-inertial-measurement-unit-mimu)
- [Northrop Grumman LN-200S](https://www.northropgrumman.com/what-we-do/mission-solutions/assured-navigation/ln-200s-inertial-measurement-unit)
- [Navigating Mars and Beyond with LN-200](https://www.northropgrumman.com/space/navigating-mars-and-beyond-with-ln-200-inertial-measurement-units)
- [Impact Story: Terrain Relative Navigation - NASA](https://www.nasa.gov/directorates/stmd/impact-story-terrain-relative-navigation/)
- [Astrobotic TRN Landing Tech Validated](https://www.astrobotic.com/landing-tech-terrain-relative-navigation-validated-ready-for-spaceflight/)
- [Blue Canyon Technologies Nano Star Trackers](https://www.bluecanyontech.com/components/nano-star-trackers/)
- [NASA's Laser Navigation Tech Enables Commercial Lunar Exploration](https://www.nasa.gov/centers-and-facilities/langley/nasas-laser-navigation-tech-enables-commercial-lunar-exploration/)
- [Impact Story: Navigation Doppler Lidar - NASA](https://www.nasa.gov/directorates/stmd/impact-story-navigation-doppler-lidar/)
- [Psionic Navigation Doppler Lidar](https://www.psionicnav.com/news/psionic-navigation-doppler-lidar-precision-navigation-sensor-for-lunar-missions-nasa)
- [Masten to develop beacon navigation system for the Moon](https://www.gpsworld.com/masten-to-develop-beacon-navigation-system-for-the-moon/)
- [NASA Lights 'Beacon' on Moon with Autonomous Navigation System Test](https://www.nasa.gov/centers-and-facilities/marshall/nasa-lights-beacon-on-moon-with-autonomous-navigation-system-test/)
- [CAPS – Advanced Space](https://advancedspace.com/caps/)
- [CAPSTONE To Host Additional Experiments](https://advancedspace.com/capstone-to-host-additional-experiments-to-support-technology-shortfalls-for-cislunar-space/)
- [Technology Readiness Levels - NASA](https://www.nasa.gov/directorates/somd/space-communications-navigation-program/technology-readiness-levels/)
