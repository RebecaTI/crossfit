"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { Particles } from "@/components/magicui/particles";

export default function HeroParticles() {
  const { resolvedTheme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(resolvedTheme === "dark" ? "#ffffff" : "#000000");
  }, [resolvedTheme]);

  return (
    <div className="relative flex h-[400px] sm:h-[700px] w-full flex-col items-center justify-center overflow-hidden rounded-lg  ">
      <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        ease={40}
        color={color}
        refresh
      />
    </div>
  );
}
