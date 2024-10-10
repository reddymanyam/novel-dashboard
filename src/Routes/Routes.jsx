import Layout from "../components/Layout"
import Dashboard from "../pages/Dashboard/Dashboard";

const Routes = [
    {
    path:"/",
    element : <Layout />,
    children:[
        {path:"/dashboard", element:<Dashboard/>}
    ]
}
];
export default Routes;