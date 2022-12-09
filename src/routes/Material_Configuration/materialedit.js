import React,{ useEffect, useState} from "react";
import {Button, Drawer,Form,Modal,Select,Upload, Input,Radio,Col, Row} from "antd";
import {Link,useLocation} from "react-router-dom";
import Add_chemical from "./Add_chemical"
import {Cinformation} from "./chemicalinformation"
import Edit_chemical from "./Edit_chemical"
const {Option, OptGroup} = Select;
let Materialedit = (props) =>{
    let location = useLocation()
    const FormItem = Form.Item;
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
            setchemicalinformation(props.pop_upedit.chemicalinformation)
            form.setFieldsValue({
                product_form: props.pop_upedit.product_form,
                material_specification: props.pop_upedit.material_specification,
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
            <div className="pop-up-forms product_form material_form">
            {/* <center><h1>Employee Form</h1></center> */}
            
<Form
initialValues={{ remember: true }}
name="basic"
form={form}
className={'big_forms'}
onFinish={onFinish}
layout="inline">
    <h3>General Information</h3>
    <Row>
        <Col md={8} >
    <FormItem label='Material Specification'  rules={[{ required: true, message: 'Please input your Material Specification!\'}' }]} name={`material_specification`}>

            <Input placeholder="Material Specification"/>
    </FormItem>
    </Col>
    <Col md={8}>
    <FormItem label='Name. Comp'  rules={[{ required: true, message: 'Please input your title!\'}' }]} name={`comp_name`}>

<Input placeholder="Name. Comp"/>
</FormItem>

    </Col>
    <Col md={8}>

    {/* <div className="submit_popup"> */}
    <FormItem label={'Product Form'}  rules={[{ required: true, message: 'Please select any one of the field'}]} name={`product_form`}>
            <Select
                placeholder="Product Form"
                // style={{width: 200}}
                onChange={handleChange}
            >
                <Option value="Product1">Product1</Option>
                <Option value="Product2">Product2</Option>
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
               <FormItem label='UNS'  rules={[{ required: true, message: 'Please input your UNS!\'}' }]} name={`uns`}>

<Input placeholder="UNS"/>
</FormItem>
        </Col>
        <Col md={8}>
        <FormItem label='ASME IX P No'  rules={[{ required: true, message: 'Please input your ASME IX P No!\'}' }]} name={`asmepno`}>

<Input placeholder="ASME IX"/>
</FormItem>
        </Col>
        <Col md={8}>
        <FormItem label='ASME IX Group No'  rules={[{ required: true, message: 'Please input your Group No!\'}' }]} name={`asmegroupno`}>

<Input placeholder="ASME IX"/>
</FormItem>
        </Col>
    </Row>
    <Row>
        <Col md={8}>
        <FormItem label='Temperature Limit(°C) Minimum'  rules={[{ required: true, message: 'Please input your temperature!\'}' }]} name={`temperaturemin`}>
            <Input placeholder="Temperature Limit(°C) Minimum"/>
        </FormItem>
        </Col>
        <Col md={8}>
        <FormItem label='Temperature Limit(°C) Maximum'  rules={[{ required: true, message: 'Please input your temperature!\'}' }]} name={`temperaturemax`}>
            <Input placeholder="Temperature Limit(°C) Maximum"/>
        </FormItem>
        </Col>
    </Row>
    <h3>Chemical Information</h3>
    <div className="checkbox_container" >
        {
            
            Cinformation.map((item,i)=>{
                let checkmark = 'no'
                if(chemicalinformation.length>0){
                    chemicalinformation.map((itemc,ic)=>{
                        // console.log(itemc.value,'checklog')
                        // console.log(item.value,'checklog')
                        if(item.value.toLowerCase() == itemc.value.toLowerCase() ){
                            checkmark = ic
                            return
                        }
                         
                    })
                }
                checkmark != 'no' ? console.log(chemicalinformation[checkmark].value,'yes log') : console.log('no log')
                return(
                    <div className="for-checkbox">
                    <input checked={checkmark != 'no' ? true:false} onChange={()=>{
                        let changechemical = 'no'
                         chemicalinformation.filter((itemchange,ichange)=>{
                            if(itemchange.value.toLowerCase() == item.value.toLowerCase()){
                                changechemical = ichange
                            }
                            return
                        })
                        
                         if(changechemical != 'no'){
                            let alter = chemicalinformation.filter((itemchange,ichange)=>{
                                if(itemchange.value.toLowerCase() == item.value.toLowerCase()){
                                    changechemical = ichange
                                }
                                return ichange != changechemical
                            })
                            setchemicalinformation(alter)
                         }else{
                            setchemicalcontentindex(i)
                            setchemicalvisible(true)
                         }
                    }}  type='checkbox'  />
                    <div className="checkbox_content_container">
                        <div className="label_check">{item.value}</div>
                        {checkmark != 'no' ?   <div className="checkbox_value_container" >
                            <div className="label_check_values">
                                <span>Min : {chemicalinformation[checkmark].min}</span>
                                <span>Max : {chemicalinformation[checkmark].max}</span>
                            </div>
                            <i  className="for_check_edit icon icon-edit" onClick={()=>{
                                setchemicalcontentindex(i)
                                seteditchemicalvisible(true)
                                seteditchemicalinformationvalue(chemicalinformation[checkmark])
                            }} />
                        </div>: ``}
                    </div>
                </div>            
                )
            })
        }
        

    </div>
    <h3>Mechanical Information</h3>
    <h4>Tensile Test</h4>
    <Row>
        <Col md={8} >
    <FormItem label='Tensile Strength (UTS)(Mpa) Minimum'  rules={[{ required: true, message: 'Please input your Material Specification!\'}' }]} name={`Tensile_Strength_minimum`}>

            <Input placeholder="Tensile Strength (UTS)(Mpa) Minimum"/>
    </FormItem>
    </Col>
    <Col md={8}>
    <FormItem label='Tensile Strength (UTS)(Mpa) Maximum'  rules={[{ required: true, message: 'Please input your title!\'}' }]} name={`Tensile_Strength_maximum`}>

<Input placeholder="Tensile Strength (UTS)(Mpa) Maximum"/>
</FormItem>

    </Col>
    <Col md={8}>

    <FormItem label='Yield Strength (YS)(Mpa) Minimum'  rules={[{ required: true, message: 'Please input your Yield Strength !\'}' }]} name={`Yield_Strength_minimum`}>

        <Input placeholder="Yield Strength (YS)(Mpa) Minimum"/>
    </FormItem>

    </Col>
    </Row>
    <Row>
        <Col md={8}>
               <FormItem label='Yield Strength (YS)(Mpa) Maximum'  rules={[{ required: true, message: 'Please input your Yield Strength!\'}' }]} name={`Yield_Strength_maximum`}>
                    <Input placeholder="Yield Strength (YS)(Mpa) Maximum"/>
                </FormItem>
        </Col>
        <Col md={8}>
        <FormItem label='Elongation (E)(%) Minimum'  rules={[{ required: true, message: 'Please input your Elongation!\'}' }]} name={`Elongation_minimum`}>

<Input placeholder="Elongation (E)(%) Minimum"/>
</FormItem>
        </Col>
        <Col md={8}>
        <FormItem label='Elongation (E)(%) Maximum'  rules={[{ required: true, message: 'Please input your Elongation Maximum!\'}' }]} name={`Elongation_maximum`}>

<Input placeholder="Elongation (E)(%) Maximum"/>
</FormItem>
        </Col>
    </Row>
    <Row>
        <Col md={8}>
        <FormItem label='Reduction Area (RA)(%) Minimum'  rules={[{ required: true, message: 'Please input your Reduction Area !\'}' }]} name={`Reduction_Area_minimum`}>
            <Input placeholder="Reduction Area (RA)(%) Minimum"/>
        </FormItem>
        </Col>
        <Col md={8}>
        <FormItem label='Reduction Area (RA)(%) Maximum'  rules={[{ required: true, message: 'Please input your Reduction Area !\'}' }]} name={`Reduction_Area_maximum`}>
            <Input placeholder="Reduction Area (RA)(%) Maximum"/>
        </FormItem>
        </Col>
    </Row>
    <h4>Hardness Test</h4>
    <Row>
        <Col md={8} >
    <FormItem label='Hardness M.U.'  rules={[{ required: true, message: 'Please input your Material Hardness!\'}' }]} name={`Hardness`}>
            <Input placeholder="Hardness M.U."/>
    </FormItem>
    </Col>
    <Col md={8}>
        <FormItem label='Limits Maximum'  rules={[{ required: true, message: 'This field is required!\'}' }]} name={`Limits_maximum`}>
            <Input placeholder="Limits Maximum"/>
        </FormItem>
    </Col>
    <Col md={8}>
            <FormItem label='Limits Minimum'  rules={[{ required: true, message: 'Please input your limit !\'}' }]} name={`Limits_minimum`}>
                <Input placeholder="Limits Minimum"/>
            </FormItem>
    </Col>
    </Row>
    <div className="Hardness_Test">
            <input type={`checkbox`} checked={impact} onChange={()=>{
                setimpact(!impact)
            }} />
        <h4>Impact Test</h4>
        </div>
        {impact ? 
        <Row>
                <Col md={8} >
                    <FormItem label='Temperature'  rules={[{ required: true, message: 'Please input your Material Temperature!\'}' }]} name={`Temperature`}>
                            <Input placeholder="Temperature"/>
                    </FormItem>
                </Col>
                <Col md={8}>
                    <FormItem label='Limits Maximum'  rules={[{ required: true, message: 'This field is required!\'}' }]} name={`Limits_maximum_hardness`}>
                        <Input placeholder="Limits Maximum"/>
                    </FormItem>
                </Col>
                <Col md={8}>
                    <FormItem label='Limits Minimum'  rules={[{ required: true, message: 'Please input your limit !\'}' }]} name={`Limits_minimum_hardness`}>
                        <Input placeholder="Limits Minimum"/>
                    </FormItem>
                </Col>
        </Row> : ``}        
    <h4>Heat Treatment Information</h4>
    <Row>
        <Col md={8}>
        <FormItem label='Heat Treatment'  rules={[{ required: true, message: 'Please input your Heat Treatment !\'}' }]} name={`Heat_Treatment_hardness`}>
                <Input placeholder="Heat Treatment"/>
            </FormItem>
        </Col>
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