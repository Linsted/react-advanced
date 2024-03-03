/* eslint-disable react/prop-types */
const SmallListitem = ({ author }) => {
  const { name, age } = author;

  return (
    <p>
      Name : {name}, age: {age}
    </p>
  );
};

export default SmallListitem;
