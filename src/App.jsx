import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import React from "react";
import "../src/Styles/App.scss";
import "../src/Styles/App._variables.scss";
import "../src/Styles/App.media.scss";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import ControlContextProvider from "./Components/Context/ControlContext";
import UserInfo from "./Components/UserInfo/UserInfo";
import { Toaster } from "react-hot-toast";
import AuthContextProvider from "./Components/Context/AuthContext";
import ProtectingReact from "./Components/ProtectionReact/Protectionreact";
import UserPlan from "./Components/UserPlan/UserPlan";
import PlansContextProvider from "./Components/Context/plansContext";
import UserAddOns from "./Components/UserAddOns/UserAddOns";
import Summary from "./Components/Summary/Summary";
import ThankYou from "./Components/ThankYou/ThankYou";

const myRoute = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "userinfo",
        element: <UserInfo />,
      },
      {
        index: true,
        element: <UserInfo />,
      },
      ,
      {
        path: "userplan",
        element: (
          <ProtectingReact>
            <UserPlan />
          </ProtectingReact>
        ),
      },
      {
        path: "useraddons",
        element: (
          <ProtectingReact>
            <UserAddOns />
          </ProtectingReact>
        ),
      },
      {
        path: "summary",
        element: (
          <ProtectingReact>
            <Summary />
          </ProtectingReact>
        ),
      },
      {
        path: "thankYou",
        element: (
          <ProtectingReact>
            <ThankYou />
          </ProtectingReact>
        ),
      },
    ],
  },
]);
export default function App() {
  return (
    <>
      <PlansContextProvider>
        <AuthContextProvider>
          <ControlContextProvider>
            <RouterProvider router={myRoute} />
            <Toaster />
          </ControlContextProvider>
        </AuthContextProvider>
      </PlansContextProvider>
    </>
  );
}
