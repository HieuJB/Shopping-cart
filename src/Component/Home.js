import React, { useState } from "react";
import "./css.css";
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';
export default function Home(props){
     
    return(
        <div>
        <div className="container">   
                <Link to={"/details/"+props.namess.name}><div className="form-product">
                    <div className="form-product-img">
                        <img src={props.namess.img}></img>
                    </div>
                    <div className="form-product-name">
                        <p>{props.namess.name}</p>
                    </div>
                    <div className="form-product-price">
                        <p>{props.namess.price}</p>
                    </div>
                    </div>
                </Link>        
        </div>
        </div>
    )
}