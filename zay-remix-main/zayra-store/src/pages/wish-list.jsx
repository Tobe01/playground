import { Link } from "react-router-dom";
import { WishHeader } from "../components/wish-list-header";
import { useEffect } from "react";
import "./wish-list.css";
import "../media-queries/wish-list.css";

export function WishList() {
  
  useEffect(()=>{
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <title>Wishes</title>
      {/* <!-- Empty Cart Display --> */}
      <WishHeader />{" "}
      <div className="emptyWishes">
        <img
          src="images/icons/personal_bag_question_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg"
          alt="emptyLuggage"
        />
        <p>You Have No wishlist Yet</p>
        <Link to="/shop">
          <button>BROWSE THE SHOP</button>
        </Link>
      </div>
      <main className="wishU">
        <section className="wishlist-container">
          <div className="wishCont">
            <div className="wishCard">
              <div className="imageDesc">
                <div className="imageContainer">
                  <img
                    src="images/shopItems/2149153329.webp"
                    alt="checkoutImage"
                  />
                </div>
                <div className="descriptionContainer">
                  <div className="priceDesc">
                    <h1>
                      Slim Stacked Flare Embroidered Strip Tricot Track Pants
                    </h1>
                    <p>$22.30</p>
                  </div>
                  <button className="js-deleteWish">
                    <img
                      src="images/icons/delete_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg"
                      alt="deleteIcon"
                    />
                  </button>
                </div>
              </div>

              <div className="buttonsContainer js-addWishes">
                <button>Add To Cart</button>
              </div>
            </div>
          </div>

          <div className="wishCont">
            <div className="wishCard">
              <div className="imageDesc">
                <div className="imageContainer">
                  <img
                    src="images/shopItems/2149684356.webp"
                    alt="checkoutImage"
                  />
                </div>
                <div className="descriptionContainer">
                  <div className="priceDesc">
                    <h1>
                      Slim Stacked Flare Embroidered Strip Tricot Track Pants
                    </h1>
                    <p>$22.30</p>
                  </div>
                  <button className="js-deleteWish">
                    <img
                      src="images/icons/delete_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg"
                      alt="deleteIcon"
                    />
                  </button>
                </div>
              </div>

              <div className="buttonsContainer js-addWishes">
                <button>Add To Cart</button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
