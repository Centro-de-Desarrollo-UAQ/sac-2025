import React from "react";

export default function MenuSections(){

    return(
    
        <div className="hidden  lg:block h-fit items-start gap-3 text-lg w-fit justify-between ml-20 mt-70 absolute z-1 ">
            
                <div className=" mb-1 w-fit  justify-start items-center gap-[15px] flex transition-all duration-100 hover:scale-106">
                    <a href="#section-1" className="w-fit justify-start items-center gap-[15px] flex ">
                        <div className="w-8 h-8  px-[5px] py- bg-[#ffdf61] rounded-[52px] justify-center items-center gap-[5px] flex">
                        <img className="h-5 w-5" src="/InfoIcon.png"/>
                        </div>  
                        <div className="w-fit text-black font-normal font-['Cera Pro'] leading-tight">¿Qué es la SAC?</div>
                    </a>
                </div>

                <div className=" mb-1 w-fit justify-start items-center gap-[15px] flex transition-all duration-100 hover:scale-106 ml-8 p-1.5">
                    <a href="#section-2" className="w-fit justify-start items-center gap-[15px] flex ">                
                        <div className="w-8 h-8 px-[5px] py-2 bg-[#f75e63] rounded-[52px] justify-center items-center gap-[5px] flex">
                        <img className=" w-5 h-5" src="/ScheduleIcon.png" />
                        </div>
                        <div className="w-fit text-black font-normal font-['Cera Pro'] leading-tight">Horarios</div>
                    </a>
                </div>

                <div className=" mb-1 w-fit justify-start items-center gap-[15px] flex transition-all duration-100 hover:scale-106 ml-18">
                    <a href="#section-3" className="w-fit justify-start items-center gap-[15px] flex ">
                        <div className="w-8 h-8 px-[5px] py-2 bg-[#c5f06f] rounded-[52px] justify-center items-center gap-[5px] flex ">
                            <img className="w-5 h-5" src="LecturesIcon.png" />
                        </div>
                        
                        <div className="w-fit text-black font-normal font-['Cera Pro'] leading-tight">Expositores</div>
                    </a>
                </div>

        </div>
    )
}