import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import styled from 'styled-components';

const SignUpLogInPageContainer = styled.div`
text-align: center;
min-height: 100vh;
margin: 0 auto;
padding-top: 100px;

`

const Button = styled.button`
cursor: pointer;
color: black;
font-size: 1em;
margin: 1em;
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

const Input = styled.input.attrs({
    
	margin: props => props.size || '1em',
	padding: props => props.size || '2em'
})`
	color: black;
    font-family: "Oxygen", sans-serif;
	font-size: em;
	border: 2px solid ;
	border-radius: 3px;

    margin: ${props => props.margin};
    padding: ${props => props.padding};
    &:focus{
        outline: none;
    }
`



class SignUpLogIn extends Component {
    state = {
        email: '',
        password: '',
        password_confirmation: '',
        toggleRedirect: false
    }

    signUp = (event) => {
        event.preventDefault()
        this.props.signUp(
            this.state.email,
            this.state.password,
            this.state.password_confirmation
        )
        this.toggleRedirect()
    }

    signIn = (event) => {
        event.preventDefault()
        this.props.signIn(
            this.state.email,
            this.state.password
        )
        this.toggleRedirect()
    }

    handleChange = (event) => {
        const newState = {...this.state}
        newState[event.target.name] = event.target.value
        this.setState(newState)
    }

    toggleRedirect = () =>{
        this.setState({toggleRedirect: !this.state.toggleRedirect})
    }

    render() {
        if (this.state.toggleRedirect) {
            return (
                <Redirect to="/" />
            )
        }
        return (
            <SignUpLogInPageContainer>

                    <form>
                        <div>
                            <label htmlFor="email">Email: </label>
                            <Input onChange={this.handleChange} type="text" name="email" value={this.state.email}/>
                        </div>
                        <div>
                            <label htmlFor="password">Password: </label>
                            <Input onChange={this.handleChange} type="password" name="password" value={this.state.password}/>
                        </div>
                        <div>
                            <label htmlFor="password">Confirm Password: </label>
                            <Input onChange={this.handleChange} type="password" name="password_confirmation" value={this.state.password_confirmation}/>
                        </div>

                        <Button onClick={this.signUp}>SignUp</Button>
                        <Button onClick={this.signIn}>Login</Button>
                    </form>
            </SignUpLogInPageContainer>
        );
    }
}

export default SignUpLogIn;