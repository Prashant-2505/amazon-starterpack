import React from "react";
import "./Hero.css";
import {RiShoppingBagFill} from 'react-icons/ri'
import {BsArrowRight} from 'react-icons/bs'
import HeroImg from '../../assets/hero.png'

const Hero = () => {
  return (
    <div className="container2">
      <div className="h_slides">
        <span className="text1">Skin protection cream</span>
        <div className="text2">
          <span>Trendy Collecton</span>
          <span>
          {''}  Seedily say has suitable disposal and boy, Exercise joy man children rejociated
          </span>
        </div>
      </div>

      <div className="wraper">
        <div className="blueCircle"></div>
        <img src={HeroImg} alt="" width={600}/>
        <div className="cart2">
            <RiShoppingBagFill/>
            <div className="signup">
                <span>Best Signup offers</span>
                <div>
                    <BsArrowRight/>
                </div>
            </div>
        </div>
      </div>

      <dv className="h_slides">
        <div className="traffic">
            <span>1.4M</span>
            <span>Monthly Traffic</span>
        </div>

        <div className="customer">
            <span>100k</span>
            <span>Happy Customer</span>
        </div>
      </dv>
    </div>
  );
};

export default Hero;
