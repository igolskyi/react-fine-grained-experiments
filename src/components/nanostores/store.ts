import { atom } from 'nanostores';

export const counterAtom = atom<number>(0);
export const titleAtom = atom('Nanostores Counter App');

export const increment = () => {
    counterAtom.set(counterAtom.get() + 1);
}

export const decrement = () => {
    counterAtom.set(counterAtom.get() - 1);
}
