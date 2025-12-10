# Phase 3 Research - Iteration 01

**Date:** 2025-12-08
**Researcher:** Claude (Autonomous)
**Focus:** NASA TechPort, Known Vendors Deep Dive, Initial Vendor Discovery

## Strategies Executed This Iteration

### Strategy 1: NASA TechPort Deep Dive (Partial)
- **Search terms used:**
  - "lunar rover TRL"
  - "moon rover technology readiness level"
  - "lunar mobility autonomous"

- **Limitation encountered:** TechPort website requires JavaScript, cannot fully access via WebFetch
- **Workaround:** Used site-specific Google searches to identify projects

- **Projects Identified:**
  - High TRL Rover Lidar (HTRL) - Project 116315
  - Reliable Autonomous Surface Mobility (RASM) - Project 10325
  - Dynamically Reconfigurable Software and Mobility Architectures (DRSOMA) - Project 113185
  - Tethered Power Systems for Lunar Mobility (TYMPO) - Project 116287
  - Lunar Autonomous Positioning System (LAPS) - Project 146167
  - NeuRover (Neutron Detector Rover) - Project 102145
  - Deployable Lunar Hopper - Project 116372

- **Note:** These are primarily enabling technology projects, not complete commercial rover systems. They identify technology providers rather than turnkey rover vendors.

### Known Vendor Deep Dive
Searched for detailed specifications on vendors identified in Phase 1:

#### Completed:
1. **Intuitive Machines - Moon RACER**
   - Found: Dimensions, payload capacity, speed, slope capability
   - Missing: Total mass, specific power output (kW), TRL, cost

2. **Astrolab - FLEX Rover**
   - Found: Payload capacity (1600kg), total mass (~2 tonnes), speed (20 km/h), power system (solar + Li-ion)
   - Missing: Specific TRL rating, cost, detailed power specs

3. **Lunar Outpost - Eagle LTV**
   - Found: Payload (800kg), total loaded mass (>1800kg), power system (GM NCMA batteries)
   - Missing: Specific TRL rating, cost, detailed power output

4. **JAXA/Toyota - Lunar Cruiser**
   - Found: Dimensions (6.0m x 5.2m x 3.8m), range (10,000km), power (regenerative fuel cells), crew capacity
   - Missing: Total mass, specific power output, TRL, cost, commercial availability status

### New Vendor Discovery

#### Commercial Robotic Rovers Found:

1. **Astrobotic - CubeRover**
   - Mass: 4-12kg (depending on 2U/4U/6U variant)
   - Payload: 2-6kg
   - Power: 0.5W per kg continuous, 10W peak
   - Speed: 10 cm/s
   - Pricing: $4.5M per kg of payload (end-to-end service)
   - Status: Multiple units delivered/operational

2. **Astrobotic - Polaris Rover**
   - Mass: 150kg
   - Payload: 80-90kg
   - Power: 250W average (800W peak)
   - Speed: 30 cm/s
   - Notable: Solar panels, autonomous + teleoperated

3. **Honeybee Robotics - Firefly Mission Rover**
   - Mass: 97kg
   - Range: Up to 1.1km traverse
   - Mission: 2028 Gruithuisen Domes
   - Status: Under contract with Firefly Aerospace

4. **ispace - TENACIOUS Rover**
   - Mass: 5kg
   - Payload: 1kg
   - Dimensions: 26cm H x 31.5cm W x 54cm L
   - Status: Launched Jan 15, 2025 (Mission 2)
   - Note: "Smallest and lightest planetary rovers in the world"

5. **Space Applications Services - LUVMI-M**
   - Payload: 20-30kg
   - Speed: 5 cm/s
   - Slope capability: 15 degrees
   - Mission: Q4 2027 deployment planned
   - Features: Stereo cameras, hazard detection, autonomy + teleoperation

6. **Venturi Space - Mona Luna**
   - Mass: 750kg
   - Dimensions: 2.5m L x 1.64m W
   - Speed: 20 km/h
   - Slope capability: 20 degrees
   - Power: Solar panels + three batteries (lunar night survival)
   - Features: Robotic arm, autonomous operation
   - Mission: South Pole before 2030
   - Note: 100% European development

7. **GITAI - R1.5 Lunar Rover**
   - Mass: 280kg
   - Dimensions: 1492mm W x 2400mm D x 942.5mm H
   - Speed: 0.24 m/s (24 cm/s)
   - Power: 115-1500W (36-48 Vdc)
   - TRL: 7 (explicitly stated)
   - Features: Four-legged with two robotic arms, omni-directional wheels
   - Capabilities: Solar panel assembly, regolith collection, 15-20 degree slopes

#### Government/Research Rovers (Reference Only):

8. **ISRO - Pragyan Rover**
   - Mass: 27kg
   - Range: 500m planned traverse
   - Speed: 1 cm/s
   - Power: 50W solar
   - Status: TRL 9 (successfully operated on Chandrayaan-3, Aug 2023)
   - Commercial availability: None (government program only)
   - Note: Included for comparison/reference, not commercially available

