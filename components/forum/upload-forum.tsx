import { Button, Form, Input } from "antd";
import React from "react";

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

const UploadForum = () => {
    return (
        <div>
            <form {...layout} name="nest-messages">
                <Form.Item label="Title" name="title" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>

                <Form.Item label="Description" name="description" rules={[{ required: true }]}>
                    <Input.TextArea/>
                </Form.Item>

                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                    <Button type="primary" htmlType="submit">
                    Submit
                    </Button>
                </Form.Item>
            </form>
        </div>
    );
  };
  
  export default UploadForum;