import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface PreferState {
  likes: string[];
  dislikes: string[];
  mood: string;

  setLikes: (likes: string[]) => void;
  setDislikes: (dislikes: string[]) => void;
  setMood: (mood: string) => void;

  resetState: () => void;
}

export const usePreferStore = create(
  persist<PreferState>(
    (set, get) => ({
      likes: [],
      dislikes: [],
      mood: "",
      setLikes: (likes) => set((state) => ({ ...state, likes })),
      setDislikes: (dislikes) => set((state) => ({ ...state, dislikes })),
      setMood: (mood) => set((state) => ({ ...state, mood })),
      resetState: () =>
        set(() => ({
          likes: [],
          dislikes: [],
          mood: "",
        })),
    }),
    {
      name: "prefer-storage", // localStorage에 저장될 키 이름
      getStorage: () => localStorage, // 기본적으로 localStorage를 사용
    }
  )
);
