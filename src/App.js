import React from "react";
import "./App.css";

import banner1 from "./assets/img/banner-1.jpeg";
import banner2 from "./assets/img/banner-2.jpeg";
import banner3 from "./assets/img/banner-3.jpeg";

const product = { title: "Samsung XX", price: 500, stock: 10 };
const product1 = { title: "Iphone X", price: 600, stock: 2 };
const product2 = { title: "Xiaomi", price: 400, stock: 7 };

function App() {
  function CardBody(props) {
    const { name, price, stock } = props;

    return (
      <>
        <div className="card-title">
          <h2>{name}</h2>
        </div>
        <div className="card-body">
          <p>{price} $</p>
          <p>{stock} darab van készleten</p>
          <button>Kosárhoz</button>
        </div>
      </>
    );
  }

  function Card(props) {
    const { children } = props;

    return <div className="card">{children}</div>;
  }

  return (
    <div className="App">
      <h1>PK Webshop</h1>
      <Card>
        <CardBody
          name={product.title}
          price={product.price}
          stock={product.stock}
        />
      </Card>
      <Card>
        <CardBody
          name={product1.title}
          price={product1.price}
          stock={product1.stock}
        />
      </Card>
      <Card>
        <CardBody
          name={product2.title}
          price={product2.price}
          stock={product2.stock}
        />
      </Card>
      <Card>
        <h2>Ez már más tartalom</h2>
      </Card>
    </div>
  );
}

export default App;
