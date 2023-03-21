/* eslint-disable @next/next/no-img-element */
import Navigation from '@/Components/Navigation';
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from '@ant-design/icons';

import { Card, Space, Col, Row, Avatar } from 'antd';
const { Meta } = Card;
const Ca_rd = () => {
  return (
    <>
      <div className="container">
        <Navigation></Navigation>

        <div className="cardContainer">
          <div className="cardExample1">
            <Space direction="vertical" size={16}>
              <Card
                title="Default size card"
                extra={<a href="#">More</a>}
                style={{ width: 300 }}
              >
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
              <Card
                size="small"
                title="Small size card"
                extra={<a href="#">More</a>}
                style={{ width: 300 }}
              >
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
            </Space>
          </div>

          <div className="cardExample2">
            <Card title="Card title" bordered={false} style={{ width: 300 }}>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </div>

          <div className="cardExample3">
            <Card style={{ width: 300 }}>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </div>

          <div className="cardExample4">
            <Card
              hoverable
              style={{
                width: 240,
              }}
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
          </div>

          <div className="cardExample5">
            <Row gutter={16}>
              <Col span={8}>
                <Card title="Card title" bordered={false}>
                  Card content
                </Card>
              </Col>
              <Col span={8}>
                <Card title="Card title" bordered={false}>
                  Card content
                </Card>
              </Col>
              <Col span={8}>
                <Card title="Card title" bordered={false}>
                  Card content
                </Card>
              </Col>
            </Row>
          </div>

          <div className="cardExample6">
            <Card title="Card title">
              <Card
                type="inner"
                title="Inner Card title"
                extra={<a href="#">More</a>}
              >
                Inner Card content
              </Card>
              <Card
                style={{
                  marginTop: 16,
                }}
                type="inner"
                title="Inner Card title"
                extra={<a href="#">More</a>}
              >
                Inner Card content
              </Card>
            </Card>
          </div>

          <div className="cardExample7">
            <Card
              style={{
                width: 300,
              }}
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
              actions={[
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
              ]}
            >
              <Meta
                avatar={<Avatar src="https://joesch.moe/api/v1/random" />}
                title="Card title"
                description="This is the description"
              />
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ca_rd;
