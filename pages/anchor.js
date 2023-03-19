import Navigation from '@/Components/Navigation';
import { Anchor, Col, Row } from 'antd';

export default function An_chor() {
  const handleClick = (e, link) => {
    e.preventDefault();
    console.log(link);
  };

  return (
    <>
      <div className="container">
        <Navigation />
        <div className="anchorDiv">
          <div className="anchorExample1">
            <Row>
              <Col span={16}>
                <div
                  id="part-1"
                  style={{
                    height: '130px',
                    background: 'rgba(255,0,0,0.02)',
                  }}
                />
                <div
                  id="part-2"
                  style={{
                    height: '130px',
                    background: 'rgba(0,255,0,0.02)',
                  }}
                />
                <div
                  id="part-3"
                  style={{
                    height: '130px',
                    background: 'rgba(0,0,255,0.02)',
                  }}
                />
              </Col>
              <Col span={8}>
                <Anchor
                  items={[
                    {
                      key: 'part-1',
                      href: '#part-1',
                      title: 'Part 1',
                    },
                    {
                      key: 'part-2',
                      href: '#part-2',
                      title: 'Part 2',
                    },
                    {
                      key: 'part-3',
                      href: '#part-3',
                      title: 'Part 3',
                    },
                  ]}
                />
              </Col>
            </Row>
          </div>

          <div className="anchorExample2">
            <Anchor
              affix={false}
              items={[
                {
                  key: '1',
                  href: '#components-anchor-demo-basic',
                  title: 'Basic demo',
                },
                {
                  key: '2',
                  href: '#components-anchor-demo-static',
                  title: 'Static demo',
                },
                {
                  key: '3',
                  href: '#api',
                  title: 'API',
                  children: [
                    {
                      key: '4',
                      href: '#anchor-props',
                      title: 'Anchor Props',
                    },
                    {
                      key: '5',
                      href: '#link-props',
                      title: 'Link Props',
                    },
                  ],
                },
              ]}
            />
          </div>

          <div className="anchorExample3">
            <Anchor
              affix={false}
              onClick={handleClick}
              items={[
                {
                  key: '1',
                  href: '#components-anchor-demo-basic',
                  title: 'Basic demo',
                },
                {
                  key: '2',
                  href: '#components-anchor-demo-static',
                  title: 'Static demo',
                },
                {
                  key: '3',
                  href: '#api',
                  title: 'API',
                  children: [
                    {
                      key: '4',
                      href: '#anchor-props',
                      title: 'Anchor Props',
                    },
                    {
                      key: '5',
                      href: '#link-props',
                      title: 'Link Props',
                    },
                  ],
                },
              ]}
            />
          </div>
        </div>
      </div>
    </>
  );
}
