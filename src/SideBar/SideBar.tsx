import NavItem from "../components/SideBar/NavItem";

export default function SideBar() {
  return (
    <>
      <nav className="bg-sideBar-mobile md:bg-sideBar-desktop md:rounded-lg  bg-cover bg-center p-8 absolute md:static h-[30dvh] w-full md:w-auto md:h-auto ">
        <ul className="mx-auto md:mx-0 flex md:flex-col gap-6 md:gap-12 justify-center">
          <NavItem link="/" step="1">
            your info
          </NavItem>
          <NavItem link="/userplan" step="2">
            select plan
          </NavItem>
          <NavItem link="/useraddons" step="3">
            add-ons
          </NavItem>
          <NavItem link="/summary" step="4">
            summary
          </NavItem>
        </ul>
      </nav>
    </>
  );
}
