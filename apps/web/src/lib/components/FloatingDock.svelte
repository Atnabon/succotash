<script lang="ts">
  import { onMount } from "svelte";
  import { page } from "$app/stores";
  import { Motion } from "svelte-motion";
  import { fly, fade } from "svelte/transition";
  import { cubicOut } from "svelte/easing";
  import {
    Home,
    FolderKanban,
    Telescope,
    NotebookPen,
    Mail,
    Sun,
    Moon,
    ArrowLeft,
  } from "lucide-svelte";
  import { isDark } from "$lib/stores/theme";
  import { activeSection, triggerHomeReset } from "$lib/stores/ui";
  import { triggerChat } from "$lib/stores/chat";
  import { playSwitch, playPop } from "$lib/utils/sound";
  import { goto } from "$app/navigation";

  const navItems = [
    { id: "home", icon: Home, label: "Home", href: "/" },
    { id: "work", icon: FolderKanban, label: "Work", href: "/#work" },
    { id: "lab", icon: Telescope, label: "Interests", href: "/#lab" },
    { id: "notes", icon: NotebookPen, label: "Notes", href: "/blog" },
    {
      id: "contact",
      icon: Mail,
      label: "Contact",
      href: "mailto:atnabon@gmail.com",
    },
  ];

  let visible = true;
  let y = 0;
  let lastScrollY = 0;
  let scrollLockId: string | null = null;
  let scrollLockTimer: any;

  // PRIORITY CONTROLLER: The single source of truth for the active dot
  $: activeId = (() => {
    const path = $page.url.pathname;

    // 1. Manual Scroll Lock (User clicked a nav item)
    if (scrollLockId) return scrollLockId;

    // 2. Interaction State (Contact/Chat)
    if ($activeSection === "contact") return "contact";

    // 3. Route Truth (Notes / Blog)
    if (path.startsWith("/blog")) return "notes";

    // 4. Scroll Context (Home / Landing Page)
    if (path === "/") {
      if (y < 100) return "home";
      return $activeSection;
    }

    return $activeSection;
  })();

  // Only show back button if we are DEEP in the site (e.g. /blog/post-1)
  // Logic: Not home AND length of segments > 2 (e.g. ["", "blog", "slug"])
  $: isDeepRoute = $page.url.pathname.split("/").filter(Boolean).length > 1;

  function toggleTheme() {
    playSwitch();
    $isDark = !$isDark;
  }

  function handleScroll() {
    y = window.scrollY;

    // Show/Hide logic
    if (y < 100) {
      visible = true;
      if ($activeSection !== "contact" && $activeSection !== "home") {
        activeSection.set("home");
      }
    } else if (y > lastScrollY + 10) {
      visible = false;
    } else if (y < lastScrollY - 10) {
      visible = true;
    }
    lastScrollY = y;
  }

  async function handleNavClick(e: MouseEvent, id: string) {
    if (id === "back") {
      e.preventDefault();
      if (typeof window !== "undefined" && window.history.length > 1) {
        window.history.back();
      } else {
        const segments = $page.url.pathname.split("/").filter(Boolean);
        segments.pop();
        goto("/" + (segments.join("/") || "/"));
      }
      return;
    }

    // Lock the ID so scroll observers don't jitter during transit
    scrollLockId = id;
    clearTimeout(scrollLockTimer);
    scrollLockTimer = setTimeout(() => {
      scrollLockId = null;
    }, 1000);

    playPop();

    if (id === "home") {
      // If already at top of home, reset the phone view
      if ($page.url.pathname === "/" && y < 100) {
        triggerHomeReset();
      }
    }

    if (id === "contact") {
      e.preventDefault();
      if ($page.url.pathname !== "/") await goto("/");
      triggerChat();
      return;
    }

    // Default: SvelteKit handles the anchored scrolling or navigation
    activeSection.set(id);
  }

  onMount(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
</script>

<Motion
  initial={{ y: 100, x: "-50%", opacity: 0 }}
  animate={{ y: visible ? 0 : 100, x: "-50%", opacity: visible ? 1 : 0 }}
  transition={{ type: "spring", stiffness: 260, damping: 20 }}
  let:motion
>
  <div class="dock-wrapper" use:motion>
    <nav class="dock" class:compact={isDeepRoute}>
      <!-- Back Button: Only expands in deep routes -->
      <div class="zipper-item" class:visible={isDeepRoute}>
        <a
          href="/"
          class="dock-item back-btn"
          on:click={(e) => handleNavClick(e, "back")}
          aria-label="Go Back"
        >
          <div class="icon-wrapper">
            <ArrowLeft size={20} strokeWidth={2.5} />
          </div>
          <span class="tooltip">Back</span>
        </a>
      </div>

      <div class="divider" class:zipper-hidden={!isDeepRoute}></div>

      <!-- Main Nav Items: Only expands in home/index routes -->
      {#each navItems as item}
        <div class="zipper-item" class:visible={!isDeepRoute}>
          <a
            href={item.href}
            class="dock-item"
            class:active={activeId === item.id ||
              ($page.url.pathname === item.href && item.href !== "/")}
            on:click={(e) => handleNavClick(e, item.id)}
            aria-label={item.label}
          >
            <div class="icon-wrapper">
              <svelte:component
                this={item.icon}
                size={20}
                strokeWidth={activeId === item.id ? 2.5 : 2}
              />
            </div>
            {#if activeId === item.id}
              <div class="active-dot"></div>
            {/if}
            <span class="tooltip">{item.label}</span>
          </a>
        </div>
      {/each}

      <div class="divider" class:zipper-hidden={isDeepRoute}></div>

      <button
        class="dock-item theme-btn"
        on:click={toggleTheme}
        aria-label="Toggle Theme"
      >
        <div class="icon-wrapper">
          {#if $isDark}
            <Moon size={18} />
          {:else}
            <Sun size={18} />
          {/if}
        </div>
      </button>
    </nav>
  </div>
</Motion>

<style>
  .dock-wrapper {
    position: fixed;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%); /* Base state for SSR/Hydro */
    z-index: 1000;
    width: max-content;
  }

  /* Zipper Animation: The secret to zero-flash transitions */
  .zipper-item {
    display: flex;
    align-items: center;
    width: 0;
    opacity: 0;
    transform: scale(0.85);
    overflow: hidden;
    pointer-events: none;
    transition:
      width 0.6s cubic-bezier(0.16, 1, 0.3, 1),
      opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1),
      transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .dock {
    display: flex;
    align-items: center;
    padding: 0.5rem;
    background: var(--surface-1);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid var(--surface-2);
    border-radius: 20px;
    box-shadow:
      0 0 0 1px rgba(0, 0, 0, 0.01),
      0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
    transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .zipper-item.visible {
    width: 44px; /* Icon width */
    margin-right: 0.5rem; /* Replaces flex gap */
    opacity: 1;
    transform: scale(1);
    pointer-events: auto;
    animation: allowOverflow 0s forwards 0.6s; /* Wait for width transition to finish */
  }

  @keyframes allowOverflow {
    to {
      overflow: visible;
    }
  }

  .divider {
    width: 1px;
    height: 20px;
    background: var(--surface-2);
    margin-right: 0.5rem;
    transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .divider.zipper-hidden {
    width: 0;
    margin-right: 0;
    opacity: 0;
    border: none;
  }

  .dock:hover {
    box-shadow:
      0 0 0 1px rgba(0, 0, 0, 0.01),
      0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }

  .dock-item {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    border-radius: 14px;
    color: var(--text-secondary);
    text-decoration: none;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    background: transparent;
    border: none;
    cursor: pointer;
  }

  .dock-item:hover {
    background: var(--surface-2);
    color: var(--text-primary);
    transform: translateY(-2px);
  }

  .dock-item.active {
    color: var(--text-primary);
    background: var(--surface-2);
  }

  .icon-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .active-dot {
    position: absolute;
    bottom: 6px;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: var(--text-primary);
  }

  .divider {
    width: 1px;
    height: 24px;
    background: var(--text-primary);
    opacity: 0.1;
    margin: 0 0.25rem;
  }

  .tooltip {
    position: absolute;
    top: -40px;
    background: var(--text-primary);
    color: var(--bg-color);
    padding: 0.4rem 0.6rem;
    border-radius: 6px;
    font-size: 0.7rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    opacity: 0;
    pointer-events: none;
    transform: translateY(8px);
    transition: all 0.2s ease;
    white-space: nowrap;
  }

  .dock-item:hover .tooltip {
    opacity: 1;
    transform: translateY(0);
  }

  /* Theme button specific tweaks */
  .theme-btn:hover {
    color: var(--accent-3); /* Yellowish hover for sun/moon */
  }
</style>
