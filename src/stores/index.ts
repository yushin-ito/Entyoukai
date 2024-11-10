import { create } from "zustand";

type AppState = {
  progress: number;
  scrolling: boolean;
  setProgress: (progress: number) => void;
  setScrolling: (scrolling: boolean) => void;
};

const useAppStore = create<AppState>((set) => ({
  progress: 0,
  scrolling: false,
  setProgress: (progress) => set({ progress }),
  setScrolling: (scrolling) => set({ scrolling })
}));

export default useAppStore;
