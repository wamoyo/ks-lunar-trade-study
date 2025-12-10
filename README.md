# Lunar Trade Study Dashboard

A comprehensive trade study analyzing 252 hardware systems across 18 categories for lunar missions.

## Overview

This dashboard provides verified specifications and analysis for lunar mission equipment including:
- Launch Vehicles
- Landers & Cargo Delivery
- Mobility & Rovers
- Power Systems
- Life Support & ECLSS
- Medical Systems
- Communications
- Manufacturing & Construction
- And 10 more categories...

## Features

- **Phase 4 Verified Data**: All 252 items verified against authoritative sources
- **Source Tracking**: Every specification linked to vendor sites, NASA documents, or peer-reviewed publications
- **Verification Tiers**: 5-tier system (Authoritative → Credible → Reference → Caution → Unverified)
- **Mobile Responsive**: Optimized for desktop, tablet, and mobile devices
- **Password Protected**: Secure access to trade study data

## Technology Stack

- **Runtime**: Deno
- **Server**: Native Deno HTTP server
- **Data**: JSON files with markdown documentation
- **Deployment**: Deno Deploy

## Local Development

```bash
# Start the server
deno run --allow-net --allow-read --watch server.js

# Access at http://localhost:8009
```

## Deployment

Deployed on Deno Deploy with all data files included.

```bash
# Deploy to Deno Deploy
deployctl deploy --project=luna-trade-study --prod server.js
```

## Project Structure

```
├── server.js                          # Main server file
├── output/                            # Trade study data (18 JSON files)
│   ├── launch-vehicles.json
│   ├── mobility-rovers.json
│   └── ...
├── research-instructions/             # Research documentation
│   ├── [category]/
│   │   ├── phase4-verification.md    # Verification reports
│   │   └── ...
└── README.md
```

## Data Quality

- **100% Phase 4 Complete**: All 18 categories fully verified
- **252 Total Items**: Across all categories
- **Source Verification**: Every claim backed by authoritative sources or marked unverified
- **Critical Corrections**: Multiple TRL errors, mass specifications, and timeline corrections made during verification

## Access

Password-protected dashboard. Contact project administrator for access credentials.

## License

Proprietary - Innovation Bound LLC

## Last Updated

December 2025
