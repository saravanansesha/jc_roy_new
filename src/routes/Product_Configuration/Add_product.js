import React,{ useEffect, useState} from "react";
import {Button, Drawer,Form,Modal,Select,Upload, Input,Radio,Col, Row} from "antd";
import {Link,useLocation} from "react-router-dom";
const {Option, OptGroup} = Select;
let Add_product = (props) =>{
    let location = useLocation()
    const FormItem = Form.Item;
    const { setaddvisible,addisvisible} = props
    const [ids,setids] = useState([])
    const [clear,setclear] = useState(0)
    const [form] = Form.useForm();
    const [prefill,setprefill] = useState(0)
    const [imgsrc,setimgsrc] = useState('')
    const children = [];
    console.log('for edit employee',props.pop_upedit)
    // useEffect(()=>{
    // if(clear == 0){
    //     form.resetFields()
    //     setclear(1)
    // }
    // },[clear])
    let models_option = ['model1','model2','model3','model4']

    let components = [];
    let designstandards = [];
    let testingstandards = [];
    //   useEffect(()=>{
        for (let i = 0; i < models_option.length; i++) {
            children.push(<Option key={models_option[i]} value={models_option[i]}>{models_option[i]}</Option>);
          }
          if(props.pop_upedit){
          if(props.pop_upedit.components){
            for(let i=0;i<props.pop_upedit.components.length;i++){
                components.push(<Option key={props.pop_upedit.components[i]} value={props.pop_upedit.components[i]}>{props.pop_upedit.components[i]}</Option>);
              }
          }
        }
        if(props.pop_upedit){
            if(props.pop_upedit.designstandards){
                for(let i=0;i<props.pop_upedit.designstandards.length;i++){
                    designstandards.push(<Option key={props.pop_upedit.designstandards[i]} value={props.pop_upedit.designstandards[i]}>{props.pop_upedit.designstandards[i]}</Option>);
                  }
            }
        }
        if(props.pop_upedit){
            if(props.pop_upedit.testingstandards){
                for(let i=0;i<props.pop_upedit.testingstandards.length;i++){
                    testingstandards.push(<Option key={props.pop_upedit.testingstandards[i]} value={props.pop_upedit.testingstandards[i]}>{props.pop_upedit.testingstandards[i]}</Option>);
                  }
            }
        }
        

    //   },[])
    useEffect(()=>{
        // alert(props.pop_upedit)
        if(prefill == 0 && props.pop_upedit ){
            
            form.setFieldsValue({
                Product_type : props.pop_upedit.Product_type,
                status : props.pop_upedit.status,
                models : props.pop_upedit.models,
                components : props.pop_upedit.components,
                designstandards : props.pop_upedit.designstandards,
                testingstandards : props.pop_upedit.testingstandards,
                // manage_rep : props.pop_upedit.manage_rep,
                // dep_head : props.pop_upedit.dep_head,
                // plant_head : props.pop_upedit.plant_head,
                // ccr : props.pop_upedit.ccr,
                // status : props.pop_upedit.status,
                // password : props.pop_upedit.password
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
        // props.editinformation(values,props.pop_upedit.key)
        setaddvisible(false)
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
            title="Add Product"
            className="for_long_edit"
            footer={false}
            visible={addisvisible}
            // onOk={()=>setvisible(false)}
            onCancel={ async() =>{

                 await resetfields();
            //    aa = 88
            setaddvisible(false)
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
    <FormItem label='Product Type'  rules={[{ required: true, message: 'Please enter your product type'} ]} name={`Product_type`}>

            <Input placeholder="Product Type"/>
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

    {/* <div className="submit_popup"> */}
    <FormItem label={'Models'}  rules={[{ required: true, message: 'Please select any one of the field'}]} name={`models`}>
            <Select
                mode="multiple"
                placeholder="Models"
                // style={{width: 200}}
                onChange={handleChange}
            >
                                <Option value="Model1">Model1</Option>
                <Option value="Model2">Model2</Option>
                <Option value="Model3">Model3</Option>
                <Option value="Model4">Model4</Option>
            </Select>
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
        <FormItem label={'Components'}  rules={[{ required: true, message: 'Please select any one of the field'}]} name={`components`}>
            <Select
                mode="multiple"
                placeholder="Components"
                // style={{width: 200}}
                onChange={handleChange}
            >
                                <Option value="Components1">Components1</Option>
                <Option value="Components2">Components2</Option>
                <Option value="Components3">Components3</Option>
                <Option value="Components4">Components4</Option>
            </Select>
        </FormItem>
        </Col>
        <Col md={8}>
        <FormItem label={'Design Standards'}  rules={[{ required: true, message: 'Please select any one of the field'}]} name={`designstandards`}>
            <Select
                mode="multiple"
                placeholder="Design Standards"
                // style={{width: 200}}
                onChange={handleChange}
            >
                                <Option value="Design_Standards1">Design Standards0</Option>
                <Option value="Design_Standards2">Design Standards1</Option>
                <Option value="Design_Standards3">Design Standards2</Option>
                <Option value="Design_Standards4">Design Standards3</Option>
            </Select>
        </FormItem>
    
        </Col>
        <Col md={8}>
        <FormItem label={'Testing Standard'}  rules={[{ required: true, message: 'Please select any one of the field'}]} name={`testingstandards`}>
            <Select
            mode="multiple"
                placeholder="Testing Standard"
                // style={{width: 200}}
                onChange={handleChange}
            >
                                <Option value="Testing_Standard1">Testing Standard1</Option>
                <Option value="Testing_Standard2">Testing Standard2</Option>
                <Option value="Testing_Standard3">Testing Standard3</Option>
                <Option value="Testing_Standard4">Testing Standard3</Option>
            </Select>
    </FormItem>
        </Col>
    </Row>
    <Row>
        <Col md={8}>
        <div>
        <Button className="gx-mb-0 "
                    type="primary"
                    htmlType="submit"
            >
                  Add
        </Button>
        </div>
        </Col >
        <Col className="update" md={8}>

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

export default Add_product;