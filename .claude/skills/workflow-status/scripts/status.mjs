#!/usr/bin/env node
// Read-only live status for background Workflow runs.
// Usage: node status.mjs [runId-or-substring]
import fs from "fs";
import os from "os";
import path from "path";

const root = path.join(os.homedir(), ".claude", "projects");
const ACTIVE_WINDOW_S = 45; // an agent file touched within this is "active"

function readdir(p) {
  try { return fs.readdirSync(p, { withFileTypes: true }); } catch { return []; }
}
function newestMtime(dir) {
  let m = 0;
  for (const f of readdir(dir)) {
    try { const s = fs.statSync(path.join(dir, f.name)); if (s.mtimeMs > m) m = s.mtimeMs; } catch {}
  }
  return m;
}

// Discover wf_* dirs: projects/<proj>/<session>/subagents/workflows/wf_*
const wfDirs = [];
for (const proj of readdir(root)) {
  if (!proj.isDirectory()) continue;
  const projPath = path.join(root, proj.name);
  for (const sess of readdir(projPath)) {
    if (!sess.isDirectory()) continue;
    const wfRoot = path.join(projPath, sess.name, "subagents", "workflows");
    for (const wf of readdir(wfRoot)) {
      if (wf.isDirectory() && wf.name.startsWith("wf_")) {
        const p = path.join(wfRoot, wf.name);
        wfDirs.push({ name: wf.name, path: p, mtime: newestMtime(p) });
      }
    }
  }
}

if (wfDirs.length === 0) { console.log("No workflow runs found under ~/.claude/projects."); process.exit(0); }

const arg = process.argv[2];
let target = arg ? wfDirs.find((d) => d.name.includes(arg)) : null;
if (!target) { wfDirs.sort((a, b) => b.mtime - a.mtime); target = wfDirs[0]; }

const now = Date.now();
function label(base, dir) {
  try {
    const m = JSON.parse(fs.readFileSync(path.join(dir, base + ".meta.json"), "utf8"));
    return m.label || m.name || m.agentType || base;
  } catch { return base; }
}

const agents = [];
for (const f of readdir(target.path)) {
  const mt = f.name.match(/^(agent-[a-z0-9]+)\.jsonl$/);
  if (!mt) continue;
  const jp = path.join(target.path, f.name);
  let lines = 0, mtimeMs = 0;
  try { lines = fs.readFileSync(jp, "utf8").split("\n").filter(Boolean).length; } catch {}
  try { mtimeMs = fs.statSync(jp).mtimeMs; } catch {}
  agents.push({ label: label(mt[1], target.path), lines, ageS: Math.round((now - mtimeMs) / 1000) });
}
agents.sort((a, b) => a.label.localeCompare(b.label));

// Journal summary
let events = 0; const types = {};
try {
  for (const l of fs.readFileSync(path.join(target.path, "journal.jsonl"), "utf8").split("\n")) {
    if (!l.trim()) continue;
    events++;
    try { const e = JSON.parse(l); const t = e.type || e.event || "?"; types[t] = (types[t] || 0) + 1; } catch {}
  }
} catch {}

const overallAge = Math.round((now - target.mtime) / 1000);
const anyActive = agents.some((a) => a.ageS < ACTIVE_WINDOW_S);

console.log(`Workflow: ${target.name}`);
console.log(`Last activity: ${overallAge}s ago   Journal events: ${events} ${Object.keys(types).length ? JSON.stringify(types) : ""}`);
console.log(`State (inferred): ${anyActive ? "RUNNING — agents active" : "IDLE — likely complete or paused (the harness notifies on true completion)"}`);
console.log("");
console.log("Agents:");
for (const a of agents) {
  const state = a.ageS < ACTIVE_WINDOW_S ? "active" : "idle";
  console.log(`  ${a.label.padEnd(28)} ${String(a.lines).padStart(4)} lines   ${String(a.ageS).padStart(5)}s ago   [${state}]`);
}
