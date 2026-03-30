<script lang="ts">
  import { Motion } from "svelte-motion";

  export let currentTime: string = "";
</script>

<Motion
  animate={{ y: [0, -10, 0] }}
  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
  let:motion
>
  <div class="iphone-15-pro" use:motion>
    <!-- Frame Details -->
    <div class="frame-border"></div>
    <div class="buttons left">
      <div class="button silent"></div>
      <div class="button vol-up"></div>
      <div class="button vol-down"></div>
    </div>
    <div class="buttons right">
      <div class="button power"></div>
    </div>

    <div class="screen-content">
      <!-- Dynamic Island -->
      <div class="dynamic-island">
        <div class="island-camera"></div>
      </div>

      <slot name="status-bar" />

      <slot name="header" />

      <div class="app-container-wrapper">
        <slot />
      </div>

      <slot name="input" />

      <div class="home-indicator"></div>
    </div>
  </div>
</Motion>

<style>
  .iphone-15-pro {
    width: 320px;
    height: 660px;
    background: #000;
    border-radius: 54px;
    position: relative;
    box-shadow:
      0 0 0 2px #444,
      0 0 0 5px #2a2a2a,
      0 0 0 6px #111,
      0 30px 80px -20px rgba(0, 0, 0, 0.6);
    z-index: 10;
  }

  /* Physical Buttons */
  .buttons {
    position: absolute;
  }
  .buttons.left {
    left: -8px;
    top: 120px;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .buttons.right {
    right: -8px;
    top: 180px;
  }
  .button {
    background: #2a2a2a;
    border-radius: 4px;
    box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.5);
    transition:
      background-color 0.3s ease,
      box-shadow 0.3s ease;
  }

  /* Titanum-like finish for Dark Mode visibility */
  :global(.dark) .button {
    background: #505050;
    box-shadow:
      inset 0 0 2px rgba(255, 255, 255, 0.2),
      0 0 0 0.5px rgba(255, 255, 255, 0.1);
  }
  .silent {
    width: 3px;
    height: 30px;
  }
  .vol-up {
    width: 3px;
    height: 50px;
  }
  .vol-down {
    width: 3px;
    height: 50px;
  }
  .power {
    width: 3px;
    height: 80px;
  }

  /* Screen Area */
  .screen-content {
    background: var(--phone-bg);
    color: var(--phone-text);
    width: 100%;
    height: 100%;
    border-radius: 48px;
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
    --phone-bg: #fff;
    --phone-text: #000;
    --phone-surface: rgba(0, 0, 0, 0.05);
    --phone-bubble-user: #007aff;
    --phone-bubble-me: #f2f2f7;
    --phone-input-bg: rgba(255, 255, 255, 0.9);
  }

  :global(.dark) .screen-content {
    --phone-bg: #1c1c1e;
    --phone-text: #fff;
    --phone-surface: rgba(255, 255, 255, 0.1);
    --phone-bubble-user: #007aff;
    --phone-bubble-me: #3a3a3c;
    --phone-input-bg: rgba(44, 44, 46, 0.9);
  }

  .dynamic-island {
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 28px;
    background: #000;
    border-radius: 20px;
    z-index: 20;
  }

  .app-container-wrapper {
    flex: 1;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }

  .home-indicator {
    position: absolute;
    bottom: 8px;
    left: 50%;
    transform: translateX(-50%);
    width: 120px;
    height: 4px;
    background: var(--phone-text);
    border-radius: 10px;
    z-index: 20;
    opacity: 0.2;
  }
</style>
