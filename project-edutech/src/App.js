import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { LiveCarouselTop } from "./Components/Home/LiveCarouselTop";
import MyCoursesAll from "./Components/MyCoursesSection/MyCoursesAll";
import MyCoursesOngoing from "./Components/MyCoursesSection/MyCoursesOngoing";
import MyCoursesUpcoming from "./Components/MyCoursesSection/MyCoursesUpcoming";
import MyCoursesCompleted from "./Components/MyCoursesSection/MyCoursesCompleted";

import { Project_page1 } from "./Components/Project_page1";
import { Project_page2 } from "./Components/Project_page2";
import { Project_page3 } from "./Components/Project_page3";
import { Profile_page1 } from "./Components/Profile_page1";
import { Profile_subhead } from "./Components/Profile_subhead";
import { Profile_page2 } from "./Components/Profile_page2";
import { Profile_page3 } from "./Components/Profile_page3";
import { Profile_page4 } from "./Components/Profile_page4";
import { Profile_page5 } from "./Components/Profile_page5";
import { Payment_page1 } from "./Components/Payment_page1";
import { Payment_page2 } from "./Components/Payment_page2";
import { Payment_page3 } from "./Components/Payment_page3";

// import CourseViewCard from "./Components/Course-view-card/CourseViewCard";
import CreativeCoursesDisplayPage from "./Components/CreativeCoursesDisplayPage/CreativeCoursesDisplayPage";
import TechnicalCoursesDisplayPage from "./Components/TechnicalCoursesDisplayPage/TechnicalCoursesDisplayPage";
import HeaderCategoryBar from "./Components/CoursesSection/HeaderCategoryBar";
import AllCourses from "./Components/CoursesSection/AllCourses";
import RecommendedCoursesDisplayPage from "./Components/RecommendedCoursesDisplayPage/RecommendedCoursesDisplayPage";
import CreativeCourses from "./Components/CoursesSection/CreativeCourses";
import TechnicalCourses from "./Components/CoursesSection/TechnicalCourses";
import AllDemoPage from "./Components/TakeAFreeLiveDemo/AllDemoPage";
import RecordedDemoPage from "./Components/TakeAFreeLiveDemo/RecordedDemoPage";
import UpcomingDemoPage from "./Components/TakeAFreeLiveDemo/UpcomingDemoPage";
import TodayDemoPage from "./Components/TakeAFreeLiveDemo/TodayDemoPage";

import { Home } from "./Components/Home/Home";
import { MentorPage } from "./Components/Mentor/MentorPage";
// import { LoginPage } from './Components/Login/LoginPage'
// import { RegisterNow } from './Components/Register/RegisterNow'
// import { Carousel } from './Carousel/Carousel'
// import { OtpPage } from './Components/Register/OtpPage'
import SignUp from "./Components/Register/SignUp";
import Otp from "./Components/Register/Otp";
import PaymentSuccessfullPage from "./Components/PaymentSuccessfullPage/PaymentSuccessfullPage";
import { HomeAfterPayment } from "./Components/Home/HomeAfterPayment";
// import MyCoursesOngoing from "./components/MyCoursesSection/MyCoursesOngoing";
// import MyCoursesUpcoming from "./components/MyCoursesSection/MyCoursesUpcoming";
// // import CourseViewCard from "./components/Course-view-card/CourseViewCard";
// import CreativeCoursesDisplayPage from "./components/CreativeCoursesDisplayPage/CreativeCoursesDisplayPage";
// import TechnicalCoursesDisplayPage from "./components/TechnicalCoursesDisplayPage/TechnicalCoursesDisplayPage";
// import HeaderCategoryBar from "./components/CoursesSection/HeaderCategoryBar";
// import AllCourses from "./components/CoursesSection/AllCourses";
// import CreativeCourses from "./components/CoursesSection/CreativeCourses";
// import TechnicalCourses from "./components/CoursesSection/TechnicalCourses";
// import AllDemoPage from "./Components/TakeAFreeLiveDemo/AllDemoPage";
// import RecordedDemoPage from "./Components/TakeAFreeLiveDemo/RecordedDemoPage";
// import TodayDemoPage from "./Components/TakeAFreeLiveDemo/TodayDemoPage";

// Home section
// import { Home } from "./Components/Home/Home";
// import { MentorPage } from "./Components/Mentor/MentorPage";
// import { LoginPage } from './Components/Login/LoginPage'
import { RegisterNow } from "./Components/Register/RegisterNow";
// import { Carousel } from './Carousel/Carousel'
import { OtpPage } from "./Components/Register/OtpPage";

// import SignUp from "./Components/Register/SignUp";
// import Otp from "./Components/Register/Otp";

//Community pages
import { Community } from "./Components/Community/Community";
import { GigsDetails } from "./Components/Community/GigsDetails";
import { InternshipDetails } from "./Components/Community/InternshipDetails";
import { CoursePage } from "./Components/CoursePage/CoursePage";

//Free courses
import { CourseLesson } from "./Components/FreeCourses/CourseLesson";
import { FreeCourses } from "./Components/FreeCourses/FreeCourse";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/courses">
            <AllCourses />
          </Route>
          <Route path="/courses-creative">
            <CreativeCourses />
          </Route>
          <Route path="/courses-technical">
            <TechnicalCourses />
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
          {/* 
          <Route path="/register">
            <RegisterNow />
          </Route> */}

          <Route path="/mentors">
            <MentorPage />
          </Route>

          <Route path="/community">
            <Community />
          </Route>

          <Route path="/gigs-details">
            <GigsDetails />
          </Route>

          <Route path="/intern-details">
            <InternshipDetails />
          </Route>
          {/* ///////////////////////////////////////////////////////////// */}
          <Route path="/course-page">
            <CoursePage />
          </Route>
          {/* /////////////////////////////////// */}
          <Route path="/Payment_page1">
            <Payment_page1 />
          </Route>
          <Route path="/Payment_page2">
            <Payment_page2 />
          </Route>
          <Route path="/Payment_page3">
            <Payment_page3 />
          </Route>
          <Route path="/PaymentSuccessfullPage">
            <PaymentSuccessfullPage />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/HomeAfterPayment">
            <HomeAfterPayment />
          </Route>
          <Route path="/Project_page1">
            <Project_page1 />
          </Route>
          <Route path="/Profile_page1">
            <Profile_page1 />
          </Route>
          <Route path="/AllDemoPage">
            <AllDemoPage />
          </Route>
          <Route path="/" exact>
            <RegisterNow />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

// function App() {
//   return (
//     <div>
//       <PaymentSuccessfullPage />
//     </div>
//   );
// }

export default App;
