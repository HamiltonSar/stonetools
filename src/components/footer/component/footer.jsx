import React from 'react';
import logoicon from "./../../../assets/logoiconpng.png";
import LinkedInIcon from "./../../../assets/linkedinicon.png";
import FacebookIcon from "./../../../assets/facebookicon.png";
import RedditIcon from "./../../../assets/redditicon.png";
import { ContainerFooter  , Footer, LinkaFooter, NavFooter, TitleFooter, ImgContentFooter , IconFooter} from '../styled/footer__styled';


function FooterComponent () {
  return (
      
        <Footer>

            <ContainerFooter>
                <ImgContentFooter width= "4em" src= {logoicon} />
                <TitleFooter>All rights reserved</TitleFooter>
            </ContainerFooter>

            <NavFooter>
              <TitleFooter>Follow me</TitleFooter>
              <LinkaFooter href= "https://www.linkedin.com/in/hamiltonsarmiento"> <IconFooter src = {LinkedInIcon}/> </LinkaFooter>
              <LinkaFooter href= "https://www.reddit.com/user/Impossible_Raise2164"> <IconFooter src = {RedditIcon}/> </LinkaFooter>
              <LinkaFooter href= "https://www.facebook.com/magentogrisswold/"> <IconFooter src = {FacebookIcon} /> </LinkaFooter>
            </NavFooter>

        </Footer>

  )
}

export default FooterComponent;