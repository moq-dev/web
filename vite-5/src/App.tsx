import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import "@moq/watch/element";
import "@moq/watch/support/element";
import "@moq/watch/ui";
import "@moq/publish/element";
import "@moq/publish/support/element";
import "@moq/publish/ui";

const RELAY_URL = import.meta.env.VITE_RELAY_URL || "http://localhost:4443/anon";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<div>
				<a href="https://vite.dev" target="_blank">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p>

			<moq-watch-ui>
				<moq-watch url={RELAY_URL} path="bbb" muted>
					<canvas />
				</moq-watch>
			</moq-watch-ui>

			<moq-watch-support show="always" />

			<moq-publish-ui>
				<moq-publish url={RELAY_URL} path="my-broadcast" source="camera">
					<video muted autoPlay />
				</moq-publish>
			</moq-publish-ui>

			<moq-publish-support show="always" />
		</>
	);
}

export default App;
