"use client";
import "../styles/nav.css";
import { useEffect } from "react";

export default function Nav() {
  useEffect(() => {
    const primeButton = document.querySelector(".primary-button");
    const menuOpened = document.querySelector(".menu");
    const blur = document.querySelector(".blur");
    const navbar = document.querySelector(".nav-wrapper");
    const bar = document.querySelector(".bar");

    const handleClick = () => {
      const isOpened = primeButton.getAttribute("aria-expanded");
      if (isOpened === "false") {
        primeButton.setAttribute("aria-expanded", "true");
        bar.classList.toggle("true");
        menuOpened.classList.toggle("menu-opened");
        blur.classList.toggle("bg-blur");
      } else {
        primeButton.setAttribute("aria-expanded", "false");
        bar.classList.toggle("true");
        menuOpened.classList.toggle("menu-opened");
        blur.classList.toggle("bg-blur");
      }
    };

    const blurClick = () => {
      primeButton.setAttribute("aria-expanded", "false");
      bar.classList.remove("true");
      menuOpened.classList.toggle("menu-opened");
      blur.classList.toggle("bg-blur");
    };

    const barClick = () => {
      if (bar.classList.contains("true")) {
        blurClick();
      }
    };
    const stickyNav = () => {
      navbar.classList.toggle("sticky", window.scrollY > 0);
    };

    blur.addEventListener("click", blurClick);
    primeButton.addEventListener("click", handleClick);
    window.addEventListener("scroll", stickyNav);

    return () => {
      primeButton.removeEventListener("click", handleClick);
      blur.removeEventListener("click", blurClick);

      window.removeEventListener("scroll", stickyNav);
    };
  }, []);

  return (
    <div className="nav-wrapper">
      <nav className="nav">
        <ul className="bar">
          <li className="left">
            <img src="/logo.jpg" />
          </li>
          <li className="middle">
            <button
              className="primary-button"
              aria-controls="primary-navigation"
              aria-expanded="false"
            >
              <svg className="hamburger" viewBox="0 0 100 100" width="36">
                <rect
                  className="line top-line"
                  width="80"
                  height="10"
                  x="10"
                  y="25"
                ></rect>
                <rect
                  className="line middle-line"
                  width="80"
                  height="10"
                  x="10"
                  y="45"
                ></rect>
                <rect
                  className="line bottom-line"
                  width="80"
                  height="10"
                  x="10"
                  y="65"
                ></rect>
              </svg>
            </button>
          </li>
          <li className="right">
            <img className="links" src="/search.svg" />
            <img className="links" src="/cog.svg" />
            <img className="links" src="/clipboard.svg" />
          </li>
        </ul>
      </nav>
      <div className="menu">
        <div className="menu-container">
          <div className="menu-link">
            <a href="/" className="menu-title home">
              Home
            </a>
          </div>
          <div className="menu-link divide">
            <a className="menu-title">Women</a>
            <div className="menu-sub">
              <div className="sub-items">
                <div className="category">
                  <a>Jackets</a>
                </div>
                <div className="category-items">
                  <a>Tops & Tees</a>
                </div>
                <div className="category-items">
                  <a>Polo Short Sleeve</a>
                </div>
                <div className="category-items">
                  <a>Graphic T-Shirts</a>
                </div>
                <div className="category-items">
                  <a>Jackets & Coats</a>
                </div>
                <div className="category-items">
                  <a>Fashion Jackets</a>
                </div>
              </div>
              <div className="sub-items">
                <div className="category">
                  <a>Weaters</a>
                </div>
                <div className="category-items">
                  <a>Crochet</a>
                </div>
                <div className="category-items">
                  <a>Sleeveless</a>
                </div>
                <div className="category-items">
                  <a>Stripes</a>
                </div>
                <div className="category-items">
                  <a>Sweaters</a>
                </div>
                <div className="category-items">
                  <a>Hoodies</a>
                </div>
              </div>
              <div className="sub-items">
                <div className="category">
                  <a>Bottoms</a>
                </div>
                <div className="category-items">
                  <a>Heelled Sandals</a>
                </div>
                <div className="category-items">
                  <a>Polo Short Sleeve</a>
                </div>
                <div className="category-items">
                  <a>Flat Sandals</a>
                </div>
                <div className="category-items">
                  <a>Short Sleeve</a>
                </div>
                <div className="category-items">
                  <a>Long Sleeve</a>
                </div>
              </div>
            </div>
          </div>
          <div className="menu-link divide">
            <a className="menu-title">Men</a>
            <div className="menu-sub">
              <div className="sub-items">
                <div className="category">
                  <a>Shirts</a>
                </div>
                <div className="category-items">
                  <a>Tops & Tees</a>
                </div>
                <div className="category-items">
                  <a>Sweaters</a>
                </div>
                <div className="category-items">
                  <a>Hoodies</a>
                </div>
                <div className="category-items">
                  <a>Jackets & Coats</a>
                </div>
              </div>
              <div className="sub-items">
                <div className="category">
                  <a>Tops & Tees</a>
                </div>
                <div className="category-items">
                  <a>Long Sleeve</a>
                </div>
                <div className="category-items">
                  <a>Short Sleeve</a>
                </div>
                <div className="category-items">
                  <a>Polo Short Sleeve</a>
                </div>
                <div className="category-items">
                  <a>Sleeveless</a>
                </div>
              </div>
              <div className="sub-items">
                <div className="category">
                  <a>Jackets</a>
                </div>
                <div className="category-items">
                  <a>Sweaters</a>
                </div>
                <div className="category-items">
                  <a>Hoodies</a>
                </div>
                <div className="category-items">
                  <a>Wedges</a>
                </div>
                <div className="category-items">
                  <a>Vests</a>
                </div>
              </div>
            </div>
          </div>
          <div className="menu-link divide">
            <a className="menu-title">Clothing</a>
            <div className="menu-sub">
              <div className="sub-items">
                <div className="category">
                  <a>Top</a>
                </div>
                <div className="category-items">
                  <a>Shirts</a>
                </div>
                <div className="category-items">
                  <a>Florals</a>
                </div>
                <div className="category-items">
                  <a>Crochet</a>
                </div>
                <div className="category-items">
                  <a>Stripes</a>
                </div>
              </div>
              <div className="sub-items">
                <div className="category">
                  <a>Bottoms</a>
                </div>
                <div className="category-items">
                  <a>Shorts</a>
                </div>
                <div className="category-items">
                  <a>Dresses</a>
                </div>
                <div className="category-items">
                  <a>Trousers</a>
                </div>
                <div className="category-items">
                  <a></a>Jeans
                </div>
              </div>
              <div className="sub-items">
                <div className="category">
                  <a>Shoes</a>
                </div>
                <div className="category-items">
                  <a>Heelled Sandals</a>
                </div>
                <div className="category-items">
                  <a>Flat Sandals</a>
                </div>
                <div className="category-items">
                  <a>Wedges</a>
                </div>
                <div className="category-items">
                  <a>Ankle Boots</a>
                </div>
              </div>
            </div>
          </div>
          <div className="menu-link divide">
            <a className="menu-title">Jewellery</a>
            <div className="menu-sub">
              <div className="sub-items">
                <div className="category">
                  <a>Rings</a>
                </div>
                <div className="category-items">
                  <a>Diamond</a>
                </div>
                <div className="category-items">
                  <a>Ruby</a>
                </div>
                <div className="category-items">
                  <a>Emerald</a>
                </div>
                <div className="category-items">
                  <a>Sapphire</a>
                </div>
                <div className="category-items">
                  <a>Topaz</a>
                </div>
              </div>
              <div className="sub-items">
                <div className="category">
                  <a>Earrings</a>
                </div>
                <div className="category-items">
                  <a>Stud</a>
                </div>
                <div className="category-items">
                  <a>Halo</a>
                </div>
                <div className="category-items">
                  <a>Hoop</a>
                </div>
                <div className="category-items">
                  <a>Drop</a>
                </div>
                <div className="category-items">
                  <a>Cluster</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="blur "></div>
    </div>
  );
}
