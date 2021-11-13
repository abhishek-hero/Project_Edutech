import './App.css';
import { Home } from './Components/Home'



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
