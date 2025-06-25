import React, { useState } from "react";
import call from '../assets/Images/icons/phone.jpeg';
import location from '../assets/Images/icons/location.jpeg';
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:4000/clients", {
        name,
        phone,
        email,
        subject,
        message,
      });

      toast.success(res.data.message || "Submitted successfully!");
      setName("");
      setPhone("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (error) {
      toast.error("Submission failed. Try again.");
    }
  };

  return (
    <div className="w-full pt-[100px] p-4 bg-[#0a001f]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-evenly items-start gap-10 p-4 md:p-10">
        {/* Left Section */}
        <div className="flex flex-col gap-8 w-full md:w-1/2">
          <h2 className="text-white text-3xl md:text-4xl font-semibold">JOIN US</h2>
          <p className="text-slate-300 text-sm md:text-md">
            Our deep pool of certified engineers and IT staff are ready to help
            you to keep your IT business safe & ensure high availability.
          </p>

          {/* Call Info */}
          <div className="flex gap-6">
            <img className="w-[60px] h-[60px] rounded-full" src={call} alt="Phone Icon" />
            <div className="flex flex-col gap-1">
              <h4 className="text-xl font-semibold text-white">Business Phone</h4>
              <div className="text-slate-300 text-sm">
                <p>Email: contact@heureuxsoftware.com</p>
                <p>Phone: +91 98687 07995</p>
              </div>
            </div>
          </div>

          {/* Location Info */}
          <div className="flex gap-6">
            <img className="w-[60px] h-[60px] rounded-full" src={location} alt="Location Icon" />
            <div className="flex flex-col gap-1">
              <h4 className="text-xl font-semibold text-white">Postal Address</h4>
              <p className="text-slate-300 text-sm">
                Heureux Software Solutions (P) Ltd. B-812, Tower-B, Floor 8,
                Advant-Navis Business Park, Sector-142, Noida-201305.
              </p>
            </div>
          </div>
        </div>

        {/* Right Section: Form */}
        <form
          onSubmit={handleSubmit}
          className="w-full md:w-1/2 bg-gray-100 rounded p-6 sm:p-8 flex flex-col gap-4"
        >
         <div className="flex flex-col lg:flex-row gap-4 w-full">
  <div className="flex flex-col w-full">
    <label htmlFor="name" className="mb-1">Name*</label>
    <input
      className="bg-gray-300 rounded p-2 px-4"
      type="text"
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
  </div>
  <div className="flex flex-col w-full">
    <label htmlFor="phone" className="mb-1">Phone*</label>
    <input
      className="bg-gray-300 rounded p-2 px-4"
      type="tel"
      value={phone}
      onChange={(e) => setPhone(e.target.value)}
    />
  </div>
</div>


          <div className="flex flex-col">
            <label htmlFor="email" className="mb-1">Email*</label>
            <input
              className="bg-gray-300 rounded p-2 px-4"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="subject" className="mb-1">Subject*</label>
            <select
              className="bg-[#0a001f] text-white rounded p-2 px-4"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            >
              <option>Select Your Subject</option>
              <option>General Information</option>
              <option>IT Consultancy</option>
              <option>Cyber Security</option>
              <option>I need help</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className="mb-1">Your Message*</label>
            <textarea
              className="bg-gray-300 rounded p-2 px-4 h-36"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-[#0a001f] text-white py-3 px-6 rounded hover:bg-gray-700 transition-all"
          >
            Send Message
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ContactUs;
