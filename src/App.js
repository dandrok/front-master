import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Logo</h1>
      <section>
        <Pet name="Kiara" animal="Dog" breed="Havanese" />
        <Pet name="Atos" animal="Bird" breed="Parrot" />
        <Pet name="Kaja" animal="Dog" breed="Terrier" />
      </section>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
