import './App.css';
import { BrowserRouter, Router, Switch, Route } from 'react-router-dom'

import { Header } from './Components/Header'
import { Home } from './Components/Home'
import { Footer } from './Components/Footer'


// Note: If you want to use bootstrap then import it like 
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// Path may change according to file

function App() {
  return (
    <div className="App">

      <Header />
      <Home />
      <Footer></Footer>

    </div>
  );
}

export default App;
