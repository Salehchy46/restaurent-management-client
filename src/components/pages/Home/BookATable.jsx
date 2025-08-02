import React, { useState } from 'react';
import Swal from 'sweetalert2';

const BookTable = () => {
  const [formData, setFormData] = useState([]);
  const [bookings, setBookings] = useState([]); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setBookings((prev) => [...prev, formData]);

    Swal.fire({
      icon: 'success',
      title: 'Table Booked!',
      text: `Dear ${formData.name}, your booking for ${formData.date} at ${formData.time} is confirmed.`,
      confirmButtonColor: '#ea580c',
    });

    setFormData({
      name: '',
      email: '',
      date: '',
      time: '',
      guests: 1,
    });
  };

  return (
    <div className="hero bg-base-200 py-16 px-4 min-h-screen">
      <div className="card w-full max-w-2xl mx-auto shadow-xl rounded-xl">
        <h2 className="text-4xl font-bold text-center pt-6">
         Book a Table
        </h2>

        <form onSubmit={handleSubmit} className="card-body space-y-5">
          <div>
            <label className=" font-semibold mb-1 block">Name</label>
            <input
              type="text"
              name="name"
              className="input input-bordered w-full focus:border-orange-600"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className=" font-semibold mb-1 block">Email</label>
            <input
              type="email"
              name="email"
              className="input input-bordered w-full focus:border-orange-600"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full">
              <label className=" font-semibold mb-1 block">Date</label>
              <input
                type="date"
                name="date"
                className="input input-bordered w-full focus:border-orange-600"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>
            <div className="w-full">
              <label className=" font-semibold mb-1 block">Time</label>
              <input
                type="time"
                name="time"
                className="input input-bordered w-full focus:border-orange-600"
                value={formData.time}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div>
            <label className=" font-semibold mb-1 block">Guests</label>
            <input
              type="number"
              name="guests"
              className="input input-bordered w-full focus:border-orange-600"
              value={formData.guests}
              onChange={handleChange}
              min="1"
              required
            />
          </div>

          <button
            type="submit"
            className="btn hover:bg-orange-600 font-bold w-full"
          >
            Confirm Booking
          </button>
        </form>
      </div>

      {bookings.length > 0 && (
        <div className="max-w-2xl mx-auto mt-10 bg-white p-5 rounded-xl shadow border border-orange-200">
          <h3 className="text-2xl font-bold mb-3">Bookings</h3>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            {bookings.map((booking, index) => (
              <li key={index}>
                {booking.name} | {booking.date} at {booking.time} | {booking.guests} guests
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default BookTable;
