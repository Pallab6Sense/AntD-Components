import Navigation from '@/Components/Navigation';
import { Breadcrumb } from 'antd';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';

const menuItems = [
  {
    key: '1',
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.alipay.com/"
      >
        General
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.taobao.com/"
      >
        Layout
      </a>
    ),
  },
  {
    key: '3',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        Navigation
      </a>
    ),
  },
];

export default function Bread_crumb() {
  return (
    <>
      <div className="container">
        <Navigation />

        <div className="breadCrumbContainer">
          <div className="breadcrumbExample1">
            <Breadcrumb
              items={[
                {
                  title: 'Home',
                },
                {
                  title: <a href="">Application Center</a>,
                },
                {
                  title: <a href="">Application List</a>,
                },
                {
                  title: 'An Application',
                },
              ]}
            />
          </div>

          <div className="breadCrumbExample2">
            <Breadcrumb
              separator=">"
              items={[
                {
                  href: '',
                  title: <HomeOutlined />,
                },
                {
                  href: '',
                  title: (
                    <>
                      <UserOutlined />
                      <span>Application List</span>
                    </>
                  ),
                },
                {
                  title: 'Application',
                },
              ]}
            />
          </div>

          <div className="breadCrumbExample3">
            <Breadcrumb
              items={[
                {
                  title: 'Ant Design',
                },
                {
                  title: <a href="">Component</a>,
                },
                {
                  title: <a href="">General</a>,
                  menu: {
                    items: menuItems,
                  },
                },
                {
                  title: 'Button',
                },
              ]}
            />
          </div>

          <div className="breadCrumbExample4">
            <Breadcrumb
              separator=""
              items={[
                {
                  title: 'Location',
                },
                {
                  type: 'separator',
                  separator: ':',
                },
                {
                  href: '',
                  title: 'Application Center',
                },
                {
                  type: 'separator',
                  separator: '>',
                },
                {
                  href: '',
                  title: 'Application List',
                },
                {
                  type: 'separator',
                },
                {
                  title: 'An Application',
                },
              ]}
            />
          </div>
          
        </div>
      </div>
    </>
  );
}
