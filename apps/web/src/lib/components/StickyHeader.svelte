<script lang="ts">
  import { stickyObserver, type StickyDetail } from "$lib/actions/sticky";
  import { activeSection } from "$lib/stores/ui";

  let {
    id = "",
    title = "",
    subtitle = "",
    compact = false,
    onstuck = undefined,
  } = $props();

  let isStuck = $state(false);

  function handleStuck(detail: StickyDetail) {
    isStuck = detail.isStuck;
    if (isStuck && id) {
      activeSection.set(id);
    }
    if (onstuck) onstuck(detail);
  }
</script>

<!-- Sentinel: Stays at the top of the scroll container to detect the boundary -->
<div
  class="sticky-sentinel"
  use:stickyObserver={{ sectionId: id, onStuck: handleStuck }}
></div>

<div class="sticky-header" class:is-stuck={isStuck} class:compact>
  <div class="content">
    <div class="title-group">
      <!-- Normal Flow Title -->
      <div class="normal-title">
        <slot name="title">
          <h2 class="section-title">{title}</h2>
        </slot>
        {#if subtitle}
          <p class="section-subtitle">{subtitle}</p>
        {:else}
          <slot name="subtitle" />
        {/if}
      </div>

      <!-- Stuck Marginalia Title -->
      <div class="stuck-title">
        <h2 class="section-title stuck-version">{title}</h2>
      </div>
    </div>
    <slot name="extra" />
  </div>
</div>

<style>
  /* Sensor: A transparent bar that spans the height of the section 
     to maintain 'Active' state while the user is inside this section. */
  .sticky-sentinel {
    position: absolute;
    top: 0;
    left: 0;
    width: 1px;
    height: 100%;
    opacity: 0;
    pointer-events: none;
  }

  .sticky-header {
    position: sticky;
    top: 0;
    z-index: 100;
    width: 100%;
    pointer-events: none;
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .content {
    max-width: 800px;
    margin: 0 auto;
    position: relative;
    pointer-events: auto;
  }

  .title-group {
    display: flex;
    flex-direction: column;
    padding-bottom: 2rem;
    position: relative;
    transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .normal-title {
    opacity: 1;
    transition: opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .is-stuck .normal-title {
    opacity: 0;
    pointer-events: none;
  }

  .stuck-title {
    position: absolute;
    left: -16rem;
    top: 3rem; /* Increased top spacing as requested */
    width: 13rem;
    text-align: right;
    padding-bottom: 0;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1);
    transition-delay: 0s;
  }

  .is-stuck .stuck-title {
    opacity: 1;
    pointer-events: auto;
    transition-delay: 0.2s; /* Delay the fade-in for a premium feel */
  }

  /* Compact (Interests) Normal Style */
  .compact .title-group {
    padding-bottom: 1.25rem;
  }

  /* Normal Style matches original Projects/Career */
  .section-title {
    font-size: 2.5rem;
    font-weight: 800;
    margin: 0;
    letter-spacing: -0.04em;
    color: var(--text-primary);
    line-height: 1.2;
    transition: color 0.4s ease;
  }

  /* Normal Style matches original Interests label */
  .compact .section-title {
    font-size: 0.7rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: var(--text-secondary);
  }

  /* Stuck Specific Text Style */
  .stuck-text,
  .stuck-version {
    font-size: 1.1rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--accent-1);
  }

  .compact .stuck-version {
    font-size: 0.85rem;
    color: var(--text-primary);
    opacity: 0.8;
    letter-spacing: 2px;
  }

  .section-subtitle {
    color: var(--text-secondary);
    font-size: 1rem;
    margin: 0.5rem 0 0 0;
    opacity: 0.8;
  }

  /* Tablet/Mobile: Disable sticky - headers scroll normally */
  @media (max-width: 1400px) {
    .sticky-header {
      position: relative;
    }

    /* Reset all stuck styles on mobile */
    .sticky-header.is-stuck {
      background: none;
      padding: 0;
      margin-bottom: 0;
    }

    .sticky-header.is-stuck::before {
      display: none;
    }

    .is-stuck .title-group {
      position: static;
      padding-bottom: 2rem;
      flex-direction: column;
      gap: 0.25rem;
    }

    .is-stuck .section-title {
      font-size: 2.5rem;
      font-weight: 800;
      letter-spacing: -0.04em;
      text-transform: none;
      color: var(--text-primary);
      opacity: 1;
    }

    .is-stuck .section-title::after {
      display: none;
    }

    .is-stuck.compact .section-title {
      font-size: 0.7rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 2px;
      color: var(--text-secondary);
    }

    .stuck-title {
      display: none;
    }

    .normal-title,
    .is-stuck .normal-title {
      opacity: 1;
      pointer-events: auto;
    }

    .is-stuck .section-subtitle {
      display: block;
      opacity: 0.8;
    }
  }

  @media (max-width: 640px) {
    .section-title,
    .is-stuck .section-title {
      font-size: 2rem;
    }

    .compact .section-title,
    .is-stuck.compact .section-title {
      font-size: 0.7rem;
    }
  }
</style>
