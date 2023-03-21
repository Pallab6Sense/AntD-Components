import Navigation from '@/Components/Navigation';
import { Progress, Space, Button } from 'antd';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { useState } from 'react';

const Prog_ress = () => {
  const [percent, setPercent] = useState(0);
  const increase = () => {
    setPercent((prevPercent) => {
      const newPercent = prevPercent + 10;
      if (newPercent > 100) {
        return 100;
      }
      return newPercent;
    });
  };
  const decline = () => {
    setPercent((prevPercent) => {
      const newPercent = prevPercent - 10;
      if (newPercent < 0) {
        return 0;
      }
      return newPercent;
    });
  };
  return (
    <div className="container">
      <Navigation></Navigation>
      <div className="progressContainer">
        <div className="progressExample1">
          <Progress percent={30} />
          <Progress percent={50} status="active" />
          <Progress percent={70} status="exception" />
          <Progress percent={100} />
          <Progress percent={50} showInfo={false} />
        </div>
      </div>

      <div className="progressExample2">
        <Space wrap>
          <Progress type="circle" percent={75} size={50} />
          <Progress type="circle" percent={70} status="exception" />
          <Progress type="circle" percent={100} />
        </Space>
      </div>

      <div className="progressExample3">
        <Progress percent={percent} />
        <Button.Group>
          <Button onClick={decline} icon={<MinusOutlined />} />
          <Button onClick={increase} icon={<PlusOutlined />} />
        </Button.Group>
      </div>

      <div className="progressExample4">
        <Space wrap>
          <Progress
            type="circle"
            percent={75}
            format={(percent) => `${percent} Days`}
          />
          <Progress type="circle" percent={100} format={() => 'Done'} />
        </Space>
      </div>

      <div className="progressExample5">
      <Progress
      percent={99.9}
      strokeColor={{
        '0%': '#108ee9',
        '100%': '#87d068',
      }}
    />
    <Progress
      percent={99.9}
      status="active"
      strokeColor={{
        from: '#108ee9',
        to: '#87d068',
      }}
    />
    <Space wrap>
      <Progress
        type="circle"
        percent={90}
        strokeColor={{
          '0%': '#108ee9',
          '100%': '#87d068',
        }}
      />
      <Progress
        type="circle"
        percent={100}
        strokeColor={{
          '0%': '#108ee9',
          '100%': '#87d068',
        }}
      />
    </Space>
      </div>
      
    </div>
  );
};

export default Prog_ress;
