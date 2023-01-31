import React, { useContext } from "react";
import { ContextTimer } from "./../contextAPI/timecontext.jsx";
import { ButtonClock ,  ContainerCronometer } from "./../styles/cronometer_styled.jsx";
import colordg from "./../styles/degradationbtn.jsx";




function StartButton  () {
    const { StartTime } = useContext(ContextTimer);

    
    return(
        <>
            <ButtonClock onClick={ ()=> StartTime() } hovercolor = { colordg.green }> Start </ButtonClock>
        </>
    )
}

export default StartButton;
