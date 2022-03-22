//react router dom: instal from npm
// SPA: single page application
// BrowrserRouter: its a context that give us single page
// Link compnent: with this go another page without  loading
import {  Route, Routes, Navigate } from "react-router-dom";
// import routes from "./routes";
import Layout from "./layout/Layout";
import Blog from "./components/Blog";
import BlogPage from "./pages/BlogPage";
import Profile from "./pages/Profile";
import AboutUsPage from "./pages/AboutUsPage";
import PostPage from "./pages/PostPage";
import HomePage from "./pages/HomePage";
import Dashboard from "./components/Dashboard";
import Download from "./components/Download";


function App (){


    

    
    return(

<Layout>
    {/* //Switch:it gives user the first link that match with link:its doesnt give us NotFound in home or AboutUsPage or ... */}
  <Routes>
    {/* {routes.map((route, index)=>
        (<Route {...route} key={index} />)
    )} */} 
<Route path="/blogs/:id" element={<Blog />} />
<Route path="/blogs" element={<BlogPage />} />
{/*     profile/* = when start with profile show this page */}
     <Route path="/profile/*" element={<Profile /> } >
     <Route path="dashboard" element={<Dashboard />} />
          <Route path="download" element={<Download />} /> 
         </Route>
     <Route path="/about-us" element={<AboutUsPage />} />
  <Route path="/post/:id([0-9]+)?" element={<PostPage />} /> 
  <Route path="/" element={<HomePage />}  />
     {/* <Route path="/" element={<Navigate replace to="/blogs" />}  /> */}
    </Routes>


</Layout>



 )


}
export default App;
