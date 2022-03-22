import { Children } from "react/cjs/react.production.min";
import Footer from "../components/Footer";
import Header from "../components/Header";
// layout: its higher order component

const Layout = ({children}) => {
    return ( 
     <>
<Header />
{children}
<Footer />
     </>
     );
}
 
export default Layout;