import { Link } from "react-router";
import restaurantfood from "./../../assets/restauranfood.jpg";

const Home = () => {
  return (
    <>
      <div className="bg-primary-green">
        <div
          className="w-full p-4 md:p-6 lg:mx-auto lg:max-w-5xl flex flex-col gap-4
       lg:flex-row lg:justify-between"
        >
          <div className="flex flex-col gap-2 lg:w-1/3">
            <h1 className="font-medium text-[4rem]/12 font-markazi text-primary-yellow  ">
              Little Lemon
            </h1>
            <h2 className="text-[40px] font-markazi text-white -mt-4">
              Chicago
            </h2>
            <p className="font-karla text-white w-1/2 sm:w-2/3">
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </p>
            <Link
              to="/reservations"
              className="px-8 py-2 text-lg bg-primary-yellow w-fit rounded-2xl"
            >
              Reserve a Table
            </Link>
          </div>
          <div className="lg:w-1/3 lg:h-40">
            <div className="h-90 lg:overflow-hidden">
              <img
                src={restaurantfood}
                alt="restaurant food"
                className="rounded-2xl w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
      <div>hello</div>
    </>
  );
};

export default Home;
