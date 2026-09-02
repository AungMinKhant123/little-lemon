const BookingForm = ({
  selectedDate,
  selectedTime,
  availableTimes,
  guestCount,
  occasion,
  formError,
  onDateChange,
  onTimeChange,
  onGuestChange,
  onOccasionChange,
  onSubmit,
}) => {
  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="w-full max-w-xl rounded-[28px] mx-auto bg-secondary-three p-5 shadow-lg shadow-black/5 ring-1 ring-black/5 md:p-8">
      <div className="mb-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-green/80">
          Reservations
        </p>
        <h2 className="mt-2 font-markazi text-5xl text-primary-green">
          Book a table
        </h2>
      </div>

      <form onSubmit={onSubmit} className="grid gap-5" noValidate>
        <div className="grid gap-2">
          <label
            htmlFor="res-date"
            className="text-sm font-semibold text-secondary-four"
          >
            Choose date
          </label>
          <input
            type="date"
            id="res-date"
            min={today}
            required
            value={selectedDate}
            onChange={(event) => onDateChange(event.target.value)}
            className="h-12 rounded-xl border border-[#d9d9d9] bg-white px-3 text-base text-secondary-four outline-none transition focus:border-primary-green focus:ring-2 focus:ring-primary-yellow/50"
          />
        </div>

        <div className="grid gap-2">
          <label
            htmlFor="res-time"
            className="text-sm font-semibold text-secondary-four"
          >
            Choose time
          </label>
          <select
            id="res-time"
            value={selectedTime}
            onChange={(event) => onTimeChange(event.target.value)}
            required
            className="h-12 rounded-xl border border-[#d9d9d9] bg-white px-3 text-base text-secondary-four outline-none transition focus:border-primary-green focus:ring-2 focus:ring-primary-yellow/50"
          >
            <option value="">Select a time</option>
            {availableTimes.length > 0 &&
              availableTimes.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
          </select>
        </div>

        <div className="grid gap-2">
          <label
            htmlFor="guests"
            className="text-sm font-semibold text-secondary-four"
          >
            Number of guests
          </label>
          <input
            type="number"
            placeholder="1"
            min="1"
            max="10"
            id="guests"
            required
            value={guestCount}
            onChange={(event) => onGuestChange(event.target.value)}
            className="h-12 rounded-xl border border-[#d9d9d9] bg-white px-3 text-base text-secondary-four outline-none transition focus:border-primary-green focus:ring-2 focus:ring-primary-yellow/50"
          />
        </div>

        <div className="grid gap-2">
          <label
            htmlFor="occasion"
            className="text-sm font-semibold text-secondary-four"
          >
            Occasion
          </label>
          <select
            id="occasion"
            value={occasion}
            required
            onChange={(event) => onOccasionChange(event.target.value)}
            className="h-12 rounded-xl border border-[#d9d9d9] bg-white px-3 text-base text-secondary-four outline-none transition focus:border-primary-green focus:ring-2 focus:ring-primary-yellow/50"
          >
            <option value="">Select an occasion</option>
            <option>Birthday</option>
            <option>Anniversary</option>
            <option>Business dinner</option>
            <option>Casual meal</option>
          </select>
        </div>

        {formError && (
          <p className="rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
            {formError}
          </p>
        )}

        <button
          type="submit"
          className="mt-2 h-12 rounded-xl bg-primary-yellow font-semibold text-secondary-four transition hover:bg-[#e6c60d] focus:outline-none focus:ring-2 focus:ring-primary-yellow/60"
        >
          Make Your reservation
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
