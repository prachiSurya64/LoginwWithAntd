import React from 'react';
import { Button, Divider, Form, Input, Typography, message } from 'antd';
import '../styles/Login.css';
import { GoogleOutlined, FacebookFilled, TwitterOutlined, InstagramOutlined, YoutubeFilled,LockOutlined,UserOutlined } from '@ant-design/icons';

function Login() {
  const [form] = Form.useForm(); // Create a form instance using Form.useForm()

  const login = () => {
    form
      .validateFields()
      .then((values) => {
        // Save the email and password to localStorage
        localStorage.setItem('email', values.myEmail);
        localStorage.setItem('password', values.myPassword);

        message.success('Login Successful');

        // Reset the form fields after successful login
        form.resetFields();
      })
      .catch((error) => {
        console.error('Login failed:', error);
        message.error('Login failed. Please try again.');
      });
  };

  // Function to retrieve and display email and password from localStorage
  const showStoredData = () => {
    const email = localStorage.getItem('email');
    const password = localStorage.getItem('password');

    if (email && password) {
      message.info(`Stored email: ${email}, Stored password: ${password}`);
    } else {
      message.info('No data stored in localStorage.');
    }
  };

  return (
    <>
      <div className='appBg'>
        <Form className='loginForm' form={form} onFinish={login}>
          <Typography.Title style={{ margin: '35px' }}>Welcome Back</Typography.Title>

          <Form.Item
            rules={[
              {
                required: true,
                type: 'email',
                message: 'Please enter a valid email',
              },
            ]}
            label='Enter-mail'
            name='myEmail'
            className='label'
            style={{ margin: '35px' }}
          >
            <Input placeholder='Enter your email' prefix={<UserOutlined />}/>
          </Form.Item>

          <Form.Item
            rules={[
              {
                required: true,
                type: 'password',
                message: 'Enter your password',
              },
            ]}
            label='Password '
            name='myPassword'
            className='label'
            style={{ margin: '35px' }}
          >
            <Input.Password placeholder='Enter your password' prefix={<LockOutlined />}/>
          </Form.Item>

          {/* Set the width of the login button */}
          <Button type='primary' htmlType='submit' block style={{ width: '70%' }}>
            Login
          </Button>

          <Divider style={{ borderColor: 'black' }}>or Login with</Divider>
          <div className='SocialIcons'>
            <GoogleOutlined className='icons' onClick={login} style={{ color: 'skyblue' }} />
            <TwitterOutlined className='icons' onClick={login} style={{ color: 'teal' }} />
            <FacebookFilled className='icons' onClick={login} style={{ color: 'blue' }} />
            <InstagramOutlined className='icons' onClick={login} style={{ color: 'purple' }} />
            <YoutubeFilled className='icons' onClick={login} style={{ color: 'red' }} />
          </div>
        </Form>
      </div>
      <Button onClick={showStoredData}>Show Stored Data</Button>
    </>
  );
}

export default Login;











//data save wihthout raplace or json form in the localstorage 

// import '../styles/Login.css';
// import React from 'react';
// import { Button, Divider, Form, Input, Typography, message } from 'antd';
// import { GoogleOutlined, FacebookFilled, TwitterOutlined, InstagramOutlined, YoutubeFilled,LockOutlined,UserOutlined } from '@ant-design/icons';

// function Login() {
//   const [form] = Form.useForm(); // Create a form instance using Form.useForm()

//   const login = () => {
//     form
//       .validateFields()
//       .then((values) => {
//         // Get the previous data from localStorage or initialize an empty array
//         const existingData = JSON.parse(localStorage.getItem('formData')) || [];

//         // Add the new data to the array
//         existingData.push({
//           email: values.myEmail,
//           password: values.myPassword,
//         });

//         // Save the updated array to localStorage
//         localStorage.setItem('formData', JSON.stringify(existingData));

//         message.success('Login Successful');

//         // Reset the form fields after successful login
//         form.resetFields();
//       })
//       .catch((error) => {
//         console.error('Login failed:', error);
//         message.error('Login failed. Please try again.');
//       });
//   };

//   // Function to retrieve and display all saved data from localStorage
//   const showStoredData = () => {
//     const data = JSON.parse(localStorage.getItem('formData'));

