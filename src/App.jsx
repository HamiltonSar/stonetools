import React from "react";
import styles from "./App.module.css";
import { Route, Routes } from 'react-router-dom';
import Cronometer from "./components/routes/cronometer/component/cronometer.jsx";
import TimerCore from "./components/routes/timer/components/timercore.jsx";
import Home from "./components/routes/home/component/home.jsx";
import Header from "./components/header/component/header";
import ClockCore from "./components/routes/clock/components/clockcore.jsx";
import TimeContextFunction from "./components/routes/cronometer/contextAPI/timecontext.jsx";
import FooterComponent from "./components/footer/component/footer.jsx";


function App() {
  return (
    <TimeContextFunction>
        <div className= {styles.app} >
          <Header />
          <Routes>
            <Route path='/' element = {<Home /> } />
            <Route path='/cronometer' element = {<Cronometer />} />
            <Route path='/clock' element = {<ClockCore />} />
            <Route path='/timer' element = { <TimerCore /> } />
          </Routes>
          <FooterComponent />
        </div>
    </TimeContextFunction>
  );
}

export default App;