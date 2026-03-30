import { writable } from 'svelte/store';

export const chatTrigger = writable(0);

export function triggerChat() {
    chatTrigger.update(n => n + 1);
}
