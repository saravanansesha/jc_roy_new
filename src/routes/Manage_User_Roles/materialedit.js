import React,{ useEffect, useState} from "react";
import {Button, Drawer,Checkbox,Table,Form,Modal,Select,Upload, Input,Radio,Col, Row} from "antd";
import {Link,useLocation} from "react-router-dom";
import Add_chemical from "./Add_chemical"
import {Cinformation} from "./chemicalinformation"
import Edit_chemical from "./Edit_chemical"
import {Modules} from "./Module"
const {Option, OptGroup} = Select;
let Materialedit = (props) =>{
    let location = useLocation()
    const FormItem = Form.Item;
    const [module_permission,setmodule_permission] = useState([])
    const { setvisible,isvisible} = props
    const [chemicalvisible,setchemicalvisible] = useState(false)
    const [impact,setimpact] = useState(false)
    const [ids,setids] = useState([])
    const [clear,setclear] = useState(0)
    const [form] = Form.useForm();
    const [prefill,setprefill] = useState(0)
    const [imgsrc,setimgsrc] = useState('')
    const [chemicalinformation,setchemicalinformation]=useState([])
    const [chemicalcontentindex,setchemicalcontentindex]=useState('no')
    const [editchemicalvisible,seteditchemicalvisible] = useState(false)
    const [editchemicalinformationvalue,seteditchemicalinformationvalue] = useState('no')
    console.log('for edit employee',Modules)
    // useEffect(()=>{
    // if(clear == 0){
    //     form.resetFields()
    //     setclear(1)
    // }
    // },[clear])
    useEffect(()=>{
        // alert(props.pop_upedit)
        if(prefill == 0 && props.pop_upedit ){
            setchemicalinformation(props.pop_upedit.chemicalinformation)
            setmodule_permission(props.pop_upedit.permissions)
            form.setFieldsValue({
                product_form: props.pop_upedit.product_form,
                role: props.pop_upedit.role,
                comp_name: props.pop_upedit.comp_name,
                uns: props.pop_upedit.uns,
                asmepno: props.pop_upedit.asmepno,
                asmegroupno: props.pop_upedit.asmegroupno,
                temperaturemin: props.pop_upedit.temperaturemin,
                temperaturemax: props.pop_upedit.temperaturemax,
                chemicalinformation: props.pop_upedit.chemicalinformation,
                Tensile_Strength_minimum: props.pop_upedit.Tensile_Strength_minimum,
                Tensile_Strength_maximum: props.pop_upedit.Tensile_Strength_maximum,
                Yield_Strength_minimum: props.pop_upedit.Yield_Strength_minimum,
                Yield_Strength_maximum: props.pop_upedit.Yield_Strength_maximum,
                status: props.pop_upedit.status,
                Elongation_minimum: props.pop_upedit.Elongation_minimum,
                Elongation_maximum: props.pop_upedit.Elongation_maximum,
                Reduction_Area_minimum: props.pop_upedit.Reduction_Area_minimum,
                Reduction_Area_maximum: props.pop_upedit.Reduction_Area_maximum,
                Hardness: props.pop_upedit.Hardness,
                Limits_maximum: props.pop_upedit.Limits_maximum,
                Limits_minimum: props.pop_upedit.Limits_minimum,
                Temperature: props.pop_upedit.Temperature,
                Limits_maximum_hardness: props.pop_upedit.Limits_maximum_hardness,
                Limits_minimum_hardness: props.pop_upedit.Limits_minimum_hardness,
                Heat_Treatment_hardness: props.pop_upedit.Heat_Treatment_hardness,
                status : props.pop_upedit.status
            })
            setprefill(1)
        }

    },[props.pop_upedit])
    function forarrow(e){
        // e.persist()
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
    function onFinish(values){
        let abc = values
        abc.permissions = module_permission
        abc.chemicalinformation = chemicalinformation
        props.editinformation(abc,props.pop_upedit.key)
        setvisible(false)
        setprefill(0)
        // prefill
        form.resetFields()
    }
    function onFinishFailed(){

    }
    function handleChange(value){
        console.log(value,'i am here')
    }
    const resetfields = async () =>{
        form.resetFields()
        // alert(1)
    }
    // alert(isvisible)
    function alterchemicalinformation(i,value){
        let alter = chemicalinformation.map((item,i)=>{
            if(item.value.toLowerCase() == Cinformation[i].value.toLowerCase()){

                return{
                    value : item.value,
                    min : `${value.min}`,
                    max : `${value.max}`

                }
            }else{
                return item
            }
        })

        setchemicalinformation(alter)
    }
    function pushchemicalinformation(i,values){
        let alter = chemicalinformation
        alter.push({
            value: Cinformation[i].value,
            min:values.min,
            max:values.max
        })
        setchemicalinformation(alter)
    }
    const columns= [
        {
            title: 'Module',
            dataIndex: 'module',
            key: 'module',
        },
        {
            title:'Permission',
            dataIndex:'permission',
            key:'permission',
        }
    ]
   function applychanges(e){
        let original_data = module_permission
        let aa = 0
        // console.log(e,'123456')
        
        original_data = original_data.map((item,i)=>{
            if(e.target.id == item.id){
                aa = 1
                if(e.target.checked == false){
                    if(item.permissions.indexOf(e.target.andress) != -1){
                        let pre = item.permissions;
                        pre = pre.filter((item,i)=>{ return item != e.target.andress})
                        return{
                            id : item.id,
                            permissions : pre
                        }
                    }else{
                        return item
                    }
                }else if(e.target.checked == true){
                    if(item.permissions.indexOf(e.target.andress) == -1){
                        let gre = item.permissions
                        gre.push(e.target.andress)
                        return {
                            id : item.id,
                            permissions : gre
                        }
                    }else{
                        return item
                    }
                }
            }else{
                return item
            }
        })
        // original_data = original_data.filter((item)=>{return item.permissions.length > 0})
        if(aa == 0){
            original_data.push({
                id : e.target.id,
                permissions : [e.target.andress]
            })
            setmodule_permission(original_data)
        }else if(aa == 1){
            setmodule_permission(original_data)
            console.log(original_data,'123456')
        }
        
    }
    let data = []
    Modules.map((item,ind)=>{
        
        if(module_permission.length>0){
            let aa = []
            for(let i=0;i<module_permission.length;i++){
                if(module_permission[i].id == item.id){
                    aa = module_permission[i].permissions ;
                    
                    break;
                }
            }
            
            if(aa.length == 0){
                data.push({
                    key : ind,
                    module : item.name,
                    permission : <><Checkbox checked={false} onChange={(e)=>{applychanges(e)}} andress="view" id={item.id}>View</Checkbox><Checkbox checked={false} onChange={(e)=>{applychanges(e)}} andress="edit" id={item.id}>Edit</Checkbox><Checkbox checked={false} onChange={(e)=>{applychanges(e)}} andress="delete" id={item.id}>Delete</Checkbox></>
                })
                
            }else{
                console.log(module_permission,'12345678')
                console.log(aa,'123456789')        
                data.push({
                    key : ind, 
                    module : item.name,
                    permission : <><Checkbox onChange={(e)=>{applychanges(e)}} andress="view" checked={aa.indexOf('view') != -1 ? true : false} id={item.id}>View</Checkbox><Checkbox andress="edit" onChange={(e)=>{applychanges(e)}}  checked={aa.indexOf('edit') != -1 ? true : false} id={item.id}>Edit</Checkbox><Checkbox andress="delete"  checked={aa.indexOf('delete') != -1 ? true : false} onChange={(e)=>{applychanges(e)}} id={item.id}>Delete</Checkbox></>
                })
                
            }
        }else{
            
            data.push({
                key : ind,
                module : item.name,
                permission : <><Checkbox onChange={applychanges} andress="view" id={item.id}>View</Checkbox><Checkbox onChange={(e)=>{applychanges(e)}} id={item.id}   andress="edit">Edit</Checkbox><Checkbox andress="delete" onChange={(e)=>{applychanges(e)}} id={item.id}>Delete</Checkbox></>
            })
        }
    })
    // console.log(module_permission,'all boxes are here')
    return(
        <>
        <div >
        <Modal
            title="Edit Roles and Permissions"
            className="for_long_edit"
            footer={false}
            visible={isvisible}
            // onOk={()=>setvisible(false)}
            onCancel={ async() =>{

                 await resetfields();
            //    aa = 88
                setvisible(false)
              }
            }
        >
            <div className="pop-up-forms product_form material_form">
            {/* <center><h1>Employee Form</h1></center> */}
            
<Form
initialValues={{ remember: true }}
name="basic"
form={form}
className={'big_forms'}
onFinish={onFinish}
layout="inline">
    <Row>
        <Col md={8} >
        <FormItem label={'Role'}  rules={[{ required: true, message: 'Please select any one of the field'}]} name={`role`}>
            <Select
                placeholder="Role"
                // style={{width: 200}}
                onChange={handleChange}
            >
                <Option value="xxx">xxx</Option>
                <Option value="role1">role1</Option>
            </Select>
    </FormItem>
    </Col>
    <Col md={8}>
    <FormItem label={'Status'}  rules={[{ required: true, message: 'Please select any one of the field'}]} name={`status`}>
            <Select
                placeholder="Status"
                // style={{width: 200}}
                onChange={handleChange}
            >
                <Option value="active">active</Option>
                <Option value="inactive">inactive</Option>
            </Select>
    </FormItem>

    </Col>
    <Col md={8}>

    {/* <div className="submit_popup"> */}        
        {/* <Button className="gx-mb-0 "
                    type="primary"
                    htmlType="submit"
            >
                  Add
        </Button> */}

    {/* </div> */}
    </Col>
    </Row>
    <Row>
    <Col className="for_gapfix" md={24}>
    <Table  className="gx-table-responsive"      columns={columns} dataSource={data}/> 
    </Col>
    </Row>    
    <Row>
        <Col md={8}>
            <div style={{display:`flex`,alignItems:`center`,position:`relative`,top:`50%`,transform:`translateY(-30%)`}}>
        <Button className="gx-mb-0 "
                    type="primary"
                    htmlType="submit"
            >
                  Update
        </Button>
        </div>
        </Col>
    </Row>
</Form>
    </div>
</Modal>
</div>
<Add_chemical pushchemicalinformation={pushchemicalinformation} chemicalcontentindex={chemicalcontentindex} setchemicalvisible={setchemicalvisible} chemicalvisible={chemicalvisible} />
<Edit_chemical editchemicalinformationvalue={editchemicalinformationvalue} alterchemicalinformation={alterchemicalinformation} chemicalcontentindex={chemicalcontentindex} seteditchemicalvisible={seteditchemicalvisible} editchemicalvisible={editchemicalvisible} />
        </>
    )
}

export default Materialedit;