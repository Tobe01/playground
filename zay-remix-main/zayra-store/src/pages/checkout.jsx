import { Header } from "../components/header";
import { Link } from "react-router-dom";
import "./items.css";
import "./checkout.css";
import "./shop.css";
import '../media-queries/checkout.css';

export function Checkout() {
  return (
    <>
      <title>checkout</title>
      <Header/>
      {/* <!-- Empty Cart Display --> */}

      <div className="emptyCart">
        <img src="images/icons/local_mall_Dark.svg" alt="localMallIcon" />
        <p>Your Cart is Empty</p>
        <Link to="/shop" className="browseButton">
          BROWSE THE SHOP
        </Link>
      </div>

      <section className="checkout">
        <div className="deliveredBy">
          <div className="mainCheckout-container">
            {/* Cart Container */}
            <div className="Array-container">
              <div className="checkoutParent">
                <p>Shopping Cart (5)</p>
              </div>

              {/* Container for array of added items */}
              <div className="checkoutLeft">
                <div className="checkoutContents">
                  <div className="checkoutTop">
                    <div className="checkoutImage">
                      <img
                        src="images/shopItems/3305.webp"
                        alt="checkoutImage"
                      />
                    </div>
                    <div className="checkoutItems">
                      <h1>
                        Slim Stacked Flare Embroidered Strip Tricot Track Pants
                      </h1>
                      <p>$22.50</p>

                      <div className="addQuantity">
                        <p>Quantity:</p>
                        <div className="addQuantitySub">
                          <div>
                            <img
                              src="images/icons/check_indeterminate_small_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg"
                              alt="minus"
                            />
                          </div>
                          <span>0</span>
                          <div>
                            <img
                              src="images/icons/add_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg"
                              alt="add"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="deleteContainer">
                    <button>
                      <img
                        src="images/icons/delete_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg"
                        alt="deleteIcon"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div>
              {/* <!-- Order summary container --> */}
              <div className="OrderSummary">
                <div className="orderSummary-Top">
                  <h1>Order Summary</h1>
                  <div className="orderfirst">
                    <div className="subtotal">
                      <p>Subtotal</p>
                      <p>$58.00</p>
                    </div>
                    <div className="discount">
                      <p>Discount</p>
                      <p>$-6.60</p>
                    </div>
                  </div>

                  <div className="orderSecond">
                    <div className="orderTotal">
                      <p>Order total</p>
                      <p>$51.40</p>
                    </div>

                    <div className="orderDiscount">
                      <h4>Discounts included:</h4>
                      <p>
                        boohooMAN Up to 70% SALE <span>-£6.60</span>
                      </p>
                    </div>
                  </div>

                  <div className="add-container">
                    <Link to="/orders">
                      <button>CHECKOUT</button>
                    </Link>
                    <button>
                      <img
                        src="images/icons/apple.webp"
                        alt="apple-logo"
                        loading="lazy"
                      />{" "}
                      Pay
                    </button>
                    <button>
                      <img
                        src="images/payments/PayPal_Logo_Horizontal_Full_Color_RGB-002-1.webp"
                        alt="paypal-icon"
                      />{" "}
                      Checkout
                    </button>
                  </div>

                  <div className="orderBottom">
                    <img
                      src="images/payments/068BjcjwBw0snwHIq0KNo5m-15.webp"
                      alt="paymentsLogo"
                    />
                    <img
                      src="images/payments/images (1).webp"
                      alt="paymentsLogo"
                    />
                    <img src="images/payments/Mclick.webp" alt="paymentsLogo" />
                    <img
                      src="images/payments/apple-pay.webp"
                      alt="paymentsLogo"
                    />
                    <img
                      src="images/payments/images (1).webp"
                      alt="paymentsLogo"
                    />
                    <img src="images/payments/images.webp" alt="paymentsLogo" />
                    <img src="images/payments/Mclick.webp" alt="paymentsLogo" />
                    <img
                      src="images/payments/images (1).webp"
                      alt="paymentsLogo"
                    />
                    <img
                      src="images/payments/images (1).webp"
                      alt="paymentsLogo"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