//     if (data && data.length > 0) {
//       message.info('Stored data:');
//       data.forEach((entry, index) => {
//         message.info(`Entry ${index + 1}: Email - ${entry.email}, Password - ${entry.password}`);
//       });
//     } else {
//       message.info('No data stored in localStorage.');
//     }
//   };

//   return (
//     <>
//       <div className='appBg'>
//         <Form className='loginForm' form={form} onFinish={login}>
//           <Typography.Title style={{ margin: '35px' }}>Welcome Back</Typography.Title>

//           <Form.Item
//             rules={[
//               {
//                 required: true,
//                 type: 'email',
//                 message: 'Please enter a valid email',
//               },
//             ]}
//             label='Enter-mail'
//             name='myEmail'
//             className='label'
//             style={{ margin: '35px' }}
//           >
//             <Input placeholder='Enter your email'  prefix={<UserOutlined />} />
//           </Form.Item>

//           <Form.Item
//             rules={[
//               {
//                 required: true,
//                 type: 'password',
//                 message: 'Enter your password',
//               },
//             ]}
//             label='Password '
//             name='myPassword'
//             className='label'
//             style={{ margin: '35px' }}
//           >
//             <Input.Password placeholder='Enter your password'  prefix={<LockOutlined />}/>
//           </Form.Item>

//           <Button type='primary' htmlType='submit' block style={{ width: '70%' }}>
//             Login
//           </Button>

//           <Divider style={{ borderColor: 'black' }}>or Login with</Divider>
//           <div className='SocialIcons'>
//             <GoogleOutlined className='icons' onClick={login} style={{ color: 'skyblue' }} />
//             <TwitterOutlined className='icons' onClick={login} style={{ color: 'teal' }} />
//             <FacebookFilled className='icons' onClick={login} style={{ color: 'blue' }} />
//             <InstagramOutlined className='icons' onClick={login} style={{ color: 'purple' }} />
//             <YoutubeFilled className='icons' onClick={login} style={{ color: 'red' }} />
//           </div>
//         </Form>
//       </div>
//       <Button onClick={showStoredData} >Show Stored Data</Button>
//     </>
//   );
// }

// export default Login;




























































// import React, { useState } from 'react';
// import { Form, Input, Button, Checkbox } from 'antd';
// import { UserOutlined, LockOutlined } from '@ant-design/icons';

// const Login = () => {
//   const [loading, setLoading] = useState(false);
//   const [form] = Form.useForm(); // Create a form instance using Form.useForm()

//   const onFinish = async (values) => {
//     setLoading(true);
//     try {
//       // Simulate login with dummy data
//       const dummyUser = {
//         username: 'demoUser',
//         password: 'demoPassword',
//       };

//       // Check if the entered username and password match the dummy data
//       if (values.username === dummyUser.username && values.password === dummyUser.password) {
//         // For now, just show a success message
//         alert('Login Successful');

//         // Save token in localStorage after successful login
//         const token = 'Prachi'; // Replace with your actual token received from the API
//         localStorage.setItem('token', token);

//         // Reset the form fields after successful login
//         form.resetFields();
//       } else {
//         throw new Error('Invalid username or password');
//       }
//     } catch (error) {
//       console.error('Login failed:', error.message);
//       alert('Login failed. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Form
//       form={form} // Pass the form instance to the Form component
//       name="login_form"
//       className="login-form"
//       initialValues={{
//         remember: true,
//       }}
//       onFinish={onFinish}
//     >
//       <Form.Item
//         name="username"
//         rules={[
//           {
//             required: true,
//             message: 'Please input your Username!',
//           },
//         ]}
//       >
//         <Input prefix={<UserOutlined />} placeholder="Username" />
//       </Form.Item>
//       <Form.Item
//         name="password"
//         rules={[
//           {
//             required: true,
//             message: 'Please input your Password!',
//           },
//         ]}
//       >
//         <Input
//           prefix={<LockOutlined />}
//           type="password"
//           placeholder="Password"
//         />
//       </Form.Item>
//       <Form.Item>
//         <Form.Item name="remember" valuePropName="checked" noStyle>
//           <Checkbox>Remember me</Checkbox>
//         </Form.Item>
//       </Form.Item>
//       <Form.Item>
//         <Button
//           type="primary"
//           htmlType="submit"
//           className="login-form-button"
//           loading={loading}
//         >
//           Log in
//         </Button>
//       </Form.Item>
//     </Form>
//   );
// };

