import './App.css';
import AccauntInfoContainer from './components/HomePage/AccauntInfoContainer';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <AccauntInfoContainer />
      </div>
    </BrowserRouter>
  );
}

export default App;
