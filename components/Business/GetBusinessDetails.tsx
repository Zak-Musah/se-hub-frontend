import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
  Upload,
  Space,
} from "antd";
import Resizer from "react-image-file-resizer";

type SizeType = Parameters<typeof Form>[0]["size"];
import {
  UploadOutlined,
  InboxOutlined,
  MinusCircleOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import axios from "axios";
import { toast } from "react-toastify";

const imgs = {
  businessLogo: "",
  artifacts: [],
  users: [],
};
const GetBusinessDetails = () => {
  const [componentSize, setComponentSize] = useState<SizeType | "default">(
    "default",
  );
  const [uploadedImage, setUPloadedImage] = useState("Uploaded Image");
  const [images, setImages] = useState(imgs);

  const onFormLayoutChange = ({ size }: { size: SizeType }) => {
    setComponentSize(size);
  };

  const normFile = (e: any, imageKey: string) => {
    console.log("Upload event:", e.target.files[0], imageKey);

    const file = e.target.files[0];
    Resizer.imageFileResizer(
      file,
      720,
      500,
      "JPEG",
      100,
      0,
      async (uri) => {
        try {
          let { data } = await axios.post("/api/business/upload-image", {
            image: uri,
          });
          console.log("image uploaded to s3", data);
          console.log("business logo key", imageKey);
          console.log("Object to update", images);

          setImages((images) => ({ ...images, [imageKey]: data }));
          console.log("expecting data to be assigned to businessLogo", images);
        } catch (error) {
          console.log(error);
          toast("Image upload failed. Try later.");
        }
      },
      "base64",
      200,
      200,
    );

    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };
  const onFinish = (values) => {
    console.log("Received values of form:", values);
    console.log(images);
  };

  return (
    <Form
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 14 }}
      layout="horizontal"
      initialValues={{ size: componentSize }}
      onValuesChange={onFormLayoutChange}
      size={componentSize as SizeType}
      onFinish={onFinish}
    >
      <Form.Item label="Business name" name="name" rules={[{ required: true }]}>
        <Input placeholder="Input Business Name" />
      </Form.Item>
      <Form.Item
        name="businessLogo"
        label="Upload Business Logo"
        // valuePropName="BusinessLogo"
        // getValueFromEvent={normFile}
      >
        {/* <Upload name="logo" action="/upload.do" listType="picture">
          <Button icon={<UploadOutlined />}>Click to upload</Button>
        </Upload> */}
        <input
          name="businessLogo"
          type="file"
          onChange={(e) => normFile(e, "businessLogo")}
        />
      </Form.Item>

      <Form.Item label="Other media upload">
        <Form.Item
          name="artifacts"
          valuePropName="artifacts"
          getValueFromEvent={normFile}
          noStyle
        >
          <Upload.Dragger name="files" action="/upload.do">
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">
              Click or drag file to this area to upload
            </p>
            <p className="ant-upload-hint">
              Support for a single or bulk upload.
            </p>
          </Upload.Dragger>
        </Form.Item>
      </Form.Item>
      <Form.Item label="Description">
        <Input.TextArea showCount maxLength={100} />
      </Form.Item>

      <Form.Item label="Contact" style={{ marginBottom: 0 }}>
        <Form.Item
          name="phone"
          rules={[{ required: true }]}
          style={{ display: "inline-block", width: "calc(50% - 8px)" }}
        >
          <Input placeholder="Input phone number" />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[{ required: true }]}
          style={{
            display: "inline-block",
            width: "calc(50% - 8px)",
            margin: "0 8px",
          }}
        >
          <Input placeholder="Input email" />
        </Form.Item>
        <Form.Item
          name="address"
          rules={[{ required: true }]}
          style={{
            display: "inline-block",
            width: "calc(50% - 8px)",
            margin: "0 8px",
          }}
        >
          <Input placeholder="Input address" />
        </Form.Item>
      </Form.Item>
      <Form.Item>
        {/* <h3>Owners</h3> */}
        <Form.List name="users">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, ...restField }) => (
                <Space
                  key={key}
                  style={{ display: "flex", marginBottom: 8 }}
                  align="baseline"
                >
                  <Form.Item
                    {...restField}
                    name={[name, "Name"]}
                    rules={[{ required: true, message: "Missing first name" }]}
                  >
                    <Input placeholder="Full name" />
                  </Form.Item>

                  <Form.Item
                    {...restField}
                    name={[name, "title"]}
                    rules={[{ required: true, message: "Missing title" }]}
                  >
                    <Input placeholder="Title" />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    name={[name, "avatar"]}
                    label="Upload Avatar"
                    valuePropName="avatar"
                    getValueFromEvent={normFile}
                  >
                    <Upload name="logo" action="/upload.do" listType="picture">
                      <Button icon={<UploadOutlined />}>Click to upload</Button>
                    </Upload>
                  </Form.Item>
                  <MinusCircleOutlined onClick={() => remove(name)} />
                </Space>
              ))}
              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => add()}
                  block
                  icon={<PlusOutlined />}
                >
                  Add Owners
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default GetBusinessDetails;
