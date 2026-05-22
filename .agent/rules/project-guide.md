---
trigger: always_on
---

- Code should be clean, readable, and self‑explaining (variable names, function names carry meaning).
- Do things simply, don't overengineer anything and complicate stuff. complexity must be the very last resort
- Don't do things imperatively, I need declarative code whenever possible. Favor declarative code when possible imperative unless performance or clarity demands it.
- Functions should be short, single responsibility.
- Avoid deep nesting; break into helper functions.
- Use early returns instead of wrapping large blocks in `if`.
- Include minimal comments only when non‑obvious logic exists.
- Always check / handle errors (try/catch or validations) in async or external code.
- Use library / framework best practices (project conventions) over custom hacks.
- Don’t generate unused imports or dead code.
- Use tailwind classes for styling in React Native components, avoid inline styles unless really necessary.
