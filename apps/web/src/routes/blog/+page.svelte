<script lang="ts">
  import { Motion } from "svelte-motion";
  export let data;

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };
</script>

<svelte:head>
  <title>Brain Dump — Notes & Thoughts</title>
</svelte:head>

<div class="blog-container">
  <header class="blog-header">
    <Motion
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1, duration: 0.5 }}
      let:motion
    >
      <div class="header-content" use:motion>
        <h1 class="title">Brain Dump</h1>
        <p class="subtitle">Occasional notes on code and life.</p>
      </div>
    </Motion>
  </header>

  <div class="posts-list">
    {#each data.posts as post, i}
      <Motion
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 + i * 0.05, duration: 0.4 }}
        let:motion
      >
        <a href="/blog/{post.slug}" class="post-item" use:motion>
          <div class="post-meta">
            <time class="post-date">{formatDate(post.date)}</time>
          </div>
          <div class="post-body">
            <h2 class="post-title">{post.title}</h2>
            <p class="post-desc">{post.description}</p>
          </div>
          <div class="post-arrow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"><path d="M5 12h14m-7-7 7 7-7 7" /></svg
            >
          </div>
        </a>
      </Motion>
    {/each}
  </div>
</div>

<style>
  .blog-container {
    max-width: 720px;
    margin: 0 auto;
    padding: 6rem 2rem;
  }

  .blog-header {
    margin-bottom: 4rem;
  }

  .back-home {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    color: var(--text-secondary);
    text-decoration: none;
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: 2rem;
    transition: all 0.2s;
  }

  .back-home:hover {
    color: var(--text-primary);
    transform: translateX(-4px);
  }

  .title {
    font-size: 2.5rem;
    font-weight: 800;
    margin: 0 0 0.5rem 0;
    letter-spacing: -0.03em;
    line-height: 1.1;
    color: var(--text-primary);
  }

  .subtitle {
    font-size: 1rem;
    color: var(--text-secondary);
    max-width: 400px;
    line-height: 1.5;
    margin: 0;
  }

  /* Post List */
  .posts-list {
    display: flex;
    flex-direction: column;
  }

  .post-item {
    display: grid;
    grid-template-columns: 100px 1fr auto;
    gap: 2rem;
    padding: 2rem 0;
    text-decoration: none;
    border-bottom: 1px solid var(--surface-2);
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    position: relative;
    border-color: rgba(128, 128, 128, 0.1);
  }

  .post-item:hover {
    padding-left: 0.75rem;
  }

  .post-meta {
    padding-top: 0.25rem;
  }

  .post-date {
    font-size: 0.75rem;
    font-weight: 600;
    color: var(--text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    opacity: 0.7;
  }

  .post-title {
    font-size: 1.35rem;
    font-weight: 750;
    margin: 0 0 0.35rem 0;
    color: var(--text-primary);
    line-height: 1.25;
    letter-spacing: -0.01em;
  }

  .post-desc {
    font-size: 0.95rem;
    color: var(--text-secondary);
    line-height: 1.5;
    margin: 0;
    max-width: 540px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .post-arrow {
    opacity: 0;
    transform: translateX(-10px);
    color: var(--text-primary);
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    align-self: center;
  }

  .post-item:hover .post-arrow {
    opacity: 0.8;
    transform: translateX(0);
  }

  @media (max-width: 640px) {
    .blog-container {
      padding: 4rem 1.5rem;
    }

    .title {
      font-size: 2rem;
    }

    .post-item {
      grid-template-columns: 1fr;
      gap: 0.5rem;
      padding: 1.5rem 0;
    }

    .post-item:hover {
      padding-left: 0;
    }

    .post-arrow {
      display: none;
    }
  }
</style>
