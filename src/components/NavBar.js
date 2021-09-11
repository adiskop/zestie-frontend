import React from "react";
import { connect } from 'react-redux'



const NavBar = ({currentUser}) => {
    return (
        <div className="NavBar">
           {currentUser ? <strong> Welcome, {currentUser.attributes.name}</strong> : ""}
        </div>
    )
}

const mapStateToProps = ({ currentUser }) => {
    return {
      currentUser
    }
  }
  
  export default connect(mapStateToProps)(NavBar)