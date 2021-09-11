import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import { getCurrentUser } from "./actions/currentUser.js"

import Home from './components/Home';
import Login from './components/Login';
import Logout from './components/Logout';
import Signup from './components/Signup.js';
import MyDishes from './components/MyDishes';

import { Switch, Route, withRouter } from 'react-router-dom' 


class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render(){
    const { loggedIn } = this.props
    return (
     
      <div className="App">
        {loggedIn ? <Logout/> : null}
        <Switch>
          <Route exact path='/signup' component ={Signup}/>
          <Route exact path='/login' component ={Login}/>
          <Route exact path='/' render={(props)=> loggedIn ? <MyDishes
          {...props}/> : <Home {...props}/>}/>
          <Route exact path='/my-dishes' component ={MyDishes}/>
          </Switch>
      </div>
      
    );
  }
}

const mapStateToProps = state => {
  return ({
    loggedIn: !!state.currentUser
  })
}

export default withRouter(connect(mapStateToProps, { getCurrentUser })(App));
