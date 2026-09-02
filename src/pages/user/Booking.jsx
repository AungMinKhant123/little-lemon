import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import BookingForm from "../../components/user/BookingForm";
import { fetchAPI, submitAPI } from "../../api";

const Booking = () => {
  const today = new Date().toISOString().split("T")[0];
  const [selectedDate, setSelectedDate] = useState(today);
  const [selectedTime, setSelectedTime] = useState("");
  const [availableTimes, setAvailableTimes] = useState([]);
  const [guestCount, setGuestCount] = useState("2");
  const [occasion, setOccasion] = useState("Birthday");
  const [formError, setFormError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (!selectedDate) {
      setAvailableTimes([]);
      setSelectedTime("");
      return;
    }

    const nextAvailableTimes = fetchAPI(new Date(`${selectedDate}T12:00:00`));
    setAvailableTimes(nextAvailableTimes);
    setSelectedTime((currentTime) =>
      nextAvailableTimes.includes(currentTime)
        ? currentTime
        : (nextAvailableTimes[0] ?? ""),
    );
  }, [selectedDate]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const guests = Number(guestCount);

    if (!selectedDate) {
      setFormError("Please choose a reservation date.");
      return;
    }

    if (!selectedTime) {
      setFormError("Please choose an available time.");
      return;
    }

    if (!Number.isInteger(guests) || guests < 1 || guests > 10) {
      setFormError("Guest count must be between 1 and 10.");
      return;
    }

    if (!occasion) {
      setFormError("Please select an occasion.");
      return;
    }

    const formData = {
      date: selectedDate,
      time: selectedTime,
      guests,
      occasion,
    };

    const isSubmitted = submitAPI(formData);

    if (!isSubmitted) {
      setFormError(
        "Something went wrong while submitting the reservation. Please try again.",
      );
      return;
    }

    setFormError("");
    navigate("/booking-confirmation", { state: formData });
  };

  return (
    <div
      className="w-full p-4 md:p-6 lg:mx-auto lg:max-w-5xl flex flex-col gap-4
       lg:flex-row lg:justify-between"
    >
      <BookingForm
        selectedDate={selectedDate}
        selectedTime={selectedTime}
        availableTimes={availableTimes}
        guestCount={guestCount}
        occasion={occasion}
        formError={formError}
        onDateChange={setSelectedDate}
        onTimeChange={setSelectedTime}
        onGuestChange={setGuestCount}
        onOccasionChange={setOccasion}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default Booking;
