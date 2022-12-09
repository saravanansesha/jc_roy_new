import React,{ useState} from "react";  
// import {Card, Divider, Table ,  Tabs} from "antd";
import {Card, Divider, Table,Form,Input, Select,Button,Tabs} from "antd";
import {Link,useLocation} from "react-router-dom";
import IntlMessages from "util/IntlMessages";
import BreadCrumb from "../../components/BreadCrumbs"
import Setdrawer from "../../containers/Sidebar/setdrawer"
import Immediate_Action from "./Immediate_Action"
import Nature_Of_Observation from "./Nature_Of_Observation"
import Main_Cause from "./Main_Cause"
import Root_Cause from "./Root_Cause"

const TabPane = Tabs.TabPane;
const {Option, OptGroup} = Select;
const FormItem = Form.Item;
const EHS = ({match}) => {
  const [isvisible,setvisible] = useState(false)
  const [keys,setkeys] = useState('1')
  const callback = (key) => {
    setkeys(key);
  };
  console.log('----')
  return (
    <div>
    <BreadCrumb> <i className="icon icon-menu-right"/> <Link to="/sample">Home</Link><i className="icon icon-menu-right"/> <span onClick={()=>setvisible(true)}>Settings</span><i className="icon icon-menu-right"/><Link to="/EHS">EHS</Link>  </BreadCrumb>
    {/* <div className="bread_crumb"> */}
    <Tabs className="customize_tab"  activeKey={keys} onChange={callback}>
    <TabPane tab="Nature Of Observation" key="1"><Nature_Of_Observation /> </TabPane>
            <TabPane tab="Immediate Action" key="2"><Immediate_Action /></TabPane>
            <TabPane tab="Main Cause" key="3"><Main_Cause /></TabPane>
            <TabPane tab="Root Cause" key="4"><Root_Cause /></TabPane>
          </Tabs> 
          <Setdrawer setvisible={setvisible} isvisible={isvisible} />
        </div>
  );
};
     
export default EHS;

