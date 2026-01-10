import React from "react";
import Lottie from "lottie-react";
import loaderAnimation from "../../assets/lottie/microearn-loader.json";
import useTheme from "../../hooks/useTheme";

export default function Loading() {
  const { theme } = useTheme();

  return (
    <div className="">
      <div className="flex items-center justify-center min-h-screen">
        <div>
          <div className="">
            <Lottie
              animationData={loaderAnimation}
              loop={true}
              style={{ filter: theme === "dark" ? "invert(1)" : "none" }}
              className="lottie-div h-125 w-125 mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
