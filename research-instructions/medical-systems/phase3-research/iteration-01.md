# Phase 3 Research - Iteration 01

**Date:** 2025-12-08
**Focus:** Initial systems from preliminary research + ultrasound equipment deep dive
**Strategies Executed:** Partial Strategy 1 (TechPort), Strategy 3 (ISS Equipment)

## Systems Added to JSON (7 items)

### Diagnostic Imaging - Ultrasound (3 systems)
1. **Butterfly Network - Butterfly iQ+** (TRL 9)
   - ISS operational since 2021
   - 300g, ~10W power, semiconductor-based
   - First crew-autonomous handheld ultrasound in space

2. **GE HealthCare - Vivid iq** (TRL 9)
   - ISS operational since Sept 2025
   - 5.2 kg, 500W power, laptop-style
   - Replaced decade-old Vivid q system

3. **GE HealthCare - Vivid q** (TRL 9)
   - ISS operational 2011-2025 (14+ years)
   - Legacy system, specifications incomplete
   - Longest-serving ultrasound on ISS

### Laboratory Diagnostics (2 systems)
4. **DNA Medicine Institute - rHEALTH One** (TRL 9)
   - ISS demonstration May 2022
   - 1.5 kg, 2.5W power, microvolume blood analysis
   - Lab-on-a-chip cytometry, 5-10 μL samples

5. **NASA Ames - WetLab-2** (TRL 9)
   - ISS operational research facility
   - Real-time PCR gene expression analysis
   - Not commercially available (NASA research platform)

### Advanced Medical Systems (2 systems)
6. **Redwire Space - BioFabrication Facility** (TRL 9)
   - ISS permanent facility since 2019
   - 3D bioprinting of human tissue in space
   - Export controlled, specifications proprietary

7. **Philips/RDT - Tempus Pro** (TRL 9)
   - ESA-supported telemedicine monitor
   - 2.9 kg, 10.5-14h battery, satellite communications
   - Used at astronaut recovery operations

## Search Queries Executed

### TechPort Searches (JavaScript limitation encountered)
- site:techport.nasa.gov TX06 crew health medical
- NASA TechPort crew health monitoring system TRL
- "TechPort" "medical diagnostic" OR "crew health" OR "telemedicine"
- **Result:** TechPort web interface requires JavaScript, cannot extract via WebFetch
- **Alternative:** Found project IDs (93655, 92651, 92119) but cannot access full data
- **Action Item:** Need different approach for TechPort data

### Ultrasound System Research
- Butterfly IQ+ ultrasound TRL NASA ISS space qualification ✓
- GE Vivid ultrasound ISS space station specifications ✓
- Philips Lumify ultrasound space ISS medical imaging ✓
  - **Result:** No ISS connection found for Philips Lumify

### Medical Equipment Specifications
- GE Vivid iq ultrasound specifications weight dimensions power ✓
- Butterfly IQ ultrasound specifications mass weight power consumption ✓

### Monitoring Systems
- Spacelabs vital signs monitor ISS specifications model
  - **Result:** Found historical NASA connection but no current ISS model specs
- Tempus Pro ESA medical monitor specifications weight power TRL ✓

## Data Quality Assessment

### Complete Specifications (3/6 key fields):
- Butterfly iQ+: 4/6 (mass, power, dimensions, capabilities) ✓
- GE Vivid iq: 5/6 (mass, power, dimensions, capabilities, heritage) ✓
- Tempus Pro: 3/6 (mass, capabilities, heritage) ✓
- rHEALTH One: 4/6 (mass, power, dimensions, capabilities) ✓

### Incomplete Specifications:
- GE Vivid q: 1/6 (legacy system, limited data available)
- WetLab-2: 1/6 (NASA research platform, not commercial)
- BioFabrication Facility: 1/6 (export controlled, proprietary)

### Missing Data Common Across Items:
- **Cost (USD):** 0/7 items have pricing
- **Turnaround time:** 0/7 items have procurement data
- **Commercial availability:** Only 3/7 are clearly commercial products (Butterfly, GE Vivid iq, Tempus Pro)

## Key Findings

