import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import Adduser from './components/Adduser';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path='/add' element={<Adduser/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
