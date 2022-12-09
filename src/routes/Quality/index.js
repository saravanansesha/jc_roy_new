import React,{ useState} from "react";  
// import {Card, Divider, Table ,  Tabs} from "antd";
import {Card, Divider, Table,Form,Input, Select,Button,Tabs} from "antd";
import {Link,useLocation} from "react-router-dom";
import IntlMessages from "util/IntlMessages";
import BreadCrumb from "../../components/BreadCrumbs"
import Setdrawer from "../../containers/Sidebar/setdrawer"
import Impact_Area from "./Impact_Area"
import Process from "./Process"
import Risk_Source from "./Risk_Source"
import Risk_Type from "./Risk_Type"
import MoC_Type from "./MoC_Type"
const TabPane = Tabs.TabPane;
const {Option, OptGroup} = Select;
const FormItem = Form.Item;
const Quality = ({match}) => {
  const [isvisible,setvisible] = useState(false)
  const [keys,setkeys] = useState('1')
  const callback = (key) => {
    setkeys(key);
  };
  console.log('----')
  return (
    <div>
    <BreadCrumb> <i className="icon icon-menu-right"/> <Link to="/sample">Home</Link><i className="icon icon-menu-right"/> <span onClick={()=>setvisible(true)}>Settings</span><i className="icon icon-menu-right"/><Link to="/Quality">Quality</Link>  </BreadCrumb>
    {/* <div className="bread_crumb"> */}
    <Tabs className="customize_tab"  activeKey={keys} onChange={callback}>
            <TabPane tab="Impact Area Management" key="1"><Impact_Area /> </TabPane>
            <TabPane tab="Quality Process Management" key="2"><Process /></TabPane>
            <TabPane tab="Risk Source Management" key="3"><Risk_Source /></TabPane>
            <TabPane tab="Risk Type Management" key="4"><Risk_Type /></TabPane>
            <TabPane tab="MoC Type Management" key="5"><MoC_Type /></TabPane>
          </Tabs> 
          <Setdrawer setvisible={setvisible} isvisible={isvisible} />
        </div>
  );
};
     
export default Quality;

