import "./App.css";
import { EmployeeTable } from "./EmployeeTable";
import Menu from "./Menu";
function App() {
  return (
    <>
      <div className="title">
        <a href="/">
          <h1>Employee interface</h1>
        </a>
      </div>
      <Menu />
      <div className="footer">Mykolas Sanda</div>
    </>
  );
}
export default App;
