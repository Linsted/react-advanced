/* eslint-disable react/prop-types */
const SmallBooksListitem = ({ book }) => {
  const { name, price } = book;

  return (
    <p>
      {name}/ {price}
    </p>
  );
};

export default SmallBooksListitem;
