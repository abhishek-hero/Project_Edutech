import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
import { MentorPage } from "./Components/Mentor/MentorPage";
// import { LoginPage } from './Components/Login/LoginPage'
// import { RegisterNow } from './Components/Register/RegisterNow'
// import { Carousel } from './Carousel/Carousel'
// import { OtpPage } from './Components/Register/OtpPage'
import SignUp from "./Components/Register/SignUp";
import Otp from "./Components/Register/Otp";


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/verify">
            {/* <OtpPage></OtpPage> */}
            <Otp></Otp>
          </Route>

          <Route path="/register">
            {/* <RegisterNow /> */}
            <SignUp></SignUp>
          </Route>

          <Route path="/mentors">
            <MentorPage></MentorPage>
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
