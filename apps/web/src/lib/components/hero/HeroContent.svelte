<script lang="ts">
  import { ArrowDown, Smartphone, Layers, Zap } from "lucide-svelte";
  import { Motion } from "svelte-motion";
  import SocialLinks from "./SocialLinks.svelte";
  import { heroView } from "$lib/stores/ui";

  export let focusChat: () => void;
  export let itemVariants: any;
  export let containerVariants: any;
</script>

<Motion initial="hidden" animate="show" variants={containerVariants} let:motion>
  <div class="content" use:motion>
    <Motion variants={itemVariants} let:motion>
      <div class="mobile-profile-hero" use:motion>
        <div class="profile-frame">
          <img src="/me.png" alt="Atnabon" />
        </div>
      </div>
    </Motion>

    <Motion variants={itemVariants} let:motion>
      <div class="badge" use:motion>
        <span class="pulse"></span>
        Available for hire
      </div>
    </Motion>

    <Motion variants={itemVariants} let:motion>
      <h1 class="headline" use:motion>
        Modern products. <br />
        <span class="text-gradient">AI that scales.</span>
      </h1>
    </Motion>

    <Motion variants={itemVariants} let:motion>
      <p class="intro" use:motion>
        I'm <strong class="name-highlight">Atnabon</strong>. I build AI systems that don't just work, they perform, scale, and deliver actionable insights.  Specialized in agentic architectures, LLM powered applications, mobile super-apps, scalable data pipelines, and high reliability AI infrastructure.
      </p>
    </Motion>

    <Motion variants={itemVariants} let:motion>
      <div class="specs" use:motion>
        <div class="spec-item">
          <Smartphone size={18} class="accent-icon" />
          <span>Full Stack</span>
        </div>
        <div class="spec-item">
          <Layers size={18} class="accent-icon" />
          <span>Machine Learning</span>
        </div>
        <div class="spec-item">
          <Zap size={18} class="accent-icon" />
          <span>AI Agents</span>
        </div>
      </div>
    </Motion>

    <Motion variants={itemVariants} let:motion>
      <div class="actions" use:motion>
        <a href="#work" class="btn btn-primary">
          View Work <ArrowDown size={18} />
        </a>
        <div class="btn-wrapper">
          <button
            on:click={focusChat}
            class="btn btn-secondary"
            class:active={$heroView === "chat"}
          >
            Send me a Message
          </button>
        </div>
      </div>
    </Motion>

    <SocialLinks variants={itemVariants} />
  </div>
</Motion>

<style>
  /* ... existing styles ... */
  .badge {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    background: var(--surface-2);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 100px;
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--text-secondary);
    margin-bottom: 2rem;
    transition: all 0.3s ease;
  }

  .badge:hover {
    background: var(--surface-1);
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  .pulse {
    width: 8px;
    height: 8px;
    background: #4ade80;
    border-radius: 50%;
    box-shadow: 0 0 10px rgba(74, 222, 128, 0.5);
    animation: pulse 2s infinite;
  }

  /* Mobile Profile Hero - Hidden by default */
  .mobile-profile-hero {
    display: none;
    margin-bottom: 1.5rem;
  }

  .profile-frame {
    width: 80px;
    height: 80px;
    border-radius: 24px; /* Squircle */
    padding: 3px;
    background: linear-gradient(135deg, var(--surface-2), var(--surface-1));
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.3);
  }

  .profile-frame img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px; /* Inner squircle */
    filter: grayscale(0%);
    transition: filter 0.3s ease;
  }

  /* Reveal on Mobile */
  @media (max-width: 960px) {
    .mobile-profile-hero {
      display: flex;
      justify-content: center;
    }
  }

  .headline {
    font-size: clamp(3rem, 5vw, 4.5rem);
    font-weight: 800;
    line-height: 1.1;
    margin: 0 0 1.5rem 0;
    letter-spacing: -0.02em;
  }

  .text-gradient {
    background: linear-gradient(135deg, var(--accent-1), var(--accent-2));
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  .intro {
    font-size: 1.25rem;
    line-height: 1.5;
    color: var(--text-secondary);
    max-width: 540px;
    margin-bottom: 2rem;
  }

  .name-highlight {
    color: var(--text-primary);
    font-weight: 600;
  }

  .specs {
    display: flex;
    gap: 1.5rem;
    margin-bottom: 2.5rem;
  }

  .spec-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.9rem;
    font-weight: 500;
    color: var(--text-primary);
  }

  :global(.accent-icon) {
    color: var(--accent-2);
  }

  .actions {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 3rem;
  }

  .btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.875rem 1.75rem;
    border-radius: 14px;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.2s cubic-bezier(0.2, 0.8, 0.2, 1);
    border: none;
    cursor: pointer;
    font-family: inherit;
  }

  .btn-primary {
    background: var(--text-primary);
    color: var(--bg-color);
  }

  .btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px -10px rgba(var(--text-primary), 0.3);
  }

  /* The Wrapper Fix */
  .btn-wrapper {
    display: inline-block;
    position: relative;
    /* Ensure the wrapper respects flex layout of parent */
  }

  .btn-secondary {
    background: var(--surface-1);
    color: var(--text-primary);
    border: 1px solid var(--surface-2);
    position: relative;
    overflow: visible;
    clip-path: polygon(0 0, 100% 0, 100% 50%, 100% 100%, 0 100%);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .btn-secondary::after {
    content: "";
    position: absolute;
    inset: -20px;
    z-index: -1;
  }

  /* Trigger hover from the wrapper, affecting the child */
  .btn-wrapper:hover .btn-secondary {
    background: var(--accent-1);
    color: white;
    border-color: var(--accent-1);
    box-shadow: 0 15px 40px rgba(var(--accent-1-rgb), 0.4);
  }

  .btn-secondary.active {
    /* No persistent colors - only morph on hover */
  }

  /* Trigger active morph from wrapper hover */
  .btn-wrapper:hover .btn-secondary.active {
    background: var(--accent-1);
    color: white;
    border-color: var(--accent-1);
    clip-path: polygon(0 0, 85% 0, 100% 50%, 85% 100%, 0 100%);
    padding-right: 2.5rem;
    transform: rotate(10deg) translateX(10px) translateY(5px);
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 rgba(74, 222, 128, 0.4);
    }
    70% {
      box-shadow: 0 0 0 6px rgba(74, 222, 128, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(74, 222, 128, 0);
    }
  }

  /* Mobile adjustment: Ensure badge centered on small screens */
  @media (max-width: 960px) {
    .badge {
      margin-left: auto;
      margin-right: auto;
    }

    .intro {
      margin-left: auto;
      margin-right: auto;
    }

    .specs {
      justify-content: center;
      flex-wrap: wrap;
    }

    .actions {
      justify-content: center;
    }
  }
</style>
