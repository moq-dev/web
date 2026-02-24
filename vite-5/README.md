# MoQ Web Components + React

React application demonstrating Media over QUIC (MoQ) web components for real-time media streaming. Uses `@moq/watch` and `@moq/publish` packages with React 18 and Vite 5.

## Features

- **Watch**: Subscribe to real-time media streams from a MoQ relay
- **Publish**: Publish camera/screen media to a MoQ relay
- Custom web components with Solid.js-based UI overlays
- Feature detection and browser support banners

## Prerequisites

- Node.js 20.19.0 or >=22.12.0

## Quick Start

```bash
npm install
npm run dev
```

The app opens at `http://localhost:5173`.

## Build

```bash
npm run build
```

Output is generated in the `dist/` directory.

## Web Components

### Watch (Subscribe)
- **`<moq-watch>`** - Core element for subscribing to MoQ streams. Accepts `url`, `path`, `muted`, `paused`, `volume`, `jitter` attributes. Contains a `<canvas>` or `<video>` element for rendering.
- **`<moq-watch-ui>`** - Solid.js UI overlay providing playback controls, stats panel, and buffering indicators.
- **`<moq-watch-support>`** - Feature detection banner that displays browser compatibility warnings.

### Publish
- **`<moq-publish>`** - Core element for publishing media to MoQ streams. Accepts `url`, `path`, `source`, `muted`, `invisible` attributes. Contains a `<video>` element for preview.
- **`<moq-publish-ui>`** - Solid.js UI overlay providing publishing controls and configuration.
- **`<moq-publish-support>`** - Feature detection banner for publishing capabilities.

## Resources

- [@moq/watch](https://www.npmjs.com/package/@moq/watch) - Watch/subscribe to MoQ streams
- [@moq/publish](https://www.npmjs.com/package/@moq/publish) - Publish to MoQ streams
- [Vite](https://vite.dev)
- [React](https://react.dev)
