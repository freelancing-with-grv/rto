import Breadcrumb from "../components/Breadcrumb";
import CustomForm from "../components/CustomForm";

const ManageLocation = () => {
  const dropdownOptions = [
    { value: "1", label: "Option 1" },
    { value: "2", label: "Option 2" },
  ];

  const handleFormSubmit = (formData) => {
    console.log("Form Data:", formData);
  };

  const handleDropdownChange = (value) => {
    console.log("Selected Dropdown:", value);
  };
  return (
    <div>
      <Breadcrumb />
      <div className="container">
        <div className="bg-white p-3 my-4">
          <div className="row my-3 p-2">
            <h4>Add State</h4>
            <p className="my-2 py-2 border-bottom">ADD STATE & DISTRICT HERE</p>
          </div>
          <div className="container">
            <CustomForm
              dropdownOptions={dropdownOptions}
              onSubmit={handleFormSubmit}
              onDropdownChange={handleDropdownChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageLocation;
