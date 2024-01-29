import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="about">
        <li>
          <div>
            <h3>Free shipping worldwide</h3>
            <p>On order over $150 - 7 days a week</p>
          </div>
        </li>
        <li>
          <div>
            <h3>24/7 Customer service</h3>
            <p>Call ous 24/7 at 000 - 123 - 456</p>
          </div>
        </li>
        <li>
          <div>
            <h3>Money back guarantee</h3>
            <p>Send within 30 days</p>
          </div>
        </li>
        <li>
          <div>
            <h3>Shopping Guide</h3>
            <p>Quis Eum Iure Reorehenderit</p>
          </div>
        </li>
      </div>
      <div className="middle">
        <div className="mountain">
          <img className="logo" src="/whiteLogo.png" />
          <p className="pale">
            Eodem modo typi, qui nunc nobis videntur parum clari, fiant
            sollemnes in futurum.
          </p>
          <div className="links">
            <a>
              <img src="/twiiter.svg" />
            </a>
            <a>
              <img src="/google.svg" />
            </a>
            <a>
              <img src="/fb.svg" />
            </a>
            <a>
              <img src="/yt.svg" />
            </a>
          </div>
          <img className="payment" src="./payment.png" />
        </div>
      </div>
      <div className="pics">
        <img src="/footer1.jpg" />
        <img src="/footer2.jpg" />
        <img src="/footer3.jpg" />
        <img src="/footer4.jpg" />
      </div>
    </footer>
  );
}
