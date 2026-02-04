import { useState } from 'react';
import HangWatch from './components/HangWatch';
import HangPublish from './components/HangPublish';
import './App.css';

type Mode = 'watch' | 'publish';

const RELAY_URL = import.meta.env.VITE_RELAY_URL;
const BROADCAST_PATH = import.meta.env.VITE_BROADCAST_PATH;

function App() {
    const [mode, setMode] = useState<Mode>('watch');

    const toggleMode = () => setMode(mode === 'watch' ? 'publish' : 'watch');

    return (
        <div id="app">
            <h1>@moq/hang Integration Example</h1>
            
            <button onClick={toggleMode}>
                Switch to {mode === 'watch' ? 'Publish' : 'Watch'}
            </button>

            {mode === 'watch' && <HangWatch url={RELAY_URL} path={BROADCAST_PATH} />}
            {mode === 'publish' && <HangPublish url={RELAY_URL} path={BROADCAST_PATH} />}
        </div>
    );
}

export default App;
