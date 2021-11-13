import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LiveCarouselTop } from "./components/Home/LiveCarouselTop";
import MyCoursesAll from "./components/MyCoursesSection/MyCoursesAll";
import MyCoursesOngoing from "./components/MyCoursesSection/MyCoursesOngoing";
import MyCoursesUpcoming from "./components/MyCoursesSection/MyCoursesUpcoming";
import MyCoursesCompleted from "./components/MyCoursesSection/MyCoursesCompleted";

// import CourseViewCard from "./components/Course-view-card/CourseViewCard";
import CreativeCoursesDisplayPage from "./components/CreativeCoursesDisplayPage/CreativeCoursesDisplayPage";
import TechnicalCoursesDisplayPage from "./components/TechnicalCoursesDisplayPage/TechnicalCoursesDisplayPage";
import HeaderCategoryBar from "./components/CoursesSection/HeaderCategoryBar";
import AllCourses from "./Components/CoursesSection/AllCourses";
import CreativeCourses from "./components/CoursesSection/CreativeCourses";
import TechnicalCourses from "./components/CoursesSection/TechnicalCourses";
import AllDemoPage from "./components/TakeAFreeLiveDemo/AllDemoPage";
import RecordedDemoPage from "./components/TakeAFreeLiveDemo/RecordedDemoPage";
import UpcomingDemoPage from "./components/TakeAFreeLiveDemo/UpcomingDemoPage";
import TodayDemoPage from "./components/TakeAFreeLiveDemo/TodayDemoPage";

import { Home } from "./components/Home/Home";
import { MentorPage } from "./components/Mentor/MentorPage";
// import { LoginPage } from './components/Login/LoginPage'
// import { RegisterNow } from './components/Register/RegisterNow'
// import { Carousel } from './Carousel/Carousel'
// import { OtpPage } from './components/Register/OtpPage'
import SignUp from "./components/Register/SignUp";
import Otp from "./components/Register/Otp";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
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
