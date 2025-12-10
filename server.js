// Deno server for monitoring lunar trade study research progress
// Run with: deno run --allow-net --allow-read --watch server.js

var categories = [
  "launch-vehicles",
  "landers-cargo-delivery",
  "habitation-inflatable-modules",
  "radiation-thermal-protection",
  "life-support-eclss",
  "medical-systems",
  "eva-suits-human-tooling",
  "power-systems",
  "communications-systems",
  "navigation-positioning-systems",
  "mobility-rovers",
  "environmental-subsurface-sensing",
  "robotics-robotic-arms",
  "drilling-excavation",
  "isru-resource-processing",
  "manufacturing-construction",
  "dust-mitigation",
  "storage-logistics"
]

// Read file with error handling
async function readFile (path) {
  try {
    return await Deno.readTextFile(path)
  } catch (e) {
    return null
  }
}

// Read JSON file
async function readJSON (path) {
  var content = await readFile(path)
  if (!content) return null
  try {
    return JSON.parse(content)
  } catch (e) {
    return null
  }
}

// Get current phase for a category
async function getCurrentPhase (category) {
  var foundPhase = "not started"

  // Check phase 1
  var phase1 = await readFile(`research-instructions/${category}/phase1-prelim.md`)
  if (phase1) foundPhase = "phase1-prelim"

  // Check phase 2
  var phase2 = await readFile(`research-instructions/${category}/phase2-strategies.md`)
  if (phase2) foundPhase = "phase2-strategies"

  // Check for phase3 iterations
  var iterationCount = 0
  try {
    for await (var entry of Deno.readDir(`research-instructions/${category}/phase3-research`)) {
      if (entry.name.startsWith("iteration-") && entry.name.endsWith(".md")) {
        iterationCount++
      }
    }
    if (iterationCount > 0) {
      foundPhase = `phase3-research (${iterationCount} iteration${iterationCount > 1 ? 's' : ''})`
    }
  } catch (e) {
    // phase3-research folder doesn't exist or is empty
  }

  // Check phase 4 (final phase, overrides phase 3)
  var phase4 = await readFile(`research-instructions/${category}/phase4-verification.md`)
  if (phase4) foundPhase = "phase4-verification"

  return foundPhase
}

// Get all data for a category
async function getCategoryData (category) {
  var phase = await getCurrentPhase(category)
  var json = await readJSON(`output/${category}.json`)
  var itemCount = json?.items?.length || 0

  // Get all research files
  var files = []

  // Phase 1-2 files
  var phase12Files = [
    'instructions.md',
    'completion-checklist.md',
    'phase1-prelim.md',
    'phase2-strategies.md'
  ]

  for (var filename of phase12Files) {
    var content = await readFile(`research-instructions/${category}/${filename}`)
    if (content) {
      files.push({ name: filename, content, type: 'phase' })
    }
  }

  // Get iteration files from phase3-research folder (sorted)
  var iterationFiles = []
  try {
    for await (var entry of Deno.readDir(`research-instructions/${category}/phase3-research`)) {
      if (entry.name.startsWith("iteration-") && entry.name.endsWith(".md")) {
        iterationFiles.push(entry.name)
      }
    }
  } catch (e) {
    // no phase3-research folder yet
  }

  // Sort iteration files naturally (iteration-01, iteration-02, etc.)
  iterationFiles.sort((a, b) => {
    var numA = parseInt(a.match(/\d+/)?.[0] || '0')
    var numB = parseInt(b.match(/\d+/)?.[0] || '0')
    return numA - numB
  })

  // Add sorted iteration files
  for (var filename of iterationFiles) {
    var content = await readFile(`research-instructions/${category}/phase3-research/${filename}`)
    files.push({ name: `phase3-research/${filename}`, content, type: 'iteration' })
  }

  // Phase 4 file (comes after phase 3 iterations)
  var phase4Content = await readFile(`research-instructions/${category}/phase4-verification.md`)
  if (phase4Content) {
    files.push({ name: 'phase4-verification.md', content: phase4Content, type: 'phase' })
  }

  return {
    category,
    phase,
    itemCount,
    items: json?.items || [],
    lastUpdated: json?.last_updated || null,
    files
  }
}

