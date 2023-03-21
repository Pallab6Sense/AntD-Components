import Navigation from '@/Components/Navigation';
import { Carousel } from 'antd';
const contentStyle = {
  margin: 0,
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
const Carou_sel = () => {
  return (
    <>
      <div className="container">
        <Navigation></Navigation>

        <div className="carouselContainer">
        <div className="carouselContainer1">
          <Carousel >
            <div>
              <h3 style={contentStyle}>1</h3>
            </div>
            <div>
              <h3 style={contentStyle}>2</h3>
            </div>
            <div>
              <h3 style={contentStyle}>3</h3>
            </div>
            <div>
              <h3 style={contentStyle}>4</h3>
            </div>
          </Carousel>
        </div>
        </div>
      </div>
    </>
  );
};

export default Carou_sel;
