# Phase 3 Iteration 01 - Manufacturing and Construction Research

**Date:** 2025-12-08
**Focus:** Initial data collection based on Phase 1 findings and beginning systematic TechPort searches

## Goals for This Iteration
1. Document all systems identified in Phase 1 into JSON format
2. Begin systematic TechPort searches
3. Identify data gaps requiring follow-up iterations

## TechPort API Search Results

### Searches Performed:
- `additive manufacturing lunar` + `trlFrom=5` → Results returned but not construction-specific (power systems, detectors, propulsion)
- `regolith construction` + `trlFrom=5` → Same irrelevant results
- `ISRU manufacturing` + `trlFrom=5` → Same irrelevant results

**Finding:** TechPort API search with generic keywords returns many irrelevant projects. The API appears to do broad text matching rather than semantic understanding. Need to:
1. Use project ID 116319 (MMPACT) which we already have detailed data for
2. Search for specific vendor/technology names
3. Use web searches to identify TechPort project IDs, then fetch via API

### Known TechPort Projects:
- **Project 116319: MMPACT** - Already retrieved full details via API in Phase 1
  - TRL 2→4→6 (completed 2025 at TRL 4)
  - Lead: ICON Technology
  - Partners: Blue Origin, Blue Star, numerous universities and DoD entities
  - Status: Will use this as primary source for multiple systems

## Systems Documented in JSON (This Iteration)

### 1. ICON Olympus - Laser VMX System
- **Source:** Phase 1 research, MMPACT TechPort data, ICON press releases
- **TRL:** 4-6 (advancing through MMPACT)
- **Status:** Added to JSON with all available specifications
- **Data Gaps:** Build volume, build speed, exact power requirements, mass, cost
- **Notes:** Most advanced commercial system, $57.2M NASA contract

### 2. ICON Olympus - Molten Extrusion (Backup System)
- **Source:** MMPACT description mentions "molten extrusion" as risk mitigation
- **TRL:** Estimated 3-4 (backup to laser VMX)
- **Status:** Added to JSON with limited data
- **Data Gaps:** Nearly all specifications unknown
- **Notes:** MMPACT risk mitigation technology, less developed than laser VMX

###3. Blue Star Advanced Manufacturing - Microwave Sintering
- **Source:** MMPACT partner list, Dr. Holly Shulman
- **TRL:** Estimated 3-4 (MMPACT risk mitigation)
- **Status:** Added to JSON with minimal data
- **Data Gaps:** All specifications, vendor details, contact information
- **Notes:** Requires follow-up research on Blue Star and Dr. Shulman

### 4. AI SpaceFactory LINA
- **Source:** Phase 1 web research, NASA ACO partnership
- **TRL:** 4-5 (vacuum chamber tested at -200°C)
- **Status:** Added to JSON with available specifications
- **Data Gaps:** Build speed, power requirements, mass, cost
- **Notes:** Biopolymer basalt composite, 75 sq.m floor area documented

### 5. Redwire Additive Manufacturing Facility (AMF)
- **Source:** Phase 1 web research, ISS operations
- **TRL:** 9 (operational on ISS since 2016)
- **Status:** Added to JSON
- **Data Gaps:** Lunar-specific adaptations, lunar application TRL (likely 5-6)
- **Notes:** Only TRL 9 system found, but in-orbit not lunar surface

### 6. Redwire Regolith Print (RRP)
- **Source:** Phase 1 web research, ISS demonstration
- **TRL:** 5-6 (ISS demonstration with regolith feedstock)
- **Status:** Added to JSON with available data
- **Data Gaps:** Build speed, power, mass, cost, lunar surface readiness
- **Notes:** Autonomous 3D printing demonstrated on ISS

### 7. Redwire FabLab
- **Source:** Phase 1 web research, NASA contract
- **TRL:** 4-5 (design phase, $5.9M contract)
- **Status:** Added to JSON
- **Data Gaps:** Nearly all specifications (still in design)
- **Notes:** Multi-material (metal, plastic, ceramics, electronics)

### 8. Contour Crafting - CrafTram Material Transport
- **Source:** Phase 1 web research, NASA STTR
- **TRL:** Estimated 3-4 (NASA STTR phase)
- **Status:** Added to JSON with minimal data
- **Data Gaps:** All construction specifications, focus is materials transport not construction
- **Notes:** May not qualify as manufacturing system - more of a support system

## Data Quality Assessment

