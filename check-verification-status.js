// Check verification status across all categories

var categories = [
  'launch-vehicles',
  'landers-cargo-delivery',
  'mobility-rovers',
  'power-systems',
  'life-support-eclss',
  'habitation-inflatable-modules',
  'eva-suits-human-tooling',
  'robotics-robotic-arms',
  'medical-systems',
  'communications-systems',
  'navigation-positioning-systems',
  'environmental-subsurface-sensing',
  'isru-resource-processing',
  'drilling-excavation',
  'manufacturing-construction',
  'dust-mitigation',
  'radiation-thermal-protection',
  'storage-logistics'
]

console.log('\n📊 Phase 4 Verification Status:\n')

var results = []

for (let cat of categories) {
  try {
    var json = JSON.parse(await Deno.readTextFile(`output/${cat}.json`))
    var items = json.items || []
    var total = items.length

    // Count how many items have verification data
    var verified = 0
    for (let item of items) {
      // Check if at least one field has Phase 4 verification (verified_tier set)
      // Old format: { value, source_url, verified: false }
      // New format: { value, source_url, verified_tier, verification_date, verification_notes }
      var hasVerification = false
      for (let key in item) {
        if (typeof item[key] === 'object' && item[key] !== null) {
          // Check for Phase 4 format (has verified_tier that's not null)
          if ('verified_tier' in item[key] && item[key].verified_tier) {
            hasVerification = true
            break
          }
        }
      }
      if (hasVerification) verified++
    }

    var pct = total > 0 ? Math.round((verified / total) * 100) : 0
    var status = verified === total ? '✅' : verified > 0 ? '⚠️' : '❌'

    results.push({
      category: cat,
      verified,
      total,
      pct,
      status
    })

    console.log(`${status} ${cat.padEnd(35)} ${verified}/${total} (${pct}%)`)

  } catch (e) {
    console.log(`❌ ${cat.padEnd(35)} ERROR: ${e.message}`)
  }
}

console.log('\n📈 Summary:\n')

var complete = results.filter(r => r.verified === r.total && r.total > 0)
var partial = results.filter(r => r.verified > 0 && r.verified < r.total)
var notStarted = results.filter(r => r.verified === 0)

console.log(`✅ Complete: ${complete.length}/18`)
console.log(`⚠️  Partial: ${partial.length}/18`)
console.log(`❌ Not Started: ${notStarted.length}/18`)

if (partial.length > 0) {
  console.log('\n⚠️  Partial Categories Need Work:')
  for (let r of partial) {
    console.log(`   - ${r.category}: ${r.verified}/${r.total} items (${r.pct}%)`)
  }
}

if (notStarted.length > 0) {
  console.log('\n❌ Not Started Categories:')
  for (let r of notStarted) {
    console.log(`   - ${r.category}`)
  }
}
