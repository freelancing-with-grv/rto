import { HomeFilled, MessageOutlined } from "@ant-design/icons";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { capitalize } from "../utils/capitalize";

const Breadcrumb = () => {
  const location = useLocation();

  useEffect(() => {
    console.log("Current pathname:", location.pathname);
    console.log("Current search query:", location.search);
    console.log("Current state:", location.state);
  }, [location]);

  const url = location.pathname;
  const trimmedUrl = url.replace("/dealer/", "");
  const urlParts = trimmedUrl.split("/");

  const title = (part) => {
    switch (part) {
      case "dashboard":
        return "Home";
      case "certificate":
      case "view-stock":
        return "View";
      case "fitment-report":
        return "Fitment";
      case "create-certificate":
        return "Create";
      case "manage-location":
        return "Manage";
      case "delete-location":
        return "Delete";
    }
  };

  return (
    <>
      <div className="bg-white top-bar">
        <div className="d-flex justify-content-between align-items-center h-100 border-top">
          <div className="left d-flex align-items-center mx-2">
            {urlParts.map((part, index) => (
              <div className="d-flex align-items-center" key={index}>
                <h5 className="mx-2 mb-0">{title(part)}</h5>{" "}
                <p className="mb-0">
                  -
                  <span className="mx-2 text-secondary">
                    {capitalize(part)}
                  </span>
                </p>
              </div>
            ))}
          </div>
          <div className="right mx-3">
            {/* <p>Profile</p> */}
          </div>
        </div>
      </div>
      <div
        className="bg-white py-2 px-3 border-bottom border-top d-flex justify-content-between align-items-center"
        id="breadcrumb"
      >
        <div>
          <HomeFilled />{" "}
          <Link
            className="text-decoration-none text-black mx-2 "
            to="/dealer/dashboard"
          >
            Home
          </Link>
          {urlParts.map((part, index) => (
            <span key={index}>
              {part ? <span className=" text-secondary">/</span> : null}

              <span className="mx-2 text-secondary">{capitalize(part)}</span>
            </span>
          ))}
        </div>
        <div className="d-flex align-items-center">
          <MessageOutlined />
          <p className="mb-0 mx-2">support</p>
        </div>
      </div>
    </>
  );
};

export default Breadcrumb;
