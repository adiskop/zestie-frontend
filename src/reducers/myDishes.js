export default (state = [], action) => {
    switch (action.type) {
      case "SET_MY_DISHES":
        return action.dishes
      default:
        return state
    }
  }
  