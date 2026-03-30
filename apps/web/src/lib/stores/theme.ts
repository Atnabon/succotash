import { writable } from 'svelte/store';
import { browser } from '$app/environment';

// Check local storage or system preference
const defaultValue = browser 
  ? localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)
  : true;

export const isDark = writable(defaultValue);

if (browser) {
  isDark.subscribe((value) => {
    document.documentElement.classList.toggle('dark', value);
    localStorage.setItem('theme', value ? 'dark' : 'light');
  });
}
