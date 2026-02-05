import { useState } from 'react';
import "./shop.css";
import "../media-queries/shop.css";

export function ShopCard(
  {shopId, image1, image2, image3, itemName, 
   itemDescription, priceCents, btn1, btn2,
   btn3, star, count, reviews, itemCategory, productDesc }) {

    
  return (
    <div key={shopId} className="card-item-container">
      <div className="topImg-container">
        <img
          src={`images/shopItems/${image1}`}
          alt="item-images"
          loading="lazy"
          className="images"
        />

        <img
          src={`images/shopItems/${image2}`}
          alt="item-images"
          loading="lazy"
          className="images"
        />

        <img
          src={`images/shopItems/${image3}`}
          alt="item-images"
          loading="lazy"
          className="images"
        />

        <div className="HoverDiv">
          View Item{" "}
          <img
            src="images/icons/arrow_outward_18dp_FFFFFF_FILL0_wght400_GRAD0_opsz20.svg"
            alt="arrowOutward"
          />
        </div>
      </div>

      <div className="bottomItem-container">
        <div className="bottomItem-top">
          <h1>{itemName}</h1>
          <h3>{itemDescription}</h3>
        </div>
        <p>{`$${(priceCents / 100).toFixed(2)}`}</p>
        <div className="colors-container">
          <button className="btn1">
            <img src={`images/colors/${btn1}`} alt="colorPicker" />
          </button>

          <button className="btn1">
            <img src={`images/colors/${btn2}`} alt="colorPicker" />
          </button>

          <button className="btn1">
            <img src={`images/colors/${btn3}`} alt="colorPicker" />
          </button>
        </div>
      </div>
    </div>
  );
}
