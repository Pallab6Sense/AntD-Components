import Navigation from '@/Components/Navigation';
import { Slider, Switch } from 'antd';
import { useState } from 'react';
import { FrownOutlined, SmileOutlined } from '@ant-design/icons';

const IconSlider = (props) => {
  const { max, min } = props;
  const [value, setValue] = useState(0);
  const mid = Number(((max - min) / 2).toFixed(5));
  const preColorCls = value >= mid ? '' : 'icon-wrapper-active';
  const nextColorCls = value >= mid ? 'icon-wrapper-active' : '';
  return (
    <div className="icon-wrapper">
      <FrownOutlined className={preColorCls} />
      <Slider {...props} onChange={setValue} value={value} />
      <SmileOutlined className={nextColorCls} />
    </div>
  );
};

const style = {
  display: 'inline-block',
  height: 300,
  marginLeft: 70,
};
const marks = {
  0: '0°C',
  26: '26°C',
  37: '37°C',
  100: {
    style: {
      color: '#f50',
    },
    label: <strong>100°C</strong>,
  },
};

const Sli_der = () => {
  const [disabled, setDisabled] = useState(false);
  const onChange = (checked) => {
    setDisabled(checked);
  };

  const onChange1 = (value) => {
    console.log('onChange: ', value);
  };
  const onAfterChange = (value) => {
    console.log('onAfterChange: ', value);
  };
  return (
    <div className="container">
      <Navigation></Navigation>
      <div className="sliderContainer">
        <div className="sliderExample1">
          <Slider defaultValue={30} disabled={disabled} />
          <Slider range defaultValue={[20, 50]} disabled={disabled} />
          Disabled:
          <Switch
            size="small"
            checked={disabled}
            onChange={onChange}
            style={{ width: '10px' }}
          />
        </div>

        <div className="sliderExample2">
          <IconSlider min={0} max={20} />
        </div>

        <div className="sliderExample3">
          <Slider
            defaultValue={30}
            onChange={onChange}
            onAfterChange={onAfterChange}
          />
          <Slider
            range
            step={10}
            defaultValue={[20, 50]}
            onChange={onChange1}
            onAfterChange={onAfterChange}
          />
        </div>

        <div className="sliderExample4">
          <div style={style}>
            <Slider vertical defaultValue={30} />
          </div>
          <div style={style}>
            <Slider vertical range step={10} defaultValue={[20, 50]} />
          </div>
          <div style={style}>
            <Slider vertical range marks={marks} defaultValue={[26, 37]} />
          </div>
        </div>

        <div className="sliderExample5">
          <Slider
            range={{
              draggableTrack: true,
            }}
            defaultValue={[20, 50]}
          />
        </div>
      </div>
    </div>
  );
};

export default Sli_der;
