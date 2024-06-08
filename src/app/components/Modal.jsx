import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="fixed inset-0 z-50 overflow-auto bg-transparent flex justify-end items-end">
        <div className="bg-white rounded-lg p-6 w-1/2 h-full max-w-screen-md">
          {children}
          <button className="absolute top-0 right-0 m-4" onClick={onClose}>
            <span className="sr-only">Close</span>
            <svg
              className="h-6 w-6 text-gray-700"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
