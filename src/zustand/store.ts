import { create } from 'zustand';

interface CounterState {
    count: number;
    title: string;
    increment: () => void;
    decrement: () => void;
    setTitle: (newTitle: string) => void;
}

const useCounterStore = create<CounterState>((set) => ({
    count: 0,
    title: 'My Counter App',
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 })),
    setTitle: (newTitle) => set({ title: newTitle }),
}));

export default useCounterStore;
