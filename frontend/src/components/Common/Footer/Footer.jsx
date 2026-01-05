import { FiPhoneCall } from "react-icons/fi";
import { TbBrandInstagram, TbBrandMeta, TbBrandX } from "react-icons/tb";
import { Link } from "react-router-dom";

const Footer = () => {

    return (
        <footer className="border-t border-gray-300 py-12">
            <div className="container mx-auto max-w-7xl grid grid-cols-2 md:grid-cols-4 gap-8 px-4 md:px-0">

                <div>
                    <h3 className="text-lg mb-4 text-gray-800">Newsletter</h3>
                    <p className="text-gray-500 mb-4">Be the first to hear about new products, exclusive events and online offers</p>
                    <p className="mb-4 text-sm font-medium text-gray-600">Sign up and get 10% off on your first order</p>

                    {/* newsletter form */}
                    <form className="flex">
                        <input type="email" placeholder="Enter your Email" required className="p-3 w-full text-sm border-t border-l border-b border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-500 transition-all rounded-l-md"/>

                        <button type="submit" className="p-3 bg-black text-white text-sm hover:bg-gray-800 transition-all duration-200 cursor-pointer rounded-r-md">Subscribe</button>
                    </form>
                </div>
                
                {/* shop section */}
                <div>
                    <h3 className="text-lg text-gray-800 mb-4">Shop</h3>
                    <ul className="space-y-2 text-gray-700">
                        <li><Link to={"#"} className="hover:text-gray-500 transition-colors">Men's Top Wear</Link></li>
                        <li><Link to={"#"} className="hover:text-gray-500 transition-colors">Women's Top Wear</Link></li>
                        <li><Link to={"#"} className="hover:text-gray-500 transition-colors">Men's Bottom Wear</Link></li>
                        <li><Link to={"#"} className="hover:text-gray-500 transition-colors">Women's Bottom Wear</Link></li>
                    </ul>
                </div>
                
                {/* Support section */}
                <div>
                    <h3 className="text-lg text-gray-800 mb-4">Support</h3>
                    <ul className="space-y-2 text-gray-700">
                        <li><Link to={"#"} className="hover:text-gray-500 transition-colors">Contact Us</Link></li>
                        <li><Link to={"#"} className="hover:text-gray-500 transition-colors">About Us</Link></li>
                        <li><Link to={"#"} className="hover:text-gray-500 transition-colors">FAQs</Link></li>
                        <li><Link to={"#"} className="hover:text-gray-500 transition-colors">Features</Link></li>
                    </ul>
                </div>
                
                {/* Follow us on section */}
                <div>
                    <h3 className="text-lg text-gray-800 mb-4">Follow Us</h3>
                    <div className="flex items-center space-x-4 mb-5">
                        <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-all duration-150"> <TbBrandMeta></TbBrandMeta> </a>
                        <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-all duration-150"> <TbBrandInstagram></TbBrandInstagram> </a>
                        <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-all duration-150"> <TbBrandX></TbBrandX> </a>
                    </div>

                    <p className="text-gray-600 mb-2">Call Us</p>
                    <p className="flex items-center gap-3"> <FiPhoneCall></FiPhoneCall> +880 1101010101</p>        
                </div>
            </div>
            {/* copyright */}
            <div className="w-full text-center text-gray-800 mt-12 border-t pt-6 border-gray-200 text-sm">                
                <p>
                    © {new Date().getFullYear()} All rights reserved
                </p>
            </div>
        </footer>
    );
};

export default Footer;