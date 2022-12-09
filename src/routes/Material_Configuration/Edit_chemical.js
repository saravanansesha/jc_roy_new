import React,{ useEffect, useState} from "react";
import {Button, Drawer,Form,Modal,Select, Input,Radio} from "antd";
import {Link,useLocation} from "react-router-dom";
const {Option, OptGroup} = Select;
let Edit_chemical = (props) =>{
    let location = useLocation()
    const FormItem = Form.Item;
    const { seteditchemicalvisible,editchemicalvisible} = props
    const [ids,setids] = useState([])
    const [prefill,setprefill] = useState(0)
    const [clear,setclear] = useState(0)
    const [form] = Form.useForm();
    useEffect(()=>{
    if(clear == 0){
        form.resetFields()
        setclear(1)
    }
    },[clear])
    useEffect(()=>{
        if(prefill == 0 && props.editchemicalinformationvalue.max ){
            form.setFieldsValue({
            max : props.editchemicalinformationvalue.max,
            min : props.editchemicalinformationvalue.min
        
        
        })
        setprefill(1)
    }
    })
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
        props.alterchemicalinformation(props.chemicalcontentindex,values)
        seteditchemicalvisible(false)
        setprefill(0)
        form.resetFields()
    }
    function onFinishFailed(){

    }
    function handleChange(value){
        console.log(value,'i am here')
    }
    // alert(editchemicalvisible)
    return(
        <>
        <Modal
            title="Add Design Standard"
            footer={false}
            visible={editchemicalvisible}
            // onOk={()=>seteditchemicalvisible(false)}
            // onCancel={()=>seteditchemicalvisible(false)}
        >
            <div className="pop-up-forms product_form">
            {/* <center><h1>Product Group Form</h1></center> */}
            
<Form
initialValues={{ remember: true }}
name="basic"
form={form}
onFinish={onFinish}
layout="inline">
    <FormItem  rules={[{ required: true, pattern: new RegExp(/^[0-9]+$/), message: 'Please give your input!\'}' }]} name={`min`}>

            <Input placeholder="Min"/>
    </FormItem>
    <FormItem  rules={[{ required: true,pattern: new RegExp(/^[0-9]+$/), message: 'Please give your input!\'}' }]} name={`max`}>

            <Input placeholder="Max"/>
    </FormItem>

    <div className="submit_popup">
        <Button className="gx-mb-0 "
                    type="primary"
                    htmlType="submit"
            >
                  Add
        </Button>
    </div>
</Form>
    </div>
</Modal>
        </>
    )
}

export default Edit_chemical;