import Navigation from '@/Components/Navigation';
import { Watermark } from 'antd';

const Water_mark = () => {
  return (
    <div className="container">
      <Navigation></Navigation>

      <div className="watermarkContainer">
        <div className="watermarkExample1">
          <Watermark content="Pallab Majumdar">
            <div
              style={{
                height: 500,
              }}
            />
          </Watermark>
        </div>

        <div className="watermarkExample2">
          <Watermark content={['Pallab Majumdar', 'Happy Working']}>
            <div
              style={{
                height: 500,
              }}
            />
          </Watermark>
        </div>

        <div className="watermarkExample3">
          <Watermark
            height={30}
            width={130}
            image="https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*lkAoRbywo0oAAAAAAAAAAAAADrJ8AQ/original"
          >
            <div
              style={{
                height: 500,
              }}
            />
          </Watermark>
        </div>
      </div>
    </div>
  );
};

export default Water_mark;
