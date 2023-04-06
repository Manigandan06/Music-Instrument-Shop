import { useState } from "react";
import "./App.css";
import StateAndProp from "./StateAndProp";
import Second from "./Second";

function App() {
  const [first, setfirst] = useState("Welcome");
  const [name, setname] = useState("Mani");
  const [email, setemail] = useState("mani@gamil.com");
  const [phone, setphone] = useState(9483947391);
  const [age, setage] = useState(20);
  return (
    <div className="App">
      <h1>Hello</h1>
      {name}
      <button onClick={() => setfirst("this is React Class 2 ")}>
        My state change
      </button>

      <StateAndProp
        first={first}
        name={name}
        email={email}
        phone={phone}
        age={age}
      />
      <Second name={name} email={email} phone={phone} />
    </div>
  );
}

export default App;
