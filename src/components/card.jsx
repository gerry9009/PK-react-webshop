import { useState } from "react";
import Button from "./button";

export default function Card(props) {
  const { title, price, stock, addProduct } = props;

  const [myStock, setMyStock] = useState(stock);
  const [inCart, setInCart] = useState(0);

  const handleClickAdd = () => {
    addProduct(title);
    if (myStock > 0) {
      setMyStock((currentStock) => currentStock - 1);
      setInCart((currentStock) => currentStock + 1);
    }
  };

  const handleClickRemove = () => {
    if (inCart > 0) {
      setMyStock((currentStock) => currentStock + 1);
      setInCart((currentStock) => currentStock - 1);
    }
  };

  let stockMessage = <p>{myStock} darab van készleten</p>;

  if (myStock === 0) {
    stockMessage = <p>Nincs készleten</p>;
  }

  return (
    <div className="card">
      <div className="card-title">
        <h2>{title}</h2>
      </div>
      <div className="card-body">
        <p>{price} $</p>
        {stockMessage}
        <ul>
          <Button
            onClick={handleClickAdd}
            isLast={myStock === 1}
            isntActive={myStock === 0}
          >
            Hozzáad a kosárhoz
          </Button>
          {inCart > 0 && (
            <Button onClick={handleClickRemove} color="red">
              Kivenni a kosárból
            </Button>
          )}
        </ul>
      </div>
    </div>
  );
}
