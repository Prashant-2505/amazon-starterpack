import React, { useState } from "react";
import "./Products.css";
import Plane from "../../assets/plane.png";
import { ProductsData } from "../../data/products";
import {useAutoAnimate} from '@formkit/auto-animate/react'



const Products = () => {

  const [parent] = useAutoAnimate()
  const [MenuProducts, SetMenuProducts] = useState(ProductsData);

  // there is type of every product you can see in product,js then we are filter it if type === to type the filter the data from priducts data and set it means show only there products
const filter = (type) =>{
  SetMenuProducts(ProductsData.filter((product)=>product.type===type))
}

  return (
    <div className="product-container">
      <img src={Plane} alt="plane" />
      <h1> Our Featured Products</h1>

      <div className="products">
        <div className="menu2">
          <ul>
            <li onClick={()=>SetMenuProducts(ProductsData)}>All</li>
            <li onClick={()=>filter("skin care")}>Skin care</li>
            <li onClick={()=>filter("conditioner")}>Conditioners</li>
            <li onClick={()=>filter("foundation")}>Foundation</li>
          </ul>
        </div>
        <div className="list" ref={parent}>
          {MenuProducts.map((product, i) => (
            <div className="product">
              <div className="left-s">
                <div className="name">
                  <sapn>{product.name}</sapn>
                  <sapn>{product.detail}</sapn>
                </div>
                <span>{product.price}$</span>
                <div>Show Now</div>
              </div>
              <img src={product.img} alt="" className="img-p" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
