import { type FC } from 'react';
import { useSetAtom } from 'jotai';
import { incrementAtom, decrementAtom } from './store';

const CounterControls: FC = () => {
    console.log('[Jotai]: CounterControls rendered');
    const increment = useSetAtom(incrementAtom);
    const decrement = useSetAtom(decrementAtom);

    return (
        <div className="flex items-center justify-center gap-10">
            <button
                onClick={decrement}
                className="bg-red-600 hover:bg-red-700 w-full text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300"
            >
                -
            </button>
            <button
                onClick={increment}
                className="bg-blue-600 hover:bg-blue-700 w-full text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300"
            >
                +
            </button>
        </div>
    );
};

export default CounterControls;
