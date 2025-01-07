
// import axios from 'axios';
import axios from 'axios';
import React, {useEffect, useState } from 'react'
export const UserContext = React.createContext();

const Context = ({ children }) => {

  const [products, setproducts] = useState([]);
  const [loading, setloading] = useState(false);

  const getallproducts = async () => {
    try {
      setloading(true);
      const { data } = await axios.get('https://fakestoreapi.com/products');
      setproducts(data);
    }
    catch (error) {
      console.log(error);
    }
    finally {
      setloading(false);
    }
  }
  console.log(products);

  useEffect(() => {
    getallproducts();
  }, [])

  return (
    <UserContext.Provider value={[ products, setproducts, loading ]}>
      {children}
    </UserContext.Provider>
  )
}
export default Context;
