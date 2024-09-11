import { Outlet } from "react-router-dom";
import SideBar from "../SideBar/SideBar";

export default function Layout() {
  return (
    <>
      <div className="md:bg-secondary-500 md:mt-24 rounded-lg w-[100%] lg:max-w-[85rem]  mx-auto shadow-none md:shadow-2xl ">
        <div className=" md:p-6 md:pe-0  grid grid-cols-1 md:grid-cols-[28%,1fr] lg:min-h-[72dvh] ">
          <SideBar />
          <main className="w-[90%] md:w-[70%] mx-auto mt-36 md:mt-5 shadow-2xl md:shadow-none bg-white md:bg-transparent z-20 py-9 px-7 md:pt-11  md:px-9 md:p-0 rounded-lg ">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
}
