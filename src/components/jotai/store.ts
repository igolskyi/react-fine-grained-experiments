import { atom } from 'jotai';

export const countAtom = atom(0);
export const titleAtom = atom('Jotai Counter App');

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
