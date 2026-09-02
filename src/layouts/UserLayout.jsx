import { Outlet } from "react-router";
import Header from "../components/user/Header";

const UserLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default UserLayout;
