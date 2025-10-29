import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <header
      id="header"
      className="absolute top-0 left-0 right-0 z-50 bg-transparent"
    >
      <nav className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <Link to={"/"} className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <FontAwesomeIcon
                icon={["fas", "futbol"]}
                className="text-primary-foreground"
              />
            </div>
            <span className="text-2xl font-bold text-white">
              Radiant Sports
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to={"/"}
              className="text-white hover:text-primary transition-colors duration-300 font-semibold"
            >
              Home
            </Link>
            <Link
              to={"/booking"}
              className="text-white hover:text-primary transition-colors duration-300 font-semibold"
            >
              Booking
            </Link>
            <Link
              to={"/availability"}
              className="text-white hover:text-primary transition-colors duration-300 font-semibold"
            >
              Availability
            </Link>
          </div>

          <button className="md:hidden text-white">
            <i className="text-xl" data-fa-i2svg="">
              <svg
                className="svg-inline--fa fa-bars"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="bars"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                data-fa-i2svg=""
              >
                <path
                  fill="currentColor"
                  d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
                ></path>
              </svg>
            </i>
          </button>
        </div>
      </nav>
    </header>
  );
}
