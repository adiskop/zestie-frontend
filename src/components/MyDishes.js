import React from "react";
import DishCard from "./DishCard";
import { connect } from "react-redux";
import { Link } from "react-router-dom";


const MyDishes = props => {
    const dishCards = props.dishes.length > 0 ?
      props.dishes.map(d => (<p key={d.id}><Link to={`/dishes/${d.id}`}>{d.attributes.name}</Link></p>)) :
      null
  
    return dishCards
  }



const mapStateToProps = state => {
    return {
        dishes: state.myDishes
    }
}

export default connect(mapStateToProps)(MyDishes)