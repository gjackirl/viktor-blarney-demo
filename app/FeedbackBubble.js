"use client";
import { useState } from "react";

export default function FeedbackBubble() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");
  const [sent, setSent] = useState(false);

  function submit(e) {
    e.preventDefault();
    if (!msg.trim()) return;
    setSent(true);
    setMsg("");
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
              <textarea placeholder="What's on your mind?" rows={4} value={msg} onChange={(e) => setMsg(e.target.value)} required />
              <button type="submit" disabled={!msg.trim()}>Send</button>
            </form>
          )}
        </div>
      )}
      <button className="fb-bubble" aria-label="Leave feedback" onClick={() => setOpen(!open)}>💬</button>
    </div>
  );
}
