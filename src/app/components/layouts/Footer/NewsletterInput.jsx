import React from "react";

 
export const NewsletterInput = () => (
<div class="relative flex w-full max-w-[24rem]">
  <div class="relative h-10 w-full min-w-[200px]">
    <input type="email"
      class="h-full w-full rounded-full border border-blue-gray-500 bg-white text-sm placeholder-shown:border placeholder-shown:border-blue-gray-200 text-black placeholder-shown:border-t-blue-gray-500"
      placeholder="monadresse@mail.fr" />
  </div>
  <button 
    class="!absolute right-1 top-1 bottom-1 rounded-full border-solid border border-black  bg-white py-1.5 px-1.5 text-center text-sm font-bold text-black  "
    type="button">
      <svg class="w-5 h-5 text-dark py-05 ml-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 12 4.7-5.326a.909.909 0 0 0 0-1.348L1 1"/>
</svg>
  </button>
</div> 
  );
