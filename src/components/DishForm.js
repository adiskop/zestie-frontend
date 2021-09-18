import React from "react";
import { updateDishForm } from "../actions/dishForm";
import { connect } from "react-redux";

const DishForm = ({formData,updateDishForm,userId,dish, handleSubmit, editMode}) => {

const {name,picture,ingredients,directions,cookTime} = formData

const handleChange = event => {
    console.log("trigger Handle change")
    const { name, value } = event.target
    updateDishForm(name, value)
}

    return (
        <form onSubmit={event => {
            event.preventDefault()
            handleSubmit(formData)
          }}>``
       <br/><input
              placeholder="Name"
              name="name"
              onChange={handleChange}
              value={name}
            /><br/> 
            <input
              placeholder="Picture"
              name="picture"
              onChange={handleChange}
              value={picture}
            /><br/>  
            <input
                placeholder="Ingredients"
                name="ingredients"
                onChange={handleChange}
                value={ingredients}
                /><br/> 
            <input
                placeholder="Directions"
                name="directions"
                onChange={handleChange}
                value={directions}
                /><br/> 
            <input
                placeholder="Cook Time"
                name="cookTime"
                onChange={handleChange}
                value={cookTime}
                /><br/> 
                   
            <input
                type="submit"
                value={editMode ? "Update Recipe" : "Create Recipe" }
            />
        </form>
)};

const mapStateToProps = state => {
    const userId = state.currentUser ? state.currentUser.id : ""
    return{
        formData: state.dishForm,
        userId
    }
}


export default connect(mapStateToProps, {updateDishForm})(DishForm); 

