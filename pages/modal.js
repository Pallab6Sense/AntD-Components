import Navigation from '@/Components/Navigation';
import { Button, Modal,Space } from 'antd';
import { useState } from 'react';

const info = () => {
    Modal.info({
      title: 'This is a notification message',
      content: (
        <div>
          <p>some messages...some messages...</p>
          <p>some messages...some messages...</p>
        </div>
      ),
      onOk() {},
    });
  };
  const success = () => {
    Modal.success({
      content: 'some messages...some messages...',
    });
  };
  const error = () => {
    Modal.error({
      title: 'This is an error message',
      content: 'some messages...some messages...',
    });
  };
  const warning = () => {
    Modal.warning({
      title: 'This is a warning message',
      content: 'some messages...some messages...',
    });
  };


const Mod_al = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const showModal1 = () => {
    setOpen(true);
  };
  const handleOk1 = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 3000);
  };
  const handleCancel1 = () => {
    setOpen(false);
  };
  return (
    <>
      <div className="container">
        <Navigation></Navigation>

        <div className="modalContainer">
          <div className="modalExample1">
            <Button type="primary" onClick={showModal}>
              Open Modal
            </Button>
            <Modal
              title="Basic Modal"
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </Modal>
          </div>

          <div className="modalExample2">
            <Button type="primary" onClick={showModal1}>
              Open Modal with customized footer
            </Button>
            <Modal
              open={open}
              title="Title"
              onOk={handleOk}
              onCancel={handleCancel1}
              footer={[
                <Button key="back" onClick={handleCancel1}>
                  Return
                </Button>,
                <Button
                  key="submit"
                  type="primary"
                  loading={loading}
                  onClick={handleOk1}
                >
                  Submit
                </Button>,
                <Button
                  key="link"
                  href="https://google.com"
                  type="primary"
                  loading={loading}
                  onClick={handleOk}
                >
                  Search on Google
                </Button>,
              ]}
            >
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </Modal>
          </div>

          <div className="modalExample3">
          <Space wrap>
    <Button onClick={info}>Info</Button>
    <Button onClick={success}>Success</Button>
    <Button onClick={error}>Error</Button>
    <Button onClick={warning}>Warning</Button>
  </Space>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mod_al;
