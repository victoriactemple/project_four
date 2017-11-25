import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'
import styled from 'styled-components';
import {clearAuthTokens, saveAuthTokens, setAxiosDefaults, userIsLoggedIn} from "../util/SessionHeaderUtil"
import axios from 'axios'
import SignUpLogIn from './SignUpLogIn'

// const NavBarLinkHolder = styled.div`
// font-family: 'News Cycle', sans-serif;
// display: flex;
// background-color: rgba(237, 234, 231, 100);
// flex-direction: row;
// Justify-content: space-around;
// padding-right: 20px;
// padding-left: 10px;

// `

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


const UserButtonDiv = styled.div`
float: right;
/* display: inline-flex;
justify-content: flex-end;
flex-direction: row; */
/* align-items: center; */


`

const UserButton = styled.div`

margin-right: 100px;

`

const BackgroundContainer = styled.div`
font-family: 'Quicksand', sans-serif;
background-color: rgba(237, 234, 231, 100);
display: flex; 
justify-content: center;
height: 50px;
`

const NavBarLinks = styled.div`
text-align: center;
font-family: 'Quicksand', sans-serif;
font-size: 30px;
a {
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

                <NavBarLinks><Link to="/">georgia state parks</Link></NavBarLinks>
                    
             <UserButtonDiv>
                <UserButton>
                        {this.props.signedIn ? 
                        <Button onClick={this.props.signOut}>
                        <i className="fa fa-user" aria-hidden="true"></i> signout
                        
                        </Button> :
                        <Button onClick={this.props.goToLogIn}>
                        <i className="fa fa-user" aria-hidden="true"></i>
                        sign-in</Button>
                    
                        }   
                        {this.props.redirectToSignIn ? (<Redirect to="/sign_up" />) : null }           
                    </UserButton>
               </UserButtonDiv>
            
            </BackgroundContainer>
        );
    }
}

export default NavBar;
