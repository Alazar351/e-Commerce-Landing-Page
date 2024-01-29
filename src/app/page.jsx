"use client";
import "../styles/home.css";
import PicSlides from "../components/picsSlide";
import ProductSlide from "../components/productSlide";

export default function Home() {
  return (
    <main>
      <section className="section">
        <div className="picSlide">
          <PicSlides />
        </div>

        <div className="firstText">
          <p className="top">We make it easy to experience creativity</p>
          <h3>Stylish New Design.</h3>
          <p className="pale">
            Aenean ultricies erat sit amet viverra suscipit. semper leo in,
            tincidunt nibh.
          </p>
          <a className="rightArrow">
            Shop Now <img src="./rightArrow.svg" />
          </a>
        </div>
      </section>
      <section>
        <div className="secondText">
          <div className="img">
            <img src="./third.png" />
          </div>
          <div className="promotion">
            <p className="top">New Arrivals</p>
            <h3>Shirt for man's</h3>
            <h3 className="price">
              <span className="sign">$</span>169.00
            </h3>
            <p className="pale">
              Refresh your wardrobe with a piece from our gorgeous ready-to-wear
              collection, featuring beautifully crafted coats, dresses, jackets,
              sweaters, skirts, tops and trousers. Whether you’re searching for
              a special occasion or updating your work wardrobe, our clothing
              collection has you covered.{" "}
              <span>
                We are delighted to reveal our campaign for the Autumn/Winter
                2016 collection, styled by fashion icon Caroline Issa and shot
                by esteemed photographer Max Farago.
              </span>
            </p>
            <a className="rightArrow">
              Shop Now <img src="./rightArrow.svg" />
            </a>
          </div>
        </div>
      </section>
      <section>
        <div className="thirdText">
          <div className="intro">
            <h2>New Products</h2>
            <p className="pale">Trending stunning Unique</p>
            <img src="./deer.jpg" />
          </div>
        </div>
        <div className="productSlide">
          <ProductSlide />
        </div>
      </section>
      <section>
        <div className="newsletter">
          <h3>Join the Newsletter</h3>
          <p className="pale">Sign Up for Our Newsletter:</p>
          <img src="./deer.jpg" />
          <form>
            <input
              type="email"
              className="email"
              placeholder="Enter your email address"
            />
            <button type="submit" className="rightArrow">
              Subscribe <img src="./rightArrow.svg" />
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
