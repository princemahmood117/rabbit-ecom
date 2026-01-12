import { Link } from "react-router-dom";

const ProductGrid = ({similarProducts}) => {
    console.log("similarProducts", similarProducts);
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {
            similarProducts.map((product, index) => (
                <Link key={index} to={`/product/${product._id}`} className="block">
                    <div className="p-3 relative">
                        <div className="w-full h-96 mb-2">
                            <img src={product.images[0].url} alt={product.name} className="w-full h-full object-cover rounded-tl-xl rounded-br-xl"/>
                        </div>

                        <div className="absolute bottom-8">
                            <h3 className="text-sm">{product.name}</h3>
                            <p>${product.price}</p>
                        </div>
                    </div>
                </Link>
            ))
          }
        </div>
    );
};

export default ProductGrid;