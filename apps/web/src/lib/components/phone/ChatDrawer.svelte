<script lang="ts">
  import { Drawer } from "vaul-svelte";
  import { Send } from "lucide-svelte";
  import AppChatMessage from "./AppChatMessage.svelte";

  export let open: boolean;
  export let message: string;
  export let messages: Array<{
    id: number;
    text: string;
    sender: string;
    time: string;
  }>;
  export let onSend: () => void;
</script>

<Drawer.Root bind:open>
  <Drawer.Portal>
    <Drawer.Overlay class="drawer-overlay" />
    <Drawer.Content class="drawer-content">
      <div class="drawer-handle"></div>

      <div class="drawer-chat-header">
        <div class="header-chat-info">
          <span class="chat-name">Atnabon</span>
          <span class="chat-status">Online</span>
        </div>
      </div>

      <div class="drawer-chat-body">
        <div class="chat-history">
          <div class="chat-date-separator">Today</div>
          {#each messages as msg (msg.id)}
            <AppChatMessage message={msg} />
          {/each}
        </div>
      </div>

      <div class="drawer-input-bar">
        <textarea
          bind:value={message}
          placeholder="Message..."
          on:keydown={(e) =>
            e.key === "Enter" && !e.shiftKey && (e.preventDefault(), onSend())}
        ></textarea>
        <button class="send-btn" on:click={onSend} disabled={!message.trim()}>
          <Send size={18} />
        </button>
      </div>
    </Drawer.Content>
  </Drawer.Portal>
</Drawer.Root>

<style>
  :global(.drawer-overlay) {
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(8px);
    z-index: 2000;
  }
  :global(.drawer-content) {
    position: fixed;
    bottom: 12px;
    left: 12px;
    right: 12px;
    width: auto;
    max-height: 92vh;
    min-height: 400px;
    background: #fff;
    color: #000;
    border-radius: 32px;
    z-index: 2001;
    display: flex;
    flex-direction: column;
    outline: none;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);
    --phone-surface: rgba(0, 0, 0, 0.05);
    --phone-bubble-user: #007aff;
    --phone-bubble-me: #f2f2f7;
  }
  :global(.dark .drawer-content) {
    background: #1c1c1e;
    color: #fff;
    --phone-surface: rgba(255, 255, 255, 0.1);
    --phone-bubble-user: #007aff;
    --phone-bubble-me: #3a3a3c;
  }

  .drawer-handle {
    width: 36px;
    height: 5px;
    background: currentColor;
    opacity: 0.2;
    border-radius: 10px;
    margin: 12px auto 8px;
    flex-shrink: 0;
  }

  .drawer-chat-header {
    padding: 16px 24px;
    border-bottom: 1px solid var(--phone-surface);
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .header-chat-info {
    display: flex;
    flex-direction: column;
  }

  .chat-name {
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

  .drawer-chat-body {
    flex: 1;
    overflow-y: auto;
    padding: 24px 20px 100px;
    display: flex;
    flex-direction: column;
  }

  .chat-history {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .chat-date-separator {
    text-align: center;
    font-size: 0.75rem;
    font-weight: 600;
    opacity: 0.3;
    margin-bottom: 20px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .drawer-input-bar {
    padding: 12px 16px 32px;
    background: transparent;
    display: flex;
    align-items: center;
    gap: 12px;
    border-top: 1px solid var(--phone-surface);
  }

  .drawer-input-bar textarea {
    flex: 1;
    background: var(--phone-surface);
    border: none;
    border-radius: 20px;
    padding: 10px 18px;
    color: currentColor;
    font-size: 1rem;
    resize: none;
    max-height: 100px;
    outline: none;
  }

  .send-btn {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: #3b82f6;
    border: none;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: 0.2s;
  }
  .send-btn:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
</style>
