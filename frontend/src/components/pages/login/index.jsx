import React from "react";

import LoginCard from "../../shared/LoginCard";
function index() {
  return (
    <>
    <div className="text-center text-3xl my-4">
      <h1 className="font-bold text-3xl p-2">Admin Panel</h1>
    </div>
    <div className="flex justify-center  text-center  mt-10">
       <button class="bg-blue-500 w-1/4 text-3xl hover:bg-red-700 text-white font-bold py-2 px-2 my-2 rounded-lg">
          Add
        </button>
    </div>
     <div class="flex flex-col justify-center items-center gap-4 p-4 w-full">

      
        <LoginCard />
        <LoginCard />
        <LoginCard />
        <LoginCard />
        <LoginCard />
        <LoginCard />
        <LoginCard />
        <LoginCard />
        
       
      
      </div>
    </>
  );
}

export default index;
