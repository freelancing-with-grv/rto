
import { Result, Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate()
  return (
    <Result
      status="500"
      title="500"
      subTitle="Sorry, something went wrong."
      extra={
        <Button type="primary" onClick={() =>navigate('/') }>
          Home
        </Button>
      }
    />
  );
};

export default ErrorPage;
