import Product from './Product.js';
import {CatalogContext} from './CatalogContext';
import {useContext} from 'react';

export default function Catalog() {
    const {products} = useContext(CatalogContext);

    return (
        <div className="products">
            {Array.isArray(products) && products.length > 0
                ? products.map(product => <Product key={product.id} {...product} />)
                : "Loading..."}
        </div>
    );
}
