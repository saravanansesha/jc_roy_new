import React,{ useState} from "react";  
// import {Card, Divider, Table ,  Tabs} from "antd";
import {Card, Divider, Table,Form,Input, Select,Button,Tabs} from "antd";
import {Link,useLocation} from "react-router-dom";
import IntlMessages from "util/IntlMessages";
import BreadCrumb from "../../components/BreadCrumbs"
import Setdrawer from "../../containers/Sidebar/setdrawer"
// import DesignStandard from "./DesignStandard";
// import Size from "./Size"
// import Bore from "./Bore"
// import  Class  from "./Class";
// import  Working_Pressure  from "./Working_Pressure";
// import  End_Connection  from "./End_Connection";
// import  Operator_Type  from "./Operator_Type";
 import  Materialspecificationcontents  from "./Materialspecificationcontents";
// import TestingStandard from "./TestingStandard"
// import SpecialTestingStandard from "./SpecialTestingStandard"
// import Plants from "./Plants"
// import Department from "./Department"
// import Employees from "./Employees"

const TabPane = Tabs.TabPane;
const {Option, OptGroup} = Select;
const FormItem = Form.Item;
const Basic_Valve_Parameters = ({match}) => {
  const [isvisible,setvisible] = useState(false)
  const [keys,setkeys] = useState('1')
  const callback = (key) => {
    setkeys(key);
  };
  return (
    <div>
<BreadCrumb> <i className="icon icon-menu-right"/> <Link to="/sample">Home</Link><i className="icon icon-menu-right"/> <span onClick={()=>setvisible(true)}>Settings</span><i className="icon icon-menu-right"/><Link to="/Material_Configuration">Material Configuration</Link>  </BreadCrumb>
{/* <div className="bread_crumb"> */}
<Materialspecificationcontents />
{/* <Tabs className="customize_tab"  activeKey={keys} onChange={callback}>
        <TabPane tab="Size" key="1"><Size /> </TabPane>
        <TabPane tab="Bore" key="2"><Bore /></TabPane>
        <TabPane tab="Class" key="3"><Class /></TabPane>
        <TabPane tab="Working Pressure" key="4"><Working_Pressure /></TabPane>
        <TabPane tab="End Connection" key="5"><End_Connection /></TabPane>
        <TabPane tab="Operator Type" key="6"><Operator_Type /></TabPane>
        {/* <TabPane tab="Employees" key="4"> <Employees /> </TabPane>
        <TabPane tab="Suppliers" key="5">Content of Tab Pane 3</TabPane>
        <TabPane tab="Customers" key="6">Content of Tab Pane 3</TabPane> */}
      {/* </Tabs>  */}
      <Setdrawer setvisible={setvisible} isvisible={isvisible} />
    </div>
  );
};
    
export default Basic_Valve_Parameters; 