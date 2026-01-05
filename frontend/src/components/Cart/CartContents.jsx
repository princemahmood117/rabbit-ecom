import { RiDeleteBin3Line } from "react-icons/ri";

const CartContents = () => {
  const cartProducts = [
    {
      productId: 101,
      name: "Classic T-Shirt",
      size: "M",
      color: "Black",
      quantity: 2,
      price: 799,
      image: "https://picsum.photos/200/?random=1",
    },
    {
      productId: 102,
      name: "Denim Jacket",
      size: "L",
      color: "Blue",
      quantity: 1,
      price: 2499,
      image: "https://picsum.photos/200/?random=2",
    },
    {
      productId: 103,
      name: "Running Sneakers",
      size: "42",
      color: "White",
      quantity: 1,
      price: 3599,
      image: "https://picsum.photos/200/?random=3",
    },
    {
      productId: 104,
      name: "Casual Hoodie",
      size: "XL",
      color: "Gray",
      quantity: 3,
      price: 1599,
      image: "https://picsum.photos/200/?random=4",
    },
    {
      productId: 105,
      name: "Leather Wallet",
      size: "One Size",
      color: "Brown",
      quantity: 1,
      price: 999,
      image: "https://picsum.photos/200/?random=5",
    },
  ];

  return <div>
    {
        cartProducts.map((product,index)=> (
            <div key={index} className="flex items-start justify-between py-4 border-b">
                <div className="flex items-start">
                    <img className="w-20 h-24 object-cover mr-4 rounded-md" src={product.image} alt={product.name} />
                    <div>
                        <h3>{product.name}</h3>
                        <p className="text-sm text-gray-500">size : {product.size} | color : {product.color}</p>

                        <div className="flex items-center mt-2 gap-2">
                            <button className="border rounded px-2 text-xl font-medium">-</button>
                            <span className="mx-1">{product.quantity}</span>
                            <button className="border rounded px-2 text-xl font-medium">+</button>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center">
                    <p>${product.price.toLocaleString()}</p>
                    <button className="cursor-pointer"> <RiDeleteBin3Line className="h-5 w-5 mt-2 text-red-400"></RiDeleteBin3Line> </button>
                </div>
            </div>
        ))
    }
  </div>;
};

export default CartContents;
