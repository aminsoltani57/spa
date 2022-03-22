
import { Outlet, } from "react-router";
// import Dashboard from "../components/Dashboard";
// import Download from "../components/Download";
import SideBar from "../components/SideBar";


const Profile = () => {
    return ( 
          //  {/* //Rote: we can use it in App or Another component */}
            <>
            <p>Welcome dear saheb</p>
         <SideBar />
         <Outlet />
         {/* <Routes>

         <Route path="dashboard" element={<Dashboard />} />
          <Route path="download" element={<Download />} /> 
         </Routes> */}
          
     </>
       
     );
}
 
export default Profile;