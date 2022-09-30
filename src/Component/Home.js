import React from "react";
import Navbar from "../Component/Navbar/Navbar"
import { fetchOurFoodData } from '../Redux-State/our_foods/Our_Food';
import { useEffect } from 'react';
import {connect}  from 'react-redux';

function Home({ourFoodDataFetch}) {
    
  useEffect(() => {
    ourFoodDataFetch(`https://ig-food-menus.herokuapp.com/our-foods`);
  },[ourFoodDataFetch])

    return(
        <div>
            <Navbar/>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        ourFoodDataFetch : url => dispatch(fetchOurFoodData(url))
    }
  }

export default connect(null, mapDispatchToProps)(Home)