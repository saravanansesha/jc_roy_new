import React,{ useState} from "react";  
// import {Card, Divider, Table ,  Tabs} from "antd";
import {Card, Divider, Table,Form,Input, Select,Button,Tabs} from "antd";
import {Link,useLocation} from "react-router-dom";
import IntlMessages from "util/IntlMessages";
import BreadCrumb from "../../components/BreadCrumbs"
import Setdrawer from "../../containers/Sidebar/setdrawer"
import Usage_Condition from "./Usage_Condition"
import Type_of_Maintenance from "./Type_of_Maintenance"
import Send_For from "./Send_For"
import Machine_Location from "./Machine_Location"
import Instrument_Condition from "./Instrument_Condition"

const TabPane = Tabs.TabPane;
const {Option, OptGroup} = Select;
const FormItem = Form.Item;
const Asset = ({match}) => {
  const [isvisible,setvisible] = useState(false)
  const [keys,setkeys] = useState('1')
  const callback = (key) => {
    setkeys(key);
  };
  console.log('----')
  return (
    <div>
    <BreadCrumb> <i className="icon icon-menu-right"/> <Link to="/sample">Home</Link><i className="icon icon-menu-right"/> <span onClick={()=>setvisible(true)}>Settings</span><i className="icon icon-menu-right"/><Link to="/Asset">Asset Basic Settings</Link>  </BreadCrumb>
    {/* <div className="bread_crumb"> */}
    <Tabs className="customize_tab"  activeKey={keys} onChange={callback}>
            <TabPane tab="Instrument Condition" key="1"><Instrument_Condition /> </TabPane>
            <TabPane tab="Machine Location" key="2"><Machine_Location /></TabPane>
            <TabPane tab="Send For" key="3"><Send_For /></TabPane>
            <TabPane tab="Type of Maintenance" key="4"><Type_of_Maintenance /></TabPane>
            <TabPane tab="Usage Condition" key="4"><Usage_Condition /></TabPane>
          </Tabs> 
          <Setdrawer setvisible={setvisible} isvisible={isvisible} />
        </div>
  );
};
     
export default Asset;

