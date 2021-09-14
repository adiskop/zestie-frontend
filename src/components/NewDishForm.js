import React from "react";
import { updateNewDishForm } from "../actions/newDishForm";
import { createDish } from "../actions/myDishes";
import { connect } from "react-redux";

const NewDishForm = ({formData,history,updateNewDishForm,userId,dish, createDish}) => {

const {name,picture,ingredients,directions,cookTime} = formData

const handleChange = event => {
    console.log("trigger Handle change")
    const { name, value } = event.target
    updateNewDishForm(name, value)
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
        formData: state.newDishForm,
        userId
    }
}


export default connect(mapStateToProps, {updateNewDishForm, createDish})(NewDishForm); 

