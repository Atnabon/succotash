<script>
  import { isDark } from "$lib/stores/theme";
  import { Sun, Moon } from "lucide-svelte";
  import { playSwitch } from "$lib/utils/sound";

  function toggleTheme() {
    playSwitch();
    $isDark = !$isDark;
  }
</script>

<button
  class="theme-toggle glass"
  on:click={toggleTheme}
  aria-label="Toggle Theme"
>
  {#if $isDark}
    <Moon size={20} />
  {:else}
    <Sun size={20} />
  {/if}
</button>

<style>
  .theme-toggle {
    position: fixed;
    top: 1.5rem;
    right: 1.5rem;
    z-index: 100;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text-primary);
    cursor: pointer;
    transition: all 0.2s ease;
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .theme-toggle:hover {
    transform: scale(1.1);
    background: rgba(255, 255, 255, 0.1);
  }
</style>
