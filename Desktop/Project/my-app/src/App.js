import logo from './logo.svg';
import './App.css';
import { AllRoutes } from './components/Routes';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div className="App" style={{display:'flex'}}>
      <Navbar/>
     <AllRoutes/>
     
     
      
    </div>
  );
}

export default App;
