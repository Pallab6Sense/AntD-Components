import Navigation from '@/Components/Navigation';
import { Switch, Space, Button } from 'antd';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { useState } from 'react';

const Swi_tch = () => {
  const [disabled, setDisabled] = useState(true);
  const toggle = () => {
    setDisabled(!disabled);
  };
  return (
    <>
      <div className="container">
        <Navigation></Navigation>

        <div className="switchContainer">
          <div className="switchExample1">
            <Switch defaultChecked />
          </div>

          <div className="switchExample2">
            <Space direction="vertical">
              <Switch
                checkedChildren="开启"
                unCheckedChildren="关闭"
                defaultChecked
              />
              <Switch checkedChildren="1" unCheckedChildren="0" />
              <Switch
                checkedChildren={<CheckOutlined />}
                unCheckedChildren={<CloseOutlined />}
                defaultChecked
              />
            </Space>
          </div>

          <div className="switchExample3">
            <Switch loading defaultChecked />
            <br />
            <Switch size="small" loading />
          </div>

          <div className="switchExample4">
            <Space direction="vertical">
              <Switch disabled={disabled} defaultChecked />
              <Button type="primary" onClick={toggle}>
                Toggle disabled
              </Button>
            </Space>
          </div>

          <div className="switchExample5">
            <Switch defaultChecked />
            <br />
            <Switch size="small" defaultChecked />
          </div>
        </div>
      </div>
    </>
  );
};

export default Swi_tch;
