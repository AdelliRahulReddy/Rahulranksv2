Repo-local Codex efficiency setup.

What this does:
- keeps responses concise by default in local Codex sessions
- points Codex to compressed repo context first
- preserves the full human-readable originals in the repo root

Files:
- `AGENTS.md`
- `.codex/hooks.json`
- `.codex/context/PROJECT_CONTEXT_LITE.md`
- `.codex/context/SEO_CONTEXT_LITE.md`

How to use:
- open Codex in this repo
- the session-start hook should enable terse-lite behavior automatically
- ask for `normal mode` or `detailed mode` when you want more depth

What not to compress:
- user-facing copy
- blog/landing/portfolio content
- nuanced PM or UX decisions unless you explicitly want terse output
