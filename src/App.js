import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import Greeting from './Greeting';
import { fetchMessage } from './redux/messageSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('dispatch is working');
    dispatch(fetchMessage());
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Greeting />} />
    </Routes>
  );
}

export default App;
