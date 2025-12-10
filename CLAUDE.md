# Lunar Trade Study Dashboard - Technical Documentation

## Project Overview

A comprehensive web-based dashboard for analyzing and presenting verified hardware specifications for lunar mission equipment. The project covers 252 hardware systems across 18 categories, with full source verification and mobile-responsive interface.

**Project Goal**: Create a password-protected, mobile-responsive dashboard that provides verified, authoritative specifications for lunar mission equipment to support mission planning and hardware selection decisions.

**Status**: Phase 4 verification complete (100%) - Ready for deployment to Deno Deploy

## Technical Stack

### Runtime & Server
- **Deno**: JavaScript/TypeScript runtime with built-in security and modern APIs
- **Native HTTP Server**: Using Deno's built-in HTTP server (no external frameworks)
- **Server-Sent Events (SSE)**: Real-time data updates to connected clients

### Data Layer
- **Storage**: File-based (18 JSON files + markdown documentation)
- **Categories**: 18 distinct hardware categories
- **Items**: 252 total verified items
- **Documentation**: Multi-phase markdown files tracking research iterations

### Frontend
- **Vanilla JavaScript**: No frameworks, pure JS for simplicity
- **CSS Grid**: Two-column responsive layout
- **Mobile-First Design**: Single column layout on mobile (< 768px)
- **Progressive Enhancement**: Works without JavaScript for basic content

### Authentication
- **Session-Based Auth**: In-memory session storage with UUID session IDs
- **Custom Login UI**: Branded login page matching dashboard theme
- **Persistent Sessions**: 30-day cookie expiration
- **Password**: `1yeartoluna` (hardcoded in server.js:384)

### Deployment
- **Platform**: Deno Deploy (serverless)
- **Project ID**: a7b28359-9751-4553-9dbc-8c8032e0b8c7
- **Deployment Config**: deno.json with include/exclude patterns
- **Assets**: All JSON and markdown files deployed with server

## Architecture Patterns

### Server Architecture
- Single file server (server.js)
- Pure functions for file operations
- Async/await for all I/O
- Functional programming style (var declarations, regular functions)

### Data Flow
1. Client connects → Login required
2. Password verified → Session cookie set
3. Dashboard loads → SSE connection established
4. Real-time updates via SSE push
5. Modal interactions → Fetch API for iteration content

### State Management
- **Server State**: In-memory sessions Set()
- **Client State**: DOM manipulation (no state library)
- **Real-time Sync**: Server-Sent Events for updates

## Key Implementation Details

### Authentication System

**Location**: server.js:364-412

**Design Decision**: Custom UI instead of HTTP Basic Auth
- User explicitly requested custom UI over browser's basic auth dialog
- Matches dashboard branding and theme
- Better mobile UX

**Implementation**:
```javascript
// Session storage (in-memory)
var sessions = new Set()

// Session ID generation
function generateSessionId() {
  return crypto.randomUUID()
}

// Authentication check on every request
var cookies = req.headers.get('cookie') || ''
var sessionCookie = cookies.split(';').find(c => c.trim().startsWith('session='))
var sessionId = sessionCookie ? sessionCookie.split('=')[1] : null

if (!sessionId || !sessions.has(sessionId)) {
  return new Response(loginPage(), {
    headers: { 'Content-Type': 'text/html' }
  })
}
```

**Session Persistence**: 30-day cookie (Max-Age=2592000)

### Mobile Responsiveness

**Critical Fix**: Viewport meta tag was initially missing
- Without viewport meta tag, mobile browsers render at desktop width
- Media queries don't trigger, fonts appear tiny
- Solution: Added viewport meta tag to force proper mobile rendering

