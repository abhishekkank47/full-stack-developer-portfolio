import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "../Components/Header/Navbar/Navbar";
import SubNavbar from "../Components/Header/Sub-Navbar/SubNavbar";
import Footer from "../Components/Footer/Footer";


const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      {
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      }
    )
      .then(
        () => {
          alert("SUCCESS!");
        },
        (error) => {
          alert("FAILED...", error.text);
        }
      );
  };
  return (
    <>
      <>
        <section className="relative h-screen  scroll-smooth overflow-x-hidden hide-scrollbar w-screen">
          <Navbar />
          <SubNavbar />
          <div
            className=" bg-gray-900 text-blue-900 sm:h-screen flex justify-center items-center overflow-y-auto"
            style={{
              backgroundImage: `url("https://res.cloudinary.com/dqt8po5ie/image/upload/v1742359561/InteriorDesignWeb/bg4_xwcahq.jpg")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <section className="text-gray-600 body-font relative w-full h-full sm:pt-[8vh] sm:px-10">
              <div className="px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap h-full">
                <div className="lg:w-2/3 md:w-1/2 bg-transparent border-4 border-blue-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                  <iframe
                    width="100%"
                    height="100%"
                    className="absolute inset-0"
                    title="map"
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3783.4654302795693!2d73.79527007523652!3d18.507857982583268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDMwJzI4LjMiTiA3M8KwNDcnNTIuMiJF!5e0!3m2!1sen!2sin!4v1742646660903!5m2!1sen!2sin"
                  />
                  <div className="bg-white/80 relative flex flex-wrap py-6 border-4 text-blue-900 border-blue-300 rounded-md shadow-md">
                    <div className="lg:w-1/2 px-6">
                      <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                        ADDRESS
                      </h2>
                      <p className="mt-1">
                        Paud Road, Kothrud, Pune - 411 038, Maharashtra, India
                      </p>
                    </div>
                    <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                      <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                        EMAIL
                      </h2>
                      <a className="text-blue-900 leading-relaxed">
                        abhishekkank5@gmail.com
                      </a>
                      <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                        PHONE
                      </h2>
                      <p className="leading-relaxed">+91 7387517150</p>
                    </div>
                  </div>
                </div>
                <form
                  ref={form}
                  onSubmit={sendEmail}
                  className="lg:w-1/3 md:w-1/2 bg-blue-200 border-4 border-blue-300 p-5 rounded-lg flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
                >
                  <h2 className="text-blue-500 text-3xl font-bold mb-1 font-sans title-font text-center">
                    Send A Message
                  </h2>
                  <div className="relative mb-4">
                    <label className="leading-7 text-sm text-gray-600">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="user_name"
                      className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                  <div className="relative mb-4">
                    <label className="leading-7 text-sm text-gray-600">
                      Email
                    </label>
                    <input
                      name="user_email"
                      id="email"
                      className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                  <div className="relative mb-4">
                    <label className="leading-7 text-sm text-gray-600">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                      defaultValue={""}
                    />
                  </div>
                  <button
                    type="submit"
                    value="Send"
                    className="text-white hover:scale-95 bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg"
                    style={{
                      backgroundImage: `url("https://res.cloudinary.com/dqt8po5ie/image/upload/v1742359546/InteriorDesignWeb/text-bg_bu8xx2.png")`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    Send
                  </button>
                </form>
              </div>
            </section>
          </div>

          <Footer />
        </section>
      </>
    </>
  );
};

export default ContactMe;
