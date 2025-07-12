import { atom } from 'jotai';

// Basic atoms for state
export const countAtom = atom(0);
export const titleAtom = atom('My Counter App');

// Derived atoms for actions
export const incrementAtom = atom(
    null,
    (get, set) => {
        const currentCount = get(countAtom);
        set(countAtom, currentCount + 1);
    }
);

export const decrementAtom = atom(
    null,
    (get, set) => {
        const currentCount = get(countAtom);
        set(countAtom, currentCount - 1);
    }
);