9. **Lunar Outpost - MAPP Rover**
   - Mass: 10kg
   - Payload: Up to 15kg
   - Speed: 10 cm/s
   - Mission duration: One lunar day (14 Earth days)
   - Status: TRL 9 (deployed on Lunar Voyage 1, 2025)
   - Software: Stargate Mission Control achieved TRL 9 with 99.998% uptime

## Findings Summary

### Vendor Count This Iteration
- **New commercial vendors identified:** 7 (Astrobotic x2, Honeybee, ispace, Space Applications, Venturi, GITAI)
- **Phase 1 vendors detailed:** 4 (Intuitive Machines, Astrolab, Lunar Outpost/Lunar Dawn, JAXA/Toyota)
- **Total unique rover systems documented:** 11 commercial + 1 reference (ISRO)

### TRL Distribution (Where Known/Inferred)
- **TRL 9:** Lunar Outpost MAPP, ISRO Pragyan (reference)
- **TRL 7-8:** GITAI R1.5 (TRL 7 stated), Astrobotic CubeRover (inferred from operational deliveries)
- **TRL 5-6:** Moon RACER, FLEX, Eagle LTV, Lunar Cruiser, LUVMI-M, Mona Luna (inferred from development stage)
- **Unknown:** Polaris, Honeybee rover, ispace TENACIOUS

### Mass Classes Covered
- **Micro (<20kg):** ispace TENACIOUS (5kg), Lunar Outpost MAPP (10kg), Astrobotic CubeRover (4-12kg)
- **Small (20-100kg):** ISRO Pragyan (27kg), Honeybee rover (97kg), Astrobotic Polaris (150kg)
- **Medium (100-500kg):** GITAI R1.5 (280kg)
- **Large (500-1000kg):** Venturi Mona Luna (750kg)
- **Very Large (>1000kg):** Moon RACER (1,500kg), Eagle LTV (>1,800kg loaded), FLEX (~2,000kg)
- **Pressurized:** Lunar Cruiser (mass TBD, very large)

### Geographic Distribution
- **United States:** Intuitive Machines, Astrolab, Lunar Outpost, Astrobotic, Honeybee Robotics
- **Japan:** JAXA/Toyota, GITAI, ispace
- **Europe:** Space Applications Services (Belgium), Venturi Space (France/Monaco)
- **India:** ISRO (reference only)

### Data Completeness Issues

**Strong data availability:**
- Mass specifications (most vendors provide)
- Dimensions (generally available)
- Payload capacity (usually stated)
- Speed/mobility performance (commonly disclosed)

**Weak data availability:**
- **TRL ratings:** Only 2 systems explicitly state TRL (GITAI R1.5 = TRL 7, MAPP = TRL 9)
- **Power requirements (kW):** Very few provide specific power draw figures
- **Cost:** Only Astrobotic CubeRover disclosed pricing ($4.5M/kg payload)
- **Commercial availability:** Unclear for many NASA-contracted systems
- **Turnaround time:** No vendors disclosed lead times

## Next Iteration Plans

### Remaining Strategy 1 Tasks (TechPort)
- Need alternative approach to access TechPort data (API calls, more targeted searches)
- Search remaining terms: "terrain vehicle", "surface mobility", "autonomous navigation"
- Document any additional mobility-related projects at TRL 5+

### Strategy 2: NASA Contract Databases
- Search sam.gov for lunar mobility contracts
- Check USASpending.gov for additional vendors
- Review SBIR/STTR awards for mobility technologies

### Strategy 3: International Programs (Partial)
- ✅ Japan (JAXA) - Lunar Cruiser, GITAI found
- ✅ Europe (ESA) - Venturi Mona Luna, Space Applications Services, ispace Europe found
- ⬜ Canada (CSA) - Not yet searched
- ⬜ South Korea (KARI) - Not yet searched
- ⬜ UAE - Not yet searched
- ✅ India (ISRO) - Pragyan documented for reference

### Other Strategies Not Yet Started
- Strategy 4: Conference exhibitor lists
- Strategy 5: Adjacent industry crossover
- Strategy 6: Mission reverse engineering
- Strategy 7: Startup ecosystem
- Strategy 8: Academic spin-offs
- Strategy 9: Component suppliers
- Strategy 10: Industry publications

## Sources for This Iteration

