import './App.css';
import Intro from './Intro/Intro';
import Navbar from './Navbar/Navbar';
import Simplify from './SimplifyManagement/Simplify';

const App = () =>
    <div className="App">
      <Navbar/>
      <Intro/>
      <Simplify/>
    </div>

export default App;
