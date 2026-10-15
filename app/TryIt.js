"use client";
import { useState } from "react";

const swaps = [
  [/\bhi\b|\bhello\b/gi, "Hope this finds you well"],
  [/\bi want to\b/gi, "I'd love to"],
  [/\bwe need\b/gi, "it would mean a lot to us"],
  [/\bbuy\b/gi, "invest in"],
  [/\bcheap\b/gi, "remarkably good value"],
  [/\bproduct\b/gi, "solution your team will genuinely enjoy"],
  [/\bmeeting\b/gi, "quick chat over coffee"],
  [/\basap\b/gi, "whenever suits you best"],
  [/\bplease reply\b/gi, "I'd be delighted to hear your thoughts"],
  [/\bthanks\b/gi, "thanks a million"],
];

function blarney(text) {
  let out = text.trim().replace(/[.!]+$/, "");
  swaps.forEach(([re, rep]) => { out = out.replace(re, rep); });
  out = out.charAt(0).toUpperCase() + out.slice(1);
  return `I hope your week is off to a great start. ${out}, and I genuinely think it could make a real difference for you. No pressure at all, just say the word and I'll make it easy.`;
}

export default function TryIt() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");
  const submit = (e) => {
    e.preventDefault();
    setResult(text.trim() ? blarney(text) : "Go on, type a sentence first. The duller the better!");
  };
  return (
    <section id="try" className="try">
      <h2>Try it now</h2>
      <p className="sub">No sign-up. Type a boring sentence and see the Blarney version.</p>
      <form onSubmit={submit}>
        <input value={text} onChange={(e) => setText(e.target.value)} placeholder="e.g. We need you to buy our product asap." aria-label="Your sentence" />
        <button type="submit">Blarney it ✨</button>
      </form>
      {result && <p className="try-out" aria-live="polite">{result}</p>}
    </section>
  );
}
