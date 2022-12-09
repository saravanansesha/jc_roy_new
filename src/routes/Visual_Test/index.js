import React,{ useState} from "react";  
// import {Card, Divider, Table ,  Tabs} from "antd";
import {Card, Divider, Table,Form,Input, Select,Button,Tabs} from "antd";
import {Link,useLocation} from "react-router-dom";
import IntlMessages from "util/IntlMessages";
import BreadCrumb from "../../components/BreadCrumbs"
import Setdrawer from "../../containers/Sidebar/setdrawer"
import Viewing_Method from "./Viewing_Method"
import Technique from "./Technique"
import Aids_for_Direct_VT from "./Aids_for_Direct_VT"
import Equipment_for_Renote_Vt from "./Equipment_for_Renote_Vt"
import Lighting_Type from "./Lighting_Type"
import Lighting_Source from "./Lighting_Source"
import Lighting_incidence from "./Lighting_incidence"
import Diffuser_Type from "./Diffuser_Type"
const TabPane = Tabs.TabPane;
const {Option, OptGroup} = Select;
const FormItem = Form.Item;
const Visual_Test = ({match}) => {
  const [isvisible,setvisible] = useState(false)
  const [keys,setkeys] = useState('1')
  const callback = (key) => {
    setkeys(key);
  };
  console.log('----')
  return (
    <div>
    <BreadCrumb> <i className="icon icon-menu-right"/> <Link to="/sample">Home</Link><i className="icon icon-menu-right"/> <span onClick={()=>setvisible(true)}>Settings</span><i className="icon icon-menu-right"/><span onClick={()=>setvisible(true)}>Non-Destructive Examination</span><i className="icon icon-menu-right"/><Link to="/Visual_Test">Visual Test</Link>  </BreadCrumb>
    {/* <div className="bread_crumb"> */}
    <Tabs className="customize_tab"  activeKey={keys} onChange={callback}>
            <TabPane tab="Viewing Method" key="1"><Viewing_Method /> </TabPane>
            <TabPane tab="Technique" key="2"><Technique /></TabPane>
            <TabPane tab="Aids for Direct VT" key="3"><Aids_for_Direct_VT/></TabPane>
            
            <TabPane tab="Equipment for Renote Vt" key="4"> <Equipment_for_Renote_Vt /> </TabPane>
            <TabPane tab="Lighting Type" key="5"> <Lighting_Type/></TabPane>
            <TabPane tab="Lighting Source" key="6"> <Lighting_Source /> </TabPane>
            <TabPane tab="Lighting incidence" key="7"> <Lighting_incidence /> </TabPane>
            <TabPane tab="Diffuser Type" key="8"> <Diffuser_Type /> </TabPane>
                    
          </Tabs> 
          <Setdrawer setvisible={setvisible} isvisible={isvisible} />
        </div>
  );
};
    
export default Visual_Test;

