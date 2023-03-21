import Navigation from '@/Components/Navigation';
import {
  Empty,
  Button,
  Cascader,
  ConfigProvider,
  Divider,
  List,
  Select,
  Space,
  Switch,
  Table,
  Transfer,
  TreeSelect,
} from 'antd';
import { useState } from 'react';
import { SmileOutlined } from '@ant-design/icons';

const customizeRenderEmpty = () => (
  <div
    style={{
      textAlign: 'center',
    }}
  >
    <SmileOutlined
      style={{
        fontSize: 20,
      }}
    />
    <p>Data Not Found</p>
  </div>
);
const style = {
  width: 200,
};

const Emp_ty = () => {
    const [customize, setCustomize] = useState(true);

  return (
    <>
      <div className="container">
        <Navigation></Navigation>

        <div className="emptyContainer">
          <div className="emptyExample1">
            <Empty />
          </div>

          <div className="emptyExample2">
            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
          </div>

          <div className="emptyExample3">
            <Empty
              image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
              imageStyle={{
                height: 60,
              }}
              description={
                <span>
                  Customize <a href="#API">Description</a>
                </span>
              }
            >
              <Button type="primary">Create Now</Button>
            </Empty>
          </div>

          <div className="emptyExample4">
          <Switch
        unCheckedChildren="default"
        checkedChildren="customize"
        checked={customize}
        onChange={setCustomize}
      />
      <Divider />
      <ConfigProvider renderEmpty={customize ? customizeRenderEmpty : undefined}>
        <Space
          direction="vertical"
          style={{
            width: '100%',
          }}
        >
          <h4>Select</h4>
          <Select style={style} />
          <h4>TreeSelect</h4>
          <TreeSelect style={style} treeData={[]} />
          <h4>Cascader</h4>
          <Cascader style={style} options={[]} showSearch />
          <h4>Transfer</h4>
          <Transfer />
          <h4>Table</h4>
          <Table
            style={{
              marginTop: 8,
            }}
            columns={[
              {
                title: 'Name',
                dataIndex: 'name',
                key: 'name',
              },
              {
                title: 'Age',
                dataIndex: 'age',
                key: 'age',
              },
            ]}
          />
          <h4>List</h4>
          <List />
        </Space>
      </ConfigProvider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Emp_ty;
