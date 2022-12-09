import React,{ useEffect, useState} from "react";  
import {Card, Divider, Table,Form,Input, Select,Button} from "antd";
import {Link,useLocation} from "react-router-dom";
import IntlMessages from "util/IntlMessages";
import BreadCrumb from "../../components/BreadCrumbs"
import Setdrawer from "../../containers/Sidebar/setdrawer"
const {Option, OptGroup} = Select;
const FormItem = Form.Item;
const Manage_User_Roles = ({match}) => {
  const [isvisible,setvisible] = useState(false)
  const [foredit,setforedit] = useState([])
  // useEffect(()=>{
  //   console.log('i working here')

  // })
  const[isedit,setisedit] = useState([])
  const [data_back,setdata] = useState([
    {
      key: '1',
      role: 'Role1',
      permissions : 'permissions',
      action : <div>
        <button>
            Edit
        </button>
        <button>
            Delete
        </button>
      </div>,
    },
    {
      key: '2',
      role: 'Role2',
      permissions : 'permissions',
      action : <div>
      <button>
          Edit
      </button>
      <button>
          Delete
      </button>
    </div>,
    },
    {
      key: '3',
      role: 'Role3',
      permissions : 'permissions',
      action : <div>
        <button>
            Edit
        </button>
        <button>
            Delete
        </button>
      </div>,
    },
    {
      key: '4',
      role: 'Role1',
      permissions : 'permissions',
      action : <div>
        <button>
            Edit
        </button>
        <button>
            Delete
        </button>
      </div>,
    },
    {
      key: '5',
      role: 'Role2',
      permissions : 'permissions',
      action : <div>
        <button>
            Edit
        </button>
        <button>
            Delete
        </button>
      </div>,
    },
    {
      key: '6',
      role: 'Role3',
      permissions : 'permissions',
      action : <div>
        <button>
            Edit
        </button>
        <button>
            Delete
        </button>
      </div>,
    }    
  ])
  const [form] = Form.useForm();
  const columns = [
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
      render: (text,row,index) => {
       let check_presence =   foredit.filter((item)=>{    
        return index == item.index
        })
      if(check_presence.length > 0){
        function handleChange(value){
          
        }
        let values = {

        }
        let find_key =  foredit.filter((item,i)=>{
        return item.index == index
        })
        // console.log(check_presence,'there is a key')
        find_key = find_key[0].key
        
        let value1 = data_back.filter((item)=>{
          // console.log(item,'there is a key')
          return item.key == find_key
        })
        values[`roles${index}`] = value1[0].role
        values[`permissions${index}`] = value1[0].permissions
        if(isedit.indexOf(index) == -1){
          form.setFieldsValue(values)
          setisedit((isedit)=>[...isedit,index])
        }else{
          if(isedit.indexOf(index) == -1){
            
          }          
        }
        function oncancel(){
          let remoedit = foredit.filter((item)=>{
            return item.key != find_key
          })
          setforedit(remoedit)          
        }
        function onFinish(values){
          let datason = data_back.map((item)=>{
            if(item.key == find_key){
              let forchange = item
              forchange.permissions = values[`permissions${index}`]
              forchange.role = values[`roles${index}`]
              return item
            }else{
              return item  
            }
            
          })
          let remoedit = foredit.filter((item)=>{
            return item.key != find_key
          })
          setforedit(remoedit)
          setdata(datason)
          }
        function onFinishFailed(){

        }

          return {
            props:{colSpan:3},
            children : (
              // <>
              // <div>
                
              // </div>
              
              // </>
               <Form
          initialValues={{ remember: true }}
          name="basic"
          form={form}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          layout="inline">
                     <FormItem label={`Permissions`} rules={[{ required: true, message: 'Please input your username!\'}' }]} name={`permissions${index}`}>

<Input placeholder="Username"/>
</FormItem>
<FormItem label={`Role`} rules={[{ required: true, message: 'Please select any one of the field'}]} name={`roles${index}`}>
<Select
        
        style={{width: 200}}
        onChange={handleChange}
      >
          <Option value="Role1">Role1</Option>
          <Option value="Role2">Role2</Option>
          <Option value="Role3">Role3</Option>
      </Select>
      </FormItem>
          
      <Button className="gx-mb-0"
                    type="primary"
                    htmlType="submit"
            >
              Save
            </Button>
            <Button className="gx-mb-0"
                    type="primary"
                    onClick={oncancel}
            >
              Cancel
            </Button>
          </Form>
          )}
      }else{
        return <span className="gx-link">{text}</span>
      }
    // if(index == 0){
    //   return{
        // children : <><div style={{display : 'flex',flexDirection : 'column'}}><label>Name</label><input name="name"></input></div><div style={{display : 'flex',flexDirection : 'column'}}><label>Age</label><input name="name"></input></div><div style={{display : 'flex',flexDirection : 'column'}}><label>Address</label> <textarea></textarea></div> <button>Submit</button> </>,
        // props:{colSpan:3}
    //   }
      
    // }else{
  
    // }
        
    } ,
    },
    {
      title: 'Permissions',
      dataIndex: 'permissions',
      key: 'permissions',
      
    
    },
    {
      title: 'Action',
      key: 'action',
      dataIndex: 'action'  ,
    }
  ];
  let data = []
  data = data_back.map((item,i)=>{
    let check_presence =   foredit.filter((items)=>{    
      console.log(String(item.key) == String(items.key),'i am here')
      console.log(items.key,'i am here')
      return String(item.key) == String(items.key)
      })
      
      if(check_presence.length > 0){
        return {
          key : item.key,  
          role : '',
          permissions : '',
          action : ''
        }
      }else{
        return {

          key : item.key,
          role : item.role,
          permissions : item.permissions,
          action : <><div><button id={item.key} onClick={(e)=>{
            let edit_field = {
              key : e.target.id,
              index : e.target.getAttribute('data-index')
            }
            setforedit((foredit)=>[...foredit,edit_field])
          }} data-index={i} >Edit</button><button id={item.key} data-index={i} onClick={(e)=>{
           let for_databack =   data_back.filter((item)=>{
                return item.key != e.target.id
           }) 
           let for_isedit =  for_databack.map((item,i)=>{
            // console.log('there is a delete')
                foredit.map((items,j)=>{
                  if(item.key == items.key){
                    if(items.index == i){
                      // let setfor_edit = foredit[j]
                      // console.log(setfor_edit,'there is a delete')
                    }else{
                      let change_for_edit = foredit
                      change_for_edit[j].index = `${i}`
                      setforedit(change_for_edit)
                    }
                  }
                })
           })
           setdata(for_databack)
          }}>Delete</button></div></> 
      }
      }

  })
  function handleChange(){

  }
  

  function onFinish(values){
    
    console.log(values,'i am here')
    
  }
  function onFinishFailed(){

  }
  return (
    <div>
<BreadCrumb> <i className="icon icon-menu-right"/> <Link to="/sample">Home</Link><i className="icon icon-menu-right"/> <span onClick={()=>setvisible(true)}>Settings</span><i className="icon icon-menu-right"/><Link to="/Manage_User_Roles">Manage User Roles</Link>  </BreadCrumb>
      <h2 className="title gx-mb-4"><IntlMessages id="sidebar.samplePage"/></h2>

      <div className="gx-d-flex justify-content-center">
        <h4>Manage_User_Roles</h4>
      </div>
      <Table className="gx-table-responsive"     pagination={{ pageSize: 4}} columns={columns} dataSource={data}/>
      {/* <Form
          initialValues={{ remember: true }}
          name="basic"
          form={form}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          layout="inline">
                     <FormItem rules={[{ required: true, message: 'Please input your username!\'}' }]} name="uaername">

<Input placeholder="Username"/>
</FormItem>
<FormItem rules={[{ required: true, message: 'Please select any one of the field'}]} name="roles">
<Select
        
        style={{width: 200}}
        onChange={handleChange}
      >
          <Option value="05">Role1</Option>
          <Option value="06">Role2</Option>
          <Option value="07">Role3</Option>
      </Select>
      </FormItem>
          
      <Button className="gx-mb-0"
                    type="primary"
                    htmlType="submit"
            >
              Save
            </Button>
          </Form> */}
      <Setdrawer setvisible={setvisible} isvisible={isvisible} />
    </div>
  );
};
    
export default Manage_User_Roles;
