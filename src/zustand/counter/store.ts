import { create } from 'zustand';

interface CounterState {
    count: number;
    increment: () => void;
    decrement: () => void;
}

// Counter store - only for count-related state
export const useCounterStore = create<CounterState>((set) => ({
    count: 0,
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 })),
}));

// Selectors for fine-grained subscriptions
export const selectCount = (state: CounterState) => state.count;
export const selectIncrement = (state: CounterState) => state.increment;
export const selectDecrement = (state: CounterState) => state.decrement;
