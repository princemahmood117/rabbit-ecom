import { Link } from "react-router-dom";
import mensCollection from "../../assets/menCollection.jpg"
import womensCollection from "../../assets/womenCollection.jpg"
import { motion } from "framer-motion";

const GenderCollectionSection = () => {
    return (
        <section className="py-16">
           <div className="container max-w-7xl mx-auto flex flex-col md:flex-row gap-6">
            
            {/* women collection */}           
                <motion.div 
                initial={{ x: -50, opacity: 0 }}
                // animate={{ x: 0, opacity: 1 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 50 }}
                
                className="relative flex-1">
                    <img src={womensCollection} alt="women's collection" className="w-full md:h-175 h-120 object-cover px-3"/>

                    {/* text inside image */}
                    <div className="absolute bottom-8 left-8 bg-white/60 p-4">
                        <h2 className="text-2xl font-bold text-gray-800 mb-3">Women's Collection</h2>
                        <Link to={"/collections/all?gender=women"} className="text-gray-800 underline">Shop Now</Link>
                    </div>
                </motion.div>

            {/* men collection */}
                <motion.div 
                initial={{ x: 50, opacity: 0 }}
                // animate={{ x: 0, opacity: 1 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 1, type: "spring", stiffness: 50 }}

                className="relative flex-1">
                    <img src={mensCollection} alt="men's collection" className="w-full md:h-175 h-120 object-cover px-3"/>

                    {/* text inside image */}
                    <div className="absolute bottom-8 left-8 bg-white/60 p-4">
                        <h2 className="text-2xl font-bold text-gray-800 mb-3">Men's Collection</h2>
                        <Link to={"/collections/all?gender=men"} className="text-gray-800 underline">Shop Now</Link>
                    </div>
                </motion.div>
           </div>
        </section>
    );
};

export default GenderCollectionSection;