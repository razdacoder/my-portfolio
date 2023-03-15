import Logo from "@/components/Logo";
import NavBar from "@/components/NavBar";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaPython,
  FaNodeJs,
  FaQuoteLeft,
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";
import { FcBarChart, FcIphone, FcMultipleDevices } from "react-icons/fc";
const Home = () => {
  return (
    <main className="font-ssp">
      <section className=" bg-gray-50  pb-5 relative">
        <div className=" container px-5 md:max-w-4xl lg:max-w-6xl mx-auto h-full">
          <NavBar />
          <div className="flex mt-5 md:mt-0 flex-col md:py-10 md:flex-row items-center">
            <div className="md:w-1/2 mb-5 md:mb-0 h-full md:pr-20 flex justify-center flex-col">
              <h1 className="text-3xl text-center md:text-left md:text-4xl lg:text-5xl font-semibold text-[#333333]">
                <span>Hi</span>
                <span className="text-gray-300">,</span>
                <span>I am</span>
              </h1>
              <h1 className="text-3xl md:text-4xl lg:text-5xl text-center md:text-left font-semibold text-purple-500 mt-3">
                Ramon Rasheed
              </h1>
              <p className="mt-8 text-center md:text-left text-[#333333]">
                Freelance software developer, specialize in web development,
                mobile development and data science.
              </p>
              <div className="mt-5 flex justify-center md:justify-start gap-x-3">
                <button className="text-sm font-medium text-white bg-purple-500 px-4 py-3">
                  Get in touch
                </button>
                <button className="text-sm font-medium border border-[#333333] px-4 py-3">
                  Download CV
                </button>
              </div>
            </div>
            <div className="md:w-1/2 flex flex-col gap-y-5 justify-center items-center md:relative">
              <div className=" w-[250px] h-[250px] lg:w-[500px] lg:h-[500px] md:w-[350px] md:h-[350px] bg-purple-500 rounded-full">
                <img
                  src="/me.png"
                  className="h-full w-full object-cover rounded-full"
                />
              </div>

              <div className="md:absolute bottom-0 right-0 gap-x-8 flex bg-white shadow-lg rounded-full py-3 px-8">
                <Link href={"#"}>
                  <FaTwitter className="text-xl" />
                </Link>
                <Link href={"#"}>
                  <FaLinkedin className="text-xl" />
                </Link>
                <Link href={"#"}>
                  <FaGithub className="text-xl" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id={"about"}
        style={{ scrollBehavior: "smooth" }}
        className=" scroll-smooth py-20  bg-slate-800"
      >
        <h2 className="text-xl md:text-3xl text-white mb-10 text-center">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row gap-y-10 md:gap-x-10 container mt-10 md:max-w-4xl lg:max-w-6xl mx-auto px-5 ">
          <div className="w-full md:w-1/2">
            <p className="text-sm text-center md:text-left md:text-base text-white leading-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              veniam ipsum ut, inventore omnis quibusdam soluta facere et minus
              magnam accusamus reiciendis nihil numquam explicabo. Consequuntur
              deleniti facere ex natus. Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Placeat harum vitae voluptatum magnam enim optio
              quo veritatis unde, ea laboriosam quam explicabo officiis earum
              animi.
            </p>
            <div className="flex items-center gap-x-10 justify-center mt-10">
              <div className="flex gap-x-3">
                <h3 className="text-4xl font-bold text-yellow-400">3+</h3>
                <span className="text-sm text-left text-gray-700">
                  Years of <br /> Experience
                </span>
              </div>
              <div className="flex gap-x-3">
                <h3 className="text-4xl font-bold text-yellow-400">10+</h3>
                <span className="text-sm text-left text-gray-700">
                  Clients <br /> Served
                </span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="">
              <div className="flex flex-col gap-y-5 md:flex-row justify-between md:gap-x-5">
                <div className="bg-yellow-400 p-4 w-full md:w-1/3 h-44 text-center flex justify-center items-center flex-col">
                  <FcMultipleDevices className="text-5xl text-center" />
                  <h5 className="text-xs text-[#333333] mt-2">
                    Web Development
                  </h5>
                  <p className="text-xs text-gray-600 leading-3 mt-2 ">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Non, impedit!
                  </p>
                </div>
                <div className="bg-green-400 p-4 w-full md:w-44 h-44 text-center flex justify-center items-center flex-col">
                  <FcIphone className="text-5xl text-center" />
                  <h5 className="text-xs text-[#333333] mt-2">
                    Mobile Development
                  </h5>
                  <p className="text-xs text-gray-600 leading-3 mt-2 ">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Non, impedit!
                  </p>
                </div>
                <div className="bg-purple-400 p-4 w-full md:w-44 h-44 text-center flex justify-center items-center flex-col">
                  <FcBarChart className="text-5xl text-center" />
                  <h5 className="text-xs text-[#333333] mt-2">Data Science</h5>
                  <p className="text-xs text-gray-600 leading-3 mt-2 ">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Non, impedit!
                  </p>
                </div>
              </div>

              <div className="flex justify-between mt-10">
                <FaHtml5 className="text-2xl md:text-4xl text-orange-500 " />
                <FaCss3 className="text-2xl md:text-4xl text-blue-500 " />
                <FaJs className="text-2xl md:text-4xl text-yellow-500" />
                <FaReact className="text-2xl md:text-4xl text-blue-300 " />
                <FaPython className="text-2xl md:text-4xl text-yellow-500" />
                <FaNodeJs className="text-2xl md:text-4xl text-green-500-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="showcase" className="bg-gray-50 py-20">
        <h2 className="text-xl md:text-3xl text-[#333333] mb-10 text-center">
          My Showcase
        </h2>
        <div className=" px-5 flex flex-col md:flex-row items-center gap-y-12 justify-between md:flex-wrap">
          <div className="w-full md:w-[30%] h-72 bg-gray-500"></div>
          <div className="w-full md:w-[30%] h-72 bg-gray-500"></div>
          <div className="w-full md:w-[30%] h-72 bg-gray-500"></div>
          <div className="w-full md:w-[30%] h-72 bg-gray-500"></div>
          <div className="w-full md:w-[30%] h-72 bg-gray-500"></div>
          <div className="w-full md:w-[30%] h-72 bg-gray-500"></div>
        </div>
      </section>
      <section className="bg-slate-800 py-20">
        <div className="container px-5 md:px-0 md:max-w-4xl lg:max-w-6xl mx-auto">
          <div className="">
            <h2 className="text-xl md:text-3xl text-white mb-10 text-center">
              What Client's Say
            </h2>
            <div className="flex justify-center">
              <div className="border-2 border-white py-5 md-py-10 px-6 md:px-14 w-full md:w-[500px]">
                <FaQuoteLeft className="text-4xl text-white" />
                <p className="mt-5 md:mt-10 text-sm md:text-base text-white">
                  I have been working with rasheed since 2019 and it's been a
                  fantastic experience! He works quickly and regularly and
                  deliver high quality results. He translates my concept in to
                  professional products that works.{" "}
                </p>
                <div className="flex justify-between items-center">
                  <div>
                    <h5 className="mt-5 font-semibold text-sm text-white">
                      Salaudeen Fatai
                    </h5>
                    <h6 className="text-purple-500 italic text-xs md:text-sm">
                      - Student, The Federal Polytechnic, Ilaro
                    </h6>
                  </div>
                  <div className="bg-yellow-500 w-20 h-20 rounded-full">
                    <img
                      src={"/me.png"}
                      alt="Client Pic"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-10 gap-x-10">
          <button>
            <FaRegArrowAltCircleLeft className="text-xl text-gray-400" />
          </button>
          <button>
            <FaRegArrowAltCircleRight className="text-xl text-purple-500" />
          </button>
        </div>
      </section>
      <section className="bg-gray-50 py-20">
        <div className="container md:max-w-4xl px-5 md:px-0 lg:max-w-6xl mx-auto flex justify-center items-center flex-col">
          <h2 className="text-xl md:text-3xl text-[#333333] mb-10 text-center">
            Get a Quote
          </h2>
          <div className=" flex w-full md:w-1/2 mx-auto py-1 px-1 border-2 border-[#333333]">
            <input
              className="px-2 py-3 flex-1 outline-none"
              type="email"
              placeholder="Your email address..."
            />
            <button className="px-4 py-2 text-xs md:text-sm bg-[#333333] text-white">
              Get a quote
            </button>
          </div>
        </div>
      </section>
      <footer className="bg-gray-50 pt-10">
        <div className="container md:max-w-4xl px-5 md:px-0 lg:max-w-6xl mx-auto py-10 border-t flex flex-col md:flex-row gap-y-5 items-center justify-between border-gray-200">
          <Logo />
          <div className="flex gap-x-5 text-sm text-[#333333]">
            <Link href={"#"}>Home</Link>
            <Link href={"#about"}>About</Link>
            <Link href={"#showcase"}>Showcase</Link>
          </div>
          <p className="text-sm text-[#333333]">
            &copy; {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Home;
