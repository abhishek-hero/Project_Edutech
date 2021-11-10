// import { Router, Switch } from 'react-router';
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home } from './Components/Home'
import { MentorPage } from './Components/MentorPage'
import { LoginPage } from './Components/Login/LoginPage'
import { RegisterPage } from './Components/Register/RegisterPage'
import { Carousel } from './Carousel/Carousel'


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
    // <div >
    //   {/* <LoginPage/> */}
    //   <RegisterPage/>
    //   {/* <Carousel/>  */}
    // </div>
  );
}

export default App;
