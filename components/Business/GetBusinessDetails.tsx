import React, { useState } from "react";
import { Form, Input, Button, Space, Avatar, Badge } from "antd";
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
import {
  BusinessInfo,
  GetBusinessInfo,
  image,
  imagesObject,
  Owner,
} from "../../types";

const imgs = {
  businessLogo: {},
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
      let fileName =
        file.name.substr(0, file.name.lastIndexOf(".")) || file.name;
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
              fileName,
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
  const onFinish = async (values: any) => {
    values.artifacts = images.artifacts;
    values.businessLogo = images.businessLogo;
    if (images.owners.length > 0) {
      values.owners.map((owner: any, idx: number) => {
        owner.avatar = images.owners[idx];
      });
    }
    try {
      const { data }: GetBusinessInfo = await axios.post(`/api/business`, {
        ...values,
      });

      router.push("/local-business");
      toast("Great business data saved to backend");
      // TODO Close dialog
    } catch (error) {
      if (error) toast("Data persist to backend fail");
    }
  };
  const handleImageRemoval = async (
    type: string,
    name: string,
    imageGroup: any,
  ) => {
    try {
      let bucket = imageGroup.Bucket;
      let key = imageGroup.key;
      const res = await axios.post("/api/business/remove-image", {
        bucket,
        key,
      });
      let result = {};
      if (type === "artifacts" || type === "owners") {
        // @ts-ignore
        result = images[type].filter((image: image) => image.key !== name);
      }
      setImages((images) => ({
        ...images,
        [type]: result,
      }));
      toast("Image Deletion Successful.");
    } catch (err) {
      console.log(err);
      // setValues({ ...values, loading: false });
      toast("Image Deletion failed. Try later.");
    }
  };
  console.log(images);
  return (
    <Form
      className={`${styles.antForm}`}
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
        <label className={`text-left btn btn-block  mb-3 ${styles.uploadBtn}`}>
          Image Upload
          <input
            name="businessLogo"
            type="file"
            onChange={(e) => normFile(e, "businessLogo")}
            hidden
            accept="image/*"
          />
        </label>
        {images.businessLogo && Object.keys(images.businessLogo).length > 0 && (
          <>
            <Badge
              className="d-flex flex-column  mt-3 pointer"
              title="remove image"
              count="x"
            >
              <Avatar size={80} src={`${images.businessLogo.Location}`} />
            </Badge>
            <span>{images.businessLogo.key}</span>
          </>
        )}
      </Form.Item>

      <Form.Item label="Other media upload">
        <Form.Item name="artifacts">
          <label className={`text-left btn btn-block mb-3 ${styles.uploadBtn}`}>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
              <p className="ant-upload-text m-2">
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
        <div className="d-flex flex-row mt-4 gap-3">
          {images.artifacts &&
            images.artifacts.length > 0 &&
            images.artifacts.map((artifact) => (
              <div
                className="d-flex flex-column text-center"
                // onClick={() =>
                //   handleImageRemoval("artifacts", artifact.key, artifact)
                // }
                key={artifact.Location}
              >
                <Badge
                  key={artifact.key}
                  title="remove image"
                  count="x"
                  className="pointer"
                >
                  <Avatar size={80} src={`${artifact.Location}`} />
                </Badge>
                <div>{artifact.key}</div>
              </div>
            ))}
        </div>
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
          <div className="d-flex flex-row mt-4 gap-3">
            {images.owners[0] &&
              images.owners.map((owner) => (
                <div
                  className="d-flex flex-column text-center"
                  // onClick={() =>
                  //   handleImageRemoval("owners", owner.avatar.key, owner.avatar)
                  // }
                  key={owner.Key}
                >
                  <Badge
                    key={owner.Key}
                    title="remove image"
                    count="x"
                    className="pointer"
                  >
                    <Avatar size={80} src={`${owner.Location}`} />
                    <p>{owner.Key}</p>
                  </Badge>
                </div>
              ))}
          </div>
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
