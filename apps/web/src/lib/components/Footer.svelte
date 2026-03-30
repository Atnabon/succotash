<script lang="ts">
  import { siteConfig } from "$lib/config";
  import {
    Github,
    Twitter,
    Linkedin,
    Mail,
    ArrowUpRight,
    MapPin,
  } from "lucide-svelte";
  import { Motion } from "svelte-motion";
  import { triggerChat } from "$lib/stores/chat";
  import { page } from "$app/stores";
  import { goto } from "$app/navigation";

  const iconMap: Record<string, any> = {
    github: Github,
    twitter: Twitter,
    linkedin: Linkedin,
    email: Mail,
  };

  const navLinks = [
    { label: "Work", href: "/#work" },
    { label: "Career", href: "/#career" },
    { label: "Lab", href: "/#lab" },
    { label: "Notes", href: "/blog" },
  ];

  const currentYear = new Date().getFullYear();

  async function handleContactClick(e: MouseEvent) {
    e.preventDefault();
    if ($page.url.pathname !== "/") {
      await goto("/");
    }
    // Small delay to ensure we are on home and mounted before triggering
    setTimeout(() => {
      triggerChat();
    }, 100);
  }
</script>

<footer class="site-footer">
  <div class="container">
    <!-- Main Footer Content -->
    <div class="main-footer">
      <div class="footer-grid">
        <!-- Brand & Mission -->
        <div class="footer-column brand-info">
          <div class="logo-area">
            <h3 class="footer-logo">{siteConfig.name}</h3>
            <div class="status-pill">
              <span class="status-dot"></span>
              Available
            </div>
          </div>
          <p class="mission">
            I build AI systems that don't just work, they perform, scale, and deliver actionable insights.
          </p>
          <div class="location-tag">
            <MapPin size={14} />
            <span>Addis Ababa, ET</span>
          </div>
        </div>

        <!-- Navigation -->
        <div class="footer-column">
          <h4 class="column-title">Navigation</h4>
          <ul class="footer-links">
            {#each navLinks as link}
              <li>
                <a href={link.href}>{link.label}</a>
              </li>
            {/each}
          </ul>
        </div>

        <!-- Social -->
        <div class="footer-column">
          <h4 class="column-title">Socials</h4>
          <div class="social-grid">
            {#each Object.entries(siteConfig.socials) as [key, url]}
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                class="social-link"
                title={key}
              >
                <svelte:component this={iconMap[key]} size={20} />
              </a>
            {/each}
          </div>
        </div>

        <!-- Newsletter / Contact -->
        <div class="footer-column contact-column">
          <h4 class="column-title">Say Hello</h4>
          <a
            href="/"
            class="email-link"
            on:click={handleContactClick}
            aria-label="Open Chat"
          >
            Start a Conversation
          </a>
          <p class="response-time">Typical response time: &lt; 24h</p>
        </div>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="bottom-bar">
      <div class="copyright">
        Design by {siteConfig.name}
      </div>
      <div class="credits">
        Crafted with <span class="heart">❤</span> in Ethiopia
      </div>
    </div>
  </div>
</footer>

<style>
  .site-footer {
    position: relative;
    padding: 8rem 2rem 4rem;
    margin-top: 4rem;
    background: linear-gradient(to bottom, transparent, var(--surface-1));
    overflow: hidden;
  }

  .container {
    max-width: 1000px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
  }

  /* CTA Section */
  .cta-section {
    text-align: center;
    margin-bottom: 8rem;
    padding: 4rem 2rem;
    border-radius: var(--radius-lg);
    background: var(--surface-1);
    border: 1px solid var(--surface-2);
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
  }

  .cta-heading {
    font-size: clamp(2rem, 5vw, 3.5rem);
    font-weight: 800;
    letter-spacing: -0.04em;
    margin-bottom: 1rem;
    line-height: 1.1;
  }

  .cta-subheading {
    color: var(--text-secondary);
    font-size: 1.125rem;
    margin-bottom: 2.5rem;
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
  }

  .cta-button {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: var(--text-primary);
    color: var(--bg-color);
    padding: 1rem 2rem;
    border-radius: 99px;
    font-weight: 700;
    text-decoration: none;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .cta-button:hover {
    transform: translateY(-4px) scale(1.02);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    filter: brightness(1.1);
  }

  /* Main Footer */
  .footer-grid {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1.5fr;
    gap: 4rem;
    margin-bottom: 6rem;
  }

  .footer-logo {
    font-size: 1.25rem;
    font-weight: 800;
    margin: 0;
    letter-spacing: -0.02em;
  }

  .logo-area {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.5rem;
  }

  .status-pill {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.7rem;
    font-weight: 700;
    padding: 0.25rem 0.75rem;
    background: rgba(34, 197, 94, 0.1);
    color: #22c55e;
    border-radius: 99px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .status-dot {
    width: 6px;
    height: 6px;
    background: #22c55e;
    border-radius: 50%;
    box-shadow: 0 0 8px #22c55e;
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
    0% {
      opacity: 1;
      transform: scale(1);
    }
    50% {
      opacity: 0.5;
      transform: scale(1.2);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }

  .mission {
    color: var(--text-secondary);
    line-height: 1.6;
    font-size: 0.9375rem;
    margin-bottom: 1.5rem;
  }

  .location-tag {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--text-secondary);
    font-size: 0.8125rem;
    opacity: 0.7;
  }

  .column-title {
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-weight: 800;
    color: var(--text-primary);
    margin-bottom: 1.5rem;
  }

  .footer-links {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .footer-links a {
    color: var(--text-secondary);
    text-decoration: none;
    font-size: 0.9375rem;
    transition: color 0.2s;
  }

  .footer-links a:hover {
    color: var(--accent-1);
  }

  .social-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  .social-link {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--surface-1);
    border: 1px solid var(--surface-2);
    border-radius: 10px;
    color: var(--text-secondary);
    transition: all 0.2s;
  }

  .social-link:hover {
    color: var(--text-primary);
    background: var(--surface-2);
    transform: translateY(-2px);
    border-color: var(--accent-1);
  }

  .email-link {
    display: block;
    font-size: 1.125rem;
    font-weight: 600;
    color: var(--text-primary);
    text-decoration: none;
    margin-bottom: 0.5rem;
  }

  .email-link:hover {
    text-decoration: underline;
    text-decoration-color: var(--accent-1);
    text-underline-offset: 4px;
  }

  .response-time {
    font-size: 0.75rem;
    color: var(--text-secondary);
    opacity: 0.6;
  }

  /* Bottom Bar */
  .bottom-bar {
    padding-top: 2rem;
    border-top: 1px solid var(--surface-2);
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--text-secondary);
    font-size: 0.8125rem;
    opacity: 0.6;
  }

  .heart {
    color: var(--accent-1);
    display: inline-block;
    animation: heartBeat 1.5s infinite;
  }

  @keyframes heartBeat {
    0% {
      transform: scale(1);
    }
    10% {
      transform: scale(1.1);
    }
    20% {
      transform: scale(1);
    }
    30% {
      transform: scale(1.1);
    }
    40% {
      transform: scale(1);
    }
  }

  @media (max-width: 860px) {
    .footer-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 3rem;
    }
  }

  @media (max-width: 540px) {
    .footer-grid {
      grid-template-columns: 1fr;
      gap: 2.5rem;
    }

    .cta-section {
      padding: 3rem 1.5rem;
      margin-bottom: 4rem;
    }

    .bottom-bar {
      flex-direction: column;
      gap: 1rem;
      text-align: center;
    }
  }
</style>
