import { useState } from "react";
import "./App.css";
import { Button } from "@mui/material";
function App() {
  const [bgColor, setBgColor] = useState("bg-light");
  const changeColor = (color) => {
    setBgColor(color);
  };
  return (
    <>
      <div
        style={{ width: "100%", height: "100vh", paddingTop: "90px" }}
        className="bg-dark"
      >
        <h1 className="text-light text-center pb-5 fw-bold">
          Background Colorchanger
        </h1>
        <div
          className={`${bgColor} container w-50 rounded h-75 d-flex justify-content-center align-items-center`}
        >
          <Button
            className="m-3 bg-warning text-dark"
            onClick={() => changeColor("bg-warning")}
            variant="contained"
          >
            Yellow
          </Button>
          <Button
            className="m-3 bg-light text-dark"
            onClick={() => changeColor("bg-light")}
            variant="contained"
          >
            Black
          </Button>
          <Button
            className="m-3 bg-primary text-dark"
            onClick={() => changeColor("bg-primary")}
            variant="contained"
          >
            Blue
          </Button>
          <Button
            className="m-3 bg-danger text-dark"
            onClick={() => changeColor("bg-danger")}
            variant="contained"
          >
            Red
          </Button>
          <Button
            className="m-3 bg-success text-dark"
            onClick={() => changeColor("bg-success")}
            variant="contained"
          >
            Green
          </Button>
        </div>
      </div>
    </>
  );
}

export default App;
