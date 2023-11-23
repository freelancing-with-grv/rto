import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HomeCard from "../components/home/HomeCard";
import Breadcrumb from "../components/Breadcrumb";

const Home = () => {
  const [user, setUser] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setUser(true);
    if (!user) {
      navigate("/");
    }
  }, []);

  return (
    <>
      <Breadcrumb />
      <div className="container my-5" id="home">
        <div className="mx-auto w-100 text-center">
          <div className="row text-start">
            <div className="col-md-3 col-lg-3 my-2">
              <HomeCard
                title={514}
                name="Total Certificates"
                link="/dealer/certificate"
              />
            </div>
            <div className="col-md-3 col-lg-3 my-2">
              <HomeCard
                title={514}
                name="Remaining Stocks"
                link="/dealer/view-stock"
              />
            </div>
            <div className="col-md-6 col-lg-6">

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
