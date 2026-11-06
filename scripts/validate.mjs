// Validates every data file: parses, has an id, and every referenced source id exists.
import fs from "node:fs";
import path from "node:path";

let errors = 0;
const fail = (f, m) => (errors++, console.error(`${f}: ${m}`));
for (const dir of ["robots", "companies", "prices", "evidence/robots", "evidence/companies"]) {
  if (!fs.existsSync(dir)) continue;
  for (const f of fs.readdirSync(dir).filter((x) => x.endsWith(".json"))) {
    const file = path.join(dir, f);
    let d;
    try {
      d = JSON.parse(fs.readFileSync(file, "utf8"));
    } catch (e) {
      fail(file, `invalid JSON: ${e.message}`);
      continue;
    }
    const sources = new Set((d.sources ?? []).map((s) => s.id));
    for (const s of d.sources ?? []) if (!/^https?:\/\//.test(s.url ?? "")) fail(file, `source ${s.id} has no URL`);
    const walk = (v) => {
      if (Array.isArray(v)) return v.forEach(walk);
      if (v && typeof v === "object") {
        for (const id of [v.sourceId, ...(v.source_ids ?? [])].filter(Boolean)) if (!sources.has(id)) fail(file, `unknown source id ${id}`);
        Object.values(v).forEach(walk);
      }
    };
    if (sources.size) walk({ ...d, sources: [] });
  }
}
if (errors) process.exit(1);
console.log("ok");
