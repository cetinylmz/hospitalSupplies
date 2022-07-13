import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { SideBarContext } from "../../../context/SideBarContext";

import { AiOutlineArrowLeft,AiOutlineClose } from "react-icons/ai";

function index() {
  const { opens } = useContext(SideBarContext);
  const { thisclose } = useContext(SideBarContext);
  const { openTwo } = useContext(SideBarContext);
  const { thiscloseTwo } = useContext(SideBarContext);

  return (
   <>
   <div>
   {!opens ? (
        <p></p>
      ) : (
        <div>
        <div className="top-0 right-0 fixed bg-white w-1/3 h-full z-50 p-10">
          <div className="flex flex-col">
            <div className="flex justify-start border-b-2   ">
              <div className="text-2xl w-1/3 my-2">
                <button onClick={thisclose}>
                  <AiOutlineArrowLeft />
                </button>
              </div>
              <div className="text-2xl w-2/3 my-2 ">
                <h3>Your Basket</h3>
              </div>
            </div>
          </div>
        </div>
        <div className=" top-0 left-0 fixed w-2/3 h-full z-50 bg-[#0000009a] p-10">
          
        </div>
         </div>
      )}
   </div>
 
  <div>
  {!openTwo ? (
       <p></p>
      ) : (
      <div>
          <div className="top-0 left-0 fixed bg-gray-50 w-1/3 h-full z-50 p-10">
          <div className="flex flex-col">
            <div className="flex justify-between border-b-2   ">
           
              <div className="text-2xl my-2 ">
                <h3>Your Baskest</h3>
              </div>
              <div className="text-2xl  my-2">
                <button onClick={thiscloseTwo}>
                  <AiOutlineClose />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className=" top-0 right-0 fixed w-2/3 h-full z-50 bg-[#0000009a] p-10">
          
        </div>
      </div>
      )}
  </div>
    
   </>
  );
}

export default index;
