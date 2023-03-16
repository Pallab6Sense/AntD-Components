import Navigation from '@/Components/Navigation';
import {
  HomeOutlined,
  LoadingOutlined,
  SettingFilled,
  SmileOutlined,
  SyncOutlined,
  CheckCircleTwoTone,
  HeartTwoTone,
  SmileTwoTone,
  createFromIconfontCN,
} from '@ant-design/icons';
import { Space } from 'antd';
const IconFont = createFromIconfontCN({
  scriptUrl: [
    '//at.alicdn.com/t/font_1788044_0dwu4guekcwr.js',
    // icon-javascript, icon-java, icon-shoppingcart (overridden)
    '//at.alicdn.com/t/font_1788592_a5xf2bdic3u.js', // icon-shoppingcart, icon-python
  ],
});
export default function Icon() {
  return (
    <>
      <div className="container">
        <Navigation></Navigation>
        <div className="iconExample1">
          <Space>
            <HomeOutlined />
            <SettingFilled />
            <SmileOutlined />
            <SyncOutlined spin />
            <SmileOutlined rotate={180} />
            <LoadingOutlined />
          </Space>
        </div>

        <div className="iconExample2">
          <Space>
            <SmileTwoTone />
            <HeartTwoTone twoToneColor="#eb2f96" />
            <CheckCircleTwoTone twoToneColor="#52c41a" />
          </Space>
        </div>
        <div className="iconExample3">
          <Space>
            <IconFont type="icon-javascript" />
            <IconFont type="icon-java" />
            <IconFont type="icon-shoppingcart" />
            <IconFont type="icon-python" />
          </Space>
        </div>
      </div>
    </>
  );
}
