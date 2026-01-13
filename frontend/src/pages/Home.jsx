import Hero from "../components/Layout/Hero/Hero";
import FeaturedCollection from "../components/Products/FeaturedCollection";
import GenderCollectionSection from "../components/Products/GenderCollectionSection";
import NewArrivals from "../components/Products/NewArrivals";
import ProductDetails from "../components/Products/ProductDetails";
import ProductGrid from "../components/Products/ProductGrid";


const placeholderProducts = [
     {
    _id: 1,
    name: "Classic Cotton T-Shirt",
    price: 1299,
    images: [
      { url: "https://picsum.photos/500/500?random=1" },     
    ],
  },
  {
    _id: 2,
    name: "Slim Fit Denim Jeans",
    price: 2499,
    images: [
      { url: "https://picsum.photos/500/500?random=2" },   
    ],
  },
  {
    _id: 3,
    name: "Casual Sneakers",
    price: 3499,
    images: [
      { url: "https://picsum.photos/500/500?random=3" },   
    ],
  },
  {
    _id: 4,
    name: "Leather Backpack",
    price: 4599,
    images: [
      { url: "https://picsum.photos/500/500?random=4" },
    ],
  },
  {
    _id: 5,
    name: "Leather Belt",
    price: 299,
    images: [
      { url: "https://picsum.photos/500/500?random=5" },
    ],
  },
  {
    _id: 6,
    name: "Denim Jacket",
    price: 1989,
    images: [
      { url: "https://picsum.photos/500/500?random=6" },
    ],
  },
]


const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <GenderCollectionSection></GenderCollectionSection>
            <NewArrivals></NewArrivals>

            {/* best seller section */}
            <h2 className="text-3xl text-center font-bold mb-4">Best Seller</h2>
            <ProductDetails></ProductDetails>

            {/* women wear */}
            <div className="container mx-auto max-w-7xl px-2 mb-4">
                <h2 className="text-3xl text-center font-bold mt-20 mb-4">Top Weares For Women</h2>
                <ProductGrid similarProducts={placeholderProducts}></ProductGrid>
            </div>

            <FeaturedCollection></FeaturedCollection>

        </div>
    );
};

export default Home;