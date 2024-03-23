import { Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./compontents/navbar/Nav";
import Home from "./pages/Home";
import Order from "./pages/Order";
import Cart from "./pages/Cart";
import Footer from "./compontents/footer/Footer";
import LoginPop from "./compontents/LoginPop/LoginPop";
import { useState } from "react";

function App() {
  const [login, setlogin] = useState(false);
  return (
    <>
      {login ? <LoginPop setlogin={setlogin} /> : <></>}
      <div>
        <Nav setlogin={setlogin} />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/order" element={<Order />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
