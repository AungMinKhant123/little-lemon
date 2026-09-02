import { Link } from "react-router";
import restaurantfood from "./../../assets/restauranfood.jpg";
import bruchetta from "./../../assets/bruchetta.svg";
import greeksalad from "./../../assets/greek salad.jpg";
import lemondessert from "./../../assets/lemon dessert.jpg";
import SpecialCard from "../../components/user/SpecialCard";

const Home = () => {
  const specials = [
    {
      name: "Greek salad",
      price: "$ 12.99",
      image: greeksalad,
      description:
        "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    },
    {
      name: "Bruschetta",
      price: "$ 5.99",
      image: bruchetta,
      description:
        "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    },
    {
      name: "Lemon Dessert",
      price: "$ 5.00",
      image: lemondessert,
      description:
        "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    },
  ];

  return (
    <>
      <meta
        name="description"
        content="Little Lemon is a family-owned Mediterranean restaurant in Chicago specializing in traditional recipes with a modern twist."
      />
      <meta name="og:title" content="Little Lemon" />
      <meta
        name="og:description"
        content="Craving authentic Mediterranean flavors? Check out our fresh seasonal menu and reserve your table today!"
      />
      <meta name="og:image" content="" />

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
              to="/booking"
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
      <section
        id="menu"
        className="w-full p-4 md:p-6 lg:mx-auto lg:max-w-5xl flex flex-col gap-4
       lg:flex-row lg:justify-between lg:pt-26"
      >
        <div className="mx-auto max-w-5xl">
          <div className="mb-9 flex items-center justify-between">
            <h2 className="font-serif text-[36px] font-bold tracking-wide text-[#202020]">
              This weeks specials!
            </h2>

            <button className="rounded-xl bg-primary-yellow px-8 py-3 text-[13px] font-bold tracking-wide text-black">
              Online Menu
            </button>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {specials.map((item) => (
              <SpecialCard key={item.name} item={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
