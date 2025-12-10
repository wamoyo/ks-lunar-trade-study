# Phase 3 Iteration 1: CLPS Vendor Audit & Initial Systems

**Date:** 2025-12-08
**Focus:** Strategy 1 (CLPS Vendor Audit) + Initial confirmed systems
**Items Added to JSON:** 10 systems from 6 vendors

## Execution Summary

### CLPS Vendor Status Assessment

**Vendors with Active TRL 5+ Lander Systems:**
1. ✅ **Firefly Aerospace** - Blue Ghost (TRL 9)
2. ✅ **Intuitive Machines** - Nova-C (TRL 9)
3. ✅ **Astrobotic** - Peregrine, Griffin (TRL 7-8)
4. ✅ **Blue Origin** - Blue Moon Mark 1, Mark 2 (TRL 6-7)
5. ✅ **SpaceX** - Starship HLS (TRL 5-6)
6. ✅ **Draper** - APEX 1.0 with ispace (TRL 7)

**Vendors without Active TRL 5+ Lander Programs:**
7. ❌ **Deep Space Systems** - No task orders received, no active lander development found
8. ❌ **Lockheed Martin Space** - McCandless lander (250 kg payload) in CLPS pool but no task orders, no recent activity
9. ❌ **Masten Space Systems** - EXCLUDED: Bankrupt July 2022, acquired by Astrobotic
10. ❌ **Moon Express** - MX-1 lander stalled, no 2024 activity, Google Lunar XPRIZE era
11. ⚠️ **Orbit Beyond** - Z-01 lander cancelled 2019, future missions 2029-2031 (TRL < 5 currently)
12. ⚠️ **Ceres Robotics** - B5 lander in development, PDR completed May 2024 (TRL ~5), no task orders yet
13. ❌ **Sierra Nevada Corporation** - CLPS member, but Dream Chaser is orbital only, no lunar lander found
14. ❌ **Tyvak Nano-Satellite Systems** - Lander concept stage only, no development activity since 2019

### Key Findings

**Operational Systems (TRL 9):**
- Firefly Blue Ghost - Successful landing March 2025
- Intuitive Machines Nova-C - Successful landing February 2024

**Flight-Ready Systems (TRL 7-8):**
- Astrobotic Peregrine - Flight attempted January 2024 (system qualified, mission failed)
- Astrobotic Griffin - Mission planned 2025
- ispace APEX 1.0 - Mission planned 2026

**Development Systems (TRL 5-6):**
- Blue Origin Blue Moon Mark 1 - Pathfinder missions 2024-2025
- Blue Origin Blue Moon Mark 2 - Large cargo variant
- SpaceX Starship HLS - Cargo variant in development
- Ceres Robotics B5 - PDR completed 2024 (borderline TRL 5)

### Specifications Gathered

**Firefly Blue Ghost:**
- Payload: ~94 kg (expandable)
- Dry mass: 469 kg, Fueled mass: 1,517 kg
- Dimensions: 2 m tall x 3.5 m wide
- Power: 400 W solar
- Propulsion: LEROS 4-ET bipropellant
- Sources: Firefly website, Wikipedia

**Intuitive Machines Nova-C:**
- Payload: 100-130 kg
- Launch mass: 1,908 kg, Dry mass: 675 kg
- Dimensions: 3.938 m tall, 1.57 m hexagonal
- Power: 200 W solar, 25 Ah battery, 28 VDC
- Propulsion: VR900 methalox (3100 N)
- Cost: $118M (IM-1 contract, 2024)
- Sources: Wikipedia, Intuitive Machines website, eoPortal

**Astrobotic Peregrine:**
- Payload: 90 kg (Mission One), 265 kg (full capacity)
- Dimensions: 1.9 m tall x 2.5 m wide
- Propellant: 450 kg MON-25/MMH
- Propulsion: 5x 667 N main, 12x 45 N attitude
- Power: 28V, triple-junction solar, Li-ion battery
- Sources: Astrobotic PUG, Wikipedia

**Astrobotic Griffin:**
- Payload: 475-625 kg
- Propulsion: 7 main engines, 4 clusters attitude control
- Sources: Astrobotic website, Wikipedia

**Blue Origin Blue Moon Mark 1:**
- Payload: 3,000-3,600 kg
- Height: 8.05 m, Diameter: 3.08 m
- Fueled mass: 21,350 kg
- Propulsion: BE-7 engine (40 kN, LOX/LH2)
- Sources: Blue Origin website, Wikipedia

