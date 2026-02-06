import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { ShopCard } from "./shopcards";
import { shopData } from "../../data/shopdata";
import { ViewCard } from "./viewcard";

export function Shop() {

  return (
    <>
      <title>Shop</title>
      <Header />

      <ViewCard/>
      <main>
        <div className="shop-main-container">
          <div className="shop-container">
            <div className="shop-container-sub">
              {/* <!-- Rendered in JavaScript --> */}
              <div className="trend">
                <h1>Trending Now</h1>
                <h3>Fill Your Wardrobe With The Latest Looks</h3>
              </div>
              <div className="trend1">
                <button className="fashion" data-item>
                  AARON MARTINEZ
                </button>
                <button>Men's</button>
                <button>Kids</button>
                <button>Women's</button>
              </div>
            </div>

            <div className="main-shopItems">
              {/* <!-- Shop items called inside js --> */}
              <div className="item-container fade-in-up">
                {/* <!-- All Shop Items rendered in JavaScript --> */}
                {shopData.map((shopItems) => {
                  return (
                    <ShopCard
                      key={shopItems.id}
                      image1={shopItems.images.image1}
                      image2={shopItems.images.image2}
                      image3={shopItems.images.image3}
                      itemName={shopItems.itemName}
                      itemDescription={shopItems.itemDescription}
                      priceCents={shopItems.priceCents}
                      btn1={shopItems.colorPicker.btn1}
                      btn2={shopItems.colorPicker.btn2}
                      btn3={shopItems.colorPicker.btn3}
                      star={shopItems.ratings.star}
                      count={shopItems.ratings.count}
                      reviews={shopItems.ratings.reviews}
                      itemCategory={shopItems.itemCategory}
                      productDesc={shopItems.productDesc}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
