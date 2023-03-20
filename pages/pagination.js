import Navigation from '@/Components/Navigation';
import { Pagination } from 'antd';

export default function Pagi_nation() {
  const onChange = (pageNumber) => {
    console.log('Page: ', pageNumber);
  };

  const itemRender = (_, type, originalElement) => {
    if (type === 'prev') {
      return <a>Previous</a>;
    }
    if (type === 'next') {
      return <a>Next</a>;
    }
    return originalElement;
  };
  return (
    <>
      <div className="container">
        <Navigation></Navigation>
        <div className="paginationContainer">
          <div className="paginationExample1">
            <Pagination defaultCurrent={1} total={50} />
          </div>

          <div className="paginationExample2">
            <Pagination
              showQuickJumper
              defaultCurrent={2}
              total={500}
              onChange={onChange}
            />
          </div>

          <div className="paginationExample3">
            <Pagination total={500} itemRender={itemRender}></Pagination>
          </div>
        </div>
      </div>
    </>
  );
}
