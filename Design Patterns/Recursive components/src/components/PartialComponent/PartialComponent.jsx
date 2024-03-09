export const partialComponent = (Component, partialProps) => {
  return (props) => <Component {...partialProps} {...props} />;
};

const Button = ({ size, color, text, ...props }) => {
  return (
    <button
      style={{
        fontSize: size === "small" ? "14px" : "25px",
        backgroundColor: color,
      }}
    >
      {text}
    </button>
  );
};
export const RedButtonPartial = partialComponent(Button, { color: "red" });
export const SmallRedButtonPartial = partialComponent(RedButtonPartial, {
  size: "small",
});
