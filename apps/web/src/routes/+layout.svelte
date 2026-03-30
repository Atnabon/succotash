<script>
  import "../app.css";
  import FloatingDock from "$lib/components/FloatingDock.svelte";
  import Footer from "$lib/components/Footer.svelte";

  import { isDark } from "$lib/stores/theme";
</script>

<div class="app-layout" class:dark={$isDark}>
  <div class="background-layer">
    <!-- Deep Ocean Glow (Dark Mode) -->
    <div class="bg-absolute fog" style:opacity={$isDark ? 1 : 0}></div>

    <!-- Light Sky Blue Glow (Light Mode) -->
    <div class="bg-absolute crystal" style:opacity={$isDark ? 0 : 1}></div>
  </div>

  <FloatingDock />

  <main class="content-area">
    <slot />
  </main>

  <Footer />
</div>

<style>
  /* Global Layout */
  .app-layout {
    min-height: 100vh;
    position: relative;
    color: var(--text-primary);
    transition:
      background-color 0.4s ease,
      color 0.4s ease;
  }

  /* No offset needed for floating dock */
  .content-area {
    position: relative;
    z-index: 1;
    min-height: 100vh;
  }

  .background-layer {
    position: fixed;
    inset: 0;
    z-index: 0;
    pointer-events: none;
    overflow: hidden;
  }

  .bg-absolute {
    position: absolute;
    inset: 0;
    transition: opacity 0.5s ease;
    background-size: cover;
  }

  /* Dark Mode Styles */
  .fog {
    background: radial-gradient(
        70% 55% at 50% 50%,
        #173445 0%,
        #102236 18%,
        #0a1929 34%,
        #071226 66%,
        #040d1c 80%,
        #020814 92%,
        #01040d 97%,
        #000309 100%
      ),
      radial-gradient(
        160% 130% at 10% 10%,
        rgba(0, 0, 0, 0) 38%,
        #000309 76%,
        #000208 100%
      ),
      radial-gradient(
        160% 130% at 90% 90%,
        rgba(0, 0, 0, 0) 38%,
        #000309 76%,
        #000208 100%
      );
    background-color: #000;
  }

  /* Light Mode Styles */
  .crystal {
    background: radial-gradient(circle at center, #93c5fd, transparent);
    background-color: #fff;
  }

  /* Theme Variable Injection */
  .app-layout.dark {
    background-color: var(--bg-color);
    --bg-color: #121418;
    --text-primary: #e8e8ed;
    --text-secondary: #9ca3af;
    --surface-1: rgba(28, 31, 38, 0.7);
    --surface-2: rgba(42, 45, 54, 0.5);
    --accent-1: #38bdf8;
  }

  .app-layout:not(.dark) {
    background-color: #fff;
    --bg-color: #fff;
    --text-primary: #1e293b;
    --text-secondary: #64748b;
    --surface-1: rgba(255, 255, 255, 0.85);
    --surface-2: rgba(255, 255, 255, 0.5);
    --accent-1: #0ea5e9;
  }
</style>
