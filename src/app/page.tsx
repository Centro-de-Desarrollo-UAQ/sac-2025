"use client";

import { useState, useEffect } from "react";
import LegoWall from "@/components/loading/LegoWall";
import BigAhhChicken from "@/components/landingpage/herosection/BigAhhChicken";
import MenuSections from "@/components/landingpage/herosection/MenuSections";
import Schedule from "@/components/schedule/Schedule";


export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 10000));
      setIsLoading(false);
    };

    loadData();
  }, []);

  return (
    <div>
      {isLoading ? (
        <LegoWall />
      ) : (
        <main>
          <MenuSections/>
          <BigAhhChicken/>
          <Schedule/>
        </main>
      )}
    </div>
  );
}
