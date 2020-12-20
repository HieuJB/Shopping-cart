import React, { useState,useEffect } from "react";
import "./css.css";
import {
    BrowserRouter as Router,
    Route,
    Link,
  } from 'react-router-dom';
export default function Home1(props){
    
    const [items,setItems]= useState({
        id:props.namess.id,
        itemss:props.namess.name,
        img:props.namess.img,
        price:props.namess.price
    })
    const [alert,setAlert]=useState({
        notification:'',
        class : ''
    })
    const [listshow,setListshow]=useState([{}]);
    const sent_items = (id)=>{
        
        var length_items=JSON.parse(localStorage.getItem('items'));
        // for(var i=0;i<length_items.length;i++){
        //     if(items.itemss==length_items[i].itemss){
        //         setAlert(
        //             {
        //                 notification:"Sanr pham da ton tai",
        //                 class : 'alert alert-danger succ'
        //             });
        //         break;
        //     }
        // }
        
        if(length_items==''){
            const listshow=[];
            listshow.push(items);
            localStorage.setItem('items',JSON.stringify(listshow));
            setAlert(
                {
                notification:"Thêm sản phẩm thành công",
                class : 'alert alert-success succ'
            });
            setTimeout(()=>{
                setAlert({
                    class:''
                })
            },1000);
        }else{
            
                    listshow.push(items);
                    localStorage.setItem('items',JSON.stringify(listshow));
                    setAlert(
                        {
                                                    notification:"Thêm sản phẩm thành công",
                                                    class : 'alert alert-success succ'
                                                });
                    
                
            }
            // listshow.push(items);
            // localStorage.setItem('items',JSON.stringify(length_items));
            //         setAlert(
            //                     {
            //                         notification:"Thêm sản phẩm thành công",
            //                         class : 'alert alert-success succ'
            //                     });
            //                     setTimeout(()=>{
            //                         setAlert({
            //                             class:''
            //                         })
            //                     },1000);
                }
    

        
          
    
    return(
        <div>
        <div className="container">   
        {/* <p>Trang thu {props.namess.id}</p>
                <p>{props.namess.id}</p>
                <Link to="/index">sdadasda</Link> */}
                <div 
                style={{display:alert.display}}
                className={alert.class} role="alert">
                    {alert.notification}
                </div>
                <div className="image-items-details">
                    <img id="img-link-details" alt="" src={props.namess.img}></img>
                </div>
                <div className="price-items-details">   
                    <div className="price-items-details-center">
                        <h2>{props.namess.name}</h2>
                        <h5>{props.namess.price.toString().replace(/(?:(^\d{1,3})(?=(?:\d{3})*$)|(\d{3}))(?!$)/mg, '$1$2.')+'đ'}</h5>
                        <div className="form-group">
                        <input type="text"
                            className="form-control number"  placeholder="1"/>
                        </div>
                        <button type="button" onClick={sent_items} className="btn btn-primary">Add to Cart</button>
                    </div>
                </div>
        </div>
        </div>
    )
}