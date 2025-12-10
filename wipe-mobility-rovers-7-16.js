// Wipe verification data from mobility-rovers items 7-16
// These were batch-processed with a Python script instead of verified one-at-a-time

var json = JSON.parse(await Deno.readTextFile('output/mobility-rovers.json'))

// Function to clean a field object
function cleanField(field) {
  if (typeof field === 'object' && field !== null && 'value' in field) {
    return {
      value: field.value,
      source_url: null,
      verified_tier: null,
      verification_date: null,
      verification_notes: null
    }
  }
  return field
}

// Clean items 7-16 (array indices 6 onward)
for (let i = 6; i < json.items.length; i++) {
  let item = json.items[i]
  console.log(`Cleaning item ${i + 1}: ${item.vendor} ${item.model}`)

  for (let key in item) {
    // Don't clean metadata fields
    if (key !== 'notes' && key !== 'vendor' && key !== 'model' && key !== 'class' && key !== 'features' && key !== 'commercial_availability') {
      item[key] = cleanField(item[key])
    }
  }
}

await Deno.writeTextFile('output/mobility-rovers.json', JSON.stringify(json, null, 2))
console.log('✅ Wiped verification data from mobility-rovers items 7-16')
