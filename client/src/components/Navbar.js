import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';


const NavBarLinkHolder = styled.div`
display: flex;
flex-direction: row;
Justify-content: space-around;
padding-right: 20px;
padding-left: 10px;
`

const NavBarLinks = styled.h6`
a {
    text-align: right;
    text-decoration: none;
    color: black;
} 
`

const NavBar = () => {
    return (
        <div>
            <NavBarLinks><Link to="/sign_up">SignUp</Link></NavBarLinks>
            <NavBarLinks><Link to="/sign_in">SignIn</Link></NavBarLinks>
        </div>
    );
};

export default NavBar;