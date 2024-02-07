import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div className="home">
      <Outlet></Outlet>
    </div>
  );
};
export default HomeLayout;
