import React, { createContext, useReducer } from 'react'
import { useState } from 'react';
import TimerReducer from './ruducer.jsx';
import CRONOMETER_TYPES from './types.jsx';
import { v4 as uuidv4 } from 'uuid';



let interval;
let startTime;
let data;
const StartTimer = () => {
   interval = setInterval(UpdateTimer , 10);
}
const UpdateTimer = () => {
  startTime = Date.now();
  const elapsedTime = Date.now() - startTime;
  const minutes = Math.floor(elapsedTime / (1000 * 60));
  const seconds = Math.floor(elapsedTime / 1000) % 60;
  const milliseconds = elapsedTime % 1000;
  return  data = (`${minutes} : ${seconds} : ${milliseconds}`);
}
  
export const ContextTimer = createContext();

const recordData = ["0 : 0 : 0"];

function TimeContextFunction (props)  {
  
  const [buttons , setButtons ] = useState(false);
  const [continueButton , setContinueButton] = useState(false);
  const [recordState, dispatch] = useReducer(TimerReducer ,  recordData );



  const ResetTime = () => {
        dispatch( { type : CRONOMETER_TYPES.TEXT__TIMING__STATE , payload : "0 : 0 : 0" } );
        setButtons(!buttons);
      }


      const StartTime = () => {
        dispatch( { type : CRONOMETER_TYPES.TEXT__TIMING__STATE , payload : data } )
        setButtons(!buttons);
      }

      const ContinueTime = () => {
        setContinueButton(!continueButton);
      }

      const PauseTime = () => {
        setContinueButton(!continueButton);
      }

      const SetTime = () => {
        dispatch( { type : CRONOMETER_TYPES.TEXT__TIMING__STATE  } );
      };

      const DeleteRecordComponent = () => {
        dispatch( { type : CRONOMETER_TYPES.DELETE_RECORD_COMPONENT } );
      }

return (

  <ContextTimer.Provider value = { { buttons , recordState , continueButton  ,  DeleteRecordComponent , ResetTime , ContinueTime , PauseTime , SetTime , StartTime }}>
    {props.children}
  </ContextTimer.Provider>
)
}

export default TimeContextFunction;