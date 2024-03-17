import { v4 as uuidv4 } from "uuid";
import Card from "./card";

export default function Cards(props) {
  const { products, cartList, handleAddToCart, handleRemoveFromCart } = props;

  return (
    <div className="card-container">
      {products.map((product) => {
        const filterProduct = cartList.filter((cart) => cart.id === product.id);

        return (
          <Card
            {...product}
            key={uuidv4()}
            handleAddToCart={handleAddToCart}
            handleRemoveFromCart={handleRemoveFromCart}
            inCart={filterProduct.length}
          />
        );
      })}
    </div>
  );
}
