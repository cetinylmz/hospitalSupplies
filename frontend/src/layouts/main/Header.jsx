import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { BasketContext } from "../../context/BasketContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBasketball,
  faBasketShopping,
} from "@fortawesome/free-solid-svg-icons";
import Sidebar  from "../../components/shared/Sidebar";
import { SideBarContext } from "../../context/SideBarContext";




function Header() {

  const { basket } = useContext(BasketContext);
  const { thisOpen } = useContext(SideBarContext);
  const { thisOpenTwo } = useContext(SideBarContext);
  return (
    <>
    
      <Sidebar />
    
   
  
      <nav class="bg-white border-gray-100 rounded shadow-md px-12 py-6 ">
       
       
        <div className="flex justify-between ">
          <div className="flex justify-start w-1/3">
            <div className="text-2xl  mx-4">
              <button onClick={thisOpenTwo}>
              <FontAwesomeIcon icon={faBars} />
              </button>
            
            </div>
            <div className="text-2xl mx-4 lg:block hidden">
              <span>Logo</span>
            </div>
          </div>




          <div className="lg:w-1/2 w-full flex ">
            <input
              className="bg-gray-200 rounded-md w-full h-10 p-4 focus:bg-white"
              placeholder="Hapları ara"
              type="text"
            />
          </div>

          <div className="flex justify-end w-1/3">
            <div className="text-2xl mx-4 lg:block  hidden">
              <span class="font-semibold text-base  text-14px ml-3">
                +90 538-000-0000
              </span>
            </div>
            <div className="text-2xl  mx-4">
              <button onClick={thisOpen}>
              <FontAwesomeIcon icon={faBasketShopping} />
              </button>
              
              <span>{basket}</span>
            </div>
          </div>
        </div>
      </nav>
      <br />
      <br />
    </>
  );
}

export default Header;
