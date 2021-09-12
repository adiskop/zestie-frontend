import React from "react";
//import {Link} from 'react-router-dom'

const DishCard = ({ dish }) => {
    return (
        dish?
        <div>
            <h3>{dish.attributes.name}</h3>
            <p>{dish.attributes.picture}</p>
            </div> :
      <p>This the the Dish card with no dish!</p>
    )
}

export default DishCard