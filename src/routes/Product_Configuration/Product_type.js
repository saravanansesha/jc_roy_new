import React,{ useState} from "react";  
// import {Card, Divider, Table ,  Tabs} from "antd";
import {Card, Divider, Table,Form,Input, Select,Button,Tabs} from "antd";
// import {Link,useLocation} from "react-router-dom";
// import IntlMessages from "util/IntlMessages";
// import BreadCrumb from "../../components/BreadCrumbs"
// import Setproductadd from "./Setproductadd"
import Add_product from "./Add_product"
import Edit_product from "./editproduct"
// const DesignStandard = Tabs.TabPane;
const {Option, OptGroup} = Select;
const FormItem = Form.Item;
const Product_type = ({match}) => {
  const [form] = Form.useForm();
  const [isvisible,setvisible] = useState(false)
  const [keys,setkeys] = useState('1')
  const [addisvisible,setaddvisible] = useState(false)
  const callback = (key) => {
    setkeys(key);
  };
  const [foredit,setforedit] = useState([])
  const [pop_upedit,setpop_upedit] = useState()
  // useEffect(()=>{
  //   console.log('i working here')

  // })
  const[isedit,setisedit] = useState([])
  const [data_back,setdata] = useState([
    {
      key: '1',
      Product_type: 'Test1',
      status: 'inactive',
      permissions : 'permissions',
      models:['model1','model2','model3','model4'],
      components:['component1','component2','component3'],
      designstandards:['design1','design2','design3'],
      testingstandards:['standards1','standards2','standards3'],
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
      Product_type: 'Test2',
      status: 'active',
      permissions : 'permissions',
      models:['model1','model2','model3','model4'],
      components:['component1','component2','component3'],
      designstandards:['design1','design2','design3'],
      testingstandards:['standards1','standards2','standards3'],
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
      Product_type: 'Test3',
      permissions : 'permissions',
      models:['model1','model2','model3','model4'],
      components:['component1','component2','component3'],
      designstandards:['design1','design2','design3'],
      testingstandards:['standards1','standards2','standards3'],
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
      Product_type: 'Test4',
      permissions : 'permissions',
      models:['model1','model2','model3','model4'],
      components:['component1','component2','component3'],
      designstandards:['design1','design2','design3'],
      testingstandards:['standards1','standards2','standards3'],
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
      Product_type: 'Test5',
      status: 'active',
      permissions : 'permissions',
      models:['model1','model2','model3','model4'],
      components:['component1','component2','component3'],
      designstandards:['design1','design2','design3'],
      testingstandards:['standards1','standards2','standards3'],
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
      Product_type: 'Test6',
      status: 'active',
      permissions : 'permissions',
      models:['model1','model2','model3','model4'],
      components:['component1','component2','component3'],
      designstandards:['design1','design2','design3'],
      testingstandards:['standards1','standards2','standards3'],
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
      title: 'Product Type',
      dataIndex: 'Product_type',
      key: 'Product_type',
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
        values[`Product_type${index}`] = value1[0].Product_type
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
              forchange.Product_type = values[`Product_type${index}`]
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
                     <FormItem label={`Product Type`} rules={[{ required: true, message: 'Please input your Product Type!\'}' }]} name={`Product_type${index}`}>

                        <Input placeholder="Product Type"/>
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
          Product_type : '',
          created : '',
          modified : '',
          status : '',
          permissions : '',
          action : ''
        }
      }else{
        return {

          key : item.key,
          Product_type : item.Product_type,
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
            setpop_upedit(item)
            setvisible(true)
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
  function editinformation(values,key){
    let updatepack = data_back.map((item)=>{
      if(item.key == key){
        return     {
          key: item.key,
          Product_type: values.Product_type,
          status: values.status,
          permissions : values.permissions,
          models: values.models,
          components: values.components ,
          designstandards: values.designstandards,
          testingstandards: values.testingstandards,
          action : <div>
            <button>
                Edit
            </button>
            <button>
                Delete
            </button>
          </div>,
        }
      }else{
        return item
      }
    })
    setdata(updatepack);
}
  return (
    <div>
      <div style={{display : `flex`,justifyContent:`flex-end`,marginBottom:`15px`,marginRight:`20px`}}>
      <Button className="gx-mb-0"
                    type="primary"
                    htmlType="submit"
                    onClick={()=>setaddvisible(true)}
            >
              Add
            </Button>
            </div>
      <Card className="gx-card">
<Table className="gx-table-responsive"     pagination={{ pageSize: 4}} columns={columns} dataSource={data}/>
</Card>
<Edit_product editinformation={editinformation} pop_upedit={pop_upedit} setvisible={setvisible} isvisible={isvisible} />
<Add_product setaddvisible={setaddvisible} addisvisible={addisvisible} />
{/* <Add_product setvisible={setvisible} isvisible={isvisible} /> */}
{/* <Setproductadd setvisible={setvisible} isvisible={isvisible} /> */}
    </div>
  );
};
    
export default Product_type;
