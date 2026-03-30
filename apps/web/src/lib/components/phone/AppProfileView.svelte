<script lang="ts">
  import { Send } from "lucide-svelte";
  import { fade } from "svelte/transition";

  export let onMessageClick: () => void;
</script>

<div class="profile-view telegram" in:fade={{ duration: 300 }}>
  <div class="profile-masthead">
    <img src="/me.png" alt="Atnabon" class="masthead-img" />
    <div class="masthead-overlay">
      <div class="masthead-wrapper">
        <div class="masthead-info">
          <h2 class="masthead-name">Atnabon</h2>
          <div class="masthead-status-row">
            <span class="status-dot"></span>
            <p class="masthead-status">Online</p>
          </div>
        </div>
        <button class="masthead-cta" on:click={onMessageClick}>
          <Send size={14} />
          <span>Message</span>
        </button>
      </div>
    </div>
  </div>

  <div class="profile-info-grid">
    <div class="info-row">
      <span class="info-key">Bio</span>
      <p class="info-val">
        I build AI systems that don't just work, they perform, scale, and deliver actionable insights.
      </p>
    </div>
    <div class="info-row">
      <span class="info-key">Username</span>
      <p class="info-val link">@bonney_jr</p>
    </div>
    <div class="info-row">
      <span class="info-key">Recent Thoughts</span>
      <a href="/blog/simplicity" class="info-val link">One Agent is Enough →</a
      >
    </div>
  </div>

  <div class="media-section">
    <div class="media-header">Media</div>
    <div class="media-preview">
      <div class="media-item">
        <img src="https://picsum.photos/seed/p1/200" alt="P1" />
      </div>
      <div class="media-item">
        <img src="https://picsum.photos/seed/p2/200" alt="P2" />
      </div>
      <div class="media-item">
        <img src="https://picsum.photos/seed/p3/200" alt="P3" />
      </div>
    </div>
  </div>

  <div class="music-section">
    <div class="media-header">Music</div>
    <div class="spotify-embed">
      <iframe
        title="Coding Playlist"
        style="border-radius:12px"
        src="https://open.spotify.com/embed/playlist/37i9dQZF1DWT4nLmUaFDGb?utm_source=generator&theme=0"
        width="100%"
        height="352"
        frameBorder="0"
        allowfullscreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  </div>
</div>

<style>
  .profile-view.telegram {
    padding-top: 0;
  }
  .profile-masthead {
    position: relative;
    width: 100%;
    margin: 0;
    height: 220px;
    background: var(--phone-surface);
  }
  .masthead-img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: top;
  }
  .masthead-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 30px 24px 8px;
    color: #fff;
    z-index: 1;
  }
  .masthead-overlay::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.9) 0%,
      rgba(0, 0, 0, 0.4) 60%,
      transparent 100%
    );
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    mask-image: linear-gradient(to top, black 20%, transparent 100%);
    -webkit-mask-image: linear-gradient(to top, black 20%, transparent 100%);
    z-index: -1;
    pointer-events: none;
  }
  .masthead-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: 12px;
  }
  .masthead-info {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
  .masthead-name {
    margin: 0;
    font-size: 1.4rem;
    font-weight: 700;
    letter-spacing: -0.01em;
  }
  .masthead-status-row {
    display: flex;
    align-items: center;
    gap: 6px;
  }
  .status-dot {
    width: 8px;
    height: 8px;
    background: #4ade80;
    border-radius: 50%;
    box-shadow: 0 0 8px rgba(74, 222, 128, 0.6);
  }
  .masthead-status {
    margin: 0;
    font-size: 0.8rem;
    font-weight: 600;
    opacity: 0.9;
  }

  .masthead-cta {
    background: linear-gradient(135deg, var(--accent-1), var(--accent-2));
    border: none;
    color: #fff;
    padding: 10px 16px;
    border-radius: 12px;
    font-size: 0.75rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 6px;
    cursor: pointer;
    transition: all 0.2s;
    box-shadow: 0 10px 20px -5px rgba(56, 189, 248, 0.4);
  }
  .masthead-cta:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 24px -5px rgba(56, 189, 248, 0.6);
  }
  .masthead-cta:active {
    transform: scale(0.95);
  }

  .profile-info-grid {
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .info-row {
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding-bottom: 12px;
    border-bottom: 1px solid var(--phone-surface);
  }
  .info-key {
    font-size: 0.75rem;
    color: var(--phone-text);
    opacity: 0.5;
    font-weight: 500;
  }
  .info-val {
    font-size: 0.95rem;
    color: var(--phone-text);
    line-height: 1.4;
    margin: 0;
  }
  .info-val.link {
    color: #007aff;
    cursor: pointer;
  }

  .music-section {
    padding: 0 16px 12px;
  }
  .spotify-embed {
    border-radius: 12px;
    overflow: hidden;
    background: var(--phone-surface);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05); /* Subtle lift */
  }

  .media-section {
    padding: 0 16px 40px;
  }
  .media-header {
    font-size: 0.85rem;
    font-weight: 700;
    color: #007aff;
    margin-bottom: 12px;
  }
  .media-preview {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 4px;
  }
  .media-item {
    aspect-ratio: 1;
    border-radius: 8px;
    overflow: hidden;
    background: var(--phone-surface);
  }
  .media-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(100%);
    transition: filter 0.3s ease;
  }
  .media-item:hover img {
    filter: grayscale(0%);
  }
</style>
