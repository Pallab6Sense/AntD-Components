import Navigation from '@/Components/Navigation';
import { Button, message, Space } from 'antd';

const Mess_age = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'This is a success message',
    });
  };
  const error = () => {
    messageApi.open({
      type: 'error',
      content: 'This is an error message',
    });
  };
  const warning = () => {
    messageApi.open({
      type: 'warning',
      content: 'This is a warning message',
    });
  };
  const [messageApi1, contextHolder1] = message.useMessage();
  const success1 = () => {
    messageApi1.open({
      type: 'loading',
      content: 'Action in progress..',
      duration: 0,
    });
    // Dismiss manually and asynchronously
    setTimeout(messageApi.destroy, 2500);
  };

  const [messageApi3, contextHolder3] = message.useMessage();
  const success3 = () => {
    messageApi3.open({
      type: 'success',
      content: 'This is a prompt message with custom className and style',
      className: 'custom-class',
      style: {
        marginTop: '20vh',
      },
    });
  };
  return (
    <div className="container">
      <Navigation></Navigation>

      <div className="messageContainer">
        <div className="messageExample1">
          {contextHolder}
          <Space>
            <Button onClick={success}>Success</Button>
            <Button onClick={error}>Error</Button>
            <Button onClick={warning}>Warning</Button>
          </Space>
        </div>

        <div className="messageExample2">
          {contextHolder1}
          <Button onClick={success1}>Display a loading indicator</Button>
        </div>

        <div className="messageExample3">
          {contextHolder3}
          <Button onClick={success3}>Customized style</Button>
        </div>
        
      </div>
    </div>
  );
};

export default Mess_age;
