import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import myCreatedRouter from './Route/Route';

// const myCreatedRouter = createBrowserRouter([
//   {
//     path: '/',
//     element: <div>This my first Home router</div>
//   },
//   {
//     path: '/products',
//     element: <div>This my Products router</div>
//   },
//   {
//     path: '/about',
//     element: <div>This my about router</div>
//   },
// ])
// --------------------------------------------
// const myCreatedRouter = createBrowserRouter([
//   {
//     path: '/',
//     element: <section>
//       <div>This is fixed item.</div>
//       <Outlet></Outlet>
//     </section>,
//     children: [
//       {
//         path: '/',
//         element: <div>This is Home route.</div>
//       },
//       {
//         path: '/products',
//         element: <div>This is Products page.</div>
//       }
//     ]
//   }
// ])
// ----------------------------------------------

// This code set to "Route" folder:-
// const myCreatedRouter = createBrowserRouter([
//   {
//     path: '/',
//     element: <MainLayout></MainLayout>,
//     children: [
//       {
//         path: '/',
//         element: <Home></Home>
//       },
//       {
//         path: '/products',
//         element: <Products></Products>
//       }
//     ]
//   }
// ])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={myCreatedRouter}></RouterProvider>
  </React.StrictMode>,
)
