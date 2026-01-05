import { Link } from "react-router-dom";
import heroImg from "../../../assets/ecomHero2.jpg";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative">
      <img
        className="w-full h-100 md:h-150 lg:h-187.5 object-cover"
        src={heroImg}
        alt="heroImage"
      />

      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
        <div className="text-center text-white p-6 ">
          <motion.h1
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1, type: "tween", stiffness: 100 }}
           className="text-4xl md:text-6xl lg:text-9xl font-bold tracking-tighter uppercase mb-4 ">
            Vac
            <span className="text-red-600 text-5xl md:text-7xl lg:text-[150px] italic font-satisfy">
              a
            </span>
            tion  
            <motion.div 
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.7, type: "tween", stiffness: 100 }}>Ready</motion.div>

          </motion.h1>


          <p className="text-sm tracking-tighter md:text-lg mb-6 text-center">
            Explore our vacation-ready outfits with fast delivery
          </p>

          <div className="transform hover:scale-105 transition-all duration-300">
            <Link
              to={"#"}
              className="bg-white text-gray-800 px-6 py-2.5 rounded-sm tracking-wider hover:bg-gray-200 transition-all duration-300"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
