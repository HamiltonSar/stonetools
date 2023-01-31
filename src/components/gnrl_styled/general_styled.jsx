import styled from "styled-components";
import devices from "../sizes/sizes.jsx";
import { Link } from "react-router-dom";


export const List = styled.li`
    list-style: none;

`
export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Ul = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Linka = styled(Link)`
    text-decoration: none;
`
export const Background = styled.div`
    background-image: url( ${prop => prop.url} );
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    width: 100vw;
    height: 100vh;
`;


export const Header = styled.header`
   display: flex;
   justify-content: space-between;
   align-items: center;
`

export const Title = styled.h2`
    text-align : center;
    color: #fff;
    padding: 1.2em 0 ;
`

export const Container = styled.div`
    display: flex;
    align-items: center;
`;

export const Paragraph = styled.p`
    text-align: justify;
    width: 100%;
    color: #fff;
`

export const ImgContent = styled.img`
    object-fit: cover;

`

export const Button = styled.button`   
        padding : 10px;

        &:hover {
                box-shadow: 0 0 10px 0 #fff inset, 0 0 10px 4px #fff;
                box-shadow : ${props => props.hovercolor};
                }
`;

export const Input = styled.input`
        border: none;
        padding: 0.4em;
        outline: none;
        :hover{
                box-shadow: 0 0 10px 0 #fff inset, 0 0 10px 4px #fff;
                box-shadow : ${props => props.hovercolor};
        }
`
