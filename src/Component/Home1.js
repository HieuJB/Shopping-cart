import React, { useState } from "react";
import "./css.css";
import {
    BrowserRouter as Router,
    Route,
    Link,
  } from 'react-router-dom';
export default function Home1(props){
     
    return(
        <div>
        <div className="container">   
        {/* <p>Trang thu {props.namess.id}</p>
                <p>{props.namess.id}</p>
                <Link to="/index">sdadasda</Link> */}
                <div className="image-items-details">
                    <img id="img-link-details" alt="" src={props.namess.img}></img>
                </div>
                <div className="price-items-details">   
                    <div className="price-items-details-center">
                        <h2>{props.namess.name}</h2>
                        <h5>{props.namess.price}</h5>
                        <div className="form-group">
                        <input type="text"
                            className="form-control number"  placeholder="1"/>
                        </div>
                        <button type="button" className="btn btn-primary">Add to Cart</button>
                    </div>
                </div>
        </div>
        </div>
    )
}