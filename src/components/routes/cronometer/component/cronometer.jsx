import React ,  { useContext }  from 'react';
import { BackgroundCronometer, ContainerCronometer , ContainerItems, ContainerRecord ,MainContainerCronometer, Head, View, ButtonsContainer} from './../styles/cronometer_styled.jsx';
import CronometerBackground from "./../../../../assets/cronometerbackground.png";
import { ContextTimer } from '../contextAPI/timecontext.jsx';
import StartButton from './startbutton.jsx';
import ButtonsOperation from './buttonsoperation.jsx';
import RecordItem from './recorditem.jsx';


function Cronometer  () {  
  const { buttons , recordState } = useContext(ContextTimer);
  

  return (
      <BackgroundCronometer url = { CronometerBackground }>
        
          <MainContainerCronometer>

            <ContainerCronometer>
                <View> 0:0:0 </View>
                <ButtonsContainer>
                  { buttons ? <ButtonsOperation /> : <StartButton  />}
                </ButtonsContainer>
            </ContainerCronometer>

            <ContainerRecord>
                <Head>Records</Head>
                <ContainerItems>
                  <RecordItem />
                </ContainerItems>
            </ContainerRecord> 

          </MainContainerCronometer>

      </BackgroundCronometer>
    

    
  )
}

export default Cronometer;
