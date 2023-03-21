import Navigation from '@/Components/Navigation';
import { Calendar, theme, Alert } from 'antd';
import { useState } from 'react';
import dayjs from 'dayjs';

const Cale_nder = () => {
  const { token } = theme.useToken();
  const wrapperStyle = {
    width: 300,
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
  };

  const [value, setValue] = useState(() => dayjs('2017-01-25'));
  const [selectedValue, setSelectedValue] = useState(() => dayjs('2017-01-25'));
  const onSelect = (newValue) => {
    setValue(newValue);
    setSelectedValue(newValue);
  };
  const onPanelChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className="container">
        <Navigation></Navigation>
        <div className="calenderContainer">
          <div className="calenderExample1">
            <Calendar></Calendar>
          </div>

          <div className="calenderExample2">
            <div style={wrapperStyle}>
              <Calendar fullscreen={false} />
            </div>
          </div>

          <div className="calenderExample3">
            <Alert
              message={`You selected date: ${selectedValue?.format(
                'YYYY-MM-DD'
              )}`}
            />
            <Calendar
              value={value}
              onSelect={onSelect}
              onPanelChange={onPanelChange}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Cale_nder;
