import Dashboard from '../pages/Dashboard/Dashboard';
import Layout from '../components/Layout'; 
import Bookings from '../pages/Bookings/Bookings';

const router = [
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
      }
    ]
  }
];

export default router;
