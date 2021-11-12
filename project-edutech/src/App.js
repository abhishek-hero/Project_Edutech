import './App.css';
import { BrowserRouter, Router, Switch, Route } from 'react-router-dom'


// import { BrowserRouter, Router, Switch, Route } from 'react-router-dom'
import {Community} from "./Components/Community/Community"
// import {GigsDetails} from "./Components/GigsDetails"
// import {InternshipDetails} from "./Components/InternshipDetails"
// import {CoursePage} from "./Components/Community/CoursePage"


// Note: If you want to use bootstrap then import it like 
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// Path may change according to file

function App() {
  return (
    <div className="App">

      <Community/>

    </div>
  );
}

export default App;
