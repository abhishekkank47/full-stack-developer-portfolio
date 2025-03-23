import React from "react";
import { motion } from "framer-motion";
import { FaHome } from "react-icons/fa";
import Lottie from 'lottie-react'
import animationData from '../../../assets/Website Traffic Data.json'

const HomeSection3 = () => {
  return (
    <>
      <div
        className="h-screen bg-[#D4F6FF] snap-start flex justify-center items-center relative md:pt-10"
        style={{
          backgroundImage: `url("https://res.cloudinary.com/dqt8po5ie/image/upload/v1742359544/InteriorDesignWeb/bg1_w43a5m.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="grid xl:grid-cols-2 grid-cols-1">
          <div className="col-span-1 flex flex-col justify-center items-center p-2">
            <div className="p-2 mx-5 md:p-5 md:mx-10 flex flex-col justify-center ">
              <div className="flex flex-col">
                <div className="flex items-center pt-6 sm:pt-0">
                  <h1 className="md:text-lg text-sm font-semibold font-sans uppercase text-blue-500">
                    MY EXPERTISE
                  </h1>
                  <span className="w-1/2 h-[3px] bg-blue-500 mx-2"></span>
                </div>

                <h2 className="text-sm md:text-2xl text-blue-950 font-bold sm:px-3">
                  Frontend  +  Backend  +  UIUX  +  Deployment
                </h2>
                <p className="text-xs text-blue-950 font-bold px-3 p-2">
                  * Hands On Production Grade Web Application
                </p>
              </div>
              <div className="">
                <ul className="rounded-md">
                  <li className="text-sm text-pretty text-black sm:my-5">
                    <span className="text-xl me-2">🌐</span>
                    End-to-end system architecture with microservices design
                    patterns
                  </li>

                  <li className="text-sm text-pretty text-black sm:my-5">
                    <span className="text-xl me-2">🔒</span>
                    Production-grade security implementation (DDoS protection
                    strategies, rate limiting)
                  </li>

                  <li className="text-sm text-pretty text-black sm:my-5">
                    <span className="text-xl me-2">⚡</span>
                    Performance optimization through caching mechanisms and
                    query optimization
                  </li>
                  <li className="text-sm text-pretty text-black sm:my-5">
                    <span className="text-xl me-2">🐳</span>
                    Scalable infrastructure design (horizontal scaling,
                    containerization with Docker)
                  </li>

                  <li className="text-sm text-pretty text-black sm:my-5">
                    <span className="text-xl me-2">✨</span>
                    Interactive Experiences Breathing life into websites with
                    Framer Motion animations
                  </li>

                  <li className="text-sm text-pretty text-black sm:my-5">
                    <span className="text-xl me-2">⚡</span>
                    Performance Optimization by code-splitting, and lazy loading
                  </li>

                  <li className="text-sm text-pretty text-black sm:my-5">
                    <span className="text-xl me-2">🧩</span>
                    Complex Component Design Building dynamic UIs using Tailwind
                    CSS
                  </li>
                  <li className="text-sm text-pretty text-black sm:my-5">
                    <span className="text-xl me-2">🚀</span>
                    Creating reusable UI patterns with Tailwind’s utility-first
                    approach
                  </li>
                  <li className="text-sm text-pretty text-black sm:my-5">
                    <span className="text-xl me-2">📱</span>
                    Responsive designs across all breakpoints
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-span-1  hidden xl:block">
            {/* <motion.img
              src="https://res.cloudinary.com/dqt8po5ie/image/upload/v1742360390/InteriorDesignWeb/png/png1_pupnlu.png"
              alt="png1"
              className="p-5 md:p-8"
              initial={{ x: "200px" }}
              whileInView={{ x: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 25,
                duration: 5,
              }}
              viewport={{ once: true }}
            /> */}
            <Lottie
              // src="https://lottie.host/e1ff7451-dc87-4979-9c39-ab9f02ae6040/tAXgCm4vqg.lottie"
              animationData={animationData}
              loop
              autoPlay
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSection3;
