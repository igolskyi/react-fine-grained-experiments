import { useStore } from '@nanostores/react';
import { counterAtom } from './store';

export function CounterDisplay() {
    console.log('[Nanostores]: CounterDisplay rendered');
    const count = useStore(counterAtom);

    return (
        <div className="flex items-center justify-between bg-gray-700 rounded-lg p-4">
            <h3 className="text-lg font-medium text-gray-300">
                Current Count:
            </h3>
            <span className="text-2xl font-bold text-white">{ count }</span>
        </div>
    );
}
