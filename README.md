# React Activity Tracker

## Setup 
```bash
npm install
npm run dev
```

## Run Mock Websocket
```bash
node mockServer.js
```


## Assumptions
- The WebSocket emits plain strings as activity logs
- Activities are displayed in reverse chronological order

## Improvements
- Mock WebSocket server for consistent testing
- Add timestamps and user IDs
- Display in a table or timeline component