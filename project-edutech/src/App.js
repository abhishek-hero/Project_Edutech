import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { FreeCourses } from './Components/FreeCourses/FreeCourse';
import { CourseLesson } from './Components/FreeCourses/CourseLesson';



function App() {
  return (
    <Router>
      <div >
        <Switch>
          <Route path="/freecourse">
          {/* <FreeCourses/> */}
          </Route>
        </Switch>
      {/* <LoginPage/> */}
      {/* <RegisterPage/> */}
      {/* <Carousel/>  */}
      <FreeCourses/>
      {/* <CourseLesson/> */}
      {/* <CarouselFinal/> */}
    </div>
    </Router>
  );
}

export default App;
