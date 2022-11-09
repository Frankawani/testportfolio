import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
type Inputs = {
  name: "string";
  email: "string";
  subject: "string";
  message: "string";
};

type Props = {};

function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:awanifrank@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} {${formData.email}}`;
  };
  return (
    <div className=" h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-5xl justify-evenly mx-auto items-center ">
      {" "}
      <h3 className=" absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl ">
        Contact
      </h3>
      <div className=" flex flex-col space-y-6 pt-32 ml-5 mr-5">
        <h4 className="text-2xl md:text-4xl font-semibold text-center">
          Ive got just what you need.
          <span className=" decoration-[#F7AB0A]/50 underline">
            Lets talk!..
          </span>
        </h4>

        <div className=" space-y-4">
          <div className=" flex items-center space-x-3 justify-center">
            <PhoneIcon className=" text-[#F7AB0A] h-7 w-7" />
            <p className=" text-2xl">+23409031762252</p>
          </div>

          <div className=" flex items-center space-x-3 justify-center">
            <EnvelopeIcon className=" text-[#F7AB0A] h-7 w-7" />
            <p className=" text-2xl">Awanifrank@gmail.com</p>
          </div>

          <div className=" flex items-center space-x-3 justify-center">
            <MapPinIcon className=" text-[#F7AB0A] h-7 w-7" />
            <p className=" text-2xl">Asaba, Delta State Nigeria.</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className=" flex space-x-2">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>

          <input
            {...register("subject")}
            placeholder="subject"
            className="contactInput"
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder=" message"
            className="contactInput"
          />
          <button
            type="submit"
            className=" bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
