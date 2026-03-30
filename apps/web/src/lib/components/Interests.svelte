<script>
  import { siteConfig } from "$lib/config";
  import StickyHeader from "./StickyHeader.svelte";

  const { reading, speaking } = siteConfig.interests;
</script>

<div class="interests-wrapper" style="position: relative;">
  <!-- BOOKS SECTION -->
  <section class="interest-section">
    <StickyHeader id="lab" title="Reading" compact />
    <div class="interest-list">
      {#each reading as book}
        <div class="interest-item">
          <div class="item-visual">
            <img
              src={book.image}
              alt={book.title}
              class="item-img"
              loading="lazy"
            />
          </div>
          <div class="item-info">
            <div class="item-main">
              <h4 class="item-title">{book.title}</h4>
              <p class="item-take">{book.take}</p>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </section>

  <!-- TALKS SECTION -->
  <section class="interest-section">
    <StickyHeader title="Speaking" compact />
    <div class="interest-list">
      {#each speaking as talk}
        <div class="interest-item">
          <div class="item-visual">
            <img
              src={talk.image}
              alt={talk.title}
              class="item-img"
              loading="lazy"
            />
          </div>
          <div class="item-info">
            <div class="item-main">
              <h4 class="item-title">{talk.title}</h4>
              <span class="item-sub">{talk.event}</span>
              <p class="item-take">{talk.take}</p>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </section>
</div>

<style>
  .interests-wrapper {
    padding: 2rem 2rem 2rem;
    max-width: 800px;
    margin: 0 auto;
  }

  .interest-section {
    margin-bottom: 3rem;
  }

  .interest-section:last-child {
    margin-bottom: 0;
  }

  .interest-list {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-top: 1.5rem;
  }

  .interest-item {
    display: flex;
    gap: 1.5rem;
    align-items: flex-start;
    padding: 0.75rem;
    border-radius: 12px;
    background: transparent;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    border: 1px solid transparent;
  }

  .interest-item:hover {
    background: var(--surface-1);
    border-color: var(--surface-2);
    transform: translateX(8px);
  }

  .item-visual {
    width: 80px;
    height: 80px;
    flex-shrink: 0;
    border-radius: 8px;
    overflow: hidden;
    background: var(--surface-2);
    border: 1px solid var(--surface-2);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  .item-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  .interest-item:hover .item-img {
    transform: scale(1.1);
  }

  .item-info {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 0.25rem;
  }

  .item-main {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
  }

  .item-title {
    font-size: 1.1rem;
    font-weight: 700;
    color: var(--text-primary);
    margin: 0;
    line-height: 1.3;
    transition: color 0.3s ease;
  }

  .interest-item:hover .item-title {
    color: var(--accent-1);
  }

  .item-sub {
    font-size: 0.85rem;
    font-weight: 500;
    color: var(--text-secondary);
    opacity: 0.7;
  }

  .item-take {
    font-size: 0.95rem;
    font-weight: 500;
    line-height: 1.5;
    color: var(--text-secondary);
    margin: 0.5rem 0 0;
    font-style: italic;
    position: relative;
    padding-left: 1rem;
    border-left: 2px solid var(--surface-2);
    transition: all 0.3s ease;
  }

  .interest-item:hover .item-take {
    border-left-color: var(--accent-1);
    color: var(--text-primary);
  }

  @media (max-width: 640px) {
    .interests-wrapper {
      padding: 0 1.5rem 6rem;
    }
    .interest-item {
      gap: 1rem;
      padding: 0.5rem;
    }
    .interest-item:hover {
      transform: none;
    }
    .item-visual {
      width: 64px;
      height: 64px;
    }
    .item-title {
      font-size: 1rem;
    }
    .item-take {
      font-size: 0.85rem;
    }
  }
</style>
