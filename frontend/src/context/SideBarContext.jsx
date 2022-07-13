import React, { createContext } from 'react'
import { useState } from 'react';



export const SideBarContext = createContext();

const SideBarContextProvider = (props) => {

    const [opens,setOpen] = useState(false)

    const thisOpen = () => {
      setOpen(true)
     
      };

      const thisclose = () => {
        setOpen(false)
      
       };
       
       
    const [openTwo,setOpenTwo] = useState(false)

    const thisOpenTwo = () => {
      setOpenTwo(true)
     
      };

      const thiscloseTwo = () => {
        setOpenTwo(false)
      
       };

       return (
        <SideBarContext.Provider value={{ opens,thisOpen ,thisclose,openTwo,thisOpenTwo,thiscloseTwo}}>
          {props.children}
        </SideBarContext.Provider>
      );

}

export default SideBarContextProvider