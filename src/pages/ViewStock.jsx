import Breadcrumb from "../components/Breadcrumb"
import CustomTable from "../components/CustomTable";


const ViewStock = () => {
  const dataSource = [
    {
      key: "1",
      "s-no": 1,
      "user-id": "USR-001",
      stock: "ABC123",
      status: "Approved",
      "date-of-allotment": "2023-10-15",
    },
    {
      key: "2",
      "s-no": 2,
      "user-id": "USR-002",
      stock: "XYZ789",
      status: "Pending",
      "date-of-allotment": "2023-09-20",
    },
    {
      key: "3",
      "s-no": 3,
      "user-id": "USR-003",
      stock: "DEF456",
      status: "Approved",
      "date-of-allotment": "2023-11-05",
    },
  ];

  const columns = [
    {
      title: "S.no",
      dataIndex: "s-no",
      key: "s-no",
    },
    {
      title: "User Id",
      dataIndex: "user-id",
      key: "user-id",
      searchable: true,
    },
    {
      title: "Stock",
      dataIndex: "stock",
      key: "stock",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      searchable: true,
    },
    {
      title: "Date of Allotment",
      dataIndex: "date-of-allotment",
      key: "date-of-allotment",
      searchable:true,
    },
  ];
  return (
    <div>
      <Breadcrumb/>
      
      <div className="container">
        <div className="bg-white p-3 my-4">
          <div className="row my-3 p-2">
            <h4>View Remaining Stock Table</h4>
          </div>
          <CustomTable dataSource={dataSource} columns={columns} />
        </div>
      </div>
    </div>
  )
}

export default ViewStock
