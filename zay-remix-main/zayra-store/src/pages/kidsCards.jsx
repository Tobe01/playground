import { useState } from "react";
import { ViewCard } from './viewcard';
import "./shop.css";
import "../media-queries/shop.css";

export function KidsCard({
  image1,
  image2,
  image3,
  itemName,
  itemDescription,
  priceCents,
  btn1,
  btn2,
  btn3,
  count,
  reviews,
  itemCategory,
  productDesc,
  quantity,
  setQuantity,
  addItem,
}) {
  const [ showPreview, setShowPreview ] = useState(false);
  const [ showHover, setShowHover ] = useState(false);
      
    function displayItems(){
      if(showPreview === false){
        setShowPreview(true);
      } else {
        setShowPreview(false)
      }
    }

    function closeItems(){
      if(showPreview === true){
        setShowPreview(false)
      } else {
        setShowPreview(true)
      }
    }

  function hoverView() {
    if (showHover === false) {
      setShowHover(true);
    } else {
      setShowHover(false);
    }
  }

  function hoverOut() {
    if (showHover === true) {
      setShowHover(false);
    } else {
      setShowHover(true);
    }
  }

  return (
    
    <>
      {/* if showPreview is true, ViewCard component is visible */}
      {showPreview && <ViewCard
        image1={image1}
        image2={image2}
        image3={image3}
        itemDescription={itemDescription}
        priceCents={priceCents}
        count={count}
        reviews={reviews}
        itemCategory={itemCategory}
        productDesc={productDesc}
        onClickAction={closeItems}
        quantity={quantity}
        setQuantity={setQuantity}
        addItem={addItem}
      />}
      <div
        onMouseEnter={hoverView}
        onMouseLeave={hoverOut}
        onClick={displayItems}
        className="card-item-container"
      >
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

          {showHover && (
            <div className="HoverDiv">
              View Item{" "}
              <img
                src="images/icons/arrow_outward_18dp_FFFFFF_FILL0_wght400_GRAD0_opsz20.svg"
                alt="arrowOutward"
              />
            </div>
          )}
        </div>

        <div className="bottomItem-container">
          <div className="bottomItem-top">
            <h1>{itemName}</h1>
            <h3>{itemDescription}</h3>
          </div>
          <p>{`${(priceCents / 100).toFixed(2)}`}</p>
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
    </>
  );
}
