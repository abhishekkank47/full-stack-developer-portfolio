import React from "react";
import Navbar from "../Components/Header/Navbar/Navbar";
import SubNavbar from "../Components/Header/Sub-Navbar/SubNavbar";
import Footer from "../Components/Footer/Footer";
import { MdVerified } from "react-icons/md";

const About = () => {
  return (
    <>
      <section className="relative h-screen  scroll-smooth overflow-x-hidden hide-scrollbar w-screen">
        <Navbar />
        <SubNavbar />
        <div className="  text-blue-900 sm:h-screen flex justify-center items-center overflow-y-auto"
        style={{
          backgroundImage: `url("https://res.cloudinary.com/dqt8po5ie/image/upload/v1742359544/InteriorDesignWeb/bg1_w43a5m.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        >
          <div className="pt-[10vh]">
                    <div className="container mx-auto py-8">
                      <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
                        <div className="col-span-4 sm:col-span-3">
                          <div className=" border-4 border-blue-300 shadow rounded-lg p-6 h-full">
                            <div className="flex flex-col items-center">
                              <img
                                src="https://media.licdn.com/dms/image/v2/D4D03AQFtTnAZ_f-dZw/profile-displayphoto-shrink_400_400/B4DZUDNzu1HAAg-/0/1739515707243?e=1747872000&v=beta&t=ToD3R8CCO-huFwKMyuIrlJUXBvh_q_hyjJ55uIMlGhs"
                                className="w-28 h-w-28 bg-gray-300 border-4 border-yellow-300 rounded-full mb-4 shrink-0"
                              />
                              <h1 className="text-xl font-bold text-blue-900">
                                <span className="flex justify-center items-center">Abhishek Kank<MdVerified className="ms-1 text-blue-500" /></span>
                              </h1>
                              <p className="text-blue-500">Full Stack Developer</p>
                              <p className="text-blue-800 text-sm">
                                B.E. Electronic & T.C. Engineer (2024)
                              </p>
                              <p className="text-blue-800 text-xs">
                                SPPU Pune University - RMD Sinhagad Institute{" "}
                              </p>
                            </div>
                            <hr className="my-6 border-t border-blue-700" />
                            <div className="flex flex-col">
                              <ul className=" p-4 rounded-lg">
                                <li className="mb-2 flex justify-center items-center gap-2">
                                  <h2 className="font-bold text-yellow-500 font-sans">
                                    JavaScript
                                  </h2>
          
                                  {/* Progress bar */}
                                  <div className="h-3 w-full rounded-full overflow-hidden bg-slate-300">
                                    <div
                                      className="h-full rounded-full bg-blue-500"
                                      style={{ width: "90%" }}
                                    />
                                  </div>
                                </li>
                                <li className="mb-2 flex justify-center items-center gap-2">
                                  <h2 className="font-bold text-green-700 font-sans">
                                    Node.js
                                  </h2>
          
                                  {/* Progress bar */}
                                  <div className="h-3 w-full rounded-full overflow-hidden bg-slate-300">
                                    <div
                                      className="h-full rounded-full bg-blue-500"
                                      style={{ width: "90%" }}
                                    />
                                  </div>
                                </li>
                                <li className="mb-2 flex justify-center items-center gap-2">
                                  <h2 className="font-bold text-black font-sans">
                                    Express
                                  </h2>
          
                                  {/* Progress bar */}
                                  <div className="h-3 w-full rounded-full overflow-hidden bg-slate-300">
                                    <div
                                      className="h-full rounded-full bg-blue-500"
                                      style={{ width: "95%" }}
                                    />
                                  </div>
                                </li>
                                <li className="mb-2 flex justify-center items-center gap-2">
                                  <h2 className="font-bold text-blue-500 font-sans">
                                    React.js
                                  </h2>
          
                                  {/* Progress bar */}
                                  <div className="h-3 w-full rounded-full overflow-hidden bg-slate-300">
                                    <div
                                      className="h-full rounded-full bg-blue-500"
                                      style={{ width: "85%" }}
                                    />
                                  </div>
                                </li>
                                <li className="mb-2 flex justify-center items-center gap-2">
                                  <h2 className="font-bold text-blue-500 font-sans">
                                    Tailwind
                                  </h2>
          
                                  {/* Progress bar */}
                                  <div className="h-3 w-full rounded-full overflow-hidden bg-slate-300">
                                    <div
                                      className="h-full rounded-full bg-blue-500"
                                      style={{ width: "100%" }}
                                    />
                                  </div>
                                </li>
                                <li className="mb-2 flex justify-center items-center gap-2">
                                  <h2 className="font-bold text-green-700 font-sans">
                                    MongoDB
                                  </h2>
          
                                  {/* Progress bar */}
                                  <div className="h-3 w-full rounded-full overflow-hidden bg-slate-300">
                                    <div
                                      className="h-full rounded-full bg-blue-500"
                                      style={{ width: "85%" }}
                                    />
                                  </div>
                                </li>
                                <li className="mb-2 flex justify-center items-center gap-2">
                                  <h2 className="font-bold text-blue-800 font-sans">
                                    Docker
                                  </h2>
          
                                  {/* Progress bar */}
                                  <div className="h-3 w-full rounded-full overflow-hidden bg-slate-300">
                                    <div
                                      className="h-full rounded-full bg-blue-500"
                                      style={{ width: "60%" }}
                                    />
                                  </div>
                                </li>
                                <li className="mb-2 flex justify-center items-center gap-2">
                                  <h2 className="font-bold text-red-700 font-sans">
                                    Redis
                                  </h2>
          
                                  {/* Progress bar */}
                                  <div className="h-3 w-full rounded-full overflow-hidden bg-slate-300">
                                    <div
                                      className="h-full rounded-full bg-blue-500"
                                      style={{ width: "80%" }}
                                    />
                                  </div>
                                </li>
                                <li className="mb-2 flex justify-center items-center gap-2">
                                  <h2 className="font-bold text-slate-700 font-sans">
                                    AWS
                                  </h2>
          
                                  {/* Progress bar */}
                                  <div className="h-3 w-full rounded-full overflow-hidden bg-slate-300">
                                    <div
                                      className="h-full rounded-full bg-blue-500"
                                      style={{ width: "50%" }}
                                    />
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-span-4 sm:col-span-9">
                          <div className="border-4 border-blue-300 shadow rounded-lg p-6 h-full">
                            <h2 className="text-xl text-center text-blue-900 font-bold mb-2">
                              Professional Summary
                            </h2>
                            <p
                              className="text-gray-700 text-sm"
                              style={{ fontFamily: "Caveat, cursive" }}
                            >
                              I'm a Full Stack Developer specializing in building
                              high-performance, secure, and scalable web applications
                              using the MERN stack. I combine strong technical skills in
                              Frontend Development, Backend Engineering, and Database
                              Architecture with a DevOps mindset, ensuring applications
                              are both feature-rich and operationally resilient.
                              Passionate about creating solutions that balance user
                              experience with technical excellence, I thrive on solving
                              complex scalability challenges and implementing robust
                              security measures.
                            </p>
          
                            <h2 className="text-xl text-center text-blue-900 font-bold mt-6 mb-4">
                              Experience
                            </h2>
                            <div className="mb-6">
                              <div className="flex justify-between flex-wrap gap-2 w-full">
                                <span className="text-blue-600 font-bold">
                                  Full Stack Developer Intern
                                </span>
                                <p>
                                  <span className="text-gray-800 text-xs mr-2">
                                    Rajyug IT Solutions
                                  </span>
                                  <span className="text-gray-700 text-xs  mr-2">
                                    (Onsite)
                                  </span>
                                  <span className="text-black font-bold">
                                    Nov 2024 - March 2025
                                  </span>
                                </p>
                              </div>
                              <p
                                className="mt-2 text-sm text-gray-500"
                                style={{ fontFamily: "Caveat, cursive" }}
                              >
                                Responsible for designing UI and implementing functional frontends and integrating with both NoSQL and SQL databases through backend development. Creating APIs, Calling APIs.
                                Developing and maintain web applications using Technology
                                React.js, Node.js and Express.js, MongoDB, MySQL,
                                PostgreSQL, Framer Motion, Tailwind CSS, Postman, AWS EC2.
                                
                                
                              </p>
                            </div>
                            <div className="mb-6">
                              <div className="flex justify-between flex-wrap gap-2 w-full">
                                <span className="text-blue-600 font-bold">
                                  Full Stack Developer Intern
                                </span>
                                <p>
                                  <span className="text-gray-800 text-xs mr-2">
                                    CodeClause Private Ltd
                                  </span>
                                  <span className="text-gray-700 text-xs  mr-2">
                                    (Remote)
                                  </span>
                                  <span className="text-black font-bold">
                                    Aug 2024 - Sep 2024
                                  </span>
                                </p>
                              </div>
                              <p
                                className="mt-2 text-sm text-gray-500"
                                style={{ fontFamily: "Caveat, cursive" }}
                              >
                                Awarded "Intern of the Month" and ranked among the Top 10
                                Developers during the internship period.
                                
                                Development of an end-to-end e-commerce platform utilizing
                                MongoDB, Express.js, React.js, and Node.js, Tailwind CSS,
                                Daisy UI Components
                              </p>
                            </div>
                            <div className="mb-6">
                              <div className="flex justify-between flex-wrap gap-2 w-full">
                                <span className="text-blue-600 font-bold">
                                  Web Developer Intern
                                </span>
                                <p>
                                  <span className="text-gray-800 text-xs mr-2">
                                    Oasis Infobyte Private Ltd
                                  </span>
                                  <span className="text-gray-700 text-xs  mr-2">
                                    (Remote)
                                  </span>
                                  <span className="text-black font-bold">
                                    Mar 2023 - Apr 2024
                                  </span>
                                </p>
                              </div>
                              <p
                                className="mt-2 text-sm text-gray-500"
                                style={{ fontFamily: "Caveat, cursive" }}
                              >
                                Developed Websites using HTML5, CSS, JavaScript, Bootstrap
                                Framework and Bootstrap Website Templates
                              </p>
                            </div>
                            <div className="mb-6">
                              <div className="flex justify-between flex-wrap gap-2 w-full">
                                <span className="text-blue-600 font-bold">
                                  Web Development Trainee
                                </span>
                                <p>
                                  <span className="text-gray-800 text-xs mr-2">
                                    Elite Softwares Private Ltd
                                  </span>
                                  <span className="text-gray-700 text-xs  mr-2">
                                    (Remote)
                                  </span>
                                  <span className="text-black font-bold">
                                    Jan 2023 - Mar 2023
                                  </span>
                                </p>
                              </div>
                              <p
                                className="mt-2 text-sm text-gray-500"
                                style={{ fontFamily: "Caveat, cursive" }}
                              >
                                Developed Websites using HTML5, CSS, JavaScript, Bootstrap
                                Framework and Bootstrap Website Templates.
                                
                                Learned about Responsiveness of Website across all Devices.
                                
                                Learned about Domain registration, Domain Hosting Service,
                                C Panel, Word Press
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
        </div>

        <Footer />
      </section>
    </>
  );
};

export default About;
