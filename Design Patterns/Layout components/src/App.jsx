LargeListitem;
import LargeListitem from "./components/Authors/LargeListitem";
import RegularList from "./components/Lists/Regular";
import Modal from "./components/Modal/Modal";
import { authors } from "./data/authors";

const App = () => {
  return (
    <Modal>
      <RegularList
        items={authors}
        sourceName={"author"}
        ItemComponent={LargeListitem}
      />
    </Modal>
  );
};

export default App;
