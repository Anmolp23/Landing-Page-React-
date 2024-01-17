import React from "react";

import { Img, Line, Text } from "components";

const DesktopNineComp = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-end justify-start w-[1%] md:w-full">
          <div className="flex flex-row items-center justify-evenly rotate-[180deg] w-full">
            <Line className="bg-gray-400 h-[393px] rounded-bl-[43px] rounded-br-[42px] rounded-tl-[43px] rounded-tr-[43px] w-px" />
            <Line className="bg-gradient1  h-[393px] rounded-bl-[43px] rounded-br-[42px] rounded-tl-[43px] rounded-tr-[43px] w-px" />
          </div>
        </div>
        <div className="flex flex-col items-center justify-start w-full">
          <div className="bg-gray-400 flex flex-col items-center justify-start rounded-[42px] w-full">
            <div className="bg-gradient2  flex sm:flex-col flex-row sm:gap-10 items-start justify-between p-[34px] sm:px-5 rounded-[42px] w-full">
              <Img
                className="h-[34px] rounded-[50%] w-[34px]"
                src="images/img_frame.svg"
                alt="frame"
              />
              <Text
                className="mb-[137px] sm:mt-0 mt-[141px] sm:text-[34.26px] md:text-[36.26px] text-[38.26px] text-center text-white-A700 tracking-[0.77px]"
                size="txtLatoBold3826"
              >
                {props?.text1}
              </Text>
              <Img
                className="h-[34px] rounded-[50%] w-[34px]"
                src="images/img_frame_gray_100.svg"
                alt="frame_One"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

DesktopNineComp.defaultProps = { text1: "9 + 6 + 7x - 2x - 3" };

export default DesktopNineComp;
