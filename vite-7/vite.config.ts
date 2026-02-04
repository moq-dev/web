import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Rewrite Vite-only worklet imports inside @moq packages during transform
function moqWorkletTransform() {
	return {
		name: "moq-worklet-transform",
		enforce: "pre" as const,
		transform(code: string, id: string) {
			if (!id) return null;
			// only touch files coming from the @moq/hang package in node_modules
			if (id.includes("/node_modules/@moq/hang/") || id.includes("\\node_modules\\@moq\\hang\\")) {
				// replace occurrences like "./render-worklet.ts?worker&url" -> "./render-worklet.js?worker&url"
				const fixed = code.replace(/(\.\/[^'"\s]+?)\.ts(\?worker(?:&|&.*)url)/g, "$1.js$2");
				if (fixed !== code) return { code: fixed, map: null };
			}
			return null;
		}
	};
}

export default defineConfig({
	plugins: [react(), moqWorkletTransform()],
	optimizeDeps: {
		exclude: ["@moq/hang", "@moq/hang-ui"],
		esbuildOptions: {
			loader: { ".ts": "ts", ".tsx": "tsx" }
		}
	}
})
