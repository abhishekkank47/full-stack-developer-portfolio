import React from "react";
import { motion } from "framer-motion";
import Navbar from "../Components/Header/Navbar/Navbar";
import SubNavbar from "../Components/Header/Sub-Navbar/SubNavbar";
import Footer from "../Components/Footer/Footer";
import { FaPhoneAlt } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";


const Home = () => {
  return (
    <>
      <section className="relative h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth hide-scrollbar">
        <Navbar />
        <SubNavbar />
        {/* section 1 */}
        <div className="h-screen snap-start flex justify-center items-center relative">
          <div
            className="grid md:grid-cols-12 h-screen w-full "
            style={{
              backgroundImage: `url("https://res.cloudinary.com/dqt8po5ie/image/upload/v1742359561/InteriorDesignWeb/bg4_xwcahq.jpg")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="col-span-1 md:col-span-4 md:flex justify-center items-center relative hidden">
            <DotLottieReact
                src="https://lottie.host/4916e4f9-d572-4162-bd7f-c0f7811e3d05/TVPcCdbK6l.lottie"
                loop
                autoplay
              />
              <motion.img
                src="https://res.cloudinary.com/dqt8po5ie/image/upload/v1742360399/InteriorDesignWeb/png/png10_ljvaa9.png"
                alt="png10"
                className="absolute -bottom-5   w-full"
              />
            </div>
            <div className="col-span-1 md:col-span-4 flex flex-col justify-center gap-5 items-center relative border-4 border-blue-200">
              <motion.img
                src="https://res.cloudinary.com/dqt8po5ie/image/upload/v1742360393/InteriorDesignWeb/png/png3_avngzm.png"
                alt="png3"
                className="absolute top-10  h-[200px] bounce"
              />
              <motion.img
                src="https://res.cloudinary.com/dqt8po5ie/image/upload/v1742360396/InteriorDesignWeb/png/pngHero_trcrv7.png"
                alt="pngHero"
                className="absolute -bottom-10   w-full bounce"
              />

              <motion.h1
                className="text-3xl md:text-4xl text-center  text-white bounce"
                viewport={{ once: true }}
                style={{
                  fontFamily: "Abril Fatface",
                  backgroundImage: `url("https://res.cloudinary.com/dqt8po5ie/image/upload/v1742359546/InteriorDesignWeb/text-bg_bu8xx2.png")`,
                  backgroundPosition: "center",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                Hello, I'm Experienced Full Stack Developer
              </motion.h1>

              <Link
                to="/contact"
                className="relative md:w-1/2 px-5 py-3 overflow-hidden font-medium text-blue-200 bg-transparent border border-blue-800 rounded-lg shadow-inner group"
                style={{
                  backgroundImage: `url("https://res.cloudinary.com/dqt8po5ie/image/upload/v1742359546/InteriorDesignWeb/text-bg_bu8xx2.png")`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease flex justify-center items-center">
                  Contact Me{" "}
                </span>
              </Link>
            </div>
            <div className="col-span-1 md:col-span-4  h-screen w-full border-blue-900 border-double bg-white hidden md:block">
              <div className="pt-[10vh] h-full">
                <img src="https://res.cloudinary.com/dqt8po5ie/image/upload/v1742360472/InteriorDesignWeb/slider/slider1_bys1n8.jpg" />
              </div>
            </div>
          </div>

          <div
            className="flex flex-col justify-center items-center w-64 md:w-1/2 h-[60%] gap-3 md:gap-5 p-3 md:p-8 rounded-2xl absolute z-50"
            // style={{
            //   backgroundImage: `url(${borderHero})`,
            //   backgroundRepeat:"no-repeat",
            //   backgroundSize: "90%",
            //   backgroundPositionY: "50%",
            //   backgroundPositionX: "50%"
            // }}
          ></div>
          {/* <motion.img
            src={png8}
            alt="png8"
            className="absolute -top-56 w-screen opacity-60  bounce"
          /> */}
        </div>
        {/* section 2 */}
        <div
          className="h-screen bg-[#D4F6FF] snap-start flex justify-center items-center relative"
          style={{
            backgroundImage: `url("https://res.cloudinary.com/dqt8po5ie/image/upload/v1742359544/InteriorDesignWeb/bg1_w43a5m.jpg")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <motion.img
            src="https://res.cloudinary.com/dqt8po5ie/image/upload/v1742360391/InteriorDesignWeb/png/png4_hsaifu.png"
            alt="png4"
            className="absolute p-5 -top-3  lg:right-1/3 -right-24  h-[250px] lg:h-[300px] bounce"
          />
          <div className="grid xl:grid-cols-2 grid-cols-1">
            <div className="col-span-1 flex flex-col justify-center items-center p-2">
              <div className="p-2 mx-5 md:p-5 md:mx-10 flex flex-col justify-center ">
                <div className="flex flex-col">
                  <div className="flex items-center p-3">
                    <h1 className="md:text-lg text-sm font-semibold font-sans uppercase text-blue-500">
                      POPULAR SERVICES
                    </h1>
                    <span className="w-1/2 h-[3px] bg-blue-500 mx-2"></span>
                  </div>

                  <h2 className="text-lg md:text-5xl text-blue-950 font-bold px-3">
                    Our Interior Packages
                  </h2>
                  <p className="text-sm text-blue-950 font-bold px-3 p-2">
                    * Customise Packages Also Available
                  </p>
                </div>
                <div className="">
                  <p className="px-5 py-3 md:px-10 md:py-6 text-xs md:text-sm text-slate-700">
                    Interior Packages including modular kitchen + overhead unit
                    + Loft, TV unit, shoe rack, Safety door, Mandir unit, bed +
                    side table, wardrobe + loft, dressing table, Study table,
                    Sofa, POP Ceiling, Main lights, Wiring Curtain, Painting
                    (Luster) 3D Wallpaper, Mattress, 3D walkthrough designs etc.
                  </p>
                </div>
                <div className="flex flex-wrap justify-center items-center gap-5 mt-10 md:mt-0">
                  {/* cards 1 */}
                  <div className="relative m-5 bounce">
                    <span className="absolute -z-10  w-full h-full inset-1 bg-blue-500 rounded-xl" />
                    <button className="absolute py-1 z-10 px-3 -left-8 -top-2 -rotate-[10deg] black_border bg-blue-500 text-white font-bold">
                      2 B H K
                    </button>
                    <div className="grid grid-rows-3 p-4 border place-items-center border-black purple_border bg-white hover:bg-cyan-100 rounded-xl z-20">
                      <div className="row-span-1 ">
                        <FaHome className="text-5xl md:text-7xl text-blue-800" />
                      </div>
                      <div className="row-span-2">
                        <h1 className="text-sm md:text-xl text-center font-sans text-blue-800 font-semibold">
                          Full Interior service
                        </h1>
                        <div className="w-full h-[1px] bg-blue-600/30 my-5"></div>
                        <h1 className="text-sm md:text-xl text-center font-mono text-black font-semibold">
                          8,00,000 /- INR
                        </h1>
                      </div>
                    </div>
                  </div>
                  {/* cards 2 */}
                  <div className="relative m-5 bounce">
                    <span className="absolute -z-10  w-full h-full inset-1 bg-blue-500 rounded-xl" />
                    <button className="absolute py-1 z-10 px-3 -left-8 -top-2 -rotate-[10deg] black_border bg-blue-500 text-white font-bold">
                      3 B H K
                    </button>
                    <div className="grid grid-rows-3 p-4 border place-items-center border-black purple_border bg-white hover:bg-cyan-100 rounded-xl z-20">
                      <div className="row-span-1 ">
                        <FaHome className="text-5xl md:text-7xl text-blue-800" />
                      </div>
                      <div className="row-span-2">
                        <h1 className="text-sm md:text-xl text-center font-sans text-blue-800 font-semibold">
                          Full Interior service
                        </h1>
                        <div className="w-full h-[1px] bg-blue-600/30 my-5"></div>
                        <h1 className="text-sm md:text-xl text-center font-mono text-black font-semibold">
                          9,90,000 /- INR
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-1 m-5 hidden xl:block">
              <motion.img
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
              />
            </div>
          </div>
        </div>
        {/* section 3 */}
        <div
          className="h-screen bg-white snap-start flex justify-center items-center relative"
          style={{
            backgroundImage: `url("https://res.cloudinary.com/dqt8po5ie/image/upload/v1742359545/InteriorDesignWeb/bg3_ifnv60.jpg")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <motion.img
            src=""
            alt="png2"
            className="absolute p-5 bottom-0 -left-10 h-[300px]"
            initial={{ x: "-200px" }}
            whileInView={{ x: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 25,
              duration: 5,
            }}
            viewport={{ once: true }}
          />
        </div>
        {/* enquiry Information */}
        {/* <div className=" fixed bottom-5 right-5 bounce">
          <div
            className="xl:block flex-col hidden text-center bg-blue-900/75 border-2 border-blue-700 rounded-md"
            style={{
              backgroundImage: `url("https://res.cloudinary.com/dqt8po5ie/image/upload/v1742359546/InteriorDesignWeb/text-bg_bu8xx2.png")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: "79%",
            }}
          >
            <p className="text-lime-300 text-xs p-[3px] px-2 m-1">
              <span className="text-white font-semibold font-mono">
                For Enquiry :{" "}
              </span>{" "}
              Mon to Fri - 10 AM to 7 PM IST
            </p>
            <p className="text-lime-300 text-xs p-[3px] px-2 m-1">
              <span className="flex justify-center items-center">
                <FaPhoneAlt className="me-1 text-white" /> +91 7387 5171 50{" "}
                <FaPaperPlane className="mx-1 text-white" />{" "}
                abhishekkank5@gmail.com
              </span>
            </p>
          </div>
        </div> */}

        <Footer />
      </section>
    </>
  );
};

export default Home;
