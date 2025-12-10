# Phase 3 Research - Iteration 02

**Date:** 2025-12-08
**Focus:** Emergency equipment, additional ultrasound systems, autonomous medical software
**Strategies Executed:** Strategy 2 (SBIR/STTR partial), Strategy 3 (ISS Equipment continued), Strategy 5 (Medical Device Manufacturers)

## Systems Researched - To Be Added to JSON

### Emergency Medical Equipment (1 system)
1. **Stryker (Physio-Control) - LIFEPAK 1000 Defibrillator** (TRL 9)
   - ISS operational since July 2008
   - 3.2 kg, up to 360 joules biphasic energy
   - First AED in space, replaced manual defibrillators
   - Battery: 220 shocks, 17 hours monitoring
   - Dimensions: 23.4 x 27.7 x 8.7 cm
   - IP55 rated, custom battery for space use

### Diagnostic Imaging - Additional Ultrasound (1 system)
2. **Philips Healthcare - Lumify** (TRL 9 terrestrial, no ISS heritage)
   - Commercially available portable ultrasound
   - 108-135g (transducer weight, lightest in class)
   - Powered by connected smartphone/tablet
   - Battery life: 2.5h (iOS with power module), 7.5h (Android)
   - Three transducer options (C5-2, L12-4, S4-1)
   - **Note:** No confirmed ISS or space use, but suitable for lunar consideration due to extreme portability

### Autonomous Medical Software (2 systems)
3. **NASA - AMOS (Autonomous Medical Officer Support)** (TRL 8-9)
   - ISS technology demonstration 2022-present
   - Software platform, not hardware
   - Just-in-time training for medical procedures
   - Focus: ultrasound guidance (bladder, kidney)
   - Enables crew medical autonomy
   - **Note:** Software system, different from hardware medical devices

4. **NASA/Google - CMO-DA (Crew Medical Officer Digital Assistant)** (TRL 6-7 estimated)
   - AI-powered clinical decision support system
   - Google Cloud Vertex AI platform
   - Multimodal interface (speech, text, image)
   - Diagnostic accuracy: 74-88% in testing
   - **Status:** Proof of concept, not yet operational
   - Early development for Mars missions

### ISS Medical Kit Investigation
- **Emergency Medical Treatment Pack** exists but no specific equipment models identified
- Dental kit exists with temporary filling materials, pain relief, diagnostic guides
- No specific portable dental unit identified for space use
- Focus on prevention rather than treatment in space dentistry

## Search Queries Executed

### SBIR/STTR Research
- NASA SBIR Phase II medical diagnostic crew health 2020-2024
  - **Result:** General awards identified but specific medical projects not detailed in public search results
- "autonomous medical" NASA SBIR STTR award Phase II
  - **Result:** Found AMRA (Autonomous Medical Response Agent) SBIR award, TRL 3-6

### Medical Device Research
- Philips Lumify specifications weight dimensions power battery ✓
- ISS medical kit contents equipment defibrillator emergency NASA ✓
- LIFEPAK 1000 defibrillator specifications weight dimensions power energy ✓

### Autonomous Medical Systems
- "AMOS" "Autonomous Medical Officer Support" NASA TRL specifications ✓
- "Crew Medical Officer Digital Assistant" CMO-DA Google NASA specifications TRL ✓

### Space Dentistry
- ISS dental equipment portable space dentistry specifications
  - **Result:** Emergency dental kit exists, but no specific commercial portable dental unit for space
  - Prevention-focused approach, temporary materials only
  - 3D printing dental tools mentioned for future

## Key Findings

### Emergency Medical Equipment
- **LIFEPAK 1000:** Only AED identified for space use
- Selected after evaluation of 18 AEDs worldwide by NASA
- Custom battery (Micro Power Electronics) for space environment
- NASA-created EMI-protective cover
- Otherwise standard commercial configuration

### Portable Ultrasound Market Analysis
- **ISS:** Butterfly iQ+, GE Vivid iq (current), GE Vivid q (legacy)
- **Commercial but no ISS:** Philips Lumify
- **Weight spectrum:** 108g (Lumify transducer) → 300g (Butterfly) → 5200g (GE Vivid iq)
- **Power spectrum:** Device-powered (Lumify) → 10W (Butterfly) → 500W (GE Vivid iq)

### Autonomous Medical Software vs Hardware
- **AMOS:** Software guidance system, ISS-proven
- **CMO-DA:** AI assistant, early development
- **Consideration:** Should software systems be separate JSON category or included with notes?

### Dental Equipment Gap
- No commercial portable dental unit identified for space use
- ISS relies on emergency kit with temporary materials
- Not a priority for current lunar missions
- Future: 3D-printed tools, remote diagnostic cameras

## Data Quality Assessment

### LIFEPAK 1000: 5/6 complete
- ✓ Mass, Power (energy), Dimensions, Capabilities, Heritage
- ✗ Cost, Turnaround time

