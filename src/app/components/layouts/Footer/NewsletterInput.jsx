import React from "react";
import { IoIosArrowDropright } from "react-icons/io";

 
export const NewsletterInput = () => (
<div className="relative flex w-full max-w-[24rem]">
  <div className="relative h-10 w-full min-w-[200px]">
    <input type="email"
      className="h-full w-full rounded-full border border-blue-gray-500 bg-white text-sm placeholder-shown:border placeholder-shown:border-blue-gray-200 text-black placeholder-shown:border-t-blue-gray-500"
      placeholder="monadresse@mail.fr" />
  </div>
    <button className="absolute right-0 top-0.5">
      <IoIosArrowDropright size={35} style={{ marginRight: 10, color: 'black'}} />
    </button>
</div> 
  );
