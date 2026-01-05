import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import UserLayout from "./components/Layout/UserLayout/UserLayout";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* user layouts */}
          <Route path="/" element={<UserLayout></UserLayout>}>
            <Route index element={<Home></Home>}></Route>
          </Route>

          {/* admin layouts */}
          <Route></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
