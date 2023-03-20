import Navigation from '@/Components/Navigation';
import { DatePicker, Space, Radio } from 'antd';
import dayjs from 'dayjs';
import { useState } from 'react';

const onChange = (date, dateString) => {
  console.log(date, dateString);
};

const { RangePicker } = DatePicker;
// const onChange = (value, dateString) => {
//   console.log('Selected Time: ', value);
//   console.log('Formatted Selected Time: ', dateString);
// };
const onOk = (value) => {
  console.log('onOk: ', value);
};

const onRangeChange = (dates, dateStrings) => {
  if (dates) {
    console.log('From: ', dates[0], ', to: ', dates[1]);
    console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
  } else {
    console.log('Clear');
  }
};
const rangePresets = [
  {
    label: 'Last 7 Days',
    value: [dayjs().add(-7, 'd'), dayjs()],
  },
  {
    label: 'Last 14 Days',
    value: [dayjs().add(-14, 'd'), dayjs()],
  },
  {
    label: 'Last 30 Days',
    value: [dayjs().add(-30, 'd'), dayjs()],
  },
  {
    label: 'Last 90 Days',
    value: [dayjs().add(-90, 'd'), dayjs()],
  },
];

export default function Date_Picker() {
  const [size, setSize] = useState('middle');
  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };
  return (
    <div className="container">
      <Navigation></Navigation>

      <div className="datePickerContainer">
        <div className="dataPickerExample1">
          <Space direction="vertical">
            <DatePicker onChange={onChange} />
            <DatePicker onChange={onChange} picker="week" />
            <DatePicker onChange={onChange} picker="month" />
            <DatePicker onChange={onChange} picker="quarter" />
            <DatePicker onChange={onChange} picker="year" />
          </Space>
        </div>

        <div className="datePickerExample2">
          <Space direction="vertical" size={12}>
            <DatePicker showTime onChange={onChange} onOk={onOk} />
            <RangePicker
              showTime={{
                format: 'HH:mm',
              }}
              format="YYYY-MM-DD HH:mm"
              onChange={onChange}
              onOk={onOk}
            />
          </Space>
        </div>

        <div className="datePickerExample3">
          <Space direction="vertical" size={12}>
            <DatePicker
              presets={[
                {
                  label: 'Yesterday',
                  value: dayjs().add(-1, 'd'),
                },
                {
                  label: 'Last Week',
                  value: dayjs().add(-7, 'd'),
                },
                {
                  label: 'Last Month',
                  value: dayjs().add(-1, 'month'),
                },
              ]}
              onChange={onChange}
            />
            <RangePicker presets={rangePresets} onChange={onRangeChange} />
            <RangePicker
              presets={rangePresets}
              showTime
              format="YYYY/MM/DD HH:mm:ss"
              onChange={onRangeChange}
            />
          </Space>
        </div>

        <div className="datePickerExample4">
          <Space direction="vertical" size={12}>
            <Radio.Group value={size} onChange={handleSizeChange}>
              <Radio.Button value="large">Large</Radio.Button>
              <Radio.Button value="middle">middle</Radio.Button>
              <Radio.Button value="small">Small</Radio.Button>
            </Radio.Group>
            <DatePicker size={size} />
            <DatePicker size={size} picker="month" />
            <RangePicker size={size} />
            <DatePicker size={size} picker="week" />
          </Space>
        </div>

        <div className="datePickerExample5">
          <Space
            direction="vertical"
            style={{
              width: '100%',
            }}
          >
            <DatePicker
              status="error"
              style={{
                width: '100%',
              }}
            />
            <DatePicker
              status="warning"
              style={{
                width: '100%',
              }}
            />
            <DatePicker.RangePicker
              status="error"
              style={{
                width: '100%',
              }}
            />
            <DatePicker.RangePicker
              status="warning"
              style={{
                width: '100%',
              }}
            />
          </Space>
        </div>
      </div>
    </div>
  );
}
