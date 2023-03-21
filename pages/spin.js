import Navigation from '@/Components/Navigation';
import { Space, Spin, Alert, Switch } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { useState } from 'react';
const antIcon = (
  <LoadingOutlined
    style={{
      fontSize: 24,
    }}
    spin
  />
);
const Sp_in = () => {
  const [loading, setLoading] = useState(false);
  const toggle = (checked) => {
    setLoading(checked);
  };
  const container = (
    <Alert
      message="Alert message title"
      description="Further details about the context of this alert."
      type="info"
    />
  );
  return (
    <div className="container">
      <Navigation></Navigation>
      <div className="spinContainer">
        <div className="spinExample1">
          <Space size="middle">
            <Spin size="small" />
            <Spin />
            <Spin size="large" />
          </Space>
        </div>

        <div className="spinExample2">
          <Space
            direction="vertical"
            style={{
              width: '100%',
            }}
          >
            <Space>
              <Spin tip="Loading" size="small">
                <div className="content" />
              </Spin>
              <Spin tip="Loading">
                <div className="content" />
              </Spin>
              <Spin tip="Loading" size="large">
                <div className="content" />
              </Spin>
            </Space>

            <Spin tip="Loading...">
              <Alert
                message="Alert message title"
                description="Further details about the context of this alert."
                type="info"
              />
            </Spin>
          </Space>
        </div>

        <div className="spinExample3">
          <Spin indicator={antIcon} />
        </div>

        <div className="spinExample4">
          <div>
            <Spin spinning={loading} delay={500}>
              {container}
            </Spin>
            <div
              style={{
                marginTop: 16,
              }}
            >
              Loading state：
              <Switch checked={loading} onChange={toggle} />
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Sp_in;
