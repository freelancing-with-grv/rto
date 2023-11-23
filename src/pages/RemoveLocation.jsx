import Breadcrumb from "../components/Breadcrumb"
import CustomTable from "../components/CustomTable";


const RemoveLocation = () => {
  const dataSource = [
    {
      key: "1",
      "s-no": 1,
      state: "Karnataka",
      district: "Bangalore",
      "rto-code": "KA-02",
      date: "2023-10-15",
      action: "View",
    },
    {
      key: "2",
      "s-no": 2,
      state: "Maharashtra",
      district: "Mumbai",
      "rto-code": "MH-01",
      date: "2023-09-20",
      action: "Edit",
    },
    {
      key: "3",
      "s-no": 3,
      state: "Tamil Nadu",
      district: "Chennai",
      "rto-code": "TN-07",
      date: "2023-11-05",
      action: "Delete",
    },
  ];

  const columns = [
    {
      title: "S.no",
      dataIndex: "s-no",
      key: "s-no",
    },
    {
      title: "State",
      dataIndex: "state",
      key: "state",
      searchable: true,
    },
    {
      title: "District",
      dataIndex: "district",
      key: "district",
      searchable:true,
    },
    {
      title: "RTO COde",
      dataIndex: "rto-code",
      key: "rto-code",
      searchable: true,
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      
    },{
      title: "Action",
      dataIndex: "action",
      key: "action",
      
    },
  ];
  return (
    <div>
     <Breadcrumb/>
     <div className="container">
        <div className="bg-white p-3 my-4">
          <div className="row my-3 p-2">
            <h4>Manage Location ( 3 )</h4>
          </div>
          <CustomTable dataSource={dataSource} columns={columns} />
        </div>
      </div>
    </div>
  )
}

export default RemoveLocation
