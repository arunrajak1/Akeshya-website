import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import Modal from './Modal'; 

const Header = () => {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [modalOpen, setModalOpen] = useState(false); 
  const [isSmallOrMediumScreen, setIsSmallOrMediumScreen] = useState(false);

  const handleNavigate = (section) => {
    // Close the modal before navigating
    setModalOpen(false);
    // Navigate to the selected section
    router.push(section);
  };

  const handleToggleModal = () => {
    setModalOpen(!modalOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    const handleResize = () => {
      // Check if the screen width is small or medium
      setIsSmallOrMediumScreen(window.innerWidth < 960);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    // Initial check for screen size
    handleResize();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className={`text-gray-600 sticky top-0 z-10 transition-shadow duration-300 ${scrolled ? 'border' : ''}`}>
      <div className="mx-auto flex flex-wrap flex-col md:flex-row md:items-center bg-white lg:px-24 sm:px-10 md:px-10">
        <a className="flex title-font font-medium items-center text-blue-900 md:mb-0">
          <Image
            src="/assets/logo.png"
            alt="Company Logo"
            width={50}
            height={40}
            style={{ width: "auto" ,height:"auto"}}

          />
          <span className="text-3xl font-semibold">AKESHYA</span>
          <div className="lg:hidden ml-auto">
            <button className="focus:outline-none" onClick={handleToggleModal}>
              <i className={`bi ${modalOpen ? '' : 'bi-list'} text-3xl`}></i>
            </button>
          </div>
        </a>
        
        {/* Render modal only on small or medium screens */}
        {isSmallOrMediumScreen && (
          <Modal isOpen={modalOpen} onClose={handleToggleModal}>
            <nav className="flex flex-col items-center space-y-4">
              <a className="hover:text-blue-900 cursor-pointer" onClick={() => handleNavigate('#')} href="#">Home</a>
              <a className="hover:text-blue-900 cursor-pointer" onClick={() => handleNavigate('#about')} href="#about">About</a>
              <a className="hover:text-blue-900 cursor-pointer" onClick={() => handleNavigate('#services')} href="#services">Services</a>
              <button className="text-white bg-blue-900 border-0 py-2 px-6 focus:outline-none hover:bg-sky-600 rounded-full" onClick={() => handleNavigate('#contact')}>Contact us</button>
            </nav>
          </Modal>
        )}

        {/* Render navbar only on large screens */}
        <nav className="hidden lg:flex flex-col md:flex-row md:ml-auto md:items-center md:space-x-4">
          <a className="mr-5 hover:text-blue-900 cursor-pointer" href="#">Home</a>
          <a className="mr-5 hover:text-blue-900 cursor-pointer" href="#about">About</a>
          <a className="mr-5 hover:text-blue-900 cursor-pointer" href="#services">Services</a>
          <button className="items-center text-white bg-blue-900 border-0 py-2 px-6 focus:outline-none hover:bg-sky-600 rounded-full mt-4 md:mt-0" onClick={() => handleNavigate('#contact')}>Contact us</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
