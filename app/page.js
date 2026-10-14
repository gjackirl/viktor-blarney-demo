const tiers = [
  { name: "Chancer", price: "Free", features: ["50 messages / month", "1 seat", "Email support"] },
  { name: "Charmer", price: "€49", per: "/month", highlight: true, features: ["2,000 messages / month", "5 seats", "CRM sync", "Tone presets"] },
  { name: "Full Blarney", price: "€199", per: "/month", features: ["Unlimited messages", "20 seats", "A/B subject lines", "Priority support"] },
  { name: "Kiss the Stone", price: "Talk to us", features: ["Enterprise SSO", "Custom models", "Dedicated success manager"] },
];

const faqs = [
  { q: "Is there a free trial?", a: "Yes. The Chancer plan is free forever (50 messages a month, no card needed), and every paid plan comes with a 14-day free trial." },
  { q: "Can I change plans later?", a: "Any time. Upgrade or downgrade from your account settings and we'll prorate the difference." },
  { q: "Does it work with my CRM?", a: "Charmer and above sync with the major CRMs, so every message lands where your team expects it." },
];

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <span className="logo">Blarney<span className="dot">.io</span></span>
        <div className="navlinks">
          <a href="#pricing">Pricing</a>
          <a href="#signup" className="signup">Sign up</a>
        </div>
      </nav>

      <section className="hero">
        <h1>Words, but better.</h1>
        <p className="sub">The gift of the gab, as a service.</p>
        <p className="explainer">Blarney rewrites your AI-generated outreach so it reads like it came from your best rep: warm, specific, and unmistakably human. More replies, fewer cringes, and nobody has to know a robot did the first draft.</p>
        <a href="#pricing" className="cta">See pricing</a>
      </section>

      <section className="features">
        <div><h3>Write</h3><p>Outreach that sounds like your best rep on their best day.</p></div>
        <div><h3>Tune</h3><p>Pick a tone, keep it on-brand across the whole team.</p></div>
        <div><h3>Send</h3><p>Syncs with your CRM so nothing gets lost.</p></div>
      </section>

      <section id="pricing" className="pricing">
        <h2>Pricing</h2>
        <div className="grid">
          {tiers.map((t) => (
            <div key={t.name} className={"card" + (t.highlight ? " hl" : "")}>
              {t.highlight && <span className="badge">Most popular</span>}
              <h3>{t.name}</h3>
              <p className="price">{t.price}<span>{t.per || ""}</span></p>
              <ul>{t.features.map((f) => <li key={f}>{f}</li>)}</ul>
            </div>
          ))}
        </div>
      </section>

      <section id="faq" className="faq">
        <h2>FAQ</h2>
        {faqs.map((f) => (
          <details key={f.q} open={f.q === faqs[0].q}>
            <summary>{f.q}</summary>
            <p>{f.a}</p>
          </details>
        ))}
      </section>

      <footer>© 2026 Blarney.io — a fictional company for demo purposes.</footer>
    </main>
  );
}