**Viewport Configuration**:
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
```

**Mobile Design Patterns**:
- **Breakpoint**: 768px
- **Layout**: Single column (grid-template-columns: 1fr)
- **Fixed Font Sizes**: px units (not viewport-relative) for consistency
- **Modal**: Full-screen (100vw × 100vh) with minimal padding
- **Touch Optimization**: No max-scale restrictions, proper touch targets

**Mobile CSS Location**: server.js:825-1005

### Social Sharing

**Meta Tags**: Open Graph + Twitter Card
- Title: "Lunar Trade Study"
- Description: 252 hardware systems across 18 categories
- Image: `/Luna-Trade-Study.png` (served by server)

**Image Serving**: server.js:464-474
```javascript
if (url.pathname === "/Luna-Trade-Study.png") {
  var imageData = await Deno.readFile("Luna-Trade-Study.png")
  return new Response(imageData, {
    headers: { "Content-Type": "image/png" }
  })
}
```

## File Structure

```
shopping-list-for-luna/
├── server.js                          # Main server (1200+ lines)
├── deno.json                          # Deno config + deployment settings
├── Luna-Trade-Study.png               # Social sharing image
├── output/                            # Phase 4 verified data (18 files)
│   ├── launch-vehicles.json
│   ├── landers-cargo-delivery.json
│   ├── habitation-inflatable-modules.json
│   ├── radiation-thermal-protection.json
│   ├── life-support-eclss.json
│   ├── medical-systems.json
│   ├── eva-suits-human-tooling.json
│   ├── power-systems.json
│   ├── communications-systems.json
│   ├── navigation-positioning-systems.json
│   ├── mobility-rovers.json
│   ├── environmental-subsurface-sensing.json
│   ├── robotics-robotic-arms.json
│   ├── drilling-excavation.json
│   ├── isru-resource-processing.json
│   ├── manufacturing-construction.json
│   ├── dust-mitigation.json
│   └── storage-logistics.json
├── research-instructions/             # Research phase documentation
│   └── [category]/
│       ├── instructions.md
│       ├── completion-checklist.md
│       ├── phase1-prelim.md
│       ├── phase2-strategies.md
│       ├── phase3-research/
│       │   └── iteration-*.md
│       └── phase4-verification.md
├── README.md                          # User-facing documentation
├── CLAUDE.md                          # Technical documentation (this file)
└── .gitignore                         # Git ignore patterns
```

## Data Structure

### Category JSON Format
```javascript
{
  "category": "Category Name",
  "items": [
    {
      "name": "Item Name",
      "manufacturer": "Company Name",
      "mass": "X kg",
      "power": "Y kW",
      "dimensions": "L × W × H m",
      "trl": "X-X",
      "status": "Development/Operational/Proposed",
      "timeline": "YYYY or YYYY-YYYY",
      "capabilities": "Description...",
      "limitations": "Description...",
      "cost": "$X million or Unknown",
      "sources": [
        {
          "url": "https://...",
          "title": "Source Title",
          "tier": "Authoritative/Credible/Reference/Caution/Unverified"
        }
      ]
    }
  ]
}
```

### Verification Tiers
1. **Authoritative**: Official vendor sites, NASA technical documents
2. **Credible**: Industry publications, peer-reviewed papers
3. **Reference**: Technical databases, aggregator sites
4. **Caution**: News articles, press releases (treat with skepticism)
5. **Unverified**: Specification not verified from reliable source

## Development History

### Phase 1-3: Research & Data Collection
- 18 categories researched across multiple iterations
- Multiple phase 3 iterations per category (varying 1-3 iterations)
- Research tracked in markdown files per phase

### Phase 4: Verification (100% Complete)
- All 252 items verified against authoritative sources
- Source URLs documented with verification tier
- Critical corrections made (TRL errors, mass specs, timelines)
- Verification reports in phase4-verification.md files

### Dashboard Implementation
**Dec 8, 2025**: Initial dashboard build
- Real-time SSE updates
- Modal system for detailed item views
- File viewer for research documentation

**Dec 9-10, 2025**: Mobile responsiveness + deployment prep
- Password protection implementation
- Custom login UI (replaced HTTP Basic Auth per user request)
- Mobile CSS with viewport fix
- Full-screen mobile modals
- Social sharing meta tags
- Deployment configuration (deno.json)

## Key Technical Decisions

### 1. Why Custom Login UI vs HTTP Basic Auth?
**Decision**: Custom branded login page
**Rationale**: User explicitly requested custom UI for better branding and mobile UX
**Location**: server.js:207-373

### 2. Why In-Memory Sessions?
**Decision**: In-memory Set() for session storage
**Trade-off**: Sessions lost on server restart, but simpler implementation
**Rationale**: Deno Deploy restarts are infrequent, 30-day cookies provide persistence
**Future**: Could migrate to Deno KV for persistent sessions if needed

### 3. Why Fixed px Fonts on Mobile?
**Decision**: Use px units instead of vw/vh for font sizes
**Rationale**: Viewport-relative fonts caused inconsistent rendering across devices
**Result**: Consistent, readable fonts on all mobile devices

### 4. Why Full-Screen Mobile Modals?
**Decision**: 100vw × 100vh modals with minimal padding
**Rationale**: Nested padding (modal + modal-content) wasted too much space
**User Feedback**: "Way too much padding on left and right for mobile"
**Solution**: Single container with 12px padding, height: auto for natural scrolling

### 5. Why File-Based Data Storage?
**Decision**: JSON files + markdown instead of database
**Rationale**:
- Simple deployment (no database setup)
- Version control friendly (git tracks all changes)
- Easy to edit and verify manually
- Perfect for static/infrequently updated data

## Deployment Configuration

### deno.json
```json
{
  "deploy": {
    "project": "a7b28359-9751-4553-9dbc-8c8032e0b8c7",
    "entrypoint": "server.js",
    "include": [
      "server.js",
      "output/**/*.json",
      "research-instructions/**/*.md"
    ],
    "exclude": [
      "**/node_modules",
      "**/.git",
      "**/.vscode",
      "**/.DS_Store"
    ]
  }
}
```

**Critical**: Include patterns ensure all data files deploy with server

### Deployment Command
```bash
deployctl deploy --project=luna-trade-study --prod server.js
```

## Development Workflow

### Local Development
```bash
# Start dev server with watch mode
deno task dev
# or
deno run --allow-net --allow-read --watch server.js

