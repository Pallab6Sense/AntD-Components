import Navigation from '@/Components/Navigation';
import { Button, Drawer, Avatar, Col, Divider, List, Row } from 'antd';
import { useState } from 'react';

const DescriptionItem = ({ title, content }) => (
  <div className="site-description-item-profile-wrapper">
    <p className="site-description-item-profile-p-label">{title}:</p>
    {content}
  </div>
);

const Dra_wer = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const [open1, setOpen1] = useState(false);
  const showDrawer1 = () => {
    setOpen(true);
  };
  const onClose1 = () => {
    setOpen(false);
  };

  const [open2, setOpen2] = useState(false);
  const [childrenDrawer, setChildrenDrawer] = useState(false);
  const showDrawer2 = () => {
    setOpen(true);
  };
  const onClose2 = () => {
    setOpen(false);
  };
  const showChildrenDrawer = () => {
    setChildrenDrawer(true);
  };
  const onChildrenDrawerClose = () => {
    setChildrenDrawer(false);
  };

  return (
    <>
      <div className="container">
        <Navigation></Navigation>

        <div className="drawerContainer">
          <div className="drawerExample1">
            <Button type="primary" onClick={showDrawer}>
              Open
            </Button>
            <Drawer
              title="Basic Drawer"
              placement="right"
              onClose={onClose}
              open={open}
            >
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </Drawer>
          </div>

          <div className="drawerExample2">
            <List
              dataSource={[
                {
                  id: 1,
                  name: 'Lily',
                },
                {
                  id: 2,
                  name: 'Lily',
                },
              ]}
              bordered
              renderItem={(item) => (
                <List.Item
                  key={item.id}
                  actions={[
                    <a onClick={showDrawer1} key={`a-${item.id}`}>
                      View Profile
                    </a>,
                  ]}
                >
                  <List.Item.Meta
                    avatar={
                      <Avatar src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png" />
                    }
                    title={
                      <a href="https://ant.design/index-cn">{item.name}</a>
                    }
                    description="Progresser XTech"
                  />
                </List.Item>
              )}
            />
            <Drawer
              width={640}
              placement="right"
              closable={false}
              onClose={onClose1}
              open={open}
            >
              <p
                className="site-description-item-profile-p"
                style={{
                  marginBottom: 24,
                }}
              >
                User Profile
              </p>
              <p className="site-description-item-profile-p">Personal</p>
              <Row>
                <Col span={12}>
                  <DescriptionItem title="Full Name" content="Lily" />
                </Col>
                <Col span={12}>
                  <DescriptionItem
                    title="Account"
                    content="AntDesign@example.com"
                  />
                </Col>
              </Row>
              <Row>
                <Col span={12}>
                  <DescriptionItem title="City" content="HangZhou" />
                </Col>
                <Col span={12}>
                  <DescriptionItem title="Country" content="China🇨🇳" />
                </Col>
              </Row>
              <Row>
                <Col span={12}>
                  <DescriptionItem title="Birthday" content="February 2,1900" />
                </Col>
                <Col span={12}>
                  <DescriptionItem title="Website" content="-" />
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <DescriptionItem
                    title="Message"
                    content="Make things as simple as possible but no simpler."
                  />
                </Col>
              </Row>
              <Divider />
              <p className="site-description-item-profile-p">Company</p>
              <Row>
                <Col span={12}>
                  <DescriptionItem title="Position" content="Programmer" />
                </Col>
                <Col span={12}>
                  <DescriptionItem title="Responsibilities" content="Coding" />
                </Col>
              </Row>
              <Row>
                <Col span={12}>
                  <DescriptionItem title="Department" content="XTech" />
                </Col>
                <Col span={12}>
                  <DescriptionItem title="Supervisor" content={<a>Lin</a>} />
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <DescriptionItem
                    title="Skills"
                    content="C / C + +, data structures, software engineering, operating systems, computer networks, databases, compiler theory, computer architecture, Microcomputer Principle and Interface Technology, Computer English, Java, ASP, etc."
                  />
                </Col>
              </Row>
              <Divider />
              <p className="site-description-item-profile-p">Contacts</p>
              <Row>
                <Col span={12}>
                  <DescriptionItem
                    title="Email"
                    content="AntDesign@example.com"
                  />
                </Col>
                <Col span={12}>
                  <DescriptionItem
                    title="Phone Number"
                    content="+86 181 0000 0000"
                  />
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <DescriptionItem
                    title="Github"
                    content={
                      <a href="http://github.com/ant-design/ant-design/">
                        github.com/ant-design/ant-design/
                      </a>
                    }
                  />
                </Col>
              </Row>
            </Drawer>
          </div>

          <div className="drawerExample3">
            <Button type="primary" onClick={showDrawer2}>
              Open drawer
            </Button>
            <Drawer
              title="Multi-level drawer"
              width={520}
              closable={false}
              onClose={onClose2}
              open={open2}
            >
              <Button type="primary" onClick={showChildrenDrawer}>
                Two-level drawer
              </Button>
              <Drawer
                title="Two-level Drawer"
                width={320}
                closable={false}
                onClose={onChildrenDrawerClose}
                open={childrenDrawer}
              >
                This is two-level drawer
              </Drawer>
            </Drawer>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dra_wer;