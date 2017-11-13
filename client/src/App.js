import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import {clearAuthTokens, saveAuthTokens, setAxiosDefaults, userIsLoggedIn} from "./util/SessionHeaderUtil"
import axios from 'axios'
import NavBar from './components/NavBar'
import ParkList from './components/ParkList'
import Park from './components/Park'
import SignUpLogIn from './components/SignUpLogIn'
import CommentList from './components/Comments/CommentList'
import CommentForm from './components/Comments/CommentForm'


class App extends Component {
  state = {
    parks: [],
    signedIn: false
  }

  

  signUp = async (email, password, password_confirmation) => {
    try {
        const payload = {
            email: email,
            password: password,
            password_confirmation: password_confirmation
        }
        const response = await axios.post('/auth', payload)
        saveAuthTokens(response.headers)

        this.setState({
            signedIn: true
        })

    } catch (error) {
        console.log(error)
    }
}


signIn = async (email, password) => {
  try {
      const payload = {
          email,
          password
      }
      const response = await axios.post('/auth/sign_in', payload)
      saveAuthTokens(response.headers)

      const posts = await this.getPosts()

      this.setState({
          signedIn: true
      })

  } catch (error) {
      console.log(error)
  }
}

signOut = async (event) => {
  try {
      event.preventDefault()

      await axios.delete('/auth/sign_out')

      clearAuthTokens();

      this.setState({signedIn: false})
  } catch (error) {
      console.log(error)
  }
}

  render() {
    const SignUpLogInComponent = () => (
      <SignUpLogIn
          signUp={this.signUp}
          signIn={this.signIn}/>
  )

  const ParkListComponent = () => {
    <ParkList signIn={this.state.signedIn} />
  }
    return (
     <Router>
       <div>
         <NavBar />
          <Switch>
              <Route exact path="/parks" component={ParkList} />
              <Route exact path="/parks/:park_id" component={Park} /> 
              <Route exact path= "/parks/:park_id/comments" component={CommentForm} />
              <Route exact path="/sign_up" render={SignUpLogInComponent} />
          </Switch>
       </div>
     </Router>
    );
  }
}

export default App;
