import React from 'react';
import './App.css';
import QueryBuilder from './QueryBuilder';

function App() {
  return (
    <div className="bg-gray-800 min-h-screen">
      <QueryBuilder onChange={(value) => console.log('Query Builder:', value)} />
    </div>
  );
}

export default App;
