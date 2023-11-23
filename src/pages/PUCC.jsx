import { useState, useEffect } from "react";
import {
  Button,
  Form,
  Input,
  Space,
  Select,
  DatePicker,
  Upload,
  message,
} from "antd";
import { InboxOutlined } from "@ant-design/icons";
import Breadcrumb from "../components/Breadcrumb";

const { Option } = Select;
const { Dragger } = Upload;

// eslint-disable-next-line react/prop-types
const SubmitButton = ({ form }) => {
  const [submittable, setSubmittable] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react/prop-types
    form.validateFields({ validateOnly: true }).then(
      () => {
        setSubmittable(true);
      },
      () => {
        setSubmittable(false);
      }
    );
  }, [form]);

  return (
    <Button type="primary" htmlType="submit" disabled={!submittable}>
      Submit
    </Button>
  );
};

const PUCC = () => {
  const [form] = Form.useForm();

  const rtoCodes = ["RTO1", "RTO2", "RTO3"]; 
  const districts = ["District A", "District B", "District C"]; 
  const vehicleClasses = ["Class 1", "Class 2", "Class 3"]; 
  const fuelTypes = ["Petrol", "Diesel", "Electric"]; 
  const vehicleNorms = ["Euro 4", "Euro 5", "BS6"]; 
  const testFees = ["Fee 1", "Fee 2", "Fee 3"]; 

  const uploadProps = {
    name: "file",
    multiple: false,
    showUploadList: false,
    beforeUpload: (file) => {
      message.success(`${file.name} uploaded successfully`);
      return false;
    },
  };

  return (
    <>
      <div>
        <Breadcrumb />
        <div className="container">
          <div className="bg-white p-3 my-4">
            <div className="row my-3 p-2">
              <h4>Add State</h4>
              <p className="my-2 py-2 border-bottom">
                ADD STATE & DISTRICT HERE
              </p>
            </div>
            <div className="container">
              <Form
                form={form}
                name="validateOnly"
                layout="vertical"
                autoComplete="off"
                initialValues={{
                  state: "Madhya Pradesh", 
                }}
              >
                <Form.Item
                  name="state"
                  label="State"
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name="rtoCode"
                  label="RTO Code"
                  rules={[{ required: true }]}
                >
                  <Select>
                    {rtoCodes.map((code) => (
                      <Option key={code} value={code}>
                        {code}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
                <Form.Item
                  name="district"
                  label="District"
                  rules={[{ required: true }]}
                >
                  <Select>
                    {districts.map((district) => (
                      <Option key={district} value={district}>
                        {district}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
                <Form.Item
                  name="ownerName"
                  label="Owner Name"
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>
                <Form.Item name="mobile" label="Mobile: (Optional)">
                  <Input />
                </Form.Item>
                <Form.Item
                  name="vehicleNo"
                  label="Vehicle No"
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name="vehicleClass"
                  label="Vehicle Class"
                  rules={[{ required: true }]}
                >
                  <Select>
                    {vehicleClasses.map((vehicleClass) => (
                      <Option key={vehicleClass} value={vehicleClass}>
                        {vehicleClass}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
                <Form.Item
                  name="vehicleRegistrationDate"
                  label="Vehicle Registration Date"
                  rules={[{ required: true }]}
                >
                  <DatePicker style={{ width: "100%" }} />
                </Form.Item>
                <Form.Item
                  name="fuelType"
                  label="Fuel Type"
                  rules={[{ required: true }]}
                >
                  <Select>
                    {fuelTypes.map((fuelType) => (
                      <Option key={fuelType} value={fuelType}>
                        {fuelType}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
                <Form.Item
                  name="vehicleNorms"
                  label="Vehicle Norms"
                  rules={[{ required: true }]}
                >
                  <Select>
                    {vehicleNorms.map((norm) => (
                      <Option key={norm} value={norm}>
                        {norm}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
                <Form.Item
                  name="testFees"
                  label="Test Fees"
                  rules={[{ required: true }]}
                >
                  <Select>
                    {testFees.map((fee) => (
                      <Option key={fee} value={fee}>
                        {fee}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
                <Form.Item name="installationDate" label="Installation Date">
                  <DatePicker style={{ width: "100%" }} />
                </Form.Item>
                <Form.Item
                  name="validity"
                  label="Validity"
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name="photo"
                  label="Photo"
                  rules={[{ required: true }]}
                >
                  <Dragger {...uploadProps}>
                    <p className="ant-upload-drag-icon">
                      <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">
                      Click or drag file to this area to upload
                    </p>
                    <p className="ant-upload-hint">
                      Support for a single upload.
                    </p>
                  </Dragger>
                </Form.Item>
                <Form.Item>
                  <Space>
                    <SubmitButton form={form} />
                    <Button htmlType="reset">Reset</Button>
                  </Space>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default PUCC;
