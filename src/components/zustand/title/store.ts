import { create } from 'zustand';

interface TitleState {
    title: string;
    setTitle: (newTitle: string) => void;
}

// Title store - only for title-related state
export const useTitleStore = create<TitleState>((set) => ({
    title: 'Zustand Counter App',
    setTitle: (newTitle) => set({ title: newTitle }),
}));

// Selectors for fine-grained subscriptions
export const selectTitle = (state: TitleState) => state.title;
export const selectSetTitle = (state: TitleState) => state.setTitle;
