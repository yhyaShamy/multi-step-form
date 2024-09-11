import { Link, useLocation } from "react-router-dom";
import "./NavItem.module.css";
import { TNavItemProp } from "../../types/sidebar";

export default function NavItem({ link, children, step }: TNavItemProp) {
  const active = useLocation().pathname;
  return (
    <Link to={link}>
      <li className="flex gap-6 items-center">
        <figure
          className={`flex items-center justify-center size-12 font-bold rounded-full ${
            active == link
              ? "bg-primary-400 border-primary-400 text-primary-900"
              : "bg-transparent border border-secondary-500 text-secondary-500"
          } transition-colors duration-500  text-xl`}
        >
          {step}
        </figure>
        <span className="flex-col gap-2 hidden md:flex">
          <span className="text-gray-300/50 font-bold">STEP {step}</span>
          <span className="uppercase text-xl font-bold text-secondary-500">
            {children}
          </span>
        </span>
      </li>
    </Link>
  );
}
