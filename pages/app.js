/* eslint-disable react/display-name */
/* eslint-disable import/no-anonymous-default-export */
import Navigation from '@/Components/Navigation';
import { App, Button, Space } from 'antd';

// Sub page
export default function MyPage() {
  const { message, modal, notification } = App.useApp();

  const showMessage = () => {
    message.success('Success!');
  };

  const showModal = () => {
    modal.warning({
      title: 'This is a warning message',
      content: 'some messages...some messages...',
    });
  };

  const showNotification = () => {
    notification.info({
      message: `Notification topLeft`,
      description: 'Hello, Ant Design!!',
      placement: 'topLeft',
    });
  };

  return (
    <div className="container">
      <Navigation></Navigation>
      <div className="appContainer">
        <div className="appExample1">
          <Space>
            <Button type="primary" onClick={showMessage}>
              Open message
            </Button>
            <Button type="primary" onClick={showModal}>
              Open modal
            </Button>
            <Button type="primary" onClick={showNotification}>
              Open notification
            </Button>
          </Space>
        </div>
      </div>
    </div>
  );
}

// Entry component
// export default () => (
//   <App>
//     <MyPage />
//   </App>
// );
