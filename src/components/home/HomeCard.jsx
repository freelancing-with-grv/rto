import { Card } from "antd";
import { Link } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const HomeCard = ({ title, name, link }) => {
  return (
    <Card
      className={`mx-auto ${name=='Total Certificates'?'bg-certificate':'bg-stocks'}`} 
      title={`${title}`}
      bordered={false}
      style={{maxWidth:"275px"}}
    >
      <p>{name}</p>
      <Link className="text-white text-decoration-none" to={`${link}`}>View</Link>
    </Card>
  );
};

export default HomeCard;
