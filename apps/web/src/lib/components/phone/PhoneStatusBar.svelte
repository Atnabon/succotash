<script lang="ts">
  export let currentTime: string = "";
</script>

<div class="status-bar">
  <span class="time">{currentTime || "9:41"}</span>
  <div class="status-icons">
    <div class="signal"></div>
    <div class="wifi"></div>
    <div class="battery-container">
      <div class="battery"></div>
      <div class="battery-tip"></div>
    </div>
  </div>
</div>

<style>
  .status-bar {
    padding: 14px 28px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--phone-text);
    font-size: 14px;
    font-weight: 600;
    z-index: 10;
  }
  .status-icons {
    display: flex;
    gap: 6px;
    align-items: center;
  }
  .signal {
    width: 16px;
    height: 12px;
    background: currentColor;
    mask: url('data:image/svg+xml;utf8,<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M2 22h20V2L2 22z" fill="black"/></svg>')
      no-repeat center/contain;
    -webkit-mask: url('data:image/svg+xml;utf8,<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M2 22h20V2L2 22z" fill="black"/></svg>')
      no-repeat center/contain;
  }
  .wifi {
    width: 16px;
    height: 12px;
    background: currentColor;
    mask: url('data:image/svg+xml;utf8,<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12.01 21.49L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49.01.01.01-.01z" fill="black"/></svg>')
      no-repeat center/contain;
    -webkit-mask: url('data:image/svg+xml;utf8,<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12.01 21.49L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49.01.01.01-.01z" fill="black"/></svg>')
      no-repeat center/contain;
  }

  .battery-container {
    display: flex;
    align-items: center;
    gap: 1px;
  }
  .battery {
    width: 22px;
    height: 11px;
    border: 1px solid currentColor;
    border-radius: 3px;
    position: relative;
    opacity: 0.8;
  }
  .battery::after {
    content: "";
    position: absolute;
    left: 1.5px;
    top: 1.5px;
    bottom: 1.5px;
    right: 4px;
    background: currentColor;
    border-radius: 1px;
  }
  .battery-tip {
    width: 1.5px;
    height: 4px;
    background: currentColor;
    border-radius: 0 1px 1px 0;
    opacity: 0.5;
  }
</style>
