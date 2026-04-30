
import { Link } from "react-router-dom";

const ProductGrid = ({ similarProducts }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {similarProducts.map((product) => (
        <Link
          key={product._id}
          to={`/product/${product._id}`}
          className="block"
        >
          <div className="relative overflow-hidden rounded-tl-xl rounded-br-xl">
            <img
              src={product.images[0].url}
              alt={product.name}
              className="w-full h-96 object-cover"/>

            <div className="absolute bottom-0 left-0 w-full bg-black/40 backdrop-blur-sm p-4">
              <h3 className="text-sm text-white mb-1">
                {product.name}
              </h3>
              <p className="text-sm text-white tracking-tighter">
                $ {product.price}
              </p>
            </div>

          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductGrid;
