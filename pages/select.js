import Navigation from '@/Components/Navigation';
import { Divider, Input, Select, Space, Button, Radio, Tag } from 'antd';
import { useRef, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';

const options = [];
for (let i = 10; i < 36; i++) {
  options.push({
    label: i.toString(36) + i,
    value: i.toString(36) + i,
  });
}

const OPTIONS = ['Apples', 'Nails', 'Bananas', 'Helicopters'];

const options1 = [
  {
    value: 'gold',
  },
  {
    value: 'lime',
  },
  {
    value: 'green',
  },
  {
    value: 'cyan',
  },
];
const tagRender = (props) => {
  const { label, value, closable, onClose } = props;
  const onPreventMouseDown = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };
  return (
    <Tag
      color={value}
      onMouseDown={onPreventMouseDown}
      closable={closable}
      onClose={onClose}
      style={{
        marginRight: 3,
      }}
    >
      {label}
    </Tag>
  );
};

const Sel_ect = () => {
  const [items, setItems] = useState(['jack', 'lucy']);
  const [name, setName] = useState('');
  const inputRef = useRef(null);

  const addItem = (e) => {
    e.preventDefault();
    setItems([...items, name || `New item ${index++}`]);
    setName('');
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };

  const [size, setSize] = useState('middle');
  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };
  const handleChange = (value) => {
    console.log(`Selected: ${value}`);
  };

  const [selectedItems, setSelectedItems] = useState([]);
  const filteredOptions = OPTIONS.filter((o) => !selectedItems.includes(o));
  return (
    <>
      <div className="container">
        <Navigation></Navigation>

        <div className="selectContainer">
          <div className="selectExample1">
            <Space wrap>
              <Select
                defaultValue="lucy"
                style={{
                  width: 120,
                }}
                // onChange={handleChange}
                options={[
                  {
                    value: 'jack',
                    label: 'Jack',
                  },
                  {
                    value: 'lucy',
                    label: 'Lucy',
                  },
                  {
                    value: 'Yiminghe',
                    label: 'yiminghe',
                  },
                  {
                    value: 'disabled',
                    label: 'Disabled',
                    disabled: true,
                  },
                ]}
              />
              <Select
                defaultValue="lucy"
                style={{
                  width: 120,
                }}
                disabled
                options={[
                  {
                    value: 'lucy',
                    label: 'Lucy',
                  },
                ]}
              />
              <Select
                defaultValue="lucy"
                style={{
                  width: 120,
                }}
                loading
                options={[
                  {
                    value: 'lucy',
                    label: 'Lucy',
                  },
                ]}
              />
              <Select
                defaultValue="lucy"
                style={{
                  width: 120,
                }}
                allowClear
                options={[
                  {
                    value: 'lucy',
                    label: 'Lucy',
                  },
                ]}
              />
            </Space>
          </div>

          <div className="selectExample2">
            <Select
              showSearch
              placeholder="Select a person"
              optionFilterProp="children"
              //   onChange={onChange}
              //   onSearch={onSearch}
              filterOption={(input, option) =>
                (option?.label ?? '')
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
              options={[
                {
                  value: 'jack',
                  label: 'Jack',
                },
                {
                  value: 'lucy',
                  label: 'Lucy',
                },
                {
                  value: 'tom',
                  label: 'Tom',
                },
                {
                  value: 'pallab',
                  label: 'pallab',
                },
              ]}
            />
          </div>

          <div className="selectExample3">
            <Space
              style={{
                width: '100%',
              }}
              direction="vertical"
            >
              <Select
                mode="multiple"
                allowClear
                style={{
                  width: '100%',
                }}
                placeholder="Please select"
                defaultValue={['a10', 'c12']}
                // onChange={handleChange}
                options={options}
              />
              <Select
                mode="multiple"
                disabled
                style={{
                  width: '100%',
                }}
                placeholder="Please select"
                defaultValue={['a10', 'c12']}
                // onChange={handleChange}
                options={options}
              />
            </Space>
          </div>

          <div className="selectExample4">
            <Select
              style={{
                width: 300,
              }}
              placeholder="custom dropdown render"
              dropdownRender={(menu) => (
                <>
                  {menu}
                  <Divider
                    style={{
                      margin: '8px 0',
                    }}
                  />
                  <Space
                    style={{
                      padding: '0 8px 4px',
                    }}
                  >
                    <Input
                      placeholder="Please enter item"
                      ref={inputRef}
                      value={name}
                      //   onChange={onNameChange}
                    />
                    <Button
                      type="text"
                      icon={<PlusOutlined />}
                      onClick={addItem}
                    >
                      Add item
                    </Button>
                  </Space>
                </>
              )}
              options={items.map((item) => ({
                label: item,
                value: item,
              }))}
            />
          </div>

          <div className="selectExample5">
            <Radio.Group value={size} onChange={handleSizeChange}>
              <Radio.Button value="large">Large</Radio.Button>
              <Radio.Button value="middle">Default</Radio.Button>
              <Radio.Button value="small">Small</Radio.Button>
            </Radio.Group>
            <br />
            <br />
            <Space
              direction="vertical"
              style={{
                width: '100%',
              }}
            >
              <Select
                size={size}
                defaultValue="a1"
                onChange={handleChange}
                style={{
                  width: 200,
                }}
                options={options}
              />
              <Select
                mode="multiple"
                size={size}
                placeholder="Please select"
                defaultValue={['a10', 'c12']}
                onChange={handleChange}
                style={{
                  width: '100%',
                }}
                options={options}
              />
              <Select
                mode="tags"
                size={size}
                placeholder="Please select"
                defaultValue={['a10', 'c12']}
                onChange={handleChange}
                style={{
                  width: '100%',
                }}
                options={options}
              />
            </Space>
          </div>

          <div className="selectExample6">
            <Select
              mode="multiple"
              placeholder="Inserted are removed"
              value={selectedItems}
              onChange={setSelectedItems}
              style={{
                width: '100%',
              }}
              options={filteredOptions.map((item) => ({
                value: item,
                label: item,
              }))}
            />
          </div>

          <div className="selectExample7">
            <Select
              mode="multiple"
              showArrow
              tagRender={tagRender}
              defaultValue={['gold', 'cyan']}
              style={{
                width: '100%',
              }}
              options={options1}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sel_ect;
