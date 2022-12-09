import React,{ useEffect, useState} from "react";
import {Button, Drawer,Form,Modal,Select,Upload, Input,Radio,Col, Row} from "antd";
import {Link,useLocation} from "react-router-dom";
const {Option, OptGroup} = Select;
let Edit_employee = (props) =>{
    let location = useLocation()
    const FormItem = Form.Item;
    const { setvisible,isvisible} = props
    const [ids,setids] = useState([])
    const [clear,setclear] = useState(0)
    const [form] = Form.useForm();
    const [prefill,setprefill] = useState(0)
    const [imgsrc,setimgsrc] = useState('')
    console.log('for edit employee',props.pop_upedit)
    // useEffect(()=>{
    // if(clear == 0){
    //     form.resetFields()
    //     setclear(1)
    // }
    // },[clear])
    useEffect(()=>{
        // alert(props.pop_upedit)
        if(prefill == 0 && props.pop_upedit ){
            
            form.setFieldsValue({
                firstname : props.pop_upedit.firstname,
                lastname : props.pop_upedit.lastname,
                email : props.pop_upedit.email,
                plant : props.pop_upedit.plant,
                depart : props.pop_upedit.depart,
                role : props.pop_upedit.role,
                manage_rep : props.pop_upedit.manage_rep,
                dep_head : props.pop_upedit.dep_head,
                plant_head : props.pop_upedit.plant_head,
                ccr : props.pop_upedit.ccr,
                status : props.pop_upedit.status,
                password : props.pop_upedit.password
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
        props.editinformation(values,props.pop_upedit.key)
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
    return(
        <>
        <div >
        <Modal
            title="Employee Edit"
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
            <div className="pop-up-forms product_form">
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
    <FormItem label='First Name'  rules={[{ required: true, message: 'Please input your title!\'}' }]} name={`firstname`}>

            <Input placeholder="First Name"/>
    </FormItem>
    </Col>
    <Col md={8}>
    <FormItem label='Last Name'  rules={[{ required: true, message: 'Please input your title!\'}' }]} name={`lastname`}>

<Input placeholder="Last Name"/>
</FormItem>

    </Col>
    <Col md={8}>

    {/* <div className="submit_popup"> */}
    <FormItem label='Email'  rules={[{
            type: 'email',
            message: 'The input is not valid E-mail!',
          },{ required: true, message: 'Please input your title!\'}' }]} name={`email`}>

<Input placeholder="E-Mail"/>
</FormItem>
    
        
        
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
        <Col md={8}>
            <FormItem label={'Plant'}  rules={[{ required: true, message: 'Please select any one of the field'}]} name={`plant`}>
            <Select
                placeholder="Plant"
                // style={{width: 200}}
                onChange={handleChange}
            >
                <Option value="plant1">Plant1</Option>
                <Option value="plant2">Plant2</Option>
            </Select>
    </FormItem>
        </Col>
        <Col md={8}>
        <FormItem label={'Department'}  rules={[{ required: true, message: 'Please select any one of the field'}]} name={`depart`}>
            <Select
                placeholder="Department"
                // style={{width: 200}}
                onChange={handleChange}
            >
                <Option value="depart">depart</Option>
                <Option value="depart1">depart1</Option>
            </Select>
    </FormItem>
        </Col>
        <Col md={8}>
        <FormItem label={'Role'}  rules={[{ required: true, message: 'Please select any one of the field'}]} name={`role`}>
            <Select
                placeholder="Role"
                // style={{width: 200}}
                onChange={handleChange}
            >
                <Option value="role">Role</Option>
                <Option value="role1">Role1</Option>
            </Select>
    </FormItem>
        </Col>
    </Row>
    <Row>
        <Col md={8}>
            <FormItem label={'Plant Head'}  rules={[{ required: true, message: 'Please select any one of the field'}]} name={`plant_head`}>
            <Select
                placeholder="Plant Head"
                // style={{width: 200}}
                onChange={handleChange}
            >
                <Option value="yes">Yes</Option>
                <Option value="no">No</Option>
            </Select>
    </FormItem>
        </Col>
        <Col md={8}>
        <FormItem label={'Department Head'}  rules={[{ required: true, message: 'Please select any one of the field'}]} name={`dep_head`}>
            <Select
                placeholder="Department Head"
                // style={{width: 200}}
                onChange={handleChange}
            >
                <Option value="yes">Yes</Option>
                <Option value="no">No</Option>
            </Select>
    </FormItem>
        </Col>
        <Col md={8}>
        <FormItem label={'Management Representatives'}  rules={[{ required: true, message: 'Please select any one of the field'}]} name={`manage_rep`}>
            <Select
                placeholder="Management Representatives"
                // style={{width: 200}}
                onChange={handleChange}
            >
                <Option value="yes">Yes</Option>
                <Option value="no">No</Option>
            </Select>
    </FormItem>
        </Col>
    </Row>
    <Row>
        <Col md={8}>
            <FormItem label={'Customer Complaints Representatives'}  rules={[{ required: true, message: 'Please select any one of the field'}]} name={`ccr`}>
            <Select
                placeholder="Customer Complaints Representatives"
                // style={{width: 200}}
                onChange={handleChange}
            >
                <Option value="yes">Yes</Option>
                <Option value="no">No</Option>
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
                <Option value="active">Active</Option>
                <Option value="inactive">Inactive</Option>
            </Select>
    </FormItem>
        </Col>
        <Col md={8}>
        <FormItem label={'Actual Password : 132345'}  rules={[{ required: true, message: 'Please select any one of the field'}]} name={`password`}>
        <Input 
                 type="password"
                 placeholder="Only enter if you want to change the password"/>
    </FormItem>
        </Col>
    </Row>
    <Row>
        <Col md={8}>
            <div className="upload_dp">
                 <div className="upload_dp_1">
                 {imgsrc == ''  ? 
                  (<>    <span>+</span>
                    <span>Upload</span>
                    <input type={'file'} onChange={(e)=>{
                        let reader = new FileReader();
                        reader.readAsDataURL(e.target.files[0]);
                        reader.onload = function () {
                            setimgsrc(reader.result)
                        };
                       }} accept="image/png, image/gif, image/jpeg"> 
                       </input> </>)  :
                        <img className="uploaded_image" src={imgsrc}></img> }
                    
                </div>


            </div>
        </Col >
        <Col className="update" md={8}>
            <div>
        <Button className="gx-mb-0 "
                    type="primary"
                    htmlType="submit"
            >
                  Update
        </Button>
        </div>
        </Col>
        <Col md={8}>
        </Col>
    </Row>
    <Row>
        
    <div className="submit_popup">
    
    </div>
    </Row>
</Form>
    </div>
</Modal>
</div>
        </>
    )
}

export default Edit_employee;