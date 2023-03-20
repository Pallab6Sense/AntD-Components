import Navigation from '@/Components/Navigation';
import { Radio, Button, Space, Input } from 'antd';
import { useState } from 'react';
const plainOptions = ['Apple', 'Pear', 'Orange'];
const options = [
  {
    label: 'Apple',
    value: 'Apple',
  },
  {
    label: 'Pear',
    value: 'Pear',
  },
  {
    label: 'Orange',
    value: 'Orange',
  },
];
const optionsWithDisabled = [
  {
    label: 'Apple',
    value: 'Apple',
  },
  {
    label: 'Pear',
    value: 'Pear',
  },
  {
    label: 'Orange',
    value: 'Orange',
    disabled: true,
  },
];
export default function Ra_dio() {
  const [value, setValue] = useState(1);
  const onChange = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  const [value1, setValue1] = useState('Apple');
  const [value2, setValue2] = useState('Apple');
  const [value3, setValue3] = useState('Apple');
  const [value4, setValue4] = useState('Apple');
  const onChange1 = ({ target: { value } }) => {
    console.log('radio1 checked', value);
    setValue1(value);
  };
  const onChange2 = ({ target: { value } }) => {
    console.log('radio2 checked', value);
    setValue2(value);
  };
  const onChange3 = ({ target: { value } }) => {
    console.log('radio3 checked', value);
    setValue3(value);
  };
  const onChange4 = ({ target: { value } }) => {
    console.log('radio4 checked', value);
    setValue4(value);
  };

  const [disabled, setDisabled] = useState(true);
  const toggleDisabled = () => {
    setDisabled(!disabled);
  };
  return (
    <>
      <div className="container">
        <Navigation></Navigation>

        <div className="radioContainer">
          <div className="radioExample1">
            <Radio>Radio</Radio>
          </div>

          <div className="radioExample2">
            <Radio.Group onChange={onChange} value={value}>
              <Radio value={1}>A</Radio>
              <Radio value={2}>B</Radio>
              <Radio value={3}>C</Radio>
              <Radio value={4}>D</Radio>
            </Radio.Group>
          </div>

          <div className="radioExample3">
            <Radio.Group
              options={plainOptions}
              onChange={onChange1}
              value={value1}
            />
            <br />
            <Radio.Group
              options={optionsWithDisabled}
              onChange={onChange2}
              value={value2}
            />
            <br />
            <br />
            <Radio.Group
              options={options}
              onChange={onChange3}
              value={value3}
              optionType="button"
            />
            <br />
            <br />
            <Radio.Group
              options={optionsWithDisabled}
              onChange={onChange4}
              value={value4}
              optionType="button"
              buttonStyle="solid"
            />
          </div>

          <div className="radioExample4">
            <Radio.Group defaultValue="a" buttonStyle="solid">
              <Radio.Button value="a">Hangzhou</Radio.Button>
              <Radio.Button value="b">Shanghai</Radio.Button>
              <Radio.Button value="c">Beijing</Radio.Button>
              <Radio.Button value="d">Chengdu</Radio.Button>
            </Radio.Group>
            <Radio.Group
              defaultValue="c"
              buttonStyle="solid"
              style={{
                marginTop: 16,
              }}
            >
              <Radio.Button value="a">Hangzhou</Radio.Button>
              <Radio.Button value="b" disabled>
                Shanghai
              </Radio.Button>
              <Radio.Button value="c">Beijing</Radio.Button>
              <Radio.Button value="d">Chengdu</Radio.Button>
            </Radio.Group>
          </div>

          <div className="radioExample5">
            <Radio defaultChecked={false} disabled={disabled}>
              Disabled
            </Radio>
            <Radio defaultChecked disabled={disabled}>
              Disabled
            </Radio>
            <br />
            <Button
              type="primary"
              onClick={toggleDisabled}
              style={{
                marginTop: 16,
              }}
            >
              Toggle disabled
            </Button>
          </div>

          <div className="radioExample6">
            <Radio.Group onChange={onChange} value={value}>
              <Space direction="vertical">
                <Radio value={1}>Option A</Radio>
                <Radio value={2}>Option B</Radio>
                <Radio value={3}>Option C</Radio>
                <Radio value={4}>
                  More...
                  {value === 4 ? (
                    <Input
                      style={{
                        width: 100,
                        marginLeft: 10,
                      }}
                    />
                  ) : null}
                </Radio>
              </Space>
            </Radio.Group>
          </div>

          <div className="radioExample7">
            <Radio.Group defaultValue="a" size="large">
              <Radio.Button value="a">Hangzhou</Radio.Button>
              <Radio.Button value="b">Shanghai</Radio.Button>
              <Radio.Button value="c">Beijing</Radio.Button>
              <Radio.Button value="d">Chengdu</Radio.Button>
            </Radio.Group>
            <Radio.Group
              defaultValue="a"
              style={{
                marginTop: 16,
              }}
            >
              <Radio.Button value="a">Hangzhou</Radio.Button>
              <Radio.Button value="b">Shanghai</Radio.Button>
              <Radio.Button value="c">Beijing</Radio.Button>
              <Radio.Button value="d">Chengdu</Radio.Button>
            </Radio.Group>
            <Radio.Group
              defaultValue="a"
              size="small"
              style={{
                marginTop: 16,
              }}
            >
              <Radio.Button value="a">Hangzhou</Radio.Button>
              <Radio.Button value="b">Shanghai</Radio.Button>
              <Radio.Button value="c">Beijing</Radio.Button>
              <Radio.Button value="d">Chengdu</Radio.Button>
            </Radio.Group>
          </div>
        </div>
      </div>
    </>
  );
}
