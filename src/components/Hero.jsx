import "./Header.css";
import Main1 from "../img/header/home-img-1.jpg";
import Main2 from "../img/header/home-img-2.jpg";
import Main3 from "../img/header/home-img-3.jpg";
import Main4 from "../img/header/home-img-4.jpg";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <>
      <div className="home-container">
        <div className="container">
          <div className="grid-container">
            <div className="featured grid-one">
              <Link to="categories/all">
                <div id="img1" className="all"></div>
                <img src={Main1} alt="img1" />
                <p className="main-description">SHOP BY FANDOM</p>
              </Link>
            </div>
            <div className="featured grid-two">
              <Link to="categories/tshirt">
                <div id="img2" className="lil-overlay"></div>
                <img src={Main2} alt="img2" />
                <p className="main-description">Topwear</p>
              </Link>
            </div>
            <div className="featured grid-four">
              <Link to="categories/jeans">
                <div id="img3" className="lil-overlay"></div>
                <img src={Main3} alt="img3" />
                <p className="main-description">Bottomwear</p>
              </Link>
            </div>
            <div className="featured grid-four-low">
              <Link to="categories/shoes">
                <div id="img4" className="lil-overlay"></div>
                <img src={Main4} alt="img4" />
                <p className="main-description">Sneakers</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
