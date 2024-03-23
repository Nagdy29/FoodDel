import { menu_list } from "../../assets/assets";
const ExploerMenu = ({ category, setCategory }) => {
  return (
    <div className=" mx-0 md:mx-20 ">
      <div className="flex  flex-col gap-5 justify-center ">
        <h2 className="font-bold text-[25px] flex md:justify-start justify-center">
          Explore Our menu
        </h2>
        <p className="text-[15px]  flex md:justify-start justify-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus,
          aut?
        </p>
        <div className=" cursor-pointer flex justify-between sm:flex-row flex-col items-center gap-9 text-center m20 menu-list">
          {menu_list.map((item, index) => {
            return (
              <div
                onClick={() =>
                  setCategory((prev) =>
                    prev === item.menu_name ? "all" : item.menu_name
                  )
                }
                key={index}
                className="menu-list-item"
              >
                <img
                  className={category === item.menu_name ? "active" : ""}
                  src={item.menu_image}
                  alt=""
                />
                <p className="text-[#747474] mt-3 "> {item.menu_name} </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ExploerMenu;