// Get all categories data
async function getAllData () {
  var data = []
  for (var category of categories) {
    data.push(await getCategoryData(category))
  }
  return data
}

// SSE clients
var clients = []

// Broadcast update to all SSE clients
function broadcast (data) {
  var message = `data: ${JSON.stringify(data)}\n\n`
  clients = clients.filter(client => {
    try {
      client.write(new TextEncoder().encode(message))
      return true
    } catch (e) {
      return false
    }
  })
}

// Watch for file changes
async function watchFiles () {
  var watcher = Deno.watchFs(["output", "research-instructions"])

  for await (var event of watcher) {
    // Catch ALL events - create, modify, remove, rename
    // Filter out .tmp files since they get renamed
    var hasRealFile = event.paths.some(p => !p.includes(".tmp"))

    if (hasRealFile) {
      console.log("File changed:", event.kind, event.paths)
      var data = await getAllData()
      broadcast({ type: "update", data })
    }
  }
}

// Polling fallback - refresh every 10 seconds as backup
async function pollFiles () {
  while (true) {
    await new Promise(resolve => setTimeout(resolve, 10000))
    var data = await getAllData()
    broadcast({ type: "update", data })
  }
}

// Start file watcher and polling
watchFiles().catch(console.error)
pollFiles().catch(console.error)

// HTTP server
// Simple session storage (in-memory, resets on server restart)
var sessions = new Set()

function generateSessionId() {
  return crypto.randomUUID()
}

function loginPage() {
  return `<!DOCTYPE html>
<html>
<head>
  <title>Lunar Trade Study - Login</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
      background: linear-gradient(135deg, #0a0e1a 0%, #1a1f3a 100%);
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #e0e7ff;
      padding: 20px;
    }
    .login-container {
      background: rgba(26, 31, 58, 0.8);
      border: 1px solid #2d3561;
      border-radius: 16px;
      padding: 40px;
      width: 100%;
      max-width: 400px;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
      backdrop-filter: blur(10px);
    }
    .logo {
      text-align: center;
      margin-bottom: 30px;
    }
    .logo svg {
      width: 60px;
      height: 60px;
      fill: #4dd0e1;
      margin-bottom: 15px;
    }
    h1 {
      font-size: 24px;
      color: #4dd0e1;
      text-align: center;
      margin-bottom: 10px;
    }
    .subtitle {
      text-align: center;
      color: #90a4ae;
      font-size: 14px;
      margin-bottom: 30px;
    }
    .form-group {
      margin-bottom: 20px;
    }
    label {
      display: block;
      margin-bottom: 8px;
      color: #b0bec5;
      font-size: 14px;
    }
    input[type="password"] {
      width: 100%;
      padding: 12px 16px;
      background: rgba(10, 14, 26, 0.6);
      border: 1px solid #2d3561;
      border-radius: 8px;
      color: #e0e7ff;
      font-size: 16px;
      transition: border-color 0.3s;
    }
    input[type="password"]:focus {
      outline: none;
      border-color: #4dd0e1;
    }
    button {
      width: 100%;
      padding: 12px;
      background: linear-gradient(135deg, #4dd0e1 0%, #26c6da 100%);
      border: none;
      border-radius: 8px;
      color: #0a0e1a;
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;
      transition: transform 0.2s, box-shadow 0.2s;
    }
    button:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(77, 208, 225, 0.4);
    }
    button:active {
      transform: translateY(0);
    }
    .error {
      color: #ff5252;
      font-size: 14px;
      text-align: center;
      margin-top: 15px;
      display: none;
    }
    .error.show {
      display: block;
    }
    @media (max-width: 480px) {
      .login-container {
        padding: 30px 20px;
      }
      h1 {
        font-size: 20px;
      }
    }
  </style>
</head>
<body>
  <div class="login-container">
    <div class="logo">
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2"/>
        <circle cx="12" cy="12" r="3" fill="currentColor"/>
        <path d="M12 3V6M12 18V21M3 12H6M18 12H21" stroke="currentColor" stroke-width="2"/>
      </svg>
    </div>
    <h1>Lunar Trade Study</h1>
    <p class="subtitle">Enter password to access</p>
    <form id="loginForm">
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" name="password" autofocus required>
      </div>
      <button type="submit">Access Dashboard</button>
      <div class="error" id="error"></div>
    </form>
  </div>
  <script>
    document.getElementById('loginForm').addEventListener('submit', async (e) => {
      e.preventDefault()
      var password = document.getElementById('password').value
      var errorEl = document.getElementById('error')

      try {
        var response = await fetch('/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: 'password=' + encodeURIComponent(password)
        })

        var data = await response.json()

        if (data.success) {
          window.location.href = '/'
        } else {
          errorEl.textContent = 'Invalid password'
          errorEl.classList.add('show')
          document.getElementById('password').value = ''
        }
      } catch (err) {
        errorEl.textContent = 'Connection error'
        errorEl.classList.add('show')
      }
    })
  </script>
</body>
</html>`
}

