import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import langs from "./langs";

function App() {
  const lang = useSelector(state => state.lang); //selectionne la partie du store
  console.log(langs[lang]);
  const dispatch = useDispatch();
  return (
    <div>
      {langs[lang].hello}
      <button
        onClick={() =>
          dispatch({
            type: "CHANGE_LANG",
            data: lang === "fr" ? "en" : "fr"
          })
        }
      >
        Toogle
      </button>
      <select
        onChange={e =>
          dispatch({
            type: "CHANGE_LANG",
            data: e.target.value
          })
        }
      >
        {Object.keys(langs).map(k => (
          <option value={k} selected={lang === { k }}>
            {" "}
            {k}
          </option>
        ))}
      </select>
    </div>
  );
}

export default App;