### Well-Documented Systems (>50% fields populated):
- MMPACT Program Overall (framework, not specific system)
- AI SpaceFactory LINA (architectural specifications available)
- Redwire AMF (ISS operations provide data)

### Poorly-Documented Systems (<30% fields populated):
- ICON Olympus (despite being most advanced - specifications proprietary)
- Blue Star Microwave Sintering (minimal public information)
- ICON Molten Extrusion (backup system, limited details)
- Contour Crafting CrafTram (focus on transport, not manufacturing)

### Critical Data Gaps Across ALL Systems:
1. **Power Requirements** - CRITICAL for lunar feasibility, almost entirely missing
2. **Build Speed/Rate** - Needed for mission planning, rarely published
3. **Equipment Mass** - Needed for launch planning, not publicly available
4. **Cost** - Nearly impossible to obtain (proprietary/NASA-negotiated)
5. **Turnaround Time** - Systems in development, delivery dates uncertain

## Vendor Contact Status

**Planned for Iteration 02:**
- ICON Technology (contact form, LinkedIn)
- AI SpaceFactory (website inquiry)
- Redwire Space (business development contact)
- Contour Crafting / USC (Dr. Khoshnevis)

**Note:** Vendor contact will be documented in Iteration 02 with responses.

## Additional Systems Identified (Not Yet in JSON)

### From Phase 1 Research:
- **NASA ARMADAS** - Assembly robots, may not be "manufacturing" per se (assembly vs fabrication)
  - Decision: Include if TRL 5+, note it's assembly not additive manufacturing
  - Requires more research to determine TRL and specifications

- **Astroport Space Technologies** - MMPACT partner, unclear technology
  - Requires deep dive research in Iteration 02

- **RegoLight (Solar Sintering)** - European project
  - TRL 3-4, below threshold unless considered unique
  - May include as "future watch" but not main list

- **GLAMS (Geopolymer)** - Italian ASI project
  - TRL 3, below threshold
  - May include as "future watch" but not main list

### Decision for Iteration 01:
Focus on TRL 5+ systems. ARMADAS, Astroport require more research. RegoLight and GLAMS are TRL 3-4 (include only if no alternatives).

## Search Coverage Checklist (From Phase 2 Strategies)

### Strategy 1: NASA TechPort
- [X] Attempted API searches (results not useful due to broad matching)
- [X] Retrieved MMPACT project 116319 details
- [ ] Web interface search with keywords (next iteration)
- [ ] Browse TX07.2.3 taxonomy directly (next iteration)
- [ ] Search for known vendor names (ICON, AI SpaceFactory, etc.) in TechPort

### Strategy 2: Direct Vendor Research
- [X] Phase 1 identified top vendors
- [ ] ICON website detailed review (next iteration)
- [ ] AI SpaceFactory detailed review (next iteration)
- [ ] Redwire detailed review (next iteration)
- [ ] Contour Crafting status clarification (next iteration)
- [ ] Contact forms submitted (next iteration)

### Strategy 3: NASA SBIR/STTR
- [ ] Not started (plan for Iteration 02 or 03)

### Strategy 4: Academic Research
- [ ] Not started (plan for Iteration 03)

### Strategy 5: International Programs
- [X] Partial - GLAMS and RegoLight identified in Phase 1
- [ ] ESA comprehensive search (next iteration)
- [ ] JAXA search (next iteration)

### Strategy 6-10: Other Strategies
- [ ] Deferred to later iterations

## Findings and Observations

### Key Finding: Limited Commercial Availability
- Only 1 system at TRL 9 (Redwire AMF), but it's orbital not lunar
- Most advanced lunar system (ICON Olympus) is TRL 4-6
- Expected lunar surface demonstration: 2026-2027
- **Conclusion:** This is a pre-commercial market with ~3-5 years to commercial availability

### Key Finding: Power is Critical Constraint
- Laser sintering, microwave sintering, molten extrusion all require significant electrical power
- No power specifications published for any system
- This may be intentional (competitive/proprietary) or because systems are still being designed
- **Action Required:** Cross-reference with power-systems.json to assess feasibility

### Key Finding: Data Transparency Issues
- NASA SBIR/contract amounts are public ($57.2M for ICON)
- Technical specifications are largely proprietary
- TRL ratings are often not explicitly stated (must be inferred from project descriptions)
- **Implication:** Many fields will remain "unavailable" even after exhaustive research

### Key Finding: MMPACT Dominates Landscape
- MMPACT (project 116319) accounts for 3-4 of the TRL 5+ systems
- Other programs are smaller scale or earlier stage
- **Implication:** Lunar construction market is highly concentrated, not diverse

