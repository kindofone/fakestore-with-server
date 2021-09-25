import React, {useEffect, useState} from 'react';

export const CatalogContext = React.createContext({
  products: [],
});

export default function CatalogProvider({children}) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <CatalogContext.Provider value={{
      products,
      setProducts,
    }}>
      {children}
    </CatalogContext.Provider>
  );
}
