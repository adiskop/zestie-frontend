export default (state = null, action) => {
    switch (action.type) {
        case "SET CURRENT_USER":
            return action.user
      default:
        return state
    }
  }
  