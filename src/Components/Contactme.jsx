import Button from "./ui/Button";
import Input from "./ui/Input";

const Contactme = () => {
  return (
    <section
      className="min-h-screen w-full py-12 flex flex-col items-center gap-4 md:gap-4 mt-8"
      id="contactMe"
    >
      <h3 className="text-3xl text-center font-bold  text-(--color-tertiary)">
        Contact <span className="text-(--color-secundary)">Me</span>{" "}
      </h3>
      <form
        action=""
        className="p-4 w-full shadow-xl shadow-blue-500 border-0 rounded-2xl flex flex-col items-center gap-4 md:w-auto lg:h-[30%]"
      >
        <div className="flex flex-col w-full gap-2 md:flex-row md:gap-2">
          <Input type="text" placeholder="First Name">
            First Name
          </Input>
          <Input type="text" placeholder="Second Name">
            Second Name
          </Input>
        </div>
        <Input type="email" placeholder="Email" className={"md:w-full"}>
          Email
        </Input>
        <div className="flex flex-col gap-2 w-full md:w-full">
          <label htmlFor="" className="md:text-xl lg:text-lg">
            Message
          </label>
          <textarea
            name=""
            id=""
            className="border-2 border-(--color-secundary) shadow-2xl rounded-2xl min-h-30 px-4 py-2 outline-0 focus:border-(--color-tertari) md:text-xl lg:text-lg"
          ></textarea>
        </div>
        <Button variant="primary" className={`w-full p-4 md:w-1/2 md:text-xl md:py-4 md:mt-8 `}>
          Send
        </Button>
      </form>
    </section>
  );
};

export default Contactme;
