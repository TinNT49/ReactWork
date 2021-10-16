import logo from "./logo.svg";
import "./App.css";
import SinhVien from "./DataBinding/SinhVien";
import NhanVien from "./DataBinding/NhanVien";
import Event from "./DataBinding/Event";
import DemoIf from "./CauTrucDieuKhien_Rerender/DemoIf";

function App() {
  return (
    <div className="container">
      {/* <SinhVien /> */}
      {/* <NhanVien /> */}
      {/* <Event /> */}
      <DemoIf />
    </div>
  );
}

export default App;
