/* eslint-disable react/prop-types */
const LargeBooksListitem = ({ book }) => {
  const { name, price, title, pages } = book;

  return (
    <p>
      <h2>{name}</h2>
      <p>{price}</p>
      <h2>Title: {title}</h2>
      <p># of pages{pages}</p>
    </p>
  );
};

export default LargeBooksListitem;
