import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Counter from "./components/counter";


function App() {
  return (
    <>
    <Header/>
      <Outlet/>
    </>
  );
}

export default App;
