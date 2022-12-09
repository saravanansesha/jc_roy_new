import React,{ useState} from "react";  
// import {Card, Divider, Table ,  Tabs} from "antd";
import {Card, Divider, Table,Form,Input, Select,Button,Tabs} from "antd";
import {Link,useLocation} from "react-router-dom";
import IntlMessages from "util/IntlMessages";
import BreadCrumb from "../../components/BreadCrumbs"
import Setdrawer from "../../containers/Sidebar/setdrawer"
import DesignStandard from "./DesignStandard";
import TestingStandard from "./TestingStandard"
import SpecialTestingStandard from "./SpecialTestingStandard"
// import Plants from "./Plants"
// import Department from "./Department"
// import Employees from "./Employees"

const TabPane = Tabs.TabPane;
const {Option, OptGroup} = Select;
const FormItem = Form.Item;
const Standard_s_Normative = ({match}) => {
  const [isvisible,setvisible] = useState(false)
  const [keys,setkeys] = useState('1')
  const callback = (key) => {
    setkeys(key);
  };
  return (
    <div>
<BreadCrumb> <i className="icon icon-menu-right"/> <Link to="/sample">Home</Link><i className="icon icon-menu-right"/> <span onClick={()=>setvisible(true)}>Settings</span><i className="icon icon-menu-right"/><Link to="/Standard_s_Normative">Standard's Normative</Link>  </BreadCrumb>
{/* <div className="bread_crumb"> */}
<Tabs className="customize_tab"  activeKey={keys} onChange={callback}>
        <TabPane tab="Design Standard" key="1"><DesignStandard /> </TabPane>
        <TabPane tab="Testing Standard" key="2"><TestingStandard /></TabPane>
        <TabPane tab="Special Testing Standard" key="3"><SpecialTestingStandard /></TabPane>
        {/* <TabPane tab="Employees" key="4"> <Employees /> </TabPane>
        <TabPane tab="Suppliers" key="5">Content of Tab Pane 3</TabPane>
        <TabPane tab="Customers" key="6">Content of Tab Pane 3</TabPane> */}
      </Tabs> 
      <Setdrawer setvisible={setvisible} isvisible={isvisible} />
    </div>
  );
};
    
export default Standard_s_Normative;