**Blue Origin Blue Moon Mark 2:**
- Payload: 12-15 metric tons (NASA cargo), 20 tons (reusable), 30 tons (expendable)
- Status: Development for Artemis VII+
- Sources: NASA announcements, Wikipedia

**SpaceX Starship HLS:**
- Payload: 100 metric tons (theoretical), 12-15 metric tons (cargo variant)
- Height: 50-55 m, Diameter: 9 m
- Volume: 600 m³ pressurized
- Note: Requires ~10 orbital refueling launches
- Sources: Wikipedia, SpaceNews

**ispace APEX 1.0:**
- Payload: 300 kg (scalable to 500 kg)
- Design: U.S. manufactured
- Mission: Draper CLPS to Schrödinger Basin, 2026
- Sources: ispace-US website, TechCrunch

**ispace RESILIENCE:**
- Launch mass: ~1,000 kg, Dry mass: 340 kg
- Payload: Lower than APEX (Mission 2 variant)
- Sources: NASA NSSDC, ispace announcements

**Ceres Robotics B5:**
- Payload: 500 kg
- Status: PDR completed May 2024
- Capabilities: Power, data, communications, robotic manipulation
- TRL: Estimated 5 (borderline inclusion)
- Sources: Ceres press release, Wikipedia

### Vendor Exclusions

**Excluded from JSON (Do Not Meet TRL 5+ or Inactive):**
- Deep Space Systems - No lander product identified
- Lockheed Martin McCandless - Concept stage, no task orders
- Masten XL-1 - Program cancelled, company bankrupt
- Moon Express MX-1 - Development stalled
- Orbit Beyond Z-01 - Current TRL < 5, future missions 2029+
- Sierra Nevada - No lunar lander product (Dream Chaser is orbital)
- Tyvak - Concept stage only

**Borderline Inclusion:**
- Ceres Robotics B5 - PDR completed (TRL ~5), included for now pending verification

## Data Gaps Identified

**Cost Data:**
- Only 1 system has cost data (Intuitive Machines IM-1: $118M)
- Need investor presentations, contract announcements
- CLPS contracts often bundle services (launch + landing + operations)

**Turnaround Time:**
- No turnaround time data found for any system
- Need mission manifest analysis
- Contact vendor commercial departments

**Power Specifications:**
- Only 3 systems have power data (Blue Ghost, Nova-C, Peregrine)
- Need payload user guides for others

**Detailed Mass Breakdown:**
- Some systems missing dry mass vs fueled mass
- Need technical papers

## Search Sources Used

**Primary Sources:**
- NASA CLPS Providers page
- Individual vendor websites (Firefly, Intuitive Machines, Astrobotic, Blue Origin, ispace)
- Blue Origin Blue Moon page
- Astrobotic lander pages

**Secondary Sources:**
- Wikipedia (Commercial Lunar Payload Services, individual lander articles)
- Gunter's Space Page
- NASA NSSDC
- eoPortal
- SpaceNews archives
- TechCrunch
- Press releases (Ceres Robotics, Orbit Beyond)

**Attempted Sources:**
- NASA TechPort - Web interface requires JavaScript, cannot scrape directly
- Payload User Guides - Found references but need direct PDF access

## Next Iteration Focus

**Iteration 2 will target:**
1. International vendors (ispace detailed specs, any European commercial systems)
2. Mission archive analysis (extract specs from CLPS mission press kits)
3. Payload User Guide collection for complete specifications
4. Cost data hunting (investor presentations, contract announcements)
5. Verify Ceres B5 TRL status for final inclusion decision

## Checklist Update

**Strategy 1: CLPS Vendor Audit** - ✅ COMPLETE
- All 14 vendors assessed
- 6 vendors with TRL 5+ systems identified
- 7 vendors excluded (no lander or TRL < 5)
- 1 vendor borderline (Ceres B5)

**Systems Added to JSON:** 10
- Firefly Blue Ghost
- Intuitive Machines Nova-C
- Astrobotic Peregrine
- Astrobotic Griffin
- Blue Origin Blue Moon Mark 1
- Blue Origin Blue Moon Mark 2
- SpaceX Starship HLS (cargo variant)
- ispace APEX 1.0
- ispace RESILIENCE
- Ceres Robotics B5

**Data Completeness:**
- Vendor/Model: 100%
- TRL: 100%
- Payload capacity: 100%
- Mass: 70%
- Power: 30%
- Cost: 10%
- Turnaround: 0%
