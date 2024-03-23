import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";

const Nav = ({ setlogin }) => {
  return (
    <div>
      <div className="navbar  bg-base-100 flex flex-col md:flex-row justify-start md:justify-center items-center  ">
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <div className="flex justify-center">
            <Link to="/">
              <h2 className="text-red-950 md:text-[60px] text-[40px] mx-4">
                Tomato..
              </h2>
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4">
            <a href="#/">Home</a>
            <a href="#menu">Menu</a>
            <a href="#footer">Contact us</a>
          </ul>
        </div>
        <div className="navbar-end flex items-center mx-24 ">
          <div className="flex items-center gap-4">
            <CiSearch size={25} />
            <Link to="/cart">
              <FaShoppingCart size={25} className="cursor-pointer" />
            </Link>
            <button onClick={() => setlogin(true)} className="btn btn-outline ">
              sigin
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
