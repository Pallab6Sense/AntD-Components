/* eslint-disable @next/next/no-img-element */
import Navigation from '@/Components/Navigation';
import { UserOutlined, AntDesignOutlined } from '@ant-design/icons';
import { Avatar, Space, Badge, Divider, Tooltip } from 'antd';
import Image from 'next/image';

const url =
  'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg';

const Ava_tar = () => {
  return (
    <>
      <div className="container">
        <Navigation></Navigation>

        <div className="avatarContainer">
          <div className="avatarExample1">
            <Space direction="vertical" size={16}>
              <Space wrap size={16}>
                <Avatar size={64} icon={<UserOutlined />} />
                <Avatar size="large" icon={<UserOutlined />} />
                <Avatar icon={<UserOutlined />} />
                <Avatar size="small" icon={<UserOutlined />} />
              </Space>
              <Space wrap size={16}>
                <Avatar shape="square" size={64} icon={<UserOutlined />} />
                <Avatar shape="square" size="large" icon={<UserOutlined />} />
                <Avatar shape="square" icon={<UserOutlined />} />
                <Avatar shape="square" size="small" icon={<UserOutlined />} />
              </Space>
            </Space>
          </div>

          <div className="avatarExample2">
            <Space size={16} wrap>
              <Avatar icon={<UserOutlined />} />
              <Avatar>U</Avatar>
              <Avatar size={40}>USER</Avatar>
              <Avatar src={url} />
              <Avatar
                src={<Image src={url} width={200} height={200} alt="avatar" />}
              />
              <Avatar
                style={{
                  backgroundColor: '#fde3cf',
                  color: '#f56a00',
                }}
              >
                U
              </Avatar>
              <Avatar
                style={{
                  backgroundColor: '#87d068',
                }}
                icon={<UserOutlined />}
              />
            </Space>
          </div>

          <div className="avatarExample3">
            <Space size={24}>
              <Badge count={1}>
                <Avatar shape="square" icon={<UserOutlined />} />
              </Badge>
              <Badge dot>
                <Avatar shape="square" icon={<UserOutlined />} />
              </Badge>
            </Space>
          </div>

          <div className="avatarExample4">
            <Avatar
              size={{
                xs: 24,
                sm: 32,
                md: 40,
                lg: 64,
                xl: 80,
                xxl: 100,
              }}
              icon={<AntDesignOutlined />}
            />
          </div>

          <div className="avatarExample5">
            <Avatar.Group>
              <Avatar src="https://joesch.moe/api/v1/random?key=1" />
              <a href="https://ant.design">
                <Avatar
                  style={{
                    backgroundColor: '#f56a00',
                  }}
                >
                  K
                </Avatar>
              </a>
              <Tooltip title="Ant User" placement="top">
                <Avatar
                  style={{
                    backgroundColor: '#87d068',
                  }}
                  icon={<UserOutlined />}
                />
              </Tooltip>
              <Avatar
                style={{
                  backgroundColor: '#1890ff',
                }}
                icon={<AntDesignOutlined />}
              />
            </Avatar.Group>
            <Divider />
            <Avatar.Group
              maxCount={2}
              maxStyle={{
                color: '#f56a00',
                backgroundColor: '#fde3cf',
              }}
            >
              <Avatar src="https://joesch.moe/api/v1/random?key=2" />
              <Avatar
                style={{
                  backgroundColor: '#f56a00',
                }}
              >
                K
              </Avatar>
              <Tooltip title="Ant User" placement="top">
                <Avatar
                  style={{
                    backgroundColor: '#87d068',
                  }}
                  icon={<UserOutlined />}
                />
              </Tooltip>
              <Avatar
                style={{
                  backgroundColor: '#1890ff',
                }}
                icon={<AntDesignOutlined />}
              />
            </Avatar.Group>
            <Divider />
            <Avatar.Group
              maxCount={2}
              size="large"
              maxStyle={{
                color: '#f56a00',
                backgroundColor: '#fde3cf',
              }}
            >
              <Avatar src="https://joesch.moe/api/v1/random?key=3" />
              <Avatar
                style={{
                  backgroundColor: '#f56a00',
                }}
              >
                K
              </Avatar>
              <Tooltip title="Ant User" placement="top">
                <Avatar
                  style={{
                    backgroundColor: '#87d068',
                  }}
                  icon={<UserOutlined />}
                />
              </Tooltip>
              <Avatar
                style={{
                  backgroundColor: '#1890ff',
                }}
                icon={<AntDesignOutlined />}
              />
            </Avatar.Group>
            <Divider />
            <Avatar.Group
              maxCount={2}
              maxPopoverTrigger="click"
              size="large"
              maxStyle={{
                color: '#f56a00',
                backgroundColor: '#fde3cf',
                cursor: 'pointer',
              }}
            >
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              <Avatar
                style={{
                  backgroundColor: '#f56a00',
                }}
              >
                K
              </Avatar>
              <Tooltip title="Ant User" placement="top">
                <Avatar
                  style={{
                    backgroundColor: '#87d068',
                  }}
                  icon={<UserOutlined />}
                />
              </Tooltip>
              <Avatar
                style={{
                  backgroundColor: '#1890ff',
                }}
                icon={<AntDesignOutlined />}
              />
            </Avatar.Group>
          </div>

          
        </div>
      </div>
    </>
  );
};

export default Ava_tar;
