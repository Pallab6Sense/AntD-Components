import Navigation from '@/Components/Navigation';
import { ClockCircleOutlined, NotificationOutlined } from '@ant-design/icons';
import { Avatar, Badge, Space, Card, Divider } from 'antd';
const colors = [
  'pink',
  'red',
  'yellow',
  'orange',
  'cyan',
  'green',
  'blue',
  'purple',
  'geekblue',
  'magenta',
  'volcano',
  'gold',
  'lime',
];
const Bad_ge = () => {
  return (
    <>
      <div className="container">
        <Navigation></Navigation>

        <div className="badgeContainer">
          <div className="badgeExample1">
            <Space size="middle">
              <Badge count={5}>
                <Avatar shape="square" size="large" />
              </Badge>
              <Badge count={0} showZero>
                <Avatar shape="square" size="large" />
              </Badge>
              <Badge
                count={
                  <ClockCircleOutlined
                    style={{
                      color: '#f5222d',
                    }}
                  />
                }
              >
                <Avatar shape="circle" size="large" />
              </Badge>
            </Space>
          </div>

          <div className="badgeExample2">
            <Space size="large">
              <Badge count={99}>
                <Avatar shape="square" size="large" />
              </Badge>
              <Badge count={100}>
                <Avatar shape="square" size="large" />
              </Badge>
              <Badge count={99} overflowCount={10}>
                <Avatar shape="square" size="large" />
              </Badge>
              <Badge count={1000} overflowCount={999}>
                <Avatar shape="square" size="large" />
              </Badge>
            </Space>
          </div>

          <div className="badgeExample3">
            <Badge count={5} offset={[5, 10]}>
              <Avatar shape="square" size="large" />
            </Badge>
          </div>

          <div className="badgeExample4">
            <Space>
              <Badge status="success" />
              <Badge status="error" />
              <Badge status="default" />
              <Badge status="processing" />
              <Badge status="warning" />
            </Space>
            <br />
            <br />
            <Space direction="vertical">
              <Badge status="success" text="Success" />
              <Badge status="error" text="Error" />
              <Badge status="default" text="Default" />
              <Badge status="processing" text="Processing" />
              <Badge status="warning" text="Warning" />
            </Space>
          </div>

          <div className="badgeExample5">
            <Space
              direction="vertical"
              size="middle"
              style={{
                width: '100%',
              }}
            >
              <Badge.Ribbon text="Pallab">
                <Card title="Pushes open the window" size="small">
                  and raises the spyglass.
                </Card>
              </Badge.Ribbon>
              <Badge.Ribbon text="pallab" color="pink">
                <Card title="Pushes open the window" size="small">
                  and raises the spyglass.
                </Card>
              </Badge.Ribbon>
              <Badge.Ribbon text="pallab" color="red">
                <Card title="Pushes open the window" size="small">
                  and raises the spyglass.
                </Card>
              </Badge.Ribbon>
              <Badge.Ribbon text="pallab" color="cyan">
                <Card title="Pushes open the window" size="small">
                  and raises the spyglass.
                </Card>
              </Badge.Ribbon>
              <Badge.Ribbon text="pallab" color="green">
                <Card title="Pushes open the window" size="small">
                  and raises the spyglass.
                </Card>
              </Badge.Ribbon>
              <Badge.Ribbon text="pallab" color="purple">
                <Card title="Pushes open the window" size="small">
                  and raises the spyglass.
                </Card>
              </Badge.Ribbon>
              <Badge.Ribbon text="pallab" color="volcano">
                <Card title="Pushes open the window" size="small">
                  and raises the spyglass.
                </Card>
              </Badge.Ribbon>
              <Badge.Ribbon text="pallab" color="magenta">
                <Card title="Pushes open the window" size="small">
                  and raises the spyglass.
                </Card>
              </Badge.Ribbon>
            </Space>
          </div>

          <div className="badgeExample6">
            <Space>
              <Badge dot>
                <NotificationOutlined
                  style={{
                    fontSize: 16,
                  }}
                />
              </Badge>
              <Badge dot>
                <a href="https://github.com/Pallab6Sense">Github Link</a>
              </Badge>
            </Space>
          </div>

          <div className="badgeExample7">
            <Space size="middle">
              <Badge size="default" count={5}>
                <Avatar shape="square" size="large" />
              </Badge>
              <Badge size="small" count={5}>
                <Avatar shape="square" size="large" />
              </Badge>
            </Space>
          </div>

          <div className="badgeExample8">
            <Divider orientation="left">Presets</Divider>
            <Space direction="vertical">
              {colors.map((color) => (
                <Badge key={color} color={color} text={color} />
              ))}
            </Space>
            <Divider orientation="left">Custom</Divider>
            <Space direction="vertical">
              <Badge color="#f50" text="#f50" />
              <Badge color="rgb(45, 183, 245)" text="rgb(45, 183, 245)" />
              <Badge color="hsl(102, 53%, 61%)" text="hsl(102, 53%, 61%)" />
              <Badge color="hwb(205 6% 9%)" text="hwb(205 6% 9%)" />
            </Space>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bad_ge;
