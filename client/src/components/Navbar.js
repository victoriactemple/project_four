import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';

const NavBarLinkHolder = styled.div`
font-family: 'News Cycle', sans-serif;
display: flex;
background-color: rgba(237, 234, 231, 100);
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

class NavBar extends Component {
    state={
        signedIn: false
    }
    render() {
        return (
            <div>
            <NavBarLinks><Link to="/sign_up">sign-in</Link></NavBarLinks>
            <NavBarLinks><Link to="/parks">Back to All Parks</Link></NavBarLinks>
            
            </div>
        );
    }
}

export default NavBar;
