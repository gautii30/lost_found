import React, { useState } from "react";
import { Form, Input, Typography, message, Select } from "antd";
import {
  UserOutlined,
  LockOutlined,
  MailOutlined,
  MobileOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import { Button } from "@material-tailwind/react";
import axios from "axios";
import cardFilled from "@material-tailwind/react/theme/components/card/cardFilled";

function SignUp() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    phone: "",
    user_type: "",
  });

  const options = [
    { label: "Student", value: "student" },

    { label: "Admin", value: "admin" },
  ];
  const onFinish = async (values) => {
    console.log(values.user_type);
    console.log(values.srn);
    if(values.user_type === 'student' && values.srn === undefined){
      message.error("Please enter your srn.");
    } else {
      try {
        // Use 'values' directly in the POST request
        const response = await axios.post("http://localhost:3000/signup", values);
        console.log("Signup successful:", response.data);
        message.success("Account created successfully");
        // Redirect or perform other actions as needed after successful signup
      } catch (error) {
        console.error("Error during signup:", error);
      }
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log(errorInfo);
  };
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <Typography.Title level={3} className="text-center mb-6 text-gray-600">
          Signup
        </Typography.Title>
        <Form
          name="signup"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input
              prefix={<UserOutlined className="text-gray-500" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
              name="srn"
              rules={[
                { type: "text" },
              ]}
            >
              <Input
                prefix={<UserOutlined style={{ color: "#999" }} />}
                placeholder="SRN (Only for students)"
              />
            </Form.Item>
          <Form.Item
            name="email"
            rules={[
              { required: true, message: "Please input your email!" },
              { type: "email", message: "Please enter a valid email address." },
            ]}
          >
            <Input
              prefix={<MailOutlined className="text-gray-500" />}
              placeholder="Email"
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password
              prefix={<LockOutlined className="text-gray-500" />}
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item
            name="phone"
            rules={[
              { required: true, message: "Please input your phone number!" },
              { max: 20, message: "Phone number should be 10 digits or less" },
            ]}
          >
            <Input
              prefix={<MobileOutlined className="text-gray-500" />}
              placeholder="phone"
            />
          </Form.Item>
          <Form.Item
            name="user_type"
            rules={[{ required: true, message: "Please select user type" }]}
          >
            <Select
              defaultValue="student"
              style={{
                width: 335,
              }}
              options={options}
            />
          </Form.Item>

          <Form.Item style={{ marginBottom: 0 }}>
            <Button type="primary" htmltype="submit" className="w-full">
              Signup
            </Button>
            Or{" "}
            <a href="/" className="text-blue-500 text-lg hover:underline">
              Login to your account
            </a>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default SignUp;
