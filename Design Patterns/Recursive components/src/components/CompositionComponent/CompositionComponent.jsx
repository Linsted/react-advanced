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

export const RedButton = (props) => {
  return <Button {...props} color="red" />;
};

export const BlueSmallButton = (props) => {
  return <Button {...props} color="blue" size="small" />;
};
