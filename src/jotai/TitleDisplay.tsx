import { type FC } from 'react';
import { useAtom } from 'jotai';
import { titleAtom } from './store';

const TitleDisplay: FC = () => {
    console.log('[Jotai]: TitleDisplay rendered');
    const [title, setTitle] = useAtom(titleAtom);

    return (
        <div className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold text-gray-300">App Title</h2>
            <input
                type="text"
                value={ title }
                onChange={ (e) => setTitle(e.target.value) }
                className="bg-gray-700 border border-gray-600 text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>
    );
};

export default TitleDisplay;