### Philips Lumify: 4/6 complete
- ✓ Mass, Power (battery life), Capabilities
- ✗ Cost, Turnaround, Dimensions (full system)
- ⚠ No space heritage

### AMOS: 3/6 complete
- ✓ TRL (estimated), Capabilities, Heritage
- ✗ Mass, Power, Cost (software system)
- **Note:** Software, not hardware - different metrics needed

### CMO-DA: 2/6 complete
- ✓ Capabilities, TRL (estimated)
- ✗ All hardware specs (cloud-based software)
- **Status:** Too early stage for inclusion? (TRL 6-7)

## Categories Covered - Updated Status

- [x] Diagnostic Imaging (Ultrasound): 4 systems (Butterfly iQ+, GE Vivid iq/q, Philips Lumify)
- [x] Laboratory Analysis: 2 systems (rHEALTH One, WetLab-2)
- [x] Vital Signs Monitoring: 1 system (Tempus Pro)
- [x] Emergency Medical Equipment: 1 system (LIFEPAK 1000)
- [x] Advanced/Biomanufacturing: 1 system (BFF)
- [x] Telemedicine Software: 2 systems (AMOS, CMO-DA)
- [ ] Dental Equipment: 0 commercial systems (emergency kit only)
- [ ] Surgical Systems: 0 systems (not found at TRL 5+)
- [ ] Exercise/Rehabilitation: 0 systems (out of scope for medical systems?)

## Research Challenges Encountered

### SBIR/STTR Database Access
- Public search results show general awards but not project details
- Need to access full solicitation PDFs or NASA database directly
- Award abstracts available but scattered across years

### Software vs Hardware Classification
- AMOS and CMO-DA are software systems
- Different specification requirements (no mass/power for cloud software)
- Should these be in separate category or flagged as software?

### Dental Equipment Absence
- No commercial portable dental unit identified for space
- Emergency kits exist but are not standalone commercial products
- May not meet TRL 5+ threshold for commercial availability

### Cost Data Universal Gap
- 0/11 systems have cost data
- Medical device vendors don't publish space-qualified equipment pricing
- May need to note "commercial pricing available upon request" or research procurement databases

## Statistics - Cumulative

- **Total Items Researched:** 11 (7 in JSON from Iteration 01, 4 new this iteration)
- **TRL 9 (Operational):** 9 systems
- **TRL 8:** 1 system (AMOS estimated)
- **TRL 6-7:** 1 system (CMO-DA - may exclude as too early)
- **Commercial Products:** 5/11 (45%)
- **ISS Heritage:** 9/11 (82%)
- **Mass Data:** 6/11 (55%)
- **Power Data:** 5/11 (45%)
- **Cost Data:** 0/11 (0%)

## Next Iteration Priorities

### Still Needed:
1. **More vital signs monitors** - Spacelabs current models, other vendors
2. **Additional lab diagnostics** - Lab-on-chip systems from UC Berkeley/Utah
3. **Medical imaging beyond ultrasound** - any other portable systems?
4. **Exercise/countermeasure equipment** - ARED, treadmill, cycle ergometer (if in scope)
5. **Wearable biosensors** - continuous health monitoring
6. **Medical consumables/supplies** - IV systems, medical kits (if commercial products exist)

### Data Completion:
1. Add 4 systems from this iteration to JSON
2. Research cost estimates (procurement records, industry reports)
3. Find turnaround/procurement timelines
4. Verify all TRL assignments with sources

### Strategy Execution:
- Continue Strategy 2: SBIR/STTR (need better access to project details)
- Continue Strategy 5: Medical device manufacturers (Spacelabs, others)
- Start Strategy 4: International vendors (ESA, JAXA medical equipment)
- Start Strategy 6: Adjacent industries (military medical, remote medicine)

## Action Items

1. Update JSON with 4 new systems (LIFEPAK 1000, Philips Lumify, AMOS, decide on CMO-DA inclusion)
2. Research Spacelabs current monitor models and specifications
3. Find wearable biosensor vendors with space applications
4. Investigate ISS exercise equipment (ARED, T2) if in scope for medical systems
5. Search for IV pumps, infusion systems with space qualification
6. Determine if software systems should be separate category in JSON

## Sources Referenced

- NASA news (LIFEPAK selection announcement)
- Stryker/Physio-Control product specifications
- Philips Healthcare Lumify specifications
- NASA Technical Reports (AMOS ISS demonstrations)
- Google Cloud/NASA press releases (CMO-DA)
- ISS medical kit documentation
- Space medicine research papers (dental care in space)

## Time Efficiency Note

- Iteration 02 took longer due to searching for dental equipment that doesn't exist commercially
- Should prioritize categories with known commercial products in next iteration
- SBIR database requires different access method - may defer detailed SBIR search
