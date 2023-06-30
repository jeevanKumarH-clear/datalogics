import './App.css';
import AppleService from './AppleService/AppleService';
import Intro from './Intro/Intro';
import Navbar from './Navbar/Navbar';
import Partners from './Partners/Partners';
import Simplify from './SimplifyManagement/Simplify';

const App = () =>
    <div className="App">
      <Navbar/>
      <Intro/>
      <Simplify/>
      <AppleService/>
      <Partners/>
    </div>

export default App;
