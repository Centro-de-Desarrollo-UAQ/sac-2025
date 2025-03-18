import React, { useState } from "react";
import RedBrickPdf from "./RedBrickPdf";
import YellowBrickPdf from "./YellowBrickPdf";
import DownloadPdfButton from "./DownloadPdfButton";
import BoldLego from "./BoldLego";
import TextBubbledwlr from "./TextBubbledwlr";


//aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa 
const LegoModal = () => {
      const [isOpen, setIsOpen] = useState(false);

      const openModal = () => {
        setIsOpen(true);
      };

      const closeModal = () => {
        setIsOpen(false);
  };
    return (
      <div className="p-8">
      {/* Show Modal Button */}
      <button 
        onClick={openModal}
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-colors duration-300"
      >
        Show Modal
      </button>

      {isOpen && (
        <div className="fixed inset-0 backdrop-blur-xs bg-opacity-50 flex justify-center items-center z-50">
          <div className="  
          rounded-3xl relative min-h-[600px] min-w-[300px] bg-gradient-to-r from-[#f87171] from-50% to-white to-50% overflow-hidden
          sm:min-h-[300px] sm:min-w-[500px]
          md:min-h-[400px] md:min-w-[700px]
          ">
            
            
            <div className="w-[140px] h-[140px] absolute top-24  left-0 z-20 ml-[2px]
            sm:top-0 sm:p-2
            md:p-0 md:w-fit md:h-fit md:mt-[30px] md:ml-[10px]">
              <TextBubbledwlr />
            </div>
            
            <div className="sm:hidden w-full h-fit absolute left-1/2 -translate-x-1/2 bottom-0 rotate-270  mb-[86px]">
              <YellowBrickPdf/>
            </div>

            <div className="hidden sm:block w-full h-fit absolute left-1/2 -translate-x-1/2 top-0 ml-[15px]">
              <RedBrickPdf/>
            </div>

            <div className="w-[140px] h-fit absolute left-1/2 -translate-x-1/2 bottom-24 mb-[86px]
            sm:bottom-0 sm:mb-[3px] sm:absolute sm:left-38
            md:w-[160px] md:h-fit md:left-50">
              <BoldLego/>
            </div>
            
            <div className="w-full h-fit absolute bottom-0 mb-[18px]
            sm:w-fit sm:h-fit sm:right-12 sm:mt-[20px] sm:top-1/2 sm:-translate-y-1/2 sm:mb-[0px]">
              <DownloadPdfButton/>
            </div>
            
            <div className="w-fit h-fit absolute top-6 right-6 ">
              <span 
                className="text-black text-2xl font-bold cursor-pointer hover:text-red-500" 
                onClick={closeModal}
              >
                ✕
              </span>
            </div>
          </div>
        </div>
      )}
    </div>

  );
};

export default LegoModal;
