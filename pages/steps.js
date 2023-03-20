import Navigation from '@/Components/Navigation';
import { Steps, Divider } from 'antd';
import {
  LoadingOutlined,
  SmileOutlined,
  SolutionOutlined,
  UserOutlined,
} from '@ant-design/icons';

const description = 'This is a description.';
export default function Ste_ps() {
  return (
    <>
      <div className="container">
        <Navigation></Navigation>
        <div className="stepsContainer">
          <div className="stepsExample1">
            <Steps
              size="small"
              direction="vertical"
              current={2}
              items={[
                {
                  title: 'Finished',
                  description,
                },
                {
                  title: 'In Progress',
                  description,
                  subTitle: 'Left 00:00:08',
                },
                {
                  title: 'Waiting',
                  description,
                },
              ]}
            />
          </div>

          <div className="stepsExample2">
            <Steps
              items={[
                {
                  title: 'Login',
                  status: 'finish',
                  icon: <UserOutlined />,
                },
                {
                  title: 'Verification',
                  status: 'finish',
                  icon: <SolutionOutlined />,
                },
                {
                  title: 'Pay',
                  status: 'process',
                  icon: <LoadingOutlined />,
                },
                {
                  title: 'Done',
                  status: 'wait',
                  icon: <SmileOutlined />,
                },
              ]}
            />
          </div>

          <div className="stepsExample3">
            <Steps
              current={1}
              status="error"
              labelPlacement="vertical"
              items={[
                {
                  title: 'Finished',
                  description,
                },
                {
                  title: 'In Process',
                  description,
                },
                {
                  title: 'Waiting',
                  description,
                },
              ]}
            />
          </div>

          <div className="stepsExample4">
            <Steps
              progressDot
              current={1}
              items={[
                {
                  title: 'Finished',
                  description: 'This is a description.',
                },
                {
                  title: 'In Progress',
                  description: 'This is a description.',
                },
                {
                  title: 'Waiting',
                  description: 'This is a description.',
                },
              ]}
            />
            <Divider />
            <Steps
              progressDot
              current={1}
              direction="vertical"
              items={[
                {
                  title: 'Finished',
                  description: 'This is a description. This is a description.',
                },
                {
                  title: 'Finished',
                  description: 'This is a description. This is a description.',
                },
                {
                  title: 'In Progress',
                  description: 'This is a description. This is a description.',
                },
                {
                  title: 'Waiting',
                  description: 'This is a description.',
                },
                {
                  title: 'Waiting',
                  description: 'This is a description.',
                },
              ]}
            />
          </div>
        </div>
      </div>
    </>
  );
}
