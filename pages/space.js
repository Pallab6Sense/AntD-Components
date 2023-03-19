import Navigation from '@/Components/Navigation';
import {
  UploadOutlined,
  CommentOutlined,
  DownloadOutlined,
  EllipsisOutlined,
  HeartOutlined,
  LikeOutlined,
  MailOutlined,
  MobileOutlined,
  ShareAltOutlined,
  StarOutlined,
  WarningOutlined,
} from '@ant-design/icons';
import {
  Button,
  Popconfirm,
  Space,
  Upload,
  Card,
  Radio,
  Slider,
  Typography,
  Divider,
  Dropdown,
  Menu,
  Tooltip,
} from 'antd';
import { useState } from 'react';
const Sp_ace = () => {
  const [size, setSize] = useState('small');

  const [size1, setSize1] = useState(8);

  return (
    <>
      <div className="container">
        <Navigation />

        <div className="space-container">
          
          <div className="spaceExample1">
            <Space>
              Space
              <Button type="primary">Button</Button>
              <Upload>
                <Button>
                  <UploadOutlined /> Click to Upload
                </Button>
              </Upload>
              <Popconfirm
                title="Are you sure delete this task?"
                okText="Yes"
                cancelText="No"
              >
                <Button>Confirm</Button>
              </Popconfirm>
            </Space>
          </div>

          <div className="spaceExample2">
            <Space
              direction="vertical"
              size="small"
              style={{
                display: 'flex',
              }}
            >
              <Card title="Card" size="small">
                <p>Card content</p>
                <p>Card content</p>
              </Card>
              <Card title="Card" size="small">
                <p>Card content</p>
                <p>Card content</p>
              </Card>
              <Card title="Card" size="small">
                <p>Card content</p>
                <p>Card content</p>
              </Card>
            </Space>
          </div>

          <div className="spaceExample3">
            <Radio.Group value={size} onChange={(e) => setSize(e.target.value)}>
              <Radio value="small">Small</Radio>
              <Radio value="middle">Middle</Radio>
              <Radio value="large">Large</Radio>
            </Radio.Group>
            <br />
            <br />
            <Space size={size}>
              <Button type="primary">Primary</Button>
              <Button>Default</Button>
              <Button type="dashed">Dashed</Button>
              <Button type="link">Link</Button>
            </Space>
          </div>

          <div className="spaceExample4">
            <div className="space-align-container">
              <div className="space-align-block">
                <Space align="center">
                  center
                  <Button type="primary">Primary</Button>
                  <span className="mock-block">Block</span>
                </Space>
              </div>
              <div className="space-align-block">
                <Space align="start">
                  start
                  <Button type="primary">Primary</Button>
                  <span className="mock-block">Block</span>
                </Space>
              </div>
              <div className="space-align-block">
                <Space align="end">
                  end
                  <Button type="primary">Primary</Button>
                  <span className="mock-block">Block</span>
                </Space>
              </div>
              <div className="space-align-block">
                <Space align="baseline">
                  baseline
                  <Button type="primary">Primary</Button>
                  <span className="mock-block">Block</span>
                </Space>
              </div>
            </div>
          </div>

          <div className="spaceExample5">
            <Slider value={size1} onChange={(value) => setSize1(value)} />
            <br />
            <br />
            <Space size={size}>
              <Button type="primary">Primary</Button>
              <Button>Default</Button>
              <Button type="dashed">Dashed</Button>
              <Button type="link">Link</Button>
            </Space>
          </div>

          <div className="spaceExample6">
            <Space size={[8, 16]} wrap>
              {new Array(20).fill(null).map((_, index) => (
                <Button key={index}>Button</Button>
              ))}
            </Space>
          </div>

          <div className="spaceExample7">
            <Space split={<Divider type="vertical" />}>
              <Typography.Link>Link</Typography.Link>
              <Typography.Link>Link</Typography.Link>
              <Typography.Link>Link</Typography.Link>
            </Space>
          </div>

          <div className="spaceExample8">
            <Space.Compact block>
              <Tooltip title="Like">
                <Button icon={<LikeOutlined />} />
              </Tooltip>
              <Tooltip title="Comment">
                <Button icon={<CommentOutlined />} />
              </Tooltip>
              <Tooltip title="Star">
                <Button icon={<StarOutlined />} />
              </Tooltip>
              <Tooltip title="Heart">
                <Button icon={<HeartOutlined />} />
              </Tooltip>
              <Tooltip title="Share">
                <Button icon={<ShareAltOutlined />} />
              </Tooltip>
              <Tooltip title="Download">
                <Button icon={<DownloadOutlined />} />
              </Tooltip>
              <Dropdown
                placement="bottomRight"
                overlay={
                  <Menu
                    items={[
                      {
                        key: '1',
                        label: 'Report',
                        icon: <WarningOutlined />,
                      },
                      {
                        key: '2',
                        label: 'Mail',
                        icon: <MailOutlined />,
                      },
                      {
                        key: '3',
                        label: 'Mobile',
                        icon: <MobileOutlined />,
                      },
                    ]}
                  />
                }
                trigger={['click']}
              >
                <Button icon={<EllipsisOutlined />} />
              </Dropdown>
            </Space.Compact>
            <br />
            <Space.Compact block>
              <Button type="primary">Button 1</Button>
              <Button type="primary">Button 2</Button>
              <Button type="primary">Button 3</Button>
              <Button type="primary">Button 4</Button>
              <Tooltip title="Tooltip">
                <Button type="primary" icon={<DownloadOutlined />} disabled />
              </Tooltip>
              <Tooltip title="Tooltip">
                <Button type="primary" icon={<DownloadOutlined />} />
              </Tooltip>
            </Space.Compact>
            <br />
            <Space.Compact block>
              <Button>Button 1</Button>
              <Button>Button 2</Button>
              <Button>Button 3</Button>
              <Tooltip title="Tooltip">
                <Button icon={<DownloadOutlined />} disabled />
              </Tooltip>
              <Tooltip title="Tooltip">
                <Button icon={<DownloadOutlined />} />
              </Tooltip>
              <Button type="primary">Button 4</Button>
              <Dropdown
                placement="bottomRight"
                overlay={
                  <Menu
                    items={[
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
                    ]}
                  />
                }
                trigger={['click']}
              >
                <Button type="primary" icon={<EllipsisOutlined />} />
              </Dropdown>
            </Space.Compact>
          </div>

          <div className="spaceExample9">
            <Space>
              <Space.Compact direction="vertical">
                <Button>Button 1</Button>
                <Button>Button 2</Button>
                <Button>Button 3</Button>
              </Space.Compact>
              <Space.Compact direction="vertical">
                <Button type="dashed">Button 1</Button>
                <Button type="dashed">Button 2</Button>
                <Button type="dashed">Button 3</Button>
              </Space.Compact>
              <Space.Compact direction="vertical">
                <Button type="primary">Button 1</Button>
                <Button type="primary">Button 2</Button>
                <Button type="primary">Button 3</Button>
              </Space.Compact>
            </Space>
          </div>


        </div>
      </div>
    </>
  );
};

export default Sp_ace;