### Ultrasound Market on ISS:
- **Current:** Butterfly iQ+ (handheld), GE Vivid iq (laptop-style)
- **Legacy:** GE Vivid q (14 years operational life demonstrates reliability)
- **Not Found:** Philips Lumify has no ISS connection despite being portable

### Technology Trends:
1. **Miniaturization:** Butterfly iQ+ (300g) vs GE Vivid iq (5.2kg) vs traditional (5-15kg)
2. **Power Efficiency:** rHEALTH One (2.5W USB powered) vs GE Vivid iq (500W)
3. **Commercial-Off-The-Shelf (COTS):** Butterfly iQ+ explicitly described as COTS technology
4. **Long Operational Life:** GE Vivid q operated 2011-2025 without replacement

### Research Challenges:
1. **TechPort Access:** Cannot use JavaScript-dependent site, need API or alternative sources
2. **Proprietary Data:** Export control (ECCN) limits BFF specifications
3. **Pricing:** Medical device vendors don't publish space-qualified equipment pricing
4. **Turnaround:** Procurement timelines not publicly available

## Categories Covered So Far

- [x] Diagnostic Imaging (Ultrasound): 3 systems
- [x] Laboratory Analysis: 2 systems
- [x] Vital Signs Monitoring: 1 system (Tempus Pro)
- [x] Advanced/Biomanufacturing: 1 system (BFF)
- [ ] Emergency Medical Equipment: 0 systems
- [ ] Dental Equipment: 0 systems
- [ ] Surgical Systems: 0 systems
- [ ] Telemedicine Software: 0 systems (hardware only so far)
- [ ] Exercise/Rehabilitation: 0 systems

## Next Iteration Priorities

### Strategy 2: SBIR/STTR Database
- Search for Phase II awards in medical/health categories
- Look for companies that transitioned to commercial products
- Target areas: telemedicine, diagnostics, monitoring

### Strategy 5: Medical Device Manufacturers
- Research Spacelabs current products (historical NASA contractor)
- Investigate other portable ultrasound vendors (Philips Lumify specs even if not ISS)
- Check GE, Philips, Siemens for space-qualified variants

### Fill Equipment Gaps:
- Emergency medical equipment (defibrillators, airway management)
- Vital signs monitoring (expand beyond Tempus Pro)
- Dental equipment
- Telemedicine software/decision support systems (AMOS, CMO-DA)

### Improve Data Completeness:
- Find cost estimates (even if approximate)
- Research procurement processes for turnaround time
- Verify TRL assignments with original sources

## Sources Referenced

### NASA Sources:
- NASA spinoff publications (rHEALTH One, Spacelabs heritage)
- NASA technical reports (Butterfly iQ evaluation)
- NASA mission updates (GE Vivid iq deployment)
- NASA Science mission pages (WetLab-2)

### Vendor Sources:
- Butterfly Network official website and press releases
- GE HealthCare product specifications
- Philips Healthcare Tempus Pro specs
- Redwire Space newsroom

### Industry Publications:
- Fierce Healthcare
- Medical Device Network
- SpaceNews
- Nature Communications (peer-reviewed)

### International Sources:
- ESA website (Tempus Pro, telemedicine)
- ISS National Laboratory (facilities directory)

## Statistics

- **Total Items in JSON:** 7
- **TRL 9 (Operational):** 7/7 (100%)
- **TRL 5-8:** 0 (need to add development-stage systems)
- **Commercial Products:** 3/7 (43%)
- **Mass Data:** 5/7 (71%)
- **Power Data:** 4/7 (57%)
- **Cost Data:** 0/7 (0%)
- **Turnaround Data:** 0/7 (0%)

## Action Items for Next Iteration

1. Search NASA SBIR database for medical technology Phase II awards 2015-2025
2. Research Philips Lumify specifications (potential lunar use even without ISS heritage)
3. Find emergency medical equipment (defibrillators, medical kits)
4. Research autonomous medical software (AMOS, CMO-DA) - add as separate category?
5. Investigate Spacelabs current monitoring products
6. Search for cost estimates in procurement databases or industry reports
7. Look for dental equipment with space qualification or suitability
