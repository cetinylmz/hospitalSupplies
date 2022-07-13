import React from "react";

function index() {
  return (
    <div className="flex justify-between border border-gray-300  rounded-t-md bg-white p-6 w-1/2">
      <div className="flex justify-start items-center  border  border-gray-200  mx-2">
        <div className="w-24  h-24">
          <img
            src="https://s3.amazonaws.com/redqteam.com/medsy/products/fibre_sy4q5v.jpg"
            alt=""
          />
        </div>
      </div>

      <div className="flex flex-col justify-center w-1/2 mx-4 ">
        <span class="font-semibold text-gray-900 mb-1">
          Trueplus Fibre Food Supplement 90 Tablets
        </span>
        <span class="font-normal text-gray-700 mb-2">$2.5</span>
        <p class="flex items-center">
          <span class="text-gray-500 text-11px capitalize">Tablet</span>
          <span class="flex w-3px h-3px rounded mx-3 flex-shrink-0">.</span>
          <span class="text-gray-500 text-11px">90 pieces</span>
        </p>
      </div>

      <div className="flex flex-col items-center my-2 w-1/6">
        <button class="bg-green-600 hover:bg-black text-white font-bold py-2 px-4 my-2 w-full">
          Upadate
        </button>
        <button class="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-2 w-full">
          Delete
        </button>

      </div>
    </div>
  );
}

export default index;
