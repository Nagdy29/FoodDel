import { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/Storecontext";

const FoodItem = ({ id, name, price, description, image }) => {
  const [itemcount, setItemcount] = useState(0);
  const { addcart, removecart, cartItem, setcartItem } =
    useContext(StoreContext);
  return (
    <div
      className="w-full m-auto rounded-lg shadow-md transition-[0.3s] animate-[fadIn 1s]"
      id="menu"
    >
      <div className="food-item-image">
        <img className="rounded-lg w-full" src={image} alt="" />
        {!cartItem[id] ? (
          <img
            className="add my-3 mx-2 bg-white"
            src={assets.add_icon_white}
            onClick={() => addcart(id)}
          />
        ) : (
          <div className="flex bg-white rounded-full  items-center justify-center mx-1 my-3 gap-3">
            <img
              src={assets.remove_icon_red}
              onClick={() => removecart(id)}
              alt=""
            />
            <p>{cartItem[id]}</p>
            <img
              src={assets.add_icon_green}
              onClick={() => addcart(id)}
              alt=""
            />
          </div>
        )}
      </div>
      <div className="foodItemInfo">
        <div className="foodItemname  mx-2 flex justify-between items-center pt-3  ">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="font-mono my-2"> {description} </p>
        <p className="my-2 font-bold text-red-800 text-[20px] mx-3">
          {" "}
          ${price}{" "}
        </p>
      </div>
    </div>
  );
};

export default FoodItem;
