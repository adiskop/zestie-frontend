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
import DishCard from './components/DishCard';
import { Switch, Route, withRouter } from 'react-router-dom' 



class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render(){
    const { loggedIn, dishes } = this.props
    return (
      <div className="App">
        {loggedIn ? <NavBar/> : <Home/> }
        <Switch>
          <Route exact path='/signup' render={({history})=><Signup history={history}/>}/>
          <Route exact path='/login' component ={Login}/>
          <Route exact path='/dishes' component ={MyDishes}/>
          <Route exact path='/dishes/new' component ={NewDishForm}/>
          <Route exact path='/dishes/:id' render={props => {
              
              const dish = dishes.find(dish => dish.id === props.match.params.id)
              console.log(dish)
              return <DishCard dish={dish} {...props}/>
            }
          }/>
          </Switch>
      </div>
      
    );
  }
}

const mapStateToProps = state => {
  return ({
    loggedIn: !!state.currentUser,
    dishes: state.myDishes
  })
}

export default withRouter(connect(mapStateToProps, { getCurrentUser })(App));
