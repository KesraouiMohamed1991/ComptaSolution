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
    <form
      className="flex flex-col h-[50rem] w-full md:w-4/5 mx-auto p-4  justify-center items-center "
      ref={form}
      onSubmit={sendEmail}
    >
      <div className="flex flex-col">
        <div className="p-4">
          <input
            className="bg-neutral-100 border-b border-transparent active:bg-neutral-300 p-4 mx-4 w-96 rounded-lg"
            placeholder="Name"
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
          Send
        </span>
      </button>
    </form>
  );
};

export default Contact;
