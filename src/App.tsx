import { type FC } from 'react';
import ZustandCounter from './components/zustand/ZustandCounter';
import JotaiCounter from './components/jotai/JotaiCounter';
import ReactCounter from './components/react/ReactCounter';
import NanostoresCounter from './components/nanostores/NanostoresCounter';

const styles = {
    grid: 'grid grid-cols-1 md:grid-cols-3 gap-5',
};

const App: FC = () => {
    return (
        <div className={styles.grid}>
            <div className="border p-5">
                <ReactCounter />
            </div>
            <div className="border p-5">
                <ZustandCounter />
            </div>
            <div className="border p-5">
                <JotaiCounter />
            </div>
            <div className="border p-5">
                <NanostoresCounter />
            </div>
        </div>
    );
};

export default App;
