import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import All from "./components/Categories-pages/All";
import Shoes from "./components/Categories-pages/Shoes";
import Backpacks from "./components/Categories-pages/Backpacks";
import Shirt from "./components/Categories-pages/Shirt";
import Accessories from "./components/Categories-pages/Accessories";
import Tshirt from "./components/Categories-pages/Tshirt";
import Jeans from "./components/Categories-pages/Jeans";
import ProductPage, { CartContext } from "./pages/ProductPage";
import { useEffect, useState } from "react";
import User from "./components/Authentication/User"

function App() {
  const [cartItem, setCartItem] = useState([]);

  const addToCart = (item) => {
    setCartItem([...cartItem, item]);
  };

  // local storage
  useEffect(() => {
    const json = localStorage.getItem("cartItem");
    const savedCart = JSON.parse(json);
    if (savedCart) {
      setCartItem(savedCart);
    }
  }, []);

  useEffect(() => {
    const json = JSON.stringify(cartItem);
    localStorage.setItem("cartItem", json);
  }, [cartItem]);

  return (
    <CartContext.Provider value={{ cartItem, addToCart, setCartItem }}>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="categories" element={<Categories />}>
          <Route path="all" element={<All />} />
          <Route path="shoes" element={<Shoes />} />
          <Route path="backpacks" element={<Backpacks />} />
          <Route path="shirt" element={<Shirt />} />
          <Route path="accessories" element={<Accessories />} />
          <Route path="tshirt" element={<Tshirt />} />
          <Route path="jeans" element={<Jeans />} />
        </Route>
        <Route path="categories/product/:id" element={<ProductPage />} />
        <Route path="/user" element={<User/>}/>
      </Routes>
    </CartContext.Provider>
  );
}

export default App;
