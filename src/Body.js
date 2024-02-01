import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './Components/Login';
import Browse from './Components/Browse';

const router = createBrowserRouter([{
    path: '/',
    element: <Login />
}, {
    path: "/browse",
    element: <Browse />
}])

const Body = () => {
    return (
        <RouterProvider router={router} />
    )
}

export default Body