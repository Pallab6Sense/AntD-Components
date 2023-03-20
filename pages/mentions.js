import Navigation from '@/Components/Navigation';
import { Mentions, Space } from 'antd';
const onSelect = (option) => {
  console.log('select', option);
};
const onChange = (value) => {
  console.log('Change:', value);
};

const options = ['afc163', 'zombiej', 'yesmeck'].map((value) => ({
  value,
  key: value,
  label: value,
}));
export default function Ment_ions() {
  return (
    <>
      <div className="container">
        <Navigation></Navigation>

        <div className="mentionsContainer">
          <div className="mentionsExample1">
            <Mentions
              style={{
                width: '100%',
              }}
              onChange={onChange}
              onSelect={onSelect}
              defaultValue="@afc163"
              options={[
                {
                  value: 'afc163',
                  label: 'afc163',
                },
                {
                  value: 'zombieJ',
                  label: 'zombieJ',
                },
                {
                  value: 'yesmeck',
                  label: 'yesmeck',
                },
                {
                  value: 'pallab',
                  label: 'pallab',
                },
              ]}
            />
          </div>
          <div className="mentionsExample2">
            <div
              style={{
                marginBottom: 10,
              }}
            >
              <Mentions
                style={{
                  width: '100%',
                }}
                placeholder="this is disabled Mentions"
                disabled
                options={options}
              />
            </div>
            <Mentions
              style={{
                width: '100%',
              }}
              placeholder="this is readOnly Mentions"
              readOnly
              options={options}
            />
          </div>

          <div className="mentionsExample3">
            <Mentions
              style={{
                width: '100%',
              }}
              placement="top"
              options={[
                {
                  value: 'afc163',
                  label: 'afc163',
                },
                {
                  value: 'zombieJ',
                  label: 'zombieJ',
                },
                {
                  value: 'yesmeck',
                  label: 'yesmeck',
                },
              ]}
            />
          </div>

          <div className="mentionsExample4">
            <Space direction="vertical">
              <Mentions
                onChange={onChange}
                onSelect={onSelect}
                defaultValue="@pallab"
                status="error"
                options={options}
              />
              <Mentions
                onChange={onChange}
                onSelect={onSelect}
                defaultValue="@afc163"
                status="warning"
                options={options}
              />
            </Space>
          </div>

          <div className="mentionsExample5">
            <Mentions
              autoSize
              style={{
                width: '100%',
              }}
              options={[
                {
                  value: 'afc163',
                  label: 'afc163',
                },
                {
                  value: 'zombieJ',
                  label: 'zombieJ',
                },
                {
                  value: 'yesmeck',
                  label: 'yesmeck',
                },
              ]}
            />
          </div>
        </div>
      </div>
    </>
  );
}
