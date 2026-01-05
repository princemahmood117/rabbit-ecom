import { Link } from "react-router-dom";
import mensCollection from "../../assets/mens-collection.webp"
import womensCollection from "../../assets/womens-collection.webp"

const GenderCollectionSection = () => {
    return (
        <section className="py-16">
           <div className="container max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
            
            {/* women collection */}           
                <div className="relative flex-1">
                    <img src={womensCollection} alt="women's collection" className="w-full h-175 object-cover"/>

                    {/* text inside image */}
                    <div className="absolute bottom-8 left-8 bg-white/60 p-4">
                        <h2 className="text-2xl font-bold text-gray-800 mb-3">Women's Collection</h2>
                        <Link to={"/collections/all?gender=women"} className="text-gray-800 underline">Shop Now</Link>
                    </div>
                </div>

            {/* men collection */}
                <div className="relative flex-1">
                    <img src={mensCollection} alt="men's collection" className="w-full h-175 object-cover"/>

                    {/* text inside image */}
                    <div className="absolute bottom-8 left-8 bg-white/60 p-4">
                        <h2 className="text-2xl font-bold text-gray-800 mb-3">Men's Collection</h2>
                        <Link to={"/collections/all?gender=men"} className="text-gray-800 underline">Shop Now</Link>
                    </div>
                </div>
           </div>
        </section>
    );
};

export default GenderCollectionSection;