async function handler (req) {
  var url = new URL(req.url)

  // Login endpoint
  if (url.pathname === '/login' && req.method === 'POST') {
    var body = await req.text()
    var params = new URLSearchParams(body)
    var password = params.get('password')

    if (password === '1yeartoluna') {
      var sessionId = generateSessionId()
      sessions.add(sessionId)

      return new Response(JSON.stringify({ success: true }), {
        headers: {
          'Content-Type': 'application/json',
          'Set-Cookie': `session=${sessionId}; Path=/; HttpOnly; SameSite=Strict; Max-Age=2592000`
        }
      })
    } else {
      return new Response(JSON.stringify({ success: false, error: 'Invalid password' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      })
    }
  }

  // Check authentication for all other routes
  var cookies = req.headers.get('cookie') || ''
  var sessionCookie = cookies.split(';').find(c => c.trim().startsWith('session='))
  var sessionId = sessionCookie ? sessionCookie.split('=')[1] : null

  if (!sessionId || !sessions.has(sessionId)) {
    // Show login page
    return new Response(loginPage(), {
      headers: { 'Content-Type': 'text/html' }
    })
  }

  // SSE endpoint
  if (url.pathname === "/events") {
    var body = new ReadableStream({
      start (controller) {
        clients.push(controller)

        // Send initial data
        getAllData().then(data => {
          var message = `data: ${JSON.stringify({ type: "update", data })}\n\n`
          controller.enqueue(new TextEncoder().encode(message))
        })

        // Keep-alive ping every 30s
        var interval = setInterval(() => {
          try {
            controller.enqueue(new TextEncoder().encode(": ping\n\n"))
          } catch (e) {
            clearInterval(interval)
            clients = clients.filter(c => c !== controller)
          }
        }, 30000)
      }
    })

    return new Response(body, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive"
      }
    })
  }

  // API endpoint for iteration content
  if (url.pathname === "/api/iteration") {
    var category = url.searchParams.get("category")
    var iteration = url.searchParams.get("iteration")
    var content = await readFile(`research-instructions/${category}/phase3-research/${iteration}`)
    return new Response(JSON.stringify({ content }), {
      headers: { "Content-Type": "application/json" }
    })
  }

  // Serve dashboard HTML
  if (url.pathname === "/" || url.pathname === "/index.html") {
    return new Response(dashboardHTML, {
      headers: { "Content-Type": "text/html" }
    })
  }

  return new Response("Not Found", { status: 404 })
}

