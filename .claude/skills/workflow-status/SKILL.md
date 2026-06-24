---
name: workflow-status
description: Show live progress of a background Workflow-tool run for this project by reading its transcript journal. Use when the user wants to monitor, check, watch, or "refresh" a workflow they launched (e.g. "how's the workflow", "refresh", "is it done yet", "watch the agents"). Read-only — never modifies workflow files.
---

# Workflow Status

Reports a live snapshot of background Workflow runs (the `Workflow` tool) by reading their durable transcript journals under `~/.claude/projects/**/subagents/workflows/wf_*`. Useful because the built-in `/workflows` view is not always available.

## Steps

1. Run the status script:

   ```bash
   node .claude/skills/workflow-status/scripts/status.mjs [runId-or-substring]
   ```

   - **No argument** → summarizes the **most recently active** workflow run.
   - **Optional argument** → match a specific run by id substring (e.g. `wf_5cb4157a`) or any unique fragment.

2. Present the output as a compact snapshot: the inferred state (RUNNING vs IDLE), and the per-agent table (label, lines of work done, seconds since last activity, active/idle). Keep it tight — a status check, not an essay.

3. **Optionally** enrich with file-level progress when you know what the workflow writes:
   - `git diff --stat` for changed files in the working tree.
   - `ls` for any expected net-new files.

4. **Do not claim completion from the journal alone.** An all-idle table means *likely* complete or stalled — the harness sends a `<task-notification>` on true completion. If completion matters, confirm with that notification or a real check (`npx tsc --noEmit`, a render smoke-test, etc.).

This skill is read-only. Never edit files under `subagents/workflows/`.
