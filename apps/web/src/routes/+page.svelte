<script lang="ts">
  import Hero from "$lib/components/Hero.svelte";
  import ProjectCard from "$lib/components/ProjectCard.svelte";
  import StickyHeader from "$lib/components/StickyHeader.svelte";
  import Career from "$lib/components/Career.svelte";
  import OpenSource from "$lib/components/OpenSource.svelte";
  import Interests from "$lib/components/Interests.svelte";
  import { siteConfig } from "$lib/config";

  let activeFilter = "All";

  const categories = [
    "All",
    ...new Set(siteConfig.projects.map((p) => p.category)),
  ];

  $: filteredProjects =
    activeFilter === "All"
      ? siteConfig.projects
      : siteConfig.projects.filter((p) => p.category === activeFilter);

  $: projectTypes = [...new Set(filteredProjects.map((p) => p.type))].sort(
    (a: string, b: string) => {
      const order: Record<string, number> = {
        Work: 1,
        Community: 2,
        "Side Projects": 3,
      };
      return (order[a] || 99) - (order[b] || 99);
    }
  );
</script>

<svelte:head>
  <title>{siteConfig.name} — {siteConfig.title}</title>
  <meta name="description" content={siteConfig.description} />
</svelte:head>

<main>
  <Hero />

  <section id="work" class="section" style="position: relative;">
    <div class="container">
      <StickyHeader
        id="work"
        title="Projects"
        subtitle="Selected works and experiments"
      />

      <!-- Simple pill filters -->
      <!-- <div class="filters">
        {#each categories as cat}
          <button
            class="filter-pill"
            class:active={activeFilter === cat}
            on:click={() => (activeFilter = cat)}
          >
            {cat}
          </button>
        {/each}
      </div> -->

      <div class="projects-container">
        {#each projectTypes as type}
          <div class="type-group">
            <h3 class="type-label">{type}</h3>
            <div class="projects-list">
              {#each filteredProjects.filter((p) => p.type === type) as project, i (activeFilter + "-" + type + "-" + project.title)}
                <div class="project-wrapper">
                  <ProjectCard {project} index={i} />
                </div>
              {/each}
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <Career />

  <OpenSource />

  <div id="lab">
    <Interests />
  </div>
</main>

<style>
  .section {
    padding: 6rem 2rem;
  }

  .container {
    max-width: 800px;
    margin: 0 auto;
  }

  .section-header {
    margin-bottom: 1.5rem;
  }

  .section-title {
    font-size: 2.5rem;
    font-weight: 800;
    margin: 0 0 0.5rem 0;
    letter-spacing: -0.04em;
    color: var(--text-primary);
  }

  .section-subtitle {
    color: var(--text-secondary);
    font-size: 1rem;
    margin: 0;
    opacity: 0.8;
  }

  /* Simple pill filters */
  .filters {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 4rem;
  }

  .filter-pill {
    padding: 0.4rem 0.8rem;
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    font-family: inherit;
    border: 1px solid var(--surface-2);
    border-radius: 8px;
    background: var(--surface-1);
    color: var(--text-secondary);
    cursor: pointer;
    transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .filter-pill:hover {
    background: var(--surface-2);
    color: var(--text-primary);
  }

  .filter-pill.active {
    background: var(--text-primary);
    color: var(--bg-color);
    border-color: var(--text-primary);
  }

  /* Projects structure */
  .projects-container {
    display: flex;
    flex-direction: column;
    gap: 3rem; /* Reduced from 6rem */
    position: relative;
    padding-left: 2rem;
  }

  /* Projects Spine */
  .projects-container::after {
    content: "";
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

  .type-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    position: relative;
  }

  .type-label {
    font-size: 0.75rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    color: var(--accent-1);
    margin: 0;
    position: relative;
    padding-bottom: 0;
  }

  /* Type Junction Dot */
  .type-label::before {
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

  /* Type Branch Line */
  .type-label::after {
    content: "";
    position: absolute;
    left: -2rem;
    top: 50%;
    width: 1.5rem;
    height: 1px;
    background: var(--accent-1);
    opacity: 0.3;
    z-index: 4;
  }

  .type-group:hover .type-label::before {
    background: var(--accent-1);
    box-shadow: 0 0 15px var(--accent-1);
    transform: translate(-50%, -50%) scale(1.2);
  }

  .projects-list {
    display: flex;
    flex-direction: column;
    gap: 0rem;
    padding-left: 2rem;
    position: relative;
  }

  /* List vertical guide */
  .projects-list::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 1px;
    background: var(--surface-2);
    opacity: 0.3;
  }

  .type-group:hover .projects-list::before {
    background: var(--accent-1);
    opacity: 0.6;
    box-shadow: 0 0 10px var(--accent-1);
  }

  .project-wrapper {
    animation: fadeSlideIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }

  @keyframes fadeSlideIn {
    from {
      opacity: 0;
      transform: translateY(15px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 640px) {
    .section {
      padding: 4rem 1.5rem;
    }

    .section-title {
      font-size: 2rem;
    }

    .projects-container {
      gap: 4rem;
      padding-left: 1.5rem;
    }

    .projects-list {
      padding-left: 1.25rem;
    }

    .type-label::before,
    .type-label::after {
      left: -1.5rem;
    }
  }
</style>
