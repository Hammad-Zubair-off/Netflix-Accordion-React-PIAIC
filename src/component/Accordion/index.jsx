import React, { useState } from "react";
import data from "./data";
import "./style.css";

export default function Accordion() {
  const [selected, setSelected] = useState(data.map(() => false));
  const [multipleselection, setmultipleselction] = useState(false);

  function handlesingleselection(index) {
    let newSelected = data.map(() => false);
    newSelected[index - 1] = !selected[index - 1];
    setSelected(newSelected);
  }

  function handlemultipleselection(index) {
    let newSelected = [...selected];
    newSelected[index - 1] = !selected[index - 1];
    setSelected(newSelected);
  }

  function isSelected(index) {
    return selected[index - 1];
  }
  function togglemultipleselected() {
    setmultipleselction(!multipleselection);
  }

  return (
    <>
      <button className={multipleselection?"toggle_active":"togglebutton"} onClick={togglemultipleselected}>
        {multipleselection
          ? " Multiple Selection Active"
          : "Enable Multiple Selection"}
      </button>
      <div className="wrapper">
        <div className="Accordion">
          {data && data.length > 0 ? (
            data.map((item) => (
              <div key={item.id} className="item">
                <div
                  className="title"
                  onClick={() =>
                    multipleselection
                      ? handlemultipleselection(item.id)
                      : handlesingleselection(item.id)
                  }
                >
                  {item.question}
                  {isSelected(item.id) ? <span>❌</span> : <span>+</span>}
                </div>

                {isSelected(item.id) ? (
                  <div className="description">{item.answer}</div>
                ) : (
                  "  "
                )}
                <br />
              </div>
            ))
          ) : (
            <div>No data found</div>
          )}
        </div>
      </div>
    </>
  );
}
