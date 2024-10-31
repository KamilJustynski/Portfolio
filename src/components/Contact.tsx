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
      <section id="contact" className="section min-h-screen flex items-center justify-center">
        <div className="container mx-auto max-w-6xl mb-32">
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
                  Get in touch
                </h4>
                <h2 className="text-[45px] lg:text-[90px] leading-none">
                  Let's work <br />
                  together!
                </h2>
              </div>
            </motion.div>
            <motion.form
                onSubmit={handleSubmit}
                variants={fadeIn({ direction: "left", delay: 0.3 })}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.3 }}
                className="flex-1 border rounded-2xl flex flex-col gap-y-2 pb-2 p-6 items-center w-full max-w-md"
            >
              <input
                  type="text"
                  className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="* Your Name"
                  required
              />
              <input
                  type="email"
                  className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="* Your email"
                  required
              />
              <textarea
                  className="bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12"
                  placeholder="* Your message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
              ></textarea>
              <button type="submit" className="btn btn-lg">
                Send message
              </button>
              <p className="text-gradient ml-2 mt-2">* Required fields</p>
            </motion.form>
          </div>
        </div>
      </section>
  );
};