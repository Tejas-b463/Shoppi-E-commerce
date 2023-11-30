import { IconChevronLeft } from "@tabler/icons-react";
import { useState } from "react";
import { Link } from "react-router-dom";

function CategoriesHeader() {
  const [btnName, setBtnName] = useState("All");

  const handleBtnName = (e) => {
    setBtnName(e);
  };

  return (
    <>
      <div className="container">
        <div className="catego-header">
          <div className="title-home">
            <Link onClick={() => window.scrollTo(0, 0)} to="/">
              <IconChevronLeft />  Home
            </Link>
            <h3>{btnName}</h3>
          </div>
          <div className="filter-btns">
            <Link to="all" onClick={() => handleBtnName("all")}>
              <button>All</button>
            </Link>
            <Link to="shoes">
              <button onClick={() => handleBtnName("shoes")}>
              Sneakers
              </button>
            </Link>
            <Link to="accessories">
              <button onClick={() => handleBtnName("accessories")}>
              Accessories
              </button>
            </Link>
            <Link to="shirt">
              <button onClick={() => handleBtnName("shirt")}>Shirt</button>
            </Link>
            <Link to="backpacks">
              <button onClick={() => handleBtnName("backpacks")}>Backpacks</button>
            </Link>
            <Link to="tshirt">
              <button onClick={() => handleBtnName("tshirt")}>T-Shirt</button>
            </Link>
            <Link to="jeans">
              <button onClick={() => handleBtnName("jeans")}>
                Jeans
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoriesHeader;
