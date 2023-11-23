import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AppLayout from "./AppLayout";
import ErrorPage from "./pages/ErrorPage";
import Auth from "./pages/Auth";
import ViewStock from "./pages/ViewStock";
import Certificate from "./pages/Certificate";
import ReportDealer from './pages/ReportDealer';
import PUCC from "./pages/PUCC";
import ManageLocation from './pages/ManageLocation'
import RemoveLocation from "./pages/RemoveLocation";

function App() {
  return (
    <div id="main">
    <Routes>
      <Route path="/" element={<Auth/>}/>
      <Route path="*" element={<ErrorPage/>}/>
      <Route path="/dealer" element={<AppLayout />} >
        <Route path="/dealer/dashboard" element={<Home />} />
        <Route path="/dealer/fitment-report" element={<ReportDealer/>}/>
        <Route path="/dealer/create-certificate" element={<PUCC/>}/>
        <Route path="/dealer/certificate" element={<Certificate/>}/>
        <Route path="/dealer/view-stock" element={<ViewStock/>}/>
        <Route path="/dealer/manage-location" element={<ManageLocation/>}/>
        <Route path="/dealer/delete-location" element={<RemoveLocation/>}/>
      </Route>
      <Route path="/distributer" element={<AppLayout />} >
        <Route index element={<Home />} />
      </Route>
    </Routes>
    </div> );
}

export default App;
