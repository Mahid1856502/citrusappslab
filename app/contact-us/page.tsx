"use client";

import React from "react";
import Image from "next/image";
import IMAGES from "@/assets/images";
import { useTheme } from "@/context/themeContext";
import { useForm, SubmitHandler } from "react-hook-form";
import FieldError from "../_components/FieldError";
import { sendContactForm } from "../_service/mailService";

// Define the form field types
type ContactFormFields = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const ContactUs = () => {
  const { theme } = useTheme();

  // Define the form with typed fields
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormFields>();

  // Use SubmitHandler type for onSubmit
  const onSubmit: SubmitHandler<ContactFormFields> = async (data) => {
    const finalData = {
      from_name: data.name,
      from_email: data.email,
      phone: data.phone,
      message: data.message,
    };

    await sendContactForm(finalData);
    console.log("Form submitted:", finalData);
    reset();
  };

  return (
    <div className={`relative ${theme}  bg-background`}>
      <Image src={IMAGES.CONACT_BANNER} className="w-full" alt="" />
      <div className="grid grid-cols-1 md:grid-cols-2 gen-p gap-9 items-end py-28">
        <div>
          {/* Contact Information */}
          <div className="flex items-center text-start gap-3 mb-6">
            <div>
              <Image className="h-7 w-7" src={IMAGES.CALL} alt="" />
            </div>
            <div>
              <h3 className="text-heading text-2xl font-semibold ">Phone</h3>
              <p className="text-heading">+44 1223 782 686</p>
            </div>
          </div>
          <div className="flex items-center text-start gap-3 mb-6">
            <div>
              <Image className="h-7 w-7" src={IMAGES.SMS} alt="" />
            </div>
            <div>
              <h3 className="text-heading text-2xl font-semibold ">Email</h3>
              <p className="text-heading">Info@netnexus.co.uk</p>
            </div>
          </div>
          <div className="flex items-center text-start gap-3 mb-6">
            <div>
              <Image className="h-7 w-7" src={IMAGES.LOCATION} alt="" />
            </div>
            <div>
              <h3 className="text-heading text-2xl font-semibold ">Address</h3>
              <p className="text-heading">
                Future Business Centre, Guildhall, Market Square, Cambridge, CB2
                3QJ
              </p>
            </div>
          </div>
        </div>
        <div>
          {/* Contact Form */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 justify-center">
              <div>
                <input
                  className="bg-white border border-gray-600 rounded-md text-sm px-5 py-2.5 w-full sm:w-4/5 mb-5"
                  {...register("name", { required: "Name is required" })}
                  placeholder="Full Name*"
                />
                {errors.name && <FieldError message={"Input required"} />}
              </div>
              <div>
                <input
                  className="bg-white border border-gray-600 rounded-md text-sm px-5 py-2.5 w-full sm:w-4/5 mb-5"
                  type="number"
                  {...register("phone", {
                    required: "Phone number is required",
                  })}
                  placeholder="Phone Number*"
                />
                {errors.phone && <FieldError message={"Input required"} />}
              </div>
              <div>
                <input
                  className="bg-white border border-gray-600 rounded-md text-sm px-5 py-2.5 w-full sm:w-4/5 mb-5"
                  type="email"
                  {...register("email", { required: "Email is required" })}
                  placeholder="Email Address*"
                />
                {errors.email && <FieldError message={"Input required"} />}
              </div>
              <div>
                <textarea
                  className="bg-white border border-gray-600 rounded-md text-sm px-5 py-2.5 w-full sm:w-4/5 mb-6"
                  {...register("message", { required: "Message is required" })}
                  placeholder="Please type your message here*"
                />
                {errors.message && <FieldError message={"Input required"} />}
              </div>
              <div>
                <button className="bg-amber-500 w-full sm:w-4/5 text-white py-3 rounded-lg font-semibold">
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
