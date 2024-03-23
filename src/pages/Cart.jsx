import { useContext } from "react";
import { StoreContext } from "../context/Storecontext";
const Cart = () => {
  const { removecart, cartItem, food_list } = useContext(StoreContext);
  return (
    <>
      <div className="cart mt-8 mx-14">
        <div className="cart-tem">
          <div className="cart-item-title ml-20 grid items-center text-gray-500 grid-flow-col  ">
            <p>Item</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
          <br />
          <hr />
          <div>
            {food_list.map((item, index) => {
              if (cartItem[item._id] > 0) {
                return (
                  <div className="  mt-3  cart-item-title grid items-center text-black  grid-flow-col  ">
                    <img src={item.image} alt="" className="w-[100px]" />
                    <p> {item.name} </p>
                    <p> ${item.price} </p>
                    <p> {cartItem[item._id]} </p>
                    <p> {item.price * cartItem[item._id]} </p>
                    <p
                      className="text-[40px] cursor-pointer text-red-700 font-bold"
                      onClick={() => removecart(item._id)}
                    >
                      <button
                        title="Add New"
                        class="group cursor-pointer outline-none hover:rotate-90 duration-300"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="50px"
                          height="50px"
                          viewBox="0 0 24 24"
                          class="stroke-red-400 fill-none group-hover:fill-red-800 group-active:stroke-red-200 group-active:fill-red-600 group-active:duration-0 duration-300"
                        >
                          <path
                            d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                            stroke-width="1.5"
                          ></path>
                          <path d="M8 12H16" stroke-width="1.5"></path>
                          <path d="M12 16V8" stroke-width="1.5"></path>
                        </svg>
                      </button>
                    </p>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
