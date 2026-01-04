import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import UserLayout from "./components/Layout/UserLayout/UserLayout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* user layouts */}
          <Route path="/" element={<UserLayout></UserLayout>}> </Route>  





          {/* admin layouts */}
          <Route></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
