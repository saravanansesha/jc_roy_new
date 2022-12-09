import React,{ useState} from "react";
import {Button, Drawer, Radio} from "antd";
import {Link,useLocation} from "react-router-dom";
let Setdrawer = (props) =>{
    let location = useLocation()
    const { setvisible,isvisible} = props
    const [ids,setids] = useState([])
    function forarrow(e){
        console.log('xxx')
        const {id} = e.currentTarget
        if (ids.indexOf(id) == -1)
        {
            setids(old => [...old,id]) 
        }
        if(ids.indexOf(id) != -1){
            let ab = ids.filter((item)=>{
                return item != id
            })
            setids(ab)
        } 
    }
    function getCustomizerContent(){
        return (
            <>
            <ul>
               <li  className={`pop-menu`}>
                    <div className={`side_pop_up_main_menu ${location.pathname == '/Manage_User_Roles' ? 'active' : ''}`}>
                        {/* <p>Basic Settings</p> */}
                        <Link onClick={()=>setvisible(false)} to="/Manage_User_Roles">
                        Manage User Roles
                            </Link>
                    </div>

                </li>
                {/* <li  className={`pop-menu`}>
                    <div className={`side_pop_up_main_menu ${location.pathname == '/Product_Group' ? 'active' : ''}`}>
                     
                        <Link onClick={()=>setvisible(false)} to="/Product_Group">
                        Product Group
                            </Link>
                    </div>

                </li> */}
                <li  className={`pop-menu`}>
                    <div className={`side_pop_up_main_menu ${location.pathname == '/Basic_Settings' ? 'active' : ''}`}>
                        {/* <p>Basic Settings</p> */}
                        <Link onClick={()=>setvisible(false)} to="/Basic_Settings">
                        Basic Settings
                            </Link>
                    </div>

                </li>
                <li  className={`pop-menu`}>
                    <div className={`side_pop_up_main_menu ${location.pathname == '/Standard_s_Normative' ? 'active' : ''}`}>
                        {/* <p>Basic Settings</p> */}
                        <Link onClick={()=>setvisible(false)} to="/Standard_s_Normative">
                        Standard's Normative
                            </Link>
                    </div>

                </li>
                <li  className={`pop-menu`}>
                    <div className={`side_pop_up_main_menu ${location.pathname == '/Product_Configuration' ? 'active' : ''}`}>
                        <Link onClick={()=>setvisible(false)} to="/Product_Configuration">
                        Product Configuration
                            </Link>
                    </div>

                </li>
                <li  className={`pop-menu`}>
                    <div className={`side_pop_up_main_menu ${location.pathname == '/Basic_Valve_Parameters' ? 'active' : ''}`}>
                        <Link onClick={()=>setvisible(false)} to="/Basic_Valve_Parameters">
                        Basic Valve Parameters
                            </Link>
                    </div>

                </li>
                {/* <li onClick={(e)=>forarrow(e)} className={`${ids.indexOf('2') != -1 ? 'submenu ' : ``}pop-menu`} id={`2`}>
                    <div className="side_pop_up_main_menu">
                        <p>Product Configuration</p>
                        <i className="ant-menu-submenu-arrow"/>
                    </div>
                    <ul>
                    <li className={`${location.pathname == '/Model_Number' ? 'active' : ''}`}>
                            <Link onClick={()=>{ setids([]); setvisible(false) }} to="/Model_Number">
                            Model Number
                            </Link>
                        </li>
                        <li className={`${location.pathname == '/product_type' ? 'active' : ''}`}>
                            <Link onClick={()=>{ setids([]); setvisible(false) }} to="/product_type">
                            Product Type
                            </Link>
                        </li>
                        <li className={`${location.pathname == '/settings_components' ? 'active' : ''}`} >
                            <Link onClick={()=>{ setids([]); setvisible(false) }} to="/settings_components">
                            Components
                            </Link>
                        </li>
                        <li className={`${location.pathname == '/product_components_map' ? 'active' : ''}`} >
                            <Link onClick={()=>{ setids([]); setvisible(false) }} to="/product_components_map">
                            Product & Components Map
                            </Link>
                        </li>
                    </ul>
                </li> */}
                {/* <li onClick={(e)=>forarrow(e)} className={`${ids.indexOf('3') != -1 ? 'submenu ' : ``}pop-menu`} id={`3`}>
                    <div className="side_pop_up_main_menu">
                        <p>Basic Valve Parameters</p>
                        <i className="ant-menu-submenu-arrow"/>
                    </div>
                    <ul>
                    <li className={`${location.pathname == '/Size' ? 'active' : ''}`}>
                            <Link onClick={()=>{ setids([]); setvisible(false) }} to="/Size">
                            Size
                            </Link>
                        </li>
                        <li className={`${location.pathname == '/Bore' ? 'active' : ''}`}>
                            <Link onClick={()=>{ setids([]); setvisible(false) }} to="/Bore">
                            Bore
                            </Link>
                        </li>
                        <li className={`${location.pathname == '/Class_Ratings' ? 'active' : ''}`} >
                            <Link onClick={()=>{ setids([]); setvisible(false) }} to="/Class_Ratings">
                            Class Ratings
                            </Link>
                        </li>
                        <li className={`${location.pathname == '/Working_Pressure' ? 'active' : ''}`} >
                            <Link onClick={()=>{ setids([]); setvisible(false) }} to="/Working_Pressure">
                            Working Pressure
                            </Link>
                        </li>
                        <li className={`${location.pathname == '/End_Connection_Types' ? 'active' : ''}`} >
                            <Link onClick={()=>{ setids([]); setvisible(false) }} to="/End_Connection_Types">
                            End Connection Types
                            </Link>
                        </li>
                        <li className={`${location.pathname == '/Operator_Types' ? 'active' : ''}`} >
                            <Link onClick={()=>{ setids([]); setvisible(false) }} to="/Operator_Types">
                            Operator Types
                            </Link>
                        </li>
                    </ul>
                </li> */}
                <li onClick={(e)=>forarrow(e)} className={`${ids.indexOf('4') != -1 ? 'submenu ' : ``}pop-menu`} id={`4`}>
                    <div className="side_pop_up_main_menu">
                        <p>Non-Destructive Examination</p>
                        <i className="ant-menu-submenu-arrow"/>
                    </div>
                    <ul>
                    <li className={`${location.pathname == '/General_NDE_Settings' ? 'active' : ''}`}>
                            <Link onClick={()=>{ setids([]); setvisible(false) }} to="/General_NDE_Settings">
                            General NDE Settings 
                            </Link>
                        </li>
                        <li className={`${location.pathname == '/Ultrasonic_Test' ? 'active' : ''}`}>
                            <Link onClick={()=>{ setids([]); setvisible(false) }} to="/Ultrasonic_Test">
                            Ultrasonic Test
                            </Link>
                        </li>
                        <li className={`${location.pathname == '/Visual_Test' ? 'active' : ''}`} >
                            <Link onClick={()=>{ setids([]); setvisible(false) }} to="/Visual_Test">
                            Visual Test
                            </Link>
                        </li>
                        <li className={`${location.pathname == '/Penetrant_Test' ? 'active' : ''}`} >
                            <Link onClick={()=>{ setids([]); setvisible(false) }} to="/Penetrant_Test">
                            Penetrant Test
                            </Link>
                        </li>
                        <li className={`${location.pathname == '/Magnetic_Test' ? 'active' : ''}`} >
                            <Link onClick={()=>{ setids([]); setvisible(false) }} to="/Magnetic_Test">
                            Magnetic Test
                            </Link>
                        </li>
                        <li className={`${location.pathname == '/Positive_Material_Identification' ? 'active' : ''}`} >
                            <Link onClick={()=>{ setids([]); setvisible(false) }} to="/Positive_Material_Identification">
                            Positive Material Identification
                            </Link>
                        </li>
                    </ul>
                </li>
                <li className={`pop-menu`}>
                <div className={`side_pop_up_main_menu ${location.pathname == '/Audit' ? 'active' : ''}`}>
                        {/* <p>Basic Settings</p> */}
                        <Link onClick={()=>setvisible(false)} to="/Audit">
                        Audit
                            </Link>
                    </div>

                </li>
                <li className={`pop-menu`}>
                <div className={`side_pop_up_main_menu ${location.pathname == '/Material_Configuration' ? 'active' : ''}`}>
                        {/* <p>Basic Settings</p> */}
                        <Link onClick={()=> setvisible(false)} to="/Material_Configuration">
                        Material Configuration
                            </Link>
                    </div>
                </li>
                <li className={`pop-menu`}>
                <div className={`side_pop_up_main_menu ${location.pathname == '/Meeting' ? 'active' : ''}`}>
                        {/* <p>Basic Settings</p> */}
                        <Link onClick={()=> setvisible(false)} to="/Meeting">
                            Meeting
                        </Link>
                </div>
                </li>
                <li className={`pop-menu`}>
                <div className={`side_pop_up_main_menu ${location.pathname == '/Quality' ? 'active' : ''}`}>
                        {/* <p>Basic Settings</p> */}
                        <Link onClick={()=> setvisible(false)} to="/Quality">
                            Quality
                        </Link>
                </div>
                </li>
                <li className={`pop-menu`}>
                <div className={`side_pop_up_main_menu ${location.pathname == '/NCR' ? 'active' : ''}`}>
                        {/* <p>Basic Settings</p> */}
                        <Link onClick={()=> setvisible(false)} to="/NCR">
                            NCR
                        </Link>
                </div>
                </li>
                <li className={`pop-menu`}>
                <div className={`side_pop_up_main_menu ${location.pathname == '/Asset' ? 'active' : ''}`}>
                        {/* <p>Basic Settings</p> */}
                        <Link onClick={()=> setvisible(false)} to="/Asset">
                        Asset
                        </Link>
                </div>
                </li>
                <li className={`pop-menu`}>
                <div className={`side_pop_up_main_menu ${location.pathname == '/Customer_management' ? 'active' : ''}`}>
                        {/* <p>Basic Settings</p> */}
                        <Link onClick={()=> setvisible(false)} to="/Customer_management">
                        Customer Management
                        </Link>
                </div>
                </li>
                <li className={`pop-menu`}>
                <div className={`side_pop_up_main_menu ${location.pathname == '/Qalert' ? 'active' : ''}`}>
                        {/* <p>Basic Settings</p> */}
                        <Link onClick={()=> setvisible(false)} to="/Qalert">
                        Q-Alert
                        </Link>
                </div>
                </li>
                <li className={`pop-menu`}>
                <div className={`side_pop_up_main_menu ${location.pathname == '/Suggestion' ? 'active' : ''}`}>
                        {/* <p>Basic Settings</p> */}
                        <Link onClick={()=> setvisible(false)} to="/Suggestion">
                        Suggestion
                        </Link>
                </div>
                </li>
                <li className={`pop-menu`}>
                <div className={`side_pop_up_main_menu ${location.pathname == '/EHS' ? 'active' : ''}`}>
                        {/* <p>Basic Settings</p> */}
                        <Link onClick={()=> setvisible(false)} to="/EHS">
                        EHS
                        </Link>
                </div>
                </li> 
                <li className={`pop-menu`}>
                <div className={`side_pop_up_main_menu ${location.pathname == '/Kaizen' ? 'active' : ''}`}>
                        {/* <p>Basic Settings</p> */}
                        <Link onClick={()=> setvisible(false)} to="/Kaizen">
                        Kaizen
                        </Link>
                </div>
                </li>          
                
            </ul>
            </>
        )
    }
    // alert(isvisible)
    return(
        <>
      <Drawer
        placement="right"
        closable={false}
        onClose={()=>setvisible(false)}
        visible={isvisible}>
        {
          getCustomizerContent()
        }
      </Drawer>
        </>
    )
}

export default Setdrawer;