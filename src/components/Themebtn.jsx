import { Button } from "antd";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi";

// eslint-disable-next-line react/prop-types
const Themebtn = ({ darkTheme, toggleTheme }) => {
  return (
    <div className="toggle-theme-btn">
      <Button onClick={toggleTheme}>
        {darkTheme ? <HiOutlineMoon /> : <HiOutlineSun />}
      </Button>
      
    </div>
  );
};

export default Themebtn;
