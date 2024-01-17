import React from "react";

import { Img } from "components";

const DesktopNineRowclippathgroup = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-[39px] md:h-auto object-cover w-[27%]"
          src="images/img_clippathgroup.png"
          alt="clippathgroup"
        />
        <Img
          className="h-6 mb-2.5 ml-2.5 mt-[3px]"
          src="images/img_vector.svg"
          alt="vector"
        />
        <Img
          className="h-6 mb-1 mt-[9px]"
          src="images/img_cursor.svg"
          alt="cursor"
        />
        <Img
          className="h-[25px] mb-1 mt-[9px]"
          src="images/img_contrast.svg"
          alt="contrast"
        />
        <Img
          className="h-[25px] mb-1 mt-[9px]"
          src="images/img_contrast.svg"
          alt="contrast_One"
        />
        <Img
          className="h-[19px] my-[9px] w-[19px]"
          src="images/img_contrast_indigo_900.svg"
          alt="contrast_Two"
        />
        <Img
          className="h-6 mb-2.5 mt-[3px]"
          src="images/img_vector.svg"
          alt="vector_One"
        />
      </div>
    </>
  );
};

DesktopNineRowclippathgroup.defaultProps = {};

export default DesktopNineRowclippathgroup;
