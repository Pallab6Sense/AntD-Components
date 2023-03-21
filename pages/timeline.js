import Navigation from '@/Components/Navigation';
import { Timeline, Space, Radio } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import { useState } from 'react';

const Time_line = () => {
  const [mode, setMode] = useState('left');
  const onChange = (e) => {
    setMode(e.target.value);
  };
  return (
    <>
      <div className="container">
        <Navigation></Navigation>

        <div className="timelineContainer">
          <div className="timelineExample1">
            <Space direction="vertical" size="middle">
              <Timeline
                items={[
                  {
                    children: 'Create a services site 2015-09-01',
                  },
                  {
                    children: 'Solve initial network problems 2015-09-01',
                  },
                  {
                    children: 'Technical testing 2015-09-01',
                  },
                  {
                    children: 'Network problems being solved 2015-09-01',
                  },
                ]}
              />
            </Space>
          </div>

          <div className="timelineExample2">
            <Timeline
              items={[
                {
                  color: 'green',
                  children: 'Create a services site 2015-09-01',
                },
                {
                  color: 'green',
                  children: 'Create a services site 2015-09-01',
                },
                {
                  color: 'red',
                  children: (
                    <>
                      <p>Solve initial network problems 1</p>
                      <p>Solve initial network problems 2</p>
                      <p>Solve initial network problems 3 2015-09-01</p>
                    </>
                  ),
                },
                {
                  children: (
                    <>
                      <p>Technical testing 1</p>
                      <p>Technical testing 2</p>
                      <p>Technical testing 3 2015-09-01</p>
                    </>
                  ),
                },
                {
                  color: 'gray',
                  children: (
                    <>
                      <p>Technical testing 1</p>
                      <p>Technical testing 2</p>
                      <p>Technical testing 3 2015-09-01</p>
                    </>
                  ),
                },
                {
                  color: 'gray',
                  children: (
                    <>
                      <p>Technical testing 1</p>
                      <p>Technical testing 2</p>
                      <p>Technical testing 3 2015-09-01</p>
                    </>
                  ),
                },
                {
                  color: '#00CCFF',
                  dot: <SmileOutlined />,
                  children: <p>Custom color testing</p>,
                },
              ]}
            />
          </div>

          <div className="timelineExample3">
            <Radio.Group
              onChange={onChange}
              value={mode}
              style={{
                marginBottom: 20,
              }}
            >
              <Radio value="left">Left</Radio>
              <Radio value="right">Right</Radio>
              <Radio value="alternate">Alternate</Radio>
            </Radio.Group>
            <Timeline
              mode={mode}
              items={[
                {
                  label: '2015-09-01',
                  children: 'Create a services',
                },
                {
                  label: '2015-09-01 09:12:11',
                  children: 'Solve initial network problems',
                },
                {
                  children: 'Technical testing',
                },
                {
                  label: '2015-09-01 09:12:11',
                  children: 'Network problems being solved',
                },
              ]}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Time_line;
