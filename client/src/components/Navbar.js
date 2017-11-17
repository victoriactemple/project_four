import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'
import styled from 'styled-components';
import {clearAuthTokens, saveAuthTokens, setAxiosDefaults, userIsLoggedIn} from "../util/SessionHeaderUtil"
import axios from 'axios'
import SignUpLogIn from './SignUpLogIn'

const NavBarLinkHolder = styled.div`
font-family: 'News Cycle', sans-serif;
display: flex;
background-color: rgba(237, 234, 231, 100);
flex-direction: row;
Justify-content: space-around;
padding-right: 20px;
padding-left: 10px;

`

const Button = styled.button`
text-align: center;
cursor: pointer;
background-color: rgb(251, 250, 248);
color: black;
font-size: .5em;
margin: .5em;
padding: 0.25em 1em;
border: 2px solid black;
border-radius: 3px;
&:hover{
    box-shadow: 1px 1px 2px;
}
&:focus{
    outline: none;
}
`

const UserButton = styled.div`


`

const BackgroundContainer = styled.div`
font-family: 'Quicksand', sans-serif;
background-color: rgba(237, 234, 231, 100);
display: flex;
justify-content: flex-end;
height: 50px;
`

const NavBarLinks = styled.button`
text-align: center;
cursor: pointer;
background-color: rgb(251, 250, 248);
color: black;
font-size: .7em;
margin: .5em;
padding: 0.25em 1em;
border: 2px solid black;
border-radius: 3px;
&:hover{
    box-shadow: 1px 1px 2px;
}
&:focus{
    outline: none;
}
a {
    text-align: right;
    text-decoration: none;
    color: black;
} 
`

class NavBar extends Component {
    state = {
        // signedIn: false,
        // redirectToSignIn: false
      }

       //   const SignUpLogInComponent = () => (
    //     <SignUpLogIn
    //         signUp={this.signUp}
    //         signIn={this.signIn}
    //         signedIn={this.signedIn}
    //         />
    // )
    
    render() {
           
 
        return (
            <BackgroundContainer>
                <NavBarLinks><Link to="/parks">All Parks</Link></NavBarLinks>
        <UserButton>
        {this.props.signedIn ? 
        <Button onClick={this.props.signOut}>
        <i class="fa fa-user" aria-hidden="true"></i> signout
        
        </Button> :
        <Button onClick={this.props.goToLogIn}>
        <i class="fa fa-user" aria-hidden="true"></i>
        sign-in</Button>
     
         }   
         {this.props.redirectToSignIn ? (<Redirect to="/sign_up" />) : null }           
         </UserButton>
        
            
            
            </BackgroundContainer>
        );
    }
}

export default NavBar;
