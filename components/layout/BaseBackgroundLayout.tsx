"use client";

import React from "react";

interface BaseBackgroundLayoutProps {
  children: React.ReactNode;
}

const BaseBackgroundLayout: React.FC<BaseBackgroundLayoutProps> = ({ children }) => {
  return (
    <div
      className="flex flex-col justify-center items-center min-h-screen w-full"
      style={{
        backgroundImage: "url('/aztea-logos/current-background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {children}
    </div>
  );
};

export default BaseBackgroundLayout;