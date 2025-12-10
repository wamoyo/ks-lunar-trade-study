# Phase 3 Research - Iteration 02

**Date:** 2025-12-08
**Focus:** Heritage Systems (TRL 9) + Remaining Tier 1 Vendors
**Duration:** ~1.5 hours

## Searches Performed

### Heritage Systems Research (TRL 9)

1. **Canadarm2 (ISS)**
   - Searched: specifications, mass, power, DOF, reach
   - Found: 1800kg mass, 1.4kW power, 7 DOF, 17.6m reach, 116,000kg payload
   - Source: Canadian Space Agency, Wikipedia

2. **Dextre (SPDM)**
   - Searched: specifications, mass, capabilities
   - Found: 1850kg mass, 3.7m height, 7 DOF per arm, 600kg payload per arm
   - Source: Canadian Space Agency, Wikipedia

3. **Mars 2020 Perseverance Robotic Arm**
   - Searched: Motiv design, specifications
   - Found: 2.1m length, 5 DOF, 45kg payload capacity, force-torque sensor
   - Source: Motiv Space Systems

### Remaining Tier 1 Vendors

4. **Honeybee Robotics**
   - Searched: lunar products, specifications
   - Found: 4-DOF and 3-DOF arms for drilling/scooping/sampling
   - Found: 1000+ systems flown, Blue Origin subsidiary
   - Source: Blue Origin, Honeybee website

5. **PickNik Robotics**
   - Searched: Artemis products, Space ROS, commercial offerings
   - Found: MoveIt Pro platform (commercially available)
   - Found: $3M NASA SBIR funding 2024, multiple lunar projects
   - Source: PickNik website, NASA SBIR announcements

6. **Astrobotic LunaGrid**
   - Searched: specifications, robotic deployment
   - Found: 500m cable deployment, 20kg system mass, 1kW power transmission
   - Found: CDR complete, 2026 launch
   - Source: Astrobotic website, LSIC presentation

### Specialized Lunar Systems

7. **COLDArm**
   - Searched: specifications, TRL, lunar polar operations
   - Found: 2m length, 4 DOF, operates at -173C without heaters
   - Found: 3D-printed titanium, bulk metallic glass gears
   - Source: NASA JPL, robotics website

## Items Added to JSON (This Iteration)

8. Canadarm2 (SSRMS) - TRL 9, MDA
9. Dextre (SPDM) - TRL 9, MDA
10. Mars 2020 Perseverance Arm - TRL 9, Motiv/JPL
11. COLDArm - TRL 6, NASA JPL/Motiv
12. Honeybee Lunar Arms - TRL 7, Honeybee/Blue Origin
13. PickNik MoveIt Pro - TRL 6, PickNik (software)
14. Astrobotic LunaGrid-Lite - TRL 7, Astrobotic

**Total items now: 13 (from 7 in iteration 1)**

## Key Findings

### TRL 9 Systems Identified
Successfully found and documented 4 TRL 9 systems:
- Canadarm2 (ISS, 20+ years operational)
- Dextre (ISS, 15+ years operational)
- Perseverance arm (Mars, 4+ years operational)
- Motiv xLink (Mars heritage from Perseverance)

These provide strong heritage baseline for commercial derivatives.

### Mass and Power Data Found
Breaking through the data gap:
- **Canadarm2:** 1800kg, 1.4kW average
- **Dextre:** 1850kg
- **LunaGrid-Lite:** 20kg system, 1kW transmission

Most other systems still lack public specs, but this gives some reference points.

### Commercial Readiness Clearer
**Available Now:**
- Motiv xLink (6-month delivery, 1/10th cost claim)
- PickNik MoveIt Pro (software platform for manipulation)

**Emerging (2025-2026):**
- MDA SKYMAKER (first sale to Axiom 2024)
- LunaGrid-Lite (2026 launch)
- COLDArm (CLPS demo within 5 years)
- GITAI IN1 (2026 lunar demo planned)

**Research/Development:**
- LANDO, CADRE, MIT Swarms (NASA programs, not commercial)

### Vendor Categories Identified

**Tier 1 - Established Space Heritage:**
- MDA Space (Canadarm family)
- Maxar (SPIDER, Mars heritage)
- Motiv Space Systems (Mars proven)

**Tier 2 - Advanced Development:**
- GITAI (TRL 6 lunar systems)
- Honeybee/Blue Origin (extensive flight heritage)
- PickNik (software platform + NASA SBIR)
- Astrobotic (CLPS mission hardware)

**Research/Government:**
- NASA JPL (CADRE, COLDArm)
- NASA LaRC (LANDO)
- MIT/Harvard (Swarm robotics)

## Data Gaps Remaining

### Still Missing for Most Systems:
- **Mass:** Found for 3 systems (Canadarm2, Dextre, LunaGrid), missing for 10
- **Power:** Found for 2 systems (Canadarm2, LunaGrid), missing for 11
- **Cost:** No specific pricing found for any commercial system
  - Motiv claims "1/10th cost" but no absolute number
  - MDA Canadarm3 contract $1B CAD (full program, not per-unit)
  - Astrobotic LunaGrid contract $34.6M (demonstration mission)
- **Turnaround time:** Only Motiv states 6 months explicitly

