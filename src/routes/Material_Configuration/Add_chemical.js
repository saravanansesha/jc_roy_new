import React,{ useEffect, useState} from "react";
import {Button, Drawer,Form,Modal,Select, Input,Radio} from "antd";
import {Link,useLocation} from "react-router-dom";
const {Option, OptGroup} = Select;
let Add_chemical = (props) =>{
    let location = useLocation()
    const FormItem = Form.Item;
    const { setchemicalvisible,chemicalvisible} = props
    const [ids,setids] = useState([])
    const [clear,setclear] = useState(0)
    const [form] = Form.useForm();
    useEffect(()=>{
    if(clear == 0){
        form.resetFields()
        setclear(1)
    }
    },[clear])
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
        props.pushchemicalinformation(props.chemicalcontentindex,values)
        setchemicalvisible(false)
        form.resetFields()
    }
    function onFinishFailed(){

    }
    function handleChange(value){
        console.log(value,'i am here')
    }
    // alert(chemicalvisible)
    return(
        <>
        <Modal
            title="Add Design Standard"
            footer={false}
            visible={chemicalvisible}
            // onOk={()=>setchemicalvisible(false)}
            // onCancel={()=>setchemicalvisible(false)}
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

export default Add_chemical;