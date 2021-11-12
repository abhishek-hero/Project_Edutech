import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home } from './Components/Home/Home'
import { MentorPage } from './Components/Mentor/MentorPage'
// import { LoginPage } from './Components/Login/LoginPage'
// import { RegisterNow } from './Components/Register/RegisterNow'
// import { Carousel } from './Carousel/Carousel'
// import { OtpPage } from './Components/Register/OtpPage'
import SignUp from './Components/Register/SignUp'
import Otp from './Components/Register/Otp'


function App() {
  return (

    <Router>
      <div className="App">

        <Switch>

          <Route path='/verify'>

            {/* <OtpPage></OtpPage> */}
            <Otp></Otp>

          </Route>

          <Route path='/register'>
            {/* <RegisterNow /> */}
            <SignUp></SignUp>
          </Route>

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
