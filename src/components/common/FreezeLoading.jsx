import React from "react";
import Lottie from "lottie-react";
import loaderAnimation from "../../assets/lottie/collectingMoney.json";
import useTheme from "../../hooks/useTheme";

export default function FreezeLoading() {
  const { theme } = useTheme();

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center
        ${theme === "dark" ? "bg-[#060010]" : "bg-[#fafafa]"}
      `}
    >
      <div className="w-40 sm:w-48 md:w-56">
        <Lottie
          animationData={loaderAnimation}
          loop
          style={{
            filter: theme === "dark" ? "invert(1)" : "none",
          }}
        />
      </div>
    </div>
  );
}
