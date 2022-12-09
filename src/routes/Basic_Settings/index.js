import React,{ useState} from "react";  
// import {Card, Divider, Table ,  Tabs} from "antd";
import {Card, Divider, Table,Form,Input, Select,Button,Tabs} from "antd";
import {Link,useLocation} from "react-router-dom";
import IntlMessages from "util/IntlMessages";
import BreadCrumb from "../../components/BreadCrumbs"
import Setdrawer from "../../containers/Sidebar/setdrawer"
import Product_group from "./product_group";
import Plants from "./Plants"
import Department from "./Department"
import Employees from "./Employees"

const TabPane = Tabs.TabPane;
const {Option, OptGroup} = Select;
const FormItem = Form.Item;
const Basic_Settings = ({match}) => {
  const [isvisible,setvisible] = useState(false)
  const [keys,setkeys] = useState('1')
  const callback = (key) => {
    setkeys(key);
  };
  return (
    <div>
<BreadCrumb> <i className="icon icon-menu-right"/> <Link to="/sample">Home</Link><i className="icon icon-menu-right"/> <span onClick={()=>setvisible(true)}>Settings</span><i className="icon icon-menu-right"/><Link to="/Basic_Settings">Basic Settings</Link>  </BreadCrumb>
{/* <div className="bread_crumb"> */}
<Tabs className="customize_tab"  activeKey={keys} onChange={callback}>
        <TabPane tab="Product Group" key="1"><Product_group /> </TabPane>
        <TabPane tab="Plants" key="2"><Plants /></TabPane>
        <TabPane tab="Department" key="3"><Department /></TabPane>
        <TabPane tab="Employees" key="4"> <Employees /> </TabPane>
        <TabPane tab="Suppliers" key="5">Content of Tab Pane 3</TabPane>
        <TabPane tab="Customers" key="6">Content of Tab Pane 3</TabPane>
      </Tabs> 
      {/* <Card className="gx-card" title="Basic">
      <Tabs  activeKey={keys} onChange={callback}>
        <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
        <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
        <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
      </Tabs>
    </Card> */}
      {/* </div> */}
      {/* <h2 className="title gx-mb-4"><IntlMessages id="sidebar.samplePage"/></h2>

      <div className="gx-d-flex justify-content-center">
        <h4>Basic_Settings</h4>
      </div> */}
      {/* <Table className="gx-table-responsive"     pagination={{ pageSize: 4}} columns={columns} dataSource={data}/> */}
      <Setdrawer setvisible={setvisible} isvisible={isvisible} />
    </div>
  );
};
    
export default Basic_Settings;
