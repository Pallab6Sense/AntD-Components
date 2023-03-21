/* eslint-disable @next/next/no-img-element */
import Navigation from '@/Components/Navigation';
import { QRCode, Button, Space, theme, Popover } from 'antd';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { useState } from 'react';
const { useToken } = theme;
const src =
  'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg';

const Qr_code = () => {
  const [size, setSize] = useState(160);
  const increase = () => {
    setSize((prevSize) => {
      const newSize = prevSize + 10;
      if (newSize > 300) {
        return 300;
      }
      return newSize;
    });
  };
  const decline = () => {
    setSize((prevSize) => {
      const newSize = prevSize - 10;
      if (newSize < 48) {
        return 48;
      }
      return newSize;
    });
  };
  const { token } = useToken();

  return (
    <>
      <div className="container">
        <Navigation></Navigation>

        <div className="qrcodeContainer">
          <div className="qrcodeExample1">
            <QRCode value="https://ant.design/" />
          </div>

          <div className="qrcodeExample2">
            <Button.Group
              style={{
                marginBottom: 16,
              }}
            >
              <Button
                onClick={decline}
                disabled={size <= 48}
                icon={<MinusOutlined />}
              >
                Smaller
              </Button>
              <Button
                onClick={increase}
                disabled={size >= 300}
                icon={<PlusOutlined />}
              >
                Larger
              </Button>
            </Button.Group>
            <QRCode
              errorLevel="H"
              size={size}
              iconSize={size / 4}
              value="https://ant.design/"
              icon="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
            />
          </div>

          <div className="qrcodeExample3">
            <Space>
              <QRCode
                value="https://ant.design/"
                color={token.colorSuccessText}
                style={{
                  marginBottom: 16,
                  backgroundColor: token.colorBgLayout,
                }}
              />
              <QRCode
                value="https://ant.design/"
                color={token.colorInfoText}
                style={{
                  marginBottom: 16,
                  backgroundColor: token.colorBgLayout,
                }}
              />
            </Space>
          </div>

          <div className="qrcodeExample4">
            <Popover
              overlayInnerStyle={{
                padding: 0,
              }}
              content={<QRCode value={src} bordered={false} />}
            >
              <img width={100} height={100} src={src} alt="icon" />
            </Popover>
          </div>
        </div>
      </div>
    </>
  );
};

export default Qr_code;
