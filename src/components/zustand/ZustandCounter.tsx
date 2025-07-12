import { type FC } from 'react';
import CounterDisplay from './counter/CounterDisplay';
import CounterControls from './counter/CounterControls';
import TitleDisplay from './title/TitleDisplay';

const Zustand: FC = () => {
    console.log('Zustand rendered');

    return (
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 shadow-lg w-full max-w-sm mx-auto">
            <div className="flex flex-col gap-10">
                <h1 className="text-4xl font-bold text-white text-start">
                    Zustand Counter
                </h1>
                <TitleDisplay />
                <CounterDisplay />
                <CounterControls />
            </div>
        </div>
    );
};

export default Zustand;
