



import  { useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/app/hooks";
import { NavLink } from "react-router-dom";
import { RootState } from "../redux/app/store";
import { logOut } from "../redux/features/auth/authSlice";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const user = useAppSelector((state: RootState) => state.auth.user);
  const token = useAppSelector((state: RootState) => state.auth.token);
  const dispacth = useAppDispatch()

  console.log(user);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#e7e7e7]">
      <div className="container mx-auto  py-6   flex justify-around items-center">
        <div className="text-white text-2xl font-bold">MyLogo</div>
        <div className="hidden md:flex gap-6  ">
          <NavLink to="/" className=" hover:text-gray-500">
            Home
          </NavLink>
          <NavLink to="/" className=" hover:text-gray-500">
            About us
          </NavLink>
          
        </div>
        <div className="flex gap-2">
          {!token ? (
            <>
              <NavLink to="/register">
                <button className=" bg-black text-white px-4 py-2 rounded-md">
                  {" "}
                  Sign up
                </button>
              </NavLink>
              <NavLink to="/login"><button className="bg-[#1010101A] px-4 py-2 rounded-md">
                {" "}
                Sign in
              </button></NavLink>
              
            </>
          ) : (
            <>
              <NavLink to={`/createDoc`}><button className="bg-[#1010101A] px-4 py-2 rounded-md">
                {" "}
                Create Doc
              </button></NavLink>
              <button onClick={ ()=> dispacth( logOut())} className=" bg-black text-white px-4 py-2 rounded-md">
                {" "}
                Logout
              </button>
            </>
          )}
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className=" focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={!isOpen ? "M4 6h16M4 12h16m-7 6h7" : "M6 18L18 6M6 6l12 12"}
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <a href="#" className="block px-4 py-2  hover:text-gray-500">
            Home
          </a>
          <a href="#" className="block px-4 py-2  hover:text-gray-500">
            About
          </a>
          <a href="#" className="block px-4 py-2  hover:text-gray-500">
            Services
          </a>
          <a href="#" className="block px-4 py-2  hover:text-gray-500">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
