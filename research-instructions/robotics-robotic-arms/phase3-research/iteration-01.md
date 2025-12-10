# Phase 3 Research - Iteration 01

**Date:** 2025-12-08
**Focus:** Strategy 1 (NASA TechPort) + Strategy 2 (Direct Vendor Research - Tier 1 partial)
**Duration:** ~2 hours

## Searches Performed

### NASA TechPort API and Web Searches

1. **TechPort Projects Retrieved:**
   - Project 154854: LANDO (Lightweight Surface Manipulation System)
   - Project 116324: CADRE (Cooperative Autonomous Distributed Robotic Exploration)
   - Project 106703: Autonomous Robot Swarms for Lunar Orbit Servicing
   - Project 93868: Space Robotics Challenge - Autonomous Humanoid Robots
   - Project 6675: Field Reconfigurable Manipulator for Rovers
   - Project 8492: Lightweight Electric Motors and Actuators

2. **Search queries used:**
   - site:techport.nasa.gov "lunar" "robotic arm" OR "manipulator" TRL
   - site:techport.nasa.gov "robotics" "lunar surface" TRL 5 OR TRL 6 OR TRL 7
   - site:techport.nasa.gov "autonomous" "lunar" "robot" TRL
   - Direct API calls to https://techport.nasa.gov/api/projects/{id}

### Direct Vendor Research

1. **MDA Space - Canadarm3**
   - Searched: specifications, commercial sales, mass, power
   - Found: First commercial sale to Axiom Space (32 robotic interfaces)
   - Found: $1B contract from CSA
   - NOT found: Specific mass/power specs (likely still in development)

2. **Maxar Technologies - SPIDER**
   - Searched: specifications, TRL, mass, power
   - Found: 16-foot (5m) lightweight robotic arm
   - Found: CDR completed, delivery 2022
   - Found: MDA partnership for motor control electronics
   - NOT found: Mass and power specifications

3. **Motiv Space Systems - xLink**
   - Searched: specifications, lunar applications
   - Found: Highly modular system, 4-DOF to multi-arm configurations
   - Found: 1/10th cost of existing solutions
   - Found: 6-month delivery time
   - Found: Mars heritage (Perseverance rover)
   - Found: First mission OSAM-2
   - NOT found: Specific mass, power, exact pricing

4. **GITAI - S10 and IN1**
   - Searched: S10 10-meter arm specifications, pricing
   - Found: S10 - TRL 3 (completed Aug 2022), 10-meter autonomous arm
   - Found: IN1 - TRL 6 (inchworm type), lunar South Pole tested
   - Found: Development time <6 months for S10
   - NOT found: Pricing for either system

## Items Added to JSON (This Iteration)

1. NASA LANDO (LSMS) - TRL 5 system
2. NASA CADRE rovers - TRL 6-7 system
3. MIT/Harvard Autonomous Robot Swarms - TRL 6
4. MDA Canadarm3 - TRL estimated 7-8 (in development)
5. Maxar SPIDER - TRL estimated 6-7
6. Motiv xLink - TRL estimated 8-9 (Mars-proven)
7. GITAI S10 - TRL 3 (excluded - below TRL 5)
8. GITAI IN1 - TRL 6 (included)

## Key Findings

### Commercial Availability Insights
- **MDA:** First commercial sale (Axiom Space) signals transition from gov-only to commercial
- **Motiv:** Explicitly marketing 1/10th cost with 6-month delivery - strong commercial focus
- **GITAI:** Still in development phase (TRL 3-6), targeting 2026 lunar demo
- **Maxar:** Focus on NASA/gov contracts, commercial availability unclear

### TRL Distribution Found
- TRL 9: None explicitly found yet (need ISS heritage systems research)
- TRL 7-8: Canadarm3 (estimated), potentially xLink
- TRL 5-6: LANDO, CADRE, Robot Swarms, GITAI IN1
- TRL <5: GITAI S10, R5 Humanoid (excluded from JSON)

### Data Gaps Identified
- **Mass:** Almost no public data for any system
- **Power:** Only general mentions, no kW specifications
- **Cost:** Motiv mentions "1/10th cost" but no absolute numbers
- **Turnaround time:** Only Motiv states 6 months

## Challenges Encountered

1. **TechPort website requires JavaScript** - had to use API instead
2. **Sparse technical specifications** in public sources - vendors protect detailed specs
3. **TRL ratings not always explicitly stated** - had to infer from project descriptions
4. **Commercial vs government distinction** - many systems funded by NASA but unclear if commercially available

## Follow-up Items for Next Iteration

### High Priority
- [ ] Search for Canadarm2 specifications (ISS heritage = TRL 9)
- [ ] Research Honeybee Robotics products in detail
- [ ] Search for PickNik Robotics commercial products
- [ ] Find more TRL 9 systems (Mars rover arms, ISS systems)

### Medium Priority
- [ ] Deeper SBIR/STTR database search
- [ ] Conference exhibitor lists (IAC, Space Symposium)
- [ ] ESA/JAXA vendor searches

### Low Priority
- [ ] Adjacent industry search (industrial robotics)
- [ ] Patent literature search

## Strategy Completion Status

**Strategy 1 - NASA TechPort:** 40% complete
- Completed initial searches
- Retrieved 6 relevant projects
- Need: More systematic TX04 technology area search
- Need: Additional keyword searches

**Strategy 2 - Direct Vendor Research:** 25% complete
- Completed: MDA, Maxar, Motiv, GITAI (Tier 1 + some Tier 2)
- Remaining: Honeybee, PickNik, Astrobotic deep dives
- Need: Product catalog research for each

**Other Strategies:** Not started

## Notes

- Many NASA-funded projects are research/development, not commercial products
- Lead organizations often NASA centers, not vendors (JPL, LaRC, JSC)
- Need to track partnerships - e.g., Astrobotic partnered with LANDO project
- "Autonomous" seems more common than "robotic arm" in project titles
- Swarm robotics emerging but mostly TRL 3-6, not ready for commercial use yet

## Sources Used This Iteration

All sources documented in JSON file with each entry. Key source types:
- NASA TechPort API (techport.nasa.gov/api)
- Vendor press releases (MDA, Maxar, Motiv, GITAI)
- Business wire and PR Newswire releases
- Technical publications (SpaceNews, Parabolic Arc)

## Next Iteration Plan

Focus on:
1. Complete remaining Tier 1 vendors (get ISS/Mars heritage TRL 9 systems)
2. Start Strategy 3 (SBIR/STTR database mining)
3. Add at least 5 more items to JSON
4. Target TRL 8-9 systems to balance the distribution
