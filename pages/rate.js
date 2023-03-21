import Navigation from '@/Components/Navigation';
import { HeartOutlined } from '@ant-design/icons';
import { FrownOutlined, MehOutlined, SmileOutlined } from '@ant-design/icons';
const customIcons = {
  1: <FrownOutlined />,
  2: <FrownOutlined />,
  3: <MehOutlined />,
  4: <SmileOutlined />,
  5: <SmileOutlined />,
};
import { Rate } from 'antd';
const Ra_te = () => {
  return (
    <>
      <div className="container">
        <Navigation></Navigation>

        <div className="rateContainer">
          <div className="rateExample1"></div>
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

          <div className="rateExample4">
            <Rate defaultValue={3} />
            <span className="ant-rate-text">allowClear: true</span>
            <br />
            <Rate allowClear={false} defaultValue={3} />
            <span className="ant-rate-text">allowClear: false</span>
          </div>

          <div className="rateExample">
            <Rate defaultValue={2} character={({ index }) => index + 1} />
            <br />
            <Rate
              defaultValue={3}
              character={({ index }) => customIcons[index + 1]}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Ra_te;
