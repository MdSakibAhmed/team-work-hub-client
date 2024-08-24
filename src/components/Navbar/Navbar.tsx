import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/app/hooks";
import { NavLink } from "react-router-dom";
import { RootState } from "../redux/app/store";
import { logOut } from "../redux/features/auth/authSlice";
import Button from "../../shared/Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const user = useAppSelector((state: RootState) => state.auth.user);
  const token = useAppSelector((state: RootState) => state.auth.token);
  const dispacth = useAppDispatch();

  console.log(user)
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-400">
      <div className="container mx-auto py-6  flex justify-around items-center">
        <div className="text-white text-2xl font-bold ml-3">Team Work Hub</div>
        <div className="hidden md:flex gap-6  ">
          <NavLink to="/" className=" hover:text-gray-800 bg-blue-800 text-white p-2 px-4 rounded mt-2">
            Home
          </NavLink>
        </div>
        <div className="flex gap-2">
          {!token ? (
            <>
              <NavLink to="/register">
                <Button
                  label="Sign up"
                  styles="bg-blue-600 font-bold text-white px-4 py-2 rounded-md"
                />
              </NavLink>
              <NavLink to="/login">
                <Button
                  label="Sign in"
                  styles=" bg-blue-800 text-white font-bold px-4 py-2 rounded-md"
                />
              </NavLink>
            </>
          ) : (
            <>
              <NavLink to={`/createDoc`}>
                <Button
                  label="Create Doc"
                  styles=" bg-blue-900 text-white font-bold px-4 py-2 rounded-md"
                />
              </NavLink>

              <Button
                onClick={() => dispacth(logOut())}
                label="Logout"
                styles=" bg-red-600 text-white  px-4 py-2 rounded-md"
              />
            </>
          )}
        </div>
        <div className="md:hidden  ">
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
          <NavLink to="/" className="block px-4 py-2  hover:text-gray-500">
            Home
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