var dashboardHTML = `<!DOCTYPE html>
<html>
<head>
  <title>Lunar Trade Study Dashboard</title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }

    @keyframes twinkle {
      0%, 100% { opacity: 0.3; }
      50% { opacity: 1; }
    }

    body {
      font-family: "Ubuntu", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Helvetica", "Arial", sans-serif;
      background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
      color: #e0e6ed;
      padding: 20px;
      min-height: 100vh;
      position: relative;
      overflow-x: hidden;
    }

    body::before {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image:
        radial-gradient(2px 2px at 20px 30px, #eee, transparent),
        radial-gradient(2px 2px at 60px 70px, #fff, transparent),
        radial-gradient(1px 1px at 50px 50px, #ddd, transparent),
        radial-gradient(1px 1px at 130px 80px, #fff, transparent),
        radial-gradient(2px 2px at 90px 10px, #fff, transparent),
        radial-gradient(1px 1px at 200px 150px, #eee, transparent),
        radial-gradient(1px 1px at 175px 25px, #fff, transparent),
        radial-gradient(2px 2px at 250px 100px, #ddd, transparent);
      background-size: 300px 300px;
      background-repeat: repeat;
      animation: twinkle 3s infinite;
      pointer-events: none;
      opacity: 0.5;
      z-index: 0;
    }

    h1 {
      margin: 40px 0 50px 0;
      color: #4dd0e1;
      font-size: 32px;
      font-weight: 300;
      letter-spacing: 3px;
      text-align: center;
      text-shadow: 0 0 20px rgba(77, 208, 225, 0.5);
      position: relative;
      z-index: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 15px;
    }
    h1 svg {
      width: 42px;
      height: 42px;
      filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.3));
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
      gap: 20px;
      margin-bottom: 40px;
      position: relative;
      z-index: 1;
    }
    .card {
      background: linear-gradient(135deg, #1a1f3a 0%, #0f1324 100%);
      border: 1px solid #2d3561;
      border-radius: 12px;
      padding: 20px;
      cursor: pointer;
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
    }
    .card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(45deg, transparent, rgba(77, 208, 225, 0.03), transparent);
      transition: all 0.3s;
      opacity: 0;
    }
    .card:hover {
      border-color: #4dd0e1;
      box-shadow: 0 8px 30px rgba(77, 208, 225, 0.3);
      transform: translateY(-5px);
    }
    .card:hover::before {
      opacity: 1;
    }
    .card h2 {
      font-size: 16px;
      color: #4dd0e1;
      margin-bottom: 12px;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 1px;
      text-shadow: 0 0 10px rgba(77, 208, 225, 0.3);
    }
    .phase {
      background: linear-gradient(135deg, #2d3561 0%, #1a2038 100%);
      display: inline-block;
      padding: 6px 14px;
      border-radius: 6px;
      font-size: 11px;
      margin-bottom: 10px;
      color: #81c784;
      border: 1px solid rgba(129, 199, 132, 0.2);
      text-transform: uppercase;
      letter-spacing: 0.5px;
      font-weight: 500;
    }
    .count {
      font-size: 14px;
      color: #90a4ae;
      margin-bottom: 5px;
    }
    .updated {
      font-size: 12px;
      color: #546e7a;
    }
    .iterations {
      margin-top: 10px;
      font-size: 12px;
      color: #ffb74d;
    }
    .modal {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.92);
      backdrop-filter: blur(5px);
      z-index: 1000;
      overflow: auto;
      padding: 40px 20px;
      animation: fadeIn 0.2s ease;
    }
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    .modal-content {
      max-width: 1200px;
      margin: 0 auto;
      background: linear-gradient(135deg, #1a1f3a 0%, #0f1324 100%);
      border: 1px solid #4dd0e1;
      border-radius: 12px;
      padding: 30px;
      position: relative;
      box-shadow: 0 20px 60px rgba(77, 208, 225, 0.3);
      animation: slideUp 0.3s ease;
    }
    @keyframes slideUp {
      from { transform: translateY(50px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }
    .close {
      position: absolute;
      top: 20px;
      right: 25px;
      font-size: 32px;
      color: #90a4ae;
      cursor: pointer;
      line-height: 1;
      transition: all 0.2s;
    }
    .close:hover {
      color: #4dd0e1;
      text-shadow: 0 0 10px rgba(77, 208, 225, 0.5);
      transform: rotate(90deg);
    }
    .item {
      background: linear-gradient(135deg, #0f1324 0%, #0a0e1a 100%);
      border: 1px solid #2d3561;
      border-radius: 8px;
      padding: 20px;
      margin-bottom: 20px;
      transition: all 0.2s;
    }
    .item:hover {
      border-color: #4dd0e1;
      box-shadow: 0 4px 15px rgba(77, 208, 225, 0.15);
    }
    .item h3 {
      color: #4dd0e1;
      font-size: 18px;
      margin-bottom: 15px;
      text-shadow: 0 0 10px rgba(77, 208, 225, 0.2);
    }
    .field {
      margin-bottom: 12px;
      padding-left: 15px;
      border-left: 2px solid #2d3561;
    }
    .field-name {
      color: #90a4ae;
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 4px;
    }
    .field-value {
      color: #e0e6ed;
      font-size: 14px;
    }
    .verified {
      display: inline-block;
      padding: 3px 10px;
      border-radius: 4px;
      font-size: 10px;
      margin-left: 8px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      border: 1px solid;
    }
    /* Tier-based verification badges */
    .verified.authoritative {
      background: linear-gradient(135deg, #10b981 0%, #059669 100%);
      color: #d1fae5;
      border-color: rgba(209, 250, 229, 0.3);
      box-shadow: 0 0 10px rgba(16, 185, 129, 0.3);
    }
    .verified.credible {
      background: linear-gradient(135deg, #84cc16 0%, #65a30d 100%);
      color: #ecfccb;
      border-color: rgba(236, 252, 203, 0.3);
      box-shadow: 0 0 10px rgba(132, 204, 22, 0.3);
    }
    .verified.reference {
      background: linear-gradient(135deg, #eab308 0%, #ca8a04 100%);
      color: #fef9c3;
      border-color: rgba(254, 249, 195, 0.3);
      box-shadow: 0 0 10px rgba(234, 179, 8, 0.3);
    }
    .verified.caution {
      background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
      color: #ffedd5;
      border-color: rgba(255, 237, 213, 0.3);
      box-shadow: 0 0 10px rgba(249, 115, 22, 0.3);
    }
    .verified.unverified {
      background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
      color: #fee2e2;
      border-color: rgba(254, 226, 226, 0.3);
      box-shadow: 0 0 10px rgba(239, 68, 68, 0.3);
    }
    /* Legacy support for old true/false */
    .verified.true {
      background: linear-gradient(135deg, #10b981 0%, #059669 100%);
      color: #d1fae5;
      border-color: rgba(209, 250, 229, 0.3);
      box-shadow: 0 0 10px rgba(16, 185, 129, 0.3);
    }
    .verified.false {
      background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
      color: #fee2e2;
      border-color: rgba(254, 226, 226, 0.3);
      box-shadow: 0 0 10px rgba(239, 68, 68, 0.3);
    }
    .source-link {
      color: #4dd0e1;
      text-decoration: none;
      font-size: 12px;
      word-break: break-all;
      transition: all 0.2s;
    }
    .source-link:hover {
      text-decoration: underline;
      text-shadow: 0 0 5px rgba(77, 208, 225, 0.5);
    }
    .iterations-container {
      display: flex;
      flex-direction: column;
      gap: 15px;
    }
    .iteration-wrapper {
      display: flex;
      flex-direction: column;
    }
    .iteration-link {
      color: #ffb74d;
      cursor: pointer;
      text-decoration: underline;
      font-size: 12px;
      display: inline-block;
      width: fit-content;
    }
    .iteration-link::before {
      content: '[+]';
      margin-right: 6px;
      font-size: 11px;
      display: inline-block;
      font-weight: bold;
    }
    .iteration-link.expanded::before {
      content: '[-]';
    }
    .iteration-link:hover {
      color: #ffa726;
    }
    .iteration-content {
      background: linear-gradient(135deg, #0a0e1a 0%, #05070f 100%);
      border: 1px solid #2d3561;
      padding: 15px;
      border-radius: 6px;
      margin-top: 10px;
      margin-left: 20px;
      white-space: pre-wrap;
      font-family: 'Courier New', monospace;
      font-size: 12px;
      color: #b0bec5;
      max-height: 400px;
      overflow-y: auto;
      box-shadow: inset 0 2px 10px rgba(0, 0, 0, 0.5);
    }
    .iteration-header {
      color: #ffb74d;
      font-size: 11px;
      font-weight: bold;
      text-transform: uppercase;
      margin-bottom: 10px;
      padding-bottom: 5px;
      border-bottom: 1px solid #2d3561;
    }
    .iteration-content::-webkit-scrollbar {
      width: 8px;
    }
    .iteration-content::-webkit-scrollbar-track {
      background: #0a0e1a;
      border-radius: 4px;
    }
    .iteration-content::-webkit-scrollbar-thumb {
      background: #2d3561;
      border-radius: 4px;
    }
    .iteration-content::-webkit-scrollbar-thumb:hover {
      background: #4dd0e1;
    }

    /* Mobile Responsive Styles */
    @media (max-width: 768px) {
      body {
        padding: 10px;
      }

      h1 {
        font-size: 22px !important;
        text-align: center;
      }

      .subtitle {
        font-size: 12px !important;
        text-align: center;
      }

      .grid {
        grid-template-columns: 1fr;
        gap: 15px;
      }

      .card {
        padding: 16px !important;
        background: rgba(30, 39, 73, 0.85) !important;
        border: 1px solid #3d4a7a !important;
      }

      .card-header {
        font-size: 15px !important;
        color: #4dd0e1 !important;
      }

      .info-section {
        grid-template-columns: 1fr;
        gap: 10px;
      }

      .info-box {
        padding: 10px;
        background: rgba(13, 16, 29, 0.6) !important;
      }

      .info-label {
        font-size: 11px !important;
        color: #90a4ae !important;
      }

      .info-value {
        font-size: 16px !important;
        color: #e0e6ed !important;
      }

      .phase-badge, .file-badge {
        font-size: 11px !important;
        padding: 4px 8px;
      }

      .iteration-content {
        margin-left: 0 !important;
      }

      /* Modal adjustments for mobile */
      .modal {
        padding: 0 !important;
        overflow-y: auto !important;
      }

      .modal-content {
        width: 100vw !important;
        max-width: 100vw !important;
        height: auto !important;
        max-height: none !important;
        min-height: 100vh !important;
        margin: 0 !important;
        padding: 12px !important;
        border-radius: 0 !important;
        border: none !important;
        box-shadow: none !important;
        animation: none !important;
      }

      .modal-body {
        padding: 0 !important;
        margin: 0 !important;
        flex: 1;
        overflow-y: auto !important;
      }

      .modal-header {
        padding: 8px 0 12px 0 !important;
        margin: 0 0 12px 0 !important;
        flex-shrink: 0;
      }

      .modal-header h2 {
        font-size: 16px !important;
      }

      .close {
        font-size: 32px !important;
        padding: 5px !important;
        width: 44px;
        height: 44px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .item-card, .item {
        padding: 12px !important;
        margin-bottom: 10px !important;
        margin-left: 0 !important;
        margin-right: 0 !important;
      }

      .item-header {
        font-size: 14px !important;
        margin-bottom: 12px !important;
      }

      .field {
        grid-template-columns: 1fr !important;
        gap: 6px !important;
        margin-bottom: 12px !important;
      }

      .field-name {
        font-size: 11px !important;
        padding-bottom: 6px;
        border-bottom: 1px solid #2d3561;
        color: #ffb74d !important;
      }

      .field-value {
        font-size: 13px !important;
        padding-left: 0 !important;
        padding-top: 6px;
        line-height: 1.5;
        color: #e0e6ed !important;
      }

      .source-link {
        font-size: 11px !important;
        word-break: break-all;
        display: inline-block;
        margin-top: 4px;
      }

      .verification-badge {
        font-size: 10px !important;
        padding: 3px 6px !important;
      }
    }

    /* Tablet adjustments */
    @media (min-width: 769px) and (max-width: 1024px) {
      .grid {
        grid-template-columns: repeat(2, 1fr);
      }

      .modal-content {
        width: 85%;
      }
    }

    /* Touch-friendly improvements for all mobile devices */
    @media (hover: none) and (pointer: coarse) {
      .card {
        cursor: pointer;
        -webkit-tap-highlight-color: rgba(77, 208, 225, 0.2);
      }

      .close {
        min-width: 44px;
        min-height: 44px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .file-link {
        min-height: 36px;
        display: flex;
        align-items: center;
        padding: 8px;
      }
    }
  </style>
</head>
<body>
  <h1>
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21 12.79C20.8427 14.4922 20.2039 16.1144 19.1582 17.4668C18.1126 18.8192 16.7035 19.8458 15.0957 20.4265C13.4879 21.0073 11.748 21.1181 10.0795 20.7461C8.41104 20.3741 6.88302 19.5345 5.67425 18.3258C4.46548 17.117 3.62596 15.589 3.25393 13.9205C2.8819 12.252 2.99274 10.5121 3.57348 8.9043C4.15423 7.29651 5.18085 5.88737 6.53324 4.84175C7.88562 3.79614 9.50782 3.15731 11.21 3C10.2134 4.34827 9.73387 6.00945 9.85856 7.68141C9.98324 9.35338 10.7039 10.9251 11.8894 12.1106C13.075 13.2961 14.6466 14.0168 16.3186 14.1415C17.9906 14.2662 19.6517 13.7866 21 12.79Z" stroke="#4dd0e1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="#4dd0e1" fill-opacity="0.2"/>
    </svg>
    Lunar Trade Study Dashboard
  </h1>
  <div class="grid" id="grid"></div>

  <div class="modal" id="modal">
    <div class="modal-content">
      <span class="close" onclick="closeModal()">&times;</span>
      <div id="modal-body"></div>
    </div>
  </div>

  <script>
    var data = []

    // Connect to SSE
    var eventSource = new EventSource('/events')
    eventSource.onmessage = function(e) {
      var msg = JSON.parse(e.data)
      if (msg.type === 'update') {
        data = msg.data
        render()
      }
    }

    function render() {
      var grid = document.getElementById('grid')
      grid.innerHTML = data.map(cat => \`
        <div class="card" onclick="showDetails('\${cat.category}')">
          <h2>\${cat.category.replace(/-/g, ' ')}</h2>
          <div class="phase">\${cat.phase}</div>
          <div class="count">\${cat.itemCount} items</div>
          \${cat.lastUpdated ? \`<div class="updated">Updated: \${cat.lastUpdated}</div>\` : ''}
          \${cat.files && cat.files.length > 0 ? \`<div class="iterations">\${cat.files.length} file(s)</div>\` : ''}
        </div>
      \`).join('')
    }

    function showDetails(category) {
      var cat = data.find(c => c.category === category)
      if (!cat) return

      var html = \`<h2 style="color: #4fc3f7; margin-bottom: 20px;">\${category.replace(/-/g, ' ')}</h2>\`
      html += \`<div class="phase">\${cat.phase}</div>\`

      if (cat.files && cat.files.length > 0) {
        html += \`<div style="margin: 20px 0;">\`
        html += \`<h3 style="color: #ffb74d; font-size: 14px; margin-bottom: 10px;">Research Files:</h3>\`
        html += \`<div class="iterations-container">\`
        cat.files.forEach(file => {
          html += \`<div class="iteration-wrapper">\`
          html += \`<span class="iteration-link" onclick="toggleFile(event, '\${category}', '\${file.name}')">\${file.name}</span>\`
          html += \`</div>\`
        })
        html += \`</div>\`
        html += \`</div>\`
      }

      html += \`<h3 style="color: #4fc3f7; font-size: 18px; margin: 30px 0 20px 0;">Items (\${cat.items.length}):</h3>\`

      cat.items.forEach(item => {
        html += \`<div class="item">\`
        html += \`<h3>\${item.vendor || 'Unknown Vendor'} - \${item.model || 'Unknown Model'}</h3>\`

        Object.keys(item).forEach(key => {
          if (key === 'vendor' || key === 'model' || key === 'notes') return

          var field = item[key]
          if (typeof field === 'object' && field !== null) {
            html += \`<div class="field">\`
            html += \`<div class="field-name">\${key.replace(/_/g, ' ')}</div>\`
            html += \`<div class="field-value">\${field.value !== null ? field.value : 'N/A'}\`

            // Support new tier system and legacy true/false
            if (field.verified_tier) {
              var tierLabel = field.verified_tier.toUpperCase()
              var tierSymbol = field.verified_tier === 'authoritative' ? '✓✓' :
                               field.verified_tier === 'credible' ? '✓' :
                               field.verified_tier === 'reference' ? '~' :
                               field.verified_tier === 'caution' ? '⚠' : '✗'
              html += \`<span class="verified \${field.verified_tier}">\${tierSymbol} \${tierLabel}</span>\`
            } else if (field.verified !== undefined) {
              // Legacy support
              html += \`<span class="verified \${field.verified}">\${field.verified ? '✓ Verified' : '✗ Unverified'}</span>\`
            }

            // Display sources with more authoritative first
            var allSources = []
            if (field.source_url) {
              allSources.push({ url: field.source_url, isPrimary: true })
            }
            if (field.additional_sources && field.additional_sources.length > 0) {
              field.additional_sources.forEach(url => {
                allSources.push({ url: url, isPrimary: false })
              })
            }

            // Sort: non-Wikipedia before Wikipedia, primary style for first
            allSources.sort((a, b) => {
              var aIsWiki = a.url.includes('wikipedia.org')
              var bIsWiki = b.url.includes('wikipedia.org')
              if (aIsWiki && !bIsWiki) return 1
              if (!aIsWiki && bIsWiki) return -1
              return 0
            })

            // Display sorted sources
            allSources.forEach((source, idx) => {
              var style = idx === 0 ? '' : 'opacity: 0.7; font-size: 11px;'
              html += \`<br><a href="\${source.url}" target="_blank" class="source-link" style="\${style}">\${source.url}</a>\`
            })

            if (field.verification_notes) {
              html += \`<br><span style="color: #90a4ae; font-size: 11px; font-style: italic;">\${field.verification_notes}</span>\`
            }

            if (field.notes) {
              html += \`<br><span style="color: #90a4ae; font-size: 12px;">\${field.notes}</span>\`
            }

            html += \`</div></div>\`
          }
        })

        if (item.notes) {
          html += \`<div class="field">\`
          html += \`<div class="field-name">notes</div>\`
          html += \`<div class="field-value">\${item.notes}</div>\`
          html += \`</div>\`
        }

        html += \`</div>\`
      })

      if (cat.items.length === 0) {
        html += \`<div style="color: #90a4ae; text-align: center; padding: 40px;">No items yet</div>\`
      }

      document.getElementById('modal-body').innerHTML = html
      document.getElementById('modal').style.display = 'block'
    }

    function toggleFile(e, category, filename) {
      e.stopPropagation()
      var fileId = 'file-' + filename.replace(/[^a-zA-Z0-9]/g, '-')
      var existing = document.getElementById(fileId)
      if (existing) {
        existing.remove()
        e.target.classList.remove('expanded')
        return
      }

      var cat = data.find(c => c.category === category)
      var file = cat.files.find(f => f.name === filename)

      var div = document.createElement('div')
      div.id = fileId
      div.className = 'iteration-content'

      var header = document.createElement('div')
      header.className = 'iteration-header'
      header.textContent = filename

      var content = document.createElement('div')
      content.textContent = file.content || 'Loading...'

      div.appendChild(header)
      div.appendChild(content)

      e.target.classList.add('expanded')

      // Insert right after the link, inside the wrapper
      var wrapper = e.target.closest('.iteration-wrapper')
      wrapper.appendChild(div)
    }

    function closeModal() {
      document.getElementById('modal').style.display = 'none'
    }

    // Close modal on outside click
    window.onclick = function(e) {
      var modal = document.getElementById('modal')
      if (e.target === modal) {
        closeModal()
      }
    }

    // Close modal on Escape key
    window.onkeydown = function(e) {
      if (e.key === 'Escape' || e.key === 'Esc') {
        closeModal()
      }
    }
  </script>
</body>
</html>
`

console.log("🌙 Lunar Trade Study Dashboard running on http://localhost:8009")
Deno.serve({ port: 8009 }, handler)
