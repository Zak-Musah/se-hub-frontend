import React , { useState } from "react";
import { Button, Form, Input, Modal } from "antd";


const AskQuestion = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Ask Question
      </Button>
      <Modal title="Ask Question" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
      <form {...layout} name="nest-messages">
                <Form.Item label="Title" name="title" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>

                <Form.Item label="Description" name="description" rules={[{ required: true }]}>
                    <Input.TextArea/>
                </Form.Item>

            </form>
      </Modal>
    </>
  );
  };
  
  export default AskQuestion;
