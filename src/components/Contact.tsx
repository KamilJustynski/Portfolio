import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variant";
import emailjs from "@emailjs/browser";
import { SectionHeader } from "./tiles/SectionHeader";

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
    <section id="contact" className="lg:mb-48 mb-20 overflow-hidden">
      <div className="container mx-auto">
        <SectionHeader text="KONTAKT" />
        <div className="flex flex-col  lg:flex-row items-center justify-between space-x-0 lg:space-x-10">
          <motion.div
            variants={fadeIn({ direction: "left", delay: 0.3 })}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex-1 hidden rounded-2xl mt-5 lg:mt-20 lg:flex lg:flex-col gap-y-2 pb-2 p-6  w-full max-w-md"
          >
            <h3 className="text-xl uppercase font-medium tracking-wide">
              Skontaktuj się
            </h3>
            <p className="hidden lg:text-[90px] text-[#9290C3] lg:flex leading-none">
              Zacznijmy wspólpracę już teraz!
            </p>
          </motion.div>
          <motion.form
            onSubmit={handleSubmit}
            variants={fadeIn({ direction: "left", delay: 0.3 })}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex-1 border-box rounded-2xl mt-10 lg:mt-20 flex flex-col gap-y-2 pb-2 p-6 items-center w-full max-w-xl"
          >
            <input
              type="text"
              className="border-input py-3"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="* Imię"
              required
            />
            <input
              type="email"
              className="border-input py-3"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="* Email"
              required
            />
            <textarea
              className="border-input py-12  resize-none mb-12"
              placeholder="* Treść wiadomości"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
            <button
              type="submit"
              className="font-primary bg-[#9290C3] rounded-full btn-lg hover-button"
            >
              Wyślij wiadomość
            </button>
            <p className="font-primary mt-2">* Pola wymagane</p>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
