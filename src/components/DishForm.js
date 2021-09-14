import React from "react";
import { updateDishForm } from "../actions/dishForm";
import { createDish } from "../actions/myDishes";
import { connect } from "react-redux";

const DishForm = ({formData,history,updateDishForm,userId,dish, createDish}) => {

const {name,picture,ingredients,directions,cookTime} = formData

const handleChange = event => {
    console.log("trigger Handle change")
    const { name, value } = event.target
    updateDishForm(name, value)
}

const handleSubmit = event => {
    event.preventDefault()
    createDish({
        ...formData,
        userId},
        history)
}

    return (
        <form onSubmit={handleSubmit}>
       <br/><input
              placeholder="Name"
              name="name"
              onChange={handleChange}
              defaultValue={name}
            /><br/> 
            <input
              placeholder="Picture"
              name="picture"
              onChange={handleChange}
              defaultValue={picture}
            /><br/>  
            <input
                placeholder="Ingredients"
                name="ingredients"
                onChange={handleChange}
                defaultValue={ingredients}
                /><br/> 
            <input
                placeholder="Directions"
                name="directions"
                onChange={handleChange}
                defaultValue={directions}
                /><br/> 
            <input
                placeholder="Cook Time"
                name="cookTime"
                onChange={handleChange}
                defaultValue={cookTime}
                /><br/> 
                   
            <input type="submit" value="Create Dish"/>
        </form>
)};

const mapStateToProps = state => {
    const userId = state.currentUser ? state.currentUser.id : ""
    return{
        formData: state.dishForm,
        userId
    }
}


export default connect(mapStateToProps, {updateDishForm, createDish})(DishForm); 