// export default Login;






// import React, { useState } from 'react';
// import { Form, Input, Button, Checkbox } from 'antd';
// import { UserOutlined, LockOutlined } from '@ant-design/icons';

// const Login = () => {
//   const [loading, setLoading] = useState(false);

//   const onFinish = async (values) => {
//     setLoading(true);
//     try {
//       // Perform login API call here using fetch
//       // Replace 'YOUR_LOGIN_API_ENDPOINT' with the actual login API endpoint
//       const response = await fetch('YOUR_LOGIN_API_ENDPOINT', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           username: values.username,
//           password: values.password,
//         }),
//       });

//       if (!response.ok) {
//         throw new Error('Login failed.');
//       }

//       // Assuming your API returns a token upon successful login
//       // You can store the token in local storage or cookies for authentication
//       const data = await response.json();
//       const token = data.token;
//       console.log('Token:', token);

//       // For now, just show a success message
//       alert('Login Successful');
//     } catch (error) {
//       console.error('Login failed:', error.message);
//       alert('Login failed. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Form
//       name="login_form"
//       className="login-form"
//       initialValues={{
//         remember: true,
//       }}
//       onFinish={onFinish}
//     >
//       <Form.Item
//         name="username"
//         rules={[
//           {
//             required: true,
//             message: 'Please input your Username!',
//           },
//         ]}
//       >
//         <Input prefix={<UserOutlined />} placeholder="Username" />
//       </Form.Item>
//       <Form.Item
//         name="password"
//         rules={[
//           {
//             required: true,
//             message: 'Please input your Password!',
//           },
//         ]}
//       >
//         <Input
//           prefix={<LockOutlined />}
//           type="password"
//           placeholder="Password"
//         />
//       </Form.Item>
//       <Form.Item>
//         <Form.Item name="remember" valuePropName="checked" noStyle>
//           <Checkbox>Remember me</Checkbox>
//         </Form.Item>
//       </Form.Item>
//       <Form.Item>
//         <Button
//           type="primary"
//           htmlType="submit"
//           className="login-form-button"
//           loading={loading}
//         >
//           Log in
//         </Button>
//       </Form.Item>
//     </Form>
//   );
// };

// export default Login;















// import React, { useState } from 'react';
// import { Form, Input, Button, Checkbox } from 'antd';
// import { UserOutlined, LockOutlined } from '@ant-design/icons';
// import axios from 'axios';

// const Login = () => {
//   const [loading, setLoading] = useState(false);

//   const onFinish = async (values) => {
//     setLoading(true);
//     try {
//       // Perform login API call here using axios or fetch
//       // Replace 'YOUR_LOGIN_API_ENDPOINT' with the actual login API endpoint
//       const response = await axios.post('YOUR_LOGIN_API_ENDPOINT', {
//         username: values.username,
//         password: values.password,
//       });

//       // Assuming your API returns a token upon successful login
//       // You can store the token in local storage or cookies for authentication
//       const token = response.data.token;
//       console.log('Token:', token);

//       // For now, just show a success message
//       alert('Login Successful');
//     } catch (error) {
//       console.error('Login failed:', error.message);
//       alert('Login failed. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Form
//       name="login_form"
//       className="login-form"
//       initialValues={{
//         remember: true,
//       }}
//       onFinish={onFinish}
//     >
//       <Form.Item
//         name="username"
//         rules={[
//           {
//             required: true,
//             message: 'Please input your Username!',
//           },
//         ]}
//       >
//         <Input prefix={<UserOutlined />} placeholder="Username" />
//       </Form.Item>
//       <Form.Item
//         name="password"
//         rules={[
//           {
//             required: true,
//             message: 'Please input your Password!',
//           },
//         ]}
//       >
//         <Input
//           prefix={<LockOutlined />}
//           type="password"
//           placeholder="Password"
//         />
//       </Form.Item>
//       <Form.Item>
//         <Form.Item name="remember" valuePropName="checked" noStyle>
//           <Checkbox>Remember me</Checkbox>
//         </Form.Item>
//       </Form.Item>
//       <Form.Item>
//         <Button
//           type="primary"
//           htmlType="submit"
//           className="login-form-button"
//           loading={loading}
//         >
//           Log in
//         </Button>
//       </Form.Item>
//     </Form>
//   );
// };

// export default Login;
