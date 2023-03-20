import Navigation from '@/Components/Navigation';
import { Checkbox, Button, Row, Col } from 'antd';
import { useState } from 'react';
const onChange = (e) => {
  console.log(`checked = ${e.target.checked}`);
};
export default function CheckBox() {
  const [checked, setChecked] = useState(true);
  const [disabled, setDisabled] = useState(false);
  const toggleChecked = () => {
    setChecked(!checked);
  };
  const toggleDisable = () => {
    setDisabled(!disabled);
  };
  const onChange = (e) => {
    console.log('checked = ', e.target.checked);
    setChecked(e.target.checked);
  };
  const label = `${checked ? 'Checked' : 'Unchecked'}-${
    disabled ? 'Disabled' : 'Enabled'
  }`;

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
      disabled: false,
    },
  ];

  return (
    <>
      <div className="container">
        <Navigation></Navigation>

        <div className="checkBoxContainer">
          <div className="checkBoxExample1">
            <Checkbox onChange={onChange}>Checkbox</Checkbox>
          </div>

          <div className="checkBoxExample2">
            <p
              style={{
                marginBottom: '20px',
              }}
            >
              <Checkbox
                checked={checked}
                disabled={disabled}
                onChange={onChange}
              >
                {label}
              </Checkbox>
            </p>
            <p>
              <Button type="primary" size="small" onClick={toggleChecked}>
                {!checked ? 'Check' : 'Uncheck'}
              </Button>
              <Button
                style={{
                  margin: '0 10px',
                }}
                type="primary"
                size="small"
                onClick={toggleDisable}
              >
                {!disabled ? 'Disable' : 'Enable'}
              </Button>
            </p>
          </div>

          <div className="checkBoxExample3">
            <Checkbox defaultChecked={false} disabled />
            <br />
            <Checkbox indeterminate disabled />
            <br />
            <Checkbox defaultChecked disabled />
          </div>

          <div className="checkBoxExample4">
            <Checkbox.Group
              options={plainOptions}
              defaultValue={['Apple']}
              onChange={onChange}
            />
            <br />
            <br />
            <Checkbox.Group
              options={options}
              defaultValue={['Pear']}
              onChange={onChange}
            />
            <br />
            <br />
            <Checkbox.Group
              options={optionsWithDisabled}
              disabled
              defaultValue={['Apple']}
              onChange={onChange}
            />
          </div>

          <div className="checkBoxExample5">
            <Checkbox.Group
              style={{
                width: '100%',
              }}
              // onChange={onChange}
            >
              <Row>
                <Col span={8}>
                  <Checkbox value="A">A</Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox value="B">B</Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox value="C">C</Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox value="D">D</Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox value="E">E</Checkbox>
                </Col>
              </Row>
            </Checkbox.Group>
          </div>
        </div>
      </div>
    </>
  );
}
