import './App.css';

import Cart from './Cart.js';
import Categories from './Categories.js';
import Catalog from './Catalog.js';

import CatalogProvider from './CatalogContext';
import CartProvider from './CartContext';

function App() {
  return (
    <CatalogProvider>
      <CartProvider>
        <div className="App">
          <div className="Header">
            <Categories />
            <Cart />
          </div>
          <Catalog />
        </div>
      </CartProvider>
    </CatalogProvider>
  );
}

export default App;
