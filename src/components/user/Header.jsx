import { Link, NavLink } from "react-router";
import logo from "/Logo.svg";

const Header = () => {
  const navLinks = [
    {
      name: "Home",
      path: "/",
      isEnd: true,
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Menu",
      path: "/menu",
    },
    {
      name: "Reservations",
      path: "/booking",
    },
    {
      name: "Order Online",
      path: "/order-online",
    },
    {
      name: "Login",
      path: "/login",
    },
  ];

  return (
    <header className="my-3 flex w-full items-center justify-between gap-4 px-4 font-karla font-medium text-base sm:my-4 sm:text-lg md:px-6 lg:mx-auto lg:max-w-5xl">
      <Link to="/" className="shrink-0">
        <img src={logo} alt="Little Lemon" className="h-auto w-28 sm:w-48" />
      </Link>

      <nav className="max-w-full overflow-x-auto">
        <ul className="flex min-w-max items-center gap-3 whitespace-nowrap sm:gap-4">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                end={link.isEnd}
                className="block px-1 py-2 transition-colors hover:text-yellow-500"
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
