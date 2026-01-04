import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";
import { TbBrandMeta } from "react-icons/tb";

const Topbar = () => {
    return (
        <div className="bg-rabbit-red text-white">
            <div className="container max-w-7xl mx-auto flex justify-between items-center py-3">
                {/* left side icons */}
                <div className="hidden md:flex items-center space-x-4">
                    <a href="#" className="hover:text-gray-300"> <TbBrandMeta className="h-5 w-5"></TbBrandMeta> </a>
                    <a href="#" className="hover:text-gray-300"> <IoLogoInstagram className="h-5 w-5"></IoLogoInstagram> </a>
                    <a href="#" className="hover:text-gray-300"> <RiTwitterXLine className="h-4 w-4"></RiTwitterXLine> </a>                   
                </div>

                {/* middle text */}
                <div className="text-sm text-center grow">
                    <span>We ship wirldwide - fast and reliable shipping</span>
                </div>

                {/* right side telephone */}
                <div className="text-sm hidden md:block">
                    <a href="tel:+123456" className="hover:text-gray-300">+880 1101010101</a>
                </div>

            </div>
            
        </div>
    );
};

export default Topbar;