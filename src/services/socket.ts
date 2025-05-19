import { io } from 'socket.io-client';

export const socket = io('http://localhost:3000'); // Connects to mock server

// src/reducers/activityReducer.ts
export type State = { activities: string[] };
export type Action = { type: 'ADD_ACTIVITY'; payload: string };

export const initialState: State = { activities: [] };

export function activityReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'ADD_ACTIVITY':
      return { activities: [action.payload, ...state.activities] };
    default:
      return state;
  }
}