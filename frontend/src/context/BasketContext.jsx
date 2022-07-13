import { useEffect } from "react";
import { createContext, useState } from "react";



export const BasketContext = createContext();

const BasketContexttProvider = (props) => {

 const [basket, setBasket] = useState(0);

 const arttir = () => {
    setBasket(basket + 1)
 
  };

  
  const azalt = () => {
  
    setBasket(basket + 1)

  };

  const [datas, setData] = useState([]);

  /*
  useEffect(() => {
    const getUsers = async () => {
      const { data } = await getAllUsers();
      await setData(data);
    };
    getUsers();
  }, [datas]);

*/







  return (
    <BasketContext.Provider value={{ basket , arttir , azalt}}>
      {props.children}
    </BasketContext.Provider>
  );
};

export default BasketContexttProvider;