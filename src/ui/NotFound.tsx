import { IconContext } from "react-icons";
import { FaFaceFrown, FaAngleLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className=" min-h-screen text-2xl flex justify-center items-center flex-col gap-5">
      <div>
        <IconContext.Provider value={{ size: "10rem" }}>
          <FaFaceFrown />
        </IconContext.Provider>
      </div>
      <div className=" font-extrabold text-7xl ">404</div>
      <div>Sorry, the page not found</div>
      <Button
        type="submit"
        icon={<FaAngleLeft />}
        style="iconic"
        btnName="Return Back"
        size="large"
        onClick={() => navigate(-1)}
      />
    </div>
  );
}
