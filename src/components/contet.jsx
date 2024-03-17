import { useState, useEffect } from "react";
import Cards from "./cards";
import Cart from "./cart";
import Form from "./form";

export default function Content() {
  const [cartList, setCartList] = useState([]);
  const [defaultProducts, setDefaultProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [searchField, setSearchField] = useState({
    search: "",
    price: "",
  });

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=100")
      .then((resp) => resp.json())
      .then((data) => {
        setDefaultProducts(data.products);
        setProducts(data.products);
      });
  }, []);

  useEffect(() => {
    const filteredProducts = defaultProducts.filter((product) => {
      if (searchField.price) {
        return (
          product.title
            .toLowerCase()
            .includes(searchField.search.toLowerCase()) &&
          Number(product.price) < Number(searchField.price)
        );
      }

      return product.title
        .toLowerCase()
        .includes(searchField.search.toLowerCase());
    });

    setProducts(filteredProducts);
  }, [searchField]);

  function handleAddToCart(id) {
    const product = products.filter((product) => product.id === id)[0];

    if (product.stock > 0) {
      setCartList((current) => [...current, product]);

      const newProducts = products.map((product) => {
        if (product.id === id) {
          product.stock--;
        }

        return product;
      });

      setProducts(newProducts);
    }
  }

  function handleRemoveFromCart(id, index) {
    const cartProducts = cartList.filter((cart) => cart.id === id);
    if (cartProducts.length === 0) return;

    if (typeof index === "number") {
      const newCart = cartList.filter((cart, cartIndex) => cartIndex !== index);

      setCartList(newCart);
    } else {
      const firstIndex = cartList.findIndex((cart) => cart.id === id);

      const newCart = cartList.filter(
        (cart, cartIndex) => cartIndex !== firstIndex
      );
      setCartList(newCart);
    }

    const newProducts = products.map((product) => {
      if (product.id === id) {
        product.stock++;
      }

      return product;
    });
    setProducts(newProducts);
  }

  function handleChange(e) {
    setSearchField({ ...searchField, [e.target.name]: e.target.value });
  }

  return (
    <>
      <Form value={searchField} handleChange={handleChange} />
      <div className="container-content">
        <Cards
          products={products}
          handleAddToCart={handleAddToCart}
          handleRemoveFromCart={handleRemoveFromCart}
          cartList={cartList}
        />
        <Cart cartList={cartList} handleRemoveFromCart={handleRemoveFromCart} />
      </div>
    </>
  );
}
