import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import { getCurrentUser } from "./actions/currentUser.js"
import MainContainer from './components/MainContainer';
import NavBar from './components/NavBar';
import Login from './components/Login';
import Logout from './components/Logout';
import MyDishes from './components/MyDishes';
import { Router } from 'react-router';
import { BrowserRouter, Route } from 'react-router-dom' 


class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render(){
    return (
      <BrowserRouter>
      <div className="App">
      <NavBar/>
          <Route exact path='/login' component ={Login}/>
          <Route exact path='/logout' component ={Logout}/>
          <Route exact path='/my-dishes' component ={MyDishes}/>
      </div>
      </BrowserRouter>
    );
  }
}

export default connect(null, { getCurrentUser })(App);
