---
title: "The Brownfield Problem"
date: "2025-12-07"
description: "Why understanding existing code is harder than writing new code, and what AI can do about it."
category: "Engineering"
---

# Legacy Code Cartographer Problem

Every developer knows the feeling. You join a new team, clone the repo, and stare at 200,000 lines of code that someone else wrote. No documentation. Cryptic variable names. A folder called `utils` that somehow contains the entire business logic.

Welcome to the Legacy Code Cartographer.

I've been thinking about this problem a lot — enough to build the [Legacy Code Cartographer](https://github.com/Atnabon/Legacy-Code-Cartographer), a multi-agent system that maps unfamiliar codebases. But before I talk about the solution, I want to talk about why this problem matters more than we think.

### The Onboarding Tax

Most engineering teams spend weeks onboarding new developers. Not because the new person isn't skilled, but because understanding existing code is fundamentally different from writing new code.

Writing code is creative. You choose the abstractions, name the variables, design the flow. It's your mental model externalized.

Reading someone else's code is archaeological. You're reverse-engineering their mental model from artifacts they left behind. And unlike archaeology, the civilization that built this thing is still alive — they just didn't leave any documentation.

### Why Documentation Fails

We've tried to solve this with documentation. READMEs, wikis, architecture decision records. And they help — for about two weeks after they're written.

Then the code evolves. The docs don't. Now you have something worse than no documentation: documentation that lies to you. It confidently describes an architecture that no longer exists, points you to files that have been renamed, and explains design decisions that were reversed three sprints ago.

The truth is, code is the only documentation that's always up to date. The problem is that code is terrible at explaining _why_.

### What AI Actually Helps With

This is where I think AI agents have a genuine, non-hype use case. Not writing code — reading it.

When I built Legacy Code Cartographer, each agent has a focused job: one traces data flows, another maps component relationships, another identifies architectural patterns. They don't generate code. They generate understanding.

The key insight: AI is good at the tedious, thorough work that humans skip. Tracing every import chain. Following every function call. Mapping every database query back to its API endpoint. This is work that humans _can_ do but won't, because it's boring and our attention spans aren't built for it.

### The Real Problem is Empathy

At the deepest level, Legacy Code Cartographer problem is an empathy problem. The person who wrote the code made decisions that made sense to them, in their context, with their constraints. The person reading the code has different context, different constraints, different mental models.

Good code isn't just correct — it's considerate. It anticipates that a stranger will read it. It names things for the reader, not the writer. It structures itself for discovery, not just execution.

I try to write code that my future self — or the next developer — can understand without an AI cartographer. But I'm realistic enough to know that I don't always succeed. None of us do.

### The Takeaway

If you're writing code today, ask yourself: would a new team member understand this in six months? If not, the problem isn't documentation — it's the code itself.

And if you're joining a codebase today, be patient with it. Someone built this under deadline pressure, with incomplete requirements, and probably while also being in three meetings. The code carries their stress alongside their logic.

Understanding that is the first step to improving it.

---

_Read before you write. Understand before you refactor._

- A.
