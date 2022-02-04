import React, { useState } from "react";
import { Form, Input, Button, Space } from "antd";
import Resizer from "react-image-file-resizer";
import styles from "../../styles/businessDetailsModal.module.scss";
type SizeType = Parameters<typeof Form>[0]["size"];
import {
  InboxOutlined,
  MinusCircleOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import axios from "axios";
import { toast } from "react-toastify";
import Router, { NextRouter, useRouter } from "next/router";
import { GetBusinessInfo, Owner } from "../../types";

const imgs = {
  businessLogo: "",
  artifacts: [],
  owners: [],
};
const GetBusinessDetails = () => {
  const [componentSize, setComponentSize] = useState<SizeType | "default">(
    "default",
  );

  const [images, setImages] = useState(imgs);
  // router
  const router: NextRouter = useRouter();
  const onFormLayoutChange = ({ size }: { size: SizeType }) => {
    setComponentSize(size);
  };

  const normFile = (e: any, imageKey: string) => {
    const files = e.target.files;
    [...files].map((file) => {
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

            let result = data;
            if (imageKey === "artifacts" || imageKey === "owners") {
              result = [...images[imageKey], data];
            }
            setImages((images) => ({
              ...images,
              [imageKey]: result,
            }));
          } catch (error) {
            console.log(error);
            toast("Image upload failed. Try later.");
          }
        },
        "base64",
        200,
        200,
      );
    });
  };
  const onFinish = async (values) => {
    values.artifacts = images.artifacts;
    values.businessLogo = images.businessLogo;
    if (images.owners.length > 0) {
      values.owners.map((owner: Owner, idx: number) => {
        owner.avatar = images.owners[idx];
      });
    }
    try {
      const { data }: GetBusinessInfo = await axios.post("api/business", {
        ...values,
      });

      router.push("/local-business");
      toast("Great business data saved to backend");
      // TODO Close dialog
    } catch (error) {
      if (error) toast(error.response.data);
    }
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
        label="Business category"
        name="category"
        rules={[{ required: true }]}
      >
        <Input placeholder="Input Business Category" />
      </Form.Item>
      <Form.Item name="businessLogo" label="Upload Business Logo">
        <label className={`text-left btn btn-block ${styles.uploadBtn}`}>
          Image Upload
          <input
            name="businessLogo"
            type="file"
            onChange={(e) => normFile(e, "businessLogo")}
            hidden
            accept="image/*"
          />
        </label>
      </Form.Item>

      <Form.Item label="Other media upload">
        <Form.Item name="artifacts">
          <label className={`text-left btn btn-block ${styles.uploadBtn}`}>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
              <p className="ant-upload-text">
                Click or drag file to this area to upload. Support for a single
                or bulk upload.
              </p>
            </p>
            <input
              name="artifacts"
              type="file"
              onChange={(e) => normFile(e, "artifacts")}
              hidden
              accept="image/*"
              multiple
            />
          </label>
        </Form.Item>
      </Form.Item>
      <Form.Item
        rules={[{ required: true }]}
        name="description"
        label="Description"
      >
        <Input.TextArea showCount maxLength={1000} />
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
        <Form.Item
          name="website"
          rules={[{ required: true }]}
          style={{
            // display: "inline-block"
            width: "calc(50% - 8px)",
            margin: "0 8px",
          }}
        >
          <Input placeholder="Input web-address" />
        </Form.Item>
      </Form.Item>
      <Form.Item label="Owners" style={{ marginTop: 10 }}>
        <Form.Item>
          <Form.List name="owners">
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
                      rules={[
                        { required: true, message: "Missing first name" },
                      ]}
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
                      style={{ marginLeft: 20, marginTop: 20 }}
                      {...restField}
                      name={[name, "avatar"]}
                    >
                      <label
                        className={`text-left btn btn-block ${styles.uploadBtn}`}
                      >
                        Foto
                        <input
                          name="owners"
                          type="file"
                          onChange={(e) => normFile(e, "owners")}
                          hidden
                          accept="image/*"
                        />
                      </label>
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
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Save
        </Button>
      </Form.Item>
    </Form>
  );
};

export default GetBusinessDetails;
