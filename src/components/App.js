import { useState } from "react";
import React from "react";
import "./../styles/App.css";

const App = () => {
  let [name, setName] = useState("");
  return (
    <div>
      {/* Do not remove the main div */}

      <h2>Enter your name:</h2>
      <input
        type="text"
        placeholder="Enter your name..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {name && <p>Hello {name}!</p>}
    </div>
  );
};

export default App;
