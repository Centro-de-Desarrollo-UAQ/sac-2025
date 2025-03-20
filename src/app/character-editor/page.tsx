"use client";

import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";
import React, { useState, useRef, useEffect } from "react";
import { parseColor } from "@react-stately/color";
import { ColorPicker } from "@/components/ui";
import { Howl } from "howler";

import { headwearParts } from "@/components/character-editor/headwear-parts";
import { headwearThumbnails } from "@/components/character-editor/headwear-thumbnails";
import { headParts } from "@/components/character-editor/head-parts";
import { headThumbnails } from "@/components/character-editor/head-thumbnails";
import { patternParts } from "@/components/character-editor/patterns";
import { patternThumbnails } from "@/components/character-editor/pattern-thumbnails";
import torso from "@/assets/character-editor/body/torso.png";
import hands from "@/assets/character-editor/body/hands.png";

// TODO: use the correct userid
export default function Page() {
  const router = useRouter();
  const soundRefs = useRef<Howl[]>([]);
  const popSound = "/media/happy-pop-2-185287.mp3";
  const [selectedCategory, setSelectedCategory] = useState<
    "head" | "headwear" | "clothe"
  >("head");
  const [semantic, setSemantic] = useState<"white" | "black">("white");
  const [color, setColor] = useState(parseColor("#002966"));
  const characterParts = {
    // add thumbnails for the parts
    head: headParts.map((part, i) => ({
      ...part,
      thumbnail: headThumbnails[i].src,
    })),
    headwear: headwearParts.map((part, i) => ({
      ...part,
      thumbnail: headwearThumbnails[i].src,
    })),
    clothe: patternParts.map((part, i) => ({
      ...part,
      thumbnail: patternThumbnails[i].src,
    })),
  };
  const [selectedParts, setSelectedParts] = useState({
    head: headParts[0],
    headwear: headwearParts[0],
    clothe: patternParts[0],
  });

  const handlePartSelection = (
    category: "head" | "headwear" | "clothe",
    part: {
      id: number;
      src: StaticImageData;
      thumbnail: StaticImageData;
    } | null
  ) => {
    soundRefs.current[0].play();
    setSelectedParts({ ...selectedParts, [category]: part });
  };

  const categories: { key: "clothe" | "head" | "headwear"; src: string }[] = [
    { key: "head", src: "/head-icon.png" },
    { key: "clothe", src: "/shirt-icon.png" },
    { key: "headwear", src: "/hair-icon.png" },
  ];

  useEffect(() => {
    soundRefs.current = Array.from(
      { length: 10 },
      () =>
        new Howl({
          src: [popSound],
          html5: true,
        })
    );

    return () => {
      soundRefs.current.forEach((sound) => sound.unload());
    };
  }, []);

  return (
    <div className='flex flex-col px-2 md:px-4 items-center justify-center h-svh space-y-4 bg-[url("/bg-character-editor.png")] bg-cover bg-center select-text'>
      {/* Color selector */}
      <div className="w-full md:w-1/2 relative flex justify-center space-x-4">
        <div className="absolute top-4 right-0 flex space-x-4 z-60">
          <ColorPicker
            label="Color de ropa"
            value={color}
            onChange={setColor}
          />
        </div>
        <div className="absolute top-4 left-0 flex space-x-4 z-60">
          <button
            className={`w-8 h-8 bg-white border-2 border-black rounded-full cursor-pointer transition-all duration-300 ${
              semantic === "white"
                ? "border-yellow-400 shadow-lg shadow-yellow-500/50"
                : "hover:scale-105"
            }`}
            onClick={() => setSemantic("white")}
          />
          <button
            className={`w-8 h-8 bg-black border-2 border-white rounded-full cursor-pointer transition-all duration-300 ${
              semantic === "black"
                ? "border-yellow-400 shadow-lg shadow-yellow-500/50"
                : "hover:scale-105"
            }`}
            onClick={() => setSemantic("black")}
          />
        </div>
      </div>

      {/* Character Preview */}
      <div className="relative w-full md:w-2/3 xl:w-1/3 h-[40vh] md:h-1/2">
        <div className="absolute -top-3 z-50">
          <Image src={hands} width={500} height={500} alt="Hands preview" />
        </div>
        {selectedParts.headwear && (
          <div className="absolute -top-3 z-40">
            <Image
              src={selectedParts.headwear.src}
              width={500}
              height={500}
              alt="Headwear preview"
            />
          </div>
        )}
        <div className="absolute -top-3 z-30">
          <Image
            src={selectedParts.head.src}
            width={500}
            height={500}
            alt="Head preview"
          />
        </div>
        {selectedParts.clothe && (
          <div
            className={`absolute -top-3 z-20 ${
              semantic === "black" && "invert"
            }`}
          >
            <Image
              src={selectedParts.clothe.src}
              width={500}
              height={500}
              alt="Pattern preview"
            />
          </div>
        )}
        <div className="absolute inset-0 -top-3 z-10 mix-blend-multiply w-full max-w-[500px] aspect-square">
          <svg
            className="w-full h-full"
            viewBox="0 0 1024 1024"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M352.787 657.849H295.041H294.235L280 605.206L291.818 567.066L362.725 433.041H398.984L352.787 657.849Z"
              fill={color.toString()}
            />
            <path
              d="M352.787 657.849H295.041H294.235L280 605.206L291.818 567.066L362.725 433.041H398.984L352.787 657.849Z"
              stroke={color.toString()}
            />
            <path
              d="M673.213 657.581H730.959H731.765L746 604.937L734.182 566.798L663.275 432.772H627.016L673.213 657.581Z"
              fill={color.toString()}
            />
            <path
              d="M673.213 657.581H730.959H731.765L746 604.937L734.182 566.798L663.275 432.772H627.016L673.213 657.581Z"
              stroke={color.toString()}
            />
          </svg>
        </div>
        <div className="absolute inset-0 -top-3 z-10 w-full max-w-[500px] aspect-square">
          <svg
            className="w-full h-full"
            viewBox="0 0 1024 1024"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M518.371 682.29H349.698L400.112 433.441C402.193 420.76 408.385 412.489 423.694 410.479C439.004 408.468 518.371 410.479 518.371 410.479V682.29Z"
              fill={color.toString()}
              stroke={color.toString()}
            />
            <path
              d="M507.762 682.377H676.435L626.021 433.529C623.941 420.848 617.749 412.577 602.439 410.566C587.13 408.556 507.762 410.566 507.762 410.566V682.377Z"
              fill={color.toString()}
              stroke={color.toString()}
            />
          </svg>
        </div>
        <div className="absolute -top-3 z-0">
          <Image src={torso} width={500} height={500} alt="Body preview" />
        </div>
      </div>

      {/* Customization Panel */}
      <div className="w-full md:w-2/3 xl:w-1/2 p-2 justify-center flex bg-blacksac z-60 rounded-full">
        {/* Tabs */}
        <div className="flex overflow-x-auto md:overflow-visible space-x-4">
          {categories.map((category) => (
            <button
              key={category.key}
              className={`p-2 rounded-full transition-all hover:scale-105 ${
                selectedCategory === category.key ? "bg-yellow-300" : "bg-white"
              }`}
              onClick={() => setSelectedCategory(category.key)}
            >
              <Image
                src={category.src}
                width={24}
                height={24}
                alt={`${category.key} icon`}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Options Grid */}
      <div className="w-full md:w-2/3 xl:w-1/2 h-[40vh] md:h-1/3 grid grid-cols-3 md:grid-cols-4 xl:grid-cols-5 place-items-center overflow-auto scrollbar p-4 gap-4 bg-white border-2 border-blacksac z-60 rounded-4xl">
        {/* Delete option on headwear and clothe */}
        {(selectedCategory === "headwear" || selectedCategory === "clothe") && (
          <div
            className="w-24 h-24 p-3 border-2 rounded-lg grid grid-template-stack items-start cursor-pointer transition-all duration-300 border-gray-200 hover:border-yellow-300 hover:scale-105"
            onClick={() => handlePartSelection(selectedCategory, null)}
          >
            <Image
              src="/cancel.png"
              width={600}
              height={600}
              alt="Delete icon"
            />
          </div>
        )}

        {characterParts[selectedCategory].map((part) => (
          <div
            key={part.id}
            className={`w-24 h-24 p-3 border-2 rounded-lg grid grid-template-stack items-start cursor-pointer transition-all duration-300 ${
              selectedParts[selectedCategory]?.src === part.src
                ? "border-yellow-400 bg-yellow-50"
                : "border-gray-200 hover:border-yellow-300 hover:scale-105"
            }`}
            onClick={() => handlePartSelection(selectedCategory, part)}
          >
            {/* Thumbnail */}
            {part.thumbnail && (
              <Image
                className={`grid-area-stack ${
                  selectedCategory === "clothe" && "invert"
                }`}
                src={part.thumbnail}
                width={600}
                height={600}
                alt={`${selectedCategory} thumbnail`}
              />
            )}
            {/* Checkmark */}
            {selectedParts[selectedCategory]?.src === part.src && (
              <div className="h-full flex items-end justify-end fill-green-500 grid-area-stack">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="size-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="w-full md:w-2/3 xl:w-1/2 mb-4 flex justify-end">
        <button
          type="button"
          onClick={() =>
            router.push(
              `/character-editor/${selectedParts.head.id}/${
                selectedParts.headwear?.id
              }/${selectedParts.clothe?.id}/${
                color.toString("hex").split("#")[1]
              }/${semantic}/276396`
            )
          }
          className="w-full md:w-auto flex group items-center justify-center gap-2 bg-blacksac text-white font-bold py-2 px-4 rounded-full uppercase cursor-pointer transition-all duration-200 hover:text-yellow-300 hover:scale-105"
        >
          ¡Terminé!
          <svg
            className="w-4 h-4 fill-white transition-all duration-200 group-hover:fill-yellow-300 group-hover:scale-105"
            viewBox="0 0 33 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M25.5 0.5H7.5V6.5H25.5V0.5Z" />
            <path d="M33 6.5H0V37.5H33V6.5Z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
