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
				<moq-watch url={RELAY_URL} name="bbb" muted style={{ width: "640px", height: "360px" }}>
					<canvas style={{ width: "100%", height: "100%" }} />
				</moq-watch>
			</moq-watch-ui>

			<moq-watch-support show="always" />

			<moq-publish-ui>
				<moq-publish url={RELAY_URL} path="my-broadcast" source="camera" style={{ width: "640px", height: "360px" }}>
					<video style={{ width: "100%", height: "100%" }} muted autoPlay />
				</moq-publish>
			</moq-publish-ui>

			<moq-publish-support show="always" />
		</>
	);
}

export default App;
