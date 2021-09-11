import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import { getCurrentUser } from "./actions/currentUser.js"
import MainContainer from './components/MainContainer';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup.js';
import MyDishes from './components/MyDishes';
import { Router } from 'react-router';
import { BrowserRouter, Route } from 'react-router-dom' 


class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render(){
    const { loggedIn } = this.props
    return (
      <BrowserRouter>
      <div className="App">
        <NavBar/>
          <Route exact path='/' render={()=> loggedIn ? <MyDishes/> : <Home/>}/>
          <Route exact path='/signup' component ={Signup}/>
          <Route exact path='/login' component ={Login}/>
          <Route exact path='/my-dishes' component ={MyDishes}/>
      </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
  return ({
    loggedIn: !!state.current_User
  })
}

export default connect(mapStateToProps, { getCurrentUser })(App);
