import styled from "styled-components";

const Container = styled.div`
  display: flex;
  /* flex-direction: row;
  justify-content: space-between; */
`;

const Panel = styled.div`
  flex: ${(props) => props.flex};
`;

// eslint-disable-next-line react/prop-types
const SplitScreen = ({ children, leftWidth = 1, rightWidth = 1 }) => {
  const [left, right] = children;

  return (
    <>
      <Container>
        <Panel flex={leftWidth}>{left}</Panel>
        <Panel flex={rightWidth}>{right}</Panel>
      </Container>
    </>
  );
};

export default SplitScreen;
