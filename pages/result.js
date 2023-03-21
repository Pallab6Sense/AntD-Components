import Navigation from '@/Components/Navigation';
import { CloseCircleOutlined } from '@ant-design/icons';
import { Button, Result, Typography } from 'antd';
const { Paragraph, Text } = Typography;

const Re_sult = () => {
  return (
    <div className="container">
      <Navigation></Navigation>
      <div className="resultContainer">
        <div className="resultExample1">
          <Result
            status="success"
            title="Successfully Purchased Cloud Server ECS!"
            subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
            extra={[
              <Button type="primary" key="console">
                Go Console
              </Button>,
              <Button key="buy">Buy Again</Button>,
            ]}
          />
        </div>

        <div className="resultExample2">
          <Result
            title="Your operation has been executed"
            extra={
              <Button type="primary" key="console">
                Go Console
              </Button>
            }
          />
        </div>

        <div className="resultExample3">
          <Result
            status="warning"
            title="There are some problems with your operation."
            extra={
              <Button type="primary" key="console">
                Go Console
              </Button>
            }
          />
        </div>

        <div className="resultExample4">
          <Result
            status="error"
            title="Submission Failed"
            subTitle="Please check and modify the following information before resubmitting."
            extra={[
              <Button type="primary" key="console">
                Go Console
              </Button>,
              <Button key="buy">Buy Again</Button>,
            ]}
          >
            <div className="desc">
              <Paragraph>
                <Text
                  strong
                  style={{
                    fontSize: 16,
                  }}
                >
                  The content you submitted has the following error:
                </Text>
              </Paragraph>
              <Paragraph>
                <CloseCircleOutlined className="site-result-demo-error-icon" />{' '}
                Your account has been frozen. <a>Thaw immediately &gt;</a>
              </Paragraph>
              <Paragraph>
                <CloseCircleOutlined className="site-result-demo-error-icon" />{' '}
                Your account is not yet eligible to apply.{' '}
                <a>Apply Unlock &gt;</a>
              </Paragraph>
            </div>
          </Result>
        </div>
      </div>
    </div>
  );
};

export default Re_sult;
