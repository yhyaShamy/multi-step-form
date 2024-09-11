import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserInfo from "./pages/UserInfo";
import Layout from "./layout/Layout";
import UserPlan from "./pages/UserPlan";
import { PlansProvider } from "./context/plans";
import UserAddOns from "./pages/UserAddOns";
import AddOnsProvider from "./context/useAddOns";
import Summary from "./pages/Summary";
import ThankYou from "./pages/ThankYou";

const route = createBrowserRouter([
  {
    element: (
      <PlansProvider>
        <AddOnsProvider>
          <Layout />
        </AddOnsProvider>
      </PlansProvider>
    ),
    path: "",
    children: [
      {
        element: <UserInfo />,
        path: "/",
      },
      {
        element: <UserPlan />,
        path: "/userplan",
      },
      {
        element: <UserAddOns />,
        path: "/useraddons",
      },
      {
        element: <Summary />,
        path: "/summary",
      },
      {
        element: <ThankYou />,
        path: "/thankyou",
      },
    ],
  },
]);

export default function App() {
  return (
    <>
      <body className="bg-secondary-700 overflow-auto min-h-[98dvh] md:min-h-[100dvh] ">
        <RouterProvider router={route} />
      </body>
    </>
  );
}
