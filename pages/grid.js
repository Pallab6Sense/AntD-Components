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

          <div className="gridExample5">
            <Divider orientation="left">Align Top</Divider>

            <Row justify="center" align="top">
              <Col className="bg-blue" span={4}>
                <div style={{ height: '100px' }}>col-4</div>
              </Col>
              <Col className="bg-blue1" span={4}>
                <div style={{ height: '50px' }}>col-4</div>
              </Col>
              <Col className="bg-blue" span={4}>
                <div style={{ height: '120px' }}>col-4</div>
              </Col>
              <Col className="bg-blue1" span={4}>
                <div style={{ height: '80px' }}>col-4</div>
              </Col>
            </Row>
            <Divider orientation="left">Align middle</Divider>

            <Row justify="space-around" align="middle">
              <Col className="bg-blue" span={4}>
                <div style={{ height: '100px' }}>col-4</div>
              </Col>
              <Col className="bg-blue1" span={4}>
                <div style={{ height: '50px' }}>col-4</div>
              </Col>
              <Col className="bg-blue" span={4}>
                <div style={{ height: '120px' }}>col-4</div>
              </Col>
              <Col className="bg-blue1" span={4}>
                <div style={{ height: '80px' }}>col-4</div>
              </Col>
            </Row>
            <Divider orientation="left">Align Bottom</Divider>

            <Row justify="space-between" align="bottom">
              <Col className="bg-blue" span={4}>
                <div style={{ height: '100px' }}>col-4</div>
              </Col>
              <Col className="bg-blue1" span={4}>
                <div style={{ height: '50px' }}>col-4</div>
              </Col>
              <Col className="bg-blue" span={4}>
                <div style={{ height: '120px' }}>col-4</div>
              </Col>
              <Col className="bg-blue1" span={4}>
                <div style={{ height: '80px' }}>col-4</div>
              </Col>
            </Row>
          </div>

          <div className="gridExample6">
            <Divider orientation="left">Normal</Divider>
            <Row>
              <Col span={6} order={4} className="bg-blue">
                1 col-order-4
              </Col>
              <Col span={6} order={3} className="bg-blue1">
                2 col-order-3
              </Col>
              <Col span={6} order={2} className="bg-blue">
                3 col-order-2
              </Col>
              <Col span={6} order={1} className="bg-blue1">
                4 col-order-1
              </Col>
            </Row>
            <Divider orientation="left">Responsive</Divider>
            <Row>
              <Col
                span={6}
                xs={{
                  order: 1,
                }}
                sm={{
                  order: 2,
                }}
                md={{
                  order: 3,
                }}
                lg={{
                  order: 4,
                }}
                className="bg-blue"
              >
                1 col-order-responsive
              </Col>
              <Col
                span={6}
                xs={{
                  order: 2,
                }}
                sm={{
                  order: 1,
                }}
                md={{
                  order: 4,
                }}
                lg={{
                  order: 3,
                }}
                className="bg-blue1"
              >
                2 col-order-responsive
              </Col>
              <Col
                span={6}
                xs={{
                  order: 3,
                }}
                sm={{
                  order: 4,
                }}
                md={{
                  order: 2,
                }}
                lg={{
                  order: 1,
                }}
                className="bg-blue"
              >
                3 col-order-responsive
              </Col>
              <Col
                span={6}
                xs={{
                  order: 4,
                }}
                sm={{
                  order: 3,
                }}
                md={{
                  order: 1,
                }}
                lg={{
                  order: 2,
                }}
                className="bg-blue1"
              >
                4 col-order-responsive
              </Col>
            </Row>
          </div>

          <div className="gridExample7">
            <Divider orientation="left">Percentage columns</Divider>
            <Row>
              <Col flex={2} className='bg-green'>2 / 5</Col>
              <Col flex={3} className='bg-green1'>3 / 5</Col>
            </Row>
            <Divider orientation="left">Fill rest</Divider>
            <Row>
              <Col flex="100px" className='bg-green'>100px</Col>
              <Col flex="auto" className='bg-green1'>Fill Rest</Col>
            </Row>
            <Divider orientation="left">Raw flex style</Divider>
            <Row>
              <Col flex="1 1 200px" className='bg-green'>1 1 200px</Col>
              <Col flex="0 1 300px" className='bg-green1'>0 1 300px</Col>
            </Row>

            <Row wrap={false}>
              <Col flex="none" className='bg-green'>
                <div
                  style={{
                    padding: '0 16px',
                  }}
                >
                  none
                </div>
              </Col>
              <Col flex="auto" className='bg-green1'>auto with no-wrap</Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
};

export default Grid;
