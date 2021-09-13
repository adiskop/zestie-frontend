const initialState = []

export default (state = [], action) => {
    switch (action.type) {
      case "SET_MY_DISHES":
        return action.dishes
      case "CLEAR_DISHES":
      return initialState
      case "ADD_DISH":
      return state.dishes.concat(action.dishes)
      default:
        return state
    }
  }
  