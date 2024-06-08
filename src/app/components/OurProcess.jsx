
const OurProcess = () => {
  return (
    <section className="text-gray-600 body-font  m-16">
      <div className=" px-5   mx-auto">
        <div className="flex justify-center items-center mb-5" data-aos="fade-up">
          <div className="h-1 w-16 bg-blue-900 rounded mr-2 self-center"></div>
          <h1 className="text-3xl font-semibold title-font text-gray-900 mb-0 leading-none">
            OUR PROCESS
          </h1>
          <div className="h-1 w-16 bg-blue-900 rounded ml-2 self-center"></div>
        </div>
        <p className="text-center mb-10"  data-aos="fade-up">
          Over the years we’ve evolved a tested method for attaining achievement
          for each one of our clients.
        </p>

        <div className="flex flex-col sm:flex-col md:flex-row gap-10 justify-center items-center py-10 w-full  ">
          <div className="relative flex flex-col mt-6 hover:text-white   text-gray-700 bg-white border bg-clip-border rounded-xl w-full md:w-1/2  group hover:bg-blue-900  transition duration-300" data-aos="fade-up" data-aos-delay="100">
            <div className="p-6 " >
              <h5 className="block mb-2 font-sans text-xl text-center antialiased font-semibold leading-snug tracking-normal ">
                1. Planning
              </h5>
              <p className="block font-sans font text-base antialiased font-normal leading-relaxed text-inherit">
                We help you turn all of your ideas into a digital product that
                meets all of your requirements. We begin each project by
                determining its scope and needs. This is done by collaborating
                closely with you to ensure that we're all on the same page.
              </p>
            </div>
          </div>
          <div className="relative flex flex-col mt-6 hover:text-white   text-gray-700 bg-white border bg-clip-border rounded-xl w-full md:w-1/2  group hover:bg-blue-900  transition duration-300" data-aos="fade-up" data-aos-delay="200">
            <div className="p-6  ">
              <h5 className="block mb-2 font-sans text-xl text-center antialiased font-semibold leading-snug tracking-normal ">
                2. Design
              </h5>
              <p className="block font-sans font text-base antialiased font-normal leading-relaxed text-inherit">
                We build our websites carefully through a series of workshops,
                wire-framing, and user experience (UX) sessions, resulting in a
                site that reinforces trust, conveys important brand messaging,
                and provides a return on innovation.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-col  md:flex-row  gap-10 justify-center py-10 w-full  ">
          <div className="relative flex flex-col mt-6 hover:text-white   text-gray-700 bg-white border bg-clip-border rounded-xl  w-full md:w-1/2  group hover:bg-blue-900  transition duration-300"  data-aos="fade-up" data-aos-delay="300">
            <div className="p-6  ">
              <h5 className="block mb-2 font-sans text-xl text-center antialiased font-semibold leading-snug tracking-normal ">
              3. Development
              </h5>
              <p className="block font-sans font text-base antialiased font-normal leading-relaxed text-inherit">
              We provide extensive front-end and back-end development that allows your idea to stand alone. Our in-house developers work side-by-side with the artistic team to seek out natural breakpoints inside the content and order practicality based on acknowledged statistics.
              </p>
            </div>
          </div>
          <div className="relative flex flex-col mt-6 hover:text-white   text-gray-700 bg-white border bg-clip-border rounded-xl  w-full md:w-1/2  group hover:bg-blue-900  transition duration-300" data-aos="fade-up" data-aos-delay="400">
            <div className="p-6  ">
              <h5 className="block mb-2 font-sans text-xl text-center antialiased font-semibold leading-snug tracking-normal ">
                4. Marketing
              </h5>
              <p className="block font-sans font text-base antialiased font-normal leading-relaxed text-inherit">
              We come up with ideas and campaigns to help your business prosper online. Our campaigns and virtual approach have a verified tune report of accomplishing brilliant results, gathering new leads and site visitors in your website and assist them convert.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
