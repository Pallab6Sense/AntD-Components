import Head from 'next/head';
import Navigation from '@/Components/Navigation';
import { SearchOutlined, PoweroffOutlined } from '@ant-design/icons';
import { DownloadOutlined } from '@ant-design/icons';

import { Button, Space, Tooltip, Divider, Radio, Dropdown } from 'antd';
import { useState } from 'react';
export default function Home() {
  const [size, setSize] = useState('large');

  const [loadings, setLoadings] = useState([]);
  const enterLoading = (index) => {
    setLoadings((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = true;
      return newLoadings;
    });
    setTimeout(() => {
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = false;
        return newLoadings;
      });
    }, 6000);
  };

  const items = [
    {
      key: '1',
      label: '1st item',
    },
    {
      key: '2',
      label: '2nd item',
    },
    {
      key: '3',
      label: '3rd item',
    },
    {
      key: '4',
      label: '4th item',
    },
  ];

  return (
    <>
      <Head>
        <title>Ant Design </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <Navigation></Navigation>
        <div className="btn">
          <div className="btnExample1">
            <Space wrap>
              <Button type="primary">Primary Button</Button>
              <Button>Default Button</Button>
              <Button type="dashed">Dashed Button</Button>
              <Button type="text">Text Button</Button>
              <Button className="link" type="link">
                Link Button
              </Button>
            </Space>
          </div>

          <div className="btnExample2">
            <Space direction="vertical">
              <Space wrap>
                <Tooltip title="search">
                  <Button
                    type="primary"
                    shape="circle"
                    icon={<SearchOutlined />}
                  />
                </Tooltip>
                <Button type="primary" shape="circle">
                  A
                </Button>
                <Button type="primary" icon={<SearchOutlined />}>
                  Search
                </Button>
                <Tooltip title="search">
                  <Button shape="circle" icon={<SearchOutlined />} />
                </Tooltip>
                <Button icon={<SearchOutlined />}>Search</Button>
              </Space>
              <Space wrap>
                <Tooltip title="search">
                  <Button shape="circle" icon={<SearchOutlined />} />
                </Tooltip>
                <Button icon={<SearchOutlined />}>Search</Button>
                <Tooltip title="search">
                  <Button
                    type="dashed"
                    shape="circle"
                    icon={<SearchOutlined />}
                  />
                </Tooltip>
                <Button type="dashed" icon={<SearchOutlined />}>
                  Search
                </Button>
                <Button
                  icon={<SearchOutlined />}
                  href="https://www.google.com"
                />
              </Space>
            </Space>
          </div>

          <div className="btnExample3">
            <Radio.Group value={size} onChange={(e) => setSize(e.target.value)}>
              <Radio.Button value="large">Large</Radio.Button>
              <Radio.Button value="default">Default</Radio.Button>
              <Radio.Button value="small">Small</Radio.Button>
            </Radio.Group>
            <Divider orientation="left" plain>
              Preview
            </Divider>
            <Space direction="vertical">
              <Space wrap>
                <Button type="primary" size={size}>
                  Primary
                </Button>
                <Button size={size}>Default</Button>
                <Button type="dashed" size={size}>
                  Dashed
                </Button>
              </Space>
              <Button type="link" size={size}>
                Link
              </Button>
              <Space wrap>
                <Button
                  type="primary"
                  icon={<DownloadOutlined />}
                  size={size}
                />
                <Button
                  type="primary"
                  shape="circle"
                  icon={<DownloadOutlined />}
                  size={size}
                />
                <Button
                  type="primary"
                  shape="round"
                  icon={<DownloadOutlined />}
                  size={size}
                />
                <Button
                  type="primary"
                  shape="round"
                  icon={<DownloadOutlined />}
                  size={size}
                >
                  Download
                </Button>
                <Button type="primary" icon={<DownloadOutlined />} size={size}>
                  Download
                </Button>
              </Space>
            </Space>
          </div>

          <div className="btnExample4">
            <Space direction="vertical">
              <Space>
                <Button type="primary">Primary</Button>
                <Button type="primary" disabled>
                  Primary(disabled)
                </Button>
              </Space>
              <Space>
                <Button>Default</Button>
                <Button disabled>Default(disabled)</Button>
              </Space>
              <Space>
                <Button type="dashed">Dashed</Button>
                <Button type="dashed" disabled>
                  Dashed(disabled)
                </Button>
              </Space>
              <Space>
                <Button type="text">Text</Button>
                <Button type="text" disabled>
                  Text(disabled)
                </Button>
              </Space>
              <Space>
                <Button type="link">Link</Button>
                <Button type="link" disabled>
                  Link(disabled)
                </Button>
              </Space>
              <Space>
                <Button type="primary" href="https://ant.design/index-cn">
                  Href Primary
                </Button>
                <Button
                  type="primary"
                  href="https://ant.design/index-cn"
                  disabled
                >
                  Href Primary(disabled)
                </Button>
              </Space>
              <Space>
                <Button danger>Danger Default</Button>
                <Button danger disabled>
                  Danger Default(disabled)
                </Button>
              </Space>
              <Space>
                <Button danger type="text">
                  Danger Text
                </Button>
                <Button danger type="text" disabled>
                  Danger Text(disabled)
                </Button>
              </Space>
              <Space>
                <Button type="link" danger>
                  Danger Link
                </Button>
                <Button type="link" danger disabled>
                  Danger Link(disabled)
                </Button>
              </Space>
              <Space className="site-button-ghost-wrapper">
                <Button ghost>Ghost</Button>
                <Button ghost disabled>
                  Ghost(disabled)
                </Button>
              </Space>
            </Space>
          </div>

          <div className="btnExample5">
            <Space direction="vertical">
              <Space wrap>
                <Button type="primary" loading>
                  Loading
                </Button>
                <Button type="primary" size="small" loading>
                  Loading
                </Button>
                <Button type="primary" icon={<PoweroffOutlined />} loading />
              </Space>

              <Space wrap>
                <Button
                  type="primary"
                  loading={loadings[0]}
                  onClick={() => enterLoading(0)}
                >
                  Click me!
                </Button>
                <Button
                  type="primary"
                  icon={<PoweroffOutlined />}
                  loading={loadings[1]}
                  onClick={() => enterLoading(1)}
                >
                  Click me!
                </Button>
                <Button
                  type="primary"
                  icon={<PoweroffOutlined />}
                  loading={loadings[2]}
                  onClick={() => enterLoading(2)}
                />
              </Space>
            </Space>
          </div>

          <div className="btnExample6">
            <Space direction="vertical">
              <Button type="primary">primary</Button>
              <Button>secondary</Button>
              <Dropdown.Button
                menu={{
                  items,
                  // onClick: onMenuClick,
                }}
              >
                Actions
              </Dropdown.Button>
            </Space>
          </div>

          <div className="btnExample7">
            <Space className="site-button-ghost-wrapper" wrap>
              <Button type="primary" ghost>
                Primary
              </Button>
              <Button ghost>Default</Button>
              <Button type="dashed" ghost>
                Dashed
              </Button>
              <Button type="primary" danger ghost>
                Danger
              </Button>
            </Space>
          </div>

          <div className="btnExample8">
            <Space wrap>
              <Button type="primary" danger>
                Primary
              </Button>
              <Button danger>Default</Button>
              <Button type="dashed" danger>
                Dashed
              </Button>
              <Button type="text" danger>
                Text
              </Button>
              <Button type="link" danger>
                Link
              </Button>
            </Space>
          </div>

          <div className="btnExample9">
            <Space
              direction="vertical"
              style={{
                width: '100%',
              }}
            >
              <Button type="primary" block>
                Primary
              </Button>
              <Button block>Default</Button>
              <Button type="dashed" block>
                Dashed
              </Button>
              <Button disabled block>
                disabled
              </Button>
              <Button type="text" block>
                text
              </Button>
              <Button type="link" block>
                Link
              </Button>
            </Space>
          </div>
        </div>
      </div>
    </>
  );
}
