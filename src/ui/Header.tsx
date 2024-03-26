import { Link } from "react-router-dom";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IconContext } from "react-icons";

export default function Header() {
  return (
    <div className="flex md:flex-row justify-between items-center border-b mb-2 py-2 border-red-400 flex-col md:gap-0 gap-2">
      <Link
        className="flex flex-row justify-center items-center gap-1"
        to={"/"}
        title="Home Page"
      >
        <img
          src="/icon.jpg"
          alt="elezz_icon"
          className="w-12 h-12 rounded-full"
        />
        <span className="text-2xl font-bold font-['Liberation_Mono']">
          ℯ𝓁ℯ𝓏𝓏 𝓅𝓁𝒶𝓉ℯ
        </span>
      </Link>
      <div className="relative">
        <input
          type="text"
          placeholder="Search Recipe"
          className=" md:w-[30rem] rounded-xl outline-none pl-2 border-2 border-gray-500 py-1 font-semibold w-64 text-md"
        />
        <button
          className="absolute right-[1px] top-0 flex items-center bg-blue-700 rounded-r-xl h-full opacity-80 px-3"
          title="Search"
        >
          <IconContext.Provider
            value={{ style: { color: "white" }, size: "1.2rem" }}
          >
            <FaMagnifyingGlass />
          </IconContext.Provider>
        </button>
      </div>
      <div className="flex gap-2">
        <Link
          to={"/signin"}
          className="py-1 px-2 rounded-xl bg-green-700 text-white hover:bg-blue-700"
          title="sign in"
        >
          Sign in
        </Link>
        <Link
          to={"/signup"}
          className="py-1 px-2 rounded-xl bg-yellow-700 text-white hover:bg-blue-700"
          title="sign up"
        >
          Sign up
        </Link>
      </div>
    </div>
  );
}
