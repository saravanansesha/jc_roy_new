import React,{ useState} from "react";  
// import {Card, Divider, Table ,  Tabs} from "antd";
import {Card, Divider, Table,Form,Input, Select,Button,Tabs} from "antd";
import {Link,useLocation} from "react-router-dom";
import IntlMessages from "util/IntlMessages";
import BreadCrumb from "../../components/BreadCrumbs"
import Setdrawer from "../../containers/Sidebar/setdrawer"
import Penetrant_type from "./Penetrant_type"
import Method from "./Method"
import Penetrant_Form from "./Penetrant_Form"
const TabPane = Tabs.TabPane;
const {Option, OptGroup} = Select;
const FormItem = Form.Item;
const Penetrant_Test = ({match}) => {
  const [isvisible,setvisible] = useState(false)
  const [keys,setkeys] = useState('1')
  const callback = (key) => {
    setkeys(key);
  };
  console.log('----')
  return (
    <div>
    <BreadCrumb> <i className="icon icon-menu-right"/> <Link to="/sample">Home</Link><i className="icon icon-menu-right"/> <span onClick={()=>setvisible(true)}>Settings</span><i className="icon icon-menu-right"/><span onClick={()=>setvisible(true)}>Non-Destructive Examination</span><i className="icon icon-menu-right"/><Link to="/Penetrant_Test">Penetrant Test</Link>  </BreadCrumb>
    {/* <div className="bread_crumb"> */}
    <Tabs className="customize_tab"  activeKey={keys} onChange={callback}>
            <TabPane tab="Penetrant Type" key="1"><Penetrant_type /> </TabPane>
            <TabPane tab="Method" key="2"><Method /></TabPane>
            <TabPane tab="Penetrant Form" key="3"><Penetrant_Form/></TabPane>                    
          </Tabs> 
          <Setdrawer setvisible={setvisible} isvisible={isvisible} />
        </div>
  );
};
    
export default Penetrant_Test;

