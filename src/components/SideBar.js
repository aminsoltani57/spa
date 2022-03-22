import { NavLink } from "react-router-dom";
const SideBar = () => {
    return (  <aside>
        <ul className="aside">
            {/* NavLink= show active link */}
            <li><NavLink to="/profile/dashboard"
            //  activeClassName="activTab"
            className={(navData)=>navData.isActive ? "activTab" : ""}
            > dashboard</NavLink> </li>
            <li>  <NavLink to="/profile/download" 
            className={(navData)=>navData.isActive ? "activTab" : ""}
             
        > download</NavLink> </li>
        </ul>
        
        </aside>);
}
 
export default SideBar;
