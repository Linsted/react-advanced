// import "./App.css";
import SplitScreen from "./components/SplitScreen";

// eslint-disable-next-line react/prop-types
function LeftSideComponent({ title }) {
  return <h2 style={{ backgroundColor: "red" }}>{title}</h2>;
}

// eslint-disable-next-line react/prop-types
function RightSideComponent({ title }) {
  return <h2 style={{ backgroundColor: "blue" }}>{title}</h2>;
}

function App() {
  return (
    <>
      <SplitScreen leftWidth={1} rightWidth={2}>
        <LeftSideComponent title="I am on the Left side" />
        <RightSideComponent title="I am on the Right side" />
      </SplitScreen>
    </>
  );
}

export default App;
