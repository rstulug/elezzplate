import { useNavigate } from "react-router-dom";

export default function EmptyPage() {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center text-2xl flex-col gap-8 h-96">
      <div>We could not find any item to show</div>
      <button
        onClick={() => navigate(-1)}
        className="flex flex-row items-center border border-black text-red-800 px-3 py-1 justify-center  rounded-xl hover:bg-blue-600 hover:text-white text-lg"
      >
        Return Back
      </button>
    </div>
  );
}
