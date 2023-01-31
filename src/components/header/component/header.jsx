import React from 'react';
import {  LinkHeader , NavHeader , ImgContentHeader , HeaderHome , ImgContainerHeader  } from './../styles/header_styled.jsx';
import LogoHeader from "./../../../assets/logohome.png";


function Header  ()  {
 
  return (
        <HeaderHome>
        
            <ImgContainerHeader>
              <ImgContentHeader src = {LogoHeader}/>
            </ImgContainerHeader>

              <NavHeader>
                <LinkHeader to = "/">Home</LinkHeader>
                <LinkHeader to = "/cronometer">Cronometer</LinkHeader>
                <LinkHeader to = "/clock">Clock</LinkHeader>
                <LinkHeader to = "/timer">Timer</LinkHeader>
              </NavHeader>

        </HeaderHome>
  )
}

export default Header;