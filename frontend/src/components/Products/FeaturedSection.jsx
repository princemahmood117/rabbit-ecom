import { HiOutlineCreditCard, HiShoppingBag } from "react-icons/hi";
import { HiArrowPathRoundedSquare } from "react-icons/hi2";

const FeaturedSection = () => {
    return (
        <section className="py-8">
            {/* whole container */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center gap-3">
                {/* feature 1 */}
                <div className="flex flex-col items-center">

                    <div className="p-4 rounded-full mb-2">
                        <HiShoppingBag className="text-xl"></HiShoppingBag>
                    </div>

                    <h4 className="tracking-tighter">free international shipping</h4>
                    <p className="text-gray-600 text-sm tracking-tighter">On all orders over $100</p>
                </div>


                {/* feature 2 */}
                <div className="flex flex-col items-center">

                    <div className="p-4 rounded-full mb-2">
                        <HiArrowPathRoundedSquare className="text-xl"></HiArrowPathRoundedSquare>
                    </div>

                    <h4 className="tracking-tighter">40 days return</h4>
                    <p className="text-gray-600 text-sm tracking-tighter">Money back guarantee</p>
                </div>


                {/* feature 3 */}
                <div className="flex flex-col items-center">

                    <div className="p-4 rounded-full mb-2">
                        <HiOutlineCreditCard className="text-xl"></HiOutlineCreditCard>
                    </div>

                    <h4 className="tracking-tighter">Secure Transaction</h4>
                    <p className="text-gray-600 text-sm tracking-tighter">Guarantees 100% secure transaction with proper security</p>
                </div>

            </div>
        </section>
    );
};

export default FeaturedSection;