import { Link } from "react-router";
import logo from "/Logo.svg";

const Footer = () => {
  return (
    <footer className="mt-12 bg-primary-green text-white">
      <div className="mx-auto grid w-full max-w-5xl gap-8 px-4 py-10 md:grid-cols-3 md:px-6">
        <div className="flex items-center">
          <img src={logo} alt="Little Lemon" className="h-auto w-28" />
        </div>

        <div>
          <h3 className="mb-3 font-bold uppercase tracking-wide">Navigation</h3>
          <ul className="space-y-2 text-sm text-white/80">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/booking">Reservations</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-3 font-bold uppercase tracking-wide">Contact</h3>
          <ul className="space-y-2 text-sm text-white/80">
            <li>123 Main Street</li>
            <li>Chicago, IL</li>
            <li>(312) 555-0147</li>
            <li>hello@littlelemon.com</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