### Intuitive Machines Moon RACER
- [Intuitive Machines Unveils Moon RACER LTV](https://www.intuitivemachines.com/post/intuitive-machines-unveils-moon-racer-ltv)
- [Moon RACER: Intuitive Machines takes lunar rover out for debut drive | Space](https://www.space.com/intuitive-machines-racer-lunar-terrain-vehicle-reveal)
- [Moon RACER: Intuitive Machines takes lunar rover out for debut drive | collectSPACE](https://www.collectspace.com/news/news-110724a-intuitive-machines-racer-lunar-terrain-vehicle-reveal.html)

### Astrolab FLEX
- [FLEX Rover – Astrolab](https://www.astrolab.space/flex-rover/)
- [Astrolab Payload Interface Guide](https://astrolab-images.s3.amazonaws.com/pdf_files/Payload_Interface_Guide.pdf)

### Lunar Outpost Eagle LTV
- [The Lunar Outpost Eagle LTV, the Mobile...](https://www.hou.usra.edu/meetings/leag2025/pdf/5072.pdf)
- [Lunar Outpost reveals Moon rover built to bear -280 Fahrenheit freeze](https://interestingengineering.com/innovation/tough-moon-truck-built-to-survive-longer)

### JAXA/Toyota Lunar Cruiser
- [JAXA and Toyota Announce "LUNAR CRUISER"](https://global.toyota/en/newsroom/corporate/33208872.html)
- [LUNAR CRUISER Technology | Toyota](https://global.toyota/en/mobility/technology/lunarcruiser/index.html)
- [Lunar Cruiser - Wikipedia](https://en.wikipedia.org/wiki/Lunar_Cruiser)

### Astrobotic CubeRover
- [ASTROBOTIC CUBEROVERTM PDF](https://www.astrobotic.com/wp-content/uploads/2024/01/Astrobotic_CubeRover-PUG_V2-2.pdf)
- [CubeRover | Astrobotic Technology](https://www.astrobotic.com/lunar-delivery/rovers/cuberover/)
- [NASA CubeRover Specs PDF](https://science.nasa.gov/wp-content/uploads/2023/11/astrobotic-cuberover.pdf)

### Astrobotic Polaris
- [Polaris Rover | Astrobotic Technology](https://www.astrobotic.com/lunar-delivery/rovers/polaris-rover/)

### Honeybee Robotics
- [Firefly selects Honeybee Robotics to provide rover for lunar mission](https://www.militaryaerospace.com/commercial-aerospace/article/55276855/firefly-selects-honeybee-robotics-to-provide-rover-for-lunar-mission)
- [Blue Origin's Honeybee Robotics to Build Lunar Rover](https://www.blueorigin.com/news/firefly-aerospace-selects-blue-origins-honeybee-robotics-to-provide-rover-for-lunar-mission)

### ispace TENACIOUS
- [Services & Spacecraft | ispace](https://ispace-inc.com/spacecraft)
- [Hakuto-R Mission 2 - Wikipedia](https://en.wikipedia.org/wiki/Hakuto-R_Mission_2)

### Space Applications Services LUVMI-M
- [Space Applications drives lunar mobility forward](https://www.moondaily.com/reports/Space_Applications_drives_lunar_mobility_forward_with_new_rover_initiatives_999.html)
- [LUVMI-M Lunar Rover](https://moon.spaceapplications.com/lunar-rover/)

### Venturi Mona Luna
- [Mona Luna, the new European rover by Venturi Space](https://en.cite-espace.com/space-news/mona-luna-the-new-european-rover-by-venturi-space/)
- [Venturi Space announces European lunar rover design - SpaceNews](https://spacenews.com/venturi-space-announces-european-lunar-rover-design/)

### GITAI R1.5
- [Lunar Rover – GITAI](https://gitai.tech/lunar-rover/)
- [GITAI - Factories in Space](https://www.factoriesinspace.com/gitai)

### ISRO Pragyan
- [Chandrayaan 2 - About Pragya Rover](https://www.isro.gov.in/Chandrayaan2PragyaRover.html)
- [Pragyan (rover) - Wikipedia](https://en.wikipedia.org/wiki/Pragyan_(rover))

### NASA TechPort
- [Reliable Autonomous Surface Mobility (RASM)](https://techport.nasa.gov/view/10325)
- [Dynamically Reconfigurable Software and Mobility Architectures](https://techport.nasa.gov/view/113185)
- [Tethered Power Systems for Lunar Mobility](https://techport.nasa.gov/view/116287)
- [High TRL Rover Lidar (HTRL)](https://techport.nasa.gov/projects/116315)

## Notes

- **TechPort Access Challenge:** The JavaScript requirement for TechPort means we cannot directly scrape detailed project data. Consider using NASA's TechPort API if available, or manual review of key projects.

- **Astrobotic Pricing:** Only vendor to publicly disclose pricing ($4.5M/kg payload for CubeRover end-to-end service). This gives important cost baseline.

- **GITAI TRL 7:** Only vendor besides Lunar Outpost to explicitly state TRL level. This is valuable for verification.

- **European Activity:** Strong European commercial rover development (Venturi, Space Applications Services, ispace Europe) indicates growing international market.

- **Mass Gap Filled:** Found several medium-class rovers (GITAI 280kg, Venturi 750kg) filling the gap between micro-rovers and large crewed vehicles.

- **Next Priority:** Need to search for Canadian, South Korean, UAE rover programs; check conference exhibitors; review NASA contract databases for additional vendors.
