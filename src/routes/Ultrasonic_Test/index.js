import React,{ useState} from "react";  
// import {Card, Divider, Table ,  Tabs} from "antd";
import {Card, Divider, Table,Form,Input, Select,Button,Tabs} from "antd";
import {Link,useLocation} from "react-router-dom";
import IntlMessages from "util/IntlMessages";
import BreadCrumb from "../../components/BreadCrumbs"
import Setdrawer from "../../containers/Sidebar/setdrawer"
import Scan_Scope from "./Scan_Scope"
import Screen_Height from "./Screen_Height"
import Transfer_Correction from "./Transfer_Correction"
import Scan_level from "./Scan_level"
const TabPane = Tabs.TabPane;
const {Option, OptGroup} = Select;
const FormItem = Form.Item;
const Ultrasonic_Test = ({match}) => {
  const [isvisible,setvisible] = useState(false)
  const [keys,setkeys] = useState('1')
  const callback = (key) => {
    setkeys(key);
  };
  return (
    <div>
    <BreadCrumb> <i className="icon icon-menu-right"/> <Link to="/sample">Home</Link><i className="icon icon-menu-right"/> <span onClick={()=>setvisible(true)}>Settings</span><i className="icon icon-menu-right"/><span onClick={()=>setvisible(true)}>Non-Destructive Examination</span><i className="icon icon-menu-right"/><Link to="/Ultrasonic_Test">Ultrasonic Test</Link>  </BreadCrumb>
    {/* <div className="bread_crumb"> */}
    <Tabs className="customize_tab"  activeKey={keys} onChange={callback}>
            <TabPane tab="Scan Scope" key="1"><Scan_Scope /> </TabPane>
            <TabPane tab="Screen Height" key="2"><Screen_Height /></TabPane>
            <TabPane tab="Transfer Correction" key="3"><Transfer_Correction /></TabPane>
            
            <TabPane tab="Scan Level" key="4"> <Scan_level /> </TabPane>

                    
          </Tabs> 
          <Setdrawer setvisible={setvisible} isvisible={isvisible} />
        </div>
  );
};
    
export default Ultrasonic_Test;

