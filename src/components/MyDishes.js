import React from "react";
import DishCard from "./DishCard";
import { connect } from "react-redux";
import { Link } from "react-router-dom";


const MyDishes = props => {
    const dishCards = props.dishes.length > 0 ?
    props.dishes.map(t => (<p key={t.id}><Link to={`/dishes/${t.id}`}>{t.attributes.name}</Link></p>)) :
    null

  return dishCards
}



const mapStateToProps = state => {
    return {
        dishses: state.MyDishes
    }
}

export default connect(mapStateToProps)(MyDishes)