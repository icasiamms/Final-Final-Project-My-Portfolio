import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [sent, setSent] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      alert("Please fill all fields");
      return;
    }

    setSent(true);
  }

  return (
    <section>
      <h2 className="text-3xl font-semibold text-gray-800">
        Contact Me
      </h2>

      {sent ? (
        <p className="mt-4 text-green-600 font-medium">
          Message sent successfully!
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="mt-4 space-y-4">

          <input
            name="name"
            placeholder="Name"
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-400"
          />

          <input
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-400"
          />

          <textarea
            name="message"
            placeholder="Message"
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-xl h-32 resize-none focus:outline-none focus:ring-2 focus:ring-gray-400"
          />

          <button
            className="px-6 py-2 bg-gray-800 text-white rounded-xl hover:bg-gray-700 transition"
          >
            Send
          </button>

        </form>
      )}
    </section>
  );
}