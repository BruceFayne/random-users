// import 'reset-css';
import './style.scss';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Home from './pages/Home'

const isAuth = Boolean(localStorage.getItem('userId'));

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <Provider store={store}>
    <RouterProvider router={routes} />
  </Provider>
);
