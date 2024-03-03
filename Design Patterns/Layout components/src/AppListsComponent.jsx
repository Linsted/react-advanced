import LargeListitem from "./components/Authors/LargeListitem";
import SmallListitem from "./components/Authors/SmallListitem";
import LargeBooksListitem from "./components/Books/LargeListitem";
import SmallBooksListitem from "./components/Books/SmallListitem";
import RegularList from "./components/Lists/Regular";
import { authors } from "./data/authors";
import { books } from "./data/books";

const App = () => {
  return (
    <>
      <RegularList
        items={authors}
        sourceName={"author"}
        ItemComponent={SmallListitem}
      />
      <RegularList
        items={authors}
        sourceName={"author"}
        ItemComponent={LargeListitem}
      />
      <RegularList
        items={books}
        sourceName={"book"}
        ItemComponent={SmallBooksListitem}
      />
      <RegularList
        items={books}
        sourceName={"book"}
        ItemComponent={LargeBooksListitem}
      />
    </>
  );
};

export default App;
