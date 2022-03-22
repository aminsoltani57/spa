import { Link } from "react-router-dom";

const PostPage= (props) => {
    console.log(props.match.params)
    // give id:1 as a default and we dont have id
    const id =props.match.params.id || 1;
    return ( 
        <div>
        <h2>Blog Detail - {id}</h2> 
         <div>
             {JSON.stringify(props.match.params)}
         </div>
        </div>
     );
}
 
export default PostPage;