import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variant";
import emailjs from "@emailjs/browser";

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
    <section
      id="contact"
      className="section min-h-screen flex items-center justify-center"
    >
      <div className="container mx-auto max-w-6xl mb-52">
        <div className="flex flex-col lg:flex-row items-center justify-center space-x-0 lg:space-x-12">
          <motion.div
            variants={fadeIn({ direction: "right", delay: 0.3 })}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 text-center lg:text-left mb-4 lg:mb-0"
          >
            <div>
              <h4 className="text-xl uppercase text-accent font-medium tracking-wide">
                Skontaktuj się
              </h4>
              <h2 className="hidden lg:text-[90px] lg:flex leading-none">
                Zacznijmy wspólpracę <br />
                już teraz!
              </h2>
            </div>
          </motion.div>
          <motion.form
            onSubmit={handleSubmit}
            variants={fadeIn({ direction: "left", delay: 0.3 })}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 border rounded-2xl lg:mt-20 flex flex-col gap-y-2 pb-2 p-6 items-center w-full max-w-md"
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
