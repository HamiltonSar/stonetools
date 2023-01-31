import styled from "styled-components";
import { Container , ImgContent, Linka, Title , Nav} from "../../gnrl_styled/general_styled.jsx";
import devices from "../../sizes/sizes.jsx";



export const Footer = styled.footer`
    width: 100vw;
    background-color: #000;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
`

export const ContainerFooter = styled(Container)`
    width: 50%;
`

export const ImgContentFooter = styled(ImgContent)`

    @media ${devices.mobileS} {
        width: 1.6em;
    };
    @media ${devices.mobileM} {
        width : 1.7em;
    };
    @media ${devices.tablet} {
        width: 2em;
    };
    @media ${devices.laptop} {
        width: 2.5em;
    };
    @media ${devices.laptopL} {
        width: 2.7em;
    };
    @media ${devices.desktop} {
        width: 3.4em
    };  

`
export const IconFooter = styled(ImgContent)`

    @media ${devices.mobileS} {
        width: 1em
    };
    @media ${devices.mobileM} {
        width: 1.4em
    };
    @media ${devices.tablet} {
        width: 1.8em;
    };
    @media ${devices.laptop} {
        width: 1.8em
    };  
    @media ${devices.laptopL} {
        width: 1.9em;
    };
    @media ${devices.desktop} {
        width: 3em
    };  
    
`


export const NavFooter = styled(Nav)`
    justify-content: space-between;
    @media ${devices.mobileS} {
        width: 50%
    };
    @media ${devices.mobileM} {
        width: 40%
    };
    @media ${devices.tablet} {
        width: 30%
    };
    @media ${devices.laptop} {
        width : 25%;
    };
    @media ${devices.laptopL} {
        width: 20%
    };
    @media ${devices.desktop} {
        width: 20%;
    };  
    

`

export const LinkaFooter = styled(Linka)`
`

export const TitleFooter = styled(Title)`
    @media ${devices.mobileS} {
        font-size: 0.6em
    };
    @media ${devices.mobileM} {
        font-size: 0.7em
    };
    @media ${devices.tablet} {
        font-size: 0.85em
    };
    @media ${devices.laptop} {
        font-size: 1em
    };
    @media ${devices.laptopL} {
        font-size: 1.2em;
    };
    @media ${devices.desktop} {
        font-size: 1.7rem
    };  
    
`
    

