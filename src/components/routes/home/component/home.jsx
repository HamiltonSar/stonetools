import React, { useEffect, useState }  from 'react';
import { ContainerHome , BackgroundHome  , ImgContentHome, TitleHome , ParagrapHome } from "./../style/home__styled.jsx";
import homebackground from "./../../../../assets/homebackground.png";
import logoicon from "./../../../../assets/logoiconpng.png";


function Home  ()  {
  const array = ["to", "Stone", "Tools" , "Cronometer" , "Timer" , "Clock"];
  const [text , setText] = useState(null);
  let word = 0; 
  let runLetter = 0;
  
  const TextTransition = () => {
    const interval = setInterval(() => {
      if (word < array.length) {
        let running  = array[word].substring(0, runLetter + 1);
        runLetter++;
        setText(running);
        if (runLetter >= array[word].length) {
          word++;
          runLetter = 0;
        }
      }

      (word >= array.length) && clearInterval(interval);
      
    }, 150);
  };


useEffect(()=>  {
    TextTransition();
}  , [])


  return (

    <BackgroundHome url = {homebackground} >

      <TitleHome> Welcome { text }</TitleHome>

      <ContainerHome >

        <ParagrapHome>
          This little project has the basic tools we use every time in our daily life.
          THe first focuss is by using styled-components fetching a Time Api where you can ask for the time of a country.
          Also , is avalable  a basic cronometer to compare  your time against other by competing in whatever activity.
          Finally we incluse a timer to use for "pomodoro" study technique.This one is the first version at the moment and building. 0.1.0
        </ParagrapHome>

        <ContainerHome>
          <ImgContentHome width = "100%" src= {logoicon} />
        </ContainerHome>

    
      </ContainerHome>

    </BackgroundHome>
  )
}


export default Home;
