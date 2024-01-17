import React from "react";

import { Button, Img, Line, List, SelectBox, Text } from "components";
import DesktopNineComp from "components/DesktopNineComp";
import DesktopNineRowclippathgroup from "components/DesktopNineRowclippathgroup";
import DesktopNineRowfaq from "components/DesktopNineRowfaq";

const componentFiftyThreeOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const componentFiftyFourOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const componentFiftyFiveOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const DesktopNinePage = () => {
  return (
    <>
      <div className="bg-gray-50 flex flex-col items-center justify-start mx-auto p-[27px] sm:px-5 w-full">
        <div className="flex flex-col items-start justify-start max-w-[1236px] mb-[280px] mx-auto md:px-5 w-full">
          <div className="flex md:flex-col flex-row font-inter md:gap-10 items-center justify-between ml-0.5 md:ml-[0] w-full">
            <DesktopNineRowclippathgroup className="flex md:flex-1 flex-row items-end justify-start w-[16%] md:w-full" />
            <DesktopNineRowfaq className="flex sm:flex-1 sm:flex-col flex-row gap-10 items-center justify-start w-auto sm:w-full" />
          </div>
          <div className="flex sm:flex-col flex-row font-inter sm:gap-5 items-center justify-start mt-16 w-auto sm:w-full">
            <div className="flex flex-row items-center justify-start w-auto">
              <Img
                className="h-[30px] w-[30px]"
                src="images/img_home.svg"
                alt="home_One"
              />
              <Img
                className="h-6 w-6"
                src="images/img_arrowright.svg"
                alt="arrowright"
              />
              <Text
                className="text-center text-gray-700 text-lg w-auto"
                size="txtInterMedium18"
              >
                Flashcard
              </Text>
            </div>
            <div className="flex flex-row items-center justify-start w-auto">
              <Img
                className="h-6 w-6"
                src="images/img_arrowright.svg"
                alt="arrowright_One"
              />
              <Text
                className="text-center text-gray-700 text-lg w-auto"
                size="txtInterMedium18"
              >
                Mathematics
              </Text>
              <div className="flex flex-row items-center justify-start w-auto">
                <Img
                  className="h-6 w-6"
                  src="images/img_arrowright.svg"
                  alt="arrowright_Two"
                />
                <Text
                  className="text-center text-indigo-900 text-lg w-auto"
                  size="txtInterSemiBold18"
                >
                  Relation and Function
                </Text>
              </div>
            </div>
          </div>
          <Text
            className="bg-clip-text bg-gradient  md:ml-[0] ml-[3px] mt-[65px] md:text-3xl sm:text-[28px] text-[32px] text-center text-transparent"
            size="txtMontserratRomanBold32"
          >
            Relations and Functions ( Mathematics )
          </Text>
          <div className="flex sm:flex-col flex-row font-inter gap-10 items-center justify-center md:ml-[0] ml-[341px] mt-12 w-auto sm:w-full">
            <div className="flex flex-col items-center justify-start w-[16%] sm:w-full">
              <div className="flex flex-col gap-3.5 items-center justify-start w-auto">
                <div className="flex flex-col items-start justify-start px-3 w-auto">
                  <Text
                    className="text-indigo-900 text-xl w-auto"
                    size="txtInterBold20"
                  >
                    Study
                  </Text>
                </div>
                <Line className="bg-indigo-900 h-0.5 w-full" />
              </div>
            </div>
            <List
              className="sm:flex-col flex-row gap-10 grid grid-cols-2 w-[32%] sm:w-full"
              orientation="horizontal"
            >
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col gap-3.5 items-center justify-start w-auto">
                  <div className="flex flex-col items-start justify-start px-3 w-auto">
                    <Text
                      className="text-gray-700 text-xl w-auto"
                      size="txtInterMedium20"
                    >
                      Quiz
                    </Text>
                  </div>
                  <Line className="bg-gray-50 h-0.5 w-full" />
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col gap-3.5 items-center justify-start w-auto">
                  <div className="flex flex-col items-start justify-start px-3 w-auto">
                    <Text
                      className="text-gray-700 text-xl w-auto"
                      size="txtInterMedium20"
                    >
                      Test
                    </Text>
                  </div>
                  <Line className="bg-gray-50 h-0.5 w-full" />
                </div>
              </div>
            </List>
            <List
              className="sm:flex-col flex-row gap-10 grid grid-cols-2 w-[39%] sm:w-full"
              orientation="horizontal"
            >
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col gap-3.5 items-center justify-start w-auto">
                  <div className="flex flex-col items-start justify-start px-3 w-auto">
                    <Text
                      className="text-gray-700 text-xl w-auto"
                      size="txtInterMedium20"
                    >
                      Game
                    </Text>
                  </div>
                  <Line className="bg-gray-50 h-0.5 w-full" />
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col gap-3.5 items-center justify-start w-auto">
                  <div className="flex flex-col items-start justify-start px-3 w-auto">
                    <Text
                      className="text-gray-700 text-xl w-auto"
                      size="txtInterMedium20"
                    >
                      Others
                    </Text>
                  </div>
                  <Line className="bg-gray-50 h-0.5 w-full" />
                </div>
              </div>
            </List>
          </div>
          <div className="flex flex-col font-lato gap-8 items-center justify-start md:ml-[0] ml-[262px] mt-[30px] w-auto md:w-full">
            <DesktopNineComp className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly w-full" />
            <div className="flex flex-row font-inter sm:gap-10 gap-[140px] items-center justify-between w-auto md:w-full">
              <Img
                className="h-[30px] md:h-auto object-cover w-[30px]"
                src="images/img_vector_30x30.png"
                alt="vector_Two"
              />
              <div className="flex flex-row gap-[43px] items-center justify-start w-auto">
                <Img
                  className="h-[60px] md:h-auto object-cover w-[60px]"
                  src="images/img_vector_60x60.png"
                  alt="vector_Three"
                />
                <Text
                  className="text-2xl md:text-[22px] text-blue_gray-900_01 sm:text-xl w-auto"
                  size="txtInterBold24"
                >
                  01/10
                </Text>
                <Img
                  className="h-[60px] md:h-auto object-cover w-[60px]"
                  src="images/img_vector_1.png"
                  alt="vector_Four"
                />
              </div>
              <Img
                className="h-[30px] md:h-auto object-cover w-[30px]"
                src="images/img_vector_2.png"
                alt="vector_Five"
              />
            </div>
          </div>
          <div className="flex sm:flex-col flex-row font-inter md:gap-10 items-center justify-between ml-1 md:ml-[0] mt-20 w-full">
            <div className="flex flex-row gap-[21.26px] items-start justify-start w-auto">
              <div className="bg-white-A700 flex flex-col h-20 items-center justify-start p-[17px] rounded-[50%] w-20">
                <Img
                  className="h-[34px] md:h-auto my-[5px] object-cover w-[96%]"
                  src="images/img_clippathgroup.png"
                  alt="clippathgroup_One"
                />
              </div>
              <div className="flex flex-col gap-[10.63px] items-start justify-center w-auto">
                <Text
                  className="text-[12.4px] text-gray-700 w-auto"
                  size="txtInterBold124"
                >
                  Published by
                </Text>
                <Img
                  className="h-[34px] w-[115px]"
                  src="images/img_component40.svg"
                  alt="componentForty"
                />
              </div>
            </div>
            <div className="flex flex-row gap-2 items-center justify-start w-auto">
              <Img
                className="h-[60px] md:h-auto object-cover w-[60px]"
                src="images/img_frame_60x60.png"
                alt="frame_Two"
              />
              <Text
                className="bg-clip-text bg-gradient  sm:text-2xl md:text-[26px] text-[28px] text-transparent w-auto"
                size="txtInterSemiBold28"
              >
                Create Flashcard
              </Text>
            </div>
          </div>
          <Text
            className="bg-clip-text bg-gradient  ml-0.5 md:ml-[0] mt-[143px] text-5xl sm:text-[38px] md:text-[44px] text-transparent tracking-[0.24px]"
            size="txtInterBold48"
          >
            FAQ
          </Text>
          <div className="flex flex-col font-inter gap-8 items-end justify-start ml-0.5 md:ml-[0] mt-[34px] w-auto md:w-full">
            <SelectBox
              className="font-semibold text-base text-left w-full"
              placeholderClassName="text-gray-900"
              indicator={
                <Img
                  className="h-6 mr-[0] w-6"
                  src="images/img_arrowdown.svg"
                  alt="arrow_down"
                />
              }
              isMulti={false}
              name="componentFiftyThree"
              options={componentFiftyThreeOptionsList}
              isSearchable={false}
              placeholder="Can education flashcards be used for all age groups?"
              shape="round"
              size="xs"
              variant="outline"
              color="blue_600_02_indigo_900_03"
            />
            <SelectBox
              className="font-semibold text-base text-left w-full"
              placeholderClassName="text-gray-900"
              indicator={
                <Img
                  className="h-6 mr-[0] w-6"
                  src="images/img_arrowdown.svg"
                  alt="arrow_down"
                />
              }
              isMulti={false}
              name="componentFiftyFour"
              options={componentFiftyFourOptionsList}
              isSearchable={false}
              placeholder="How do education flashcards work?"
              shape="round"
              size="xs"
              variant="outline"
              color="blue_600_02_indigo_900_03"
            />
            <SelectBox
              className="font-semibold text-base text-left w-full"
              placeholderClassName="text-gray-900"
              indicator={
                <Img
                  className="h-6 mr-[0] w-6"
                  src="images/img_arrowdown.svg"
                  alt="arrow_down"
                />
              }
              isMulti={false}
              name="componentFiftyFive"
              options={componentFiftyFiveOptionsList}
              isSearchable={false}
              placeholder="Can education flashcards be used for test preparation?"
              shape="round"
              size="xs"
              variant="outline"
              color="blue_600_02_indigo_900_03"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopNinePage;
