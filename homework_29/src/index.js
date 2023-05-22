import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import UserList from './components/UserList';
import Album from './components/Album';
import Albums from './components/User/Albums';
import Photos from './components/User/Photos';

const usersLoader = async () => {
  const result = await fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json());

      console.log(result);

      return result;
}

const router = createBrowserRouter([
  // {
  //   path: "/users",
  //   element:<UserList/>,
  // },
  // {
  //   path: "/users/:userId",
  //   element:<UserList/>,
  // },
  {
    path: "/users",
    element:<UserList/>,
    loader: usersLoader,
    id: 'users',
    // children: [
    //   {
    //     path: ':userId',
    //     element: <Albums />,
    //     children: [
    //       {
    //         path: ':albumId',
    //         element: <Photos />
    //       }
    //     ]
    //   }
    // ]
  },
  {
    path: "albums?userId=1",
    element:<Album/>,
  },
  {
    path: "/photos",
    element:<Album/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
