import React from "react";

export default function StateAndProp({ name, email, phone, age, first }) {
  return (
    <div>
      <h1>
        {first}
        <br />
        Name = {name}, {email}, {phone}, {age}
      </h1>
    </div>
  );
}
