import React from "react";
import {Menu} from "antd";
import {Link} from "react-router-dom";
import {
SolutionOutlined
} from '@ant-design/icons';
import CustomScrollbars from "util/CustomScrollbars";
import SidebarLogo from "./SidebarLogo";
import UserProfile from "./UserProfile";
import AppsNavigation from "./AppsNavigation";
import {
  NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR,
  NAV_STYLE_NO_HEADER_MINI_SIDEBAR,
  THEME_TYPE_LITE
} from "../../constants/ThemeSetting";
import {useSelector} from "react-redux";
const SubMenu = Menu.SubMenu;
// const MenuItemGroup = Menu.ItemGroup;
const SidebarContent = () => {

  let { pathname} = useSelector(({common}) => common);
  let {navStyle, themeType} = useSelector(({settings}) => settings);

  const getNoHeaderClass = (navStyle) => {
    if (navStyle === NAV_STYLE_NO_HEADER_MINI_SIDEBAR || navStyle === NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR) {
      return "gx-no-header-notifications";
    }
    return "";
  };
  const getNavStyleSubMenuClass = (navStyle) => {
    if (navStyle === NAV_STYLE_NO_HEADER_MINI_SIDEBAR) {
      return "gx-no-header-submenu-popup";
    }
    return "";
  };
  const selectedKeys = pathname.substr(1);
  const defaultOpenKeys = selectedKeys.split('/')[1];
  return (
    <>

      <SidebarLogo/>
      <div className="gx-sidebar-content ">
        <div className={`gx-sidebar-notifications ${getNoHeaderClass(navStyle)}`}>
          <UserProfile/>
          <AppsNavigation/>
        </div>
        <CustomScrollbars className="gx-layout-sider-scrollbar">
          <Menu
            defaultOpenKeys={[defaultOpenKeys]}
            selectedKeys={[selectedKeys]}
            theme={themeType === THEME_TYPE_LITE ? 'lite' : 'dark'}
            mode="inline">

          <SubMenu key="dashboard" popupClassName={getNavStyleSubMenuClass(navStyle)}
                       title={<span> <i className="icon icon-dasbhoard"/>
                         <span>Strategic Planning</span></span>}>
                <Menu.Item key="sample1">
                  <Link to="/sample1">
                    <i className="icon icon-crypto"/>
                    <span>Strategic Analysis</span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="sample12">
                <Link to="/sample" style={{display:'flex',lineHeight:'18px'}}>
                    <i className="icon icon-crm"/>
                    <span>Management of <br/> Change (MoC)</span>
                  </Link>
                </Menu.Item>

              </SubMenu>
              <SubMenu key="Customer_Management" popupClassName={getNavStyleSubMenuClass(navStyle)}
                       title={<span> <i className="icon icon-user-o"/>
                         <span>Customer Management</span></span>}>
                <Menu.Item key="samples1">
                  <Link to="/sample">
                    {/* <i className="icon icon-crypto"/> */}
                    <SolutionOutlined  style={{marginRight:'0'}}/>
                    <span>Complaint</span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="sample12">
                <Link to="/sample" >
                    <i className="icon icon-thumb-up"/>
                    <span>Satisfaction</span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="sample13">
                <Link to="/sample" >
                    <i data-icon="&#xe03e;" className="icon"/>
                    
                    <span>Inspection</span>
                  </Link>
                </Menu.Item>
              </SubMenu>
              <SubMenu key="Supplier_Management" popupClassName={getNavStyleSubMenuClass(navStyle)}
                       title={<span> <i className="icon icon-tickets"/>
                         <span>Supplier Management</span></span>}>
                <Menu.Item key="sample1">
                  <Link to="/sample1" style={{display:'flex',lineHeight:'18px'}}>
                    <i className="icon icon-crypto"/>
                    <span>Non-Conformance <br></br> (NCR)</span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="sample12">
                <Link to="/sample" >
                    <i className="icon icon-navigation"/>
                    <span>Evaluation</span>
                  </Link>
                </Menu.Item>

              </SubMenu>
              <Menu.Item key="main/widgets">
                <Link to="/sample">
                  <i className="icon icon-table"/>
                  <span>Audit Management</span></Link>
              </Menu.Item>
              <Menu.Item key="main/widgets">
                <Link to="/sample" style={{display:'flex',lineHeight:'18px'}}>
                  <i className="icon icon-crypto"/>
                  <span>Non Conformance <br></br> (NCR)</span></Link>
              </Menu.Item>
              <Menu.Item key="main/widgets1">
                <Link to="/sample" style={{display:'flex',lineHeight:'18px'}}>
                  <i className="icon icon-spam"/>
                  <span>Risk Assessment</span></Link>
              </Menu.Item>
              <Menu.Item key="main/widgets1">
                <Link to="/sample" style={{display:'flex',lineHeight:'18px'}}>
                  <i className="icon icon-ripple"/>
                  <span>Calibration  Management</span></Link>
              </Menu.Item>
              <Menu.Item key="main/widgets2">
                <Link to="/sample" style={{display:'flex',lineHeight:'18px'}}>
                  <i className="icon icon-files"/>
                  <span>Document  Management</span></Link>
              </Menu.Item>
              <Menu.Item key="main/widgets11">
                <Link to="/sample" style={{display:'flex',lineHeight:'18px'}}>
                  <i className="icon icon-lock-screen"/>
                  <span>Meeting  Management</span></Link>
              </Menu.Item>
              <Menu.Item key="main/widgets112">
                <Link to="/sample" style={{display:'flex',lineHeight:'18px'}}>
                  <i className="icon icon-data-display"/>
                  <span>Task  Management</span></Link>
              </Menu.Item>
              <Menu.Item key="main/widgets1123">
                <Link to="/sample" >
                  <i className="icon icon-queries"/>
                  <span>Issues</span></Link>
              </Menu.Item>
              <SubMenu key="Non_Destructive" popupClassName={getNavStyleSubMenuClass(navStyle)}
                       title={<span style={{display:'flex',lineHeight:'18px'}}> <i className="icon icon-spin"/>
                         <span>Non Destructive <br></br> Exam</span></span>}>
                <Menu.Item key="sample111">
                  <Link to="/sample1" style={{display:'flex',lineHeight:'18px'}}>
                    <i className="icon icon-tab"/>
                    <span>Manage NDE <br></br> Tests</span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="sample121">
                <Link to="/sample" >
                    <i className="icon icon-select"/>
                    <span>Virtual Test (VT)</span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="sample1211">
                <Link to="/sample" >
                    <i className="icon icon-timeline"/>
                    <span>Ultrasonic Test (UT)</span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="sample1311">
                <Link to="/sample" >
                    <i className="icon icon-chart-radar"/>
                    <span>Magnetic Test (MT)</span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="sample1411">
                <Link to="/sample" >
                    <i className="icon icon-bitcoin"/>
                    <span>Penetrant Test (PT)</span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="sample1411">
                <Link to="/sample" style={{display:'flex',lineHeight:'18px'}}>
                    <i className="icon icon-add-circle"/>
                    <span>Positive Material <br></br>Identification(PMI)</span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="sample1411">
                <Link to="/sample"  >
                    <i className="icon icon-company"/>
                    <span>Hardness Test</span>
                  </Link>
                </Menu.Item>
              </SubMenu>
          </Menu>
        </CustomScrollbars>
      </div>
    </>
  );
};

SidebarContent.propTypes = {};
export default SidebarContent;

