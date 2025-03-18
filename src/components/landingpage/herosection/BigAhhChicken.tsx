import React from "react";

export default function BigAhhChicken() {
  return (
    <>
      <div className="hidden sm:block relative h-screen">
        <div id="model-container" className="w-full h-fit absolute top-7/24 left-1/2 -translate-x-1/2 -translate-y-4/12">
          <div className="w-fit h-fit relative left-1/2 -translate-x-1/2 mt-[20px]">
            <img
              className="max-h-[369px] max-w-[335px] sm:max-h-[300px] sm:max-w-[270px] md:max-h-[369px] md:max-w-[335px] lg:max-h-[469px] lg:max-w-[435px]"
              src="LegoLookingTroyan.png"
              alt="LegoLookingTroyan"
            />
          </div>
          <div className="mt-[20px] w-full text-center text-[#1c1c1c] font-light font-['Cera_Pro']
                transform text-4xl leading-tight
                sm:text-3xl sm:leading-snug
                md:bottom-26/128 md:text-5xl md:leading-normal
                lg:bottom-12/64 lg:text-[73.05px] lg:leading-[73.05px]
                xl:bottom-5/32 xl:text-[90px] xl:leading-[90px]
                2xl:bottom-3/18 2xl:text-[90px] 2xl:leading-[90px]">
            SEMANA ACADEMICA <br />CULTURAL 2025
          </div>
        </div>

        <div id="circles-container" className="hidden sm:block sm:w-[600px] sm:h-[550px] md:w-[750px] md:h-[700px] lg:w-[950px] lg:h-[900px] absolute top-3/12 left-1/2 -translate-x-1/2 -translate-y-7/24">
          <div className="block sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px] lg:w-[231px] lg:h-[231px] bg-[#f75e63] m-auto mr-[60px] right-0 top-0 ml-100px rounded-full absolute shrink"></div>
          <div className="block sm:w-[70px] sm:h-[70px] md:w-[90px] md:h-[90px] lg:w-[102px] lg:h-[102px] bg-[#c5f06f] absolute m-auto right-0 top-9/36 rounded-full shrink"></div>
          <div className="block sm:w-[60px] sm:h-[60px] md:w-[78px] md:h-[78px] lg:w-[88px] lg:h-[88px] md:-ml-[20px] sm:-ml-[20px] bg-[#42cdff] m-auto left-7/32 bottom-9/24 rounded-full absolute shrink"></div>
        </div>
      </div>

      <div className="sm:hidden relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="relative max-w-sm px-4 flex flex-col items-center">
          <div className="relative">
            <div className="aspect-square w-[300px] h-[300px] flex items-center justify-center">
              <img
                className="max-w-[85%] max-h-[85%]"
                src="LegoLookingTroyan.png"
                alt="LegoLookingTroyan"
              />
            </div>
          </div>

          <div className="mt-6 text-center text-[#1c1c1c] font-light font-['Cera_Pro'] text-xl">
            SEMANA ACADEMICA <br />CULTURAL 2025
          </div>
        </div>

        <div className="absolute w-[120px] h-[120px] bg-[#f75e63] rounded-full -top-12 -left-12"></div>
        <div className="absolute w-[60px] h-[60px] bg-[#c5f06f] rounded-full top-16 -right-10"></div>
        <div className="absolute w-[50px] h-[50px] bg-[#42cdff] rounded-full bottom-60 -right-9"></div>
      </div>
    </>
  );
}