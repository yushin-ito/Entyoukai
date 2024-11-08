import { create } from "zustand";

interface AppState {
  progress: number;
  isLoading: boolean;
  error: string | null;
  setProgress: (progress: number) => void;
  setIsLoading: (isLoading: boolean) => void;
  setError: (error: string | null) => void;
}

const useAppStore = create<AppState>((set) => ({
  progress: 0,
  isLoading: false,
  error: null,
  setProgress: (progress) => set({ progress }),
  setIsLoading: (isLoading) => set({ isLoading }),
  setError: (error) => set({ error })
}));

export default useAppStore;
