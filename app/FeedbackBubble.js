"use client";
import { useState } from "react";

export default function FeedbackBubble() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState("");
  const [hp, setHp] = useState("");

  async function submit(e) {
    e.preventDefault();
    if (!msg.trim() || busy) return;
    setBusy(true); setErr("");
    try {
      const r = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: msg, name, website: hp }),
      });
      if (!r.ok) throw new Error();
      setSent(true); setMsg("");
    } catch {
      setErr("Hmm, that didn't send. Mind trying again?");
    } finally { setBusy(false); }
  }

  return (
    <div className="fb">
      {open && (
        <div className="fb-panel" role="dialog" aria-label="Send feedback">
          <div className="fb-head">
            <strong>Send us feedback</strong>
            <button className="fb-x" aria-label="Close" onClick={() => { setOpen(false); setSent(false); }}>×</button>
          </div>
          {sent ? (
            <p className="fb-thanks">Thanks, we got it! 💚</p>
          ) : (
            <form onSubmit={submit}>
              <input placeholder="Your name (optional)" value={name} onChange={(e) => setName(e.target.value)} />
              <input className="fb-hp" tabIndex={-1} autoComplete="off" style={{position:"absolute",left:"-9999px"}} value={hp} onChange={(e) => setHp(e.target.value)} aria-hidden="true" />
              <textarea placeholder="What's on your mind?" rows={4} value={msg} onChange={(e) => setMsg(e.target.value)} required />
              {err && <p className="fb-err">{err}</p>}
              <button type="submit" disabled={!msg.trim() || busy}>{busy ? "Sending…" : "Send"}</button>
            </form>
          )}
        </div>
      )}
      <button className="fb-bubble" aria-label="Leave feedback" onClick={() => setOpen(!open)}>💬</button>
    </div>
  );
}
