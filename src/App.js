import './App.css';
import React from 'react';
import Login from "./components/Login.js"
import NavBar from './components/NavBar';
import { connect } from 'react-redux'
import { getCurrentUser } from "./actions/currentUser.js"

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render(){
    return (
     // <Login />
    //  <div className="App">
      <NavBar/>
     // <MainContainer/>
    //  </div>
    );
  }
}

export default connect(null, { getCurrentUser }) (App);
