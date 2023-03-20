import Navigation from '@/Components/Navigation';
import { Input, Space, Button, Select, TextArea, Tooltip } from 'antd';

import { UserOutlined, InfoCircleOutlined,ClockCircleOutlined } from '@ant-design/icons';
import { useState } from 'react';
const { Search } = Input;
const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
  },
];
const onChange = (e) => {
    console.log('Change:', e.target.value);
  };
export default function In_put() {

  return (
    <>
      <div className="container">
        <Navigation></Navigation>

        <div className="inputContainer">
          <div className="inputExample1">
            <Input placeholder="Basic usage" />
          </div>

          <div className="inputExample2">
            <Input
              size="large"
              placeholder="large size"
              prefix={<UserOutlined />}
            />
            <br />
            <br />
            <Input placeholder="default size" prefix={<UserOutlined />} />
            <br />
            <br />
            <Input
              size="small"
              placeholder="small size"
              prefix={<UserOutlined />}
            />
          </div>

          <div className="inputExample3">
            <Space direction="vertical" size="middle">
              <Space.Compact>
                <Input defaultValue="26888888" />
              </Space.Compact>
              <Space.Compact>
                <Input
                  style={{
                    width: '20%',
                  }}
                  defaultValue="0571"
                />
                <Input
                  style={{
                    width: '80%',
                  }}
                  defaultValue="26888888"
                />
              </Space.Compact>
              <Space.Compact>
                <Search
                  addonBefore="https://"
                  placeholder="input search text"
                  allowClear
                />
              </Space.Compact>
              <Space.Compact
                style={{
                  width: '100%',
                }}
              >
                <Input defaultValue="Combine input and button" />
                <Button type="primary">Submit</Button>
              </Space.Compact>
              <Space.Compact>
                <Select defaultValue="Zhejiang" options={options} />
                <Input defaultValue="Xihu District, Hangzhou" />
              </Space.Compact>
            </Space>
          </div>

          <div className="inputExample4">
            <Search placeholder="input search loading default" loading />
            <br />
            <br />
            <Search
              placeholder="input search loading with enterButton"
              loading
              enterButton
            />
            <br />
            <br />
            <Search
              placeholder="input search text"
              enterButton="Search"
              size="large"
              loading
            />
          </div>

          <div className="inputExample5">
            <Input
              placeholder="Enter your username"
              prefix={<UserOutlined className="site-form-item-icon" />}
              suffix={
                <Tooltip title="Extra information">
                  <InfoCircleOutlined
                    style={{
                      color: 'rgba(0,0,0,.45)',
                    }}
                  />
                </Tooltip>
              }
            />
            <br />
            <br />
            <Input prefix="￥" suffix="RMB" />
            <br />
            <br />
            <Input prefix="￥" suffix="RMB" disabled />
          </div>

          <div className="inputExample6">
          <Space
    direction="vertical"
    style={{
      width: '100%',
    }}
  >
    <Input status="error" placeholder="Error" />
    <Input status="warning" placeholder="Warning" />
    <Input status="error" prefix={<ClockCircleOutlined />} placeholder="Error with prefix" />
    <Input status="warning" prefix={<ClockCircleOutlined />} placeholder="Warning with prefix" />
  </Space>
          </div>
        </div>
      </div>
    </>
  );
}
