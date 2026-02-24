import "./App.css";

import "@moq/watch/element";
import "@moq/watch/support/element";
import "@moq/watch/ui";
import "@moq/publish/element";
import "@moq/publish/support/element";
import "@moq/publish/ui";

const RELAY_URL = import.meta.env.VITE_RELAY_URL || "http://localhost:4443/anon";

function App() {
	return (
		<>
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
