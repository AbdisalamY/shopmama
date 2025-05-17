import React, { ReactNode } from "react";
import Image from "next/image";

interface AuthLayoutProps {
  children: ReactNode;
  backgroundHeight?: "full" | "auto";
}

export default function AuthLayout({ children, backgroundHeight = "full" }: AuthLayoutProps) {
  return (
    <div className="flex h-screen bg-white">
      {/* Left column with image */}
      <div className={`hidden md:block md:w-2/5 relative bg-white ${backgroundHeight === "full" ? "h-full" : "h-auto"}`}>
        <Image 
          src="/images/auth-background.png"
          alt="City skyline view"
          fill
          className="object-cover"
          priority
        />
      </div>
      {/* Right column with form */}
      <div className="w-full md:w-3/5 flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white rounded-lg p-8">
          {children}
        </div>
      </div>
    </div>
  );
}