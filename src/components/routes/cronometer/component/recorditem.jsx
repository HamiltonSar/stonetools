import React, { useContext } from 'react';
import { ContextTimer } from './../contextAPI/timecontext.jsx';
import { ButtonClock, ContainerData  , ContainerItems , IconTrashCronometer, ItemText} from './../styles/cronometer_styled.jsx';
import TrashIcon from "./../../../../assets/trashicon.png";
import PropTypes from "prop-types";



function RecordItem ( )  {
    const { DeleteRecordComponent } = useContext(ContextTimer)

    return (
    <ContainerData >
        <ItemText> Hello </ItemText>
        <ButtonClock onClick={()=> DeleteRecordComponent()} > <IconTrashCronometer src = {TrashIcon} /> </ButtonClock>
    </ContainerData>
  )
}


RecordItem.propTypes = {
  recordText : PropTypes.string.isRequired
}


export default RecordItem