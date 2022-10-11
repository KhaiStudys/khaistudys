import Navbar from "../components/Navbar";

export default function Contact() {
  return (
    <>
      <Navbar />
      <div className="max-w-[600px] mx-auto my-20 px-4 flex flex-col gap-4">
        <h1 className="text-3xl font-bold">Contact</h1>
        <div>
          <p>Fill in this form and I’ll get back to you asap!</p>
          <p>
            Or you can email me at
            <span className="text-blue-500"> khaistudys@gmail.com</span> .
          </p>
        </div>
        <form action="/api/form" method="post" className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Your E-mail:</label>
            <input
              required
              type="email"
              name="email"
              id="email"
              className="border border-gray-400 rounded px-4 py-2"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message">Your Message:</label>
            <textarea
              required
              name="message"
              id="message"
              className="border border-gray-400 rounded p-4 h-60"
            ></textarea>
          </div>
          <div>
            <button className="bg-[#FBDD74] w-full py-2 rounded" type="submit">
              Send
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
