import Navigation from '@/Components/Navigation';
import { Button, Col, Row, Statistic, Card } from 'antd';
import {
  LikeOutlined,
  ArrowDownOutlined,
  ArrowUpOutlined,
} from '@ant-design/icons';
const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30; // Dayjs is also OK
const { Countdown } = Statistic;

// const onFinish = () => {
//   console.log('finished!');
// };
// const onChange = (val) => {
//   if (typeof val === 'number' && 4.95 * 1000 < val && val < 5 * 1000) {
//     console.log('changed!');
//   }
// };
const onFinish = () => {
    console.log('finished!');
  };
  const onChange = (val) => {
    if (typeof val === 'number' && 4.95 * 1000 < val && val < 5 * 1000) {
      console.log('changed!');
    }
  };
const Statas_tic = () => {
  return (
    <>
      <div className="container">
        <Navigation></Navigation>

        <div className="statisticsContainer">
          <div className="statisticsExample1">
            <Row gutter={16}>
              <Col span={12}>
                <Statistic title="Active Users" value={112893} />
              </Col>
              <Col span={12}>
                <Statistic
                  title="Account Balance (CNY)"
                  value={112893}
                  precision={2}
                />
                <Button
                  style={{
                    marginTop: 16,
                  }}
                  type="primary"
                >
                  Recharge
                </Button>
              </Col>
              <Col span={12}>
                <Statistic title="Active Users" value={112893} loading />
              </Col>
            </Row>
          </div>

          <div className="statisticsExample2">
            <Row gutter={16}>
              <Col span={12}>
                <Statistic
                  title="Feedback"
                  value={1128}
                  prefix={<LikeOutlined />}
                />
              </Col>
              <Col span={12}>
                <Statistic title="Unmerged" value={93} suffix="/ 100" />
              </Col>
            </Row>
          </div>

          <div className="statisticsExample3">
            <Row gutter={16}>
              <Col span={12}>
                <Card bordered={false}>
                  <Statistic
                    title="Active"
                    value={11.28}
                    precision={2}
                    valueStyle={{
                      color: '#3f8600',
                    }}
                    prefix={<ArrowUpOutlined />}
                    suffix="%"
                  />
                </Card>
              </Col>
              <Col span={12}>
                <Card bordered={false}>
                  <Statistic
                    title="Idle"
                    value={9.3}
                    precision={2}
                    valueStyle={{
                      color: '#cf1322',
                    }}
                    prefix={<ArrowDownOutlined />}
                    suffix="%"
                  />
                </Card>
              </Col>
            </Row>
          </div>

          <div className="statisticsExample4">
            <Row gutter={16}>
              <Col span={12}>
                <Countdown
                  title="Countdown"
                  value={deadline}
                  onFinish={onFinish}
                />
              </Col>
              <Col span={12}>
                <Countdown
                  title="Million Seconds"
                  value={deadline}
                  format="HH:mm:ss:SSS"
                />
              </Col>
              <Col
                span={24}
                style={{
                  marginTop: 32,
                }}
              >
                <Countdown
                  title="Day Level"
                  value={deadline}
                  format="D 天 H 时 m 分 s 秒"
                />
              </Col>
              <Col span={12}>
                <Countdown
                  title="Countdown"
                  value={Date.now() + 10 * 1000}
                  onChange={onChange}
                />
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
};

export default Statas_tic;
