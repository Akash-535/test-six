import React from "react";
import UserGuides from "./UserGuides";
import ContentPage from "./ContentPage";

const Hero = ({ heroContent }: any) => {
  return (
    <div className="pt-[139px] pb-[62px] flex items-center justify-center">
      <div className="w-full max-w-[1240px] mx-auto flex justify-center items-center flex-col">
        <div className="flex items-center justify-between w-full">
          <h1 className="text-[32px] font-semibold leading-[100%]">
            My DevOps Spaces
          </h1>
          <button className="py-3.5 px-4 button-bg text-white rounded-xs cursor-pointer">
            Create a DevOps Space (1 left)
          </button>
        </div>
        <div className="pt-11 flex justify-between items-start w-full">
          <UserGuides />
          <ContentPage contentData={heroContent} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
