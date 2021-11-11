import './App.css';
import { BrowserRouter, Router, Switch, Route } from 'react-router-dom'


// import { BrowserRouter, Router, Switch, Route } from 'react-router-dom'
import { Home } from './Components/Home'


// Note: If you want to use bootstrap then import it like 
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// Path may change according to file

function App() {
  return (
    <div className="App">

      <Home />

    </div>
  );
}

export default App;
