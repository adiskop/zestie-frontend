//sync actions

export const updateDishForm = ( name, value ) => {
    const formData = { name, value }
    return{
        type: "UPDATE_DISH_FORM",
        formData
    }
}

export const resetDishForm = () => {
    return {
      type: "RESET_DISH_FORM"
    }
  }