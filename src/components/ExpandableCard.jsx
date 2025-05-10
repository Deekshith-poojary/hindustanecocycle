import { useState } from "react";

export default function ExpandableCard(
  {title="",desc=""}
) {
  const [isOpen, setIsOpen] = useState(false);

  const handleCardClick = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="p-8 bg-slate-100 h-full w-full flex items-center justify-center">
      {/* Main card */}
      <div
        className="md:w-[80%] w-[93%] h-[10%] bg-white rounded-lg shadow-md flex items-center justify-center cursor-pointer transition-transform duration-300 hover:scale-105"
        onClick={handleCardClick}
      >
        <h2 className="text-xl font-semibold p-4">{title}</h2>
      </div>

      {/* Popup modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          {/* Animated popup card */}
          <div
            className="bg-white rounded-lg shadow-lg w-[90%] max-w-2xl p-8 animate-popup flex flex-col items-center justify-center relative"
          >
            {/* Close button */}
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
              onClick={handleClose}
            >
              ×
            </button>

            {/* Popup Content */}
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <p className="text-gray-600 text-center">
              {desc}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
