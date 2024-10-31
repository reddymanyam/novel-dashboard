import React, { Suspense } from 'react';
import Auth from '../pages/Auth/Auth';
const Dashboard = React.lazy(() => import('../pages/Dashboard/Dashboard'));
const Layout = React.lazy(() => import('../components/Layout'));
const Bookings = React.lazy(() => import("../pages/Bookings/Bookings"));
const Invoices = React.lazy(() => import("../pages/Invoices/Invoices"));
const Expansion = React.lazy(() => import("../pages/Expansion/Expansion"));
const Tickets = React.lazy(() => import("../pages/Tickets/Tickets"));
const GatePass = React.lazy(() => import("../pages/GatePass/GatePass"));
const PrintRequest = React.lazy(() => import('../pages/PrintRequest/printRequest'));


/* 
 
import Dashboard from '../pages/Dashboard/Dashboard';
import Layout from '../components/Layout'; 
import Bookings from '../pages/Bookings/Bookings';
import Invoices from '../pages/Invoices/Invoices';
import Expansion from '../pages/Expansion/Expansion';
import Tickets from '../pages/Tickets/Tickets';
import GatePass from '../pages/GatePass/GatePass';
import PrintRequest from '../pages/PrintRequest/printRequest'; */

const router = (toggletheme, mode) => [
  {path:"/", element:<Auth />},
  
  {
    path: "/",
    element: (<Suspense fallback={<h1>Loading....</h1>}>
      <Layout toggletheme={toggletheme}  mode={mode} />
    </Suspense>),
    children: [
      {
        path: "dashboard",
        element: (<Suspense fallback={<h1>Loading....</h1>}>
          <Dashboard />
        </Suspense>)
      },
      {
        path: "bookings",
        element:( <Suspense fallback={<h1>Loading....</h1>}>
<Bookings />
        </Suspense> )
      },
      {
        path: "expansion",
        element:( <Suspense>
<Expansion />
        </Suspense>) 
      },
      {
        path: "invoices",
        element:(<Suspense fallback={<h1>Loading...</h1>}>
 <Invoices />
        </Suspense> )
      },
      {
        path: "gatepass",
        element:(<Suspense fallback={<h1>Loading.....</h1>}>
<GatePass />
        </Suspense>) 
      },
      {
        path: "tickets",
        element:(<Suspense fallback={<h1>Loading....</h1>}><Tickets /></Suspense>) 
      },
      {
        path: "printrequest",
        element:(<Suspense fallback={<h1>Loading....</h1>}><PrintRequest /></Suspense>) 
      }
    ]
  }
];

export default router;
