import React,{ useState} from "react";
import {Button, Drawer,Form, Input,Radio} from "antd";
import {Link,useLocation} from "react-router-dom";
let Setproductadd = (props) =>{
    let location = useLocation()
    const FormItem = Form.Item;
    const { setvisible,isvisible} = props
    const [ids,setids] = useState([])
    const [form] = Form.useForm();
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
    function getCustomizerContent(){
        function onFinish(values){
setvisible(false)
        }
        function onFinishFailed(){

        }
        return (
            <>
            <div className="pop-up-forms product_form">
            <center><h1>Product Group Form</h1></center>
            
               <Form
          initialValues={{ remember: true }}
          name="basic"
          form={form}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          layout="inline">
                     <FormItem  rules={[{ required: true, message: 'Please input your title!\'}' }]} name={`title`}>

<Input placeholder="Title"/>
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
            </>
        )
    }
    // alert(isvisible)
    return(
        <>
      <Drawer
        placement="right"
        closable={false}
        onClose={()=>setvisible(false)}
        visible={isvisible}>
        {
          getCustomizerContent()
        }
      </Drawer>
        </>
    )
}

export default Setproductadd;