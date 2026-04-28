import { useEffect, useState } from "react";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      const mockOrders = [
        {
          _id: "1001",
          createdAt: "2026-04-28T10:30:00Z",
          shippingAddress: {
            city: "New York",
            country: "USA",
          },
          orderItems: [
            {
              name: "Laptop",
              image: "https://picsum.photos/500/500?random=1",
            },
            {
              name: "Mouse",
              image: "mouse.jpg",
            },
          ],
          totalPrice: 1200,
          isPaid: true,
        },
        {
          _id: "1002",
          createdAt: "2026-04-27T14:15:00Z",
          shippingAddress: {
            city: "London",
            country: "UK",
          },
          orderItems: [
            {
              name: "Keyboard",
              image: "https://picsum.photos/500/500?random=2",
            },
          ],
          totalPrice: 150,
          isPaid: false,
        },
      ];

      setOrders(mockOrders);
    }, 1000);
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-2 sm:p-2">
        <h1 className="font-bold mb-4">My Orders</h1>
        <div className="relative shadow-md sm:rounded-lg overflow-x-scroll">

            <table className="min-w-full text-left text-gray-600">
            <thead className="bg-gray-50 text-xs uppercase text-gray-800">
                <tr>
                    <th className="py-2 px-3 sm:py-3">Image</th>
                    <th className="py-2 px-2 sm:py-3">Order Id</th>
                    <th className="py-2 px-2 sm:py-3">Created At</th>
                    <th className="py-2 px-2 sm:py-3">Shipping Address</th>
                    <th className="py-2 px-2 sm:py-3">Items</th>
                    <th className="py-2 px-2 sm:py-3">Price</th>
                    <th className="py-2 px-2 sm:py-3">Status</th>
                </tr>
            </thead>

            <tbody>
              {
                orders.length > 0 ? (
                  orders.map((order) => (
                    <tr key={order._id} className="border-b hover:bg-gray-50">
                      <td className="p-2">
                        <img className="w-10 h-10 sm:w-12 sm:h-12 object-cover rounded-lg" src={order?.orderItems[0].image} alt={order?.orderItems[0].name} />
                      </td>

                      <td className="p-2 text-gray-700 font-medium whitespace-nowrap text-xs">
                        #{order._id}
                      </td>

                      <td className="p-2 text-gray-700 font-medium whitespace-nowrap text-xs">
                        {new Date(order.createdAt).toLocaleDateString()}{" "}
                        {new Date(order.createdAt).toLocaleTimeString()}
                      </td>

                      <td className="p-2 text-gray-700 font-medium whitespace-nowrap text-xs">
                        {order.shippingAddress ? `${order.shippingAddress.city}, ${order.shippingAddress.country}` : "N/A"}
                      </td>

                      <td className="p-2 text-gray-700 font-medium whitespace-nowrap text-xs">
                        {order.orderItems.length}
                      </td>

                      <td className="p-2 text-gray-700 font-medium whitespace-nowrap text-xs">
                        &{order.totalPrice}
                      </td>

                      <td className="p-2 text-gray-700 font-medium whitespace-nowrap text-xs">
                        <span className={`p-2 rounded-lg ${order.isPaid ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>{order.isPaid ? "Paid" :  "Due"}</span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={7} className="py-2 px-2 text-center text-gray-600">
                      No Orders Yet
                    </td>
                  </tr>
                )
              }
            </tbody>
            </table>

        </div>
    </div>
  );
};

export default MyOrders;
