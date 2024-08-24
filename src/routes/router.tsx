import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import ErrorPage from "../components/Error/ErrorPage";
import Register from "../components/Register/Register";
import Login from "../components/Login/Login";
import EditDocument from "../components/EditDocument/EditDocument";
import RootLayout from "../components/RootLayout/RootLayout";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import CreateDoc from "../components/CreateDoc/CreateDoc";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,

    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/document/:docId",
        element: (
          <PrivateRoute>
            <EditDocument />
          </PrivateRoute>
        ),
      },
      {
        path: "/createDoc",
        element: (
          <PrivateRoute>
            <CreateDoc />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
