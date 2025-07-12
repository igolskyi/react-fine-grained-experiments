import { type FC } from 'react';
import { useAtomValue } from 'jotai';
import { countAtom } from './store';

const CounterDisplay: FC = () => {
    console.log('[Jotai]: CounterDisplay rendered');
    const count = useAtomValue(countAtom);

    return (
        <div className="flex items-center justify-between bg-gray-700 rounded-lg p-4">
            <h3 className="text-lg font-medium text-gray-300">
                Current Count:
            </h3>
            <span className="text-2xl font-bold text-white">{ count }</span>
        </div>
    );
};

export default CounterDisplay;
