import Navigation from '@/Components/Navigation';
import { AutoComplete, Space } from 'antd';
import { useState } from 'react';
const mockVal = (str, repeat = 1) => ({
  value: str.repeat(repeat),
});
const options = [
  {
    value: 'Burns Bay Road',
  },
  {
    value: 'Downing Street',
  },
  {
    value: 'Wall Street',
  },
];
export default function Auto_Complete() {
  const [value, setValue] = useState('');
  const [options, setOptions] = useState([]);
  const [anotherOptions, setAnotherOptions] = useState([]);
  const getPanelValue = (searchText) =>
    !searchText
      ? []
      : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)];
  const onSelect = (data) => {
    console.log('onSelect', data);
  };
  const onChange = (data) => {
    setValue(data);
  };
  return (
    <>
      <div className="container">
        <Navigation></Navigation>
        <div className="autoCompleteContainer">
          <div className="autoCompleteExample1">
            <AutoComplete
              options={options}
              style={{
                width: 200,
              }}
              onSelect={onSelect}
              onSearch={(text) => setOptions(getPanelValue(text))}
              placeholder="input here"
            />
            <br />
            <br />
            <AutoComplete
              value={value}
              options={anotherOptions}
              style={{
                width: 200,
              }}
              onSelect={onSelect}
              onSearch={(text) => setAnotherOptions(getPanelValue(text))}
              onChange={onChange}
              placeholder="control mode"
            />
          </div>

          <div className="autoCompleteExample2">
            <AutoComplete
              style={{
                width: 200,
              }}
              options={options}
              placeholder="try to type `b`"
              filterOption={(inputValue, option) =>
                option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !==
                -1
              }
            />
          </div>

          <div className="autoCOmpleteExample3">
            <Space
              direction="vertical"
              style={{
                width: '100%',
              }}
            >
              <AutoComplete
                options={options}
                onSearch={(text) => setOptions(getPanelValue(text))}
                status="error"
                style={{
                  width: 200,
                }}
              />
              <AutoComplete
                options={anotherOptions}
                onSearch={(text) => setAnotherOptions(getPanelValue(text))}
                status="warning"
                style={{
                  width: 200,
                }}
              />
            </Space>
          </div>
        </div>
      </div>
    </>
  );
}
