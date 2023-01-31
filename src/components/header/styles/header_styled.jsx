import styled from "styled-components";
import { Container, ImgContent, Linka , Nav , Header } from "../../gnrl_styled/general_styled";
import devices from "../../sizes/sizes";



export const HeaderHome = styled(Header)`
    width: 100vw;
    background-color: #000;
`


export const ImgContainerHeader = styled(Container)`
    @media ${devices.mobileS} {
        width: 25%
    };
    @media ${devices.mobileM} {
        width: 22%
    };
    @media ${devices.tablet} {
        width : 14%
    };
    @media ${devices.laptop} {
        width: 12%;
    };
    @media ${devices.laptopL} {
        width : 10%
    };
    @media ${devices.desktop} {
        width : 12%
    };  
`


export const ImgContentHeader = styled(ImgContent)`
    width: 100%;
`;


export const LinkHeader = styled(Linka) `
    padding: 1em;
    color: #fff;
    &:hover{
        color: #000;
        background-color: #352795;
    }
    @media ${devices.mobileS} {
        font-size: 0.6em
    };
    @media ${devices.mobileM} {
        font-size: 0.7em
    };
    @media ${devices.tablet} {
        font-size: 0.9em
    };
    @media ${devices.laptop} {
        font-size: 1em;
    };
    @media ${devices.laptopL} {
        font-size: 1.2em;
    };
    @media ${devices.desktop} {
        font-size: 1.4em
    };  
`;


export const NavHeader = styled(Nav)`
`;