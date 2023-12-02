import React from "react";

const Solution = () => {
  let students = ["Niki", "Vidhi", "Anee", "Zalak", "Anvi"];

  return (
    <div>
      <h1>Student List:</h1>

      {students.map((data) => (
        <h1>{data}</h1>
      ))}
    </div>
  );
};

export default Solution;
