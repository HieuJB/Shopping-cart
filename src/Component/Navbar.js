import React,{} from "react";
import "./css.css";
import Home from "./Home";
export default function Navbar(){
    return(
        <div className="Navbarr">
            <div className="containerr">
                <div className="logo-iconss">
                   <img src="https://clipartstation.com/wp-content/uploads/2018/09/clipart-toko-1.png"  alt=""></img>
                   <a href="ss">JB-STORE</a>
                </div>
                <div className="card-icon">
                    <a href="dasd"><i className="fa fa-shopping-cart"></i><p>Cart</p></a>
                </div>
                <div className="create-icon">
                    <a href="as"><i className='fas fa-plus-circle'></i><p>Create</p></a>
                </div>
                <div className="account-icon">
                    <a href="as"><i className='fa fa-user'></i><p>Account</p></a>
                </div>
                <div className="logout-icon">
                    <a href="as"><i className='fa fa-sign-out'></i><p>Logout</p></a>
                </div>
                <a href="/cart">dsadsa</a>
            </div>    
        </div>
    )
}