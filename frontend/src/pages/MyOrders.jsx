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
              image: "laptop.jpg",
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
              image: "keyboard.jpg",
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
        <div className="relative shadow-md sm:rounded-lg overflow-hidden">

            <table className="min-w-full text-left text-gray-600">
            <thead className="bg-gray-50 text-xs uppercase text-gray-800">
                <tr>
                    <th className="py-2 px-4 sm:py-3">Image</th>
                    <th className="py-2 px-4 sm:py-3">Order Id</th>
                    <th className="py-2 px-4 sm:py-3">Created</th>
                    <th className="py-2 px-4 sm:py-3">Shipping Address</th>
                    <th className="py-2 px-4 sm:py-3">Items</th>
                    <th className="py-2 px-4 sm:py-3">Price</th>
                    <th className="py-2 px-4 sm:py-3">Status</th>
                </tr>

            </thead>
            </table>

        </div>
    </div>
  );
};

export default MyOrders;
