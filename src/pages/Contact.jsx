import { useRef } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const form = useRef();

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
            alert("your email has been sent");
          }
        },
        error => {
          console.log(error.text);
        }
      )
      .then(() => {});
  };

  return (
    <div className="flex flex-col-reverse sm:flex-row-reverse  min-h-screen  sm:h-[50rem] w-full md:w-4/5 mx-auto p-4  justify-center items-center">
      <form
        className="h-full w-1/2 flex flex-col items-center justify-center "
        ref={form}
        onSubmit={sendEmail}
      >
        <div className="flex flex-col">
          <div className="p-4">
            <input
              className="bg-neutral-100 border-b border-transparent active:bg-neutral-300 p-4 mx-4 w-96 rounded-lg"
              placeholder="Nom et prénom"
              type="text"
              name="user_name"
            />
          </div>

          <div className="p-4">
            <input
              className="bg-neutral-100 w-96 p-4 mx-4 rounded-lg"
              type="email"
              placeholder="Email"
              name="user_email"
            />
          </div>
        </div>
        <textarea
          rows="10"
          cols="40"
          placeholder="Message"
          className="bg-neutral-100  p-4 mx-4 rounded-lg"
          name="message"
        />

        <button
          type="submit"
          value="Send"
          className="relative border mt-8  items-center justify-start inline-block px-8 py-3 overflow-hidden font-medium transition-all bg-blue-600 rounded-full hover:bg-white group"
        >
          <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"></span>
          <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-blue-600">
            Envoyer
          </span>
        </button>
      </form>

      <div className="h-full w-full  flex flex-col items-start justify-center sm:w-1/2 p-4 ">
        <h1 className="text-6xl font-extrabold">Contact</h1>
        <h1 className="text-xl  my-16 font-bold sm:text-start ">
          Vous avez un projet en tête ? <br /> Envoyez-moi les détails et
          discutons-en !
        </h1>

        <p>
          Que vous souhaitiez simplement nous saluer ou que vous cherchiez à
          démarrer un projet, n&apos;hésitez pas à m&apos;envoyer un e-mail. Je
          ne prends jamais qu&apos;un seul projet à la fois pour pouvoir
          consacrer toute mon attention aux besoins de mes clients.
        </p>

        <p className="py-8 text-neutral-500"> Let&apos;s chat</p>
        <p>comptsolutions24@gmail.com</p>
      </div>
    </div>
  );
};

export default Contact;
