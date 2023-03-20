import Navigation from '@/Components/Navigation';
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Dropdown, Space, Button,Typography } from 'antd';

const items = [
  {
    key: '1',
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        2nd menu item (disabled)
      </a>
    ),
    icon: <SmileOutlined />,
    disabled: true,
  },
  {
    key: '3',
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        3rd menu item (disabled)
      </a>
    ),
    disabled: true,
  },
  {
    key: '4',
    danger: true,
    label: 'a danger item',
  },
];

const items1 = [
  {
    key: '1',
    type: 'group',
    label: 'Group title',
    children: [
      {
        key: '1-1',
        label: '1st menu item',
      },
      {
        key: '1-2',
        label: '2nd menu item',
      },
    ],
  },
  {
    key: '2',
    label: 'sub menu',
    children: [
      {
        key: '2-1',
        label: '3rd menu item',
      },
      {
        key: '2-2',
        label: '4th menu item',
      },
    ],
  },
  {
    key: '3',
    label: 'disabled sub menu',
    disabled: true,
    children: [
      {
        key: '3-1',
        label: '5d menu item',
      },
      {
        key: '3-2',
        label: '6th menu item',
      },
    ],
  },
];

const onClick = ({ key }) => {
  message.info(`Click on item ${key}`);
};
export default function Drop_down() {
  return (
    <>
      <div className="container">
        <Navigation />

        <div className="dropdownContainer">
          <div className="dropdownExample1">
            <Dropdown
              menu={{
                items,
              }}
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  Hover me
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
          </div>

          <div className="dropdownExample2">
            <Space>
              <Dropdown
                menu={{
                  items,
                }}
                placement="bottomLeft"
                arrow
              >
                <Button>bottomLeft</Button>
              </Dropdown>
              <Dropdown
                menu={{
                  items,
                }}
                placement="bottom"
                arrow
              >
                <Button>bottom</Button>
              </Dropdown>
              <Dropdown
                menu={{
                  items,
                }}
                placement="bottomRight"
                arrow
              >
                <Button>bottomRight</Button>
              </Dropdown>
              <br />
              <Dropdown
                menu={{
                  items,
                }}
                placement="topLeft"
                arrow
              >
                <Button>topLeft</Button>
              </Dropdown>
              <Dropdown
                menu={{
                  items,
                }}
                placement="top"
                arrow
              >
                <Button>top</Button>
              </Dropdown>
              <Dropdown
                menu={{
                  items,
                }}
                placement="topRight"
                arrow
              >
                <Button>topRight</Button>
              </Dropdown>
            </Space>
          </div>

          <div className="dropdownExample3">
            <Dropdown
              menu={{
                items,
                onClick,
              }}
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  Hover me, Click menu item
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
          </div>

          <div className="dropdownExample4">
            <Dropdown
              menu={{
                items,
              }}
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  Cascading menu
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
          </div>

          <div className="dropdownExample5">
            <Dropdown
              menu={{
                items,
                selectable: true,
                defaultSelectedKeys: ['3'],
              }}
            >
              <Typography.Link>
                <Space>
                  Selectable
                  <DownOutlined />
                </Space>
              </Typography.Link>
            </Dropdown>
          </div>
        </div>
      </div>
    </>
  );
}
