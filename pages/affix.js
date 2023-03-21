import Navigation from '@/Components/Navigation';
import { Affix, Button } from 'antd';
import { useState } from 'react';
const Aff_ix = () => {
  const [top, setTop] = useState(10);
  const [bottom, setBottom] = useState(10);
  const [container, setContainer] = useState(null);

  return (
    <div className="container">
      <Navigation></Navigation>
      <div className="affixContainer">
        <div className="affixExample1">
          <Affix offsetTop={top}>
            <Button type="primary" onClick={() => setTop(top + 10)}>
              Affix top
            </Button>
          </Affix>
          <br />
          <Affix offsetBottom={bottom}>
            <Button type="primary" onClick={() => setBottom(bottom + 10)}>
              Affix bottom
            </Button>
          </Affix>
        </div>

        <div className="affixExample2">
          <Affix offsetTop={100} onChange={(affixed) => console.log(affixed)}>
            <Button>100px to affix top</Button>
          </Affix>
        </div>

        <div className="affixExample3">
        <div className="scrollable-container" ref={setContainer}>
      <div className="background">
        <Affix target={() => container}>
          <Button type="primary">Fixed at the top of container</Button>
        </Affix>
      </div>
    </div>
        </div>
      </div>
    </div>
  );
};

export default Aff_ix;
