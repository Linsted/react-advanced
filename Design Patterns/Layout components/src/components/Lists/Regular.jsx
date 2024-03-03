/* eslint-disable react/prop-types */
const RegularList = ({ items, sourceName, ItemComponent }) => {
  return (
    <>
      {items.map((item, index) => (
        <ItemComponent key={index} {...{ [sourceName]: item }} />
      ))}
    </>
  );
};

export default RegularList;
