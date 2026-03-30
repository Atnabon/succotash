<script lang="ts">
  import { ChevronLeft } from "lucide-svelte";
  export let currentView: "profile" | "chat";
  export let onBack: () => void;
</script>

{#if currentView === "chat"}
  <div class="app-header {currentView}">
    <button class="back-link" on:click={onBack}>
      <ChevronLeft size={24} class="back-icon" />
    </button>
    <div class="header-chat-info">
      <span class="chat-name">Atnabon</span>
      <span class="chat-status">online</span>
    </div>
  </div>
{/if}

<style>
  .app-header {
    width: 100%;
    padding: 8px 16px;
    height: 60px;
    background: transparent;
    z-index: 40;
    display: flex;
    align-items: center;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  .app-header.chat {
    background: var(--phone-input-bg);
    backdrop-filter: blur(25px);
    -webkit-backdrop-filter: blur(25px);
    border-bottom: 1px solid var(--phone-surface);
  }
  .back-link {
    display: flex;
    align-items: center;
    gap: 4px;
    background: none;
    border: none;
    color: #007aff;
    font-weight: 500;
    font-size: 1rem;
    cursor: pointer;
    padding: 0;
    margin-right: 12px;
  }
  .back-icon {
    transition: transform 0.2s;
  }
  .back-link:hover .back-icon {
    transform: rotate(180deg) translateX(2px);
  }

  .header-chat-info {
    display: flex;
    flex-direction: column;
  }
  .chat-name {
    color: var(--phone-text);
    font-size: 0.95rem;
    font-weight: 700;
    line-height: 1.2;
  }
  .chat-status {
    color: #4ade80;
    font-size: 0.75rem;
    font-weight: 600;
    opacity: 0.9;
  }
</style>
