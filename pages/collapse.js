import Navigation from '@/Components/Navigation';
import { Collapse } from 'antd';
const { Panel } = Collapse;
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const Colla_pse = () => {
  return (
    <>
      <div className="container">
        <Navigation></Navigation>
        <div className="collapseContainer">
          <div className="collapseExample1">
            <Collapse defaultActiveKey={['3']}>
              <Panel header="This is panel header 1" key="1">
                <p>{text}</p>
              </Panel>
              <Panel header="This is panel header 2" key="2">
                <p>{text}</p>
              </Panel>
              <Panel header="This is panel header 3" key="3">
                <p>{text}</p>
              </Panel>
            </Collapse>
          </div>

          <div className="collapseExample2">
            <Collapse size="small" defaultActiveKey={['1']}>
              <Panel header="This is small size panel" key="1">
                <p>{text}</p>
              </Panel>
            </Collapse>
            <Collapse defaultActiveKey={['1']}>
              <Panel header="This is default size panel" key="1">
                <p>{text}</p>
              </Panel>
            </Collapse>
            <Collapse size="large" defaultActiveKey={['1']}>
              <Panel header="This is large size panel" key="1">
                <p>{text}</p>
              </Panel>
            </Collapse>
          </div>

          <div className="collapseExample3">
            <Collapse accordion bordered={false}>
              <Panel header="This is panel header 1" key="1">
                <p>{text}</p>
              </Panel>
              <Panel header="This is panel header 2" key="2">
                <p>{text}</p>
              </Panel>
              <Panel header="This is panel header 3" key="3">
                <p>{text}</p>
              </Panel>
            </Collapse>
          </div>

          <div className="collapseExample4">
            <Collapse>
              <Panel header="This is panel header 1" key="1">
                <Collapse defaultActiveKey="1">
                  <Panel header="This is panel nest panel" key="1">
                    <p>{text}</p>
                  </Panel>
                </Collapse>
              </Panel>
              <Panel header="This is panel header 2" key="2">
                <p>{text}</p>
              </Panel>
              <Panel header="This is panel header 3" key="3">
                <p>{text}</p>
              </Panel>
            </Collapse>
          </div>

          <div className="collapseExample5">
            <Collapse defaultActiveKey={['1']} expandIconPosition='end'>
              <Panel header="This is panel header with arrow icon" key="1">
                <p>{text}</p>
              </Panel>
              <Panel
                showArrow={false}
                header="This is panel header with no arrow icon"
                key="2"
              >
                <p>{text}</p>
              </Panel>
            </Collapse>
          </div>
        </div>
      </div>
    </>
  );
};

export default Colla_pse;
