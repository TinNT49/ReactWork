import logo from "./logo.svg";
import "./App.css";
import SinhVien from "./DataBinding/SinhVien";
import NhanVien from "./DataBinding/NhanVien";
import Event from "./DataBinding/Event";

function App() {
  return (
    <div className="container">
      {/* <SinhVien /> */}
      {/* <NhanVien /> */}
      <Event />
    </div>
  );
}

export default App;
