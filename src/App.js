import Navbar from "./Component/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
import Home from "./Component/Home";
import Home1 from "./Component/Home1";

import React, { useState } from "react";

export default function App() {
  const [product] = useState([
    {
        id : '1',
        img : 'https://cdn.tgdd.vn/Products/Images/42/211570/samsung-galaxy-a51-silver-600x600-600x600.jpg',
        name : 'OPPO A92S',
        price : '6.690.000₫',
        slug : 'oppo-a92s'
    },
    {
        id : '2',
        img : 'https://cdn.tgdd.vn/Products/Images/42/225380/iphone-mini-xanh-duongnew-600x600-600x600.jpg',
        name : 'iPhone 12 mini 64GB',
        price : '2.290.000₫',
        slug : 'iphone-12-mini-64gb'
    },
    {
        id : '3',
        img : 'https://cdn.tgdd.vn/Products/Images/42/225851/TimerThumb/vivo-y1s-(4).jpg',
        name : 'Vivo Y1s',
        price : '18.890.000₫',
        slug : 'vivo-y1s'
    },
    {
        id : '4',
        img : 'https://cdn.tgdd.vn/Products/Images/42/210648/iphone-11-256gb-black-400x400.jpg',
        name : 'Vivo Y1sss',
        price : '18.890.000₫ '
    },
    {
        id : '5',
        img : 'https://cdn.tgdd.vn/Products/Images/42/198150/oppo-find-x2-black-600x600-2-600x600.jpg',
        name : 'Vivo Y1ss1',
        price : '18.890.000₫ '
    },
    {
        id : '6',
        img : 'https://cdn.tgdd.vn/Products/Images/42/217936/samsung-galaxy-s20-plus-xanh-600x600-600x600.jpg',
        name : 'Vivo Y1ssss',
        price : '18.890.000₫ '
    }
    
]);
  const getdata = useState('dsaddasdsaas');
  return (

    <div className="App">  
    <Router>
      <Navbar></Navbar>
      {/* <Route key={index} path="/"><Home namess={productsss}></Home></Route> */}
      {product.map((productsss,index) => {
        return <Route key={index} path="/index"><Home namess={productsss}></Home></Route>
        // <Route key={index} path={productsss.name}><Home1 namess={productsss.name}></Home1></Route>
        
        
      })}
      {/* {product.map((productsss,index) => {
        return <Route key={index} path='/3'><Home1 namess={productsss.id}></Home1></Route>
        // <Route key={index} path={productsss.name}><Home1 namess={productsss.name}></Home1></Route>
        
        
      })} */}
      {/* <Route path="/3"><Home1 namess={getdata}></Home1></Route> */} 
      {product.map((productsss,index) => {
      return <Route key={index} path={"/details/"+productsss.name}><Home1 namess={productsss}></Home1></Route> 
      })}
    </Router>
    </div>
  );
}


