import Navigation from '@/Components/Navigation';
import { message, Popconfirm, Button } from 'antd';
import { useState } from 'react';
const confirm = (e) => {
  console.log(e);
  message.success('Click on Yes');
};
const cancel = (e) => {
  console.log(e);
  message.error('Click on No');
};
const text = 'Are you sure to delete this task?';
const description = 'Delete the task';
const confirm1 = () => {
  message.info('Clicked on Yes.');
};
const Pop_confirm = () => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const showPopconfirm = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };
  const handleCancel = () => {
    console.log('Clicked cancel button');
    setOpen(false);
  };
  return (
    <div className="container">
      <Navigation></Navigation>
      <div className="popconfirmContainer">
        <div className="popconfirmExample1">
          <Popconfirm
            title="Delete the task"
            description="Are you sure to delete this task?"
            onConfirm={confirm}
            onCancel={cancel}
            okText="Yes"
            cancelText="No"
          >
            <a href="#">Delete</a>
          </Popconfirm>
        </div>

        <div className="popconfirmExample2">
          <div
            style={{
              marginLeft: 70,
              whiteSpace: 'nowrap',
            }}
          >
            <Popconfirm
              placement="topLeft"
              title={text}
              description={description}
              onConfirm={confirm1}
              okText="Yes"
              cancelText="No"
            >
              <Button>TL</Button>
            </Popconfirm>
            <Popconfirm
              placement="top"
              title={text}
              description={description}
              onConfirm={confirm}
              okText="Yes"
              cancelText="No"
            >
              <Button>Top</Button>
            </Popconfirm>
            <Popconfirm
              placement="topRight"
              title={text}
              description={description}
              onConfirm={confirm}
              okText="Yes"
              cancelText="No"
            >
              <Button>TR</Button>
            </Popconfirm>
          </div>
          <div
            style={{
              width: 70,
              float: 'left',
            }}
          >
            <Popconfirm
              placement="leftTop"
              title={text}
              description={description}
              onConfirm={confirm}
              okText="Yes"
              cancelText="No"
            >
              <Button>LT</Button>
            </Popconfirm>
            <Popconfirm
              placement="left"
              title={text}
              description={description}
              onConfirm={confirm}
              okText="Yes"
              cancelText="No"
            >
              <Button>Left</Button>
            </Popconfirm>
            <Popconfirm
              placement="leftBottom"
              title={text}
              description={description}
              onConfirm={confirm}
              okText="Yes"
              cancelText="No"
            >
              <Button>LB</Button>
            </Popconfirm>
          </div>
          <div
            style={{
              width: 70,
              marginLeft: 304,
            }}
          >
            <Popconfirm
              placement="rightTop"
              title={text}
              description={description}
              onConfirm={confirm}
              okText="Yes"
              cancelText="No"
            >
              <Button>RT</Button>
            </Popconfirm>
            <Popconfirm
              placement="right"
              title={text}
              description={description}
              onConfirm={confirm}
              okText="Yes"
              cancelText="No"
            >
              <Button>Right</Button>
            </Popconfirm>
            <Popconfirm
              placement="rightBottom"
              title={text}
              description={description}
              onConfirm={confirm}
              okText="Yes"
              cancelText="No"
            >
              <Button>RB</Button>
            </Popconfirm>
          </div>
          <div
            style={{
              marginLeft: 70,
              clear: 'both',
              whiteSpace: 'nowrap',
            }}
          >
            <Popconfirm
              placement="bottomLeft"
              title={text}
              description={description}
              onConfirm={confirm}
              okText="Yes"
              cancelText="No"
            >
              <Button>BL</Button>
            </Popconfirm>
            <Popconfirm
              placement="bottom"
              title={text}
              description={description}
              onConfirm={confirm}
              okText="Yes"
              cancelText="No"
            >
              <Button>Bottom</Button>
            </Popconfirm>
            <Popconfirm
              placement="bottomRight"
              title={text}
              description={description}
              onConfirm={confirm}
              okText="Yes"
              cancelText="No"
            >
              <Button>BR</Button>
            </Popconfirm>
          </div>
        </div>

        <div className="popconfirmExample3">
          <Popconfirm
            title="Title"
            description="Open Popconfirm with async logic"
            open={open}
            onConfirm={handleOk}
            okButtonProps={{
              loading: confirmLoading,
            }}
            onCancel={handleCancel}
          >
            <Button type="primary" onClick={showPopconfirm}>
              Open Popconfirm with async logic
            </Button>
          </Popconfirm>
        </div>
      </div>
    </div>
  );
};

export default Pop_confirm;
