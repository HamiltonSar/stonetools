import React ,  { useContext } from 'react';
import { ContextTimer } from './../contextAPI/timecontext.jsx';
import { ButtonClock , ButtonOperationContainer } from './../styles/cronometer_styled.jsx';
import colordg from './../styles/degradationbtn.jsx';


const  ButtonsOperation = () =>  {
    const {  continueButton , ResetTime , ContinueTime , PauseTime , SetTime } = useContext(ContextTimer);

  return (
    <ButtonOperationContainer>
        <ButtonClock onClick = { ()=> ResetTime() } hovercolor = {colordg.red} >Reset</ButtonClock>
        {(continueButton) ? <ButtonClock onClick = { ()=> ContinueTime() } hovercolor = {colordg.green}> Continue </ButtonClock> 
                          : <ButtonClock onClick = { ()=> PauseTime() } hovercolor = {colordg.yellow} > Pause </ButtonClock> }
        <ButtonClock onClick = {()=> SetTime() } hovercolor = {colordg.green} >Set</ButtonClock>
    </ButtonOperationContainer>
    )
}

export default ButtonsOperation;


