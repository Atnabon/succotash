import { writable } from 'svelte/store';

export const activeSection = writable<string>('home');
export const heroView = writable<'profile' | 'chat'>('profile');

// Action trigger for resetting everything to Home
export const homeResetTrigger = writable<number>(0);
export function triggerHomeReset() {
  homeResetTrigger.update(n => n + 1);
}
