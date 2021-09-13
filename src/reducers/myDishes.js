const initialState = []

export default (state = [], action) => {
    switch (action.type) {
      case "SET_MY_DISHES":
        return action.dishes
      case "CLEAR_DISHES":
      return initialState
      default:
        return state
    }
  }
  