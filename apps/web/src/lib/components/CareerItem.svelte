<script lang="ts">
  import { ArrowUpRight } from "lucide-svelte";

  export let title: string;
  export let subtitle: string;
  export let period: string | undefined = undefined;
  export let description: string | string[] | undefined = undefined;
  export let logo: string | undefined = undefined;
  export let link: string = "#";
  export let showDivider: boolean = false;
  export let isGroup: boolean = false;
  export let roles: Array<{
    role: string;
    period: string;
    description: string | string[];
  }> = [];
</script>

<div class="item-row-wrapper" class:is-group={isGroup}>
  {#if !isGroup}
    <a href={link} class="item-row" target="_blank" rel="noopener noreferrer">
      <div class="item-header">
        <div class="header-main-group">
          {#if logo}
            <div class="logo-container">
              <img src={logo} alt={subtitle} class="logo-img" />
            </div>
          {/if}
          <div class="title-group">
            <h3 class="title">{title}</h3>
            <span class="subtitle-name">{subtitle}</span>
            <span class="period">{period}</span>
          </div>
        </div>

        <div class="meta-group">
          {#if link && link !== "#"}
            <div class="link-circle">
              <ArrowUpRight size={14} />
            </div>
          {/if}
        </div>
      </div>

      {#if description}
        <div class="item-body">
          {#if Array.isArray(description)}
            <ul class="bullet-list">
              {#each description as point}
                <li class="bullet-point">{point}</li>
              {/each}
            </ul>
          {:else}
            <p class="description-text">{description}</p>
          {/if}
        </div>
      {/if}
    </a>
  {:else}
    <div class="group-container">
      <div class="group-header">
        <div class="group-logo-container">
          <img src={logo} alt={title} class="group-logo" />
        </div>
        <div class="group-info">
          <h3 class="group-company-name">{title}</h3>
          {#if link && link !== "#"}
            <a
              href={link}
              class="group-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Website <ArrowUpRight size={12} />
            </a>
          {/if}
        </div>
      </div>

      <div class="roles-list">
        {#each roles as role, i}
          <div class="role-item">
            <div class="role-marker">
              <div class="marker-dot"></div>
              {#if i < roles.length - 1}
                <div class="marker-line"></div>
              {/if}
            </div>
            <div class="role-content">
              <div class="role-header">
                <h4 class="role-title">{role.role}</h4>
                <span class="role-period">{role.period}</span>
              </div>
              {#if role.description}
                {#if Array.isArray(role.description)}
                  <ul class="bullet-list">
                    {#each role.description as point}
                      <li class="bullet-point">{point}</li>
                    {/each}
                  </ul>
                {:else}
                  <p class="role-description">{role.description}</p>
                {/if}
              {/if}
            </div>
          </div>
        {/each}
      </div>
    </div>
  {/if}

  {#if showDivider}
    <div class="item-divider"></div>
  {/if}
</div>

<style>
  .item-row-wrapper {
    position: relative;
    padding: 0.75rem 0;
  }

  /* Structural Indicator Dot (PKM Style) */
  .item-row-wrapper::before {
    content: "";
    position: absolute;
    left: -2rem;
    top: 1.4rem;
    width: 6px;
    height: 6px;
    background: var(--surface-2);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    opacity: 0.5;
    transition: all 0.3s ease;
    z-index: 5;
  }

  .item-row-wrapper:hover::before {
    background: var(--accent-1);
    opacity: 1;
    transform: translate(-50%, -50%) scale(1.5);
    box-shadow: 0 0 8px var(--accent-1);
  }

  .item-row {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    text-decoration: none;
    color: inherit;
    position: relative;
    padding-bottom: 0.25rem;
  }

  .item-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1.5rem;
  }

  .header-main-group {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    flex: 1;
  }

  .title-group {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    flex: 1;
  }

  .title {
    font-size: 1.4rem;
    font-weight: 800;
    color: var(--text-primary);
    margin: 0;
    letter-spacing: -0.03em;
    line-height: 1.2;
    transition: all 0.3s ease;
  }

  .item-row:hover .title {
    color: var(--accent-1);
  }

  .subtitle-info {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    width: fit-content;
    transition: all 0.3s ease;
  }

  .item-row:hover .subtitle-info {
    color: var(--text-primary);
  }

  .logo-img {
    width: 42px;
    height: 42px;
    border-radius: 6px;
    background: #ffffff;
    object-fit: contain;
    padding: 4px;
    border: 1px solid var(--surface-2);
    transition: all 0.3s ease;
    flex-shrink: 0;
  }

  .item-row:hover .logo-img {
    transform: scale(1.15);
  }

  .subtitle-name {
    font-size: 0.95rem;
    font-weight: 700;
    color: var(--text-primary);
    opacity: 0.9;
  }

  .meta-group {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 1.8rem;
  }

  .period {
    font-size: 0.8rem;
    font-weight: 700;
    color: var(--text-secondary);
    letter-spacing: 0.05em;
    white-space: nowrap;
    opacity: 0.6;
    transition: all 0.3s ease;
  }

  .item-row:hover .period {
    opacity: 0.9;
  }

  .link-circle {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: 1px solid var(--surface-2);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text-secondary);
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    opacity: 0;
    transform: scale(0.8);
  }

  .item-row:hover .link-circle {
    opacity: 1;
    transform: scale(1);
    background: var(--text-primary);
    color: var(--bg-color);
    border-color: var(--text-primary);
  }

  .item-body {
    max-width: 650px;
    margin-top: 0.6rem;
    padding-left: 0.25rem;
    border-left: 1px solid transparent;
    transition: all 0.3s ease;
  }

  .item-row:hover .item-body {
    border-left-color: var(--accent-1);
    padding-left: 0.75rem;
  }

  .description-text {
    font-size: 1.1rem;
    font-weight: 600;
    line-height: 1.6;
    color: var(--text-secondary);
    margin: 0;
    transition: all 0.3s ease;
  }

  .item-row:hover .description-text {
    color: var(--text-primary);
  }

  :global(.dark) .description-text {
    color: var(--text-secondary);
  }

  :global(.dark) .item-row:hover .description-text {
    color: var(--text-primary);
  }

  .item-divider {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: rgba(0, 0, 0, 0.1);
  }

  :global(.dark) .item-divider {
    background: rgba(255, 255, 255, 0.15);
  }

  /* Group Styles (LinkedIn Style) */
  .group-container {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding: 0.5rem 0;
  }

  .group-header {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .group-logo-container {
    width: 42px;
    height: 42px;
    background: #ffffff;
    border-radius: 6px;
    border: 1px solid var(--surface-2);
    overflow: hidden;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px;
  }

  .group-logo {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .group-info {
    display: flex;
    flex-direction: column;
    gap: 0.15rem;
  }

  .group-company-name {
    font-size: 1.25rem;
    font-weight: 800;
    color: var(--text-primary);
    margin: 0;
    letter-spacing: -0.02em;
  }

  .group-link {
    font-size: 0.75rem;
    font-weight: 700;
    color: var(--accent-1);
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0.25rem;
    opacity: 0.8;
  }

  .group-link:hover {
    opacity: 1;
    text-decoration: underline;
  }

  .roles-list {
    display: flex;
    flex-direction: column;
    padding-left: 21px; /* Align with center of 42px logo */
  }

  .role-item {
    display: flex;
    gap: 1.5rem;
    position: relative;
  }

  .role-marker {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 2px;
    flex-shrink: 0;
    position: relative;
  }

  .marker-dot {
    width: 10px;
    height: 10px;
    background: var(--surface-2);
    border: 2px solid var(--bg-color);
    border-radius: 50%;
    margin-top: 6px;
    z-index: 2;
    transition: all 0.3s ease;
  }

  .role-item:hover .marker-dot {
    background: var(--accent-1);
    transform: scale(1.2);
    box-shadow: 0 0 10px var(--accent-1);
  }

  .marker-line {
    position: absolute;
    top: 16px;
    bottom: -16px;
    width: 2px;
    background: var(--surface-2);
    opacity: 0.5;
    z-index: 1;
  }

  .role-content {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    padding-bottom: 2rem;
    flex: 1;
  }

  .role-item:last-child .role-content {
    padding-bottom: 0.5rem;
  }

  .role-header {
    display: flex;
    flex-direction: column;
    gap: 0.15rem;
  }

  .role-title {
    font-size: 1.05rem;
    font-weight: 700;
    color: var(--text-primary);
    margin: 0;
    transition: color 0.3s ease;
  }

  .role-item:hover .role-title {
    color: var(--accent-1);
  }

  .role-period {
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--text-secondary);
    opacity: 0.7;
  }

  .role-description {
    font-size: 1.1rem;
    font-weight: 600;
    line-height: 1.6;
    color: var(--text-secondary);
    margin: 0.25rem 0 0;
    max-width: 650px;
  }

  .bullet-list {
    margin: 0.5rem 0 0 0;
    padding-left: 1.25rem;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
  }

  .bullet-point {
    font-size: 1.1rem;
    font-weight: 600;
    line-height: 1.6;
    color: var(--text-secondary);
    position: relative;
    transition: color 0.2s ease;
  }

  .bullet-point::before {
    content: "•";
    position: absolute;
    left: -1.25rem;
    color: var(--accent-1);
    font-weight: bold;
    opacity: 0.7;
  }

  .item-row:hover .bullet-point,
  .role-item:hover .bullet-point {
    color: var(--text-primary);
  }

  @media (max-width: 640px) {
    .header-main-group {
      gap: 0.75rem;
    }
    .logo-img {
      width: 36px;
      height: 36px;
    }
    .group-logo-container {
      width: 36px;
      height: 36px;
    }
    .roles-list {
      padding-left: 18px;
    }
    .role-item {
      gap: 1rem;
    }
    .group-company-name {
      font-size: 1.1rem;
    }
  }
</style>
