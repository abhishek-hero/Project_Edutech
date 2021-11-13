import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { LiveCarouselTop } from "./Components/Home/LiveCarouselTop";
import MyCoursesAll from "./Components/MyCoursesSection/MyCoursesAll";
import MyCoursesOngoing from "./Components/MyCoursesSection/MyCoursesOngoing";
import MyCoursesUpcoming from "./Components/MyCoursesSection/MyCoursesUpcoming";
import MyCoursesCompleted from "./Components/MyCoursesSection/MyCoursesCompleted";

// import CourseViewCard from "./Components/Course-view-card/CourseViewCard";
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

// import MyCoursesAll from "./components/MyCoursesSection/MyCoursesAll";
// import MyCoursesOngoing from "./components/MyCoursesSection/MyCoursesOngoing";
// import MyCoursesUpcoming from "./components/MyCoursesSection/MyCoursesUpcoming";
// // import CourseViewCard from "./components/Course-view-card/CourseViewCard";
// import CreativeCoursesDisplayPage from "./components/CreativeCoursesDisplayPage/CreativeCoursesDisplayPage";
// import TechnicalCoursesDisplayPage from "./components/TechnicalCoursesDisplayPage/TechnicalCoursesDisplayPage";
// import HeaderCategoryBar from "./components/CoursesSection/HeaderCategoryBar";
// import AllCourses from "./components/CoursesSection/AllCourses";
// import CreativeCourses from "./components/CoursesSection/CreativeCourses";
// import TechnicalCourses from "./components/CoursesSection/TechnicalCourses";
// import AllDemoPage from "./components/TakeAFreeLiveDemo/AllDemoPage";
// // import RecordedDemoPage from "./components/TakeAFreeLiveDemo/RecordedDemoPage";
// // import UpcomingDemoPage from "./components/TakeAFreeLiveDemo/UpcomingDemoPage";
// import TodayDemoPage from "./components/TakeAFreeLiveDemo/TodayDemoPage";


import { Home } from "./Components/Home/Home";
//import { MentorPage } from "./Components/Mentor/MentorPage";
// import { LoginPage } from './Components/Login/LoginPage'
// import { RegisterNow } from './Components/Register/RegisterNow'
// import { Carousel } from './Carousel/Carousel'
// import { OtpPage } from './Components/Register/OtpPage'
//import SignUp from "./Components/Register/SignUp";
//import Otp from "./Components/Register/Otp";

import {Community} from "./Components/Community/Community"
import {GigsDetails} from "./Components/Community/GigsDetails"
import {InternshipDetails} from "./Components/Community/InternshipDetails"
import {CoursePage} from "./Components/CoursePage/CoursePage"

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
  
          <Route path="/">
            <CoursePage/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
