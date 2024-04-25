import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";

const Signup = () => {
  return (
    <>
      <div className="flex h-screen items-center  justify-center m-auto">
        <div className=" w-[600px] brounded-md">
          <div className="modal-box">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                to="/"
              >
                {" "}
                ✕
              </Link>
            </form>
            <h3 className="font-bold text-lg">Signup</h3>
            <div className="mt-4 space-y-2 ">
              <span>Username</span>
              <br />
              <input
                type="text"
                placeholder="Enter Your username"
                className="width-80 px-3 border rounded-md outLine-none"
              />
            </div>
            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter Your email"
                className="width-80 px-3 border rounded-md outLine-none"
              />
            </div>
            <div className="mt-4 space-y-2">
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter Your Password"
                className="width-80 px-3 border rounded-md outLine-none"
              />
            </div>
            <div className="flex mt-4 justify-around">
              {" "}
              <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover-pink-700 duration-200">
                Signup
              </button>
              <p className="text-md">
                Have account,{" "}
                <button
                  className="underline text-blue-500 cursor-pointer"
                  onClick={() => {
                    document.getElementById("my_modal_3").showModal();
                  }}
                >
                  Login
                </button>
                <Login />
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
