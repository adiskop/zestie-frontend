import React from "react";
import { connect } from "react-redux";
import { logout } from "../actions/currentUser";
import { withRouter } from "react-router";
import { Button } from "react-bootstrap";

const Logout = ({ logout, history }) => {
    return(
        <form onSubmit={(event) => {
            event.preventDefault()
            logout()
            history.push('/')
            }
        }> 
            <Button variant="primary" type="submit">Log Out</Button>

        </form>
    )
}

export default withRouter(connect(null, { logout })(Logout))