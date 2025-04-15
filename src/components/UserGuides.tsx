import { CONATCT_SUPPORT_LIST, USER_GUIDES_LIST } from "@/utils/helper";
import {
  COntactSupportIcon,
  DocsIcon,
  FaqsIcon,
  SaveIcon,
} from "@/utils/icons";
import React from "react";

const UserGuides = () => {
  return (
    <div className="w-full max-w-[251px] flex flex-col gap-5">
      <div className="w-full">
        <p className="text-xl font-medium leading-[100%] pb-5 text-primary-black">
          User’s Guides
        </p>
        <div className="flex flex-col gap-2 w-full">
          {USER_GUIDES_LIST.map((obj, i) => (
            <div
              key={i}
              className="w-full min-w-[251px] bg-gradient-to-r from-[#E7E2FA] to-[#4F02FE00] py-3 px-3.5 gap-2.5 flex items-center border-l-2 border-[#4F02FE]"
            >
              <SaveIcon />
              <p className="text-primary-black text-sm font-medium leading-[100%]">
                {obj}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full">
        <p className="text-xl font-medium leading-[100%] pb-5 text-primary-black">
          Contact and Support
        </p>
        <div className="flex flex-col gap-2 w-full">
          {CONATCT_SUPPORT_LIST.map((obj, i) => (
            <div
              key={i}
              className="w-full min-w-[251px] bg-gradient-to-r from-[#F1E1F3] to-[#CD0CA700] py-3 px-3.5 gap-2.5 flex items-center border-l-2 border-[#CD0CA7]"
            >
              {i === 0 ? <FaqsIcon /> : <COntactSupportIcon />}
              <p className="text-primary-black text-sm font-medium leading-[100%]">
                {obj}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full">
        <p className="text-xl font-medium leading-[100%] pb-5 text-primary-black">
          Others
        </p>
        <div className="w-full min-w-[251px] bg-gradient-to-r from-[#F1E1F3] to-[#CD0CA700] py-3 px-3.5 gap-2.5 flex items-center border-l-2 border-[#CD0CA7]">
          <DocsIcon />
          <p className="text-primary-black text-sm font-medium leading-[100%]">
            DevSecOps Docs
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserGuides;
