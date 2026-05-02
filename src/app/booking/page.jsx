"use client";

import { useState } from "react";
import { toast } from "react-toastify";

const BookingPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Booking submitted successfully!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white p-8 rounded-2xl shadow-lg space-y-4"
      >
        <h1 className="text-3xl font-bold text-center">Booking Form</h1>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Your Phone"
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
          required
        />

        <textarea
          name="address"
          placeholder="Your Address"
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
          rows="4"
          required
        />

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-3 rounded-xl"
        >
          Submit Booking
        </button>
      </form>
    </div>
  );
};

export default BookingPage;