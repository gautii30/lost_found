import React, { useState, useEffect } from "react";
import { Form, Input, Select, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useStateContext } from "../Context/ContextProvider";
import { Button } from "@material-tailwind/react";

function Login() {
  const options = [
    { label: "Student", value: "student" },

    { label: "Admin", value: "admin" },
  ];

  const [form] = Form.useForm();
  const [userType, setUserType] = useState();

  const handleUserTypeChange = (value) => {
    setUserType(value);
    form.setFieldsValue({ email: undefined, srn: undefined });
  };

  const { setLogin, setUsertype } = useStateContext();

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("email")) {
      if (localStorage.user_type === "student") {
        navigate("/client");
      } else {
        navigate("/admin");
      }
    }
  }, [navigate]);

  const onFinish = async (values) => {
    const { srn, password, email } = values;
    setLoading(true);   
    
    const requestPayload = {
      srn,
      email,
      password
    };

    try {
      if(requestPayload.password) {
        const response = await axios.post("http://localhost:3000/login", requestPayload);

      const data = response?.data;
      if (data && data.length > 0) {
        const userEmail = data[0].email;
        const userType = data[0].user_type;

        if (userEmail && userType) {
          setLogin(true);
          message.success("Login Success");

          // Store the email in localStorage
          localStorage.setItem("email", userEmail);
          localStorage.setItem("user_type", userType);
          localStorage.setItem("id", data[0].id);

          if (data[0].user_type === "student") {
            setUsertype("student");
            navigate("/client");
          } else {
            setUsertype("admin");
            navigate("/admin");
          }
        }
      }
      }
    } catch (error) {
      console.log(error);
      message.error("An error occurred during login.");
    }

    setLoading(false);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    if(userType === 'student'){
      message.error("Please provide valid srn and password.");
    } else {
      message.error("Please provide valid email and password.");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "40px",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          width: "400px",
        }}
      >
        <h2
          style={{ textAlign: "center", marginBottom: "30px", color: "#333" }}
        >
          Login
        </h2>
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            name="user_type"
            rules={[{ required: true, message: "Please select user type" }]}
          >
            <Select
              defaultValue="Select"
              options={options}
              onChange={handleUserTypeChange}
            />
          </Form.Item>

          {userType === "admin" ? (
            <Form.Item
              name="email"
              rules={[
                { required: true, message: "Please input your email!" },
                {
                  type: "email",
                  message: "Please enter a valid email address.",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined style={{ color: "#999" }} />}
                placeholder="Email"
              />
            </Form.Item>
          ) : (
            <Form.Item
              name="srn"
              rules={[
                { required: true, message: "Please input your srn!" },
                { type: "text", message: "Please enter your registered srn." },
              ]}
            >
              <Input
                prefix={<UserOutlined style={{ color: "#999" }} />}
                placeholder="SRN"
              />
            </Form.Item>
          )}

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password
              prefix={<LockOutlined style={{ color: "#999" }} />}
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item style={{ marginBottom: 0 }}>
            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              style={{ width: "100%" }}
              onClick={onFinish}
            >
              Login
            </Button>
            Or{" "}
            <a href="/signup" className="text-blue-500 text-lg hover:underline">
              Create New account
            </a>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Login;
