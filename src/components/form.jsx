export default function Form(props) {
  const { value, handleChange } = props;
  return (
    <form>
      <input
        name="search"
        type="search"
        placeholder="Keresés"
        value={value.search}
        onChange={(e) => handleChange(e)}
      />
      <input
        type="number"
        placeholder="Maximális érték"
        name="price"
        value={value.price}
        onChange={(e) => handleChange(e)}
      />
    </form>
  );
}
