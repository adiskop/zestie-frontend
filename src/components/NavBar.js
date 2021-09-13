import React from "react";
import { connect } from 'react-redux'
import { NavLink } from "react-router-dom";
import Logout from "./Logout";



const NavBar = ({currentUser, loggedIn }) => {
    return (
        <div className="NavBar">
          <NavLink exact activeClass to="/dishes">My Dishes  |  </NavLink>
          <NavLink exact activeClass to="/dishes/new">New Recipe  |  </NavLink>
          {loggedIn ? <Logout/> : null}
        </div>
    )
}

const mapStateToProps = ({ currentUser }) => {
    return {
      currentUser,
      loggedIn: !!currentUser
    }
  }
  
  export default connect(mapStateToProps)(NavBar)