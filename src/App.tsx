import React, { useEffect, useReducer, useState } from 'react';
import { ActivityList } from './components/ActivityList';
import { socket } from './services/socket';
import { activityReducer, initialState } from './reducers/activityReducer';
import './App.css'

const App = () => {
  const [state, dispatch] = useReducer(activityReducer, initialState);
  const [search, setSearch] = useState('');
  const [filtered, setFiltered] = useState<string[]>([]);

  useEffect(() => {
    socket.on('activity', (data: string) => {
      dispatch({ type: 'ADD_ACTIVITY', payload: data });
    });
    return () => {
      socket.off('activity');
    };
  }, []);

  useEffect(() => {
    const debounce = setTimeout(() => {
      const result = state.activities.filter(activity =>
        activity.toLowerCase().includes(search.toLowerCase())
      );
      setFiltered(result);
    }, 300);
    return () => clearTimeout(debounce);
  }, [search, state.activities]);

  return (
    <div>
      <h1>Activity Tracker</h1>
      <input
        type="text"
        value={search}
        className='search-input'
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search activities..."
      />
      <ActivityList activities={filtered} />
    </div>
  );
}

export default App
