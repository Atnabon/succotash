<script lang="ts">
  import { Github, Linkedin, Twitter, BookOpen } from "lucide-svelte";
  import { siteConfig } from "$lib/config";
  import { Motion } from "svelte-motion";

  export let variants: any;
</script>

<Motion {variants} let:motion>
  <div class="socials" use:motion>
    <a href={siteConfig.socials.github} aria-label="Github" class="social-link">
      <Github size={20} />
    </a>
    <a
      href={siteConfig.socials.twitter}
      aria-label="Twitter"
      class="social-link"
    >
      <Twitter size={20} />
    </a>
    <a
      href={siteConfig.socials.linkedin}
      aria-label="LinkedIn"
      class="social-link"
    >
      <Linkedin size={20} />
    </a>
  </div>
</Motion>

<style>
  .socials {
    display: flex;
    gap: 1rem;
    align-items: center;
  }

  .social-link {
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    color: var(--text-secondary);
    background: var(--surface-1);
    border: 1px solid transparent;
    transition: all 0.2s;
    text-decoration: none;
  }

  .blog-pill {
    width: auto;
    padding: 0 1rem;
    gap: 0.5rem;
    background: var(--surface-2);
    border: 1px solid rgba(255, 255, 255, 0.05);
  }

  .blog-text {
    font-size: 0.9rem;
    font-weight: 600;
  }

  .social-link:hover {
    color: var(--text-primary);
    background: var(--surface-2);
    border-color: rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
  }

  .blog-pill:hover {
    background: var(--accent-1);
    color: white;
    box-shadow: 0 10px 20px -5px rgba(var(--accent-1-rgb), 0.3);
  }

  @media (max-width: 960px) {
    .socials {
      justify-content: center;
      margin-bottom: 2rem;
    }
  }
</style>
