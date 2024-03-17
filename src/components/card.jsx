import Button from "./button";

export default function Card(props) {
  const {
    id,
    title,
    price,
    stock,
    inCart,
    handleAddToCart,
    handleRemoveFromCart,
  } = props;

  let stockMessage = <p>{stock} darab van készleten</p>;
  if (stock === 0) {
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
            onClick={() => handleAddToCart(id)}
            isLast={stock === 1}
            isntActive={stock === 0}
          >
            Hozzáad a kosárhoz
          </Button>
          {inCart > 0 && (
            <Button onClick={() => handleRemoveFromCart(id)} color="red">
              Kivenni a kosárból
            </Button>
          )}
        </ul>
      </div>
    </div>
  );
}
