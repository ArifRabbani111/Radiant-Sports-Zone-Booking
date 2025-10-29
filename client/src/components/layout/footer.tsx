import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <footer id="footer" className="bg-black py-12">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <FontAwesomeIcon
                icon={["fas", "futbol"]}
                className="text-primary-foreground"
              />
            </div>
            <span className="text-lg font-bold text-white">Radiant Sports</span>
          </div>

          <div className="flex items-center space-x-6">
            <a
              href="#"
              className="text-gray-400 hover:text-primary transition-colors duration-300"
            >
              <FontAwesomeIcon icon={["fab", "facebook"]} className="text-xl" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-primary transition-colors duration-300"
            >
              <FontAwesomeIcon
                icon={["fab", "instagram"]}
                className="text-xl"
              />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-primary transition-colors duration-300"
            >
              <FontAwesomeIcon icon={["fab", "twitter"]} className="text-xl" />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-500">
            ©{new Date().getFullYear()} Radiant Sports Zone. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
