import { type FC } from 'react';
import CounterDisplay from './CounterDisplay';
import CounterControls from './CounterControls';
import TitleDisplay from './TitleDisplay';

const Zustand: FC = () => {
    console.log('Zustand rendered');
    return (
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 shadow-lg w-full max-w-sm mx-auto">
            <div className="flex flex-col gap-10">
                <h1 className="text-2xl font-bold text-white text-center">
                    Zustand Example
                </h1>
                <TitleDisplay />
                <CounterDisplay />
                <CounterControls />
            </div>
        </div>
    );
};

export default Zustand;
