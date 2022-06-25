import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';

import App from './App';

import CartProvider from './provider/cart/cart.provider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <CartProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </CartProvider>,
);
