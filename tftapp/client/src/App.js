import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import ProfilePageContainer from './pages/Profile/ProfilePageContainer';

const App = () => {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage/>}>
          <Route path='/profile/:serverValue/:playerName' element={<ProfilePageContainer/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
