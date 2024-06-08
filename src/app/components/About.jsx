import Image from "next/image";
import CountUp from 'react-countup';
import { useRouter } from 'next/navigation';

const About = () => {
  const router = useRouter();
  const handleNavigate=()=>{
    router.push('#services')
  }
  return (
    <section className="text-gray-600 body-font " id="about">
      <div className=" p-12 mx-auto  ">
        <div
          className="flex justify-center items-center mb-10"
          data-aos="fade-up"
        >
          <div className="h-1 w-16 bg-blue-900 rounded mr-2 self-center"></div>
          <h1 className="text-3xl font-semibold title-font text-gray-900 mb-0 leading-none">
            ABOUT US
          </h1>
          <div className="h-1 w-16 bg-blue-900 rounded ml-2 self-center"></div>
        </div>
        <div className="flex flex-wrap md:-m-4 md:-mx-4 md:-mb-10 md:-mt-4 sm:m-0 md:space-y-0 space-y-6 sm:p-5">
          <div className="md:p-4 md:w-1/2 flex sm:p-0">
            <div
              className="flex flex-col pl-6"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              <p className="mb-2">
                We are Akeshya, a firm that specializes in web design and
                marketing. We help transform ideas into reality with a team of
                passionate graphic designers, web developers, and seasoned
                marketing advisors.
              </p>
              {/* <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Shooting Stars</h2> */}
              <div className="">
                <div className="flex items-center mb-2">
                  <Image
                    src="/assets/double-tick.png"
                    alt="double-tick"
                    width={24}
                    height={24}
                    className="mr-2"
                  />
                  <p className="leading-relaxed text-base">
                    We started with a simple idea: do what is best for the
                    client.
                  </p>
                </div>
                <div className="flex items-start">
                  <Image
                    src="/assets/double-tick.png"
                    alt="double-tick"
                    width={24}
                    height={24}
                    className="mr-2 mt-1"
                  />
                  <p className="leading-relaxed text-base">
                    Our methodical and individual approach to each project
                    delivers the finest possible results for your media.
                  </p>
                </div>
                <div className="flex items-start mb-2">
                  <Image
                    src="/assets/double-tick.png"
                    alt="double-tick"
                    width={24}
                    height={24}
                    className="mr-2 mt-1"
                  />
                  <p className="leading-relaxed text-base">
                    Our day-to-day work is to solve your problems utilizing the
                    most up-to-date, practical adaptive technology, and we have
                    a lot of fun doing it.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:p-4 md:w-1/2 flex sm:p-0">
            <div
              className="flex-grow pl-6"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <p className="leading-relaxed text-base">
                We're professional, but we're also friendly, and we'll always
                pay attention to your concerns. We expect to work with
                innovative people that have an open mind and are dedicated to
                making every idea a reality. We want to hear from you if you're
                interested in SEO, have Web Development ideas, or require a
                graphic designer who can match your goals.
              </p>
              <button onClick={handleNavigate}
              className="inline-flex text-blue-900 hover:text-white border-2 border-blue-900 py-2 px-8 focus:outline-none hover:bg-blue-900 rounded-full text-base mt-5">
                Learn More
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-col lg:flex-row md:w-5/6 lg:w-5/6 w-5/6">
          <div
            className="w-full rounded-lg overflow-hidden mt-6 sm:py-5 lg:py-10 md:py-10 flex justify-center p-10 sm:p-0"
            data-aos="fade-right"
            data-aos-duration="150"
          >
            <Image
              className="object-contain"
              src="/assets/counts-img.svg"
              alt="stats"
              width={500}
              height={400}
              style={{ width: "auto" ,height:"auto"}}
            />
          </div>
          <div
            className="flex flex-col sm:flex-col md:flex-row lg:flex-row flex-wrap justify-start sm:mx-0 md:mt-32 sm:mt-10 mb-auto"
            data-aos="fade-left"
            data-aos-duration="300"
          >
            <div className="p-4 w-full sm:w-1/2 lg:w-1/2 md:w-1/2  mb-4 ">
              <div className="flex items-start ">
                <Image
                  className="object-contain mt-1"
                  src="/assets/smile.svg"
                  alt="stats"
                  width={50}
                  height={40}

                />
                <div className="ml-2">
                  <h2
                    className="title-font font-bold text-3xl text-gray-900"
                  >
                    <CountUp start={0} end={3835039} duration={2} />
                  </h2>
                  <p className="leading-relaxed font-semibold">
                    Organic Reach
                    <span className="ml-1 font-light">(Global)</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 w-full sm:w-1/2 lg:w-1/2 md:w-1/2  mb-4">
              <div className="flex items-start">
                <Image
                  className="object-contain mt-1"
                  src="/assets/notebook.svg"
                  alt="stats"
                  width={50}
                  height={40}

                />
                <div className="ml-2">
                  <h2
                    className="title-font font-bold text-3xl text-gray-900"
                  >
                    <CountUp start={0} end={85} duration={2} />
                    </h2>
                  <p className="leading-relaxed font-semibold">Campaigns</p>
                </div>
              </div>
            </div>
            <div className="p-4 w-full sm:w-1/2 lg:w-1/2 md:w-1/2  mb-4">
              <div className="flex items-start">
                <Image
                  className="object-contain"
                  src="/assets/clock.svg"
                  alt="stats"
                  width={60}
                  height={40}
         
                />
                <div className="ml-1">
                  <h2
                    className="title-font font-bold text-3xl text-gray-900"
                  >
                    <CountUp start={0} end={14081} duration={2} />
                    </h2>
                  <p className="leading-relaxed font-semibold">
                    Watch Hours <span className="font-light">(Asia)</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 w-full sm:w-1/2 lg:w-1/2 md:w-1/2  mb-4">
              <div className="flex items-start">
                <Image
                  className="object-contain mt-1"
                  src="/assets/world.svg"
                  alt="stats"
                  width={60}
                  height={50}
              
                />
                <div className="ml-2">
                  <h2
                    className="title-font font-bold text-3xl text-gray-900"
                  >
                    <CountUp start={0} end={17} duration={2} />
                    </h2>
                  <p className="leading-relaxed font-semibold">
                    Excellent CTR % <span className="font-light">(Asia)</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
