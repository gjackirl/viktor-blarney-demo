export async function POST(req) {
  const url = process.env.SLACK_FEEDBACK_WEBHOOK_URL;
  if (!url) return Response.json({ ok: false, error: "not configured" }, { status: 500 });
  let body;
  try { body = await req.json(); } catch { return Response.json({ ok: false }, { status: 400 }); }
  if (body.website) return Response.json({ ok: true }); // honeypot
  const msg = String(body.message || "").trim().slice(0, 1000);
  const name = String(body.name || "").trim().slice(0, 80) || "Website visitor";
  if (!msg) return Response.json({ ok: false }, { status: 400 });
  const r = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text: `🌐 *Website feedback* from ${name}:\n> ${msg.replace(/\n/g, "\n> ")}` }),
  });
  return Response.json({ ok: r.ok }, { status: r.ok ? 200 : 502 });
}
