import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import './index.css';
import Main from './components/Layout/Main';
import Home from './components/Home/Home';
import Orders from './components/OrderReview/OrderReview';
import OrderReview from './components/OrderReview/OrderReview';
import Grandpa from './components/Grandpa/Grandpa';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('tshirts.json'),
      },
      {
        path: '/order',
        element: <OrderReview></OrderReview>
      },
      {
        path: '/grandpa',
        element: <Grandpa></Grandpa>
      },
    ]

  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
