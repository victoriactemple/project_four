import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import axios from 'axios'
import ParkList from './components/ParkList'
import Park from './components/Park'
import SignUpLogIn from './components/SignUpLogIn'


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
        await axios.post('/auth', payload)

        this.setState({signedIn: true})

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
        await axios.post('/auth/sign_in', payload)

        this.setState({signedIn: true})

    } catch (error) {
        console.log(error)
    }
}



  // async componentWillMount() {
  //   try {
  //     const response = await axios.get('/api/parks')
  //     this.setState({parks: response.data})
  //     console.log(response.data)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  render() {
    const SignUpLogInComponent = () => (
      <SignUpLogIn
          signUp={this.signUp}
          signIn={this.signIn}/>
  )
    return (
     <Router>
       <div>
          <Switch>
              <Route exact path="/" component={ParkList} />
              <Route path="/:park_id" component={Park} /> 
              <Route exact path="/signUp" render={SignUpLogInComponent} />
          </Switch>
       </div>
     </Router>
    );
  }
}

export default App;
