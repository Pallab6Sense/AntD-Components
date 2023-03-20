import Navigation from '@/Components/Navigation';
import { HeartOutlined } from '@ant-design/icons';

import { Rate } from 'antd';
const Ra_te = () => {
  return (
    <>
      <div className="container">
        <Navigation></Navigation>

        <div className="rateContainer">
          <div className="rateExample1">
            <Rate />
          </div>
          <div className="rateExample2">
            <Rate allowHalf defaultValue={2.5} />
          </div>

          <div className="rateExample3">
            <Rate character={<HeartOutlined />} allowHalf />
            <br />
            <Rate
              character="A"
              allowHalf
              style={{
                fontSize: 36,
              }}
            />
            <br />
            <Rate character="好" allowHalf />
          </div>
        </div>
      </div>
    </>
  );
};

export default Ra_te;
