# React 19 + TypeScript + Vite 7

Minimal integration example demonstrating `@moq/hang` and `@moq/hang-ui` with React and Vite.

## Features

- Watch mode: Stream consumption from a relay
- Publish mode: Stream publishing to a relay
- Simple mode toggle to switch between viewer and publisher

## Prerequisites

- Node.js 20.19.0 or >=22.12.0
- A running MoQ relay server (default: `http://localhost:4443/anon`)

## Quick Start

```bash
npm install
npm dev
```

The app opens at `http://localhost:5173`

## Environment Variables

Create a `.env.local` file to override defaults:

```env
VITE_RELAY_URL=http://localhost:4443/anon
VITE_BROADCAST_PATH=demo
```

## Build

```bash
npm build
```

Output is generated in the `dist/` directory.

## Project Structure

```
src/
├── App.tsx              # Main component with mode toggle
├── components/
│   ├── HangWatch.tsx    # Stream viewer
│   └── HangPublish.tsx  # Stream publisher
├── App.css              # Component styles
└── index.css            # Global styles
```

## Resources

- [@moq/hang](https://www.npmjs.com/package/@moq/hang)
- [@moq/hang-ui](https://www.npmjs.com/package/@moq/hang-ui)
- [Vite](https://vite.dev)
- [React](https://react.dev)
