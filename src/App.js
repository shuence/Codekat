import React from 'react';
import './App.css';
import {Browserroutes, Routes, Route} from 'react-router-dom'
import Homepage from './components/Homepage'

function App() {
  return (
    <div className='App'>
      <Browserroutes>
      <Routes>
        <Route path='/' src={Homepage}>
          
        </Route>
      </Routes>
      </Browserroutes>
    </div>
  );
}

export default App;
