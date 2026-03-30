<script>
  import { siteConfig } from "$lib/config";
  import StickyHeader from "./StickyHeader.svelte";
  import {
    Package,
    FlaskConical,
    ArrowUpRight,
    Terminal,
    Command,
    Star,
    GitBranch,
    Box,
  } from "lucide-svelte";
</script>

<div class="os-wrapper" style="position: relative;">
  <StickyHeader id="work" title="Code" />

  <div class="vertical-layout">
    <!-- Main spine shared with Career/Projects -->
    <div class="main-spine"></div>

    <!-- CONTRIBUTIONS -->
    <section class="section-group">
      <div class="section-label">
        <GitBranch size={16} />
        <span>active_contributions</span>
      </div>

      <div class="section-content">
        <!-- THE WORKBENCH INTERFACE -->
        <div class="workbench">
          <div class="workbench-header">
            <div class="window-controls">
              <span class="dot-red"></span>
              <span class="dot-yellow"></span>
              <span class="dot-green"></span>
            </div>
            <div class="tab">
              <Terminal size={12} />
              <span>contributions.sh</span>
            </div>
          </div>

          <div class="workbench-body code-grid">
            {#each siteConfig.openSource.contributions as item, i}
              <a href={item.link} class="code-block" target="_blank">
                <div class="block-num">0{i + 1}</div>
                <div class="block-content">
                  <div class="block-top">
                    <span class="repo-id">{item.project}</span>
                    <span class="status-pill {item.status.toLowerCase()}"
                      >{item.status}</span
                    >
                  </div>
                  <p class="summary">{item.description}</p>
                  <div class="block-footer">
                    <span class="git-info"><Star size={10} /> pinned</span>
                    <ArrowUpRight size={14} class="arrow" />
                  </div>
                </div>
              </a>
            {/each}
          </div>
        </div>
      </div>
    </section>

    <!-- LIBRARIES -->
    <section class="section-group">
      <div class="section-label">
        <Package size={16} />
        <span>internal_modules</span>
      </div>

      <div class="section-content">
        <div class="workbench dark-mode">
          <div class="workbench-header">
            <div class="tab">
              <Box size={12} />
              <span>registry.json</span>
            </div>
          </div>
          <div class="workbench-body lib-list">
            {#each siteConfig.openSource.libraries as lib}
              <a href={lib.link} class="lib-entry" target="_blank">
                <div class="lib-icon-sq">
                  <Package size={16} />
                </div>
                <div class="lib-main">
                  <div class="lib-row-top">
                    <span class="name">{lib.name}</span>
                    <span class="v">v1.0.4</span>
                  </div>
                  <p class="desc">{lib.description}</p>
                </div>
                <div class="lib-stat-bubble">
                  {lib.stats}
                </div>
              </a>
            {/each}
          </div>
        </div>
      </div>
    </section>

    <!-- EXPERIMENTS -->
    <section class="section-group">
      <div class="section-label">
        <FlaskConical size={16} />
        <span>r&d_lab</span>
      </div>

      <div class="section-content">
        <div class="workbench lab-theme">
          <div class="workbench-header">
            <div class="tab">
              <FlaskConical size={12} />
              <span>research_drafts</span>
            </div>
          </div>
          <div class="workbench-body lab-grid">
            {#each siteConfig.experiments as exp}
              <a href={exp.link} class="lab-item" target="_blank">
                <div class="lab-header">
                  <span class="lab-tag">DRAFT</span>
                  <Command size={12} />
                </div>
                <h4 class="lab-name">{exp.name}</h4>
                <p class="lab-text">{exp.description}</p>
                <div class="lab-footer">
                  {#each exp.tags as tag}
                    <span class="tech">#{tag}</span>
                  {/each}
                </div>
              </a>
            {/each}
          </div>
        </div>
      </div>
    </section>
  </div>
</div>

<style>
  .os-wrapper {
    padding: 2rem 2rem 8rem;
    max-width: 800px;
    margin: 0 auto;
  }

  .os-header {
    margin-bottom: 2rem;
  }

  .os-title {
    font-size: 2.5rem;
    font-weight: 800;
    margin: 0;
    letter-spacing: -0.04em;
    color: var(--text-primary);
    line-height: 1.2;
  }

  .vertical-layout {
    display: flex;
    flex-direction: column;
    gap: 6rem;
    position: relative;
    padding-left: 2rem;
  }

  /* GLOBAL SPINE */
  .main-spine {
    position: absolute;
    left: 0;
    top: 0.5rem; /* Aligns with the center of the first marker */
    bottom: 0;
    width: 1px;
    background: linear-gradient(
      to bottom,
      var(--accent-1) 0%,
      var(--surface-2) 20%,
      var(--surface-2) 80%,
      transparent 100%
    );
    opacity: 0.5;
  }

  .section-group {
    display: flex;
    flex-direction: column;
    position: relative;
  }

  .section-label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 2.5rem;
    color: var(--accent-1);
    font-size: 0.8rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    position: relative;
  }

  /* PKM JUNCTION DOT */
  .section-label::before {
    content: "";
    position: absolute;
    left: -2rem;
    top: 50%;
    width: 10px;
    height: 10px;
    background: var(--bg-color);
    border: 2px solid var(--accent-1);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    z-index: 5;
    transition: all 0.3s ease;
  }

  .section-label::after {
    content: "";
    position: absolute;
    left: -2rem;
    top: 50%;
    width: 1.5rem;
    height: 1px;
    background: var(--accent-1);
    opacity: 0.3;
  }

  .section-group:hover .section-label::before {
    background: var(--accent-1);
    box-shadow: 0 0 15px var(--accent-1);
    transform: translate(-50%, -50%) scale(1.2);
  }

  .section-content {
    padding-left: 2rem;
    position: relative;
  }

  /* INDENTATION GUIDE */
  .section-content::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 1px;
    background: var(--surface-2);
    opacity: 0.3;
    transition: all 0.3s ease;
  }

  .section-group:hover .section-content::before {
    background: var(--accent-1);
    opacity: 0.6;
    box-shadow: 0 0 10px var(--accent-1);
  }

  /* WORKBENCH INTERFACE */
  .workbench {
    background: var(--surface-1);
    border: 1px solid var(--surface-2);
    border-radius: 12px;
    overflow: hidden;
    position: relative;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05);
    transition: all 0.4s ease;
  }

  .workbench:hover {
    border-color: var(--accent-1);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
  }

  .workbench-header {
    height: 44px;
    background: var(--surface-1);
    border-bottom: 1px solid var(--surface-2);
    display: flex;
    align-items: center;
    padding: 0 1rem;
    gap: 1rem;
  }

  .window-controls {
    display: flex;
    gap: 0.4rem;
  }

  .window-controls span {
    width: 8px;
    height: 8px;
    border-radius: 50%;
  }
  .dot-red {
    background: #ff5f56;
  }
  .dot-yellow {
    background: #ffbd2e;
  }
  .dot-green {
    background: #27c93f;
  }

  .tab {
    height: 100%;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0 1.25rem;
    background: var(--bg-color);
    border-left: 1px solid var(--surface-2);
    border-right: 1px solid var(--surface-2);
    font-family: "JetBrains Mono", monospace;
    font-size: 0.75rem;
    color: var(--accent-1);
    margin-bottom: -1px;
    position: relative;
  }

  .workbench-body {
    padding: 1.5rem;
    position: relative;
  }

  /* Blueprint Grid Effect */
  .workbench-body::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: radial-gradient(var(--surface-2) 1px, transparent 1px);
    background-size: 20px 20px;
    opacity: 0.3;
    pointer-events: none;
  }

  /* CONTRIBUTION BLOCKS */
  .code-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1rem;
  }

  .code-block {
    display: flex;
    gap: 1rem;
    padding: 1rem;
    background: var(--bg-color);
    border: 1px solid var(--surface-2);
    border-radius: 8px;
    text-decoration: none;
    color: inherit;
    transition: all 0.3s ease;
  }

  .code-block:hover {
    border-color: var(--accent-1);
    background: var(--surface-1);
    transform: translateY(-2px);
  }

  .block-num {
    font-family: "JetBrains Mono", monospace;
    font-size: 0.7rem;
    color: var(--accent-1);
    opacity: 0.5;
  }

  .repo-id {
    display: block;
    font-family: "JetBrains Mono", monospace;
    font-weight: 800;
    font-size: 1.1rem;
    color: var(--text-primary);
    margin-bottom: 0.25rem;
  }

  .status-pill {
    font-size: 0.6rem;
    font-weight: 800;
    text-transform: uppercase;
    padding: 0.1rem 0.4rem;
    border-radius: 3px;
    background: var(--surface-2);
    color: var(--text-secondary);
  }

  .status-pill.merged {
    color: #10b981;
    background: rgba(16, 185, 129, 0.1);
  }

  .summary {
    font-size: 0.85rem;
    color: var(--text-secondary);
    line-height: 1.5;
    margin: 0.5rem 0 1rem 0;
  }

  .block-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.7rem;
    color: var(--text-secondary);
    opacity: 0.6;
  }

  .arrow {
    color: var(--accent-1);
  }

  /* LIBRARY LIST */
  .lib-list {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .lib-entry {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.75rem 1rem;
    background: var(--bg-color);
    border: 1px solid var(--surface-2);
    border-radius: 8px;
    text-decoration: none;
    color: inherit;
    transition: all 0.3s ease;
  }

  .lib-entry:hover {
    background: var(--surface-1);
    padding-left: 1.5rem;
    border-color: var(--accent-1);
  }

  .lib-icon-sq {
    width: 36px;
    height: 36px;
    background: var(--surface-1);
    border: 1px solid var(--surface-2);
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--accent-1);
  }

  .lib-main {
    flex: 1;
  }

  .lib-row-top {
    display: flex;
    align-items: baseline;
    gap: 0.5rem;
  }

  .name {
    font-family: "JetBrains Mono", monospace;
    font-weight: 700;
    font-size: 1rem;
  }
  .v {
    font-size: 0.7rem;
    opacity: 0.3;
  }
  .desc {
    font-size: 0.85rem;
    color: var(--text-secondary);
    margin: 0;
  }

  .lib-stat-bubble {
    font-size: 0.65rem;
    font-weight: 800;
    color: var(--accent-1);
    background: rgba(var(--accent-1-rgb), 0.1);
    padding: 0.2rem 0.6rem;
    border-radius: 100px;
  }

  /* LAB GRID */
  .lab-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 1.25rem;
  }

  .lab-item {
    background: var(--bg-color);
    border: 1px solid var(--surface-2);
    border-radius: 10px;
    padding: 1.25rem;
    text-decoration: none;
    color: inherit;
    transition: all 0.3s ease;
  }

  .lab-item:hover {
    border-color: var(--accent-1);
    transform: translateY(-4px);
  }

  .lab-tag {
    font-size: 0.6rem;
    font-weight: 900;
    color: var(--accent-1);
    letter-spacing: 0.1rem;
  }

  .lab-name {
    font-size: 1.1rem;
    font-weight: 800;
    margin: 0.5rem 0;
  }
  .lab-text {
    font-size: 0.85rem;
    color: var(--text-secondary);
    line-height: 1.5;
    margin-bottom: 1rem;
  }

  .lab-footer {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
  }
  .tech {
    font-size: 0.6rem;
    font-weight: 700;
    color: var(--text-secondary);
    opacity: 0.6;
  }

  @media (max-width: 640px) {
    .os-wrapper {
      padding: 0 1.5rem 6rem;
    }
    .vertical-layout {
      padding-left: 1.5rem;
    }
    .section-content {
      padding-left: 1.25rem;
    }
    .window-controls {
      display: none;
    }
    .code-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
