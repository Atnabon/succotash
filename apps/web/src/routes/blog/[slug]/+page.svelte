<script lang="ts">
  import { onMount } from "svelte";
  import { Motion } from "svelte-motion";
  import TableOfContents from "$lib/components/TableOfContents.svelte";
  import { Share2, Mail, Twitter } from "lucide-svelte";

  export let data;

  let scrollProgress = 0;

  const handleScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    scrollProgress = (winScroll / height) * 100;
  };

  onMount(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };
</script>

<svelte:head>
  <title>{data.meta.title} — Brain Dump</title>
  <meta name="description" content={data.meta.description} />
  <meta name="author" content="Atnabon" />
</svelte:head>

<!-- Progress Bar -->
<div class="progress-wrap">
  <div class="progress-bar" style="width: {scrollProgress}%"></div>
</div>

<div class="reader-page">
  <div class="reader-container">
    <!-- Left Sidebar: Actions & Metadata -->
    <aside class="reader-sidebar-left">
      <Motion
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        let:motion
      >
        <div class="sidebar-sticky" use:motion>
          <div class="post-info">
            <div class="author-pill">
              <img src="/me.png" alt="Atnabon" />
              <span>Atnabon</span>
            </div>
          </div>

          <div class="share-actions">
            <button class="share-btn" title="Share on Twitter"
              ><Twitter size={18} /></button
            >
            <button class="share-btn" title="Send via Email"
              ><Mail size={18} /></button
            >
            <button class="share-btn" title="Copy Link"
              ><Share2 size={18} /></button
            >
          </div>
        </div>
      </Motion>
    </aside>

    <!-- Center: Main Article -->
    <article class="post-article">
      <header class="post-header">
        <Motion
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          let:motion
        >
          <div class="header-content" use:motion>
            <div class="post-meta">
              <span class="category">{data.meta.category || "Insight"}</span>
              <span class="dot">•</span>
              <time datetime={data.meta.date}>{formatDate(data.meta.date)}</time
              >
            </div>
            <h1 class="post-title">{data.meta.title}</h1>
            <p class="post-description">{data.meta.description}</p>
          </div>
        </Motion>
      </header>

      <Motion
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        let:motion
      >
        <div class="post-content markdown-body" use:motion>
          <svelte:component this={data.content} />
        </div>
      </Motion>

      <footer class="post-footer">
        <div class="footer-cta">
          <h2>Enjoyed this post?</h2>
          <p>
            Subscribe to get more deep dives into software engineering and
            product design.
          </p>
          <div class="newsletter-mock">
            <input type="email" placeholder="you@example.com" disabled />
            <button disabled>Join</button>
          </div>
        </div>
      </footer>
    </article>

    <!-- Right Sidebar: TOC -->
    <aside class="reader-sidebar-right">
      <div class="toc-sticky-wrapper">
        <TableOfContents />
      </div>
    </aside>
  </div>
</div>

