// Sound effects utility
// Uses actual audio files from /static

let switchSound: HTMLAudioElement | null = null;

export function playSwitch() {
  if (typeof window === 'undefined') return;
  
  try {
    // Lazy load the audio element
    if (!switchSound) {
      switchSound = new Audio('/light-switch.mp3');
      switchSound.volume = 0.5;
    }
    
    // Reset and play
    switchSound.currentTime = 0;
    switchSound.play().catch(() => {
      // Silently fail - sound is non-critical
    });
  } catch (e) {
    // Silently fail
  }
}

// Soft pop for hover/selection (synthesized)
export function playPop() {
  if (typeof window === 'undefined') return;
  
  try {
    const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
    
    if (ctx.state === 'suspended') {
      ctx.resume();
    }

    const now = ctx.currentTime;
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);

    oscillator.frequency.setValueAtTime(600, now);
    oscillator.frequency.exponentialRampToValueAtTime(400, now + 0.05);
    oscillator.type = 'sine';

    gainNode.gain.setValueAtTime(0.08, now);
    gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.05);

    oscillator.start(now);
    oscillator.stop(now + 0.05);
  } catch (e) {
    // Silently fail
  }
}
