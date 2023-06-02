import "./App.css";
import { EmployeeTable } from "./EmployeeTable";
import Upload from "./Menu";
function App() {
  return (
    <>
      <div className="title">
        <a href="/">
          <h1>Employee interface</h1>
        </a>
      </div>
      <Upload />
      <div
        style={{
          textAlign: "center",
          position: "fixed",
          padding: "10px 10px 0px 10px",
          bottom: 0,
          width: "100%",
          height: "40px",
          background: "black",
          color: "white",
        }}
      >
        Mykolas Sanda
      </div>
    </>
  );
}
export default App;
