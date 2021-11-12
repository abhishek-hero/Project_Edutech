<<<<<<< HEAD
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
=======
import './App.css';
import { Home } from './Components/Home'

>>>>>>> 6f271912acd7e986c56f3b5bb73016e68913952a


function App() {
  return (
<<<<<<< HEAD

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
=======
    <div className="App">

      <Home />

    </div>
   
>>>>>>> 6f271912acd7e986c56f3b5bb73016e68913952a
  );
}

export default App;
