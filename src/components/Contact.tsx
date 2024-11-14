import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variant";
import emailjs from "@emailjs/browser";
import { Link } from "react-scroll";

export const Contact: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const serviceID = "service_rh0jygn";
    const templateID = "template_6t9fb0s";
    const publicKEY = "SSRXMHekooOLYm3Zf";

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "NextGen-Solution",
      message: message,
    };

    emailjs
      .send(serviceID, templateID, templateParams, publicKEY)
      .then(() => {
        alert("Email sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error: any) => {
        console.error("Error sending mail", error);
        alert("Failed to send email. Please try again.");
      });
  };

  return (
    <section id="contact" className="lg:mb-48">
      <div className="container mx-auto">
        <h1 className="text-accent font-bold lg:text-[50px] w-full border-b-2 border-white/50 lg:pb-5 mt-20 pb-1 text-[26px]">
          KONTAKT
        </h1>
        <div className="flex flex-col lg:flex-row items-center justify-center space-x-0 lg:space-x-12">
          <motion.form
            onSubmit={handleSubmit}
            variants={fadeIn({ direction: "left", delay: 0.3 })}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex-1 border rounded-2xl mt-5 lg:mt-20 flex flex-col gap-y-2 pb-2 p-6 items-center w-full max-w-md"
          >
            <input
              type="text"
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="* Imię"
              required
            />
            <input
              type="email"
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="* Email"
              required
            />
            <textarea
              className="bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12"
              placeholder="* Treść wiadomości"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
            <button type="submit" className="btn btn-lg">
              Wyślij wiadomość
            </button>
            <p className="text-gradient ml-2 mt-2">* Pola wymagane</p>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
