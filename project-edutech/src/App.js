import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { LoginPage } from './Components/Login/LoginPage';
import { RegisterPage } from './Components/Register/RegisterPage';
import { Carousel } from './Carousel/Carousel';


function App() {
  return (
    <div >
      {/* <LoginPage/> */}
      <RegisterPage/>
      {/* <Carousel/>  */}
    </div>
  );
}

export default App;
