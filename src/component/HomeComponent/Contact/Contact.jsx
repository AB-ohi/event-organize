"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail,  MapPin, Send,Phone } from "lucide-react";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+880 1234-567890",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@yourbrand.com",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "Gulshan Avenue, Dhaka 1212, Bangladesh",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // ekhane API call/email service bosabe
    console.log(formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", phone: "", message: "" });

    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section className="overflow-hidden bg-[#fff5f8] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-[#FF477E]">
            Get In Touch
          </span>
          <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
            Let's Plan Your Special Day
          </h2>
          <p className="mt-3 text-gray-500">
            Have a question or ready to book? Reach out and we'll get back to you soon.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-between rounded-2xl bg-[#FF477E] p-8 text-white lg:col-span-2"
          >
            <div>
              <h3 className="text-xl font-semibold">Contact Information</h3>
              <p className="mt-2 text-sm text-white/80">
                Fill up the form or reach us directly through the details below.
              </p>

              <div className="mt-8 flex flex-col gap-6">
                {contactInfo.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-white/20">
                        <Icon size={18} />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wide text-white/70">
                          {item.label}
                        </p>
                        <p className="text-sm font-medium">{item.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Social Icons */}
            <div className="mt-10 flex gap-4">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 transition-colors duration-300 hover:bg-white/30"
              >
                <BsInstagram size={18} />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 transition-colors duration-300 hover:bg-white/30"
              >
                <FaFacebook size={18} />
              </a>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-5 rounded-2xl border border-[#fde2ea] bg-white p-8 shadow-sm lg:col-span-3"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="rounded-xl border border-gray-200 px-4 py-2.5 text-sm outline-none transition-colors duration-300 focus:border-[#FF477E]"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+880 1XXX-XXXXXX"
                  className="rounded-xl border border-gray-200 px-4 py-2.5 text-sm outline-none transition-colors duration-300 focus:border-[#FF477E]"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="you@example.com"
                className="rounded-xl border border-gray-200 px-4 py-2.5 text-sm outline-none transition-colors duration-300 focus:border-[#FF477E]"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Tell us about your event..."
                className="resize-none rounded-xl border border-gray-200 px-4 py-2.5 text-sm outline-none transition-colors duration-300 focus:border-[#FF477E]"
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-[#FF477E] px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#e63a6d]"
            >
              <Send size={16} />
              {submitted ? "Message Sent!" : "Send Message"}
            </motion.button>

            {submitted && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center text-sm font-medium text-green-600"
              >
                Thank you! We'll get back to you soon.
              </motion.p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;