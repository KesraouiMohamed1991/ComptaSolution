import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const Contact = () => {
  const form = useRef();
  const [disable, setDisable] = useState(true);

  const sendEmail = e => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jz8g55j",
        "template_hlaakcn",
        form.current,
        "nbYN6aqZVjRVU6SEI"
      )
      .then(
        result => {
          console.log(result.text);
          if (result.text === "OK") {
            form.current.reset();
            alert("Your email has been sent");
          }
        },
        error => {
          console.log(error.text);
        }
      )
      .then(() => {});
  };

  return (
    <div className="flex flex-col-reverse md:flex-row-reverse min-h-screen w-full lg:w-4/5 mx-auto p-4 justify-center items-center">
      <form
        className="w-full md:w-1/2 flex flex-col items-center justify-center p-4"
        ref={form}
        onSubmit={sendEmail}
      >
        <input
          className="bg-white border-b border-transparent active:bg-neutral-300 p-4 mx-4 w-full sm:w-96 rounded-lg mb-4"
          placeholder="Nom et prénom"
          type="text"
          name="user_name"
          onChange={() => setDisable(false)}
        />

        <input
          className="bg-white border-b border-transparent active:bg-neutral-300 p-4 mx-4 w-full sm:w-96 rounded-lg mb-4"
          type="email"
          placeholder="Email"
          name="user_email"
          onChange={() => setDisable(false)}
        />

        <textarea
          rows={10}
          placeholder="Message"
          className="bg-white sm:w-96 w-full p-4 mx-4 rounded-lg mb-4"
          name="message"
          onChange={() => setDisable(false)}
        />

        <button
          type="submit"
          disabled={disable}
          className={`relative border mt-8 items-center justify-start inline-block px-8 py-3 overflow-hidden font-medium transition-all bg-blue-600 rounded-full hover:bg-white group ${
            disable ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"></span>
          <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-blue-600">
            {disable ? "Envoyer" : "Envoyer"}
          </span>
        </button>
      </form>

      <div className="w-full md:w-1/2 flex flex-col items-start justify-center p-4">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, letterSpacing: "0.2em" }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          Contact <span className="text-5xl">👋🏻</span>
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, x: 10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="text-xl sm:text-2xl my-4 sm:my-16 font-bold"
        >
          Vous avez un projet en tête ? <br /> Envoyez-moi les détails et
          discutons-en !
        </motion.h2>

        <p className="text-justify">
          Que vous souhaitiez simplement nous saluer ou que vous cherchiez à
          démarrer un projet, n&apos;hésitez pas à m&apos;envoyer un e-mail. Je
          ne prends jamais qu&apos;un seul projet à la fois pour pouvoir
          consacrer toute mon attention aux besoins de mes clients.
        </p>

        <p className="py-8 text-neutral-500">Discutons🤝 </p>
        <Link to="mailto:comptsolutions24@gmail.com">
          comptsolutions24@gmail.com
        </Link>
      </div>
    </div>
  );
};

export default Contact;
