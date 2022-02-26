import './App.css';
import HomePageContainer from './components/HomePage/HomePageContainer';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <HomePageContainer />
      </div>
    </BrowserRouter>
  );
}

export default App;
