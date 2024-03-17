import { v4 as uuidv4 } from "uuid";
import Button from "./button";

export default function Cart(props) {
  const { cartList, handleRemoveFromCart } = props;

  const sumPrice = cartList.reduce((accumulator, currentProduct) => {
    return accumulator + currentProduct.price;
  }, 0);

  return (
    <div className="cart">
      <h2>Kosár:</h2>
      <h2>{sumPrice} $</h2>
      <h3>{cartList.length} termék van a kosárban</h3>
      <h3>Termékek:</h3>
      <div>
        {cartList.map((cart, index) => {
          return (
            <div className="cart-item" key={uuidv4()}>
              <p>
                {cart.title} - {cart.price}
              </p>
              <Button
                color="red"
                onClick={() => handleRemoveFromCart(cart.id, index)}
              >
                Töröl
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
