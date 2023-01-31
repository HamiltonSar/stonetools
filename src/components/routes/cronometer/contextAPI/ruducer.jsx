import React from "react";
import CRONOMETER_TYPES from "./types.jsx";
import { v4 as uuidv4 } from 'uuid';




const TimerReducer = (state, action) => {

  const {type , payload } = action;

    switch ( type ) {

      // case CRONOMETER_TYPES.TEXT__TIMING__STATE:
      //   return [...state , {  id : uuidv4() , timing : payload  } ];


    
      default : 
      return state;

    }

  };

 export default TimerReducer;
 