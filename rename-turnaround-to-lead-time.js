// Rename turnaround_time to procurement_lead_time across all files

var files = [
  'output/launch-vehicles.json',
  'output/medical-systems.json',
  'output/habitation-inflatable-modules.json',
  'output/power-systems.json',
  'output/navigation-positioning-systems.json',
  'output/communications-systems.json',
  'output/radiation-thermal-protection.json',
  'output/landers-cargo-delivery.json',
  'output/life-support-eclss.json',
  'output/eva-suits-human-tooling.json',
  'output/storage-logistics.json',
  'output/mobility-rovers.json',
  'output/isru-resource-processing.json',
  'output/drilling-excavation.json',
  'output/environmental-subsurface-sensing.json',
  'output/robotics-robotic-arms.json',
  'output/dust-mitigation.json',
  'output/manufacturing-construction.json'
]

var totalRenamed = 0

for (var file of files) {
  var content = await Deno.readTextFile(file)
  var updated = content.replaceAll('turnaround_time', 'procurement_lead_time')

  if (content !== updated) {
    await Deno.writeTextFile(file, updated)
    totalRenamed++
    console.log(`✓ ${file}`)
  }
}

console.log(`\n✅ Renamed field in ${totalRenamed} JSON files`)
