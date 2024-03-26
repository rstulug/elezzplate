import { IconContext } from "react-icons";
import { FaFaceFrown, FaAngleLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className=" min-h-screen text-2xl flex justify-center items-center flex-col gap-5 bg-stone-400">
      <div>
        <IconContext.Provider value={{ size: "10rem" }}>
          <FaFaceFrown />
        </IconContext.Provider>
      </div>
      <div className=" font-extrabold text-7xl ">404</div>
      <div>Sorry, the page not found</div>
      <button
        className="flex flex-row items-center border border-black text-red-800 px-3 py-1 justify-center  rounded-xl hover:bg-blue-600 hover:text-white text-lg"
        onClick={() => navigate(-1)}
      >
        <IconContext.Provider value={{ size: "1.25rem" }}>
          <FaAngleLeft />
          Return Back
        </IconContext.Provider>
      </button>
    </div>
  );
}
