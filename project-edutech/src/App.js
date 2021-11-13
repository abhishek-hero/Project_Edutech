import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Course Section
import MyCoursesAll from "./Components/MyCoursesSection/MyCoursesAll";
import MyCoursesOngoing from "./Components/MyCoursesSection/MyCoursesOngoing";
import MyCoursesUpcoming from "./Components/MyCoursesSection/MyCoursesUpcoming";
import MyCoursesCompleted from "./Components/MyCoursesSection/MyCoursesCompleted";


// Course section
// import CourseViewCard from "./components/Course-view-card/CourseViewCard";
import CreativeCoursesDisplayPage from "./Components/CreativeCoursesDisplayPage/CreativeCoursesDisplayPage";
import TechnicalCoursesDisplayPage from "./Components/TechnicalCoursesDisplayPage/TechnicalCoursesDisplayPage";
import HeaderCategoryBar from "./Components/CoursesSection/HeaderCategoryBar";
import AllCourses from "./Components/CoursesSection/AllCourses";
import CreativeCourses from "./Components/CoursesSection/CreativeCourses";
import TechnicalCourses from "./Components/CoursesSection/TechnicalCourses";
import AllDemoPage from "./Components/TakeAFreeLiveDemo/AllDemoPage";
import RecordedDemoPage from "./Components/TakeAFreeLiveDemo/RecordedDemoPage";
import UpcomingDemoPage from "./Components/TakeAFreeLiveDemo/UpcomingDemoPage";
import TodayDemoPage from "./Components/TakeAFreeLiveDemo/TodayDemoPage";

// Home section
import { Home } from "./Components/Home/Home";
import { MentorPage } from "./Components/Mentor/MentorPage";
// import { LoginPage } from './Components/Login/LoginPage'
import { RegisterNow } from './Components/Register/RegisterNow'
// import { Carousel } from './Carousel/Carousel'
import { OtpPage } from './Components/Register/OtpPage'

// import SignUp from "./Components/Register/SignUp";
// import Otp from "./Components/Register/Otp";


// Community section
// import { Community } from "./Components/Community/Community"
// import { GigsDetails } from "./Components/Community/GigsDetails"
// import { InternshipDetails } from "./Components/Community/InternshipDetails"
// import { CoursePage } from "./Components/CoursePage/CoursePage"

//Free courses
import {CourseLesson} from './Components/FreeCourses/CourseLesson';
import {FreeCourses} from './Components/FreeCourses/FreeCourse';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
        <Route path="/course-lessons">
            <CourseLesson/>
          </Route>
          <Route path="/free-course">
            <FreeCourses/>
          </Route>
          <Route path="/free-live-demo">
            <AllDemoPage />
          </Route>
          <Route path="/my-courses-all">
            <MyCoursesAll />
          </Route>
          <Route path="/all-free-demo">
            <AllDemoPage />
          </Route>
          <Route path="/today-free-demo">
            <TodayDemoPage />
          </Route>
          <Route path="/upcoming-free-demo">
            <UpcomingDemoPage />
          </Route>
          <Route path="/recorded-free-demo">
            <RecordedDemoPage />
          </Route>
          <Route path="/my-courses-ongoing">
            <MyCoursesOngoing />
          </Route>
          <Route path="/my-courses-upcoming">
            <MyCoursesUpcoming />
          </Route>
          <Route path="/my-courses-completed">
            <MyCoursesCompleted />
          </Route>
          <Route path="/creative-courses-display-page">
            <CreativeCoursesDisplayPage />
          </Route>

          <Route path="/verify">
            <OtpPage></OtpPage>
          </Route>

          <Route path="/register">
            <RegisterNow />
          </Route>

          <Route path="/mentors">
            <MentorPage/>
          </Route>

          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
