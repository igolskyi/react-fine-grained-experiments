import { type FC } from 'react';
import useCounterStore from './store';

const CounterControls: FC = () => {
    console.log('CounterControls rendered');
    const { increment, decrement } = useCounterStore();

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
