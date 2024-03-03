/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const LargeListitem = ({ author }) => {
  const { name, age, country, books } = author;

  return (
    <>
      <h2>{name}</h2>
      <p>Age {age}</p>
      <p>{country}</p>
      <h2>Books{}</h2>
      {books.map((book) => (
        <li key={book}>{book}</li>
      ))}
    </>
  );
};

export default LargeListitem;
