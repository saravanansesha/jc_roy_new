import React,{ useEffect, useState} from "react";
import {Button, Drawer,Form,Modal,Select, Input,Radio} from "antd";
import {Link,useLocation} from "react-router-dom";
const {Option, OptGroup} = Select;
let Add_MoC_Type = (props) =>{
    let location = useLocation()
    const FormItem = Form.Item;
    const { setvisible,isvisible} = props
    const [ids,setids] = useState([])
    const [clear,setclear] = useState(0)
    const [form] = Form.useForm();
    useEffect(()=>{
    if(clear == 0){
        form.resetFields()
        setclear(1)
    }
    },[clear]) 
    console.log('fd')
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
        setvisible(false)
        form.resetFields()
    }
    function onFinishFailed(){

    }
    function handleChange(value){
        console.log(value,'i am here')
    }
    // alert(isvisible)
    return(
        <>
        <Modal
            title="Add MOC Type"
            footer={false}
            visible={isvisible}
            // onOk={()=>setvisible(false)}
            onCancel={()=>setvisible(false)}
        >
            <div className="pop-up-forms product_form">
            {/* <center><h1>Product Group Form</h1></center> */}
            
<Form
initialValues={{ remember: true }}
name="basic"
form={form}
onFinish={onFinish}
layout="inline">
    <FormItem  rules={[{ required: true, message: 'Please input your Title!\'}' }]} name={`MoC_Type`}>

            <Input placeholder="Title"/>
    </FormItem>
    <FormItem  rules={[{ required: true, message: 'Please select any one of the field'}]} name={`status`}>
            <Select
                placeholder="Status"
                // style={{width: 200}}
                onChange={handleChange}
            >
                <Option value="active">Active</Option>
                <Option value="inactive">Inactive</Option>
            </Select>
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

export default Add_MoC_Type;