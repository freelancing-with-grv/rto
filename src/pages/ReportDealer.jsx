import { useState } from "react";
import Breadcrumb from "../components/Breadcrumb";
import Date from "../components/Date";
import { Button } from "antd";

const ReportDealer = () => {
  const [selectedRange, setSelectedRange] = useState([]);

  const handleDateChange = (dates) => {
    setSelectedRange(dates);
  };
  const handleSubmit = ()=>{
    console.log(selectedRange)
  }

  return (
    <div>
      <Breadcrumb />
      <div className="my-5 p-4">
        <div className="container bg-white p-4 rounded-3 shadow-sm">
          <div className="row my-3">
            <h3>Fitment Report Dealer</h3>
          </div>
          <p className="border-bottom py-2">GENERATE REPORT HERE</p>
          <div className="row my-4">
            <div className="col-lg-6 col-md-6 my-2">Select Date: </div>
            <div className="col-lg-6 col-md-6">
              <Date onRangeChange={handleDateChange} />
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6 col-md-6 my-2">Selected date:</div>{" "}
            <div className="col-lg-6 col-md-6">
              {selectedRange && selectedRange.length === 2 ? (
                <>
                  {selectedRange[0]} <span className="mx-2">to </span>{selectedRange[1]}
                </>
              ) : null}
            </div>
          </div>
        </div>
        <div className="container bg-white py-4 text-center rounded-3 shadow-sm my-3">
          <Button onClick={handleSubmit} size="middle">Submit</Button>
        </div>
      </div>
    </div>
  );
};

export default ReportDealer;
