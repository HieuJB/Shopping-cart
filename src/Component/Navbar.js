import React,{} from "react";
import Logo from './Picture/logo1.png'
import "./css.css";
export default function Navbar(){
    return(
        <div className="Navbarr">
            <div className="containerr">
                <div className="logo-iconss">
                   <img src={Logo}  alt=""></img>
                   <p>React-Native</p>
                </div>
                <div className="card-icon">
                   
                        <a href="as"><i className="fa fa-shopping-cart"></i><p>Cart</p></a>
                   
                </div>
                <div className="create-icon">
                <a href="as"><i className='fas fa-plus-circle'></i><p>Cart</p></a>

                </div>
                <div className="account-icon">
                  
                </div>
                <div className="logout-icon">
                  
                </div>
            </div>    
        </div>
    )
}