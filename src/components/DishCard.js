import React from "react";
import { Link } from "react-router-dom";
//import {Link} from 'react-router-dom'

const DishCard = ({ dish }) => {
    return (
        dish?
        <div>
            <h3>{dish.attributes.name}</h3>
                <img src ={dish.attributes.picture} className="dish-picture" alt=""/>
                <p><strong>Ingredients:</strong> {dish.attributes.ingredients}</p>
                <p><strong>Directions:</strong> {dish.attributes.directions}</p>
                <p><strong>Cook Time:</strong> {dish.attributes.cook_time}</p>
                <Link to={`/dishes/${dish.id}/edit`}>Edit This Recipe</Link>
            </div> :
      <p>This the the Dish card with no dish!</p>
    )
}

export default DishCard