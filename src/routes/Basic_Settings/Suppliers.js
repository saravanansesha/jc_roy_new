import React,{ useState} from "react";  
// import {Card, Divider, Table ,  Tabs} from "antd";
import {Card, Divider, Table,Form,Input, Select,Button,Tabs} from "antd";
import {Link,useLocation} from "react-router-dom";
import IntlMessages from "util/IntlMessages";
import BreadCrumb from "../../components/BreadCrumbs"
import Setproductadd from "./Setproductadd"
import Edit_suppliername from "./Edit_suppliername"
import Add_suppliername from "./Add_suppliername"
const TabPane = Tabs.TabPane;
const {Option, OptGroup} = Select;
const FormItem = Form.Item;
const Suppliers = ({match}) => {
  const [form] = Form.useForm();
  const [isvisible,setvisible] = useState(false)
  const [keys,setkeys] = useState('1')
  const [pop_upedit,setpop_upedit] = useState()
  const callback = (key) => {
    setkeys(key);
  };
  const [addisvisible,setaddvisible] = useState(false)
  const [foredit,setforedit] = useState([])
  // useEffect(()=>{
  //   console.log('i working here')

  // })
  const[isedit,setisedit] = useState([])
  const [data_back,setdata] = useState([
    {
      key: '1',
      firstname: 'radha keishnan',
      lastname:'arul subramaniyam',
      suppliername: 'Test1',
      address:'xxx',
      country_of_origin:'xxx',
      email : {
        primary_email: 'xxx',
        secondary_email:'xxx',
      },
      parent_company:'yyy',
      contact :{
        primary_contact_person:'zzz',
      secondary_contact_person:'aaa',
      },
      classification_type:'bbb',
      product_category:'test',
      scope_of_supply:'test test',
      type_of_approval:'zzz',
      expiry_date_of_approval:'06-05-2000',
      intitial_evaluation_date:'06-05-2000',
      title:'sss',
      status_of_approval : 'yyyyy',  
      remarks_observations : 'wwwww',
      contacts:'xxx',
      product:'zzz',
        
      id: '1111',
      plant: 'plant1',
      depart:'depart',
      role:'role',
      plant_head:'no',
      dep_head: 'no',
      manage_rep: 'no',
      ccr: 'no',
      
      profile : '',
      status: 'inactive',
      password: '12345',
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
      firstname: 'radha keishnan',
      lastname:'arul subramaniyam',
      suppliername: 'Test1',
      
      address:'xxx',
      country_of_origin:'xxx',
      email : {
        primary_email: 'xxx',
        secondary_email:'xxx',
      },
      parent_company:'yyy',
      contact :{
        primary_contact_person:'zzz',
      secondary_contact_person:'aaa',
      },
      classification_type:'bbb',
      product_category:'test',
      scope_of_supply:'test test',
      type_of_approval:'zzz',
      expiry_date_of_approval:'06-05-2000',
      intitial_evaluation_date:'06-05-2000',
      title:'sss',
      status_of_approval : 'yyyyy',  
      remarks_observations : 'wwwww',
      contacts:'xxx',
      product:'zzz',
      id: '1111',
      plant: 'plant1',
      depart:'depart',
      role:'role',
      plant_head:'no',
      dep_head: 'no',
      manage_rep: 'no',
      ccr: 'no',
      
      profile : '',
    //   name: 'Test2',
      status: 'active',
password: '12345',
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
      firstname: 'radha keishnan',
      lastname:'arul subramaniyam',
      suppliername: 'Test1',
      
      address:'xxx',
      country_of_origin:'xxx',
      email : {
        primary_email: 'xxx',
        secondary_email:'xxx',
      },
      parent_company:'yyy',
      contact :{
        primary_contact_person:'zzz',
      secondary_contact_person:'aaa',
      },
      classification_type:'bbb',
      product_category:'test',
      scope_of_supply:'test test',
      type_of_approval:'zzz',
      expiry_date_of_approval:'06-05-2000',
      intitial_evaluation_date:'06-05-2000',
      title:'sss',
      status_of_approval : 'yyyyy',  
      remarks_observations : 'wwwww',
      contacts:'xxx',
      product:'zzz',
      id: '1111',
      plant: 'plant1',
      depart:'depart',
      role:'role',
      plant_head:'no',
      dep_head: 'no',
      manage_rep: 'no',
      ccr: 'no',
      
      profile : '',
      status: 'active',
password: '12345',
    //   name: 'Test3',
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
      firstname: 'radha keishnan',
      lastname:'arul subramaniyam',
      suppliername: 'Test1',
      
      address:'xxx',
      country_of_origin:'xxx',
      email : {
        primary_email: 'xxx',
        secondary_email:'xxx',
      },
      parent_company:'yyy',
      contact :{
        primary_contact_person:'zzz',
      secondary_contact_person:'aaa',
      },
      classification_type:'bbb',
      product_category:'test',
      scope_of_supply:'test test',
      type_of_approval:'zzz',
      expiry_date_of_approval:'06-05-2000',
      intitial_evaluation_date:'06-05-2000',
      title:'sss',
      status_of_approval : 'yyyyy',  
      remarks_observations : 'wwwww',
      contacts:'xxx',
      product:'zzz',
      id: '1111',
      plant: 'plant1',
      depart:'depart',
      role:'role',
      plant_head:'no',
      dep_head: 'no',
      manage_rep: 'no',
      ccr: 'no',
      
      profile : '',
      status: 'active',
password: '12345',
    //   name: 'Test4',
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
      suppliername: 'Test1',
      firstname: 'radha keishnan',
      lastname:'arul subramaniyam',
     
      address:'xxx',
      country_of_origin:'xxx',
      email : {
        primary_email: 'xxx',
        secondary_email:'xxx',
      },
      parent_company:'yyy',
      contact :{
        primary_contact_person:'zzz',
      secondary_contact_person:'aaa',
      },
      classification_type:'bbb',
      product_category:'test',
      scope_of_supply:'test test',
      type_of_approval:'zzz',
      expiry_date_of_approval:'06-05-2000',
      intitial_evaluation_date:'06-05-2000',
      title:'sss',
      status_of_approval : 'yyyyy',  
      remarks_observations : 'wwwww',
      contacts:'xxx',
      product:'zzz',
      id: '1111',
      plant: 'plant1',
      depart:'depart',
      role:'role',
      plant_head:'no',
      dep_head: 'no',
      manage_rep: 'no',
      ccr: 'no',
      
      profile : '',
    //   name: 'Test5',
      status: 'active',
password: '12345',
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
      suppliername: 'Test1',
      firstname: 'radha keishnan',
      lastname:'arul subramaniyam',
     
      address:'xxx',
      country_of_origin:'xxx',
      email : {
        primary_email: 'xxx',
        secondary_email:'xxx',
      },
      parent_company:'yyy',
      contact :{
        primary_contact_person:'zzz',
      secondary_contact_person:'aaa',
      },
      classification_type:'bbb',
      product_category:'test',
      scope_of_supply:'test test',
      type_of_approval:'zzz',
      expiry_date_of_approval:'06-05-2000',
      intitial_evaluation_date:'06-05-2000',
      title:'sss',
      status_of_approval : 'yyyyy',  
      remarks_observations : 'wwwww',
      contacts:'xxx',
      product:'zzz',
      id: '1111',
      plant: 'plant1',
      depart:'depart',
      role:'role',
      plant_head:'no',
      dep_head: 'no',
      manage_rep: 'no',
      ccr: 'no',
      
      profile : '',
    //   name: 'Test6',
      status: 'active',
password: '12345',
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
      title: 'suppliername',
      dataIndex: 'suppliername',
      key: 'suppliername',
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
        values[`name${index}`] = value1[0].name
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
              forchange.name = values[`name${index}`]
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
                     <FormItem label={`Name`} rules={[{ required: true, message: 'Please input your username!\'}' }]} name={`name${index}`}>

<Input placeholder="Name"/>
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
    } ,
    },
    
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',    
    },
 
    {
    title: 'CONTACTS',
    dataIndex: 'contact',
    key: 'contact',    
    },
    {
    title: 'EMAILS',
    dataIndex: 'email',
    key: 'email',    
    },
    {
    title: 'PRODUCT',
    dataIndex: 'product',
    key: 'product',    
    },
    {
    title: 'EXPIRY',
    dataIndex: 'expiry_date_of_approval',
    key: 'expiry_date_of_approval',    
    },
    {
        title: 'INITIAL EVAL',
        dataIndex: 'intitial_evaluation_date',
        key: 'intitial_evaluation_date',    
    },
    {
        title: 'APPROVAL',
        dataIndex: 'status_of_approval',
        key: 'status_of_approval',    
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
          name : '',
          created : '',
          modified : '',
          status : '',
          permissions : '',
          action : ''
        }
      }else{
        return {

            key : item.key,
            suppliername : item.suppliername,
            address: item.address,
            country_of_origin: item.country_of_origin,
            email: <><span>{item.email.primary_email}</span><span>{item.email.secondary_email}</span></> ,
            parent_company: item.parent_company,
            contact: <><span>{item.contact.primary_contact_person}</span><span>{item.contact.secondary_contact_person}</span></>,
            classification_type: item.classification_type,
            product_category: item.product_category,
            scope_of_supply: item.scope_of_supply,
            type_of_approval: item.type_of_approval,
            expiry_date_of_approval: item.expiry_date_of_approval,
            intitial_evaluation_date: item.intitial_evaluation_date,
            title: item.title,
            status_of_approval: item.status_of_approval, 
            remarks_observations: item.remarks_observations,
            contacts: item.contacts,
            product: item.product,
            manage_rep : item.manage_rep,
            ccr : item.ccr,   
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
            // setforedit((foredit)=>[...foredit,edit_field])
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
          let date = new Date(values.expiry_date_of_approval)
        let mnth = ("0" + (date.getMonth() + 1)).slice(-2)
        let day = ("0" + date.getDate()).slice(-2)
        let full_date = [date.getFullYear(), mnth, day].join("-")

        let evdate = new Date(values.intitial_evaluation_date)
        let evmnth = ("0" + (evdate.getMonth() + 1)).slice(-2)
        let evday = ("0" + evdate.getDate()).slice(-2)
        let evfull_date = [date.getFullYear(), evmnth, evday].join("-")
          return     {
            key: item.key,
            firstname: values.firstname,
            lastname: values.lastname,
            suppliername: 'Test1',
            id: '1111',
            plant: values.plant,
            depart:values.depart,
            role:values.role,
            plant_head: values.plant_head,
            dep_head: values.dep_head,
            manage_rep: values.manage_rep,
            ccr: values.ccr,
            email: values.email,
            profile : '',
            status: values.status,
            password: values.password,
            permissions : item.permissions,
            suppliername:values.suppliername,
      address:values.address,
      country_of_origin:values.country_of_origin,
      email :{
        primary_email:values.primary_email,
        secondary_email:values.secondary_email,
      },
      parent_company:values.parent_company,
      contact :{
        primary_contact_person:values.primary_contact_person,
      secondary_contact_person:values.secondary_contact_person,
      },
      classification_type:values.classification_type,
      product_category:values.product_category,
      scope_of_supply:values.scope_of_supply,
      type_of_approval:values.type_of_approval,
      expiry_date_of_approval:full_date,
      intitial_evaluation_date:evfull_date,
      title:values.title,
      status_of_approval :values.status_of_approval ,
      remarks_observations :values.remarks_observations ,
      contacts:values.contacts,
      product:values.product,
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
<Edit_suppliername editinformation={editinformation} pop_upedit={pop_upedit} setvisible={setvisible} isvisible={isvisible} />
<Add_suppliername setaddvisible={setaddvisible} addisvisible={addisvisible} />
{/* <Setproductadd setvisible={setvisible} isvisible={isvisible} /> */}
    </div>
  );
};
    
export default Suppliers;
