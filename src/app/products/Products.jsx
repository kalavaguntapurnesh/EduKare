import React from "react";
import Image from "next/image";

function Products() {
  return (
    <div className="w-full h-auto flex flex-wrap flex-col items-center bg-white md:pt-32 pt-32">
      <h1 className=" md:text-4xl text-4xl pt-4 text-primaryColor font-bold text-center">
        Our Services
      </h1>
      <div className="w-28 h-1 border-b-4 border-red-400 mt-1"></div>

      <div className="mt-12">
        <div className="flex lg:flex-row flex-col justify-evenly space-x-6 md:ml-24 md:mr-24">
          <div className="divider lg:divider-horizontal md:ml-0 ml-4 md:mr-0 mr-4"></div>
          <div className="flex flex-col">
            <h1 className="md:text-3xl text-3xl pt-4 text-primaryColor md:text-justify text-center font-bold">
              Interactive Learning
            </h1>
            <p className=" mt-4 md:text-base text-base text-gray-700">
              Edukare provides a platform for seamless communication between
              teachers, students, and parents. It may include messaging systems,
              email notifications, and discussion forums, enabling
              to stay informed in the educational process.
            </p>
            <p className="font-semibold text-red-500 mt-4 cursor-pointer">
              READ MORE &#8594;
            </p>
          </div>

          <div className="divider lg:divider-horizontal md:ml-0 ml-4 md:mr-0 mr-4"></div>

          <div className="flex flex-col ">
            <h1 className=" md:text-3xl text-3xl pt-4 text-primaryColor md:text-justify text-center font-bold ">
              Assesment Grading
            </h1>
            <p className="mt-4 md:text-base text-base text-gray-700">
              Education care simplifies the process of creating and
              administering assessments. It automates grading and generates
              insightful reports, helping educators identify areas for
              improvement and provide targeted feedback to students very
              instantly.
            </p>
            <p className="font-semibold text-red-500 mt-4 cursor-pointer">
              READ MORE &#8594;
            </p>
          </div>

          <div className="divider lg:divider-horizontal md:ml-0 ml-4 md:mr-0 mr-4"></div>

          <div className="flex flex-col ">
            <h1 className=" md:text-3xl text-3xl pt-4 text-primaryColor md:text-justify text-center font-bold">
              Resource Management
            </h1>
            <p className=" mt-4 md:text-base text-base text-gray-700">
              The software optimizes resource allocation within educational
              institutions, including managing classrooms, scheduling, and
              resource sharing. This ensures that facilities and equipment are
              efficiently utilized.
            </p>
            <p className="font-semibold text-red-500 mt-4 cursor-pointer">
              READ MORE &#8594;
            </p>
          </div>

          <div className="divider lg:divider-horizontal md:ml-0 ml-4 md:mr-0 mr-4"></div>
        </div>
      </div>

      <div className="w-full h-auto flex flex-wrap flex-col items-center md:mt-36 mt-16">
        <h1 className=" md:text-4xl text-4xl pt-4 text-primaryColor font-bold text-center">
          Recent Work
        </h1>
        <div className="w-28 h-1 border-b-4 border-red-400 mt-1"></div>
      </div>

      <div className="md:flex md:w-full w-full mt-2">
        <div className="md:w-1/2 pt-16">
          <h1
            className="md:text-4xl text-4xl font-semibold text-center
             md:mt-16 mt-4 text-primaryColor "
          >
            Affordable content
          </h1>

          <p
            className="md:ml-[80px] ml-[20px] md:mr-[80px] mr-[20px] mt-4
           text-lg  md:text-gray-700  text-gray-700 "
          >
            The content and the services which we are offering are one of the
            lowest prices in the market, making it affordable to people across
            the world keeping in mind the higher quality of education.
          </p>

          <div className="flex justify-center mt-6 pb-4">
            <button
              type="button"
              className="bg-red-500 px-8 py-2.5 text-center 
        rounded-[4px] text-white transition duration-500 hover:scale-95 hover:bg-red-500"
            >
              Click Here
            </button>
          </div>
        </div>

        {/* <div className="flex flex-col md:w-1/2 md:mt-0 mt-4">
          <Image
            src="/5340737.jpg"
            alt="img name"
            width={3000}
            height={2000}
            className="mt-2 rounded-2xl md:w-2/3 md:ml-24 md:mr-0 w-full"
          />
        </div> */}
        <div className="md:w-1/2 flex justify-center align-items-center ">
          <Image
            src="/5340737.jpg"
            alt="img name"
            width={300}
            height={200}
            className="mt-2 rounded-2xl md:w-2/3 
               md:ml-24 w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default Products;
