import { useContext } from "react";
import { StoreContext } from "../../context/Storecontext";
import FoodItem from "../fOODitem/FoodItem";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  return (
    <div>
      <div className="my-3">
        <h2 className="my-12 mx-3 font-bold text-[25px] border-b-2 ">
          {" "}
          Top dishes near your :{" "}
        </h2>
        <div
          className="foodDisplayList grid sm:grid-cols-2 md:grid-cols-4
        lg:grid-cols-5 xl:grid-cols-4 gap-5 mx-4 md:mx-14 "
        >
          {food_list.map((item, index) => {
            console.log(category, item.category);
            if (category === "all" || category === item.category) {
              return (
                <FoodItem
                  key={index}
                  id={item._id}
                  name={item.name}
                  description={item.description}
                  image={item.image}
                  price={item.price}
                />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default FoodDisplay;
