import styled from "styled-components";
import { Background, Button, Container , ImgContent , Title } from "../../../gnrl_styled/general_styled";
import devices from "../../../sizes/sizes";

export const BackgroundCronometer = styled(Background)`
        

`;

export const View = styled(Title) `
        padding: 0;
        text-align: center;
        width: 80%;
        border : 4px solid #fff;
        color : #41AD43;
        margin-bottom: 1em;

    @media ${devices.mobileS} {
        padding: 0.2em 0.2em;
        font-size: 1.4em;
    };
`;

export const Head = styled(Title)`
    width: 100%;
    color : #41AD43;
`;

export const MainContainerCronometer = styled(Container)`
    width: 70%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    gap: 5em;
    @media ${devices.mobileS} {
        flex-direction: column;
    };
   
    @media ${devices.laptop} {
        flex-direction: row;
    };
    
`;

export const ContainerRecord = styled(Container)`
    width: 50%;
    background-color: #000;
    justify-content: center;
    flex-direction: column;

`;
export const ContainerItems = styled(Container) ``;

export const ContainerData = styled(Container) `
    justify-content: space-between;
    gap: 4em;
`
export const ButtonsContainer = styled(Container) `
    width: 70%;
`;
export const ButtonOperationContainer = styled(Container)`
    width: 100%;
    gap: 0.4em;
`;
export const ItemText = styled(Title)``;


export const ContainerCronometer = styled(Container)`
    width : 100%;
    background-color : black;
    box-shadow : 0 0 50px 5px #fff;
    border-radius : 100%;
    display : flex;
    flex-direction : column ;
    align-items : center;
    justify-content : center;

    @media ${devices.mobileS} {
        width: 90%;
        height : 12em;
    };
    @media ${devices.mobileM} {
        width: 80%;
        height : 14em;
    };
    @media ${devices.tablet} {
        width: 70%;
        height : 18em;
    };
    @media ${devices.laptop} {
        width: 70%;
        height : 22em;
    };
    @media ${devices.laptopL} {
        width: 50%;
        height : 24em;
    };
    @media ${devices.desktop} {
        height : 25em;
    };
`;


export const ButtonClock = styled(Button) `
   width: 100%;

   @media ${devices.mobileS} {
        padding: 4px;
        font-size: 0.7em;
    };
    @media ${devices.laptop} {
        font-size: 0.9em;
    };
    @media ${devices.desktop} {
        font-size: 1em;
    };
`;

export const IconTrashCronometer = styled(ImgContent) `
   width : 1.5em;
`;

