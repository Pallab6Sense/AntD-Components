import Link from 'next/link';

const Navigation = () => {
  return (
    <>
      <div className="navContainer">
        {/* <hr /> */}
        <ul>
          <div className="general">
            <p className="heading">
              General
            </p>
            <div className="divider"></div>

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
        </ul>
      </div>
    </>
  );
};

export default Navigation;
