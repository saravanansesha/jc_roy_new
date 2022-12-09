import React,{ useState} from "react";  
// import {Card, Divider, Table ,  Tabs} from "antd";
import {Card, Divider, Table,Form,Input, Select,Button,Tabs} from "antd";
import {Link,useLocation} from "react-router-dom";
import IntlMessages from "util/IntlMessages";
import BreadCrumb from "../../components/BreadCrumbs"
import Setdrawer from "../../containers/Sidebar/setdrawer"
import Components from "./Components";
import StandardReference from "./StandardReference"
import Procedure_Referance from "./Procedure_Referance"
import Acceptance_standard from "./Acceptance_standard"
import Test_Stage from "./Test_Stage"
import Surface_condition from "./Surface_condition"
import Operator from "./Operator"
import PreCleaning from "./PreCleaning"
import Extend_of_examination from "./Extend_of_examination"
import Qualification from "./Qualification"
import StandardQualified from "./StandardQualified"

const TabPane = Tabs.TabPane;
const {Option, OptGroup} = Select;
const FormItem = Form.Item;
const General_NDE_Settings = ({match}) => {
  const [isvisible,setvisible] = useState(false)
  const [keys,setkeys] = useState('1')
  const callback = (key) => {
    setkeys(key);
  };
  return (
    <div>
<BreadCrumb> <i className="icon icon-menu-right"/> <Link to="/sample">Home</Link><i className="icon icon-menu-right"/> <span onClick={()=>setvisible(true)}>Settings</span><i className="icon icon-menu-right"/><span onClick={()=>setvisible(true)}>Non-Destructive Examination</span><i className="icon icon-menu-right"/><Link to="/General_NDE_Settings">General NDE Settings</Link>  </BreadCrumb>
{/* <div className="bread_crumb"> */}
<Tabs className="customize_tab"  activeKey={keys} onChange={callback}>
        <TabPane tab="Components" key="1"><Components /> </TabPane>
        <TabPane tab="Standard Reference" key="2"><StandardReference /></TabPane>
        <TabPane tab="Procedure Referance" key="3"><Procedure_Referance /></TabPane>
        
        <TabPane tab="Acceptance Standard" key="4"> <Acceptance_standard /> </TabPane>
        <TabPane tab="Test Stage" key="5"> <Test_Stage /> </TabPane>
        <TabPane tab="Surface Condition" key="6"> <Surface_condition /> </TabPane>
        <TabPane tab="Pre Cleaning" key="7"> <PreCleaning /> </TabPane>
        <TabPane tab="Extend of Examination" key="8"> <Extend_of_examination /> </TabPane>
        <TabPane tab="Operator" key="9"> <Operator /> </TabPane>
        <TabPane tab="Qualification" key="10"> <Qualification /> </TabPane>
        <TabPane tab="Standard Qualified" key="11"> <StandardQualified /> </TabPane>
                
      </Tabs> 
      <Setdrawer setvisible={setvisible} isvisible={isvisible} />
    </div>
  );
};
    
export default General_NDE_Settings;
