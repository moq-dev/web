import "./App.css";

import "@moq/watch/element";
import "@moq/watch/support/element";
import "@moq/watch/ui";
import "@moq/publish/element";
import "@moq/publish/support/element";
import "@moq/publish/ui";

function App() {
	return (
		<>
			<moq-watch-ui>
				<moq-watch
					url="https://cdn.moq.dev/demo?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb290IjoiZGVtbyIsImdldCI6WyIiXSwiZXhwIjpudWxsLCJpYXQiOm51bGx9.6EoN-Y1Ouj35_qV5FokcdcdderrE2navNbYQjJyR2Ac"
					path="bbb"
					muted
				>
					<canvas />
				</moq-watch>
			</moq-watch-ui>

			<moq-watch-support show="always" />

			<moq-publish-ui>
				<moq-publish
					url="https://cdn.moq.dev/anon"
					path="my-broadcast"
					source="camera"
				>
					<video muted autoPlay />
				</moq-publish>
			</moq-publish-ui>

			<moq-publish-support show="always" />
		</>
	);
}

export default App;
