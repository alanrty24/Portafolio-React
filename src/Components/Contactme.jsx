import Button from "./ui/Button";
import Input from "./ui/Input";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser"
import { useRef } from "react";
import { useState } from "react";

const Contactme = () => {
  const form = useRef();
  const variables = ["user_name", "user_lastname", "user_email", "date"];
  const parameters = [
    {
      name: "First Name",
      variable: "user_name",
      required: "Se requiere el nombre",
      type: "text",
      color: "text-red-600 px-2",
    },
    {
      name: "Last Name",
      variable: "user_lastname",
      required: "Se requiere el apellido",
      type: "text",
      color: "text-red-600 px-2",
    },
    {
      name: "Email",
      variable: "user_email",
      required: "Se requiere el email",
      type: "email",
      color: "text-red-600 px-2",
    },
    {
      name: "Fecha",
      variable: "date",
      required: "Se requiere la fecha",
      type: "date",
      color: "text-red-600 px-2",
    },
  ];
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      date: new Date().toISOString().split("T")[0],
    },
  });

  // const [date,setDate] = useState(new Date().toISOString().split("T")[0] || "")
  const [data, setData] = useState({
    user_name: "",
    user_lastname: "",
    user_email: "",
    date: new Date().toISOString().split("T")[0],
  });

  const clearInputs = () => {
    setData({
      user_name: "",
      user_lastname: "",
      user_email: "",
      date: new Date().toISOString().split("T")[0],
    });
  };

  const sendEmail = () => {
    // e.preventDefault();

    emailjs
      .sendForm('service_xmkok39', 'template_aqkp1v8', form.current, {
        publicKey: 'yJ6oKnvRrJLnjuq3d',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    clearInputs();
    reset();
  };

  return (
    <section
      className="min-h-screen w-full py-12 flex flex-col items-center gap-4 md:gap-4 mt-8 "
      id="contactMe"
    >
      <h3 className=" text-center font-bold  text-(--color-tertiary) text-xl md:text-2xl lg:text-3xl">
        CONTACTA<span className="text-(--color-secundary)">ME</span>
      </h3>
      <form
        action=""
        ref={form}
        onSubmit={handleSubmit(sendEmail)}
        className="p-4 w-full shadow-2xl shadow-blue-500 border-0 rounded-2xl flex flex-col items-center gap-4 md:grid md:grid-cols-2 lg:w-2/3"
      >
        {parameters.map((input, i) => {
          return (
            <div
              key={i}
              className={`flex flex-col gap-2 w-full ${i > 1 ? "col-span-full" : ""}`}
            >
              <Input
                {...register(input.variable, {
                  required: input.required,
                })}
                type={input.type}
                label={input.name}
                placeholder={input.name}
                name={input.variable}
                value={data[variables[i]]}
                onChange={(e) => {
                  setData({ ...data, [variables[i]]: e.target.value });
                }}
              >
              </Input>
              {errors[variables[i]] && (
                <p className="text-red-600 px-2 text-base md:text-lg">
                  {errors[variables[i]].message}
                </p>
              )}
            </div>
          );
        })}
        {/* <input type="submit" className="p-4 bg-blue-500 rounded-2xl text-white" value="send" /> */}
        <div className="flex flex-col gap-2 w-full md:w-full md:col-span-full">
          <label htmlFor="" className="text-base md:text-lg">
            Message
          </label>
          <textarea
            name="message"
            id=""
            className="border-2 border-(--color-secundary) shadow-2xl rounded-2xl min-h-30 px-4 py-2 outline-0 focus:border-(--color-tertari) text-base md:text-lg"
          ></textarea>
        </div>
        <div className="md:col-span-full flex justify-center items-center w-full">
          <Button
            variant="primary"
            className={`w-full text-lg p-4 md:w-1/2 md:text-xl md:py-4 md:mt-8 lg:col-span-full lg:px-4 lg:py-2 lg:w-1/3 `}
            type={"submit"}
            ref={form}
          >
            Enviar
          </Button>
        </div>
      </form>
    </section>
  );
};

export default Contactme;
