import React from 'react'

const Footer = () => {
  return (
<footer className="text-gray-600 body-font">
  <div className="bg-white shadow-md border-2  grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
    <div className=" mx-auto py-8 px-14 flex flex-col items-center sm:flex-row">
      <p className="text-gray-500 text-sm text-center sm:text-left">© Copyright
        <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-600 ml-1 font-semibold" target="_blank">Akeshya. </a>
        <span> All Rights Reserved</span>
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        <a className="text-gray-500">
         <h1 className='text-blue-900 hover:text-sky-600'>Terms and conditions</h1>
        </a>
        <a className="ml-3 text-gray-500">
         <h1 className='text-blue-900 hover:text-sky-600'>Refund policy</h1>
        </a>
        <a className="ml-3 text-gray-500">
        <h1 className='text-blue-900 hover:text-sky-600'>Privacy policy</h1>
        </a>
      </span>
    </div>
  </div>
</footer>  )
}

export default Footer