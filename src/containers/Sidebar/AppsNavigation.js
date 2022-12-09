import React,{ useState} from "react";
import Setdrawer from './setdrawer'
let AppsNavigation = () =>{
const [isvisible,setvisible] = useState(false)
return (
<>
<ul  className="gx-app-nav">
<li><i className="icon icon-search-new"/></li>
<li><i className="icon icon-notification"/></li>
<li onClick={()=>{
setvisible(true)
}}><i  className="icon icon-extra-components"/></li>
</ul>
<Setdrawer setvisible={setvisible} isvisible={isvisible} />
</>
)
}
  

export default AppsNavigation;
