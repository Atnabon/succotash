<script lang="ts">
  import { fade } from "svelte/transition";
  import AppChatMessage from "./AppChatMessage.svelte";

  export let messages: Array<{
    id: number;
    text: string;
    sender: string;
    time: string;
  }>;
</script>

<div class="chat-section" in:fade={{ duration: 300 }}>
  <div class="chat-date-separator">Today</div>
  <div class="chat-history">
    {#each messages as msg (msg.id)}
      <AppChatMessage message={msg} />
    {/each}
  </div>
</div>

<style>
  .chat-section {
    display: flex;
    flex-direction: column;
    gap: 12px;
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
    color: var(--phone-text);
    opacity: 0.3;
    margin-bottom: 20px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
</style>
