import { resetLoginForm } from "./loginForm"
import { resetSignupForm } from "./signupForm"
import { getMyDishes, clearDishes } from "./myDishes"
// synchronout actions
export const setCurrentUser = user => {
    return {
        type: "SET_CURRENT_USER", 
        user
    }
}

export const clearCurrentUser = () => {
    return {
        type: "CLEAR_CURRENT_USER"
    }
}


// asynchronout actions 
export const login = (credentials, history) => {
    return dispatch => {
        return fetch("https://zestie-backend.herokuapp.com/api/v1/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Accept': 'application/json'
            },
            body: JSON.stringify(credentials)
        })
        .then(r => r.json())
        .then(response => {
          if (response.error) {
            alert(response.error)
          } else {
              dispatch(setCurrentUser(response.data))
              dispatch(getMyDishes())
              dispatch(resetLoginForm())
              history.push('/')
          }
        })
        .catch(console.log)
    }
}

export const signup = (credentials, history) => {
    return dispatch => {
        const userInfo = {
            user: credentials
          }
        return fetch("https://zestie-backend.herokuapp.com/api/v1/signup", {
            
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Accept': 'application/json'
            },
            body: JSON.stringify(userInfo)
        })
        .then(r => r.json())
        .then(response => {
          if (response.error) {
            alert(response.error)
          } else {
              dispatch(setCurrentUser(response.data))
              dispatch(getMyDishes())
              dispatch(resetSignupForm())
              history.push('/')
          }
        })
        .catch(console.log)
    }
}

export const logout = event => {
    return dispatch => {
        dispatch(clearCurrentUser())
        dispatch(clearDishes())
        return fetch("https://zestie-backend.herokuapp.com/api/v1/logout", {
            
            method: "DELETE"
        })
    }
}

export const getCurrentUser = () => {
    return dispatch => {
        return fetch("https://zestie-backend.herokuapp.com/api/v1/get_current_user", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                'Accept': 'application/json'
            },
            
        })
        .then(r => r.json())
        .then(response => {
          if (response.error) {
            alert(response.error)
          } else {
              dispatch(setCurrentUser(response.data))
              dispatch(getMyDishes())
          }
        })
        .catch(console.log)
    }
}