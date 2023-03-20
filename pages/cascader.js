import Navigation from '@/Components/Navigation';
import { Cascader, Space,Radio } from 'antd';
import { useState } from 'react';
const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    // disabled: true,
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];

const displayRender = (labels) => labels[labels.length - 1];

export default function Cas_cader() {
  const onChange = (value) => {
    console.log(value);
  };

  const [placement, SetPlacement] = useState('topLeft');
  const placementChange = (e) => {
    SetPlacement(e.target.value);
  };

  return (
    <>
      <div className="container">
        <Navigation />

        <div className="cascaderContainer">
          <div className="cascaderExample1">
            <Cascader
              options={options}
              onChange={onChange}
              placeholder="Please select"
            />
          </div>

          <div className="cascaderExample2">
            <Cascader
              options={options}
              expandTrigger="hover"
              displayRender={displayRender}
              onChange={onChange}
            />
          </div>

          <div className="cascaderExample3">
            <Cascader
              style={{
                width: '100%',
              }}
              options={options}
              onChange={onChange}
              multiple
              maxTagCount="responsive"
            />
          </div>

          <div className="cascaderExample4">
            <Space direction="vertical">
              <Cascader status="error" placeholder="Error" />
              <Cascader
                status="warning"
                multiple
                placeholder="Warning multiple"
              />
            </Space>
          </div>

          <div className="cascaderExample5">
          <Radio.Group value={placement} onChange={placementChange}>
        <Radio.Button value="topLeft">topLeft</Radio.Button>
        <Radio.Button value="topRight">topRight</Radio.Button>
        <Radio.Button value="bottomLeft">bottomLeft</Radio.Button>
        <Radio.Button value="bottomRight">bottomRight</Radio.Button>
      </Radio.Group>
      <br />
      <br />
      <Cascader options={options} placeholder="Please select" placement={placement} />
          </div>
        </div>
      </div>
    </>
  );
}
