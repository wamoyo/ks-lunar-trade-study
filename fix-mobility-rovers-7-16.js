// Fix mobility-rovers items 7-16 - restore to pre-Phase 4 format
// The correct reset format is: { value, source_url: null, verified: false }

var json = JSON.parse(await Deno.readTextFile('output/mobility-rovers.json'))

// Function to clean a field object - restore to pre-Phase 4 format
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

// Function to clean commercial_availability object
function cleanCommercialAvailability(ca) {
  if (typeof ca === 'object' && ca !== null && 'status' in ca) {
    return {
      status: ca.status,
      notes: ca.notes,
      source_url: null,
      verified: false
    }
  }
  return ca
}

// Clean items 7-16 (array indices 6 onward)
for (let i = 6; i < json.items.length; i++) {
  let item = json.items[i]
  console.log(`Resetting item ${i + 1}: ${item.vendor} ${item.model}`)

  for (let key in item) {
    // Don't clean metadata fields (vendor, model, class, notes, features)
    if (key !== 'vendor' && key !== 'model' && key !== 'class' && key !== 'notes' && key !== 'features') {
      if (key === 'commercial_availability') {
        // Special handling for commercial_availability
        item[key] = cleanCommercialAvailability(item[key])
      } else {
        // Regular field, clean it
        item[key] = cleanField(item[key])
      }
    }
  }
}

await Deno.writeTextFile('output/mobility-rovers.json', JSON.stringify(json, null, 2))
console.log('✅ Fixed mobility-rovers items 7-16 - restored to pre-Phase 4 format')
console.log('   - All fields now have verified: false (not verified_tier)')
