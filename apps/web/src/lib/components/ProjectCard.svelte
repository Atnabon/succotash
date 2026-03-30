<script>
  import { Motion } from "svelte-motion";
  import { ArrowUpRight } from "lucide-svelte";

  export let project;
  export let index = 0;
</script>

<div class="project-row-wrapper">
  <Motion
    whileHover={{ x: 0 }}
    transition={{ type: "spring", stiffness: 200, damping: 20 }}
    let:motion
  >
    <a
      href={project.link}
      class="project-row"
      target="_blank"
      rel="noopener noreferrer"
      use:motion
    >
      <div class="project-header">
        <div class="image-preview">
          <img src={project.image} alt={project.title} class="project-img" />
          <div class="stats-badge">{project.stats}</div>
        </div>

        <div class="content-group">
          <div class="meta-label">
            <!-- <span class="category">{project.category}</span>
            <span class="dot">·</span> -->
            <!-- <span class="type">{project.type}</span> -->
          </div>

          <h3 class="title">{project.title}</h3>

          <div class="project-body">
            <p class="description">{project.description}</p>
          </div>

          <div class="footer-meta">
            <div class="tags">
              {#each project.tags as tag}
                <span class="tag">{tag}</span>
              {/each}
            </div>

            <div class="link-affordance">
              <ArrowUpRight size={18} />
            </div>
          </div>
        </div>
      </div>
    </a>
  </Motion>
</div>

<style>
  .project-row-wrapper {
    position: relative;
    padding: 1rem 0;
    border-bottom: 1px solid var(--surface-2);
    transition: all 0.3s ease;
  }

  .project-row-wrapper:hover {
    border-bottom-color: var(--accent-1);
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.01),
      transparent
    );
  }

  .project-row {
    display: flex;
    flex-direction: column;
    text-decoration: none;
    color: inherit;
    position: relative;
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .project-header {
    display: grid;
    grid-template-columns: 140px 1fr;
    gap: 1.5rem;
    align-items: flex-start;
  }

  .image-preview {
    position: relative;
    width: 100%;
    aspect-ratio: 4 / 3;
    border-radius: 8px;
    overflow: hidden;
    background: var(--surface-2);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
    transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .project-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(100%) brightness(0.9);
    transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .project-row:hover .image-preview {
    transform: scale(1.02);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  }

  .project-row:hover .project-img {
    filter: grayscale(0%) brightness(1);
    transform: scale(1.1);
  }

  /* Stats Badge - simplified */
  .stats-badge {
    position: absolute;
    bottom: 0.25rem;
    right: 0.25rem;
    left: auto;
    background: rgba(0, 0, 0, 0.85);
    backdrop-filter: blur(4px);
    color: white;
    padding: 0.2rem 0.4rem;
    border-radius: 4px;
    font-size: 0.6rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    border: 1px solid rgba(255, 255, 255, 0.1);
    opacity: 1;
    z-index: 2;
  }

  .content-group {
    display: flex;
    flex-direction: column;
    gap: 0.35rem; /* Tighter gap */
    padding-top: 0.25rem;
  }

  .meta-label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.7rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--accent-1);
    opacity: 0.9;
  }

  .dot {
    opacity: 0.3;
    color: var(--text-primary);
  }

  .type {
    color: var(--text-secondary);
  }

  .title {
    font-size: 1.25rem; /* Much smaller than 2.5rem */
    font-weight: 700;
    color: var(--text-primary);
    margin: 0;
    letter-spacing: -0.02em;
    line-height: 1.2;
    transition: all 0.3s ease;
  }

  .project-row:hover .title {
    color: var(--accent-1);
  }

  .project-body {
    max-width: 600px;
    margin-top: 0.25rem;
  }

  .description {
    font-size: 0.9rem;
    line-height: 1.5;
    color: var(--text-secondary);
    margin: 0;
    transition: all 0.3s ease;
  }

  .project-row:hover .description {
    color: var(--text-primary);
  }

  .footer-meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 0.75rem;
    padding-top: 0;
    border-top: none; /* Removed border */
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.35rem;
  }

  .tag {
    font-size: 0.65rem;
    font-weight: 600;
    color: var(--text-secondary);
    background: var(--surface-1);
    padding: 0.15rem 0.4rem;
    border-radius: 4px;
    border: 1px solid var(--surface-2);
    transition: all 0.2s ease;
    opacity: 0.8;
  }

  .project-row:hover .tag {
    border-color: var(--accent-1);
    color: var(--text-primary);
    opacity: 1;
  }

  .link-affordance {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: transparent;
    border: 1px solid transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text-secondary);
    transition: all 0.3s ease;
  }

  .project-row:hover .link-affordance {
    background: var(--surface-1);
    color: var(--accent-1);
    border-color: var(--accent-1);
    transform: translateX(5px);
  }

  @media (max-width: 640px) {
    .project-header {
      grid-template-columns: 80px 1fr;
      gap: 1rem;
      align-items: center; /* Better alignment for small rows */
    }

    .image-preview {
      aspect-ratio: 1; /* Square for mobile list view */
      width: 100%;
      height: 80px;
    }

    .title {
      font-size: 1.1rem;
    }

    .description {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      font-size: 0.85rem;
    }
  }
</style>
