import React, { useState } from "react";
import { assets } from "../../assets/assets";

const LoginPop = ({ setlogin }) => {
  const [currState, setcurState] = useState("login");
  return (
    <>
      <div className="absolute z-10 w-full h-full  bg-[#00000090] grid">
        <div className="place-self-center flex gap-5">
          <form>
            <div>
              <div class="card px-8 py-6 rounded-lg bg-gray-800 w-72">
                <div className="flex   justify-between">
                  <h1 class="text-center font-bold text-3xl text-white">
                    <h2> {currState} </h2>
                  </h1>
                  <img
                    src={assets.cross_icon}
                    onClick={() => setlogin(false)}
                    alt=""
                    className="z-20 cursor-pointer  h-8 text-white "
                  />
                </div>

                <form class="my-6">
                  {currState === "login" ? (
                    <></>
                  ) : (
                    <input
                      class="p-2 my-2 rounded w-[100%] focus:outline-blue-600"
                      placeholder="Name"
                      type="text"
                    />
                  )}

                  <input
                    class="p-2 my-2 rounded w-[100%] focus:outline-blue-600"
                    placeholder="Email"
                    type="email"
                  />
                  <input
                    class="p-2 my-2 rounded w-[100%] focus:outline-blue-600"
                    placeholder="Password"
                    type="password"
                  />
                  <button class="bg-blue-600 hover:bg-blue-500 text-white font-semibold p-2 mt-3 rounded w-[100%]">
                    {currState === "SignUp" ? "create a new account" : "Login"}
                  </button>
                  <div className="text-white cursor-pointer my-4">
                    {currState === "SignUp" ? (
                      <p className="w-52">
                        Already have an account{" "}
                        <span
                          className="text-red-900 cursor-pointer"
                          onClick={() => setcurState("login")}
                        >
                          {" "}
                          Login Here
                        </span>
                      </p>
                    ) : (
                      <p className="w-64">
                        Create a New account{" "}
                        <span
                          className="text-red-900 cursor-pointer"
                          onClick={() => setcurState("SignUp")}
                        >
                          {" "}
                          Click Here
                        </span>
                      </p>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPop;
