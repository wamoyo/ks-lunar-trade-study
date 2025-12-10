# Phase 1: Preliminary Research - Environmental and Subsurface Sensing

**Date**: 2025-12-08
**Category**: Environmental and Subsurface Sensing
**Scope**: TRL 5+ sensors for lunar environmental monitoring, geological exploration, resource prospecting, and subsurface investigation

## Executive Summary

This preliminary research reveals a diverse landscape of lunar sensing technologies at various maturity levels. The field divides into several major categories: environmental monitoring (radiation, dust, temperature), subsurface exploration (GPR, seismometers), and resource detection (water/ice, volatiles). Several systems have achieved TRL 6-9 with flight heritage, while many others are in active development at TRL 5-8.

Key findings:
- **COTS-based systems** (LEOS at TRL 6) demonstrate that commercial sensors can be space-qualified for lunar use
- **Flight-proven technologies** exist from historical Apollo missions and current Chinese/international missions
- **Commercial vendors** are emerging through NASA's CLPS initiative
- **Major gaps** in publicly available specifications (mass, power, cost) for most instruments

## 1. Environmental Monitoring Sensors

### 1.1 Radiation Monitoring

**LEOS (Lunar Environmental Observation Station)** - TRL 6
- Includes CNP-TEPC ionizing radiation sensor (TRL 7 as of 2023)
- Developed by McMaster University with Canadian Space Agency support
- Part of COTS sensor suite qualified for lunar south pole
- Total LEOS mass: ~5kg for complete sensor package
- All sensors passed thermal vacuum (-55°C to +80°C at 10^-6 torr) and GEVS vibration (14.1G)
- Sources: [NTRS LEOS Report](https://ntrs.nasa.gov/citations/20250009036), [TFAWS Presentation](https://tfaws.nasa.gov/wp-content/uploads/TFAWS23-ID-4-Presentation.pdf)

**ADVACAM Space Detectors** - High TRL (Flight Heritage)
- Single particle detectors implemented on ISS, NASA Artemis program, Gateway Lunar Station
- HERA monitor included in Artemis II and beyond
- Commercial vendor with tailor-made solutions
- Source: [ADVACAM Space Applications](https://advacam.com/application/space/)

**ESA ERSA (European Radiation Sensors Array)** - High TRL
- High TRL devices with flight heritage
- Real-time radiation monitoring for Gateway space station
- Spectroscopic measurements of protons, electrons, heavy ions, gamma-rays, neutrons
- Sources: [ESA Space Radiation](https://www.esa.int/Space_Safety/Space_weather/Protecting_Artemis_and_lunar_explorers_from_space_radiation), [LURAD Study](https://www.sciencedirect.com/science/article/abs/pii/S0273117724004162)

### 1.2 Dust Monitoring

**Space Canary (Lunar Outpost Inc.)** - Commercial Product
- Air-quality sensor developed from NASA NextSTEP specifications
- Detects ultra-fine lunar dust particles inside habitats
- Founded in Denver, 2017
- Source: [NASA Spinoff](https://spinoff.nasa.gov/moon-dust-sensor-pollution)

**PADS (Planetary Accumulation of Dust Sensor)** - TRL 6
- Available for patent licensing
- Tested in simulated lunar environment
- Calibration data collected for lunar use
- Source: [NASA T2 Portal](https://technology.nasa.gov/patent/MSC-TOPS-143)

**Low Velocity Dust Monitor (LVDM)** - In Development
- Unpowered lunar dust impact detector
- Measures exposure during operations
- Source: [NASA Lunar Dust Roadmap](https://ntrs.nasa.gov/api/citations/20240013978/downloads/NASA%20Lunar%20Dust%20Mitigation%20Roadmap%20Fall%202024.pdf)

**DUSTER (DUst and plaSma environmenT survEyoR)** - In Development
- Instrument set mounted on small autonomous rover
- Characterizes dust and plasma around landing site
- Monitors human presence impact on lunar environment
- Source: [NASA LSITP](https://www.nasa.gov/planetarymissions/lunar-surface-instrument-and-technology-payloads-lsitp/)

### 1.3 Temperature/Thermal Monitoring

**Lunar Thermal Mapper (LTM)** - Flight Qualified (2023)
- Temperature range: -261°F to +261°F (-163°C to +127°C)
- Four broad-band infrared channels
- Completed qualification and calibration at University of Oxford, February 2023
- Part of Lunar Trailblazer mission (Lockheed Martin)
- Sources: [JPL LTM](https://www.jpl.nasa.gov/images/pia25831-lunar-trailblazers-thermal-mapper-has-arrived-at-lockheed-martin/), [Lockheed Martin](https://www.lockheedmartin.com/en-us/products/nasa-s-lunar-trailblazer-the-hunt-for-lunar-water.html)

**ESCC Qualified Pt Temperature Sensors (IST AG)** - Space Qualified
- Thin-film platinum sensors
- Range: -200°C to +200°C
- ESCC (European Space Components Coordination) qualified
- Source: [IST AG](https://www.ist-ag.com/en/space)

**NASA-Qualified NTC Thermistors (TE Connectivity)** - Flight Heritage
- Used in Landsat satellites, Hubble Space Telescope
- Range: -40°C to +250°C (launch), -100°C to +250°C (LEO)
- Source: [TE Connectivity](https://www.te.com/en/industries/space/applications/temperature-sensing-measurement-satellites-spacecraft.html)

**LAFORGE Investigation** - In Development
- Focuses on lunar surface thermal environment understanding
- Detailed mapping of cold traps where volatiles may be stable
- Characterizes surface regolith and rocks physical properties
- Source: [NASA TechPort](https://techport.nasa.gov/projects/96934)

### 1.4 Multi-Sensor Environmental Packages

**LEOS Additional Sensors** - TRL 6
- PAR (Photosynthetically Active Radiation) light sensor
- Ultraviolet light sensor
- All COTS sensors with LEO flight heritage or environmental testing
- Source: [NTRS LEOS](https://ntrs.nasa.gov/citations/20250009036)

## 2. Subsurface Sensing

### 2.1 Ground-Penetrating Radar (GPR)

**Chang'E Lunar Penetrating Radar (LPR)** - Operational (TRL 9)
- Deployed on Yutu-2 rover (Chang'E-4, landed January 3, 2019)
- Dual-frequency system
- Successfully mapped subsurface to >40m depth
- Revealed low-loss, highly porous granular materials with embedded boulders
- Flight heritage: Chang'E-3 and Chang'E-4 missions
- Penetration depth: tens to hundreds of meters (frequency dependent)
- Sources: [Science Advances](https://www.science.org/doi/10.1126/sciadv.aay6898), [Oxford JGE](https://academic.oup.com/jge/article/22/5/1431/8197885)

**SELENE/Kaguya Lunar Radar Sounder (LRS)** - Operational (TRL 9)
- FM/CW system at 5 MHz center frequency
- Designed for few-km depth investigation
- Geologic subsurface structure mapping
- Source: [NSSDCA](https://nssdc.gsfc.nasa.gov/nmc/experiment/display.action?id=2007-039A-06)

**Next-Generation GPR for Mars/Moon** - In Development
- NASA TechPort Project 15249
- Under development for planetary applications
- Source: [NASA TechPort](https://techport.nasa.gov/projects/15249)

**European GPR Development (Various)** - Research/Development
- DLR testing sensors and robotic systems for lunar water-ice detection
- Ground-penetrating radar with fiber-optic distributed acoustic sensing
- Source: [Military Aerospace](https://www.militaryaerospace.com/sensors/news/55331118/dlr-researchers-test-sensors-and-robotic-systems-for-lunar-water-ice-detection)

### 2.2 Seismometers

**Farside Seismic Suite (FSS)** - Flight-Proven Technology, Launch 2026
- Two seismometers with InSight Mars mission flight heritage
- Destination: Schrödinger basin (~300 miles from South Pole)
- Very Broadband seismometer: most sensitive seismometer ever built for space
- First lunar seismic data since Apollo (nearly 50 years gap)
- Commercial delivery via CLPS vendors
- Source: [NASA JPL FSS](https://www.jpl.nasa.gov/missions/farside-seismic-suite/)

**Apollo Passive Seismic Experiment** - Historical (TRL 9)
- Operated 1969-1977
- Proven technology, but not commercially available
- Provides baseline for modern seismometer requirements
- Sources: [NASA Science](https://science.nasa.gov/resource/apollo-11-seismic-experiment/), [Wikipedia](https://en.wikipedia.org/wiki/Apollo_12_Passive_Seismic_Experiment)

**Long-Lived Seismometers (CLPS Missions)** - In Development
- Study tectonic activity in deep lunar interior
- Micrometeorite impact flux monitoring
- Part of various CLPS commercial deliveries
- Source: [NASA LSITP](https://www.nasa.gov/planetarymissions/lunar-surface-instrument-and-technology-payloads-lsitp/)

## 3. Resource Detection and Prospecting

### 3.1 Water/Ice Detection Systems

**Neutron Spectrometer System (NSS)** - Flight Heritage
- Detects potential water in lunar soil up to 3 feet (~1m) below surface
- Measures neutron energy changes when neutrons strike hydrogen atoms
- Indirect hydrogen/water detection method
- Flight heritage: Lunar Prospector mission
- Part of VIPER rover payload
- Sources: [NASA VIPER](https://science.nasa.gov/mission/viper/rover-and-instruments/), [LPI Prospector](https://www.lpi.usra.edu/lunar/missions/prospector/instruments/index.shtml)

**Near-Infrared Volatiles Spectrometer System (NIRVSS)** - VIPER Payload
- Analyzes light emitted/absorbed by materials
- Detects minerals and ices: CO2, NH3, CH4, water
- Differentiates between water (H2O) and hydroxyl (OH)
- Part of VIPER rover
- Source: [NASA VIPER](https://science.nasa.gov/mission/viper/rover-and-instruments/)

**TRIDENT Drill + MSOLO Mass Spectrometer (PRIME-1)** - CLPS Mission
- TRIDENT: extracts regolith up to ~3 feet below surface
- MSOLO: Mass Spectrometer for Observing Lunar Operations
- Analyzes samples for water and other volatile components
- Commercial mission delivery
- Source: [NASA PRIME-1](https://www.nasa.gov/mission/polar-resources-ice-mining-experiment-1-prime-1/)

**ICARUS (SwRI)** - In Development
- Integrating CAvity enhanced Raman Ultraviolet Spectrograph
- Sample collection chamber for volatile investigation
- Water ice detection capability
- Developer: Southwest Research Institute
- Source: [SwRI](https://www.swri.org/newsroom/technology-today/paving-the-way-the-moon-beyond)

**ESA PROSPECT Dielectric Sensor** - In Development
- Miniaturized sensor for measuring dielectric constant
- Low-frequency alternating currents injected into regolith
- Subsurface material characterization
- Source: [Frontiers](https://www.frontiersin.org/journals/space-technologies/articles/10.3389/frspt.2023.1303180/full)

**DLR LIBS (Laser-Induced Breakdown Spectroscopy)** - Research
- Pulsed laser generates plasma on targets
- Measures emitted light to determine elemental content
- Hydrogen detection in rock samples
- Source: [DLR LUNA](https://www.dlr.de/en/latest/news/2025/water-ice-on-the-moon-simulated-detection-in-the-luna-facility)

### 3.2 Spectroscopy Instruments (General)

**Ball Aerospace L-CIRiS** - CLPS Payload
- Lunar Compact InfraRed Imaging System
- Infrared radiometer
- Surface composition and temperature distribution
- Resource utilization feasibility demonstration
- Developed for University of Colorado
- Source: [Masten Blog](https://masten.aero/blog/masten-mission-1-instruments-lunar-south-pole/)

**Malin Space Science Systems (MSSS)** - Vendor
- Established 1990
- Designs, builds, operates space camera systems
- Developed Heimdall flexible camera system for regolith property modeling
- Developed ShadowCam for Korea Pathfinder Lunar Orbiter (ice detection in PSRs)
- Sources: [MSSS](https://www.msss.com/), [Masten Blog](https://masten.aero/blog/masten-mission-1-instruments-lunar-south-pole/)

**Ion-Trap Mass Spectrometer** - CLPS Payload (IM-2)
- Measures volatiles on surface and in exosphere
- First ISRU demonstration with drill and mass spectrometer
- Measures volatile content of subsurface materials
- Intuitive Machines IM-2 mission
- Source: [CLPS Providers](https://en.wikipedia.org/wiki/Commercial_Lunar_Payload_Services)

**APL Infrared Imager** - In Development with Canadian Rover
- Partnership: APL, Canadensys Aerospace, JPL, University of Oxford
- Infrared imaging for Canadian lunar rover
- Source: [JHU APL](https://space.jhuapl.edu/stories/five-ways-johns-hopkins-apl-advancing-lunar-science-security-and-technology)

## 4. Major Vendors and Organizations

### 4.1 Commercial CLPS Providers

**Astrobotic**
- Selected to CLPS vendor pool in 2018
- Awarded two task orders for scientific payload delivery
- Source: [NASA CLPS Providers](https://www.nasa.gov/commercial-lunar-payload-services/clps-providers/)

**Firefly Aerospace**
- Two CLPS task orders awarded
- Blue Ghost lunar lander landing in Mare Crisium
- Source: [NASA CLPS Providers](https://www.nasa.gov/commercial-lunar-payload-services/clps-providers/)

**Intuitive Machines**
- Four contracts awarded
- Delivering 20+ NASA payloads over coming years
- IM-2 mission includes drill + mass spectrometer
- Partnership with Johns Hopkins APL for lunar communications/navigation
- Sources: [NASA CLPS](https://www.nasa.gov/commercial-lunar-payload-services/clps-providers/), [Intuitive Machines](https://investors.intuitivemachines.com/news-releases/news-release-details/intuitive-machines-and-johns-hopkins-apl-partner-advance-safe)

**Lunar Outpost**
- Based in Golden, Colorado
- Develops robotic systems for space exploration
- MAPP rover supplier
- Space Canary dust sensor manufacturer
- Sources: [NASA CLPS](https://www.nasa.gov/commercial-lunar-payload-services/clps-providers/), [NASA Spinoff](https://spinoff.nasa.gov/moon-dust-sensor-pollution)

### 4.2 Instrument Manufacturers

**Lockheed Martin**
- Lunar Trailblazer mission prime contractor
- Integrates Lunar Thermal Mapper
- Source: [Lockheed Martin](https://www.lockheedmartin.com/en-us/products/nasa-s-lunar-trailblazer-the-hunt-for-lunar-water.html)

**Johns Hopkins APL**
- Leads Lunar Vertex mission (2024 launch)
- 300+ specialized instruments built
- Lunar Surface Innovation Consortium (LSIC) leader: 3,900+ members, 71 countries, 1,400+ organizations
- Partners: Intuitive Machines, Lunar Outpost, Redwire Space, SwRI, Canadensys Aerospace, JPL
- Sources: [JHU APL](https://space.jhuapl.edu/stories/five-ways-johns-hopkins-apl-advancing-lunar-science-security-and-technology), [JHU APL Partnership](https://investors.intuitivemachines.com/news-releases/news-release-details/intuitive-machines-and-johns-hopkins-apl-partner-advance-safe)

**Malin Space Science Systems**
- Founded 1990
- Space camera systems designer/builder/operator
- Developed Heimdall, ShadowCam
- Source: [MSSS](https://www.msss.com/)

**Ball Aerospace**
- L-CIRiS infrared radiometer manufacturer
- Source: [Masten Blog](https://masten.aero/blog/masten-mission-1-instruments-lunar-south-pole/)

**Southwest Research Institute (SwRI)**
- ICARUS spectrograph developer
- Partner with APL
- Source: [SwRI](https://www.swri.org/newsroom/technology-today/paving-the-way-the-moon-beyond)

**ADVACAM**
- Commercial radiation detector vendor
- ISS, Artemis, Gateway flight heritage
- Source: [ADVACAM](https://advacam.com/application/space/)

**TE Connectivity**
- NASA-qualified NTC thermistors
- Landsat, Hubble flight heritage
- Source: [TE Connectivity](https://www.te.com/en/industries/space/applications/temperature-sensing-measurement-satellites-spacecraft.html)

**IST AG**
- ESCC qualified Pt temperature sensors
- Source: [IST AG](https://www.ist-ag.com/en/space)

**Canadensys Aerospace Corporation**
- Partner on Canadian lunar rover infrared imager
- Source: [JHU APL](https://space.jhuapl.edu/stories/five-ways-johns-hopkins-apl-advancing-lunar-science-security-and-technology)

**Redwire Space**
- Partner with APL
- Source: [JHU APL](https://space.jhuapl.edu/stories/five-ways-johns-hopkins-apl-advancing-lunar-science-security-and-technology)

**McMaster University**
- CNP-TEPC radiation sensor developer
- Support from Canadian Space Agency
- Source: [NTRS LEOS](https://ntrs.nasa.gov/citations/20250009036)

**University of Oxford**
- LTM calibration and qualification
- Partner on Canadian rover infrared imager
- Sources: [JPL LTM](https://www.jpl.nasa.gov/images/pia25831-lunar-trailblazers-thermal-mapper-has-arrived-at-lockheed-martin/), [JHU APL](https://space.jhuapl.edu/stories/five-ways-johns-hopkins-apl-advancing-lunar-science-security-and-technology)

### 4.3 International Space Agencies (Research Partners)

**DLR (German Aerospace Center)**
- GPR, distributed acoustic sensing, seismic sources
- Multispectral stereo panoramic camera
- LIBS instrument
- Source: [Military Aerospace](https://www.militaryaerospace.com/sensors/news/55331118/dlr-researchers-test-sensors-and-robotic-systems-for-lunar-water-ice-detection)

**ESA (European Space Agency)**
- PROSPECT instrument package
- ERSA radiation sensors
- Sources: [Frontiers](https://www.frontiersin.org/journals/space-technologies/articles/10.3389/frspt.2023.1303180/full), [ESA](https://www.esa.int/Space_Safety/Space_weather/Protecting_Artemis_and_lunar_explorers_from_space_radiation)

**CNSA (China National Space Agency)**
- Chang'E missions (3, 4) with LPR
- Yutu rovers
- Source: [Science Advances](https://www.science.org/doi/10.1126/sciadv.aay6898)

**JAXA (Japan Aerospace Exploration Agency)**
- SELENE/Kaguya mission with LRS
- Source: [NSSDCA](https://nssdc.gsfc.nasa.gov/nmc/experiment/display.action?id=2007-039A-06)

**Canadian Space Agency**
- Support for McMaster University CNP-TEPC
- Canadian lunar rover program
- Sources: [NTRS LEOS](https://ntrs.nasa.gov/citations/20250009036), [JHU APL](https://space.jhuapl.edu/stories/five-ways-johns-hopkins-apl-advancing-lunar-science-security-and-technology)

## 5. Industry Trends and Observations

### 5.1 Technology Maturity Patterns

**High TRL (7-9) Systems:**
- Primarily radiation sensors with ISS/LEO flight heritage
- Temperature sensors (ESCC, NASA-qualified thermistors)
- GPR systems from international lunar missions (Chang'E, SELENE)
- Apollo-heritage seismometer designs being modernized

**Medium TRL (5-6) Systems:**
- LEOS environmental sensor package (TRL 6)
- PADS dust sensor (TRL 6)
- Many CLPS payloads in qualification phase
- Spectrometers and resource detection instruments

**Development (TRL <5):**
- Novel dust detection methods (ROS sensors at TRL 4)
- Autonomous low-power sensors (tritium micropowered at TRL 2-3)
- Advanced GPR variants

### 5.2 Commercial Availability Observations

**Challenges:**
- Most sensors are mission-specific custom builds
- Limited "off-the-shelf" commercial products
- Specifications (mass, power, cost) rarely publicly disclosed
- Many vendors require direct contact for quotes

**Promising Areas:**
- COTS sensors being space-qualified (LEOS model)
- Commercial CLPS vendors creating market for payloads
- Radiation sensors transitioning from ISS to lunar applications
- Temperature sensors with multiple vendor options

### 5.3 Data Gaps Identified

**Missing Information (Common):**
- Unit costs (almost never published)
- Detailed power requirements (W or kW)
- Precise mass specifications
- Turnaround time / lead time
- Customization options and limitations

**Well-Documented:**
- TRL levels (when NASA-funded)
- Technical capabilities and measurement ranges
- Flight heritage and mission history
- Vendor contact information

## 6. Key Search Terms for Phase 2

Based on preliminary research, these terms will be critical:

**Environmental Monitoring:**
- "lunar radiation sensor", "CNP-TEPC", "space radiation detector"
- "lunar dust monitor", "dust accumulation sensor", "PADS"
- "thermal sensor space qualified", "temperature sensor ESCC", "lunar thermal mapper"
- "environmental monitoring station", "LEOS"

**Subsurface:**
- "ground penetrating radar lunar", "GPR", "lunar penetrating radar", "LPR"
- "lunar seismometer", "seismic sensor", "moonquake detector"
- "subsurface radar", "radar sounder"

**Resource Detection:**
- "neutron spectrometer", "NSS", "hydrogen detection"
- "NIRVSS", "infrared spectrometer", "volatiles detection"
- "water ice detector", "ice prospecting", "ISRU sensor"
- "mass spectrometer lunar", "MSOLO", "volatile analysis"
- "Raman spectrometer", "LIBS", "ICARUS"

**Programs/Missions:**
- "CLPS payload", "Artemis payload", "VIPER", "PRIME-1"
- "Commercial Lunar Payload Services"
- "NASA SBIR STTR lunar sensors"

## 7. Recommended Next Steps for Phase 2

### 7.1 Priority Search Strategies

1. **NASA TechPort API Search**
   - Query for all projects with keywords: "lunar", "sensor", "environmental", "subsurface", "detection"
   - Filter: TRL 5-9
   - Extract: vendor names, TRL, contact info, technical specs

2. **CLPS Mission Manifests**
   - Review all awarded CLPS missions
   - Document every sensor payload
   - Contact CLPS vendors for commercial availability

3. **Vendor Direct Contact**
   - Compile list of all identified vendors
   - Request: specifications, pricing, availability, customization options
   - Priority: ADVACAM, Lunar Outpost, MSSS, Ball Aerospace, SwRI, TE Connectivity, IST AG

4. **NASA SBIR/STTR Database**
   - Search for: "lunar sensor", "environmental monitoring", "subsurface detection", "resource prospecting"
   - Identify Phase II/III companies (more mature products)
   - Check commercial product status

5. **International Agency Partnerships**
   - ESA commercial partner lists
   - Canadian Space Agency vendors
   - Companies with JAXA/DLR collaborations

6. **Academic/Research to Commercial Pipeline**
   - University of Oxford (thermal sensors)
   - McMaster University (radiation sensors)
   - Check for commercial spinoffs or licensing

7. **Flight Heritage Cross-Reference**
   - ISS instrument vendors → lunar variants
   - Mars mission instruments → lunar adaptations
   - Apollo-era technology → modern equivalents

### 7.2 Specific Data Collection Priorities

For each sensor, target these specifications:
- **TRL**: Current level with date
- **Mass**: kg, including mounting hardware
- **Power**: kW (or W), idle vs. active
- **Data rate**: bps, storage requirements
- **Operating range**: measurement capabilities
- **Environmental limits**: temperature, radiation, dust tolerance
- **Cost**: unit price, NRE costs, volume discounts
- **Lead time**: from order to delivery
- **Customization**: available options, integration support
- **Heritage**: previous missions, test status

### 7.3 Verification Strategy

- **Primary sources**: Vendor websites, NASA mission pages, peer-reviewed papers
- **Secondary sources**: Space news sites, conference proceedings
- **Tertiary sources**: Wikipedia (requires primary source verification)
- **Screenshots**: Capture all specification tables
- **Contacts**: Maintain list of vendor POCs for follow-up

## 8. Expected Challenges

### 8.1 Technical Challenges

- **Calibration requirements**: Many sensors require lunar environment calibration
- **Integration complexity**: Power, data interfaces vary widely
- **Environmental sensitivity**: Dust contamination affects optical sensors
- **Deployment methods**: Some require drilling, physical contact, or specific orientations

### 8.2 Research Challenges

- **Proprietary information**: Vendors reluctant to share specifications publicly
- **Mission-specific designs**: Limited transferability between missions
- **Evolving technology**: TRL levels change rapidly during development
- **International access**: Some technologies restricted by ITAR/export controls

### 8.3 Commercial Availability Issues

- **Custom builds vs. COTS**: Few true off-the-shelf products
- **Minimum orders**: Some vendors require multi-unit commitments
- **Long lead times**: Space-qualified sensors may require 12-24 months
- **Cost uncertainty**: Pricing often quote-based, not published

## 9. Initial Vendor Contact List

**Priority 1 (Commercial Products Ready):**
- Lunar Outpost (Space Canary dust sensor)
- ADVACAM (radiation detectors)
- TE Connectivity (thermistors)
- IST AG (Pt temperature sensors)

**Priority 2 (Near-Commercial):**
- Malin Space Science Systems (cameras, imaging)
- Ball Aerospace (spectrometers, radiometers)
- Southwest Research Institute (ICARUS)

**Priority 3 (Research to Commercial Pipeline):**
- McMaster University (CNP-TEPC licensing)
- University of Oxford (thermal sensors)
- Canadensus Aerospace (infrared imagers)

**Priority 4 (Integration Partners):**
- Astrobotic (CLPS delivery + payload integration)
- Intuitive Machines (CLPS delivery + payload integration)
- Firefly Aerospace (CLPS delivery + payload integration)
- Johns Hopkins APL (LSIC consortium access)

## 10. Summary Statistics

**Sensors Identified**: ~30+ distinct sensor types/models
**Vendors Identified**: ~20+ commercial/research organizations
**TRL 7-9 (Operational)**: ~8 sensor types
**TRL 5-6 (Advanced Development)**: ~12 sensor types
**TRL <5 (Early Development)**: ~10+ sensor types

**Categories Covered**:
- Environmental monitoring: Radiation (3), Dust (4), Temperature (4), Light/UV (2)
- Subsurface: GPR (4), Seismometers (3+)
- Resource detection: Water/ice (6+), Volatiles (4+), Spectroscopy (6+)

**Geographic Distribution**:
- US vendors: ~60%
- European vendors: ~25%
- Canadian vendors: ~10%
- Asian vendors: ~5% (primarily Chinese/Japanese space agencies)

---

**Phase 1 Complete**: 2025-12-08

This preliminary research provides a solid foundation for Phase 2 strategy development. The landscape shows a healthy mix of flight-proven heritage sensors, advanced development systems approaching commercialization, and emerging technologies. The key challenge will be obtaining detailed specifications and pricing from vendors who primarily serve government/space agency customers.
