import { Link } from "react-router-dom";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IconContext } from "react-icons";

export default function Header() {
  return (
    <div className="flex md:flex-row justify-between items-center border-b mb-2 py-2 border-red-400 flex-col md:gap-0 gap-2">
      <Link
        className="flex flex-row justify-center items-center gap-1"
        to={"/"}
      >
        <img
          src="/icon.jpg"
          alt="elezz_icon"
          className="w-16 h-16 rounded-full"
        />
        <span className="text-2xl font-bold ">Elezz Plate</span>
      </Link>
      <div className="relative">
        <input
          type="text"
          placeholder="Search Recipes"
          className=" md:w-96 rounded-xl outline-none pl-2 border-2 border-black py-2 font-semibold w-64 text-lg"
        />
        <button className="absolute right-[1px] top-0 flex items-center bg-blue-700 rounded-r-xl h-full opacity-80 px-3">
          <IconContext.Provider
            value={{ style: { color: "white" }, size: "1.2rem" }}
          >
            <FaMagnifyingGlass />
          </IconContext.Provider>
        </button>
      </div>
      <div>Login-Logout</div>
    </div>
  );
}
