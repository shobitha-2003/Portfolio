import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { CONTACT } from "../constants";
import emailjs from "emailjs-com"; // Import EmailJS
import { motion } from "motion/react";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    const serviceID = "service_0zn07dp"; // Your Service ID
    const templateID = "template_v9b2ksc"; // Your Template ID

    emailjs
      .send(serviceID, templateID, formData, "pnIU2OvobbfgUXiQl")
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          alert("Your message has been sent successfully!");
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          console.log("Error in sending email:", error.text);
          alert("There was an issue sending your message. Please try again.");
        }
      );
  };

  return (
    <div className="flex flex-col lg:flex-row justify-between items-center min-h-screen p-8 text-neutral-300">
      {/* Left Section */}
      <div className="lg:w-1/2 space-y-6">
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="text-7xl font-bold text-white hover:text-blue-400 transition duration-300 cursor-pointer mb-20"
        >
          Let's Connect
        </motion.h1>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="space-y-4 mt-10"
        >
          <p className="text-xl mb-8">
            <span className="font-semibold text-2xl">Mail:</span>
            <span className="block">{CONTACT.email}</span>
          </p>
          <p className="text-xl mb-32">
            <span className="font-semibold text-2xl">Address:</span>
            {CONTACT.address.map((line, index) => (
              <span key={index} className="block">{line}</span>
            ))}
          </p>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="flex space-x-4 text-3xl"
        >
          <a
            href="https://www.linkedin.com/in/shobitha-n-v-448941249/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/shobitha-2003"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition duration-300"
          >
            <FaInstagram />
          </a>
        </motion.div>
      </div>

      {/* Right Section */}
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1 }}
        className="lg:w-1/2 mt-12 lg:mt-0"
      >
        <form
          onSubmit={handleSubmit}
          className="space-y-6 p-8 rounded-lg shadow-lg"
        >
          <div>
            <label htmlFor="name" className="block font-semibold">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 mt-2 bg-gray-100 text-black rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label htmlFor="email" className="block font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 mt-2 bg-gray-100 text-black rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label htmlFor="message" className="block font-semibold">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-2 mt-2 bg-gray-100 text-black rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600 transition duration-300"
          >
            Submit
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default ContactMe;
