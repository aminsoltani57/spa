import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import BlogPage from "./pages/BlogPage";
import Blog from "./components/Blog";
import PostPage from "./pages/PostPage";

const routes=[
    //when you use switch you should order your routes from specifics to general
    //:id  => its dainamik link: its react router solution
    { path:"/blogs/:id", component:Blog },
    { path:"/blogs", component:BlogPage },
   { path:"/profile", component:Profile },
{path:"/about-us", component:AboutUsPage },
//:id? => its optional params and it can be or not be *** try to not use the optional params
// rejex => :id([0-9]+)? || ([A-Za-z]+)? = you should enter speciall rejex on the last of the link
{ path:"/post/:id([0-9]+)?", component:PostPage },
{path:"/", component:HomePage, },
//you should wright NotFound at the last OF the object to just show in incorrect link
{ component:NotFound }
]
export default routes;