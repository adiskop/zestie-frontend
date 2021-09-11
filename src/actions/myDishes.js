// synchronout actions 

export const setMyDishes = dishes => {
    return {
        type: "SET_MY_DISHES", 
        dishes
    }
}

// asynchronout actions 

export const getMyDishes = () => {
    return dispatch => {
        return fetch("http://localhost:3000/api/v1/dishes", {
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
              dispatch(setMyDishes(response.data))
          }
        })
        .catch(console.log)
    }
}