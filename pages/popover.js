import Navigation from '@/Components/Navigation';
import { Button, Popover, Space } from 'antd';
import { useState } from 'react';
const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);

const buttonWidth = 70;
const text = <span>Title</span>;

const Pop_over = () => {
  const [open, setOpen] = useState(false);
  //   const hide = () => {
  //     setOpen(false);
  //   };
  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
  };

  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);
  const hide = () => {
    setClicked(false);
    setHovered(false);
  };
  const handleHoverChange = (open) => {
    setHovered(open);
    setClicked(false);
  };
  const handleClickChange = (open) => {
    setHovered(false);
    setClicked(open);
  };
  const hoverContent = <div>This is hover content.</div>;
  const clickContent = <div>This is click content.</div>;
  return (
    <>
      <div className="container">
        <Navigation></Navigation>

        <div className="popoverContainer">
          <div className="popoverExample1">
            <Popover content={content} title="Title">
              <Button type="primary">Hover me</Button>
            </Popover>
          </div>

          <div className="popoverExample2">
            <Space wrap>
              <Popover content={content} title="Title" trigger="hover">
                <Button>Hover me</Button>
              </Popover>
              <Popover content={content} title="Title" trigger="focus">
                <Button>Focus me</Button>
              </Popover>
              <Popover content={content} title="Title" trigger="click">
                <Button>Click me</Button>
              </Popover>
            </Space>
          </div>

          <div className="popoverExample3">
            <div
              style={{
                marginLeft: buttonWidth,
                whiteSpace: 'nowrap',
              }}
            >
              <Popover
                placement="topLeft"
                title={text}
                content={content}
                trigger="click"
              >
                <Button>TL</Button>
              </Popover>
              <Popover
                placement="top"
                title={text}
                content={content}
                trigger="click"
              >
                <Button>Top</Button>
              </Popover>
              <Popover
                placement="topRight"
                title={text}
                content={content}
                trigger="click"
              >
                <Button>TR</Button>
              </Popover>
            </div>
            <div
              style={{
                width: buttonWidth,
                float: 'left',
              }}
            >
              <Popover
                placement="leftTop"
                title={text}
                content={content}
                trigger="click"
              >
                <Button>LT</Button>
              </Popover>
              <Popover
                placement="left"
                title={text}
                content={content}
                trigger="click"
              >
                <Button>Left</Button>
              </Popover>
              <Popover
                placement="leftBottom"
                title={text}
                content={content}
                trigger="click"
              >
                <Button>LB</Button>
              </Popover>
            </div>
            <div
              style={{
                width: buttonWidth,
                marginLeft: buttonWidth * 4 + 24,
              }}
            >
              <Popover
                placement="rightTop"
                title={text}
                content={content}
                trigger="click"
              >
                <Button>RT</Button>
              </Popover>
              <Popover
                placement="right"
                title={text}
                content={content}
                trigger="click"
              >
                <Button>Right</Button>
              </Popover>
              <Popover
                placement="rightBottom"
                title={text}
                content={content}
                trigger="click"
              >
                <Button>RB</Button>
              </Popover>
            </div>
            <div
              style={{
                marginLeft: buttonWidth,
                clear: 'both',
                whiteSpace: 'nowrap',
              }}
            >
              <Popover
                placement="bottomLeft"
                title={text}
                content={content}
                trigger="click"
              >
                <Button>BL</Button>
              </Popover>
              <Popover
                placement="bottom"
                title={text}
                content={content}
                trigger="click"
              >
                <Button>Bottom</Button>
              </Popover>
              <Popover
                placement="bottomRight"
                title={text}
                content={content}
                trigger="click"
              >
                <Button>BR</Button>
              </Popover>
            </div>
          </div>

          <div className="popoverExample4">
            <Popover
              content={<a onClick={hide}>Close</a>}
              title="Title"
              trigger="click"
              open={open}
              onOpenChange={handleOpenChange}
            >
              <Button type="primary">Click me</Button>
            </Popover>
          </div>

          <div className="popoverExample5">
            <Popover
              style={{
                width: 500,
              }}
              content={hoverContent}
              title="Hover title"
              trigger="hover"
              open={hovered}
              onOpenChange={handleHoverChange}
            >
              <Popover
                content={
                  <div>
                    {clickContent}
                    <a onClick={hide}>Close</a>
                  </div>
                }
                title="Click title"
                trigger="click"
                open={clicked}
                onOpenChange={handleClickChange}
              >
                <Button>Hover and click / 悬停并单击</Button>
              </Popover>
            </Popover>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pop_over;
