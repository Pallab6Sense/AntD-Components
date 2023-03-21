import Navigation from '@/Components/Navigation';
import { Tooltip, Button, Divider, Space } from 'antd';
const text = <span style={{ color: 'white' }}>Pallab Majumdar</span>;
const buttonWidth = 70;

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
const customColors = ['#f50', '#2db7f5', '#87d068', '#108ee9'];
const Tool_tip = () => {
  return (
    <>
      <div className="container">
        <Navigation></Navigation>

        <div className="tooltipContainer">
          <div className="tooltipExample1">
            <Tooltip title="Pallab Majumdar">
              <span>Tooltip will show on mouse enter.</span>
            </Tooltip>
          </div>

          <div className="tooltipExample2">
            <div
              style={{
                marginLeft: buttonWidth,
                whiteSpace: 'nowrap',
              }}
            >
              <Tooltip placement="topLeft" title={text}>
                <Button>TL</Button>
              </Tooltip>
              <Tooltip placement="top" title={text}>
                <Button>Top</Button>
              </Tooltip>
              <Tooltip placement="topRight" title={text}>
                <Button>TR</Button>
              </Tooltip>
            </div>
            <div
              style={{
                width: buttonWidth,
                float: 'left',
              }}
            >
              <Tooltip placement="leftTop" title={text}>
                <Button>LT</Button>
              </Tooltip>
              <Tooltip placement="left" title={text}>
                <Button>Left</Button>
              </Tooltip>
              <Tooltip placement="leftBottom" title={text}>
                <Button>LB</Button>
              </Tooltip>
            </div>
            <div
              style={{
                width: buttonWidth,
                marginLeft: buttonWidth * 4 + 24,
              }}
            >
              <Tooltip placement="rightTop" title={text}>
                <Button>RT</Button>
              </Tooltip>
              <Tooltip placement="right" title={text}>
                <Button>Right</Button>
              </Tooltip>
              <Tooltip placement="rightBottom" title={text}>
                <Button>RB</Button>
              </Tooltip>
            </div>
            <div
              style={{
                marginLeft: buttonWidth,
                clear: 'both',
                whiteSpace: 'nowrap',
              }}
            >
              <Tooltip placement="bottomLeft" title={text}>
                <Button>BL</Button>
              </Tooltip>
              <Tooltip placement="bottom" title={text}>
                <Button>Bottom</Button>
              </Tooltip>
              <Tooltip placement="bottomRight" title={text}>
                <Button>BR</Button>
              </Tooltip>
            </div>
          </div>

          <div className="tooltipExample3">
            <Divider orientation="left">Presets</Divider>
            <Space wrap>
              {colors.map((color) => (
                <Tooltip title="prompt text" color={color} key={color}>
                  <Button>{color}</Button>
                </Tooltip>
              ))}
            </Space>
            <Divider orientation="left">Custom</Divider>
            <Space wrap>
              {customColors.map((color) => (
                <Tooltip title="prompt text" color={color} key={color}>
                  <Button>{color}</Button>
                </Tooltip>
              ))}
            </Space>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tool_tip;
