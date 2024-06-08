const Contact = () => {
  return (
    <section className="text-gray-600 body-font  m-16" id="contact">
      <div className=" px-5   mx-auto">
        <div className="flex justify-center items-center mb-5" data-aos="fade-up">
          <div className="h-1 w-16 bg-blue-900 rounded mr-2 self-center"></div>
          <h1 className="text-3xl font-semibold title-font text-gray-900 mb-0 leading-none">
            CONTACT US
          </h1>
          <div className="h-1 w-16 bg-blue-900 rounded ml-2 self-center"></div>
        </div>
        <div className="flex  flex-col sm:flex-col md:flex-row lg:flex-row ">
          <div className="w-full md:w-1/3 md:p-5 sm:p-0"  data-aos="fade-up" data-aos-delay="100">
            <div>
              <h1 className="font-semibold text-2xl text-blue-900 mb-2">
                Akeshya
              </h1>
              <p>
                Designers, developers & marketeers capable of delivering
                solutions according to your needs,
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/3 mt-10" data-aos="fade-up" data-aos-delay="200">
            <div className="flex flex-col justify-start items-start md:ml-10 sm:ml-0">
              <div className="flex">
                <svg
                  width="32px"
                  height="32px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-3 stroke-blue-900"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z"
                      // stroke="#F6D429"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                    <path
                      d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                      // stroke="#F6D429"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
                <h1 className="font-normal text-base">
                  26-2-789, 7th street, Jyothi Nagar, <br /> Nellore, Andhra
                  Pradesh 524004
                </h1>
              </div>
              <div className="flex mt-5">
                <svg
                  width="32px"
                  height="32px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-blue-900 mr-3"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7"
                      // stroke="#000000"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                    <rect
                      x="3"
                      y="5"
                      width="18"
                      height="14"
                      rx="2"
                      // stroke="#000000"
                      strokeWidth="2"
                      strokeLinecap="round"
                    ></rect>{" "}
                  </g>
                </svg>
                <h1 className="font-normal text-base">info@akeshya.com</h1>
              </div>
              <div className="flex mt-5">
                <svg
                  width="32px"
                  height="32px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-3"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M17.3545 22.2323C15.3344 21.7262 11.1989 20.2993 7.44976 16.5502C3.70065 12.8011 2.2738 8.66559 1.76767 6.6455C1.47681 5.48459 2.00058 4.36434 2.88869 3.72997L5.21694 2.06693C6.57922 1.09388 8.47432 1.42407 9.42724 2.80051L10.893 4.91776C11.5152 5.8165 11.3006 7.0483 10.4111 7.68365L9.24234 8.51849C9.41923 9.1951 9.96939 10.5846 11.6924 12.3076C13.4154 14.0306 14.8049 14.5807 15.4815 14.7576L16.3163 13.5888C16.9517 12.6994 18.1835 12.4847 19.0822 13.1069L21.1995 14.5727C22.5759 15.5257 22.9061 17.4207 21.933 18.783L20.27 21.1113C19.6356 21.9994 18.5154 22.5232 17.3545 22.2323ZM8.86397 15.136C12.2734 18.5454 16.0358 19.8401 17.8405 20.2923C18.1043 20.3583 18.4232 20.2558 18.6425 19.9488L20.3056 17.6205C20.6299 17.1665 20.5199 16.5348 20.061 16.2171L17.9438 14.7513L17.0479 16.0056C16.6818 16.5182 16.0047 16.9202 15.2163 16.7501C14.2323 16.5378 12.4133 15.8569 10.2782 13.7218C8.1431 11.5867 7.46219 9.7677 7.24987 8.7837C7.07977 7.9953 7.48181 7.31821 7.99439 6.95208L9.24864 6.05618L7.78285 3.93893C7.46521 3.48011 6.83351 3.37005 6.37942 3.6944L4.05117 5.35744C3.74413 5.57675 3.64162 5.89565 3.70771 6.15943C4.15989 7.96418 5.45459 11.7266 8.86397 15.136Z"
                      fill="#0D47A1"
                    ></path>{" "}
                  </g>
                </svg>
                <h1 className="font-normal text-base">+91 94942 40922</h1>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 mt-10" data-aos="fade-up" data-aos-delay="300">
            <div className="flex flex-col justify-center items-center">
                <input placeholder="Your Name" required className='w-full  py-2 pl-5 mb-5   border focus:border-blue-900'/>
                <input placeholder="Your Email" required className='border w-full py-2 pl-5 mb-5 focus:border-blue-900'/>
                <input placeholder="Subject" required className='border w-full py-2 pl-5 mb-5 focus:border-blue-900 '/>
                <textarea placeholder="Message" type="area" required className='text-start border w-full py-8 pl-5 mb-5 focus:border-blue-900'/>
                <button className="rounded-full bg-blue-900 px-6 py-2 text-white w-40 hover:bg-sky-600 ">Send Message</button>
            </div> 
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
