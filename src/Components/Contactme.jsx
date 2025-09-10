const Contactme = () => {
  return (
    <section className="px-4 py-6 bg-(--color-font-p1) text-white flex flex-col items-center gap-4 md:gap-6 " id="contactMe">
      <h3 className="text-4xl text-center font-bold text-blue-300 text-shadow-2xs text-shadow-blue-50 md:text-md lg:text-5xl">Contact Me</h3>
      <form
        action=""
        className="p-4 w-full shadow-2xl border-2 border-white rounded-2xl flex flex-col items-center gap-4 md:p-8 lg:w-1/2"
      >
        <div className="flex flex-col gap-4 w-full md:flex-row md:p-2 md:w-full">
          <div className="flex flex-col gap-2 md:w-1/2">
            <label htmlFor="" className="md:text-2xl ">First Name</label>
            <input
              type="text"
              placeholder="First Name"
              className="border-2 border-white p-4 rounded-2xl outline-0 invalid:text-red-500 invalid:border-r-red-500 focus:border-(--color-font-p2) md:text-2xl"
            />
          </div>
          <div className="flex flex-col gap-2 w-full md:w-1/2">
            <label htmlFor="" className="md:text-2xl ">Second Name</label>
            <input
              type="text"
              placeholder="Second Name"
              className="border-2 border-white p-4 rounded-2xl outline-0 invalid:text-red-500 invalid:border-r-red-500 focus:border-(--color-font-p2) md:text-2xl"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full md:w-full">
          <label htmlFor="" className="md:text-2xl">Email</label>
          <input
            type="email"
            placeholder="Email"
            className="border-2 border-white p-4 rounded-2xl outline-0 focus:invalid:text-red-500 focus:invalid:border-red-500 focus:border-(--color-font-p2) md:text-2xl"
          />
        </div>
        <div className="flex flex-col gap-2 w-full md:w-full">
          <label htmlFor="" className="md:text-2xl">Message</label>
          <textarea name="" id="" className="border-2 border-white rounded-2xl px-4 py-6 outline-0 focus:border-(--color-font-p2) md:text-2xl"></textarea>
        </div>
        <button className="bg-(--color-font-p2) w-full p-4 text-2xl font-bold text-white text-shadow-2xs text-shadow-cyan-600 rounded-2xl hover:cursor-pointer transition-all duration-500 hover:bg-blue-400 hover:outline-2 hover:outline-blue-800 hover:-translate-y-1 md:text-2xl md:w-1/2">Send</button>
      </form>
    </section>
  );
};

export default Contactme;
