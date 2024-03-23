import { useState } from "react";
import ExploerMenu from "../compontents/exploermenu/ExploerMenu";
import Header from "../compontents/header/Header";
import FoodDisplay from "../compontents/food display/FoodDisplay";
import AppDown from "../compontents/appDownload/AppDown";

const Home = () => {
  const [category, setCategory] = useState("all");

  return (
    <div>
      <Header />
      <ExploerMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <AppDown />
    </div>
  );
};

export default Home;
