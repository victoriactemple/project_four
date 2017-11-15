import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import {clearAuthTokens, saveAuthTokens, setAxiosDefaults, userIsLoggedIn} from "./util/SessionHeaderUtil"
import axios from 'axios'
import NavBar from './components/NavBar'
import ParkList from './components/ParkList'
import Park from './components/Park'
import SignUpLogIn from './components/SignUpLogIn'
import CommentList from './components/Comments/CommentList'
import CommentForm from './components/Comments/CommentForm'
import TrailList from './components/Trails/TrailList'
import Trail from './components/Trails/Trail'
import TrailCommentForm from './components/TrailComments/TrailCommentForm'
import EditTrailForm from './components/Trails/EditTrailForm'



class App extends Component {
  state = {
    signedIn: false,
    redirectToSignIn: false
  }

  async componentWillMount() {
      try{
          const signedIn = userIsLoggedIn()
          if(signedIn){
              setAxiosDefaults()
          } this.setState({
              signedIn
          })
      } catch (error){
          console.log(error)
      }
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
                signedIn: true,
                redirectToSignIn: false
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
    
    
          this.setState({
              signedIn: true,
              redirectToSignIn: false 
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
    

goToLogIn = () => {
    this.setState({redirectToSignIn: true})
}

render() {
       
  const SignUpLogInComponent = () => (
    <SignUpLogIn
        signUp={this.signUp}
        signIn={this.signIn}
        signedIn={this.signedIn}
        />
)

// const SignedInState = () => {
//     <Trail signedIn={this.state.signedIn}/>
// }
 //  if signed in is true, then call the signout function and 
    // {this.state.signedIn ? 
    //     //  and have button display signout 
    //     <button onClick={this.signOut}>signout</button> :
    //     // if you are !not signed in yet
    //     // when clicked, it redirects to form
    //     
    //     }

    return (
     <Router>
       <div>
       {this.state.signedIn ? 
        <button onClick={this.signOut}>signout</button> :
        <button onClick={this.goToLogIn}>sign-in</button>
         }
         <NavBar />
          <Switch>
              <Route exact path="/parks" component={ParkList} />
              <Route exact path="/parks/:park_id" component={Park} /> 
              <Route exact path="/parks/:park_id/trails" component={TrailList} /> 
              <Route exact path="/parks/:park_id/trails/:trail_id" component={Trail} /> 
              <Route exact path="/sign_up" render={SignUpLogInComponent} />
              <Route exact path="/parks/:park_id/trails/:trail_id/edit" component={EditTrailForm} />
  
             
          </Switch>
          {this.state.redirectToSignIn ? (<Redirect to="/sign_up" />) : null }
       </div>
     </Router>
    );
  }
}

export default App;





//  