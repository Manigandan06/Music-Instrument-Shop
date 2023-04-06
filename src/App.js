import { useState } from "react";
import "./App.css";
import StateAndProp from "./StateAndProp";
import Second from "./Second";

function App() {
  const [name, setname] = useState("Mani");
  const [email, setemail] = useState("mani@gamil.com");
  return (
    <div className="App">
      <h1>Hello</h1>
      {name}
      <StateAndProp name={name} email={email} />
      <Second name={name} email={email} />
    </div>
  );
}

export default App;
