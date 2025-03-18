"use client";

import { colorVars } from "@/app/globals";
import { ScheduleDay } from "@/interfaces/schedule";
import { useEffect, useState } from "react";
import scheduleData from "../../testdata/schedule.json";
import ErrorComponent from "../error/ErrorComponent";
import Block from "./Block";
import ScheduleButton from "./ScheduleButton";

const Schedule = () => {
  const data = scheduleData as ScheduleDay[];
  const [currentDay, setCurrentDay] = useState<ScheduleDay>();

  const buttonStyles = [
    "text-redsac border-3 border-redsac bg-redsac/20 focus:bg-redsac focus:text-blacksac focus:border-blacksac",
    "text-bluesac border-3 border-bluesac bg-bluesac/20 focus:bg-bluesac focus:text-blacksac focus:border-blacksac",
    "text-greensac border-3 border-greensac bg-greensac/20 focus:bg-greensac focus:text-blacksac focus:border-blacksac",
    "text-yellowsac border-3 border-yellowsac bg-yellowsac/20 focus:bg-yellowsac focus:text-blacksac focus:border-blacksac",
  ];

  const buttonStylesB = [
    "text-black border-3 border-black bg-redsac",
    "text-black border-3 border-black bg-bluesac",
    "text-black border-3 border-black bg-greensac",
    "text-black border-3 border-black bg-yellowsac",
  ];

  useEffect(() => {
    try {
      if (data !== undefined || data !== null) {
        setCurrentDay(data[0]);
      }
    } catch (error) {
      console.log(error);
    }
  }, [data]);

  const handleClick = (index: number) => {
    setCurrentDay(data[index]);
  };

  return (
    <section>
      {currentDay?.day !== undefined || currentDay?.events !== undefined ? (
        <div className="flex flex-col w-full p-2 justify-center items-center">
          <div className="flex flex-row row-span-2 w-full p-1 items-center h-fit justify-around">
            {data.map((el, index) => {
              return (
                <ScheduleButton
                  key={index}
                  text={el.day}
                  styling={buttonStyles[index % 4]}
                  clicker={() => {
                    handleClick(index);
                  }}
                  Bstyling={buttonStylesB[index % 4]}
                />
              );
            })}
          </div>

          <div id="schedule-scroll" className=" w-full self-start overflow-x-scroll lg:overflow-clip">
            <div
              className={`grid items-center lg:w-full w-[1500px] h-full mt-5 grid-rows-10 p-5 grid-cols-auto`}
            >
              {currentDay.events.map((el, index) => {
                return <Block key={index} hour={el.time} />;
              })}

              <div className=" grid grid-span-12 grid-cols-12 col-start-2 row-start-1 row-span-12 grid-rows-subgrid relative">
                {currentDay.events.map((el, index) => {
                  return el.items.map((item, subindex) => {
                    return (
                      <div
                        key={subindex}
                        className={`text-center text-wrap w-fit m-1 p-3 justify-center flex flex-col ${
                          colorVars[index % 4]
                        }`}
                        style={{
                          gridRow: `${index + 1} / span ${item.duration}`,
                        }}
                      >
                        <div className={`  w-full h-full content-center`}>
                          <h3 className=" font-medium">{item.title}</h3>
                          <p className="bg-whitesac rounded-4xl font-bold">
                            {item.place}
                          </p>
                        </div>
                      </div>
                    );
                  });
                })}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <ErrorComponent code={404} message="Not found" />
      )}
    </section>
  );
};

export default Schedule;
