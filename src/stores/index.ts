import { create } from "zustand";

interface AppState {
  isLoading: boolean;
  error: string | null;
  setIsLoading: (isLoading: boolean) => void;
  setError: (error: string | null) => void;
}

const useAppStore = create<AppState>((set) => ({
  isLoading: false,
  error: null,
  setIsLoading: (isLoading) => set({ isLoading }),
  setError: (error) => set({ error })
}));

export default useAppStore;
