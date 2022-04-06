import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/Home/HomePage';
import ProfilePageContainer from './Components/TFTProfile/ProfilePageContainer';

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
