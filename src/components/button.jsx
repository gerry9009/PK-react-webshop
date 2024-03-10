const Button = (props) => {
  const { color, isLast, isntActive, children, ...attributes } = props;

  let bgColor = "";

  if (color) {
    bgColor = color;
  } else if (isLast) {
    bgColor = "last";
  }

  return (
    <li>
      <button className={bgColor} {...attributes} disabled={isntActive}>
        {children}
      </button>
    </li>
  );
};

export default Button;
