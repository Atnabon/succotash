<script lang="ts">
  import { Motion } from "svelte-motion";
  export let message: { text: string; sender: string; time: string };
</script>

<Motion
  initial={{ opacity: 0, scale: 0.9, y: 10 }}
  animate={{ opacity: 1, scale: 1, y: 0 }}
  let:motion
>
  <div class="message {message.sender}" use:motion>
    <div class="text">{message.text}</div>
    <div class="time">{message.time}</div>
  </div>
</Motion>

<style>
  .message {
    max-width: 85%;
    padding: 10px 14px;
    border-radius: 16px;
    font-size: 0.85rem;
    line-height: 1.4;
    position: relative;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  }
  .message.me {
    align-self: flex-start;
    background: var(--phone-bubble-me);
    color: var(--phone-text);
    border-bottom-left-radius: 4px;
  }
  .message.user {
    align-self: flex-end;
    background: var(--phone-bubble-user);
    color: #fff;
    border-bottom-right-radius: 4px;
  }
  .message .time {
    font-size: 0.6rem;
    opacity: 0.4;
    margin-top: 4px;
    text-align: right;
  }
</style>
