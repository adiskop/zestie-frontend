import { resetLoginForm } from "./loginForm"
// synchronout actions
export const setCurrentUser = user => {
    return{
        type: "SET CURRENT_USER", 
        user
    }
}





// asynchronout actions 
export const login = credentials => {
    console.log("credentials are", credentials)
    return dispatch => {
        return fetch("http://localhost:3000/api/v1/login", {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(credentials)
        })
        .then(r => r.json())
        .then(response => {
          if (response.error) {
            alert(response.error)
          } else {
              dispatch(setCurrentUser(response.data))
              dispatch(resetLoginForm())
          }
        })
        .catch(console.log)
    }
}

export const getCurrentUser = () => {
    return dispatch => {
        return fetch("http://localhost:3000/api/v1/get_current_user", {
            credentials: "include",
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            
        })
        .then(r => r.json())
        .then(response => {
          if (response.error) {
            alert(response.error)
          } else {
              dispatch(setCurrentUser(response.data))
          }
        })
        .catch(console.log)
    }
}