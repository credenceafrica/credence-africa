// The rules that keep the briefings list clean. Run with: npx tsx scripts/check-briefings.ts
import assert from "node:assert/strict";
import { briefingSchema, subscriberId } from "../src/lib/briefings";

const valid = { name: "Ada", email: "  Ada@Example.COM ", phone: "", sectors: ["Banking"], otherSector: "", subscribe: false };
const rejects = (change: object) => assert.equal(briefingSchema.safeParse({ ...valid, ...change }).success, false, JSON.stringify(change));

// The subscriber key is a hash of this value, so every spelling of an address must land on it.
assert.equal(briefingSchema.parse(valid).email, "ada@example.com");
rejects({ email: "not-an-email" });
rejects({ name: "  " });
rejects({ sectors: [] });
rejects({ sectors: ["Mining"] });
rejects({ phone: "0712345678" });
assert.equal(briefingSchema.safeParse({ ...valid, phone: "+254 712 345 678" }).success, true);
// Firestore's rules recompute this hash, so it must stay lower-case hex SHA-256.
subscriberId("abc").then((id) => {
  assert.equal(id, "ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad");
  console.log("briefings checks passed");
});
