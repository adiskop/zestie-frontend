import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import { getCurrentUser } from "./actions/currentUser.js"
import NavBar from './components/NavBar';
import Home from './components/Home';
import Login from './components/Login';
import Logout from './components/Logout';
import Signup from './components/Signup.js';
import MyDishes from './components/MyDishes';
import NewDishForm from './components/NewDishForm';
import { Switch, Route, withRouter } from 'react-router-dom' 


class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render(){
    const { loggedIn } = this.props
    return (
      <div className="App">
        {loggedIn ? <NavBar/> : <Home/> }
        <Switch>
          <Route exact path='/signup' component ={Signup}/>
          <Route exact path='/login' component ={Login}/>
          <Route exact path='/dishes' component ={MyDishes}/>
          <Route exact path='/dishes/new' component ={NewDishForm}/>
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
