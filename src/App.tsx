import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
 
        <Outlet />
   
      <ScrollRestoration />
    </>
  );
}

export default App;
