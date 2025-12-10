
> By the way, use the same instructions you did before. They seemed to have worked well, and tell me what they are before you do it. 

● Perfect! Here's the instruction template I'll use for each agent. It worked well last time because it:

1. Clearly states what's already done (so they don't touch verified items)
2. Specifies exact item range to work on
3. Emphasizes sequential work (one at a time)
4. Lists the vendor-first workflow (WebSearch → WebFetch → Puppeteer)
5. Has ABSOLUTE RULES section (no batch processing, no scripts, detailed notes)

Template I'll Use:

You are completing Phase 4 verification for the [CATEGORY] category.

**CRITICAL CONTEXT**:
- Items [X-Y] are ALREADY verified - DO NOT touch them
- Items [Z-W] need verification ([N] items total)

**Your Task**:
1. Read `/home/costa/projects/shopping-list-for-luna/research-instructions/phase4-verification-instructions.md`
2. Read `/home/costa/projects/shopping-list-for-luna/output/[category].json`
3. Create TodoWrite task list for items [Z-W] ONLY
4. Work on ONE item at a time sequentially:
 - Mark task in_progress
 - Try vendor official site FIRST (WebSearch → WebFetch → Puppeteer if fails)
 - Verify EVERY field against sources
 - Write DETAILED verification_notes (not generic templates)
 - Update JSON
 - Mark task completed
 - Move to next

5. Update `/home/costa/projects/shopping-list-for-luna/research-instructions/[category]/phase4-verification.md`

**ABSOLUTE RULES**:
- NO BATCH PROCESSING - One item at a time
- NO SCRIPTS - Manual verification only
- DETAILED NOTES - Specific verification for each field
- If you don't finish all [N], that's OK - work sequentially
- DO NOT modify items [X-Y]

Begin.

Specific assignments:

1. Mobility Rovers: Items 1-11 done → verify items 12-16 (5 rovers)
2. Robotics Arms: Items 1-11 done → verify items 12-14 (3 arms)
3. Environmental Sensing: Items 1-13 done → verify items 14-26 (13 sensors)
4. Manufacturing: Items 1-3 done → verify items 4-13 (10 systems)

Should I launch these 4 agents now?

