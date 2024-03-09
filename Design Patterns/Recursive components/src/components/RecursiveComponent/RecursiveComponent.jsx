function checkIsDataObject(data) {
  return typeof data === "object" && data !== null;
}

const RecursiveComponent = ({ data }) => {
  if (!checkIsDataObject(data)) {
    return <li>{data}</li>;
  }

  const pairs = Object.entries(data);

  return (
    <>
      {pairs.map(([key, value]) => {
        return (
          <li key={key}>
            <strong>{key}</strong>
            <ul>
              <RecursiveComponent data={value} />
            </ul>
          </li>
        );
      })}
    </>
  );
};

export default RecursiveComponent;
