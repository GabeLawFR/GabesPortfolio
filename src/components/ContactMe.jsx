import React from "react";
import { useState } from "react";

export default function ContactMe() {
  const [submissionStatus, setSubmissionStatus] = useState(null);

  //   const handleFormSubmit = async (e) => {
  //     const form = e.currentTarget;
  //     e.preventDefault();

  //     try {
  //       const response = await fetch(
  //         "https://getform.io/f/e3b5e90a-47cf-415d-a525-73203df7f4b1",
  //         {
  //           method: "POST",
  //         }
  //       );

  //       if (response.ok) {
  //         setSubmissionStatus("success");
  //         form.reset();
  //       } else {
  //         setSubmissionStatus("error");
  //       }
  //     } catch (error) {
  //       console.error("Error submitting form:", error);
  //       setSubmissionStatus("error");
  //     }
  //   };

  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white "
    >
      <div
        className="flex
      flex-col p-4 justify-center max-w-screen-lg mx-auto h-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact Me
          </p>
          <p className="py-6">Submit the form below to get in touch!</p>
        </div>
        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/e3b5e90a-47cf-415d-a525-73203df7f4b1"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className=" my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            {/* <input
              type="hidden"
              name="_gotcha"
              style="display:none !important"
            /> */}
            <textarea
              name="message"
              placeholder="Enter your message here"
              id=""
              cols="30"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>
            <button className=" text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Send It!
            </button>
          </form>
        </div>
        {/* {submissionStatus === "success" && (
          <p className="text-green-500 mt-4 text-center">
            Form submitted successfully!
          </p>
        )}
        {submissionStatus === "error" && (
          <p className="text-red-500 mt-4 text-center">
            There was an error submitting the form. Please try again later.
          </p>
        )} */}
      </div>
    </div>
  );
}
