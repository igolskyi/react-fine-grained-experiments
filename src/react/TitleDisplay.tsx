import { type FC, memo } from 'react';

interface Props {
    title: string;
    setTitle: (title: string) => void;
}

const TitleDisplay: FC<Props> = ({ title, setTitle }) => {
    console.log('[React]: TitleDisplay rendered');

    return (
        <div className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold text-gray-300">App Title</h2>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="bg-gray-700 border border-gray-600 text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>
    );
};

export default memo(TitleDisplay);
