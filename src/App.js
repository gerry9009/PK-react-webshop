import React, { useState } from "react";
import Card from "./components/card";

import banner1 from "./assets/img/banner-1.jpeg";
import banner2 from "./assets/img/banner-2.jpeg";
import banner3 from "./assets/img/banner-3.jpeg";

const product = { title: "Samsung XX", price: 500, stock: 10 };
const product1 = { title: "Iphone X", price: 600, stock: 2 };
const product2 = { title: "Xiaomi", price: 400, stock: 7 };

function App() {
  console.log("RENDER APP");
  const [selectedProduct, setSelectedProduct] = useState(
    "Válassz egy terméket"
  );
  function handleOnClick(name) {
    setSelectedProduct(`${name} hozzáadva a kosárhoz`);

    console.log(selectedProduct);
  }

  return (
    <div className="App">
      <h1>PK Webshop</h1>
      <h2>{selectedProduct}</h2>
      <Card
        name={product.title}
        price={product.price}
        stock={product.stock}
        addProduct={handleOnClick}
      />
      <Card
        name={product1.title}
        price={product1.price}
        stock={product1.stock}
        addProduct={handleOnClick}
      />
      <Card
        name={product2.title}
        price={product2.price}
        stock={product2.stock}
        addProduct={handleOnClick}
      />
    </div>
  );
}

export default App;
