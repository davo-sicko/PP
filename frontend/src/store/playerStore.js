import { create } from 'zustand';

export const usePlayerStore = create((set, get) => ({
  currentTrack: null,
  isPlaying: false,
  volume: 0.5,
  audioElement: null,

  setAudioElement: (el) => set({ audioElement: el }),
  
  playTrack: (track) => {
    const { audioElement } = get();
    if (audioElement) {
      audioElement.src = track.url;
      audioElement.play();
    }
    set({ currentTrack: track, isPlaying: true });
  },

  togglePlay: () => {
    const { isPlaying, audioElement } = get();
    if (!audioElement) return;
    if (isPlaying) {
      audioElement.pause();
      set({ isPlaying: false });
    } else {
      audioElement.play();
      set({ isPlaying: true });
    }
  },
  
  setVolume: (vol) => {
    const { audioElement } = get();
    if (audioElement) audioElement.volume = vol;
    set({ volume: vol });
  }
}));