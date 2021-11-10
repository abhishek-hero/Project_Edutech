// import { Router, Switch } from 'react-router';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home } from './Components/Home'
import { MentorPage } from './Components/MentorPage'


// Note: If you want to use bootstrap then import it like 
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// Path may change according to file

function App() {
  return (

    <Router>
      <div className="App">

        <Switch>

          <Route path='/mentors'>
            <MentorPage></MentorPage>
          </Route>

          <Route path='/'>
            <Home />
          </Route>

        </Switch>

      </div>
    </Router>
  );
}

export default App;
