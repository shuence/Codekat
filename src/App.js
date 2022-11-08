import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Homepage from './components/Homepage'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Routes>
        <Route path='/' src={Homepage}>
          
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
