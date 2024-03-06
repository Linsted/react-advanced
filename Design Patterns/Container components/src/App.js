import UserLoader from "./components/UserLoader";
import UserLoaderById from "./components/UserLoaderById";
import { UserInfo } from "./components/user-info";

// Loading of the user by Id.
function App() {
  return (
    <>
      <UserLoaderById id={3}>
        <UserInfo />
      </UserLoaderById>
    </>
  );
}

export default App;

/*  Loading of the user */
// function App() {
//   return (
//     <>
//       <UserLoader>
//         <UserInfo />
//       </UserLoader>
//     </>
//   );
// }

// export default App;
