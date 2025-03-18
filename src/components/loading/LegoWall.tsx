"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import gsap from "gsap";
import LegoBlock from "./LegoBlock";
import { createRoot } from "react-dom/client";

export default function CustomLoader() {
  const gridRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient || !gridRef.current) return;

    const blockImages = [
      "/RedBlock.png",
      "/BlueBlock.png",
      "/GreenBlock.png",
      "/YellowBlock.png",
    ];

    const cells = Array.from(gridRef.current.children) as HTMLDivElement[];

    const animateBlock = (cell: HTMLDivElement) => {
      const imageUrl = blockImages[Math.floor(Math.random() * blockImages.length)];

      const blockContainer = document.createElement("div");
      blockContainer.style.width = "100%";
      blockContainer.style.height = "100%";
      blockContainer.style.position = "absolute";
      blockContainer.style.top = "0";
      blockContainer.style.left = "0";
      blockContainer.style.display = "flex";
      blockContainer.style.alignItems = "center";
      blockContainer.style.justifyContent = "center";
      blockContainer.style.opacity = "0";
      blockContainer.style.transform = "scale(0.8)";
      cell.innerHTML = "";
      cell.appendChild(blockContainer);

      const root = createRoot(blockContainer);
      root.render(<LegoBlock imageUrl={imageUrl} />);

      gsap.to(blockContainer, {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "power2.out",
        onComplete: () => {
          gsap.to(blockContainer, {
            opacity: 0,
            scale: 0.8,
            duration: 0.8,
            delay: gsap.utils.random(2, 4),
            ease: "power2.in",
            onComplete: () => {
              cell.innerHTML = "";
            },
          });
        },
      });
    };

    const animateGroup = (groupSize: number) => {
      const availableCells = cells.filter((cell) => !cell.innerHTML);
      const selectedCells = gsap.utils.shuffle(availableCells).slice(0, groupSize);

      selectedCells.forEach((cell) => {
        const delay = gsap.utils.random(0, 1);
        setTimeout(() => animateBlock(cell), delay * 1000);
      });
    };

    const startAnimationFlow = () => {
      const interval = setInterval(() => {
        const groupSize = gsap.utils.random(3, 5);
        animateGroup(groupSize);

        setTimeout(() => {
          const filledCells = cells.filter((cell) => cell.innerHTML);
          if (filledCells.length > 0) {
            const cellToRemove = gsap.utils.random(filledCells);
            gsap.to(cellToRemove.children[0], {
              opacity: 0,
              scale: 0.8,
              duration: 0.8,
              ease: "power2.in",
              onComplete: () => {
                cellToRemove.innerHTML = "";
              },
            });
          }
        }, gsap.utils.random(2000, 4000));
      }, gsap.utils.random(1000, 2000));

      return () => clearInterval(interval);
    };

    const cleanupInterval = startAnimationFlow();

    return () => {
      cleanupInterval();
      cells.forEach((cell) => (cell.innerHTML = ""));
    };
  }, [isClient]);

  if (!isClient) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-50">
      <div
        ref={gridRef}
        className="grid grid-cols-[repeat(5,minmax(0,1fr))] lg:grid-cols-[repeat(10,minmax(0,1fr))] grid-rows-[repeat(5,minmax(0,1fr))] lg:grid-rows-[repeat(10,minmax(0,1fr))] w-full h-full gap-1 p-1"
      >
        {Array.from({ length: 100 }).map((_, index) => (
          <div
            key={index}
            className="bg-white relative w-full h-full"
            style={{ minWidth: "60px", minHeight: "60px" }}
          ></div>
        ))}
      </div>
    </div>,
    document.body
  );
}
