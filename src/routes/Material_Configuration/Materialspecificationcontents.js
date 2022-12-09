import React,{ useState} from "react";  
// import {Card, Divider, Table ,  Tabs} from "antd";
import {Card, Divider, Table,Form,Input, Select,Button,Tabs} from "antd";
import {Link,useLocation} from "react-router-dom";
import IntlMessages from "util/IntlMessages";
import BreadCrumb from "../../components/BreadCrumbs"
import Materialadd from "./materialadd"
// import Setproductadd from "./Setproductadd"
import Materialedit from "./materialedit"
// import Add_material_specification from "./Add_material_specification"
const TabPane = Tabs.TabPane;
const {Option, OptGroup} = Select;
const FormItem = Form.Item;
const Materialspecificationcontents = ({match}) => {
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
      material_specification: 'radha keishnan',
      comp_name:'arul subramaniyam',
      product_form: 'Product1',
      uns:'xxx',
      asmepno:'12',
      asmegroupno:'12',
      temperaturemin:'12',
      temperaturemax:'12',
      chemicalinformation:[
    {value : 'CARBON (c)',min:'30',max:30},
    {value : 'MANGANESE (Mn)',min:'30',max:30},
    {value : 'SILICON (Si)',min:'30',max:30},
    {value : 'SULFUR (S)',min:'30',max:30},
    {value : 'PHOSPHORUS (P)',min:'30',max:30},],
      Tensile_Strength_minimum:'10',
      Tensile_Strength_maximum:'10',
      Yield_Strength_minimum:'10',
      Yield_Strength_maximum:'10',
      status: 'inactive',
      Elongation_minimum:'10',
      Elongation_maximum:'10',

      Reduction_Area_minimum:'10',
      Reduction_Area_maximum:'10',
      Hardness:'hb',
      Limits_maximum:'10',
      Limits_minimum:'10',
      Temperature:'10',
      Limits_maximum_hardness:'10',
      Limits_minimum_hardness:'11',
      Heat_Treatment_hardness:'12',


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
      material_specification: 'radha keishnan',
      comp_name:'arul subramaniyam',
      product_form: 'Product1',
      uns:'xxx',
      asmepno:'12',
      asmegroupno:'12',
      temperaturemin:'12',
      temperaturemax:'12',
      chemicalinformation:[
    {value : 'CARBON (c)',min:'30',max:30},
    {value : 'MANGANESE (Mn)',min:'30',max:30},
    {value : 'SILICON (Si)',min:'30',max:30},
    {value : 'SULFUR (S)',min:'30',max:30},
    {value : 'PHOSPHORUS (P)',min:'30',max:30},],
      Tensile_Strength_minimum:'10',
      Tensile_Strength_maximum:'10',
      Yield_Strength_minimum:'10',
      Yield_Strength_maximum:'10',
    //   name: 'Test2',
      status: 'active',
Elongation_minimum:'10',
      Elongation_maximum:'10',
      Reduction_Area_minimum:'10',
      Reduction_Area_maximum:'10',
      Hardness:'hb',
      Limits_maximum:'10',
      Limits_minimum:'10',
      Temperature:'10',
      Limits_maximum_hardness:'10',
      Limits_minimum_hardness:'11',
      Heat_Treatment_hardness:'12',
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
      material_specification: 'radha keishnan',
      comp_name:'arul subramaniyam',
      product_form: 'Product1',
      uns:'xxx',
      asmepno:'12',
      asmegroupno:'12',
      temperaturemin:'12',
      temperaturemax:'12',
      chemicalinformation:[
    {value : 'CARBON (c)',min:'30',max:30},
    {value : 'MANGANESE (Mn)',min:'30',max:30},
    {value : 'SILICON (Si)',min:'30',max:30},
    {value : 'SULFUR (S)',min:'30',max:30},
    {value : 'PHOSPHORUS (P)',min:'30',max:30},],
      Tensile_Strength_minimum:'10',
      Tensile_Strength_maximum:'10',
      Yield_Strength_minimum:'10',
      Yield_Strength_maximum:'10',
      status: 'active',
Elongation_minimum:'10',
    //   name: 'Test3',
      Elongation_maximum:'10',
      Reduction_Area_minimum:'10',
      Reduction_Area_maximum:'10',
      Hardness:'hb',
      Limits_maximum:'10',
      Limits_minimum:'10',
      Temperature:'10',
      Limits_maximum_hardness:'10',
      Limits_minimum_hardness:'11',
      Heat_Treatment_hardness:'12',
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
      material_specification: 'radha keishnan',
      comp_name:'arul subramaniyam',
      product_form: 'Product1',
      uns:'xxx',
      asmepno:'12',
      asmegroupno:'12',
      temperaturemin:'12',
      temperaturemax:'12',
      chemicalinformation:[
    {value : 'CARBON (c)',min:'30',max:30},
    {value : 'MANGANESE (Mn)',min:'30',max:30},
    {value : 'SILICON (Si)',min:'30',max:30},
    {value : 'SULFUR (S)',min:'30',max:30},
    {value : 'PHOSPHORUS (P)',min:'30',max:30},],
      Tensile_Strength_minimum:'10',
      Tensile_Strength_maximum:'10',
      Yield_Strength_minimum:'10',
      Yield_Strength_maximum:'10',
      status: 'active',
Elongation_minimum:'10',
    //   name: 'Test4',
      Elongation_maximum:'10',
      Reduction_Area_minimum:'10',
      Reduction_Area_maximum:'10',
      Hardness:'hb',
      Limits_maximum:'10',
      Limits_minimum:'10',
      Temperature:'10',
      Limits_maximum_hardness:'10',
      Limits_minimum_hardness:'11',
      Heat_Treatment_hardness:'12',
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
      product_form: 'Product1',
      material_specification: 'radha keishnan',
      comp_name:'arul subramaniyam',
      uns:'xxx',
      asmepno:'12',
      asmegroupno:'12',
      temperaturemin:'12',
      temperaturemax:'12',
      chemicalinformation:[
    {value : 'CARBON (c)',min:'30',max:30},
    {value : 'MANGANESE (Mn)',min:'30',max:30},
    {value : 'SILICON (Si)',min:'30',max:30},
    {value : 'SULFUR (S)',min:'30',max:30},
    {value : 'PHOSPHORUS (P)',min:'30',max:30},],
      Tensile_Strength_minimum:'10',
      Tensile_Strength_maximum:'10',
      Yield_Strength_minimum:'10',
      Yield_Strength_maximum:'10',
    //   name: 'Test5',
      status: 'active',
Elongation_minimum:'10',
      Elongation_maximum:'10',
      Reduction_Area_minimum:'10',
      Reduction_Area_maximum:'10',
      Hardness:'hb',
      Limits_maximum:'10',
      Limits_minimum:'10',
      Temperature:'10',
      Limits_maximum_hardness:'10',
      Limits_minimum_hardness:'11',
      Heat_Treatment_hardness:'12',
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
      product_form: 'Product1',
      material_specification: 'radha keishnan',
      comp_name:'arul subramaniyam',
      uns:'xxx',
      asmepno:'12',
      asmegroupno:'12',
      temperaturemin:'12',
      temperaturemax:'12',
      chemicalinformation:[
    {value : 'CARBON (c)',min:'30',max:30},
    {value : 'MANGANESE (Mn)',min:'30',max:30},
    {value : 'SILICON (Si)',min:'30',max:30},
    {value : 'SULFUR (S)',min:'30',max:30},
    {value : 'PHOSPHORUS (P)',min:'30',max:30},],
      Tensile_Strength_minimum:'10',
      Tensile_Strength_maximum:'10',
      Yield_Strength_minimum:'10',
      Yield_Strength_maximum:'10',
    //   name: 'Test6',
      status: 'active',
Elongation_minimum:'10',
      Elongation_maximum:'10',
      Reduction_Area_minimum:'10',
      Reduction_Area_maximum:'10',
      Hardness:'hb',
      Limits_maximum:'10',
      Limits_minimum:'10',
      Temperature:'10',
      Limits_maximum_hardness:'10',
      Limits_minimum_hardness:'11',
      Heat_Treatment_hardness:'12',
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
      title: 'Material Specification',
      dataIndex: 'material_specification',
      key: 'material_specification',
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
          material_specification : item.material_specification,
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
          return     {
            key: item.key,
            material_specification: values.material_specification,
            comp_name: values.comp_name,
            uns: values.uns,
            asmepno: values.asmepno,
            asmegroupno: values.asmegroupno,
            temperaturemin: values.temperaturemin,
            temperaturemax: values.temperaturemax,
            chemicalinformation: values.chemicalinformation,
            Tensile_Strength_minimum: values.Tensile_Strength_minimum,
            Tensile_Strength_maximum: values.Tensile_Strength_maximum,
            Yield_Strength_minimum: values.Yield_Strength_minimum,
            Yield_Strength_maximum: values.Yield_Strength_maximum,
            //   name: 'Test6',
            status: 'active',
            Elongation_minimum: values.Elongation_minimum,
            Elongation_maximum: values.Elongation_maximum,
            Reduction_Area_minimum: values.Reduction_Area_minimum,
            Reduction_Area_maximum: values.Reduction_Area_maximum,
            Hardness: values.Hardness,
            Limits_maximum: values.Limits_maximum,
            Limits_minimum: values.Limits_minimum,
            Temperature: values.Temperature,
            Limits_maximum_hardness: values.Limits_maximum_hardness,
            Limits_minimum_hardness: values.Limits_minimum_hardness,
            Heat_Treatment_hardness: values.Heat_Treatment_hardness,
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

<div style={{display : `flex`,justifyContent:`flex-end`,marginBottom:'15px',marginTop:'15px', marginRight:`20px`}}>
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
<Materialadd setaddvisible={setaddvisible} addisvisible={addisvisible} />
<Materialedit editinformation={editinformation} pop_upedit={pop_upedit} setvisible={setvisible} isvisible={isvisible} />
{/* <Add_material_specification setaddvisible={setaddvisible} addisvisible={addisvisible} /> */}
{/* <Setproductadd setvisible={setvisible} isvisible={isvisible} /> */}
    </div>
  );
};
    
export default Materialspecificationcontents;
