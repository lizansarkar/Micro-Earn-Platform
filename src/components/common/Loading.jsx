import React from "react";
import Lottie from "lottie-react";
import loaderAnimation from "../../assets/lottie/microearn-loader.json";
import useTheme from "../../hooks/useTheme";

export default function Loading() {
  const { theme } = useTheme();

  return (
    <div className="flex items-center justify-center min-h-screen w-full overflow-hidden bg-transparent">
      <div className="w-full max-w-[300px] md:max-w-[500px] px-6">
        <Lottie
          animationData={loaderAnimation}
          loop={true}
          // style={{ 
          //   filter: theme === "dark" ? "invert(1) brightness(1.2)" : "none" 
          // }}
          // responsive classes: 
          // h-auto and w-full makes it scale within the max-w container
          className="lottie-div w-full h-auto mx-auto"
        />
      </div>
    </div>
  );
}