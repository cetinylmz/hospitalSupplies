import React, { useContext, useState } from "react";
import { BasketContext } from "../../../context/BasketContext";
function index() {
  const [isShow, setIsShow] = useState(false);

  
 
  const { basket } = useContext(BasketContext);
  const { arttir } = useContext(BasketContext);
  const { azalt } = useContext(BasketContext);




  return (
    <>
      <div className="relative" id="app-dropdown">
        <div className="flex justify-start border border-gray-300  rounded-t-md bg-white p-4 w-full">
          <div className="flex justify-start items-center lg:w-1/12  ">
            <div>
              <button
                onClick={() => {
                  setIsShow(!isShow);
                }}
              >
                <img
                  src="https://cdn.discordapp.com/attachments/993603012306161664/994175311140880454/unknown.png"
                  alt=""
                />
              </button>
            </div>
          </div>

          <div className="flex justify-start items-center  border  border-gray-200 mx-2">
            <div className="w-24  h-24">
              <img
                src="https://s3.amazonaws.com/redqteam.com/medsy/products/fibre_sy4q5v.jpg"
                alt=""
              />
            </div>
          </div>

          <div className="flex flex-col justify-start  w-1/2 mx-4 ">
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
        </div>

        {isShow && (
          <div className="absolute bg-white w-full h-80  z-30 border border-gray-300  rounded-b-md ">
            <div className="flex flex-col p-4">
              <div>Header</div>

              <div className="absolute inset-x-0 bottom-0">
                <hr />

                <div className="flex flex-row p-4 justify-end items-end">
                  <div>
                    <button disabled={basket === 0 } onClick={azalt} class="bg-gray-300 hover:bg-gray-600 text-gray-800 font-bold py-2 px-4  inline-flex items-center">
                      <span>-</span>
                    </button>
                    <p type="text" class="bg-gray-400  text-gray-800 font-bold py-2 px-4  inline-flex items-center">
                      <span>{basket}</span>
                    </p>
                    <button onClick={arttir} class="bg-gray-300 hover:bg-gray-600 text-gray-800 font-bold py-2 px-4  inline-flex items-center">
                      <span>+</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default index;
