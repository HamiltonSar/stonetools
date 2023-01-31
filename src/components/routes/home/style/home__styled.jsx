import styled , { keyframes } from "styled-components";
import { Background, Container , ImgContent, Paragraph, Title } from "../../../gnrl_styled/general_styled";
import devices from "../../../sizes/sizes";


export const Movement = keyframes`
    50%{
        transform: translateY(20%);
    }
    100%{
        transform: translateY(-20%);
    }
`

export const BackgroundHome = styled(Background)`
`


export const TitleHome = styled(Title) `
    color: #fff;
    text-align: center;
    @media ${devices.mobileS} {font-size: 1.5rem};
    @media ${devices.tablet} {font-size: 1.4rem};
    @media ${devices.laptop} {font-size: 1.5rem};
    @media ${devices.desktop} {font-size: 1.7rem};   
`


export const ContainerHome = styled(Container)`
        margin: 0 auto;
    @media ${devices.mobileS} {
        flex-direction: column;
    };
    @media ${devices.laptop} {
        padding: 1.4em;
        font-size: 1.5rem;
        flex-direction: row;
    
    };
    @media ${devices.desktop} {font-size: 1.7rem};
`


export const ParagrapHome = styled(Paragraph)`
    @media ${devices.mobileS} {
        width: 70%;
        margin:  0 auto;
        font-size: 1em
    };
    @media ${devices.tablet} {font-size: 1.2em};
    @media ${devices.laptop} {
        font-size: 1em;
        line-height: 1.4;
        width : 90%;

    };
    @media ${devices.desktop} {font-size: 1.4em};
`;



export const ImgContentHome = styled(ImgContent)`
    animation: ${Movement}  4s linear infinite alternate;
`

//General containers

