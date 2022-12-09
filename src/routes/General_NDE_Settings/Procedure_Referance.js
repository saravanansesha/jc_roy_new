import React,{ useState} from "react";  
// import {Card, Divider, Table ,  Tabs} from "antd";
import {Card, Divider, Table,Form,Input, Select,Button,Tabs} from "antd";
// import {Link,useLocation} from "react-router-dom";
// import IntlMessages from "util/IntlMessages";
// import BreadCrumb from "../../Procedure_Referances/BreadCrumbs"
// import Setproductadd from "./Setproductadd"
import Add_Procedure_Referance from "./Add_Procedure_Referance"
// const DesignStandard = Tabs.TabPane;
const {Option, OptGroup} = Select;
const FormItem = Form.Item;
const Procedure_Referance = ({match}) => {
  const [form] = Form.useForm();
  const [isvisible,setvisible] = useState(false)
  const [keys,setkeys] = useState('1')
  const callback = (key) => {
    setkeys(key);
  };
  const [foredit,setforedit] = useState([])
  // useEffect(()=>{
  //   console.log('i working here')

  // })
  const[isedit,setisedit] = useState([])
  const [data_back,setdata] = useState([
    {
      key: '1',
      Procedure_Referance: 'procedure1',
      status: 'inactive',
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
      Procedure_Referance: 'procedure2',
      status: 'active',
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
      status: 'active',
      Procedure_Referance: 'procedure3',
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
      status: 'active',
      Procedure_Referance: 'procedure4',
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
      Procedure_Referance: 'procedure5',
      status: 'active',
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
      Procedure_Referance: 'procedure6',
      status: 'active',
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
  // const [form] = Form.useForm();
  const columns = [
    {
      title: 'Title',
      dataIndex: 'Procedure_Referance',
      key: 'Procedure_Referance',
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
        values[`Procedure_Referance${index}`] = value1[0].Procedure_Referance
        values[`permissions${index}`] = value1[0].permissions
        values[`status${index}`] = value1[0].status
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
              // forchange.permissions = values[`permissions${index}`]
              forchange.Procedure_Referance = values[`Procedure_Referance${index}`]
              forchange.status = values[`status${index}`]
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
                     <FormItem label={`Title`} rules={[{ required: true, message: 'Please input your Title!\'}' }]} name={`Procedure_Referance${index}`}>

<Input placeholder="Title"/>
</FormItem>
<FormItem label={`Status`} rules={[{ required: true, message: 'Please select any one of the field'}]} name={`status${index}`}>
<Select
        
        style={{width: 200}}
        onChange={handleChange}
      >
          <Option value="active">Active</Option>
          <Option value="inactive">Inactive</Option>
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
      title: 'Created',
      dataIndex: 'created',
      key: 'created',
      
    
    },
    {
        title: 'Modified',
        dataIndex: 'modified',
        key: 'modified',
        
      
      },
      {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        
      
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
          Procedure_Referance : '',
          created : '',
          modified : '',
          status : '',
          permissions : '',
          action : ''
        }
      }else{
        return {

          key : item.key,
          Procedure_Referance : item.Procedure_Referance,
          created : '06-09-2022',
          modified : '07-09-2022',
          status : item.status == 'active'? <button style={{background: '#4ad411b8',
            border: '1px solid #4ad411b8',width:'70px',
            color: 'white',fontWeight:'200'}}>active</button> : <button style={{background: '#ff000096',
            border: '1px solid #ff000096',width:'70px',
            color: 'white',fontWeight:'200'}}>Inactive</button>,
          permissions : item.permissions,
          action : <><div><i  className="icon icon-edit" style={{marginRight : '10px',color:'blue',fontWeight:'bold !importent'}} id={item.key} onClick={(e)=>{
            let edit_field = {
              key : e.target.id,
              index : e.target.getAttribute('data-index')
            }
            setforedit((foredit)=>[...foredit,edit_field])
          }} data-index={i} /><i  className="icon icon-trash" style={{marginRight : '10px',color:'blue',fontWeight:'bold !importent'}} id={item.key} data-index={i} onClick={(e)=>{
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
          }}/></div></> 
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
      <div style={{display : `flex`,justifyContent:`flex-end`,marginBottom:`15px`,marginRight:`20px`}}>
      <Button className="gx-mb-0"
                    type="primary"
                    htmlType="submit"
                    onClick={()=>setvisible(true)}
            >
              Add
            </Button>
            </div>
      <Card className="gx-card">
<Table className="gx-table-responsive"     pagination={{ pageSize: 4}} columns={columns} dataSource={data}/>
</Card>
<Add_Procedure_Referance setvisible={setvisible} isvisible={isvisible} />
{/* <Setproductadd setvisible={setvisible} isvisible={isvisible} /> */}
    </div>
  );
};
    
export default Procedure_Referance;
