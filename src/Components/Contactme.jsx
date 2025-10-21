import Button from "./ui/Button";
import Input from "./ui/Input";

const Contactme = () => {
  return (
    <section className="min-h-screen py-6 flex flex-col items-center gap-4 md:gap-6 " id="contactMe">
      <h3 className="text-4xl text-center font-bold text-shadow-2xs text-shadow-blue-50 md:text-md lg:text-5xl">Contact Me</h3>
      <form
        action=""
        className="p-4 w-full shadow-2xl border-2 order-(--color-secundary) rounded-2xl flex flex-col items-center gap-4 md:p-8 lg:w-1/2"
      >
        <div className="flex flex-col gap-4 w-full md:flex-row md:p-2 md:w-full">
          <Input type="text" placeholder="First Name"> 
            First Name
          </Input>
          <Input type="text" placeholder="Second Name"> 
            Second Name
          </Input>
        </div>
        <div className="flex flex-col gap-2 w-full md:w-full">
          <Input type="email" placeholder="Email"> 
            Email
          </Input>
        </div>
        <div className="flex flex-col gap-2 w-full md:w-full">
          <label htmlFor="" className="md:text-2xl">Message</label>
          <textarea name="" id="" className="border-2 border-(--color-secundary) shadow-2xl rounded-2xl min-h-30 px-4 py-2 outline-0 focus:border-(--color-tertari) md:text-2xl"></textarea>
        </div>
        <Button variant = "primary" className="w-full p-4 ">
          Send
        </Button>
      </form>
    </section>
  );
};

export default Contactme;
