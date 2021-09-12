//sync actions

export const updateNewDishForm = ( name, value ) => {
    const formData = { name, value }
    return{
        type: "UPDATE_NEW_DISH_FORM",
        formData
    }
}

export const resetNewDishForm = () => {
    return {
      type: "RESET_NEW_DISH_FORM"
    }
  }