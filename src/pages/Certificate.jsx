import Breadcrumb from "../components/Breadcrumb";
import CustomTable from "../components/CustomTable";

const Certificate = () => {
  const dataSource = [
    {
      key: "1",
      "s-no": 1,
      "invoice-no": "INV-001",
      "certificate-serial-no": "CSN-001",
      "vehicle-no": "ABC123",
      "department-copy": "Yes",
      "created-date": "2023-10-15",
      action: "View",
    },
    {
      key: "2",
      "s-no": 2,
      "invoice-no": "INV-002",
      "certificate-serial-no": "CSN-002",
      "vehicle-no": "XYZ789",
      "department-copy": "No",
      "created-date": "2023-09-28",
      action: "Edit",
    },
    {
      key: "3",
      "s-no": 3,
      "invoice-no": "INV-003",
      "certificate-serial-no": "CSN-003",
      "vehicle-no": "PQR456",
      "department-copy": "Yes",
      "created-date": "2023-11-05",
      action: "View",
    },
    {
      key: "4",
      "s-no": 4,
      "invoice-no": "INV-001",
      "certificate-serial-no": "CSN-001",
      "vehicle-no": "ABC123",
      "department-copy": "Yes",
      "created-date": "2023-10-15",
      action: "View",
    },
    {
      key: "5",
      "s-no": 5,
      "invoice-no": "INV-002",
      "certificate-serial-no": "CSN-002",
      "vehicle-no": "XYZ789",
      "department-copy": "No",
      "created-date": "2023-09-28",
      action: "Edit",
    },
    {
      key: "6",
      "s-no": 6,
      "invoice-no": "INV-003",
      "certificate-serial-no": "CSN-003",
      "vehicle-no": "PQR456",
      "department-copy": "Yes",
      "created-date": "2023-11-05",
      action: "View",
    },
    {
      key: "7",
      "s-no": 7,
      "invoice-no": "INV-001",
      "certificate-serial-no": "CSN-001",
      "vehicle-no": "ABC123",
      "department-copy": "Yes",
      "created-date": "2023-10-15",
      action: "View",
    },
    {
      key: "8",
      "s-no": 8,
      "invoice-no": "INV-002",
      "certificate-serial-no": "CSN-002",
      "vehicle-no": "XYZ789",
      "department-copy": "No",
      "created-date": "2023-09-28",
      action: "Edit",
    },
    {
      key: "9",
      "s-no": 9,
      "invoice-no": "INV-003",
      "certificate-serial-no": "CSN-003",
      "vehicle-no": "PQR456",
      "department-copy": "Yes",
      "created-date": "2023-11-05",
      action: "View",
    },
    {
      key: "10",
      "s-no": 10,
      "invoice-no": "INV-001",
      "certificate-serial-no": "CSN-001",
      "vehicle-no": "ABC123",
      "department-copy": "Yes",
      "created-date": "2023-10-15",
      action: "View",
    },
    {
      key: "11",
      "s-no": 11,
      "invoice-no": "INV-002",
      "certificate-serial-no": "CSN-002",
      "vehicle-no": "XYZ789",
      "department-copy": "No",
      "created-date": "2023-09-28",
      action: "Edit",
    },
    {
      key: "12",
      "s-no": 12,
      "invoice-no": "INV-003",
      "certificate-serial-no": "CSN-003",
      "vehicle-no": "PQR456",
      "department-copy": "Yes",
      "created-date": "2023-11-05",
      action: "View",
    },
    {
      key: "13",
      "s-no": 13,
      "invoice-no": "INV-001",
      "certificate-serial-no": "CSN-001",
      "vehicle-no": "ABC123",
      "department-copy": "Yes",
      "created-date": "2023-10-15",
      action: "View",
    },
    {
      key: "14",
      "s-no": 14,
      "invoice-no": "INV-002",
      "certificate-serial-no": "CSN-002",
      "vehicle-no": "XYZ789",
      "department-copy": "No",
      "created-date": "2023-09-28",
      action: "Edit",
    },
    {
      key: "15",
      "s-no": 15,
      "invoice-no": "INV-003",
      "certificate-serial-no": "CSN-003",
      "vehicle-no": "PQR456",
      "department-copy": "Yes",
      "created-date": "2023-11-05",
      action: "View",
    },
  ];

  const columns = [
    {
      title: "S.no",
      dataIndex: "s-no",
      key: "s-no",
    },
    {
      title: "Invoice No",
      dataIndex: "invoice-no",
      key: "invoice-no",
      searchable: true,
    },
    {
      title: "Certificate Serial No",
      dataIndex: "certificate-serial-no",
      key: "certificate-serial-no",
      searchable: true,
    },
    {
      title: "Vehicle No",
      dataIndex: "vehicle-no",
      key: "vehicle-no",
      searchable: true,
    },
    {
      title: "Department Copy",
      dataIndex: "department-copy",
      key: "department-copy",
    },
    {
      title: "Created Date",
      dataIndex: "created-date",
      key: "created-date",
      searchable: true,
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
    },
  ];

  return (
    <div>
      <Breadcrumb />
      <div className="container">
        <div className="bg-white p-3 my-4">
          <div className="row my-3 p-2">
            <h4>View Certificate Table</h4>
          </div>
          <CustomTable dataSource={dataSource} columns={columns} />
        </div>
      </div>
    </div>
  );
};

export default Certificate;
