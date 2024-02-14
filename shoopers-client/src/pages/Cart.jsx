import React, { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrementItem, deleteItem, resetCart, incrementItem } from "../features/shopperSlice";
import { MdDeleteForever } from "react-icons/md";
import { RxReset } from "react-icons/rx";
import emptyCart from "../assets/empty-cart.avif"

const Cart = () => {
  const cartItems = useSelector((state) => state.shopper.productData);
  const dispatch = useDispatch();

  // Calculate total price using useMemo to avoid unnecessary re-renders
  const totalPrice = useMemo(() => {
    return cartItems.reduce((total, item) => {
      return total + item.quantity * item.price; // Assuming each item has a 'price' property
    }, 0);
  }, [cartItems]);

  return (
    <div className="h-full py-4">
      <div className="flex flex-col">
        {cartItems.length > 0 && (
          <div className="flex justify-end px-6 items-center">
          <div className="text-xl font-bold px-12 flex gap-4 justify-end  py-6">
            <p>Total Price: ${totalPrice.toFixed(2)}</p>
            <div onClick={() => dispatch(resetCart())} className="text-red-300 cursor-pointer relative group">
              <RxReset />
              <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute bottom-6 right-0 text-xs text-red-500">
                clear cart
              </p>
            </div>
          </div>
          
          <button className=" text-white bg-black h-12 rounded-lg hover:bg-green-400 hover:text-black hover:capitalize hover:shadow-[5px_5px_0px_0px_rgba(109,40,217)] w-[200px]">check out</button>
          </div>
        )}
        <div className="py-4 px-6 grid grid-cols-3 gap-6">
          {cartItems && cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div
                key={item._id}
                className="max-w-screen-xl mx-auto flex gap-16 hover:scale-95 duration-500 relative hover:shadow-[5px_5px_0px_0px_rgba(109,40,217)] hover:rounded-lg "
              >
                <div className="flex gap-6 px-9 rounded-lg relative shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] justify-center items-center">
                  <img
                    className="w-[40%] h-[300px] object-fit"
                    src={item.image}
                    alt=""
                  />
                  <div className="flex flex-col gap-4 py-4">
                    <h3 className="text- xl font-bold pt-4">{item.title}</h3>
                    <p>{item.description}</p>
                    <p>Quantity: {item.quantity}</p>
                    <p>Price: ${item.quantity * item.price}</p>
                  </div>

                  <p onClick={() => dispatch(decrementItem({ _id: item._id }))} className="absolute left-2 top-2 text-2xl cursor-pointer">-</p>
                  <p onClick={() => dispatch(incrementItem({ _id: item._id }))} className="absolute left-8 top-2 text-2xl cursor-pointer">+</p>
                  
                  <p
                    onClick={() => dispatch(deleteItem(item._id))}
                    className="absolute top-0 right-2 p-4 text-2xl cursor-pointer text-red-300"
                  >
                    <MdDeleteForever />
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div className="flex flex-col text-red-300 border-4 w-full h-[100vh] items-center">
              <p className="text-4xl  flex justify-center text-center">
                You have no Item in your cart
              </p>
              <img className="w-[800px] h-[800px]" src={emptyCart} alt="empty Cart" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
