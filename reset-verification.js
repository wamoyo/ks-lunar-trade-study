// Reset Launch Vehicles JSON - Remove all Phase 4 verification work

var fs = await Deno.readTextFile('output/launch-vehicles.json')
var json = JSON.parse(fs)

// Function to clean a field object
function cleanField(field) {
  if (typeof field === 'object' && field !== null && 'value' in field) {
    return {
      value: field.value,
      source_url: null,
      verified: false
    }
  }
  return field
}

// Clean each item
json.items = json.items.map(item => {
  var cleanedItem = {}

  for (var key in item) {
    if (key === 'notes' || key === 'vendor' || key === 'model') {
      // Keep these as-is
      cleanedItem[key] = item[key]
    } else {
      // Clean field objects
      cleanedItem[key] = cleanField(item[key])
    }
  }

  return cleanedItem
})

// Remove verification_status section
delete json.verification_status

// Write back
await Deno.writeTextFile('output/launch-vehicles.json', JSON.stringify(json, null, 2))

console.log('✅ Reset complete - all Phase 4 verification removed')
console.log(`   - ${json.items.length} items reset`)
console.log('   - All fields now have verified: false')
console.log('   - verification_tier, verification_date, verification_notes removed')
console.log('   - additional_sources removed')
