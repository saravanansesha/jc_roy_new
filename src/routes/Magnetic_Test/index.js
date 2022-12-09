import React,{ useState} from "react";  
// import {Card, Divider, Table ,  Tabs} from "antd";
import {Card, Divider, Table,Form,Input, Select,Button,Tabs} from "antd";
import {Link,useLocation} from "react-router-dom";
import IntlMessages from "util/IntlMessages";
import BreadCrumb from "../../components/BreadCrumbs"
import Setdrawer from "../../containers/Sidebar/setdrawer"
import Magnetization_Technique from "./Magnetization_Technique"
import Magnetization_Direction from "./Magnetization_Direction"
import Current_Type from "./Current_Type"
import Voltage from "./Voltage"
import Media_Type from "./Media_Type"
import Media_Application from "./Media_Application"
import Particle_Color from "./Particle_Color"
const TabPane = Tabs.TabPane;
const {Option, OptGroup} = Select;
const FormItem = Form.Item;
const Magnetic_Test = ({match}) => {
  const [isvisible,setvisible] = useState(false)
  const [keys,setkeys] = useState('1')
  const callback = (key) => {
    setkeys(key);
  };
  console.log('----')
  return (
    <div>
    <BreadCrumb> <i className="icon icon-menu-right"/> <Link to="/sample">Home</Link><i className="icon icon-menu-right"/> <span onClick={()=>setvisible(true)}>Settings</span><i className="icon icon-menu-right"/><span onClick={()=>setvisible(true)}>Non-Destructive Examination</span><i className="icon icon-menu-right"/><Link to="/Magnetic_Test">Magnetic Test</Link>  </BreadCrumb>
    {/* <div className="bread_crumb"> */}
    <Tabs className="customize_tab"  activeKey={keys} onChange={callback}>
            <TabPane tab="Magnetization Technique" key="1"><Magnetization_Technique /> </TabPane>
            <TabPane tab="Magnetization Direction" key="2"><Magnetization_Direction /></TabPane>
            <TabPane tab="Current Type" key="3"><Current_Type/></TabPane>
            
            <TabPane tab="Voltage" key="4"> <Voltage /> </TabPane>
            <TabPane tab="Media Type" key="5"> <Media_Type/></TabPane>
            <TabPane tab="Media Application" key="6"> <Media_Application /> </TabPane>
            <TabPane tab="Particle Color" key="7"> <Particle_Color /> </TabPane>                    
          </Tabs> 
          <Setdrawer setvisible={setvisible} isvisible={isvisible} />
        </div>
  );
};
    
export default Magnetic_Test;

