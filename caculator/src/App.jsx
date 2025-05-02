import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";

function App() {
  let buttons = [
    "AC",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "9",
    "0",
    "=",
    ".",
    "⌫",
  ];
  let symbols = ["+", "-", "*", "/"];
  let funcs = ["AC", "=", "⌫"];
  const [calval, setcalval] = useState("");
  function working(btntxt) {
    if (btntxt === "AC") {
      setcalval("");
    } else if (btntxt === "=") {
      let ans = calval;
      setcalval(eval(ans));
    } else if (btntxt === "⌫") {
      let a = calval.slice(0, calval.length - 1);
      setcalval(a);
    } else {
      if (
        symbols.includes(calval[calval.length - 1]) &&
        symbols.includes(btntxt)
      ) {
        let an = calval.replace(calval[calval.length - 1], btntxt);
        setcalval(an);
      } else {
        setcalval(calval.toString() + btntxt);
      }
    }
  }

  return (
    <>
      <center>
        <h1>CALCULATOR</h1>
      </center>
      <div className="container my-5">
        <div className="displaybox my-3">{calval}</div>
        <div className="buttons">
          {buttons.map((item) =>
            !(symbols.includes(item)) && !(funcs.includes(item)) ? (
              // {}
              <center>
                <button onClick={() => working(item)} className="c1">
                  <b>{item}</b>
                </button>
              </center>
            ) : (
              <center>
                <button onClick={() => working(item)} className="c1">
                  <b>{item}</b>
                </button>
              </center>
            )
          )}
        </div>
      </div>
    </>
  );
}

export default App;
