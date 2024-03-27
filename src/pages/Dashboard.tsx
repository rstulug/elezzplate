import { Outlet, useOutlet } from "react-router-dom";
import Header from "../ui/Header";
import MainPage from "../features/dashboard/MainPage";
import Footer from "../ui/Footer";

export default function Dashboard() {
  const outlet = useOutlet();
  return (
    <div className="bg-gray-300 relative">
      <div className="flex max-w-screen-xl mx-auto flex-col min-h-screen font-['Monaco'] ">
        <div>
          <Header />
        </div>
        <div className=" pb-14">{outlet ? <Outlet /> : <MainPage />}</div>
        <div className="fixed bottom-0 left-0 flex justify-center items-center w-full text-lg">
          <Footer />
        </div>
      </div>
    </div>
  );
}
