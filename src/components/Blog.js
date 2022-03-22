import { Link } from "react-router-dom";
import queryString from "query-string";
//query- string= its library to achive search params of link
const Blog = ({location, match}) => {
   const query= queryString.parse(location.search)
   console.log(query)
    console.log(location.search)
    const id =match.params.id;
    return ( 
        <div>
        <h2>Blog Detail - {id}</h2> 
           <Link to={`/blogs/${parseInt(id) + 1}`}>GO TO next PAGE</Link>
        </div>
     );
}
 
export default Blog;