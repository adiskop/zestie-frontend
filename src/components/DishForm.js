import React from "react";
import { updateDishForm } from "../actions/dishForm";
import { connect } from "react-redux";
import { Form, Button } from "react-bootstrap";


const DishForm = ({formData,updateDishForm,userId,dish, handleSubmit, editMode}) => {

const {name,picture,ingredients,directions,cookTime} = formData

const handleChange = event => {
    console.log("trigger Handle change")
    const { name, value } = event.target
    updateDishForm(name, value)
}

    return (
       

<Form onSubmit={event => {
            event.preventDefault()
            handleSubmit(formData)
          }}>

<Form.Group className="mb-3" controlId="formBasicName">
  <Form.Label>Name</Form.Label>
  <Form.Control placeholder="Name"
              name="name"
              onChange={handleChange}
              value={name} />
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicEmail">
  <Form.Label>Picture URL</Form.Label>
  <Form.Control placeholder="Picture"
              name="picture"
              onChange={handleChange}
              value={picture} />
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicEmail">
  <Form.Label>Ingredients</Form.Label>
  <Form.Control placeholder="Ingredients"
                name="ingredients"
                onChange={handleChange}
                value={ingredients} />
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicEmail">
  <Form.Label>Directions</Form.Label>
  <Form.Control placeholder="Directions"
                name="directions"
                onChange={handleChange}
                value={directions} />
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicEmail">
  <Form.Label>Cook Time</Form.Label>
  <Form.Control  placeholder="Cook Time"
                name="cookTime"
                onChange={handleChange}
                value={cookTime} />
</Form.Group>

<Button>
<input variant="primary" type="submit" value={editMode ? "Update Recipe" : "Create Recipe" }>

</input>
</Button>
</Form>
















)};

const mapStateToProps = state => {
    const userId = state.currentUser ? state.currentUser.id : ""
    return{
        formData: state.dishForm,
        userId
    }
}


export default connect(mapStateToProps, {updateDishForm})(DishForm); 