## Issues Encountered

1. **TechPort API Search Limitations:**
   - Broad keyword matching returns many false positives
   - No apparent semantic search or relevance ranking
   - TRL filter doesn't narrow results enough
   - **Workaround:** Use specific project IDs from web research, or search by vendor name

2. **TRL Ambiguity:**
   - MMPACT states TRL 2→4→6 timeline
   - Project completed in 2025 with TRL 4 achieved
   - ICON press materials suggest TRL 6 targeted
   - **Question:** Is ICON Olympus TRL 4 or TRL 6? Need to clarify with sources.
   - **Decision for JSON:** State "4-6 (advancing)" with note

3. **System vs. Program Distinction:**
   - MMPACT is a program encompassing multiple technologies
   - Should we list "MMPACT" or list individual technologies under MMPACT?
   - **Decision:** List individual technologies (Laser VMX, Molten Extrusion, Microwave Sintering) with MMPACT as the program source

4. **Assembly vs. Manufacturing:**
   - ARMADAS is robotic assembly (voxels/frames)
   - Not additive manufacturing or regolith-based construction
   - **Question:** Does this fit "Manufacturing and Construction" category?
   - **Decision:** Include if TRL 5+, note distinction in system description

## JSON File Status

**Created:** Yes, `/output/manufacturing-construction.json`

**Current Count:** 8 systems
- ICON Olympus Laser VMX
- ICON Molten Extrusion
- Blue Star Microwave Sintering
- AI SpaceFactory LINA
- Redwire AMF (ISS)
- Redwire RRP
- Redwire FabLab
- (Contour Crafting - pending clarity on TRL)

**Target:** Minimum 10 systems at TRL 5+

**Status:** Need 2+ more systems OR need to verify some TRL 3-4 systems should be upgraded to 5+ category

## Next Steps for Iteration 02

### High Priority:
1. **Vendor Websites Deep Dive:**
   - ICON: Review all Project Olympus materials, technical papers, press releases
   - AI SpaceFactory: Review LINA technical details, NASA collaboration docs
   - Redwire: Review all lunar manufacturing announcements

2. **Vendor Contact:**
   - Submit contact forms to ICON, AI SpaceFactory, Redwire
   - Request: Technical specifications, TRL documentation, commercial availability timeline
   - Document: Date of contact, method, response status

3. **ARMADAS Research:**
   - Determine TRL level
   - Clarify if construction-applicable
   - Add to JSON if TRL 5+

4. **Astroport Research:**
   - Company website, LinkedIn, press releases
   - Clarify technology and MMPACT role
   - Add to JSON if TRL 5+ and relevant

5. **TechPort Web Interface:**
   - Search TX07.2.3 taxonomy directly
   - Search for vendor names: "ICON", "AI SpaceFactory", "Redwire"
   - Look for any additional projects not found via API

### Medium Priority:
6. **Power Requirements Research:**
   - Search technical papers for laser sintering power needs
   - Search microwave sintering literature for power estimates
   - Document power as range/estimate if exact figures unavailable

7. **NASA SBIR Database:**
   - Search for construction/manufacturing lunar awards
   - Identify Phase II/III companies
   - Research current status of each award

### Lower Priority (Iteration 03+):
8. International programs comprehensive search
9. Academic research literature review
10. Conference proceedings search
11. Adjacent industry research

## Data Quality Goals

**For Iteration 02, target improvements:**
- ICON Olympus: Power estimate, build volume estimate
- AI SpaceFactory LINA: Power estimate, build speed if available
- All Redwire systems: Lunar-specific TRL clarification
- ARMADAS: Full details if relevant, TRL confirmation
- Astroport: Technology clarification, specs if available

**Realism Check:**
- Accept that many fields will be "unavailable"
- Focus on what can be obtained: TRL, general technology type, program affiliation
- Don't fabricate estimates without clear basis

## Completion Checklist Progress

From completion-checklist.md:

**TechPort Coverage:** 10% (started, need systematic coverage)
**Major Vendor Research:** 40% (identified, not yet contacted)
**SBIR/STTR:** 0% (not started)
**International Programs:** 20% (GLAMS/RegoLight known, not comprehensive)
**Academic Research:** 0% (not started)
**JSON Output:** 80% (file exists with 8 systems, needs 2+ more and verification)

**Overall Research Completion:** ~25%

**Ready for Phase 4:** NO (need Iterations 02-04)