# Access at http://localhost:8009
```

### Testing Mobile Responsiveness
1. Chrome DevTools → Responsive mode
2. Test at 375px (iPhone), 768px (tablet), 1024px+ (desktop)
3. Verify viewport meta tag present
4. Check font sizes are readable
5. Test modal scrolling behavior

### Deployment Process
1. Test locally with `deno task dev`
2. Verify all data files present in output/ and research-instructions/
3. Commit changes to git
4. Deploy with `deployctl deploy --project=luna-trade-study --prod server.js`
5. Verify deployed site loads correctly
6. Test authentication flow
7. Test social sharing preview (LinkedIn, Twitter, etc.)

## Project Statistics

### Development Metrics
- **Total Sessions**: 2 main sessions, 88 agent tasks
- **Token Usage**:
  - Input: 1,003,517 tokens
  - Output: 1,549,828 tokens
  - Cache Creation: 29,151,325 tokens
  - Cache Read: 434,490,378 tokens
  - **Total Raw**: 466,195,048 tokens
  - **Effective (with cache discount)**: 75,153,707 tokens
- **API Cost Estimate**: ~$266 (at Claude Sonnet 4.5 API rates)

### Data Metrics
- **Categories**: 18
- **Items**: 252
- **Verification**: 100% Phase 4 complete
- **Sources**: Every item has authoritative source citations
- **Research Files**: 18 categories × 4-6 files each = ~100 markdown files

### Code Metrics
- **server.js**: 1,200+ lines
- **Dashboard HTML/CSS/JS**: Embedded in server.js
- **Pure Functions**: File reading, JSON parsing, data aggregation
- **Side Effects**: Explicit and isolated (HTTP responses, file I/O)

## Coding Standards

Following project-wide CLAUDE.md standards:

### JavaScript Style
- **Variables**: `var` for general declarations, `let` only for block-scoped loops
- **Functions**: Regular function declarations (not arrow functions for multi-line)
- **Spacing**: Space between function name and parentheses
- **Semicolons**: None (except where syntactically required)
- **Comments**: Document function purpose, specify if pure, note side effects

### Function Documentation
```javascript
// Pure: reads file and returns text content or null
async function readFile (path) {
  try {
    return await Deno.readTextFile(path)
  } catch (e) {
    return null
  }
}

// Side effect: Returns HTTP response with dashboard HTML
function loginPage() {
  return `<!DOCTYPE html>...`
}
```

## Future Enhancements

### Potential Improvements
1. **Persistent Sessions**: Migrate to Deno KV for session storage
2. **Search**: Add client-side search across all items
3. **Filters**: Filter by TRL, status, cost, category
4. **Comparison**: Side-by-side item comparison
5. **Export**: PDF or CSV export functionality
6. **Analytics**: Track which items are viewed most
7. **Notes**: User annotations on items (requires database)
8. **Admin Panel**: Edit items via UI instead of JSON files

### Performance Optimizations
1. **Caching**: Cache JSON parsing results in memory
2. **Lazy Loading**: Load category data on-demand
3. **Image Optimization**: Compress/optimize Luna-Trade-Study.png
4. **Code Splitting**: Separate login page from dashboard HTML

## Troubleshooting

### Mobile Issues
- **Problem**: Fonts appear tiny on mobile
- **Solution**: Verify viewport meta tag is present in <head>
- **Location**: server.js:484

### Authentication Issues
- **Problem**: Login not persisting
- **Solution**: Check cookie settings (HttpOnly, SameSite, Max-Age)
- **Location**: server.js:391

### Deployment Issues
- **Problem**: Data files not deployed
- **Solution**: Verify deno.json include patterns match file structure
- **Location**: deno.json:10-14

### SSE Connection Issues
- **Problem**: Updates not appearing
- **Solution**: Check /events endpoint, verify EventSource connection
- **Location**: server.js:414-445

## License

Proprietary - Innovation Bound LLC

## Last Updated

December 10, 2025
