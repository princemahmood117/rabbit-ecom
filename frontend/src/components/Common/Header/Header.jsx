import Topbar from "../../Layout/Topbar/Topbar";
import Navbar from "./Navbar";

const Header = () => {
    return (
        <header className="border border-b-gray-200">
            {/* top bar */}
            <Topbar></Topbar>


            {/* navbar */}
            <Navbar></Navbar>



            {/* card-drawer */}
        </header>
    );
};

export default Header;