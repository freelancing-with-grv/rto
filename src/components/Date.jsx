import { DatePicker, Space } from "antd";
import dayjs from "dayjs";

const { RangePicker } = DatePicker;

// eslint-disable-next-line react/prop-types
const Date = ({ onRangeChange }) => {
  const rangePresets = [
    {
      label: "Last 7 Days",
      value: [dayjs().subtract(7, "d"), dayjs()],
    },
  ];

  const handleRangeChange = (dates, dateStrings) => {
    if (onRangeChange) {
      onRangeChange(dateStrings); 
    }
  };

  return (
    <Space direction="vertical" size={12}>
      <RangePicker
        ranges={rangePresets.reduce((acc, curr) => {
          acc[curr.label] = curr.value;
          return acc;
        }, {})}
        onChange={handleRangeChange}
      />
    </Space>
  );
};

export default Date;
