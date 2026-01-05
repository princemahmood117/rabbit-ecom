import { Outlet } from "react-router-dom";
import Footer from "../../Common/Footer/Footer";
import Header from "../../Common/Header/Header";

const UserLayout = () => {
  return (
    <>
      {/* header section */}
      <Header></Header>

      {/* main content */}
      <main>
        <Outlet></Outlet>
      </main>

      {/* footer section */}
      <Footer></Footer>
    </>
  );
};

export default UserLayout;