### Why Data is Missing:
1. Commercial pricing = competitive advantage, not disclosed
2. Custom systems = price varies by configuration
3. Mass/power vary by configuration (modular systems like xLink)
4. Heritage systems (ISS) not for sale commercially
5. Development systems (TRL 5-7) specs still being finalized

## Challenges Encountered

1. **Heritage vs Commercial Distinction**
   - Canadarm2/Dextre not for sale, but technology available via SKYMAKER
   - Needed to document both heritage (TRL proof) and commercial path

2. **Software vs Hardware**
   - PickNik is software enabler, not hardware vendor
   - Important for ecosystem but different category
   - Decided to include as it's commercially available and Artemis-focused

3. **Vendor Acquisitions**
   - Honeybee acquired by Blue Origin (2022)
   - Product continuity assumed but some uncertainty

4. **Specification Variance**
   - Modular systems (xLink, Honeybee) have multiple configurations
   - Difficult to cite single mass/power number
   - Documented as "varies by configuration"

## TRL Distribution Analysis

**After Iteration 2:**
- TRL 9: 4 systems (31%)
- TRL 7-8: 3 systems (23%)
- TRL 6: 5 systems (38%)
- TRL 5: 1 system (8%)

Good balance! Have both proven systems and emerging technologies. TRL 6 is largest category (systems in relevant environment testing, approaching flight readiness).

## Commercial Availability Summary

**Commercially Available Now (2):**
- Motiv xLink
- PickNik MoveIt Pro

**Near-Term Commercial (4):**
- MDA SKYMAKER (2024 first sale, expanding)
- Honeybee arms (integrated into Blue Origin offerings)
- GITAI IN1 (2026 demo, commercial timeline TBD)
- LunaGrid-Lite (2026 flight, commercialization path via Astrobotic)

**Development/Uncertain (4):**
- Maxar SPIDER (NASA mission hardware, commercial path unclear)
- COLDArm (NASA development, may license technology)
- Canadarm3 (Gateway mission, SKYMAKER is commercial variant)

**Research Only (3):**
- LANDO
- CADRE
- MIT Swarms

## Strategy Completion Update

**Strategy 1 - NASA TechPort:** 60% complete
- Found LANDO, CADRE, Swarms, COLDArm via TechPort
- Still need systematic TX04 technology area search
- Should find 5-10 more projects

**Strategy 2 - Direct Vendor Research:** 80% complete
- Completed: MDA, Maxar, Motiv, GITAI, Honeybee, PickNik, Astrobotic
- All Tier 1 vendors done
- May need to search for smaller/niche vendors

**Other Strategies:** Not started
- Need SBIR/STTR database mining
- International agencies (ESA/JAXA)
- Conference exhibitors
- Adjacent industries

## Follow-Up Items

### High Priority
- [ ] Quick SBIR/STTR search for any missed small vendors
- [ ] Check if sufficient coverage or need more systems
- [ ] Decision: Move to Phase 4 verification or continue Phase 3?

### Medium Priority (if continuing Phase 3)
- [ ] ESA robotic systems (commercial availability?)
- [ ] JAXA partnerships beyond GITAI
- [ ] Industrial robotics companies (ABB, KUKA space divisions)

### Notes for Phase 4
- Verify mass discrepancy for Canadarm2 (1500kg vs 1800kg in sources)
- Screenshot key specs from vendor sites
- Re-check all TRL claims
- Validate all source URLs still active

## Quality Assessment

### Strengths:
- Good TRL distribution (TRL 5-9 represented)
- Mix of hardware and software systems
- Both heritage (proven) and emerging (future) systems
- Commercial availability status clear
- Multiple vendor types (primes, startups, research)

### Weaknesses:
- Mass/power/cost data sparse (expected but limits usefulness)
- Some TRL ratings estimated rather than stated
- Commercial pricing completely absent
- International vendors under-represented (only GITAI from Japan)

### Recommendation:
**13 systems is likely sufficient for this category.** We have:
- All major vendors covered
- TRL range well-represented
- Commercial options identified
- Heritage systems documented

**Suggest moving to Phase 4 verification** rather than spending more time hunting for marginal additional systems. The data quality improvement from verification will be more valuable than quantity.

If user wants more depth, could add:
- ESA robotic systems
- More SBIR small businesses
- Industrial robotics crossover
- Component vendors (end effectors, actuators)

## Sources Used This Iteration

All sources documented inline in JSON. Key source types:
- Canadian Space Agency official pages (Canadarm2, Dextre)
- Vendor websites (Motiv, Honeybee, PickNik, Astrobotic)
- NASA JPL robotics pages (COLDArm)
- Wikipedia for established systems with multiple citations
- LSIC presentation PDFs (LunaGrid specs)
- NASA SBIR program announcements (PickNik funding)

## Next Steps

**Recommendation:** Proceed to Phase 4 Verification

**Rationale:**
1. 13 high-quality items covering full TRL range
2. All major vendors represented
3. Further searches likely to yield diminishing returns
4. Data quality improvement via verification more valuable than quantity
5. Can always add more items later if gaps identified

**Phase 4 Focus:**
- Verify every source URL
- Re-check all TRL claims
- Screenshot key specifications
- Validate mass/power data where present
- Resolve any discrepancies (e.g., Canadarm2 mass)
- Mark all fields as verified: true/false
- Add verification dates
