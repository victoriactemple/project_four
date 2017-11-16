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

const BackgroundContainer = styled.div`
font-family: 'Quicksand', sans-serif;
background-color: rgba(237, 234, 231, 100);
`

const NavBarLinks = styled.h6`
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
    
    //   async componentWillMount() {
    //       try{
    //           const signedIn = userIsLoggedIn()
    //           if(signedIn){
    //               setAxiosDefaults()
    //           } this.setState({
    //               signedIn
    //           })
    //       } catch (error){
    //           console.log(error)
    //       }
    //   }
    
    
    //   signUp = async (email, password, password_confirmation) => {
    //         try {
    //             const payload = {
    //                 email: email,
    //                 password: password,
    //                 password_confirmation: password_confirmation
    //             }
    //             const response = await axios.post('/auth', payload)
    //             saveAuthTokens(response.headers)
        
    //             this.setState({
    //                 signedIn: true,
    //                 redirectToSignIn: false
    //             })
        
    //         } catch (error) {
    //             console.log(error)
    //         }
    //     }
        
        
    //     signIn = async (email, password) => {
    //       try {
    //           const payload = {
    //               email,
    //               password
    //           }
    //           const response = await axios.post('/auth/sign_in', payload)
    //           saveAuthTokens(response.headers)
        
        
    //           this.setState({
    //               signedIn: true,
    //               redirectToSignIn: false 
    //           })
        
    //       } catch (error) {
    //           console.log(error)
    //       }
    //     }
        
    //     signOut = async (event) => {
    //       try {
    //           event.preventDefault()
        
    //           await axios.delete('/auth/sign_out')
        
    //           clearAuthTokens();
        
    //           this.setState({signedIn: false})
    //       } catch (error) {
    //           console.log(error)
    //       }
    //     }
        
    
    // goToLogIn = () => {
    //     this.setState({redirectToSignIn: true})
    // }
    
    render() {
           
    //   const SignUpLogInComponent = () => (
    //     <SignUpLogIn
    //         signUp={this.signUp}
    //         signIn={this.signIn}
    //         signedIn={this.signedIn}
    //         />
    // )
        return (
            <BackgroundContainer>
{/*                 
        {this.state.signedIn ? <button onClick={this.signOut}>signout</button> :
        <button onClick={this.goToLogIn}>sign-in</button>
         }   */}
 
            {/* <NavBarLinks><Link to="/sign_up">sign-in</Link></NavBarLinks> */}
            <NavBarLinks><Link to="/parks">Back to All Parks</Link></NavBarLinks>
            {/* {this.state.redirectToSignIn ? (<Redirect to="/sign_up" />) : null }            */}
            </BackgroundContainer>
        );
    }
}

export default NavBar;
