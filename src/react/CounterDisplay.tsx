import { type FC, memo } from 'react';

interface Props {
    count: number;
}

const CounterDisplay: FC<Props> = ({ count }) => {
    console.log('[React]: CounterDisplay rendered');

    return (
        <div className="flex items-center justify-between bg-gray-700 rounded-lg p-4">
            <h3 className="text-lg font-medium text-gray-300">
                Current Count:
            </h3>
            <span className="text-2xl font-bold text-white">{count}</span>
        </div>
    );
};

export default memo(CounterDisplay);
