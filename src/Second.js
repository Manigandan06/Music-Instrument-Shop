import React from "react";

export default function Second({ name, email, phone }) {
  return (
    <div>
      <h2>
        Second = {name}, {email}, {phone}
      </h2>
    </div>
  );
}
