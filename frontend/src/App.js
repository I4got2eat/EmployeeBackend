import "./App.css";
import { EmployeeTable } from "./EmployeeTable";
import { Upload } from "./Upload";
function App() {
  

  

  return (
    <>
      <div className="title">
        <a href="/">
          <h1>Employee uploader</h1>
        </a>
      </div>
      <Upload />
    </>
  );
}
export default App;
