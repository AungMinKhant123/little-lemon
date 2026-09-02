import { Link, useLocation } from "react-router";

const BookingConfirmation = () => {
  const { state } = useLocation();
  const reservation = state ?? {};

  return (
    <div className="w-full px-4 py-12 md:px-6 lg:mx-auto lg:max-w-5xl">
      <div className="mx-auto max-w-2xl rounded-[28px] bg-secondary-three p-6 shadow-lg shadow-black/5 ring-1 ring-black/5 md:p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-green/80">
          Reservation confirmed
        </p>
        <h2 className="mt-3 font-markazi text-5xl text-primary-green">
          Your table is booked
        </h2>

        <div className="mt-6 space-y-3 text-base text-secondary-four">
          <p>
            <span className="font-semibold">Date:</span>{" "}
            {reservation.date || "Not selected"}
          </p>
          <p>
            <span className="font-semibold">Time:</span>{" "}
            {reservation.time || "Not selected"}
          </p>
          <p>
            <span className="font-semibold">Guests:</span>{" "}
            {reservation.guests || 1}
          </p>
          <p>
            <span className="font-semibold">Occasion:</span>{" "}
            {reservation.occasion || "Casual meal"}
          </p>
        </div>

        <div className="mt-8 flex gap-3">
          <Link
            to="/booking"
            className="rounded-xl bg-primary-yellow px-6 py-3 font-semibold text-secondary-four transition hover:bg-[#e6c60d]"
          >
            Book another table
          </Link>
          <Link
            to="/"
            className="rounded-xl border border-primary-green px-6 py-3 font-semibold text-primary-green transition hover:bg-primary-green hover:text-white"
          >
            Back home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmation;
