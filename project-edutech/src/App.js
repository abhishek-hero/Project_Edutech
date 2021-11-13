import './App.css';
import { BrowserRouter, Router, Switch, Route } from 'react-router-dom'

import { Header } from './Components/Header'
import { Home } from './Components/Home'
import { Footer } from './Components/Footer'

import { Project_page1 } from './Components/Project_page1';
import { Project_page2 } from './Components/Project_page2';
import { Project_page3 } from './Components/Project_page3';
import { Profile_page1 } from './Components/Profile_page1';
import { Profile_subhead } from './Components/Profile_subhead';
import { Profile_page2 } from './Components/Profile_page2';
import { Profile_page3 } from './Components/Profile_page3';
import { Profile_page4 } from './Components/Profile_page4';
import { Profile_page5 } from './Components/Profile_page5';
import { Payment_page1 } from './Components/Payment_page1';
import { Payment_page2 } from './Components/Payment_page2';
import { Payment_page3 } from './Components/Payment_page3';



// Note: If you want to use bootstrap then import it like 
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// Path may change according to file

function App() {
  return (
    <div className="App">
      <Payment_page3/>
    </div>
  );
}

export default App;
