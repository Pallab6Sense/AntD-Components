import Navigation from '@/Components/Navigation';
import { FloatButton } from 'antd';
import {
  QuestionCircleOutlined,
  CustomerServiceOutlined,
} from '@ant-design/icons';

const Float_button = () => {
  return (
    <div className="container">
      <Navigation></Navigation>
      <div className="floatButtonContainer">
        <div className="floatButtonExample1">
          <FloatButton onClick={() => console.log('click')} />
        </div>
        <div className="floatButtonExample2">
          <FloatButton
            icon={<QuestionCircleOutlined />}
            type="primary"
            style={{
              right: 24,
            }}
          />
          <FloatButton
            icon={<QuestionCircleOutlined />}
            type="default"
            style={{
              right: 94,
            }}
          />
        </div>

        <div className="floatButtonExample3">
          <FloatButton
            shape="circle"
            type="primary"
            style={{
              right: 200,
            }}
            icon={<CustomerServiceOutlined />}
          />
          <FloatButton
            shape="square"
            type="primary"
            style={{
              right: 280,
            }}
            icon={<CustomerServiceOutlined />}
          />
        </div>

        <div className="floatButtonExample4">
          <FloatButton
            style={{
              right: 350,
            }}
            tooltip={<div style={{ color: 'white' }}>Documents</div>}
          />
        </div>

        <div className="floatButtonExample5">
          <div
            style={{
              height: '500vh',
              padding: 10,
            }}
          >
            <div>Scroll to bottom</div>
            <div>Scroll to bottom</div>
            <div>Scroll to bottom</div>
            <div>Scroll to bottom</div>
            <div>Scroll to bottom</div>
            <div>Scroll to bottom</div>
            <div>Scroll to bottom</div>
            <FloatButton.BackTop />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Float_button;
