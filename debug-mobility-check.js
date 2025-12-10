// Debug mobility-rovers detection

var json = JSON.parse(await Deno.readTextFile('output/mobility-rovers.json'))
var items = json.items || []

console.log(`\nTotal items: ${items.length}\n`)

var verified = 0

for (let i = 0; i < items.length; i++) {
  let item = items[i]
  let itemNum = i + 1

  // Check if at least one field has Phase 4 verification
  var hasVerification = false
  for (let key in item) {
    if (typeof item[key] === 'object' && item[key] !== null) {
      if ('verified_tier' in item[key] && item[key].verified_tier) {
        hasVerification = true
        break
      }
    }
  }

  if (hasVerification) verified++

  var status = hasVerification ? '✅' : '❌'
  console.log(`${status} Item ${itemNum}: ${item.vendor} ${item.model}`)
}

console.log(`\n✅ Verified: ${verified}/${items.length}`)
