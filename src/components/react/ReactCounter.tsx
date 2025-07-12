import { type FC, useState, useCallback } from 'react';
import CounterDisplay from './CounterDisplay';
import CounterControls from './CounterControls';
import TitleDisplay from './TitleDisplay';

const ReactCounter: FC = () => {
    console.log('React rendered');

    const [count, setCount] = useState(0);
    const [title, setTitle] = useState('React Counter App');

    const increment = useCallback(() => setCount((c) => c + 1), []);
    const decrement = useCallback(() => setCount((c) => c - 1), []);
    const handleTitleChange = useCallback(
        (newTitle: string) => setTitle(newTitle),
        [],
    );

    return (
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 shadow-lg w-full max-w-sm mx-auto">
            <div className="flex flex-col gap-10">
                <h1 className="text-4xl font-bold text-white text-start">
                    React Example
                </h1>
                <TitleDisplay title={title} setTitle={handleTitleChange} />
                <CounterDisplay count={count} />
                <CounterControls increment={increment} decrement={decrement} />
            </div>
        </div>
    );
};

export default ReactCounter;
