import React from "react";


import logo from "../../public/logo.png";
import Banner from "../../public/Banner.png";
import Be from "../../public/be.jfif";



function Projects() {

  return (
    <div
      name="Projects"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Projects</h1>
        <span className=" underline font-semibold">Top recent project</span>
       
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-5">
         
          <div
            className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"
         
          >
            <img
              src={logo}
              className="w-[120px] h-[120px] p-1 rounded-full border-[2px]"
              alt=""
            />

            <div>
              <div className="px-2 font-bold text-xl mb-2">Digital E-Gram</div>
              <p className="px-2 text-gray-700">
                Online services web-site.
              </p>
              <div className="bg-gray-50 text-center px-4 py-2 ">
                <span className="bg-blue-500 text-white px-2 py-1 m-1 rounded text-xs cursor-pointer hover:bg-blue-700">Bootstrap</span>
                <span className="bg-blue-500 text-white px-2 py-1 m-1 rounded text-xs cursor-pointer hover:bg-blue-700">Javascript</span>
                <span className="bg-blue-500 text-white px-2 py-1 m-1 rounded text-xs cursor-pointer hover:bg-blue-700">Php</span>
                <span className="bg-blue-500 text-white px-2 py-1 m-1 rounded text-xs cursor-pointer hover:bg-blue-700">Mysql</span>
              </div>

            </div>
            
            <div className=" px-6 py-4 space-x-3 justify-around">

              <a className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded" href="https://github.com/Jssagalaka/Digital-E-gram.git">
                View
              </a>
            </div>

          </div>

          <div
            className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"

          >
            <img
              src={Banner}
              className="w-[120px] h-[120px] p-1 rounded-full border-[2px]"
              alt=""
            />

            <div>
              <div className="px-2 font-bold text-xl mb-2">Bookstore</div>
              <p className="px-2 text-gray-700">
               MERN stack e-comm web-site.
              </p>
              <div className="bg-gray-50 text-center px-4 py-2 ">
                <span className="bg-blue-500 text-white px-2 py-1 m-1 rounded text-xs cursor-pointer hover:bg-blue-700">React</span>
                <span className="bg-blue-500 text-white px-2 py-1 m-1 rounded text-xs cursor-pointer hover:bg-blue-700">Node</span>
                <span className="bg-blue-500 text-white px-2 py-1 m-1 rounded text-xs cursor-pointer hover:bg-blue-700">Mongodb</span>
                <span className="bg-blue-500 text-white px-2 py-1 m-1 rounded text-xs cursor-pointer hover:bg-blue-700">Express</span>
              </div>

            </div>
           
            <div className=" px-6 py-4 space-x-3 justify-around">

              <a className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded" href="https://github.com/Jssagalaka/BookStore.git">
                View
              </a>
            </div>

          </div>

          <div
            className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"
          // key={id}
          >
            <img
              src={Be}
              className="w-[120px] h-[120px] p-1 rounded-full border-[2px]"
              alt=""
            />

            <div>
              <div className="px-2 font-bold text-xl mb-2">E-Commerce </div>
              <p className="px-2 text-gray-700">
                Only Back-end Appliction.
              </p>
              <div className="bg-gray-50 text-center px-4 py-2 ">
                <span className="bg-blue-500 text-white px-2 py-1 m-1 rounded text-xs cursor-pointer hover:bg-blue-700">Node</span>
                <span className="bg-blue-500 text-white px-2 py-1 m-1 rounded text-xs cursor-pointer hover:bg-blue-700">Express</span>
                <span className="bg-blue-500 text-white px-2 py-1 m-1 rounded text-xs cursor-pointer hover:bg-blue-700">Mongodb</span>
                <span className="bg-blue-500 text-white px-2 py-1 m-1 rounded text-xs cursor-pointer hover:bg-blue-700">RestApi</span>
              </div>

            </div>
            
            <div className=" px-6 py-4 space-x-3 justify-around">

              <a className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2  rounded" href="https://github.com/Jssagalaka/E-commerce.git">
                View
              </a>
            </div>

          </div>

        </div>
    
      </div>
     
    </div>
   
  );
}

export default Projects;
