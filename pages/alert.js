import Navigation from '@/Components/Navigation';
import { Alert, Space, Button } from 'antd';
import { useState } from 'react';
const { ErrorBoundary } = Alert;
const ThrowError = () => {
  const [error, setError] = useState();
  const onClick = () => {
    setError(new Error('An Uncaught Error'));
  };
  if (error) {
    throw error;
  }
  return (
    <Button danger onClick={onClick}>
      Click me to throw a error
    </Button>
  );
};
const Ale_rt = () => {
  return (
    <>
      <div className="container">
        <Navigation></Navigation>

        <div className="alertContainer">
          <div className="alertExample1">
            <Space
              direction="vertical"
              style={{
                width: '100%',
              }}
            >
              <Alert message="Success Text" type="success" />
              <Alert message="Info Text" type="info" />
              <Alert message="Warning Text" type="warning" />
              <Alert message="Error Text" type="error" />
            </Space>
          </div>

          <div className="alertExample2">
            <Space
              direction="vertical"
              style={{
                width: '100%',
              }}
            >
              <Alert
                message="Success Text"
                description="Success Description Success Description Success Description"
                type="success"
              />
              <Alert
                message="Info Text"
                description="Info Description Info Description Info Description Info Description"
                type="info"
              />
              <Alert
                message="Warning Text"
                description="Warning Description Warning Description Warning Description Warning Description"
                type="warning"
              />
              <Alert
                message="Error Text"
                description="Error Description Error Description Error Description Error Description"
                type="error"
              />
            </Space>
          </div>

          <div className="alertExample3">
            <Space
              direction="vertical"
              style={{
                width: '100%',
              }}
            >
              <Alert message="Success Tips" type="success" showIcon />
              <Alert message="Informational Notes" type="info" showIcon />
              <Alert message="Warning" type="warning" showIcon closable />
              <Alert message="Error" type="error" showIcon />
              <Alert
                message="Success Tips"
                description="Detailed description and advice about successful copywriting."
                type="success"
                showIcon
              />
              <Alert
                message="Informational Notes"
                description="Additional description and information about copywriting."
                type="info"
                showIcon
              />
              <Alert
                message="Warning"
                description="This is a warning notice about copywriting."
                type="warning"
                showIcon
                closable
              />
              <Alert
                message="Error"
                description="This is an error message about copywriting."
                type="error"
                showIcon
              />
            </Space>
          </div>

          <div className="alertExample4">
            <Space
              direction="vertical"
              style={{
                width: '100%',
              }}
            >
              <Alert message="Warning text" banner />
              <Alert
                message="Very long warning text warning text text text text text text text"
                banner
                closable
              />
              <Alert
                showIcon={false}
                message="Warning text without icon"
                banner
              />
              <Alert type="error" message="Error text" banner />
            </Space>
          </div>

          <div className="alertExample5">
            <ErrorBoundary>
              <ThrowError />
            </ErrorBoundary>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ale_rt;
