import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { Link } from "react-router";
import { IoChevronUpCircleOutline } from "react-icons/io5";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-blackPrimary/50 backdrop-blur h-48 py-4 px-8 justify-between items-center grid grid-cols-3 gap-4 sm:flex flex-row text-xs sm:text-sm lg:text-lg lg:px-24 mt-4">
      {/* Left Section */}
      <div className="text-left space-y-1 col-start-1">
        <Link to="/" className="hover:text-bluePrimary duration-150 flex flex-row items-center gap-2"><GoHome size={24} className="hidden sm:flex"/>Home</Link>
      </div>

      {/* Middle Section */}
      <div className="flex flex-row gap-2 items-end justify-end col-start-3">
        <a
          href="https://github.com/FrankieFosse"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-bluePrimary duration-150"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/frank-kristian-fosse-a432b3180/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-bluePrimary duration-150"
        >
          <FaLinkedin size={24} />
        </a>
      </div>

      {/* Right Section */}
      <div className="row-start-2 col-start-2 justify-center items-center text-center flex flex-row">
        <button
          onClick={scrollToTop}
          className="hover:text-bluePrimary duration-150 flex flex-row items-center gap-2 cursor-pointer text-center"
        >
          <IoChevronUpCircleOutline size={24} className="hidden sm:flex"/>
          Back to top
        </button>
      </div>
    </div>
  );
}

export default Footer;
