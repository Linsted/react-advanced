import {
  BlueSmallButton,
  RedButton,
} from "./components/CompositionComponent/CompositionComponent";
import {
  RedButtonPartial,
  SmallRedButtonPartial,
} from "./components/PartialComponent/PartialComponent";
import RecursiveComponent from "./components/RecursiveComponent/RecursiveComponent";

const myNestedObject = {
  key1: "value1",
  key2: {
    innerKey1: "innerValue1",
    innerKey2: {
      innerInnerKey1: "innerInnerValue1",
      innerInnerKey2: "innerInnerValue2",
    },
  },
  key3: "value3",
};

function App() {
  return (
    <>
      <RecursiveComponent data={myNestedObject} />
      <RedButton text={"Red Button"} />
      <BlueSmallButton text={"Blue Small Button"} />
      <RedButtonPartial text={"Red Button Partial"} />
      <SmallRedButtonPartial text={"Small Red Button Partial"} />
    </>
  );
}

export default App;
