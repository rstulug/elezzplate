import { Outlet, useOutlet } from "react-router-dom";
import Header from "../ui/Header";

export default function Dashboard() {
  const outlet = useOutlet();
  return (
    <div className="bg-stone-400">
      <div className="flex max-w-screen-xl mx-auto flex-col min-h-screen font-['Monaco'] ">
        <div>
          <Header />
        </div>
        <div>{outlet ? <Outlet /> : <div>Main page</div>}</div>
        <div>Footer</div>
      </div>
    </div>
  );
}
