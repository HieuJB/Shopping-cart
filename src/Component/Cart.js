import React, { useEffect, useState } from "react";

import "./css.css";

export default function Cart(){
    const [price,setPrice]=useState('0');
    var list_items = JSON.parse(localStorage.getItem('items'));
    const [list_show,setList_show]=useState(list_items);
    
    function remove_items(id){
        // console.log(id);
        const filtered = list_items.filter(data => data.id !== id);
        const filtered1 = list_items.filter(data => data.id == id);//loc lay gia tri price cua id de xoa
        localStorage.setItem("items", JSON.stringify(filtered));   
        setList_show(JSON.parse(localStorage.getItem('items')));
        var sum_price = parseInt(price) - parseInt(filtered1[0].price);
        console.log(filtered1[0].price);
        console.log(sum_price);
        setPrice(sum_price);
        
    }
    useEffect(()=>{
        var data = JSON.parse(localStorage.getItem('items'));
        var price_items_sum ='0' ;
        for(var i=0;i<data.length;i++){
            price_items_sum = parseInt(price_items_sum)+parseInt(data[i].price);
        }
        var nb = price_items_sum;
        setPrice(nb);
        console.log(nb);
    },[price])

    return(
        <div>
        {list_items!==null &&
           <div className="cart-menu">
            {list_show.map((list_itemss,index)=>(
            <div key={index} className="cart-items-form">
                <div className="img-form">
                    <img src={list_itemss.img} alt="" ></img>
                </div>
                <div className="price-form">
                    <div className="price-form-details">
                        <h4>{list_itemss.itemss}</h4>
                        <h5>{list_itemss.price.toString().replace(/(?:(^\d{1,3})(?=(?:\d{3})*$)|(\d{3}))(?!$)/mg, '$1$2.')+'đ'}</h5>
                    </div>
                </div>
                <div className="remove-form">
                    <i onClick={()=>remove_items(list_itemss.id)} className="fa fa-remove rem"></i>
                </div>
            </div>
            
            ))}
            <div className="price-form-sum">
                <p>Price: {price.toString().replace(/(?:(^\d{1,3})(?=(?:\d{3})*$)|(\d{3}))(?!$)/mg, '$1$2.')+'đ'} </p>
            </div>
            <div className="price-form-sum-btn">
                <button type="button" className="btn btn-primary">Buy</button>
            </div>
            </div>}
          
        </div>
    )
}