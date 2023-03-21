import Navigation from '@/Components/Navigation';
import { Space, Tag, Divider } from 'antd';
import {
  CheckCircleOutlined,
  ClockCircleOutlined,
  CloseCircleOutlined,
  ExclamationCircleOutlined,
  MinusCircleOutlined,
  SyncOutlined,
  FacebookOutlined,
  LinkedinOutlined,
  TwitterOutlined,
  YoutubeOutlined,
} from '@ant-design/icons';
const log = (e) => {
  console.log(e);
};
const preventDefault = (e) => {
  e.preventDefault();
  console.log('Clicked! But prevent default.');
};
const Ta_g = () => {
  return (
    <>
      <div className="container">
        <Navigation></Navigation>

        <div className="tagContainer">
          <div className="tagExample1">
            <Space size={[0, 8]} wrap>
              <Tag>Tag 1</Tag>
              <Tag>
                <a href="https://github.com/ant-design/ant-design/issues/1862">
                  Link
                </a>
              </Tag>
              <Tag closable onClose={log}>
                Tag 2
              </Tag>
              <Tag closable onClose={preventDefault}>
                Prevent Default
              </Tag>
            </Space>
          </div>
          <div className="tagExample2">
            <Divider orientation="left">Without icon</Divider>
            <Space size={[0, 8]} wrap>
              <Tag color="success">success</Tag>
              <Tag color="processing">processing</Tag>
              <Tag color="error">error</Tag>
              <Tag color="warning">warning</Tag>
              <Tag color="default">default</Tag>
            </Space>
            <Divider orientation="left">With icon</Divider>
            <Space size={[0, 8]} wrap>
              <Tag icon={<CheckCircleOutlined />} color="success">
                success
              </Tag>
              <Tag icon={<SyncOutlined spin />} color="processing">
                processing
              </Tag>
              <Tag icon={<CloseCircleOutlined />} color="error">
                error
              </Tag>
              <Tag icon={<ExclamationCircleOutlined />} color="warning">
                warning
              </Tag>
              <Tag icon={<ClockCircleOutlined />} color="default">
                waiting
              </Tag>
              <Tag icon={<MinusCircleOutlined />} color="default">
                stop
              </Tag>
            </Space>
          </div>

          <div className="tagExample3">
            <Divider orientation="left">Presets</Divider>
            <Space size={[0, 8]} wrap>
              <Tag color="magenta">magenta</Tag>
              <Tag color="red">red</Tag>
              <Tag color="volcano">volcano</Tag>
              <Tag color="orange">orange</Tag>
              <Tag color="gold">gold</Tag>
              <Tag color="lime">lime</Tag>
              <Tag color="green">green</Tag>
              <Tag color="cyan">cyan</Tag>
              <Tag color="blue">blue</Tag>
              <Tag color="geekblue">geekblue</Tag>
              <Tag color="purple">purple</Tag>
            </Space>
            <Divider orientation="left">Custom</Divider>
            <Space size={[0, 8]} wrap>
              <Tag color="#f50">#f50</Tag>
              <Tag color="#2db7f5">#2db7f5</Tag>
              <Tag color="#87d068">#87d068</Tag>
              <Tag color="#108ee9">#108ee9</Tag>
            </Space>
          </div>

          <div className="tagExample4">
            <Space size={[0, 8]} wrap>
              <Tag icon={<TwitterOutlined />} color="#55acee">
                Twitter
              </Tag>
              <Tag icon={<YoutubeOutlined />} color="#cd201f">
                Youtube
              </Tag>
              <Tag icon={<FacebookOutlined />} color="#3b5999">
                Facebook
              </Tag>
              <Tag icon={<LinkedinOutlined />} color="#55acee">
                LinkedIn
              </Tag>
            </Space>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ta_g;
