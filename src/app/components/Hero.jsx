import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useRouter } from 'next/navigation';

const Hero =()=>{
  const router = useRouter();
  const handleNavigate=()=>{
    router.push('#about')
  }
   return (
<section className="text-gray-600 body-font  ">
  <div className=" mx-auto flex px-20 py-24 sm:py-5 sm:flex-col-reverse md:flex-col-reverse lg:flex-row items-center ">
    <div className="lg:flex-grow  lg:pr-24  flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-start text-center ">
      <h1 className="title-font sm:text-2xl md:text-5xl lg:text-5xl md:mb-4  font-semibold text-blue-900 "  data-aos="fade-up" >Grow your business with Akeshya
      </h1>
      <p className="mb-8  sm:text-lg  md:text-2xl text-start lg:text-2xl mt-2 leading-relaxed "  data-aos="fade-up" data-aos-duration="400">We are team of talented website designers, developers & digital marketeers</p>
      <div className="flex justify-start" data-aos="fade-up" data-aos-duration="800">
        <button onClick={handleNavigate}
        className="inline-flex text-blue-900 hover:text-white border-2 border-blue-900 py-2 px-8 focus:outline-none hover:bg-blue-900 rounded-full text-lg" >Get Started</button>
      </div>
    </div>
    <div className="lg:w-5/6 md:w-1/2 sm:w-5/6  w-5/6 sm:p-5"   data-aos="fade-left"  data-aos-duration="200">
      <Image className="object-cover object-center rounded mr-10 lg:animate-upDown"
       alt="hero" src="/assets/hero-img.png"
        width={550}
        height={600} 
        style={{ width: "auto" ,height:"auto"}}

        />
    </div>
  </div>
  <div className='w-full bg-blue-50 mt-10 '>
  <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:flex justify-evenly items-center gap-4 sm:p-8 md:p-5'>
        <div className="flex justify-center items-center">
          <Image className="object-contain object-center rounded filter grayscale hover:grayscale-0 transition duration-300"
            alt="client-1" src="/assets/client-1.png"
            width={100}
            height={20}
           data-aos="zoom-in"
           style={{ width: "auto" ,height:"auto"}}
            priority
          />
        </div>
        <div className="flex justify-center items-center">
          <Image className="object-contain rounded filter grayscale hover:grayscale-0 transition duration-300"
            alt="client-2" src="/assets/client-2.png"
            width={100}
            height={20}
            data-aos="zoom-in"
            data-aos-delay="100"
            style={{ width: "auto" ,height:"auto"}}

          />
        </div>
        <div className="flex justify-center items-center">
          <Image className="object-contain rounded filter grayscale hover:grayscale-0 transition duration-300"
            alt="client-3" src="/assets/client-3.png"
            width={100}
            height={20}
             data-aos="zoom-in"
            data-aos-delay="200"
            style={{ width: "auto" ,height:"auto"}}

          />
        </div>
        <div className="flex justify-center items-center">
          <Image className="object-contain rounded filter grayscale hover:grayscale-0 transition duration-300"
            alt="client-4" src="/assets/client-4.png"
            width={100}
            height={20}
             data-aos="zoom-in"
            data-aos-delay="300"
            style={{ width: "auto" ,height:"auto"}}

          />
        </div>
        <div className="flex justify-center items-center">
          <Image className="object-contain rounded filter grayscale hover:grayscale-0 transition duration-300"
            alt="client-5" src="/assets/client-5.png"
            width={100}
            height={20}
             data-aos="zoom-in"
            data-aos-delay="400"
            style={{ width: "auto" ,height:"auto"}}

          />
        </div>
        <div className="flex justify-center items-center">
          <Image className="object-contain object-center rounded filter grayscale hover:grayscale-0 transition duration-300"
            alt="client-6" src="/assets/client-6.png"
            width={100}
            height={20}
             data-aos="zoom-in"
            data-aos-delay="500"
            style={{ width: "auto" ,height:"auto"}}

          />
        </div>
      </div>
    </div>
</section>
   ) 
}

export default Hero