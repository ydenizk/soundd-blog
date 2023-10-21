"use client";

import React, { useState } from "react";

const onoffBtn = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <label className="themeSwitcherTwo relative inline-flex cursor-pointer select-none items-center">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckbox}
          className="sr-only"
        />

        <span
          className={`slider mx-4 flex h-6 w-[42px] items-center rounded-full p-1 duration-200 ${
            isChecked ? "bg-[#212b36]" : "bg-[#CCCCCE]"
          }`}
        >
          <span
            className={`dot h-4 w-4 rounded-full bg-white duration-200 ${
              isChecked ? "translate-x-[20px]" : ""
            }`}
          ></span>
        </span>
      </label>
    </>
  );
};

export default onoffBtn;
