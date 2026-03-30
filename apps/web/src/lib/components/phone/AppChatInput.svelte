<script lang="ts">
  import { Send } from "lucide-svelte";
  import { fade } from "svelte/transition";

  export let message: string;
  export let chatInput: HTMLTextAreaElement | undefined = undefined;
  export let isGlowing: boolean = false;
  export let onSend: () => void;
</script>

<div class="chat-input-bar {isGlowing ? 'glow' : ''}" transition:fade>
  <textarea
    bind:this={chatInput}
    bind:value={message}
    placeholder="Message..."
    on:keydown={(e) =>
      e.key === "Enter" && !e.shiftKey && (e.preventDefault(), onSend())}
    on:focus
  ></textarea>
  <button class="send-btn" on:click={onSend} disabled={!message.trim()}>
    <Send size={18} />
  </button>
</div>

<style>
  .chat-input-bar {
    position: absolute;
    bottom: 25px;
    left: 15px;
    right: 15px;
    background: var(--phone-input-bg);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid var(--phone-surface);
    border-radius: 24px;
    padding: 10px 14px;
    display: flex;
    align-items: center;
    gap: 10px;
    z-index: 30;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    transition:
      border-color 0.3s,
      box-shadow 0.3s;
  }

  .chat-input-bar.glow {
    animation: input-glow-pulse 1.5s ease-out forwards;
  }

  @keyframes input-glow-pulse {
    0% {
      border-color: rgba(0, 122, 255, 0.3);
      box-shadow: 0 0 0 0 rgba(0, 122, 255, 0.4);
    }
    30% {
      border-color: rgba(0, 122, 255, 1);
      box-shadow: 0 0 20px 4px rgba(0, 122, 255, 0.5);
    }
    100% {
      border-color: var(--phone-surface);
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    }
  }

  .chat-input-bar textarea {
    flex: 1;
    background: none;
    border: none;
    color: var(--phone-text);
    font-size: 0.9rem;
    resize: none;
    max-height: 80px;
    padding: 4px 0;
    font-family: inherit;
  }
  .chat-input-bar textarea:focus {
    outline: none;
  }
  .chat-input-bar textarea::placeholder {
    color: var(--phone-text);
    opacity: 0.3;
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
  .send-btn:hover:not(:disabled) {
    transform: scale(1.05);
    background: #2563eb;
  }
</style>
