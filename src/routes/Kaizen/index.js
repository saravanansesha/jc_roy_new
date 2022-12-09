import React,{ useState} from "react";  
// import {Card, Divider, Table ,  Tabs} from "antd";
import {Card, Divider, Table,Form,Input, Select,Button,Tabs} from "antd";
import {Link,useLocation} from "react-router-dom";
import IntlMessages from "util/IntlMessages";
import BreadCrumb from "../../components/BreadCrumbs"
import Setdrawer from "../../containers/Sidebar/setdrawer"
import Category from "./Category"
import Focus_Area from "./Focus_Area"
import Process from "./Process"
import Kaizen_Type from "./Kaizen_Type"

const TabPane = Tabs.TabPane;
const {Option, OptGroup} = Select;
const FormItem = Form.Item;
const Kaizen = ({match}) => {
  const [isvisible,setvisible] = useState(false)
  const [keys,setkeys] = useState('1')
  const callback = (key) => {
    setkeys(key);
  };
  console.log('----')
  return (
    <div>
    <BreadCrumb> <i className="icon icon-menu-right"/> <Link to="/sample">Home</Link><i className="icon icon-menu-right"/> <span onClick={()=>setvisible(true)}>Settings</span><i className="icon icon-menu-right"/><Link to="/Kaizen">Kaizen</Link>  </BreadCrumb>
    {/* <div className="bread_crumb"> */}
    <Tabs className="customize_tab"  activeKey={keys} onChange={callback}>
            <TabPane tab="Category" key="1"><Category /></TabPane>
            <TabPane tab="Focus Area" key="2"><Focus_Area /></TabPane>
            <TabPane tab="Process" key="3"><Process /></TabPane>
            <TabPane tab="Kaizen Type" key="4"><Kaizen_Type /></TabPane>            
          </Tabs> 
          <Setdrawer setvisible={setvisible} isvisible={isvisible} />
        </div>
  );
};
     
export default Kaizen;