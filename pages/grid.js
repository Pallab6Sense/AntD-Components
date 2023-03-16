import Navigation from '@/Components/Navigation';
import { Col, Row, Divider } from 'antd';
const style = {
  background: '#0092ff',
  padding: '8px 0',
};
const Grid = () => {
  return (
    <>
      <div className="container">
        <Navigation />
        <div className="gridDiv">
          <div className="gridExample1">
            <Row className="bg-blue">
              <Col span={24}>col</Col>
            </Row>
            <Row className="bg-blue">
              <Col span={12}>col-12</Col>
              <Col span={12}>col-12</Col>
            </Row>
            <Row className="bg-blue">
              <Col span={8}>col-8</Col>
              <Col span={8}>col-8</Col>
              <Col span={8}>col-8</Col>
            </Row>
            <Row className="bg-blue">
              <Col span={6}>col-6</Col>
              <Col span={6}>col-6</Col>
              <Col span={6}>col-6</Col>
              <Col span={6}>col-6</Col>
            </Row>
          </div>

          <div className="gridExample2">
            <Divider orientation="left">Horizontal</Divider>
            <Row gutter={16}>
              <Col className="gutter-row" span={6}>
                <div style={style}>col-6</div>
              </Col>
              <Col className="gutter-row" span={6}>
                <div style={style}>col-6</div>
              </Col>
              <Col className="gutter-row" span={6}>
                <div style={style}>col-6</div>
              </Col>
              <Col className="gutter-row" span={6}>
                <div style={style}>col-6</div>
              </Col>
            </Row>
            <Divider orientation="left">Responsive</Divider>
            <Row
              gutter={{
                xs: 8,
                sm: 16,
                md: 24,
                lg: 32,
              }}
            >
              <Col className="gutter-row" span={6}>
                <div style={style}>col-6</div>
              </Col>
              <Col className="gutter-row" span={6}>
                <div style={style}>col-6</div>
              </Col>
              <Col className="gutter-row" span={6}>
                <div style={style}>col-6</div>
              </Col>
              <Col className="gutter-row" span={6}>
                <div style={style}>col-6</div>
              </Col>
            </Row>
            <Divider orientation="left">Vertical</Divider>
            <Row gutter={[16, 24]}>
              <Col className="gutter-row" span={6}>
                <div style={style}>col-6</div>
              </Col>
              <Col className="gutter-row" span={6}>
                <div style={style}>col-6</div>
              </Col>
              <Col className="gutter-row" span={6}>
                <div style={style}>col-6</div>
              </Col>
              <Col className="gutter-row" span={6}>
                <div style={style}>col-6</div>
              </Col>
              <Col className="gutter-row" span={6}>
                <div style={style}>col-6</div>
              </Col>
              <Col className="gutter-row" span={6}>
                <div style={style}>col-6</div>
              </Col>
              <Col className="gutter-row" span={6}>
                <div style={style}>col-6</div>
              </Col>
              <Col className="gutter-row" span={6}>
                <div style={style}>col-6</div>
              </Col>
            </Row>
          </div>

          <div className="gridExample3">
            <Row className="bg-blue">
              <Col span={8}>col-8</Col>
              <Col span={8} offset={8}>
                col-8
              </Col>
            </Row>
            <Row className="bg-blue">
              <Col span={6} offset={6}>
                col-6 col-offset-6
              </Col>
              <Col span={6} offset={6}>
                col-6 col-offset-6
              </Col>
            </Row>
            <Row className="bg-blue">
              <Col span={12} offset={6}>
                col-12 col-offset-6
              </Col>
            </Row>
          </div>

          <div className="gridExample4">
            <Divider orientation="left">sub-element align left</Divider>
            <Row justify="start">
              <Col className="bg-blue" span={4}>
                col-4
              </Col>
              <Col className="bg-blue1" span={4}>
                col-4
              </Col>
              <Col className="bg-blue" span={4}>
                col-4
              </Col>
              <Col className="bg-blue1" span={4}>
                col-4
              </Col>
            </Row>

            <Divider orientation="left">sub-element align center</Divider>
            <Row justify="center" className=".bg-blue">
              <Col className="bg-blue" span={4}>
                col-4
              </Col>
              <Col className="bg-blue1" span={4}>
                col-4
              </Col>
              <Col className="bg-blue" span={4}>
                col-4
              </Col>
              <Col className="bg-blue1" span={4}>
                col-4
              </Col>
            </Row>

            <Divider orientation="left">sub-element align right</Divider>
            <Row justify="end" className=".bg-blue">
              <Col className="bg-blue" span={4}>
                col-4
              </Col>
              <Col className="bg-blue1" span={4}>
                col-4
              </Col>
              <Col className="bg-blue" span={4}>
                col-4
              </Col>
              <Col className="bg-blue1" span={4}>
                col-4
              </Col>
            </Row>

            <Divider orientation="left">
              sub-element monospaced arrangement
            </Divider>
            <Row justify="space-between" className=".bg-blue">
              <Col className="bg-blue" span={4}>
                col-4
              </Col>
              <Col className="bg-blue1" span={4}>
                col-4
              </Col>
              <Col className="bg-blue" span={4}>
                col-4
              </Col>
              <Col className="bg-blue1" span={4}>
                col-4
              </Col>
            </Row>

            <Divider orientation="left">sub-element align full</Divider>
            <Row justify="space-around" className=".bg-blue">
              <Col className="bg-blue" span={4}>
                col-4
              </Col>
              <Col className="bg-blue1" span={4}>
                col-4
              </Col>
              <Col className="bg-blue" span={4}>
                col-4
              </Col>
              <Col className="bg-blue1" span={4}>
                col-4
              </Col>
            </Row>

            <Divider orientation="left">sub-element align evenly</Divider>
            <Row justify="space-evenly" className=".bg-blue">
              <Col className="bg-blue" span={4}>
                col-4
              </Col>
              <Col className="bg-blue1" span={4}>
                col-4
              </Col>
              <Col className="bg-blue" span={4}>
                col-4
              </Col>
              <Col className="bg-blue1" span={4}>
                col-4
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
};

export default Grid;
