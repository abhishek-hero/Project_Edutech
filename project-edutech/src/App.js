import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MyCoursesAll from "./components/MyCoursesSection/MyCoursesAll";
import MyCoursesOngoing from "./components/MyCoursesSection/MyCoursesOngoing";
import MyCoursesUpcoming from "./components/MyCoursesSection/MyCoursesUpcoming";
// import CourseViewCard from "./components/Course-view-card/CourseViewCard";
import CreativeCoursesDisplayPage from "./components/CreativeCoursesDisplayPage/CreativeCoursesDisplayPage";
import TechnicalCoursesDisplayPage from "./components/TechnicalCoursesDisplayPage/TechnicalCoursesDisplayPage";
import HeaderCategoryBar from "./components/CoursesSection/HeaderCategoryBar";
import AllCourses from "./components/CoursesSection/AllCourses";
import CreativeCourses from "./components/CoursesSection/CreativeCourses";
import TechnicalCourses from "./components/CoursesSection/TechnicalCourses";
import AllDemoPage from "./components/TakeAFreeLiveDemo/AllDemoPage";
// import RecordedDemoPage from "./components/TakeAFreeLiveDemo/RecordedDemoPage";
// import UpcomingDemoPage from "./components/TakeAFreeLiveDemo/UpcomingDemoPage";
import TodayDemoPage from "./components/TakeAFreeLiveDemo/TodayDemoPage";

function App() {
  return (
    <div className="App">
      {/* <h1>Hello</h1> */}
      {/* <AllDemoPage /> */}
      {/* <RecordedDemoPage /> */}
      {/* <UpcomingDemoPage /> */}
      {/* <TodayDemoPage /> */}
      {/* //   <MyCoursesAll /> */}
      {/* <MyCoursesOngoing /> */}
      {/* <MyCoursesUpcoming /> */}
      {/* <TechnicalCoursesDisplayPage /> */}
      {/* <CreativeCoursesDisplayPage /> */}
      <AllCourses />
    </div>
    // <Router>
    //   <div className="App">
    //     {/* <h1>Hello</h1> */}
    //     {/* <TechnicalCourses /> */}
    //     {/* <CreativeCourses /> */}

    //     <Switch>
    //       <Route path="/my-courses-ongoing">
    //         <MyCoursesOngoing />
    //       </Route>
    //       <Route path="/my-courses-upcoming">
    //         <MyCoursesUpcoming />
    //       </Route>
    //       <Route path="/my-courses-all">
    //         <MyCoursesAll />
    //       </Route>
    //       <Route path="/my-courses">
    //         <MyCoursesAll />
    //       </Route>
    //     </Switch>
    //   </div>
    // </Router>
  );
}

export default App;

// box-shadow: 0px 5px 7px 1px rgba(0, 0, 0, 0.25);
