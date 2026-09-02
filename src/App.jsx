import { Route, Routes } from "react-router";
import UserLayout from "./layouts/UserLayout";
import Home from "./pages/user/Home";
import NotFound from "./pages/user/NotFound";
import About from "./pages/user/About";
import Booking from "./pages/user/Booking";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="booking" element={<Booking />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
