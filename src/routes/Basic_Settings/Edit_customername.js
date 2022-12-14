import React,{ useEffect, useState} from "react";
import {Button,DatePicker, Drawer,Form,Modal,Select,Upload, Input,Radio,Col, Row} from "antd";
import {Link,useLocation} from "react-router-dom";
import moment from "moment";
const {Option, OptGroup} = Select;
const { TextArea } = Input;
let Edit_customername = (props) =>{
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
                id:props.pop_upedit.id,
                manage_rep : props.pop_upedit.manage_rep,
                dep_head : props.pop_upedit.dep_head,
                plant_head : props.pop_upedit.plant_head,
                ccr : props.pop_upedit.ccr,
                status : props.pop_upedit.status,
                password : props.pop_upedit.password,
                customername: props.pop_upedit.customername,
                address: props.pop_upedit.address,
                country_of_origin: props.pop_upedit.country_of_origin,
              primary_email: props.pop_upedit.email.primary_email,
                  secondary_email: props.pop_upedit.email.secondary_email,
                parent_company: props.pop_upedit.parent_company,
                  primary_contact_person: props.pop_upedit.contact.primary_contact_person,
                secondary_contact_person: props.pop_upedit.contact.secondary_contact_person,
                classification_type: props.pop_upedit.classification_type,
                product_category: props.pop_upedit.product_category,
                scope_of_supply: props.pop_upedit.scope_of_supply,
                type_of_approval: props.pop_upedit.type_of_approval,
                expiry_date_of_approval: moment(props.pop_upedit.expiry_date_of_approval),
                intitial_evaluation_date: moment(props.pop_upedit.intitial_evaluation_date),
                title: props.pop_upedit.title,
                status_of_approval:  props.pop_upedit.status_of_approval,
                remarks_observations:  props.pop_upedit.remarks_observations,
                contacts: props.pop_upedit.contacts,
                product: props.pop_upedit.product,
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
            title="Customer Edit"
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
            <div className="pop-up-forms product_form non_center">
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
    <FormItem label='Customer ID'  rules={[{ required: true, message: 'Required!\'}' }]} name={`id`}>

            <Input placeholder="Customer ID"/>
    </FormItem>
    </Col>
    <Col md={8}>
    <FormItem label='Customer Name'  rules={[{ required: true, message: 'Required\'}' }]} name={`customername`}>

<Input placeholder="Customer Name"/>
</FormItem>

    </Col>
    <Col md={8}>
        <FormItem label='Location'  rules={[{ required: true, message: 'Required\'}' }]} name={`country_of_origin`}>        
                <Input placeholder="Location"/>
        </FormItem>
    </Col>
    </Row>
    <Row>
        <Col md={8}>
        <FormItem label='Email '  rules={[{ required: true,message:'required'},{type:'email',  message: 'invalid email\'}' }]} name={`email`}>           
                <Input placeholder="Email "/>
        </FormItem>
        </Col>
        <Col md={8}>
        <FormItem label='Parent Company'  rules={[{ required: true,message:'required'}]} name={`parent_company`}>           
                <Input placeholder="Parent Company"/>
        </FormItem>
        </Col>
        <Col md={8}>
        <FormItem label='Primary Contact Person'  rules={[{ required: true,message:'required'}]} name={`primary_contact_person`}>           
                <Input placeholder="Primary Contact Person"/>
        </FormItem>
        </Col>
        
    </Row>
    <Row>
        <Col md={8}>
            <FormItem label='Secondary Contact Person'  rules={[{ required: true,message:'required'}]} name={`secondary_contact_person`}>           
                    <Input placeholder="Secondary Contact Person"/>
            </FormItem>
        </Col>
        <Col md={8}>
        <FormItem label='Secondary Contact Person'  rules={[{ required: true,message:'required'}]} name={`secondary_contact_person`}>           
                <Input placeholder="Secondary Contact Person"/>
        </FormItem>
        </Col>
        <Col md={8}>
        <FormItem label='Classification Type'  rules={[{ required: true,message:'required'}]} name={`classification_type`}>           
                <Input placeholder="Classification Type"/>
        </FormItem>
        </Col>
    </Row>
 
    <Row>
        <Col md={8}>
            <FormItem label='Status'  rules={[{ required: true,message:'required'}]} name={`status`}>           
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
        <FormItem label='Address'  rules={[{ required: true,message:'required'}]} name={`address`}>           
                <Input placeholder="Address"/>
        </FormItem>
        </Col>
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

export default Edit_customername;