import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import styled from 'styled-components';

const SignUpLogInPageContainer = styled.div`
min-height: 100vh;
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
                <Redirect to="/parks" />
            )
        }
        return (
            <SignUpLogInPageContainer>

                    <form>
                        <div>
                            <label htmlFor="email">Email: </label>
                            <input onChange={this.handleChange} type="text" name="email" value={this.state.email}/>
                        </div>
                        <div>
                            <label htmlFor="password">Password: </label>
                            <input onChange={this.handleChange} type="password" name="password" value={this.state.password}/>
                        </div>
                        <div>
                            <label htmlFor="password">Confirm Password: </label>
                            <input onChange={this.handleChange} type="password" name="password_confirmation" value={this.state.password_confirmation}/>
                        </div>

                        <button onClick={this.signUp}>SignUp</button>
                        <button onClick={this.signIn}>Login</button>
                    </form>
            </SignUpLogInPageContainer>
        );
    }
}

export default SignUpLogIn;