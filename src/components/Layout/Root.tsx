import { Outlet } from "react-router-dom";
import Header from "./Header";

const Root = () => {
  
  return (
    <div className="w-full">
      <Header/>


      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Root;
