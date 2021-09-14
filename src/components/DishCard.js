import React from "react";
//import {Link} from 'react-router-dom'

const DishCard = ({ dish }) => {
    return (
        dish?
        <div>
            <h3>{dish.attributes.name}</h3>
                <img src ={dish.attributes.picture} className="dish-picture"/>
                <p>{dish.attributes.ingredients}</p>
                <p>{dish.attributes.directions}</p>
                <p>{dish.attributes.cook_time}</p>
            </div> :
      <p>This the the Dish card with no dish!</p>
    )
}

export default DishCard