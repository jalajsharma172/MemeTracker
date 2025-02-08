import React from 'react';
import Home from '../src/pages/Home'
import { createBrowserRouter } from 'react-router-dom';
const router = createBrowserRouter([
    { path: "/", element: <Home /> }
    // { path: "/dashboard", element: <Dashboard /> },
    // { path: "/create/Manu_account", element: [<Navbar/>,<ManuAccount />] },
    // { path: "/create/User_account", element: [<Navbar/>,<UserAccount />] },
    // {path:"/status",element:[<Navbar/>,<Status/>]},
    // {path:"/manu/AddProducts",element:[<Navbar/>,<AddProduct/>]},
    // {path:"/manu/ViewProducts",element:[<Navbar/>,<ViewProducts/>]}
    
]
);
export default router;