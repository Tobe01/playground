import { Link } from "react-router-dom";
import { activateHamburger, closeWindow } from './drop-menu/dropdown';
import { useState, useEffect } from "react";
import "./header.css";
import "./interval.css";
import "./sub-header.css";
import "./subhover.css";
import "../media-queries/header.css";

export function Header({updateQuantity}) {

  const [isChanged, setIsChanged] = useState(false);
  const [inchange, setInchange] = useState("REFRESH, REVIVE, RECIRCULATE: RE-ZAY");

  useEffect(()=>{
    var interval = setInterval(()=>{
      if (isChanged === false) {
        setInchange("FAST SHIPPING FAST DELIVERY FREE RETURN");
        setIsChanged(true);
      } else {
        setInchange("REFRESH, REVIVE, RECIRCULATE: RE-ZAY");
        setIsChanged(false);
      }
    }, 2000);

    return function () {
      clearInterval(interval);
    };
  }, [isChanged]);



  return (
    <>
      <nav class="header-nav">
        {/* <!-- Contents called inside nav file in javaScript --> */}
        <div className="main-mobile-nav">
          <div className="main-mobile-nav-sub">
            <div className="mobile-nav-left">
              {/* From Uiverse.io by JulanDeAlb */}
              <label className="hamburger" onClick={activateHamburger}>
                <input className="hamburger-input" type="checkbox" />
                <svg viewBox="0 0 32 32">
                  <path
                    className="line line-top-bottom"
                    d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                  ></path>
                  <path className="line" d="M7 16 27 16"></path>
                </svg>
              </label>
            </div>

            <div className="mobile-right">
              <Link to="/login">
                <img
                  src="images/icons/person_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg"
                  alt="personIcon"
                />
              </Link>
              <Link to="/wish-list">
                <span className="favContainer">
                  <img
                    src="images/icons/favorite_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg"
                    alt="favIcon"
                  />
                  <div className="quantity">0</div>
                </span>
              </Link>

              <Link to="/checkout">
                <span className="quantityContainer">
                  <img
                    src="images/icons/local_mall_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg"
                    alt="localMall"
                  />
                  <div className="quantity">{updateQuantity}</div>
                </span>
              </Link>
            </div>
          </div>

          <div className="mobile-searchbar-main">
            <div className="mobile-search-bar">
              <div className="first-button">
                <img
                  src="images/icons/search_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg"
                  alt="search icon"
                />
              </div>
              <input
                className="mobile-input"
                placeholder="Search for products, brands, or categories"
              />
              <div className="second-button">
                <img
                  src="images/icons/photo_camera_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg"
                  alt="photoCam"
                />
              </div>
            </div>
          </div>

          <div className="HamburgerContainer">
            <div className="hamburgerItems">
              <div className="closeContainer">
                <Link to="/">
                  <img src="images/logo/zayra-logo-1.webp" alt="zayraLogo" />
                </Link>

                <span className="closeWin" onClick={closeWindow}>
                  <img
                    src="images/icons/close_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg"
                    alt="closeIcon"
                  />
                </span>
              </div>
              <div className="directoriesContainer">
                <Link to="/">
                  <div>
                    <img
                      src="images/icons/home_app_logo_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg"
                      alt="homeIcon"
                    />
                    <p>Home</p>
                  </div>
                </Link>

                <Link to="/shop">
                  <div>
                    <img
                      src="images/icons/person_heart_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg"
                      alt="womenIcon"
                    />
                    <p>Women</p>
                  </div>
                </Link>

                <Link to="/shop">
                  <div>
                    <img
                      src="images/icons/person_shield_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg"
                      alt="menIcon"
                    />
                    <p>Men</p>
                  </div>
                </Link>

                <Link to="/shop">
                  <div>
                    <img
                      src="images/icons/face_left_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg"
                      alt="kidsIcon"
                    />
                    <p>Kids</p>
                  </div>
                </Link>

                <Link to="/shop">
                  <div>
                    <img
                      src="images/icons/sports_football_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg"
                      alt="SportsIcon"
                    />
                    <p>Sport</p>
                  </div>
                </Link>

                <Link to="/shop">
                  <div>
                    <img
                      src="images/icons/spa_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg"
                      alt="beautyIcon"
                    />
                    <p>Beauty</p>
                  </div>
                </Link>
              </div>

              <div className="NewItemsContainer">
                <Link to="/shop">
                  <div>
                    <img
                      src="images/icons/notifications_unread_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg"
                      alt="newIcon"
                    />
                    <p>NEW IN</p>
                  </div>
                </Link>

                <Link to="/shop">
                  <div>
                    <img
                      src="images/icons/laundry_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg"
                      alt="laudryIcon"
                    />
                    <p>CLOTHING</p>
                  </div>
                </Link>

                <Link to="/shop">
                  <div>
                    <img
                      src="images/icons/footprint_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg"
                      alt="shoesIcon"
                    />
                    <p>SHOES</p>
                  </div>
                </Link>

                <Link to="/shop">
                  <div>
                    <img
                      src="images/icons/aod_watch_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg"
                      alt="watchIcon"
                    />
                    <p>ACCESSORIES</p>
                  </div>
                </Link>

                <Link to="/shop">
                  <div>
                    <img
                      src="images/icons/sports_football_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg"
                      alt="footbalIcon"
                    />
                    <p>SPORTS</p>
                  </div>
                </Link>

                <Link to="/shop">
                  <div>
                    <img
                      src="images/icons/brand_family_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg"
                      alt="brandsIcon"
                    />
                    <p>BRANDS</p>
                  </div>
                </Link>

                <Link to="/shop">
                  <div>
                    <img
                      src="images/icons/checkroom_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg"
                      alt="checkroomIcon"
                    />
                    <p>DESIGNER</p>
                  </div>
                </Link>

                <Link to="/shop">
                  <div>
                    <img
                      src="images/icons/price_check_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg"
                      alt="priceIcon"
                    />
                    <p>SALE</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="top-nav">
          <div className="top-nav-items">
            <Link>
              <span>
                <p>Contact & FAQs</p>
              </span>
            </Link>
            <Link>
              <span>
                <p>Delivery</p>
              </span>
            </Link>
            <Link>
              <span>
                <p>Returns</p>
              </span>
            </Link>
            <Link>
              <span>
                <p>Track Orders</p>
              </span>
            </Link>
            <Link>
              <span>
                <p>Share Your Ideas</p>
              </span>
            </Link>
            <Link>
              <span>
                <p>Gift Cards</p>
              </span>
            </Link>
          </div>
        </div>

        <div className="middle-nav">
          <div className="left">
            <Link to="/">
              <img src="images/logo/zay.webp" width="50" />
            </Link>
            <div>
              <Link to="/shop">
                <div>WOMEN</div>
              </Link>
              <Link to="/shop">
                <div>MEN</div>
              </Link>
              <Link to="/shop">
                <div>KIDS</div>
              </Link>
              <Link to="/shop">
                <div>SPORT</div>
              </Link>
              <Link to="/shop">
                <div>BEAUTY</div>
              </Link>
              <Link to="/shop">
                <div>SHOP</div>
              </Link>
            </div>
          </div>
          <div className="right">
            <div className="right-sub">
              <div className="right-sub1">
                <span>
                  <img
                    src="images/icons/search_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg"
                    alt="search icon"
                  />
                </span>
                <input placeholder="Search for products, brands, or ..." />
              </div>
              <div className="right-sub-icon">
                <Link to="/login">
                  <span>
                    <img
                      src="images/icons/person_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg"
                      alt="login icon"
                    />
                  </span>
                </Link>
                <Link to="/wish-list">
                  <span className="favContainer">
                    <img
                      src="images/icons/favorite_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg"
                      alt="wish-list"
                    />
                    <div className="quantity">0</div>
                  </span>
                </Link>
                <Link to="/checkout">
                  <span className="quantityContainer">
                    <img
                      src="images/icons/local_mall_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg"
                      alt="localMall"
                    />
                    <div className="quantity">{updateQuantity}</div>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="bottom-nav">
          <div className="bottom-sub">
            <div className="NewHover">
              <p>NEW IN</p>
            </div>
            <div className="NewHover">
              <p>CLOTHING</p>
            </div>
            <div className="NewHover">
              <p>SHOES</p>
            </div>
            <div className="NewHover">
              <p>ACCESSORIES</p>
            </div>
            <div className="NewHover">
              <p>SPORT</p>
            </div>
            <div className="NewHover">
              <p>BRANDS</p>
            </div>
            <div className="NewHover">
              <p>DESIGNER</p>
            </div>
            <div className="NewHover">
              <p>RE-ZAYRA</p>
            </div>
            <div className="NewHover">
              <p>SALE</p>
            </div>
          </div>
        </div>

        {/* Search icon tht appears on clicked central search */}
        <div className="main-search">
          <div className="main-search-container">
            <button className="close-button">
              <img
                src="images/icons/close_small_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg"
                alt="closeMall"
              />
            </button>
            <input
              className="main-search-bar"
              type="search"
              placeholder="Search for products, brands, or categories"
            />
            <button className="search-button">
              <img
                src="images/icons/search_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg"
                alt="searchIcon"
              />
            </button>
          </div>
        </div>

        <div className="intervalContainer">
          <div className="interval-sub-container">
            <div className="secondInterval">
              <Link>{inchange} &copy;</Link>
            </div>
          </div>

          <div className="subHover">
            <div className="brandsA-Z">
              <b>
                <h4>Brands A-Z</h4>
              </b>
              <p>Clothing brands</p>
              <p>Shoe brands</p>
              <p>Accessories brands</p>
              <p>Sports brands</p>
              <p>Designer brands</p>
            </div>
            <div className="ManageBrands">
              <b>
                <h4>Manage your brands</h4>
              </b>
              <p>Dulale Diva</p>
              <p>Light Studio</p>
              <p>Ellen Joe</p>
              <p>Dallas</p>
              <p>Mag</p>
              <p>Loop</p>
              <p>Syntia Delaney</p>
              <p>Emillia</p>
            </div>
            <div className="ManageBrands">
              <b>
                <h4>Popular brands</h4>
              </b>
              <p>Julia Alves</p>
              <p>Hanover Fasion Brand</p>
              <p>Aaron Martinex</p>
              <p>Gucci</p>
            </div>
            <div className="subHoverImages">
              <Link to="/">
                <div className="subHoverImages-div">
                  <img
                    src="images/brandsHover/paul-cuoco-CO2vOhPqlrM-unsplash.webp"
                    alt="subhoverImage"
                    loading="lazy"
                  />
                </div>
              </Link>
              <Link to="/">
                <div className="subHoverImages-div">
                  <img
                    src="images/brandsHover/jonas-b-AVSxYIcBxoM-unsplash.webp"
                    alt="subhoverImage"
                    loading="lazy"
                  />
                </div>
              </Link>
              <Link to="/">
                <div className="subHoverImages-div">
                  <img
                    src="images/brandsHover/cornelia-ng-zZLhoEwGCeM-unsplash.webp"
                    alt="subhoverImage"
                    loading="lazy"
                  />
                </div>
              </Link>
              <Link to="/">
                <div className="subHoverImages-div">
                  <img
                    src="images/brandsHover/mostafa-mahmoudi-J4DnKxz_3sA-unsplash.webp"
                    alt="subhoverImage"
                    loading="lazy"
                  />
                </div>
              </Link>
              <Link to="/">
                <div className="subHoverImages-div">
                  <img
                    src="images/brandsHover/john-torcasio-TJrkkhdB39E-unsplash.webp"
                    alt="subhoverImage"
                    loading="lazy"
                  />
                </div>
              </Link>
              <Link to="/">
                <div className="subHoverImages-div">
                  <img
                    src="images/brandsHover/arno-senoner-KKZhQk3j0yA-unsplash.webp"
                    alt="subhoverImage"
                    loading="lazy"
                  />
                </div>
              </Link>
              <Link to="/">
                <div className="subHoverImages-div">
                  <img
                    src="images/brandsHover/tom-radetzki-trdk1R0F3tg-unsplash.webp"
                    alt="subhoverImage"
                    loading="lazy"
                  />
                </div>
              </Link>
              <Link to="/">
                <div className="subHoverImages-div">
                  <img
                    src="images/brandsHover/paul-lichtblau-updW-QUccFE-unsplash.webp"
                    alt="subhoverImage"
                    loading="lazy"
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
