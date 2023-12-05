import React from "react";
import Image from "next/image";

const Carousel = () => {
  return (
    <div className="text-black md:pt-20 bg-white">
      <div className="w-full h-auto flex flex-wrap flex-col items-center">
        <h1 className=" md:text-4xl text-4xl pt-4 text-primaryColor font-bold text-center">
          Our Services
        </h1>
        <div className="w-28 h-1 border-b-4 border-red-400 mt-2"></div>
      </div>

      <div className="w-full h-auto mt-auto">
        <div className="md:flex md:w-full mt-4">
          <div className="md:w-1/2 flex justify-center align-items-center ">
            <Image
              src="/5995729.jpg"
              alt="img name"
              width={300}
              height={200}
              className="mt-2 rounded-2xl md:w-2/3 
               md:ml-24 w-full"
            />
          </div>

          <div className="md:flex md:flex-col md:w-1/2 flex flex-col pt-12">
            <div className="pl-4 pr-4">
              <div className=" md:w-9/12">
                <h4
                  className="mt-2 text-2xl font-extrabold leading-8
                tracking-light sm:text-4xl text-primaryColor "
                >
                  Trigger in Real-Time, learning experience.
                </h4>
              </div>
              <div className="mt-3 text-lg leading-7 text-gray-500 md:w-9/12">
                <p>
                  Betterment of results display, with enchanced education quality.
                </p>
              </div>

              <div>
                <ul class="mt-10 space-y-10">
                  <li>
                    <div class="flex">
                      <div class="flex-shrink-0">
                        <div
                          class="flex items-center justify-center h-12 w-12 rounded-full
                   bg-red-500 text-primaryColor
                                    "
                        >
                          <svg
                            class="w-6 h-6 fill-current"
                            id="Layer_1"
                            data-name="Layer 1"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 64 64"
                          >
                            <title>Icons 300</title>
                            <path
                              d="M63.006,52.0209,37.99,52.0175a.9946.9946,0,0,1-.9967-.94,9.3927,9.3927,0,0,0-1.7054-5.5065,1.2507,1.2507,0,0,1,.517-1.96l.0787-.0292c4.34-1.6118,5.8338-3.1989,6.0916-7.1406a9.3845,9.3845,0,0,1-2.0107-1.7381,9.4759,9.4759,0,0,1-1.9072-4.68,1.4073,1.4073,0,0,1-.1463.0094c-1.0858,0-1.9078-2.29-1.9078-3.9s.558-2.1,1.09-2.1c.1114,0,.2146.0055.314.0139a13.5669,13.5669,0,0,1-.3971-3.0886c0-3.9034,1.0952-6.6059,4.4393-7.0867,1.8508-1.2841,4.6493-1.8507,8.2235-1.8507,2.2867,0,.3817,1.5642,2.53,2.0209,1.33.2827,3.8068,1.2254,3.8068,6.9165a13.568,13.568,0,0,1-.3968,3.0886c.0991-.0084.2026-.0139.314-.0139.5322,0,1.09.49,1.09,2.1s-.8217,3.9-1.9075,3.9a1.4078,1.4078,0,0,1-.1466-.0094,9.473,9.473,0,0,1-1.9072,4.68,9.3508,9.3508,0,0,1-1.988,1.723c.2546,3.9529,1.7466,5.5418,6.0925,7.1557,4.5262,1.6809,6.5841,2.8386,6.8478,7.369A1.01,1.01,0,0,1,63.006,52.0209ZM10.0088,36.0245c-1.235,0-5.0008-3.0664-5.0008-10.4022,0-8.5946,4.935-13.6027,10.8355-13.6027,2.824,0,4.153.13,5.6671,1.5013,4.3219,0,8.5026,3.2055,8.5026,12.1014,0,7.2786-3.7275,10.4022-5.0011,10.4022-.4435,0-.78-.3881-1.2768-.8936a10.0621,10.0621,0,0,1-1.668,1.3382c.2631,3.9213,1.7611,5.5049,6.095,7.1129,4.53,1.6809,6.59,2.8386,6.8538,7.3689a1.0109,1.0109,0,0,1-1.0033,1.07H1.0159a1.0112,1.0112,0,0,1-1.0033-1.07c.264-4.53,2.3238-5.688,6.8538-7.3689,4.332-1.6073,5.8306-3.19,6.0947-7.1074a10.06,10.06,0,0,1-1.684-1.3525C10.7757,35.6319,10.4412,36.0245,10.0088,36.0245Z"
                              fill-rule="evenodd"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div class="ml-4">
                        <h5 class="text-lg font-medium leading-6 text-gray-800">
                          Product Success Expert 
                        </h5>
                        <div class="mt-2 text-base leading-6 text-gray-500">
                        Become a Product Success expert with these edukare resources
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="flex">
                      <div class="flex-shrink-0">
                        <div
                          class="flex items-center justify-center h-12 w-12 rounded-full
                   bg-red-500 text-primaryColor
                                    "
                        >
                          <svg
                            class="w-6 h-6 fill-current"
                            id="Layer_1"
                            data-name="Layer 1"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 64 64"
                          >
                            <title>Icons 300</title>
                            <path
                              d="M57.6454,25.1695,47.1541,40.18a1.9968,1.9968,0,0,1-3.2088.089L38.45,33.2639a2,2,0,1,1,3.143-2.473l3.8314,4.8839,8.9466-12.8009a2,2,0,1,1,3.2746,2.2956ZM34.1559,43.5821c4.5293,1.6808,6.5888,2.8388,6.8522,7.3688a1.0108,1.0108,0,0,1-1.003,1.07H7.0154a1.0111,1.0111,0,0,1-1.0033-1.07c.2637-4.53,2.3232-5.688,6.8522-7.3688,4.3493-1.6141,5.8389-3.21,6.0935-7.1636a9.474,9.474,0,0,1-1.9931-1.7152,9.5461,9.5461,0,0,1-1.905-4.7138,1.1764,1.1764,0,0,1-.1438.0191c-1.0845,0-1.9056-2.2814-1.9056-3.8861s.5574-2.0923,1.0889-2.0923c.114,0,.2087.0134.31.0221a13.5713,13.5713,0,0,1-.399-3.094c0-5.6888,2.3034-8.9375,9.5-8.9375,3.4282,0,3.6592.8475,4.3182,2.0313a2.064,2.064,0,0,1,1.2953-.4062c1.83,0,3.8864,2.21,3.8864,7.3124a13.5891,13.5891,0,0,1-.3987,3.094c.1013-.0087.196-.0221.31-.0221.5315,0,1.0889.4879,1.0889,2.0923s-.8211,3.8861-1.9056,3.8861a1.1764,1.1764,0,0,1-.1438-.0191,9.5461,9.5461,0,0,1-1.905,4.7138,9.4752,9.4752,0,0,1-1.9937,1.7155C28.3173,40.3722,29.8069,41.968,34.1559,43.5821Z"
                              fill-rule="evenodd"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div class="ml-4">
                        <h5 class="text-lg font-medium leading-6 text-gray-800">
                          Real-time matching
                        </h5>
                        <div class="mt-2 text-base leading-6 text-gray-500">
                          Experiences show immediately when learner falls into
                          lower results.
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="flex">
                      <div class="flex-shrink-0">
                        <div
                          className="flex items-center justify-center h-12 w-12 rounded-full
                   bg-red-500 text-primaryColor
                                    "
                        >
                          <svg
                            class="w-6 h-6 fill-current"
                            id="Layer_1"
                            data-name="Layer 1"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 64 64"
                          >
                            <title>Icons 300</title>
                            <path
                              d="M26.0206,52.021H44.0149a6.0056,6.0056,0,0,0,5.9981-6v-28a6.0056,6.0056,0,0,0-5.9981-6H26.0206a6.0056,6.0056,0,0,0-5.9984,6v6a1.9994,1.9994,0,1,0,3.9987,0v-6a2.0018,2.0018,0,0,1,2-2H44.0149a2.0016,2.0016,0,0,1,1.9994,2v28a2.0021,2.0021,0,0,1-1.9994,2H26.0206a2.0023,2.0023,0,0,1-2-2v-6a1.9994,1.9994,0,1,0-3.9987,0v6A6.0056,6.0056,0,0,0,26.0206,52.021Zm-18.0192-20a1.9994,1.9994,0,0,0,1.9987,2H29.9762V39.016a1.0266,1.0266,0,0,0,1.6214.819l9.9676-6.9888a.9957.9957,0,0,0,0-1.6381l-9.9676-6.9888a1.0267,1.0267,0,0,0-1.6214.8192v4.9824H10A1.9992,1.9992,0,0,0,8.0014,32.0209Z"
                              fill-rule="evenodd"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div class="ml-4">
                        <h5 class="text-lg font-medium leading-6 text-gray-800">
                          24/7 * 365 Constant Support
                        </h5>
                        <div class="mt-2 text-base leading-6 text-gray-500">
                          Immediate Customer Support for smoother user experience.
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:flex md:w-full mt-2  md:pl-4 md:pr-4 md:pt-12">
        <div className="md:w-1/2 flex justify-center items-center">
          <div className="   md:pl-12 lg:pl-24 pl-4 pr-4">
            <div className=" md:w-10/12 ">
              <h4
                className="mt-2 text-2xl font-extrabold leading-8
                tracking-light sm:text-4xl text-primaryColor "
              >
               Lightweight, Easy to Use
              </h4>
            </div>
            <div className="mt-3 text-lg leading-7 text-gray-500 md:w-10/12 ">
              <p>
              Build in-context without awkward switching or conflicts
              </p>
            </div>

            <div>
              <ul class="mt-10 space-y-10">
                <li>
                  <div class="flex">
                    <div class="flex-shrink-0">
                      <div
                        class="flex items-center justify-center h-12 w-12 rounded-full
                   bg-green-100 text-green-500
                                    "
                      >
                        <svg
                          class="w-6 h-6 fill-current"
                          id="Layer_1"
                          data-name="Layer 1"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 64 64"
                        >
                          <title>Icons 300</title>
                          <path
                            d="M27.01,10.6133V8.0208a2,2,0,0,1,2-2h6a2,2,0,0,1,2,2v2.5925a21.947,21.947,0,0,1,8.96,4.447l1.5355-1.5356a1.99,1.99,0,0,1,.056-2.7441l1.184-1.1838a2,2,0,0,1,2.8283,0l2.8286,2.8284a2.0005,2.0005,0,0,1,0,2.8285l-1.1839,1.1838a1.994,1.994,0,0,1-2.7169.0913L48.9811,18.05A21.9936,21.9936,0,1,1,27.01,10.6133ZM30.0049,38.952a2.0069,2.0069,0,1,0,4.011,0l-.1425-3.4115a3.9845,3.9845,0,0,0-.3015-7.2029l-.5586-13.3453a1.0039,1.0039,0,0,0-2.0057,0l-.5583,13.3452a3.9846,3.9846,0,0,0-.3015,7.203Z"
                            fill-rule="evenodd"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div class="ml-4">
                      <h5 class="text-lg font-medium leading-6 text-gray-800">
                        Simplified, lesson planning
                      </h5>
                      <div class="mt-2 text-base leading-6 text-gray-500">
                        Best in teacher-student lesson plans and reviews.
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="flex">
                    <div class="flex-shrink-0">
                      <div
                        class="flex items-center justify-center h-12 w-12 rounded-full
                          bg-green-100 text-green-500
                                    "
                      >
                        <svg
                          class="w-6 h-6 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 54 54"
                        >
                          {" "}
                          <path
                            d="M16.288 12.378c-.341-4.627 1.951-5.642 5.128-2.26l15.82 16.842c1.588 1.691 1.008 2.877-1.319 2.647l-6.115-.605 6.42 14.42c.237.531 0 1.154-.512 1.382l-2.77 1.232c-.519.232-1.138-.025-1.368-.543l-6.42-14.42-4.239 5.359c-1.44 1.822-2.745 1.427-2.915-.87l-1.71-23.184z"
                            fill="currentcolor"
                            fill-rule="nonzero"
                          ></path>{" "}
                        </svg>
                      </div>
                    </div>
                    <div class="ml-4">
                      <h5 class="text-lg font-medium leading-6 text-gray-800">
                       Communication & Collaboration
                      </h5>
                      <div class="mt-2 text-base leading-6 text-gray-500">
                        Experiences show immediately when user falls into target
                        audience.
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="flex">
                    <div class="flex-shrink-0">
                      <div
                        className="flex items-center justify-center h-12 w-12 rounded-full
                          bg-green-100 text-green-500
                                    "
                      >
                        <svg
                          class="w-6 h-6 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 54 54"
                        >
                          {" "}
                          <path
                            d="M38.702 7.5a7.8 7.8 0 017.798 7.798v23.404a7.8 7.8 0 01-7.798 7.798H15.298A7.8 7.8 0 017.5 38.702V15.298A7.8 7.8 0 0115.298 7.5h23.404zm-8.593 11.234l-9.03 15.049a1.219 1.219 0 002.091 1.254l9.03-15.049a1.219 1.219 0 00-2.09-1.254zm-11.097 2.582l-5.014 4.507a1.219 1.219 0 000 1.813l5.014 4.506a1.219 1.219 0 001.63-1.813l-4.006-3.6 4.005-3.6a1.219 1.219 0 00-1.629-1.813zm14.394.092c-.45.5-.409 1.271.092 1.72l4.006 3.601-4.006 3.6a1.219 1.219 0 001.63 1.813l5.013-4.506a1.219 1.219 0 000-1.813l-5.014-4.507a1.219 1.219 0 00-1.72.092z"
                            fill="currentColor"
                            fill-rule="nonzero"
                          ></path>{" "}
                        </svg>
                      </div>
                    </div>
                    <div class="ml-4">
                      <h5 class="text-lg font-medium leading-6 text-gray-800">
                        Assesment Grading
                      </h5>
                      <div class="mt-2 text-base leading-6 text-gray-500">
                        Grading and displaying progress bar with instant results.
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* <div className="flex  justify-center  align-items-center flex-col md:w-1/2 md:mt-0 mt-4 ">
          <Image
            src="/5340737.jpg"
            alt="img name"
            width={300}
            height={200}
            className="mt-12 rounded-2xl md:w-2/3 md:ml-24 md:mr-0 w-full "
          />
        </div> */}
        <div className="md:w-1/2 flex justify-center align-items-center ">
          <Image
            src="/5340737.jpg"
            alt="img name"
            width={300}
            height={200}
            className="mt-2 rounded-2xl md:w-2/3 
               w-full "
          />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
