---
title: "One Agent is Enough"
date: "2026-01-15"
description: "What building multi-agent systems taught me about the power of doing one thing well."
category: "AI Engineering"
---

<script>
  import { Motion } from 'svelte-motion';
</script>

# One Agent is Enough

If you've ever watched a swarm of agents hallucinate in perfect coordination, you know the feeling. Twelve LLM calls, three vector stores, a graph database, and a routing layer — all producing confident nonsense at scale.

I've been there. I built the [Automaton Auditor](https://github.com/Atnabon/automaton-auditor) — a multi-agent system with prosecutors, defenders, and judges deliberating over code quality. It's complex. It works. But the lesson I took away from building it wasn't about orchestration.

It was about what happens when a single agent does its job right.

### The Complexity Trap

In AI engineering, we've become obsessed with multi-agent architectures. We start with a simple question — "Can an LLM analyze this code?" — and before we know it, we've built a judicial system with parallel evidence collection and dialectical deliberation.

Why? Because it feels like progress. More agents, more pipelines, more abstraction layers. We're so busy designing the swarm that we forget to ask: does the first agent even understand the problem?

When you have only one agent, you can't hide behind orchestration. Your prompt has to be precise. Your context window has to be intentional. You can't "route around" a bad prompt if you don't have five other agents to compensate.

### The RAG Discipline

When I built the [AI Tutor](https://github.com/Atnabon/ai-tutor), the core insight was simple: retrieve the right context, then let the model do its thing. No fancy multi-hop reasoning chains. No agent loops. Just good retrieval and a focused prompt.

In ML engineering, we've lost patience for the fundamentals. We reach for LangGraph before we've mastered LangChain. We spin up vector databases before we understand our embedding space. We build agentic pipelines when a single well-crafted prompt would do.

A good engineer starts with the retrieval. They find the foundational context that actually matters, and they hold it. They don't add the second agent until the first one can no longer carry the task.

### The Constraint Advantage

Constraints aren't limitations; they're the source of good engineering.

When I built the [Document Intelligence Refinery](https://github.com/Atnabon/document-intelligence-refinery), the constraint was clear: process enterprise PDFs without burning through API credits. That limitation forced a 5-stage architecture where each stage does exactly one thing — classify, extract, validate, structure, store. No stage tries to be clever. Each one is a single string played well.

<Motion initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5 }} client:visible>

  <div style="padding: 2.5rem; border: 1px dashed var(--accent-2); border-radius: 16px; margin: 2.5rem 0; text-align: left; background: var(--surface-1); line-height: 1.6;">
    <h4 style="margin-top: 0; color: var(--accent-2); font-size: 1.1rem;">The Engineering Principle</h4>
    <p style="font-size: 0.95rem; margin-bottom: 0; font-weight: 500;">
      "If the pipeline doesn't work with one well-prompted agent, a swarm of twelve will only hallucinate louder."
    </p>
  </div>
</Motion>

### Explainable over Complex

In my [fraud detection project](https://github.com/Atnabon/financial-fraud-detection), I learned something counterintuitive: the models that stakeholders trust aren't the most accurate ones — they're the ones they can understand. SHAP values and LIME explanations did more for adoption than any accuracy improvement.

Real AI engineering — the kind that ships and stays in production — is built lean. Every model complexity is a weight you choose to carry. Every agent in the swarm is a failure mode you choose to debug at 2 AM.

#### Rules for the Single-Agent Engineer:

1. **Start with one agent**: Until it fails at the task, you don't need two. Complexity should be pulled by necessity, not pushed by ambition.
2. **Master the prompt**: Before reaching for tools and chains, exhaust what a single well-crafted prompt can do. You'd be surprised.
3. **Make it explainable**: If you can't explain why your system made a decision, you've built a liability, not a feature. SHAP over vibes.

Next time you're about to `pip install` your way into a 12-agent swarm, stop. Start with one agent. One good prompt. One clear task.

Maybe that's all the intelligence you really need.

---

_Build simple. Ship real._

- A.