<style>
  /* Progress Bar */
  .progress-wrap {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: rgba(128, 128, 128, 0.1);
    z-index: 1000;
  }

  .progress-bar {
    height: 100%;
    background: linear-gradient(to right, var(--accent-1), var(--accent-2));
    width: 0%;
    transition: width 0.1s linear;
  }

  .reader-page {
    /* Reading-Optimized Palette with Bluish Touch */
    --bg-color: #f4f7fa; /* Soft Cool White */
    --text-primary: #1e293b;
    --text-secondary: #475569;
    --surface-1: #e2e8f0;
    --surface-2: #cbd5e1;

    background: var(--bg-color);
    min-height: 100vh;
    padding-top: 4rem;
    color: var(--text-primary);
    transition:
      background-color 0.4s ease,
      color 0.4s ease;
  }

  :global(.dark) .reader-page {
    --bg-color: #0f141d; /* Deep Midnight Navy-Gray */
    --text-primary: #f1f5f9;
    --text-secondary: #94a3b8;
    --surface-1: #1e293b;
    --surface-2: #334155;
  }

  .reader-container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 2rem;
    display: grid;
    grid-template-columns: 200px 1fr 240px;
    gap: 4rem;
    align-items: start; /* Critical for sticky to work in grid */
  }

  .reader-sidebar-left,
  .reader-sidebar-right {
    height: 100%;
  }

  .sidebar-sticky,
  .toc-sticky-wrapper {
    position: sticky;
    top: 7rem;
    height: fit-content;
    max-height: calc(100vh - 10rem);
    overflow-y: auto;
    scrollbar-width: none;
  }

  .toc-sticky-wrapper {
    padding-right: 1rem;
  }

  .sidebar-sticky::-webkit-scrollbar,
  .toc-sticky-wrapper::-webkit-scrollbar {
    display: none;
  }

  /* Sidebars */
  .sidebar-sticky {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
  }

  .author-pill {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .author-pill img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: 1px solid var(--surface-2);
  }

  .author-pill span {
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--text-primary);
  }

  .share-actions {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .share-btn {
    width: 40px;
    height: 40px;
    border-radius: 10px;
    border: 1px solid var(--surface-2);
    background: var(--surface-1);
    color: var(--text-secondary);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s;
  }

  .share-btn:hover {
    background: var(--surface-2);
    color: var(--text-primary);
    transform: scale(1.05);
  }

  /* Center Content */
  .post-article {
    max-width: 720px;
    margin: 0 auto;
    width: 100%;
  }

  .post-header {
    margin-bottom: 5rem;
    text-align: center;
  }

  .post-meta {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    color: var(--text-secondary);
    font-size: 0.875rem;
    font-weight: 500;
    margin-bottom: 1.5rem;
  }

  .category {
    color: var(--accent-1);
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .dot {
    opacity: 0.3;
  }

  .post-title {
    font-size: clamp(2.5rem, 5vw, 3.5rem);
    font-weight: 800;
    line-height: 1.1;
    letter-spacing: -0.04em;
    margin: 0 0 1.5rem;
    color: var(--text-primary);
  }

  .post-description {
    font-size: 1.25rem;
    color: var(--text-secondary);
    line-height: 1.6;
    max-width: 600px;
    margin: 0 auto;
  }

  /* Markdown Body Enhancements */
  :global(.markdown-body) {
    font-size: 1.25rem;
    line-height: 1.8;
    color: var(--text-primary);
    font-weight: 400;
  }

  :global(.markdown-body p) {
    margin-bottom: 2rem;
    opacity: 0.92;
  }

  :global(.markdown-body h2) {
    font-size: 2rem;
    font-weight: 800;
    margin: 4.5rem 0 1.5rem;
    letter-spacing: -0.02em;
    color: var(--text-primary);
  }

  :global(.markdown-body h3) {
    font-size: 1.6rem;
    font-weight: 700;
    margin: 3rem 0 1.25rem;
  }

  /* Premium Code Blocks - Shiki Styled */
  :global(.markdown-body .code-block) {
    position: relative;
    margin: 3rem 0; /* Align with text */
    width: 100%;
  }

  :global(.markdown-body .code-block[data-lang]::before) {
    content: attr(data-lang);
    position: absolute;
    top: 12px;
    right: 16px;
    font-size: 0.7rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: #6e7681;
    z-index: 1;
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
      monospace;
  }

  :global(.markdown-body .code-block pre) {
    background: #0d1117 !important;
    padding: 2.5rem 1.5rem 1.5rem;
    border-radius: 16px;
    border: 1px solid rgba(48, 54, 61, 0.6);
    box-shadow:
      0 4px 6px rgba(0, 0, 0, 0.1),
      0 20px 40px rgba(0, 0, 0, 0.3);
    overflow-x: auto;
    margin: 0;
  }

  /* Window controls */
  :global(.markdown-body .code-block pre::before) {
    content: "";
    position: absolute;
    top: 14px;
    left: 16px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #ff5f57;
    box-shadow:
      20px 0 0 #febc2e,
      40px 0 0 #28c840;
  }

  :global(.markdown-body .code-block code) {
    font-size: 0.95rem;
    line-height: 1.7;
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
      "Liberation Mono", "Courier New", monospace;
    display: block;
    background: transparent !important;
  }

  /* Shiki token preservation */
  :global(.markdown-body .code-block code span) {
    font-family: inherit;
  }

  @media (max-width: 768px) {
    :global(.markdown-body .code-block) {
      margin: 2.5rem 0;
    }
    :global(.markdown-body .code-block pre) {
      border-radius: 12px;
      padding: 2rem 1rem 1rem;
    }
  }

  :global(.markdown-body code:not(pre code)) {
    background: var(--surface-1);
    color: var(--accent-2);
    padding: 0.2em 0.45em;
    border-radius: 6px;
    font-size: 0.88em;
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
      "Liberation Mono", "Courier New", monospace;
  }

  :global(.markdown-body img) {
    max-width: 100%;
    height: auto;
    border-radius: 24px;
    margin: 3.5rem 0;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
    border: 1px solid var(--surface-2);
  }

  /* Legacy pre without code-block wrapper (fallback) */
  :global(.markdown-body > pre) {
    background: #0d1117 !important;
    padding: 2rem 1.5rem 1.5rem;
    border-radius: 16px;
    margin: 3rem 0;
    border: 1px solid rgba(48, 54, 61, 0.6);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    overflow-x: auto;
  }

  /* Custom scrollbar for code */
  :global(.markdown-body pre::-webkit-scrollbar) {
    height: 8px;
  }
  :global(.markdown-body pre::-webkit-scrollbar-track) {
    background: #161b22;
    border-radius: 4px;
  }
  :global(.markdown-body pre::-webkit-scrollbar-thumb) {
    background: #30363d;
    border-radius: 4px;
  }
  :global(.markdown-body pre::-webkit-scrollbar-thumb:hover) {
    background: #484f58;
  }

  :global(.markdown-body blockquote) {
    margin: 4rem 0;
    padding: 2.5rem;
    background: var(--surface-1);
    border-radius: 20px;
    border: none;
    position: relative;
    font-style: italic;
    font-size: 1.4rem;
    color: var(--text-secondary);
  }

  :global(.markdown-body blockquote::before) {
    content: "“";
    position: absolute;
    top: -20px;
    left: 20px;
    font-size: 6rem;
    color: var(--accent-1);
    opacity: 0.2;
    font-family: serif;
  }

  /* Footer Section */
  .post-footer {
    margin-top: 8rem;
    padding: 6rem 0;
    border-top: 1px solid var(--surface-2);
  }

  .footer-cta {
    background: var(--surface-1);
    padding: 3.5rem;
    border-radius: 32px;
    text-align: center;
    border: 1px solid var(--surface-2);
  }

  .footer-cta h2 {
    font-size: 2rem;
    font-weight: 800;
    margin-bottom: 1rem;
  }

  .footer-cta p {
    color: var(--text-secondary);
    margin-bottom: 2.5rem;
  }

  .newsletter-mock {
    display: flex;
    gap: 1rem;
    max-width: 400px;
    margin: 0 auto;
  }

  .newsletter-mock input {
    flex: 1;
    background: var(--bg-color);
    border: 1px solid var(--surface-2);
    padding: 0.75rem 1.25rem;
    border-radius: 12px;
    color: white;
  }

  .newsletter-mock button {
    background: var(--text-primary);
    color: var(--bg-color);
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 12px;
    font-weight: 700;
  }

  /* Responsive Design */
  @media (max-width: 1200px) {
    .reader-container {
      grid-template-columns: 1fr 240px;
      padding: 0 4rem;
    }
    .reader-sidebar-left {
      display: none;
    }
  }

  @media (max-width: 960px) {
    .reader-container {
      grid-template-columns: 1fr;
    }
    .reader-sidebar-right {
      display: none;
    }
    .post-article {
      max-width: 100%;
    }
  }

  @media (max-width: 480px) {
    .reader-container {
      padding: 0 1.5rem;
    }
    .post-title {
      font-size: 2.25rem;
    }
    .post-header {
      margin-bottom: 3rem;
    }
    .footer-cta {
      padding: 2rem;
    }
    .newsletter-mock {
      flex-direction: column;
    }
  }
</style>
