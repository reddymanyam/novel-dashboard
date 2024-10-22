import Dashboard from '../pages/Dashboard/Dashboard';
import Layout from '../components/Layout'; 
import Bookings from '../pages/Bookings/Bookings';
import Invoices from '../pages/Invoices/Invoices';
import Expansion from '../pages/Expansion/Expansion';
import Tickets from '../pages/Tickets/Tickets';
import GatePass from '../pages/GatePass/GatePass';
import PrintRequest from '../pages/PrintRequest/printRequest';
import Auth from '../pages/Auth/Auth';

const router = [
  {path:"/", element:<Auth />},
  
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard /> 
      },
      {
        path: "bookings",
        element: <Bookings /> 
      },
      {
        path: "expansion",
        element: <Expansion /> 
      },
      {
        path: "invoices",
        element: <Invoices /> 
      },
      {
        path: "gatepass",
        element: <GatePass /> 
      },
      {
        path: "tickets",
        element: <Tickets /> 
      },
      {
        path: "printrequest",
        element: <PrintRequest /> 
      }
    ]
  }
];

export default router;
