import { atom } from 'jotai';

// Basic atoms for state
export const countAtom = atom(0);
export const titleAtom = atom('Jotai Counter App');

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

// Read/Write atom for count with action dispatch
export const countRWAtom = atom(
    (get) => get(countAtom),
    (get, set, action: 'inc' | 'dec') => {
        if (action === 'inc') set(countAtom, get(countAtom) + 1);
        if (action === 'dec') set(countAtom, get(countAtom) - 1);
    }
);

// usage example
// const [count, dispatch] = useAtom(countRWAtom);
// dispatch('dec')
// dispatch('inc')
