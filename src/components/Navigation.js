import {useParams, NavLink} from "react-router-dom";

// withRouter: high order Component and for showing props details
const items=[
    {name:"Home", to:"/", exact:true},
    {name:"About-us", to:"/about-us", },
    {name:"profile", to:"/profile", },
    {name:"blogs", to:"/blogs", },
    {name:"post", to:"/post", },
]
const Navigation = () => {
  const params=useParams()
    return ( 
      
    <nav>
        <ul>
           { items.map((item)=>{
               return(
                <li key={item.to}>
                <NavLink 
                to={item.to}
                // activeClassName="activelink"
                className={(navData)=>navData.isActive ? "activeLink" : ""}
                exact={item.exact || false}>
                    {item.name}
                </NavLink>
                
            </li >
               )
           })  }
           
          
        </ul>
    </nav>

     );
}
 
export default Navigation;