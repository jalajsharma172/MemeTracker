import React from 'react';
import Home from '../src/pages/Home'
import { createBrowserRouter } from 'react-router-dom';
import Contact from '../src/pages/Contact';
const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/contact", element: <Contact/> },
    // { path: "/create/User_account", element: [<Navbar/>,<UserAccount />] },
    // {path:"/status",element:[<Navbar/>,<Status/>]},
    // {path:"/manu/AddProducts",element:[<Navbar/>,<AddProduct/>]},
    // {path:"/manu/ViewProducts",element:[<Navbar/>,<ViewProducts/>]}
    
]
);
export default router;