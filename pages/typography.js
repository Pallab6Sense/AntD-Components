import Navigation from '@/Components/Navigation';
import { Typography, Space, Switch, Slider } from 'antd';
import { useState } from 'react';
const { Title, Text, Link, Paragraph } = Typography;

const T_ypography = () => {
  const [ellipsis, setEllipsis] = useState(true);
  const [rows, setRows] = useState(1);
  const article =
    "To be, or not to be, that is a question: Whether it is nobler in the mind to suffer. The slings and arrows of outrageous fortune Or to take arms against a sea of troubles, And by opposing end them? To die: to sleep; No more; and by a sleep to say we end The heart-ache and the thousand natural shocks That flesh is heir to, 'tis a consummation Devoutly to be wish'd. To die, to sleep To sleep- perchance to dream: ay, there's the rub! For in that sleep of death what dreams may come When we have shuffled off this mortal coil, Must give us pause. There 's the respect That makes calamity of so long life";
  return (
    <>
      <div className="container">
        <Navigation />
        <div className="typoContainer">
        <div className="typographyExample1">
          <Space direction="vertical">
            <Title>h1.Pallab Majumdar</Title>
            <Title level={2}>h2.Pallab Majumdar</Title>
            <Title level={3}>h3.Pallab Majumdar</Title>
            <Title level={4}>h4.Pallab Majumdar</Title>
            <Title level={5}>h5.Pallab Majumdar</Title>
          </Space>
        </div>

        <div className="typographyExample2">
          <Space direction="vertical">
            <Text>Ant Design (default)</Text>
            <Text type="secondary">Ant Design (secondary)</Text>
            <Text type="success">Ant Design (success)</Text>
            <Text type="warning">Ant Design (warning)</Text>
            <Text type="danger">Ant Design (danger)</Text>
            <Text disabled>Ant Design (disabled)</Text>
            <Text mark>Ant Design (mark)</Text>
            <Text code>Ant Design (code)</Text>
            <Text keyboard>Ant Design (keyboard)</Text>
            <Text underline>Ant Design (underline)</Text>
            <Text delete>Ant Design (delete)</Text>
            <Text strong>Ant Design (strong)</Text>
            <Text italic>Ant Design (italic)</Text>
            <Link href="https://ant.design" target="_blank">
              Ant Design (Link)
            </Link>
          </Space>
        </div>
        <div className="typographyExample3">
          <Switch
            checked={ellipsis}
            onChange={() => {
              setEllipsis(!ellipsis);
            }}
          />

          <Paragraph ellipsis={ellipsis} className="para-graph">
            Ant Design, a design language for background applications, is
            refined by Ant UED Team. Ant Design, a design language for
            background applications, is refined by Ant UED Team. Ant Design, a
            design language for background applications, is refined by Ant UED
            Team. Ant Design, a design language for background applications, is
            refined by Ant UED Team. Ant Design, a design language for
            background applications, is refined by Ant UED Team. Ant Design, a
            design language for background applications, is refined by Ant UED
            Team.
          </Paragraph>

          <Paragraph
            ellipsis={
              ellipsis
                ? {
                    rows: 2,
                    expandable: true,
                    symbol: 'more',
                  }
                : false
            }
          >
            Ant Design, a design language for background applications, is
            refined by Ant UED Team. Ant Design, a design language for
            background applications, is refined by Ant UED Team. Ant Design, a
            design language for background applications, is refined by Ant UED
            Team. Ant Design, a design language for background applications, is
            refined by Ant UED Team. Ant Design, a design language for
            background applications, is refined by Ant UED Team. Ant Design, a
            design language for background applications, is refined by Ant UED
            Team.
          </Paragraph>

          <Text
            style={
              ellipsis
                ? {
                    // width: 100,
                  }
                : undefined
            }
            ellipsis={
              ellipsis
                ? {
                    tooltip: 'I am ellipsis now!',
                  }
                : false
            }
          >
            Ant Design, a design language for background applications, is
            refined by Ant UED Team.
          </Text>
        </div>

        <div className="typographyExample4">
          <Slider value={rows} min={1} max={10} onChange={setRows} className='slider'/>
          <Paragraph className='slider'
            ellipsis={{
              rows,
              expandable: true,
              suffix: '--William Shakespeare',
              onEllipsis: (ellipsis) => {
                console.log('Ellipsis changed:', ellipsis);
              },
            }}
            title={`${article}--William Shakespeare`}
          >
            {article}
          </Paragraph>
        </div>
        </div>
      </div>
    </>
  );
};

export default T_ypography;
