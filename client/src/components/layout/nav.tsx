export default function NavBar() {
  return (
    <header
      id="header"
      className="absolute top-0 left-0 right-0 z-50 bg-transparent"
    >
      <nav className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-electric-green rounded-lg flex items-center justify-center">
              <i className="text-navy-blue text-xl" data-fa-i2svg="">
                <svg
                  className="svg-inline--fa fa-futbol"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="futbol"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  data-fa-i2svg=""
                >
                  <path
                    fill="currentColor"
                    d="M417.3 360.1l-71.6-4.8c-5.2-.3-10.3 1.1-14.5 4.2s-7.2 7.4-8.4 12.5l-17.6 69.6C289.5 445.8 273 448 256 448s-33.5-2.2-49.2-6.4L189.2 372c-1.3-5-4.3-9.4-8.4-12.5s-9.3-4.5-14.5-4.2l-71.6 4.8c-17.6-27.2-28.5-59.2-30.4-93.6L125 228.3c4.4-2.8 7.6-7 9.2-11.9s1.4-10.2-.5-15l-26.7-66.6C128 109.2 155.3 89 186.7 76.9l55.2 46c4 3.3 9 5.1 14.1 5.1s10.2-1.8 14.1-5.1l55.2-46c31.3 12.1 58.7 32.3 79.6 57.9l-26.7 66.6c-1.9 4.8-2.1 10.1-.5 15s4.9 9.1 9.2 11.9l60.7 38.2c-1.9 34.4-12.8 66.4-30.4 93.6zM256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm14.1-325.7c-8.4-6.1-19.8-6.1-28.2 0L194 221c-8.4 6.1-11.9 16.9-8.7 26.8l18.3 56.3c3.2 9.9 12.4 16.6 22.8 16.6h59.2c10.4 0 19.6-6.7 22.8-16.6l18.3-56.3c3.2-9.9-.3-20.7-8.7-26.8l-47.9-34.8z"
                  ></path>
                </svg>
              </i>
            </div>
            <span className="text-2xl font-bold text-white">
              Radiant Sports
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-white hover:text-electric-green transition-colors duration-300 font-semibold"
            >
              Home
            </a>
            <a
              href="#"
              className="text-white hover:text-electric-green transition-colors duration-300 font-semibold"
            >
              Booking
            </a>
            <a
              href="#"
              className="text-white hover:text-electric-green transition-colors duration-300 font-semibold"
            >
              Availability
            </a>
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
