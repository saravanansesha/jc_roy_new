import React,{ useState} from "react";  
// import {Card, Divider, Table ,  Tabs} from "antd";
import {Card, Divider, Table,Form,Input, Select,Button,Tabs} from "antd";
import {Link,useLocation} from "react-router-dom";
import IntlMessages from "util/IntlMessages";
import BreadCrumb from "../../components/BreadCrumbs"
import Setdrawer from "../../containers/Sidebar/setdrawer"
import Action_Category from "./Action_Category"
import CName from "./CName"
import Inspection_Coordinator from "./Inspection_Coordinator"
import Stage_of_Inspection from "./Stage_of_Inspection"
import Nature_of_Complains from "./Nature_of_Complains"
import Customer_Disposition from "./Customer_Disposition"

const TabPane = Tabs.TabPane;
const {Option, OptGroup} = Select;
const FormItem = Form.Item;
const Customer_management = ({match}) => {
  const [isvisible,setvisible] = useState(false)
  const [keys,setkeys] = useState('1')
  const callback = (key) => {
    setkeys(key);
  };
  console.log('----')
  return (
    <div>
    <BreadCrumb> <i className="icon icon-menu-right"/> <Link to="/sample">Home</Link><i className="icon icon-menu-right"/> <span onClick={()=>setvisible(true)}>Settings</span><i className="icon icon-menu-right"/><Link to="/Customer_management">Customer Management</Link>  </BreadCrumb>
    {/* <div className="bread_crumb"> */}
    <Tabs className="customize_tab"  activeKey={keys} onChange={callback}>
            <TabPane tab="Customer Disposition" key="1"><Customer_Disposition /> </TabPane>
            <TabPane tab="Nature of Complains" key="2"><Nature_of_Complains /></TabPane>
            <TabPane tab="Stage of Inspection" key="3"><Stage_of_Inspection /></TabPane>
            <TabPane tab="Inspection Coordinator" key="4"><Inspection_Coordinator /></TabPane>
            <TabPane tab="Name" key="5"><CName /></TabPane>
            <TabPane tab="Action Category" key="6"><Action_Category /></TabPane>
            
          </Tabs> 
          <Setdrawer setvisible={setvisible} isvisible={isvisible} />
        </div>
  );
};
     
export default Customer_management;

