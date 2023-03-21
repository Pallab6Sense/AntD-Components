import Link from 'next/link';

import { Divider } from 'antd';

const Navigation = () => {
  return (
    <>
      <div className="navContainer">
        {/* <Divider type="vertical" /> */}
        {/* <hr /> */}
        <ul>
          <div className="general">
            <p className="heading">General</p>
            {/* <div className="divider"></div> */}
            <Divider />

            <li>
              <Link href="/">Button</Link>
            </li>
            <li>
              <Link href="/icon">Icon</Link>
            </li>
            <li>
              <Link href="/typography">Typography</Link>
            </li>
          </div>

          <div className="layout">
            <p className="heading">Layout</p>
            {/* <div className="divider"></div> */}
            <Divider></Divider>
            <li>
              <Link href="/divider">Divider</Link>
            </li>
            <li>
              <Link href="/grid">Grid</Link>
            </li>
            <li>
              <Link href="/layout">Layout</Link>
            </li>
            <li>
              <Link href="/space">Space</Link>
            </li>
          </div>

          <div className="layout">
            <p className="heading">Navigation</p>
            {/* <div className="divider"></div> */}
            <Divider></Divider>
            <li>
              <Link href="/anchor">Anchor</Link>
            </li>
            <li>
              <Link href="/breadcrumb">Breadcrumb</Link>
            </li>
            <li>
              <Link href="/dropdown">Dropdown</Link>
            </li>
            <li>
              <Link href="/menu">Menu</Link>
            </li>
            <li>
              <Link href="/pagination">Pagination</Link>
            </li>
            <li>
              <Link href="/steps">Steps</Link>
            </li>
          </div>

          <div className="dataEntry">
            <p className="heading">Navigation</p>
            {/* <div className="divider"></div> */}
            <Divider></Divider>
            <li>
              <Link href="/autoComplete">AutoComplete</Link>
            </li>
            <li>
              <Link href="/cascader">Cascader</Link>
            </li>
            <li>
              <Link href="/checkBox">CheckBox</Link>
            </li>
            <li>
              <Link href="/datePicker">DatePicker</Link>
            </li>
            <li>
              <Link href="/input">Input</Link>
            </li>
            <li>
              <Link href="/mentions">Mentions</Link>
            </li>
            <li>
              <Link href="/radio">Radio</Link>
            </li>
            <li>
              <Link href="/rate">Rate</Link>
            </li>
            <li>
              <Link href="/select">Select</Link>
            </li>
            <li>
              <Link href="/slider">Slider</Link>
            </li>
            <li>
              <Link href="/switch">Switch</Link>
            </li>
            <li>
              <Link href="/upload">Upload</Link>
            </li>
          </div>

          <div className="dataDisplay">
            <p className="heading">Navigation</p>
            {/* <div className="divider"></div> */}
            <Divider></Divider>
            <li>
              <Link href="/avatar">Avatar</Link>
            </li>
            <li>
              <Link href="/badge">Badge</Link>
            </li>
            <li>
              <Link href="/calender">Calender</Link>
            </li>
            <li>
              <Link href="/card">Card</Link>
            </li>
            <li>
              <Link href="/collapse">Collapse</Link>
            </li>
            <li>
              <Link href="/empty">Empty</Link>
            </li>
           
          </div>
        </ul>
      </div>
    </>
  );
};

export default Navigation;
