# Blarney.io — demo site

> *Words, but better. The gift of the gab, as a service.*

Blarney.io is a **fictional SaaS** built to demo an AI teammate ([Viktor](https://viktor.com)) running a real product loop end to end: customer feedback → triage → PRD → pull request → preview → production. Everything here — the company, the customers, the tier sign-ups — is synthetic.

Live site: https://viktor-blarney-demo.vercel.app

## The workflow

```
Feedback (website widget or Slack)
   │
   ▼
1. Triage ── Viktor reads it, replies in-thread, logs it in Notion
   │  human: "go"
   ▼
2. PRD ───── Viktor drafts a short product spec in Notion
   │  human: "approve"
   ▼
3. Build ─── Viktor opens a GitHub pull request; Vercel builds a preview
   │  human: "ship it"
   ▼
4. Ship ──── PR is merged, production is verified, Notion marked Shipped,
             and the original feedback thread gets a "it's live" reply
```

At any gate a human can also say **deny**, ask a question, or request changes. Nothing reaches production without an explicit "ship it".

## How it's built

| Piece | Role |
|---|---|
| **Website feedback widget** | Visitors send feedback from the site; it lands in the same Slack channel as everyone else's — one pipeline, not two. |
| **Slack** | The control panel. Feedback arrives here and every decision (`go` / `approve` / `ship it` / `deny`) is a reply in the thread. |
| **Viktor** | Listens for new feedback, triages it, writes PRDs, writes the code, opens PRs and reports back at each step. |
| **Notion** | System of record: a Feedback board and a PRD board, linked to each other, with statuses updated as work moves along. |
| **GitHub** | This repo. All changes go through pull requests — never straight to `main`. |
| **Vercel** | Preview deploy for every PR, production deploy on merge. |
| **Ops dashboard** | A small internal dashboard showing the pipeline, recent activity and deploys, refreshed after each workflow step. |

### Design principles

- **Human in the loop at every gate.** The AI proposes; a person decides.
- **Slack is where decisions happen.** No one needs to open three tools to move work forward.
- **Reversible by default.** Undoing a change is just another gated PR (a revert), so history stays clean and `main` always matches production.
- **Small, visible changes.** Built for live demos — you can watch a comment become a shipped feature in minutes.

## The site itself

Next.js 14 (App Router), plain CSS, deployed on Vercel.

```bash
npm install
npm run dev
```
