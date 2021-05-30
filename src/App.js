import React from "react";
import ReactDOM from "react-dom";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div>
      <h1>Logo</h1>
      <section>
        <SearchParams />
      </section>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
