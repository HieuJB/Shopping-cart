import React, { useState } from "react";
import "./css.css";
export default function Home(){
    const [product,setProduct] = useState([
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
            id : '3',
            img : 'https://cdn.tgdd.vn/Products/Images/42/225851/TimerThumb/vivo-y1s-(4).jpg',
            name : 'Vivo Y1s',
            price : '18.890.000₫ '
        },
        {
            id : '3',
            img : 'https://cdn.tgdd.vn/Products/Images/42/225851/TimerThumb/vivo-y1s-(4).jpg',
            name : 'Vivo Y1s',
            price : '18.890.000₫ '
        },
        {
            id : '3',
            img : 'https://cdn.tgdd.vn/Products/Images/42/225851/TimerThumb/vivo-y1s-(4).jpg',
            name : 'Vivo Y1s',
            price : '18.890.000₫ '
        }
    ])
    return(
        <div>
        <div className="container">
                {product.map((productss,index)=>(
                <a href={productss.id}><div className="form-product" key={index}>
                    <div className="form-product-img">
                        <img src={productss.img}></img>
                    </div>
                    <div className="form-product-name">
                        <p>{productss.name}</p>
                    </div>
                    <div className="form-product-price">
                        <p>{productss.price}</p>
                    </div>
                    </div>
                </a>
                ))}
        </div>
        </div>
    )
}