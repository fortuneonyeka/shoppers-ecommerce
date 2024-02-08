import React,{useMemo} from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((state) => state.shopper.productData);
  console.log(cartItems);
   // Calculate total price using useMemo to avoid unnecessary re-renders
   const totalPrice = useMemo(() => {
    return cartItems.reduce((total, item) => {
      return total + (item.quantity * item.price); // Assuming each item has a 'price' property
    }, 0);
  }, [cartItems]);
  
  return (
    <div>
      <div className="flex flex-col py-12">
       {cartItems.length > 0 && (
        <div className="text-right text-xl font-bold px-12">
          Total Price: ${totalPrice.toFixed(2)}
        </div>
      )}
      <div className="py-4 px-6 grid grid-cols-3 gap-6">
        
        {cartItems && cartItems.length > 0 ?
          (cartItems.map((item) => (
            <div className="max-w-screen-xl mx-auto flex gap-16 hover:scale-95 duration-500">
              
              <div className=" flex gap-6 px-9 rounded-lg relative shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] justify-center items-center">
                <img
                  className="w-[40%] h-[300px] object-fit  "
                  src={item.image}
                  alt=""
                />
                <div className="flex flex-col gap-4">

                <h3 className="text-2xl font-bold">{item.title}</h3>
                <p>{item.description}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Price: ${item.quantity * item.price}</p> {/* Display price for each item */}

                </div>
              </div>
            </div>
          ))): <p className="text-4xl text-center text-gray-500 h-[70vh] flex justify-center items-center">You have no Item in your cart</p>}
      </div>
      </div>
    </div>
  );
};

export default Cart;
