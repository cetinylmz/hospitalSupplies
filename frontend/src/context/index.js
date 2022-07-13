import React from "react";
import BasketContext from "./BasketContext";
import SideBarContext from "./SideBarContext";



const Context = (props) => {
  return (

<BasketContext>
<SideBarContext>
     {props.children}
     </SideBarContext>
    </BasketContext>


       
   
  );
};

export default Context;