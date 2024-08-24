import { ChangeEvent, SyntheticEvent, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { authApi } from "../redux/api/authApi";
import { useAppDispatch } from "../redux/app/hooks";
import { setToken, setUser } from "../redux/features/auth/authSlice";
import Button from "../../shared/Button";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const location = useLocation();
  const pathName = location.state?.pathName || "/";
  const [login] = authApi.useLoginMutation();
  const dispacth = useAppDispatch();
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    // Add form submission logic here
    const res = await login(formData).unwrap();
    console.log(res);

    if (res.statusCode == 200) {
      Swal.fire("Successfully login", "", "success");
      console.log(res);
      dispacth(
        setUser({
          email: res.data._doc.email,
          userId: res.data._doc._id,
          username: res.data._doc._id,
        })
      );

      dispacth(setToken(res.data.token));
      navigate(pathName, { replace: true });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          Login
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
              placeholder="Enter your email or username"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex items-center justify-between">
            <Button
              type="submit"
              styles="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
              label="Login"
            />
          </div>
          <div className="mt-6 flex justify-between">
            <p className="font-bold text-blue-800">
              <NavLink to={`/`}>
                <span className="text-xl">&#8592;</span> Back to home{" "}
              </NavLink>{" "}
            </p>
            <p className="">
              New here ?
              <NavLink to={`/register`} state={{ pathName: pathName} }>
                <Button label="register" styles="text-blue-600" />
              </NavLink>{" "}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
