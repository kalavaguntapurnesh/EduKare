import React from "react";
import { useState, useEffect } from "react";

const Accordion = () => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  useEffect(() => {
    setAccordionOpen(false);
  }, []);

  return (
    <div className="bg-white pt-20">
      <div className="w-full h-auto flex flex-wrap flex-col items-center">
        <h1 className=" md:text-4xl text-4xl pt-4 text-primaryColor font-bold text-center">
          Frequently Asked Questions
        </h1>
        <div className="w-40 h-1 border-b-4 border-red-400 mt-2"></div>
      </div>

      <div className="pt-20 pb-20">

      <div className=" md:ml-40 md:mr-40  bg-white">
        <div className="py-2  pl-4 pr-4">
          <h2 className="text-lg">
            <button
              className="flex items-center justify-between w-full text-left font-semibold py-2"
              onClick={(e) => {
                e.preventDefault();
                setAccordionOpen(!accordionOpen);
              }}
              aria-expanded={accordionOpen}
              aria-controls={`accordion-text-01`}
            >
              <span className="text-primaryColor">What are the advantages of our platform?</span>
              <svg
                className="fill-indigo-500 shrink-0 ml-8"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  y="7"
                  width="16"
                  height="2"
                  rx="1"
                  className={`ttransform origin-center transition duration-200 ease-out ${
                    accordionOpen && "!rotate-180"
                  }`}
                />
                <rect
                  y="7"
                  width="16"
                  height="2"
                  rx="1"
                  className={`transform origin-center rotate-90 transition duration-200 ease-out ${
                    accordionOpen && "!rotate-180"
                  }`}
                />
              </svg>
            </button>
          </h2>
          <div
            id={`accordion-text-01`}
            role="region"
            aria-labelledby={`accordion-title-01`}
            className={`grid text-sm text-slate-600 overflow-hidden transition-all duration-300 ease-in-out ${
              accordionOpen
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <p className="pb-3 pt-3 text-base">
              The software facilitates student enrollment, data management, and academic progress tracking. 
              It allows educators to keep detailed records of each student's performance and offers insights 
              into their strengths and weaknesses.
              </p>
            </div>
          </div>
        </div>
      </div>

      <hr class="h-px bg-gray-200 border-0 dark:bg-gray-700 md:mx-24 mx-4"></hr>

      <div className=" md:ml-40 md:mr-40  bg-white">
        <div className="py-2  pl-4 pr-4">
          <h2 className="text-lg">
            <button
              className="flex items-center justify-between w-full text-left font-semibold py-2"
              onClick={(e) => {
                e.preventDefault();
                setAccordionOpen(!accordionOpen);
              }}
              aria-expanded={accordionOpen}
              aria-controls={`accordion-text-01`}
            >
              <span className="text-primaryColor">How are we better than others?</span>
              <svg
                className="fill-indigo-500 shrink-0 ml-8"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  y="7"
                  width="16"
                  height="2"
                  rx="1"
                  className={`ttransform origin-center transition duration-200 ease-out ${
                    accordionOpen && "!rotate-180"
                  }`}
                />
                <rect
                  y="7"
                  width="16"
                  height="2"
                  rx="1"
                  className={`transform origin-center rotate-90 transition duration-200 ease-out ${
                    accordionOpen && "!rotate-180"
                  }`}
                />
              </svg>
            </button>
          </h2>
          <div
            id={`accordion-text-01`}
            role="region"
            aria-labelledby={`accordion-title-01`}
            className={`grid text-sm text-slate-600 overflow-hidden transition-all duration-300 ease-in-out ${
              accordionOpen
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <p className="pb-3 pt-3 text-base">
              Education care software assists teachers in creating and organizing lesson plans, syllabi, and learning materials.
               It ensures that the curriculum aligns with educational standards and can be easily customized to meet specific needs.
              </p>
            </div>
          </div>
        </div>
      </div>

      <hr class="h-px bg-gray-200 border-0 dark:bg-gray-700 md:mx-24 mx-4"></hr>

      <div className=" md:ml-40 md:mr-40 bg-white">
        <div className="py-2  pl-4 pr-4">
          <h2 className="text-lg">
            <button
              className="flex items-center justify-between w-full text-left font-semibold py-2"
              onClick={(e) => {
                e.preventDefault();
                setAccordionOpen(!accordionOpen);
              }}
              aria-expanded={accordionOpen}
              aria-controls={`accordion-text-01`}
            >
              <span className="text-primaryColor">How can you contact us instantly?</span>
              <svg
                className="fill-indigo-500 shrink-0 ml-8"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  y="7"
                  width="16"
                  height="2"
                  rx="1"
                  className={`ttransform origin-center transition duration-200 ease-out ${
                    accordionOpen && "!rotate-180"
                  }`}
                />
                <rect
                  y="7"
                  width="16"
                  height="2"
                  rx="1"
                  className={`transform origin-center rotate-90 transition duration-200 ease-out ${
                    accordionOpen && "!rotate-180"
                  }`}
                />
              </svg>
            </button>
          </h2>
          <div
            id={`accordion-text-01`}
            role="region"
            aria-labelledby={`accordion-title-01`}
            className={`grid text-sm text-slate-600 overflow-hidden transition-all duration-300 ease-in-out ${
              accordionOpen
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <p className="pb-3 pt-3 text-base">
                If you go over your organisations or user limit, a member of the
                team will reach out about bespoke pricing. In the meantime, our
                collaborative features wont appear in accounts or users that are
                over the 100-account or 1,000-user limit.
              </p>
            </div>
          </div>
        </div>
      </div>

      <hr class="h-px  bg-gray-200 border-0 dark:bg-gray-700 md:mx-24 mx-4"></hr>

      </div>


    </div>
  );
};

export default Accordion;
