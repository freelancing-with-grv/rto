import { Form, Input, Button, Select } from "antd";

const { Option } = Select;

// eslint-disable-next-line react/prop-types
const CustomForm = ({dropdownOptions, onSubmit, onDropdownChange }) => {
  const [form] = Form.useForm();



  const handleFormSubmit = () => {
    const formData = form.getFieldsValue();
    onSubmit(formData);
  };

  return (
    <Form form={form} onFinish={handleFormSubmit} layout="vertical">
      <Form.Item label="Dropdown">
        <Select onChange={onDropdownChange}>
          {
          // eslint-disable-next-line react/prop-types
          dropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.label}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item label="Enter Dist Name :" name="district-name">
        <Input />
      </Form.Item>
      <Form.Item label="Enter RTO Code" name="rto-code">
        <Input />
      </Form.Item>
      <Form.Item>
        <div className="text-center">
          <Button htmlType="submit">Submit</Button>
        </div>
      </Form.Item>
    </Form>
  );
};

export default CustomForm;
